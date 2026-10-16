const CACHE='centric-v8',SHARE='centric-share';
const ASSETS=['./','app.js','more.js','fix.js','manifest.json','icon-192.png','icon-512.png','icon-maskable-512.png','wa.png'];
const TXT=/\.(js|html|json|css)$|\/$/;
const ROOT=new URL('./',self.registration.scope).href;
/* Cloudflare بيحوّل index.html لـ / ، والرد المحوَّل ميتحفظش زي ما هو */
const clean=res=>res&&res.redirected?res.blob().then(b=>new Response(b,{status:res.status,statusText:res.statusText,headers:res.headers})):Promise.resolve(res);

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(ASSETS.map(u=>fetch(new Request(u,{cache:'reload'})).then(clean).then(res=>{if(res.ok&&res.type==='basic')return c.put(new URL(u,self.registration.scope).href,res)}).catch(()=>{})))).then(()=>self.skipWaiting()));
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
    let res=await fetch(r.url,{cache:'no-store'});
    if(r.mode==='navigate'&&(res.status===401||res.status===403)){await caches.delete(CACHE);return tell('locked')}
    if(!res.ok||res.type!=='basic')return;
    res=await clean(res);
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
    if(res.ok&&res.type==='basic')clean(res.clone()).then(cp=>caches.open(CACHE).then(c=>c.put(key,cp))).catch(()=>{});
    return res;
  }catch(e){
    if(r.mode==='navigate'){const h=await caches.match(ROOT);if(h)return h}
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

// البرنامج: النسخة المحفوظة الأول والتحديث في الخلفية
// أي صفحة تانية (زي rescue.html): من النت على طول، من غير ما تتبدل بالبرنامج
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(u.origin!==location.origin)return;
  if(r.method==='POST'&&u.pathname.endsWith('/share-target')){e.respondWith(shareIn(r));return}
  if(r.method!=='GET'||/rescue/.test(u.pathname))return;
  const nav=r.mode==='navigate',root=/\/(index\.html)?$/.test(u.pathname);
  if(nav&&!root)return;
  const key=nav?ROOT:u.origin+u.pathname,share=nav&&u.searchParams.has('share');
  e.respondWith((async()=>{
    const hit=await caches.match(key);
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