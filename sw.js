const CACHE='centric-v10',SHARE='centric-share';
const ASSETS=['./','app.js','more.js','fix.js','manifest.json','icon-192.png','icon-512.png','icon-maskable-512.png','wa.png'];
const TXT=/\.(js|html|json|css)$|\/$/;
const ROOT=new URL('./',self.registration.scope).href;
/* لو pages.dev مش واصل، بنجيب نفس الملفات من نسخة GitHub Pages */
const MIRROR='https://ahmed-fawzydl.github.io/masrofi/';
/* Cloudflare بيحوّل index.html لـ / ، والرد المحوَّل ميتحفظش ومينفعش يترجع للصفحة زي ما هو */
const clean=res=>res&&res.redirected?res.blob().then(b=>new Response(b,{status:res.status,statusText:res.statusText,headers:res.headers})):Promise.resolve(res);
const tfetch=(u,o,ms)=>{const c=new AbortController(),t=setTimeout(()=>c.abort(),ms||10000);return fetch(u,Object.assign({},o,{signal:c.signal})).finally(()=>clearTimeout(t))};
async function mirror(key){
  const p=new URL(key).pathname.replace(/^\//,'');
  if(!/\.(js|json|png|jpe?g|webp|svg)$/i.test(p)||p==='sw.js')throw new Error('no mirror');
  const m=await tfetch(MIRROR+p+'?t='+Date.now(),{cache:'no-store',mode:'cors'},15000);
  if(!m.ok)throw new Error('mirror '+m.status);
  const b=await m.blob();
  return new Response(b,{status:200,headers:{'Content-Type':m.headers.get('Content-Type')||'application/octet-stream'}});
}

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

/* الكود (html / js / json): من النت الأول دايماً.
   لو النت مردش خلال ثواني: النسخة المحفوظة، ولو مفيش: نسخة GitHub */
async function fresh(r,key){
  const nav=r.mode==='navigate';
  let res=null;
  try{res=await tfetch(r.url,{cache:'no-store'},6000)}catch(e){}
  if(res){
    if(nav&&(res.status===401||res.status===403)){await caches.delete(CACHE);tell('locked');return clean(res)}
    if(res.ok&&res.type==='basic'){
      const out=await clean(res);
      try{const c=await caches.open(CACHE);await c.put(key,out.clone())}catch(e){}
      return out;
    }
  }
  const hit=await caches.match(key);if(hit)return hit;
  if(res)return clean(res);
  if(nav)return Response.error();
  try{const m=await mirror(key);caches.open(CACHE).then(c=>c.put(key,m.clone())).catch(()=>{});return m}catch(e){return Response.error()}
}

/* الصور: المحفوظة الأول، والجديدة في الخلفية */
async function refresh(r,key){
  try{
    const res=await tfetch(r.url,{cache:'no-store'},10000);
    if(!res.ok||res.type!=='basic')return;
    const c=await caches.open(CACHE);await c.put(key,await clean(res));
  }catch(e){}
}
async function fromNet(r,key){
  try{
    const res=await tfetch(r,{},15000);
    if(res.ok&&res.type==='basic')clean(res.clone()).then(cp=>caches.open(CACHE).then(c=>c.put(key,cp))).catch(()=>{});
    return res;
  }catch(e){
    try{const m=await mirror(key);caches.open(CACHE).then(c=>c.put(key,m.clone())).catch(()=>{});return m}catch(e2){return Response.error()}
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

self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(u.origin!==location.origin)return;
  if(r.method==='POST'&&u.pathname.endsWith('/share-target')){e.respondWith(shareIn(r));return}
  if(r.method!=='GET'||/rescue/.test(u.pathname)||/\/sw\.js$/.test(u.pathname))return;
  const nav=r.mode==='navigate',root=/\/(index\.html)?$/.test(u.pathname);
  if(nav&&!root)return;
  const key=nav?ROOT:u.origin+u.pathname;
  e.respondWith((async()=>{
    if(nav||TXT.test(u.pathname))return fresh(r,key);
    const hit=await caches.match(key);
    if(hit){e.waitUntil(refresh(r,key));return hit}
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