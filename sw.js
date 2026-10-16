/* Centric · sw.js مؤقت: بيلغي نفسه لحد ما نصلّح الأصلي */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{
  await self.registration.unregister();
  const cs=await self.clients.matchAll({type:'window'});
  cs.forEach(c=>{try{c.navigate(c.url)}catch(err){}});
})()));