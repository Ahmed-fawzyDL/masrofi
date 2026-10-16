const CACHE='centric-v7',SHARE='centric-share';
const ASSETS=['./','index.html','app.js','more.js','fix.js','manifest.json','icon-192.png','icon-512.png','icon-maskable-512.png','wa.png'];
const TXT=/\.(js|html|json|css)$|\/$/;

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(ASSETS.map(u=>c.add(new Request(u,{cache:'reload'})).catch(()=>{})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!==SHARE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

async function tell(type){
  const cs=await self.clients.matchAll({type:'window',includeUncontrolled:true});
  cs.forEach(c=>c.postMessage({type}));
}

// بيجيب النسخة الجديدة في الخلفية، ولو اتغيرت بيقول للبرنامج
async function refresh(r,key,old){
  try{
    const res=await fetch(r.url,{cache:'no-store'});
    if(r.mode==='navigate'&&(res.status===401||res.status===403)){await caches.delete(CACHE);return tell('locked')}
    if(!res.ok||res.type!=='basic')return;
    const c=await caches.open(CACHE);
    if(old&&TXT.test(new URL(key).pathname)){
      const[a,b]=await Promise.all([old.text(),res.clone().text()]);
      await c.put(key,res);
      if(a!==b)tell('update');
    }else await c.put(key,res);
  }catch(e){}
}

async function fromNet(r,key){
  try{
    const res=await fetch(r);
    if(res.ok&&res.type==='basic'){const cp=res.clone();caches.open(CACHE).then(c=>c.put(key,cp)).catch(()=>{})}
    return res;
  }catch(e){
    if(r.mode==='navigate'){const h=await caches.match('index.html');if(h)return h}
    return Response.error();
  }
}

// الإيصال اللي جاي من Share (إنستاباي وغيره)
async function shareIn(req){
  try{
    const fd=await req.formData(),fs=fd.getAll('files').filter(f=>f&&f.size),c=await caches.open(SHARE),t=Date.now();
    await Promise.all(fs.map((f,i)=>c.put(new Request('./__share/'+t+'-'+i),new Response(f,{headers:{'Content-Type':f.type||'application/octet-stream','X-Name':encodeURIComponent(f.name||'receipt')}}))));
  }catch(e){}
  return Response.redirect(new URL('./?share=1',self.registration.scope).href,303);
}

// النسخة المحفوظة الأول (فتح فوري)، والتحديث في الخلفية
// اللي جاي من Share بيفتح من النسخة المحفوظة بس، من غير تشييك ولا reload وهو بيحمّل
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(u.origin!==location.origin)return;
  if(r.method==='POST'&&u.pathname.endsWith('/share-target')){e.respondWith(shareIn(r));return}
  if(r.method!=='GET')return;
  const key=u.origin+u.pathname,share=r.mode==='navigate'&&u.searchParams.has('share');
  e.respondWith((async()=>{
    const hit=await caches.match(key)||(r.mode==='navigate'?await caches.match(u.origin+u.pathname.replace(/[^/]*$/,'')):null);
    if(hit){if(!share)e.waitUntil(refresh(r,key,hit.clone()));return hit}
    return fromNet(r,key);
  })());
});

// لما تدوس على الإشعار يفتح التطبيق
self.addEventListener('notificationclick',e=>{
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{
    for(const c of cs){if('focus' in c)return c.focus()}
    return self.clients.openWindow('./');
  }));
});