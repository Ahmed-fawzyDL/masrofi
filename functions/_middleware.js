/* ========== AH License · الحارس على Cloudflare ========== */
/* محدش بيوصله أي ملف من التطبيق غير لما يكون معاه رخصة صح */
const PUB='eyJrdHkiOiJFQyIsImNydiI6IlAtMjU2IiwieCI6InFzZ192WkhvczdwYzFnMVdWWWR4NllJNlpKaVFyV2ZGeGozbG1lcmlqMWMiLCJ5IjoiaTdRd0Q5VTN5dmNiYm1acGNGQkJhX1VDZXlucVpVT09yNERIN2VRUWpoYyJ9';
const APP='centric',NAME='Centric',OWNER='201285258400';
const OPEN=['/manifest.json','/icon-192.png','/icon-512.png','/icon-maskable-512.png','/favicon.ico'];
const te=new TextEncoder(),td=new TextDecoder();
const dec=s=>{const b=s.replace(/-/g,'+').replace(/_/g,'/');return Uint8Array.from(atob(b+'='.repeat((4-b.length%4)%4)),c=>c.charCodeAt(0))};
let KEY=null;
async function signed(code){try{
  code=String(code||'').trim();const i=code.indexOf('.');if(i<1)return null;const p=code.slice(0,i),s=code.slice(i+1);
  KEY=KEY||await crypto.subtle.importKey('jwk',JSON.parse(atob(PUB)),{name:'ECDSA',namedCurve:'P-256'},false,['verify']);
  if(!await crypto.subtle.verify({name:'ECDSA',hash:'SHA-256'},KEY,dec(s),te.encode(p)))return null;
  return td.decode(dec(p));
}catch(e){return null}}
async function check(code,dev,env){
  if(!code)return{err:'none'};
  const t=await signed(code);if(!t)return{err:'bad'};
  const[a,d,e]=t.split('|'),exp=+e||0;
  if(!(a==='*'||a===APP))return{err:'app'};
  if(!dev||d!==dev)return{err:'dev'};
  if(exp&&Date.now()>exp)return{err:'exp'};
  if(env.LIC&&await env.LIC.get('rv:'+d))return{err:'rv'};
  return{ok:1,a,d,e:exp,code};
}
function ck(req){const o={};(req.headers.get('Cookie')||'').split(/;\s*/).forEach(p=>{const i=p.indexOf('=');if(i>0)o[p.slice(0,i)]=decodeURIComponent(p.slice(i+1))});return o}
const J=(o,s,h)=>new Response(JSON.stringify(o),{status:s||200,headers:{'content-type':'application/json','access-control-allow-origin':'*','cache-control':'no-store',...(h||{})}});
export async function onRequest({request:req,env,next}){
  const url=new URL(req.url),p=url.pathname;
  if(p==='/__lic/activate'&&req.method==='POST'){
    let b={};try{b=JSON.parse(await req.text())}catch(e){}
    const v=await check(b.code,b.dev,env);
    if(!v.ok)return J({ok:false,err:v.err},400);
    const age=v.e?Math.max(60,Math.floor((v.e-Date.now())/1000)):315360000;
    return J({ok:true},200,{'set-cookie':`ahlic=${encodeURIComponent(v.code)}; Max-Age=${age}; Path=/; Secure; SameSite=Lax; HttpOnly`});
  }
  if(p==='/__lic/admin'&&req.method==='POST'){
    const t=await signed(await req.text());if(!t)return J({ok:false,err:'sig'},403);
    const[act,d,ts]=t.split('|');if(Math.abs(Date.now()-(+ts||0))>600000)return J({ok:false,err:'time'},400);
    if(!env.LIC)return J({ok:false,err:'kv'},500);
    if(act==='rv')await env.LIC.put('rv:'+d,String(Date.now()));else if(act==='ur')await env.LIC.delete('rv:'+d);else return J({ok:false,err:'act'},400);
    return J({ok:true});
  }
  if(OPEN.includes(p))return next();
  const c=ck(req),v=await check(c.ahlic,c.ahdev,env);
  if(v.ok)return next();
  const nav=p.endsWith('/')||p.endsWith('.html')||(req.headers.get('Accept')||'').includes('text/html');
  if(nav)return new Response(gate(v.err),{status:401,headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store'}});
  return new Response('locked',{status:403,headers:{'cache-control':'no-store'}});
}
function gate(err){
  const M={none:['🔒',NAME+' محتاج تفعيل','ابعت رقم الجهاز ده، وهيوصلك كود التفعيل.'],bad:['⚠️','الكود مش صحيح','اتأكد إنك نسخت الكود كامل.'],app:['⚠️','الكود ده لتطبيق تاني','ابعت رقم الجهاز عشان توصلك الرخصة الصح.'],dev:['📱','الكود ده لموبايل تاني','ابعت رقم الجهاز ده عشان توصلك رخصة ليه.'],exp:['⌛','الرخصة خلصت','ابعت رقم الجهاز عشان تجددها.'],rv:['⛔','التطبيق اتوقف على الموبايل ده','كلّم صاحب التطبيق.']};
  const[ic,t,m]=M[err]||M.none;
  return `<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#0f172a"><title>${NAME}</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;800&display=swap" rel="stylesheet">
<style>*{box-sizing:border-box}body{margin:0;min-height:100vh;background:#0f172a;color:#f1f5f9;font-family:Cairo,system-ui,sans-serif;display:flex;align-items:center;justify-content:center;padding:20px}
.bx{width:min(100%,420px);background:#1e293b;border:1px solid #334155;border-radius:22px;padding:24px 20px;text-align:center}.ic{font-size:44px}h2{margin:6px 0 4px;font-size:21px}p{margin:6px 0;color:#94a3b8;font-size:14px;line-height:1.7}
.dev{direction:ltr;font:800 28px ui-monospace,Menlo,monospace;letter-spacing:3px;background:#0f172a;border:1px dashed #475569;border-radius:14px;padding:12px;margin:12px 0}
button{width:100%;border:0;border-radius:14px;padding:13px;font:inherit;font-weight:700;font-size:15px;margin-top:8px;cursor:pointer;color:#fff}.pri{background:#0f766e}.wa{background:#16a34a}.gh{background:#334155}
a{text-decoration:none}textarea{width:100%;min-height:84px;margin-top:12px;border-radius:14px;border:1px solid #475569;background:#0f172a;color:#f1f5f9;padding:10px;font:12px ui-monospace,monospace;direction:ltr}.err{color:#f87171;font-size:13px;min-height:18px;margin-top:6px}</style></head>
<body><div class="bx"><div class="ic">${ic}</div><h2>${t}</h2><p>${m}</p><div class="dev" id="dv">----</div>
<button class="gh" id="cp">📋 انسخ رقم الجهاز</button><a id="wa" target="_blank"><button class="wa">💬 ابعت رقم الجهاز على واتساب</button></a>
<textarea id="in" placeholder="الصق كود التفعيل أو الرابط هنا"></textarea><div class="err" id="er"></div><button class="pri" id="go">🔓 تفعيل</button></div>
<script>
var APP=${JSON.stringify(APP)},ERR=${JSON.stringify(err)};
function devId(){var d=localStorage.getItem('ah-dev');if(!d){var a='ABCDEFGHJKLMNPQRSTUVWXYZ23456789',r=crypto.getRandomValues(new Uint8Array(8));d='';for(var i=0;i<8;i++)d+=a[r[i]%32];d=d.slice(0,4)+'-'+d.slice(4);localStorage.setItem('ah-dev',d)}return d}
var d=devId();document.cookie='ahdev='+d+'; Max-Age=315360000; Path=/; Secure; SameSite=Lax';
document.getElementById('dv').textContent=d;
document.getElementById('wa').href='https://wa.me/${OWNER}?text='+encodeURIComponent('عايز أفعّل ${NAME}\\nرقم الجهاز: '+d);
document.getElementById('cp').onclick=function(){if(navigator.clipboard)navigator.clipboard.writeText(d).then(function(){document.getElementById('cp').textContent='✓ اتنسخ'})};
async function act(code){var er=document.getElementById('er');er.textContent='⏳ ...';
  var m=String(code||'').match(/[?&]lic=([^&\\s]+)/);if(m)code=decodeURIComponent(m[1]);code=String(code||'').trim().replace(/\\s+/g,'');
  try{var r=await fetch('/__lic/activate',{method:'POST',headers:{'content-type':'text/plain'},body:JSON.stringify({code:code,dev:d}),credentials:'same-origin'});var j=await r.json();
    if(j.ok){localStorage.setItem('ah-lic-'+APP,code);localStorage.setItem('ah-just','1');location.replace(location.pathname)}
    else er.textContent={bad:'الكود غلط، اتأكد إنك نسخته كامل',app:'الكود ده لتطبيق تاني',dev:'الكود ده لموبايل تاني',exp:'الكود ده خلص',rv:'الموبايل ده متوقف'}[j.err]||'الكود مش شغال';
  }catch(e){er.textContent='مفيش نت'}}
document.getElementById('go').onclick=function(){act(document.getElementById('in').value)};
var q=new URLSearchParams(location.search).get('lic');
if(q)act(q);else if(ERR==='dev'&&!sessionStorage.getItem('ahr')){sessionStorage.setItem('ahr','1');location.reload()}
</script></body></html>`;
}