/* ========== Centric · app.js ========== */
const APP_VERSION='2.9.0';
const APP_BUILD='12/10/2026 - 03:00 م';
const DEF_NAME='Centric';
const DEV={name:'Eng.Ahmed Fawzy',company:'DeTech Solutions',phones:['01285258400','01060008747']};
const LOGO=(r=true)=>`<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="cbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2dd4bf"/><stop offset=".5" stop-color="#0f766e"/><stop offset="1" stop-color="#1e3a8a"/></linearGradient><radialGradient id="cdt" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#fef3c7"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#d97706"/></radialGradient></defs><rect width="512" height="512" rx="${r?112:0}" fill="url(#cbg)"/><circle cx="256" cy="256" r="160" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="3"/><circle cx="256" cy="256" r="128" fill="none" stroke="#fff" stroke-width="52" stroke-linecap="round" stroke-dasharray="590 1000" transform="rotate(48 256 256)"/><circle cx="256" cy="256" r="74" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="10"/><circle cx="256" cy="256" r="40" fill="url(#cdt)"/></svg>`;

/* ========== النسخة الحقيقية / التجريبية ========== */
const MKEY='masrofi-mode',DKEY='masrofi-demo-v1',DEMO=localStorage.getItem(MKEY)==='demo';
const KEY=DEMO?DKEY:'masrofi-data-v1',BKEY='masrofi-lastbackup',NKEY='masrofi-notified',LKEY='masrofi-lock',BNKEY='masrofi-banner',RKEY='masrofi-read',GKEY='masrofi-gdrive';

/* ========== ثوابت ========== */
const MONTHS=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
const TYPES={cash:'كاش',bank:'حساب بنكي',wallet:'محفظة موبايل',card:'فيزا / كارت',instapay:'إنستاباي'};
const VIA=[['','— اختار —'],['cash','كاش'],['instapay','إنستاباي'],['transfer','تحويل بنكي'],['deposit','إيداع في البنك'],['card','فيزا / كارت'],['wallet','محفظة موبايل'],['cheque','شيك'],['other','أخرى']];
const viaOpts=sel=>VIA.map(([v,l])=>`<option value="${v}" ${v===(sel||'')?'selected':''}>${l}</option>`).join('');
const viaTxt=v=>v?(VIA.find(x=>x[0]===v)||['',''])[1]:'';
const COLORS=['#16a34a','#0f766e','#0891b2','#2563eb','#7c3aed','#db2777','#dc2626','#ea580c','#ca8a04','#475569'];
const PAL=['#0f766e','#2563eb','#db2777','#ea580c','#7c3aed','#ca8a04','#0891b2','#64748b'];
const THEMES={teal:{n:'أخضر',p:'#0f766e'},blue:{n:'أزرق',p:'#1d4ed8'},purple:{n:'بنفسجي',p:'#6d28d9'},rose:{n:'وردي',p:'#be185d'},orange:{n:'برتقالي',p:'#c2410c'},slate:{n:'رمادي',p:'#334155'},dark:{n:'داكن',p:'#14b8a6',dark:true}};
const FONTS={cairo:['Cairo',"'Cairo'",'Cairo:wght@400;600;700;800'],tajawal:['Tajawal',"'Tajawal'",'Tajawal:wght@400;500;700;800'],almarai:['Almarai',"'Almarai'",'Almarai:wght@400;700;800'],plex:['IBM Plex',"'IBM Plex Sans Arabic'",'IBM+Plex+Sans+Arabic:wght@400;500;600;700'],kufi:['Noto Kufi',"'Noto Kufi Arabic'",'Noto+Kufi+Arabic:wght@400;600;700'],system:['خط الجهاز','',null]};
const SIZES=[[.94,'صغير'],[1,'عادي'],[1.07,'كبير'],[1.15,'أكبر'],[1.25,'كبير جداً']];
const LDEF={home:'الرئيسية',col:'التحصيلات',exps:'المصروفات',reports:'التقارير',more:'المزيد',settings:'الإعدادات',exp:'المصروفات',inc:'التحصيلات',expOne:'مصروف',incOne:'تحصيل',net:'الناتج',cur:'الشهر الحالي',fixed:'البنود الثابتة',contracts:'التحصيلات السنوية',inst:'الأقساط',docs:'المرفقات',items:'البنود',pm:'الحسابات',cash:'السحب الكاش',wallet:'الكروت',contacts:'Contacts',buy:'المشتروات'};
const HW=[['cur','الشهر الحالي'],['pending','غير محصّل'],['annual','تحصيلات سنوية قريبة'],['inst','أقساط قريبة'],['renew','كروت شخصية قربت تخلص'],['cash','السحب الكاش'],['topexp','أكبر مصروف'],['recent','آخر العمليات']];
const HWDEF={cur:'show',pending:'show',annual:'show',inst:'auto',renew:'auto',cash:'show',topexp:'show',recent:'hide'};
const MODES=[['show','يظهر'],['auto','تلقائي'],['hide','مخفي']];
const SORTS=[['amt','💰 الأعلى قيمة'],['date','📅 التاريخ'],['name','🔤 الاسم']];
const EVERY=[[1,'شهري'],[2,'كل شهرين'],[3,'كل 3 شهور'],[4,'كل 4 شهور'],[6,'كل 6 شهور'],[12,'سنوي'],[18,'كل سنة ونص'],[24,'كل سنتين']];
const PERIODS=[['m','الشهر الحالي'],['pm','الشهر اللي فات'],['y','السنة الحالية'],['py','السنة اللي فاتت'],['all','كل الفترات'],['custom','فترة مخصصة']];
const NETS={visa:'VISA',master:'Mastercard',meeza:'ميزة',amex:'AMEX',other:'أخرى'};
const REN={id:['🆔','البطاقة الشخصية'],drive:['🪪','رخصة القيادة'],car:['🚗','رخصة العربية'],pass:['🛂','جواز السفر'],ins:['🛡️','كارت التأمين'],club:['🏅','كارنيه النادي'],other:['📄','أخرى']};
const CTK={rest:['🍽️','مطاعم'],shop:['🏪','محلات'],tech:['🛠️','صنايعية'],doc:['🩺','دكاترة'],co:['🏢','شركات'],person:['👤','أشخاص'],other:['📇','أخرى']};
const TESS='https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';

/* ========== أدوات ========== */
const $=s=>document.querySelector(s);
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const pad=n=>String(n).padStart(2,'0');
const ym=(y,m)=>y+'-'+pad(m);
const isoD=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const today=()=>isoD(new Date());
const nowTime=()=>{const d=new Date();return pad(d.getHours())+':'+pad(d.getMinutes())};
const r2=n=>Math.round(n*100)/100;
const num=n=>{n=r2(+n||0);return n%1?n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}):n.toLocaleString('en-US')};
const amtStr=n=>{n=+n||0;return n%1?n.toFixed(2):String(n)};
const fmt=n=>num(n)+' ج.م';
const netTxt=n=>n<0?`${num(-n)} ج.م سالب`:fmt(n);
const netCls=n=>n<0?'exp':'net';
const fd=d=>d.slice(8)+'/'+d.slice(5,7);
const dmy=d=>d?d.slice(8)+'/'+d.slice(5,7)+'/'+d.slice(0,4):'—';
const dmy2=d=>d?d.slice(8)+'/'+d.slice(5,7)+'/'+d.slice(2,4):'—';
const fdate=d=>d?`${+d.slice(8)} ${MONTHS[+d.slice(5,7)-1]} ${d.slice(0,4)}`:'—';
const fmtTime=t=>{if(!t)return '';let[h,m]=t.split(':').map(Number);const s=h>=12?'م':'ص';h=h%12||12;return `${h}:${pad(m)} ${s}`};
const lastDay=key=>{const[y,m]=key.split('-').map(Number);return new Date(y,m,0).getDate()};
const mName=key=>{const[y,m]=key.split('-').map(Number);return MONTHS[m-1]+' '+y};
const mShort=key=>+key.slice(5)+'/'+key.slice(2,4);
const mRange=k=>[k+'-01',k+'-'+pad(lastDay(k))];
const prevKey=key=>{const[y,m]=key.split('-').map(Number);const d=new Date(y,m-2,1);return ym(d.getFullYear(),d.getMonth()+1)};
const mdiff=(a,b)=>{const[ay,am]=a.split('-').map(Number),[by,bm]=b.split('-').map(Number);return(by*12+bm)-(ay*12+am)};
const daysBetween=(a,b)=>Math.round((new Date(a+'T00:00')-new Date(b+'T00:00'))/864e5);
const addMonths=(d,k)=>{const[y,m,day]=d.split('-').map(Number);const t=new Date(y,m-1+k,1);const ld=new Date(t.getFullYear(),t.getMonth()+1,0).getDate();return ym(t.getFullYear(),t.getMonth()+1)+'-'+pad(Math.min(day,ld))};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sm=t=>t?`<small>${t}</small>`:'';
function parseNum(s){s=String(s??'').replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace('٫','.').replace(/[,٬\s]/g,'');return parseFloat(s)}
const latD=s=>String(s||'').replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/٫/g,'.').replace(/٬/g,',');
const normAr=s=>String(s||'').toLowerCase().replace(/[\u064B-\u0652\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').replace(/[^a-z0-9\u0621-\u064A]+/g,' ').trim();
const L=k=>(S&&S.settings&&S.settings.labels&&S.settings.labels[k])||LDEF[k];
const appName=()=>(S&&S.settings&&S.settings.appName)||DEF_NAME;
const hmode=k=>((S.settings&&S.settings.hw)||{})[k]||HWDEF[k];
const wOn=(k,rel)=>{const m=hmode(k);return m==='show'||(m==='auto'&&!!rel)};
const leadA=()=>+S.settings.leadA||15;
const leadI=()=>+S.settings.lead||10;
const leadR=()=>+S.settings.leadR||30;
const actBadge=v=>v!==false?'<span class="badge done">مفعّل</span>':'<span class="badge rej">موقوف</span>';
const short=v=>v>=1e6?r2(v/1e6)+'M':v>=1e3?r2(v/1e3)+'K':String(Math.round(v));
const everyTxt=n=>(EVERY.find(x=>x[0]===+n)||[0,`كل ${n} شهر`])[1];
const leftTxt=l=>l<0?`متأخر ${-l} يوم`:l===0?'النهارده':`باقي ${l} يوم`;
const JS={};function loadJS(src){return JS[src]||(JS[src]=new Promise((res,rej)=>{const s=document.createElement('script');s.src=src;s.onload=res;s.onerror=()=>{delete JS[src];rej(new Error('مش قادر أحمّل '+src))};document.head.appendChild(s)}))}
function strHash(s){let h=5381;for(let i=0;i<s.length;i++)h=(h*33^s.charCodeAt(i))|0;return h}

/* ========== الترتيب ========== */
const sortMode=()=>(S&&S.settings&&S.settings.sort)||'amt';
function sortList(arr,newestFirst){
  const m=sortMode();
  return [...arr].sort((x,y)=>m==='amt'?(y.a||0)-(x.a||0):m==='date'?(newestFirst?String(y.d).localeCompare(String(x.d)):String(x.d).localeCompare(String(y.d))):String(x.n).localeCompare(String(y.n),'ar'));
}
const sortBar=()=>`<div class="sortbar"><span>↕ رتّب حسب:</span><div class="sseg">${SORTS.map(([k,l])=>`<button class="${sortMode()===k?'on':''}" onclick="setSort('${k}')">${l}</button>`).join('')}</div></div>`;
function setSort(k){S.settings.sort=k;save();render()}
function cellVal(td){
  if(!td)return '';
  const s=td.textContent.trim(),dm=s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})/);
  if(dm){const y=dm[3].length===2?'20'+dm[3]:dm[3];return +(y+pad(dm[2])+pad(dm[1]))}
  const ds=s.match(/^(\d{1,2})\/(\d{1,2})$/);if(ds)return +(pad(ds[2])+pad(ds[1]));
  const n=parseNum(s.replace(/[^\d.,٠-٩\-]/g,''));
  if(!isNaN(n)&&/\d/.test(s)&&s.replace(/[\d.,\s٠-٩%+\-]/g,'').length<s.length/2)return /سالب/.test(s)?-n:n;
  return s;
}
document.addEventListener('click',e=>{
  const th=e.target.closest('.ptbl thead th');if(!th||th.classList.contains('rn'))return;
  const table=th.closest('table'),tb=table&&table.tBodies[0];if(!tb||tb.rows.length<2)return;
  const idx=[...th.parentNode.children].indexOf(th),hd=table.querySelector('tr.hd'),hth=hd&&hd.children[idx];
  const dir=hth&&hth.classList.contains('sd')?'asc':'desc';
  table.querySelectorAll('thead th').forEach(x=>x.classList.remove('sa','sd'));if(hth)hth.classList.add(dir==='asc'?'sa':'sd');
  const rows=[...tb.rows].sort((r1,r2)=>{const a=cellVal(r1.children[idx]),b=cellVal(r2.children[idx]);
    const c=typeof a==='number'&&typeof b==='number'?a-b:String(a).localeCompare(String(b),'ar');return dir==='asc'?c:-c});
  rows.forEach((r,i)=>{tb.appendChild(r);const c=r.querySelector('td.rn');if(c)c.textContent=i+1});
});

/* ========== نافذة التأكيد ========== */
function ask(title,msg,o={}){
  return new Promise(res=>{
    const d=$('#dlg'),inp=$('#din'),yes=$('#dyes'),no=$('#dno'),isIn=o.input!=null;
    $('#dic').textContent=o.icon||'❓';$('#dtt').textContent=title;$('#dmsg').textContent=msg||'';$('#dmsg').style.display=msg?'':'none';
    inp.style.display=isIn?'':'none';inp.type=o.pw?'password':'text';inp.value=isIn?String(o.input):'';inp.setAttribute('inputmode',o.num?'decimal':'text');
    yes.textContent=o.ok||'تأكيد';yes.className='btn'+(o.danger?' dz':'');
    no.style.display=o.alert?'none':'';no.textContent=o.cancel||'إلغاء';
    d.classList.add('on');if(isIn)setTimeout(()=>{inp.focus();inp.select()},60);
    const done=v=>{d.classList.remove('on');yes.onclick=no.onclick=inp.onkeydown=null;res(v)};
    yes.onclick=()=>done(isIn?inp.value:true);no.onclick=()=>done(isIn?null:false);
    inp.onkeydown=e=>{if(e.key==='Enter')yes.onclick()};
  });
}
const askInput=(title,msg,def,numeric)=>ask(title,msg,{input:def??'',num:numeric,icon:'✏️',ok:'حفظ'});
const say=(title,msg,icon)=>ask(title,msg,{alert:true,ok:'تمام',icon:icon||'ℹ️'});

/* ========== التنبيهات المقروءة ========== */
let READ={};try{READ=JSON.parse(localStorage.getItem(RKEY)||'{}')||{}}catch(e){READ={}}
const unread=()=>alerts().filter(a=>!READ[a.id]);
function saveRead(){localStorage.setItem(RKEY,JSON.stringify(READ))}
function readAlert(id){if(!READ[id])READ[id]=1;saveRead();updateBell()}
function readAll(){alerts().forEach(a=>{if(!READ[a.id])READ[a.id]=1});saveRead();render();openNotifs();toast('تم ✓')}

/* ========== تنبيه جوه البرنامج ========== */
let bnT;
function banner(ic,title,body,go,lv){
  const b=$('#banner');
  b.innerHTML=`<div class="ncard ${lv||'info'}"><div class="nic">${ic}</div><div class="grow"><b>${esc(title)}</b>${body?`<small>${esc(body)}</small>`:''}</div><span class="nchev" onclick="event.stopPropagation();hideBanner()">✕</span></div>`;
  b.onclick=()=>{hideBanner();if(go)go()};
  b.classList.add('on');clearTimeout(bnT);bnT=setTimeout(hideBanner,7000);
}
function hideBanner(){$('#banner').classList.remove('on')}
function inAppAlerts(force){
  if($('#lock').classList.contains('on'))return;
  const al=unread();if(!al.length)return;
  const sig=today()+':'+al.map(a=>a.id).join(',');
  if(!force&&localStorage.getItem(BNKEY)===sig)return;
  localStorage.setItem(BNKEY,sig);
  const late=al.some(a=>a.lv==='late');setTimeout(alertSound,700);
  setTimeout(()=>banner('🔔',al.length>1?`عندك ${al.length} تنبيه`:al[0].title,al.length>1?al.slice(0,2).map(a=>a.title).join(' · '):al[0].body,()=>openNotifs(),late?'late':'soon'),700);
}

/* ========== البيانات ========== */
function defaults(){
  const m=(name,type,color)=>({id:uid(),name,type,bank:'',color,active:true});
  const c=(name,kind)=>({id:uid(),name,kind,active:true});
  return {version:5,
    methods:[m('كاش','cash','#16a34a')],
    cats:[...['أكل وشرب','مواصلات وبنزين','فواتير ومرافق','إيجار','صحة وعلاج','أخرى'].map(n=>c(n,'exp')),c('الراتب','inc')],
    txs:[],closed:{},cash:[],docs:[],plans:[],cards:[],renew:[],contacts:[],buys:[],fmeta:{},settings:{}};
}
function migrate(d){
  const now=new Date(),nk=ym(now.getFullYear(),now.getMonth()+1);
  if((d.version||1)<3){
    d.annual=d.annual||[];
    (d.cats||[]).filter(c=>c.kind==='inc'&&c.freq==='yearly').forEach(c=>{
      const used=(d.txs||[]).some(t=>t.cat===c.id),plan=c.plan||{};
      if(used||Object.keys(plan).length||c.name!=='أرباح سنوية')d.annual.push({id:uid(),name:c.name,due:pad(c.dueMonth||1)+'-01',note:'',active:c.active!==false,amounts:{...plan},st:{}});
      if(!used)d.cats=d.cats.filter(x=>x!==c);
    });
  }
  if((d.version||1)<4){
    d.recur=d.recur||[];
    (d.monthly||[]).forEach(i=>{
      const sk=i.start||nk;
      const r={id:i.id,name:i.name,kind:'fixed',amount:+i.amount||0,every:1,start:sk+'-'+pad(Math.min(+i.day||1,28)),pct:0,note:i.note||'',active:i.active!==false,amt:{},st:{}};
      Object.entries(d.mst||{}).forEach(([key,recs])=>{const rec=(recs||{})[i.id];if(!rec)return;const k=mdiff(sk,key);if(k>=0)r.st[k]=rec});
      d.recur.push(r);
    });
    (d.annual||[]).forEach(a=>{
      const am=a.amounts||{},years=Object.keys(am).concat(Object.keys(a.st||{})).map(Number).filter(Boolean);
      const y0=years.length?Math.min(...years):now.getFullYear();
      const r={id:a.id,name:a.name,kind:'contract',amount:+am[y0]||0,every:12,start:`${y0}-${a.due||'01-01'}`,pct:0,note:a.note||'',active:a.active!==false,amt:{},st:{}};
      Object.entries(am).forEach(([y,v])=>{r.amt[+y-y0]=+v});
      Object.entries(a.st||{}).forEach(([y,rec])=>{r.st[+y-y0]=rec});
      Object.keys(am).map(Number).forEach(y=>{if(y<now.getFullYear()&&!r.st[y-y0])r.st[y-y0]={st:'old'}});
      d.recur.push(r);
    });
    delete d.monthly;delete d.mst;delete d.annual;delete d.expected;
  }
  if((d.version||1)<5){
    (d.recur||[]).forEach(r=>{
      let c=d.cats.find(x=>x.kind==='inc'&&x.name===r.name);
      if(!c){c={id:uid(),name:r.name,kind:'inc',active:true};d.cats.push(c)}
      Object.assign(c,{fixed:true,amount:+r.amount||0,every:+r.every||1,start:r.start,pct:+r.pct||0,note:r.note||c.note||'',amt:r.amt||{},st:r.st||{}});
      if(r.active===false)c.active=false;
      (d.txs||[]).forEach(t=>{if(t.src&&t.src.k==='r'&&t.src.id===r.id)t.src.id=c.id});
      ((d.settings||{}).pins||[]).forEach(p=>{if(p.type==='recur'&&p.ref===r.id){p.type='cat';p.ref=c.id}});
    });
    delete d.recur;
  }
  d.version=5;return d;
}
function normalize(d){
  d.methods=d.methods||[];d.cats=d.cats||[];d.closed=d.closed||{};
  d.txs=(d.txs||[]).map(t=>({...t,amount:+t.amount||0}));
  migrate(d);
  const n0=new Date(),nk0=ym(n0.getFullYear(),n0.getMonth()+1);
  d.cats=d.cats.map(c=>({files:[],amt:{},st:{},every:1,pct:0,...c}));
  d.cats.forEach(c=>{if(c.fixed&&c.kind==='exp'&&!c.autoFrom)c.autoFrom=nk0+'-01'});
  d.cash=(d.cash||[]).map(c=>({...c,amount:+c.amount||0}));
  d.docs=(d.docs||[]).map(x=>({files:[],...x}));d.plans=(d.plans||[]).map(p=>({files:[],items:[],...p}));d.fmeta=d.fmeta||{};
  d.cards=d.cards||[];d.renew=(d.renew||[]).map(x=>({files:[],...x}));
  d.contacts=(d.contacts||[]).map(x=>({phones:[],...x}));d.buys=(d.buys||[]).map(x=>({items:[],...x}));
  d.settings=Object.assign({lead:10,leadA:15,leadR:30,appName:DEF_NAME,theme:'teal',labels:{},hw:{},pins:[],sort:'amt',font:'cairo',fsz:1.07,snd:'ding',svol:.7,mask:true},d.settings||{});
  if(!d.settings.appName||['مصروفي','Fawzy Folio'].includes(d.settings.appName))d.settings.appName=DEF_NAME;
  return d;
}
let S=null;
function load(){try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){S=null}S=normalize(S&&S.methods?S:defaults())}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){toast('مشكلة في الحفظ: المساحة ممكن تكون خلصت')}}
const M=id=>S.methods.find(x=>x.id===id);
const C=id=>S.cats.find(x=>x.id===id);
const R=C;
const isClosed=date=>!!S.closed[date.slice(0,7)];
const keyTx=k=>S.txs.filter(t=>!t.pend&&t.date.startsWith(k+'-'));
const pendTx=(type,k)=>S.txs.filter(t=>t.pend&&t.type===type&&(t.date.startsWith(k+'-')||(k===NKM&&t.date<k+'-01')));
function sums(l){let inc=0,exp=0;for(const t of l){if(t.pend)continue;if(t.type==='inc')inc+=t.amount;else if(t.type==='exp')exp+=t.amount}return{inc,exp,net:inc-exp}}
function pmStats(list){
  return S.methods.map(m=>{let i=0,o=0,n=0;list.forEach(t=>{if(t.method!==m.id||t.pend)return;n++;if(t.type==='exp')o+=t.amount;else if(t.type==='inc')i+=t.amount});return{m,i,o,n}})
    .filter(x=>x.m.active||x.i||x.o).sort((a,b)=>(b.o+b.i)-(a.o+a.i));
}
const byDesc=(a,b)=>b.date.localeCompare(a.date)||b.created-a.created;
const byAsc=(a,b)=>a.date.localeCompare(b.date)||a.created-b.created;
function ensureCat(name,kind){let c=S.cats.find(x=>x.kind===kind&&x.name===name);if(!c){c={id:uid(),name,kind,active:true,files:[],amt:{},st:{},every:1,pct:0};S.cats.push(c)}return c}
const defMethod=()=>(S.methods.find(m=>m.active&&m.type==='cash')||S.methods.find(m=>m.active)||{}).id;
function stOf(rec){if(!rec)return{st:'wait'};if(rec.st==='done'){const t=S.txs.find(x=>x.id===rec.txId);return t?{st:'done',t}:{st:'wait'}}return rec}
const cashOf=k=>S.cash.filter(c=>c.date.startsWith(k+'-'));
const txName=t=>t.type==='tr'?`${M(t.method)?.name||'—'} ← ${M(t.to)?.name||'—'}`:(C(t.cat)?.name||'—');

/* --- البنود الثابتة --- */
const FX=()=>S.cats.filter(c=>c.fixed&&c.start);
const isAnn=c=>+c.every>=12;
function occK(r,key){if(!r.start)return -1;const d=mdiff(r.start.slice(0,7),key);if(d<0||d%(+r.every||1))return -1;return d/(+r.every||1)}
const occDate=(r,k)=>addMonths(r.start,k*(+r.every||1));
const occRec=(r,k)=>(r.st||{})[k];
function occActual(r,k){const s=stOf(occRec(r,k));return s.st==='done'?s.t.amount:null}
function occAmt(r,k){
  if(r.amt&&r.amt[k]!=null)return +r.amt[k];
  if(!+r.pct||k===0)return +r.amount||0;
  const prev=occActual(r,k-1);return Math.round((prev!=null?prev:occAmt(r,k-1))*(1+r.pct/100));
}
function dueList(key,mode,type){
  return FX().filter(c=>(!type||c.kind===type)&&(!mode||(mode==='a'?isAnn(c):!isAnn(c)))).map(r=>{const k=occK(r,key);if(k<0)return null;if(r.active===false&&!occRec(r,k))return null;const date=occDate(r,k);return{r,k,date,amt:occAmt(r,k),s:stOf(occRec(r,k))}})
    .filter(Boolean).sort((a,b)=>a.date.localeCompare(b.date));
}
function nextOcc(r){for(let k=0;k<1000;k++){if(stOf(occRec(r,k)).st==='wait')return k}return 0}
function lastDone(r){let b=null;Object.values(r.st||{}).forEach(rec=>{const s=stOf(rec);if(s.st==='done'&&(!b||s.t.date>b.date))b=s.t});return b}
const defCollectDate=due=>due>today()?due:today();
const isAnnualTx=t=>{if(!t.src||t.src.k!=='r')return false;const c=C(t.src.id);return!!c&&isAnn(c)};
/* المصروفات الثابتة بتنزل لوحدها مدفوعة في ميعادها */
function autoPostFixed(){
  const td=today();let n=0;
  FX().filter(c=>c.kind==='exp'&&c.active!==false).forEach(r=>{
    const from=r.autoFrom||'0000';
    for(let k=0;k<600;k++){
      const d=occDate(r,k);if(d>td)break;if(d<from)continue;
      if(stOf(occRec(r,k)).st!=='wait'||isClosed(d))continue;
      const amt=occAmt(r,k),method=r.acct&&M(r.acct)?r.acct:defMethod();if(!(amt>0)||!method)continue;
      const t={id:uid(),type:'exp',amount:amt,cat:r.id,method,via:r.via||'',date:d,note:'',files:[],created:Date.now(),src:{k:'r',id:r.id,p:k}};
      S.txs.push(t);r.st=r.st||{};r.st[k]={st:'done',txId:t.id,at:Date.now()};n++;
    }
  });
  if(n)save();return n;
}
function pendingItems(){const out=[];[prevKey(NKM),NKM].forEach(k=>dueList(k,'m','inc').forEach(o=>{if(o.s.st==='wait'&&(k===NKM||o.date<today()))out.push(o)}));return out}
function pendAll(){
  const end=mRange(NKM)[1];
  return pendingItems().map(o=>({o,a:o.amt,d:o.date,n:o.r.name}))
    .concat(S.txs.filter(t=>t.type==='inc'&&t.pend&&t.date<=end).map(t=>({t,a:t.amount,d:t.date,n:C(t.cat)?.name||''})));
}
function annualDue(){
  const td=today(),lead=leadA(),out=[];
  FX().filter(c=>isAnn(c)&&c.kind==='inc'&&c.active!==false).forEach(r=>{
    for(let k=0;k<300;k++){const d=occDate(r,k),left=daysBetween(d,td);if(left>lead)break;if(left<-62)continue;if(stOf(occRec(r,k)).st!=='wait')continue;out.push({r,k,d,left,amt:occAmt(r,k)})}
  });
  return out.sort((a,b)=>a.d.localeCompare(b.d));
}
function renDue(){const td=today();return S.renew.filter(r=>r.exp).map(r=>({r,left:daysBetween(r.exp,td)})).filter(x=>x.left<=(+x.r.lead||leadR())).sort((a,b)=>a.left-b.left)}

/* --- الأقساط --- */
const plan=id=>S.plans.find(x=>x.id===id);
const itTx=it=>it.txId?S.txs.find(t=>t.id===it.txId):null;
function planStats(p){
  let total=0,paid=0,paidN=0,late=0,next=null;const td=today();
  p.items.forEach(it=>{total+=+it.amount||0;const t=itTx(it);if(t){paid+=t.amount;paidN++}else{if(it.due<td)late++;if(!next||it.due<next.due)next=it}});
  return{total,paid,paidN,n:p.items.length,late,next};
}
function instDue(){const td=today(),out=[];S.plans.forEach(p=>p.items.forEach(it=>{if(itTx(it)||!it.due)return;const left=daysBetween(it.due,td);if(left<=leadI())out.push({p,it,left})}));return out.sort((a,b)=>a.it.due.localeCompare(b.it.due))}

/* ========== الملفات (IndexedDB) ========== */
const FDB={
  db:null,
  open(){return this.db||(this.db=new Promise((res,rej)=>{const r=indexedDB.open('masrofi-files',1);r.onupgradeneeded=()=>r.result.createObjectStore('files',{keyPath:'id'});r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)}))},
  async run(mode,fn){const db=await this.open();return new Promise((res,rej)=>{const t=db.transaction('files',mode);const q=fn(t.objectStore('files'));t.oncomplete=()=>res(q?q.result:undefined);t.onerror=()=>rej(t.error)})},
  put(o){return this.run('readwrite',s=>s.put(o))},
  get(id){return this.run('readonly',s=>s.get(id))},
  del(id){return this.run('readwrite',s=>s.delete(id))},
  keys(){return this.run('readonly',s=>s.getAllKeys())}
};
const URLS={};
async function fileURL(id){if(URLS[id])return URLS[id];const r=await FDB.get(id);if(!r)return null;return URLS[id]=URL.createObjectURL(r.blob)}
function hydrate(){document.querySelectorAll('img[data-fid]:not([src])').forEach(async im=>{const u=await fileURL(im.dataset.fid);if(u)im.src=u})}
async function compressImg(f){
  try{
    const url=URL.createObjectURL(f);const img=await new Promise((r,j)=>{const i=new Image();i.onload=()=>r(i);i.onerror=j;i.src=url});
    const sc=Math.min(1,1600/Math.max(img.width,img.height));const c=document.createElement('canvas');
    c.width=Math.round(img.width*sc);c.height=Math.round(img.height*sc);c.getContext('2d').drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(url);
    const b=await new Promise(r=>c.toBlob(r,'image/jpeg',.8));return b&&b.size<f.size?b:f;
  }catch(e){return f}
}
async function addFiles(list){
  const ids=[];
  for(const f of list){
    let blob=f,name=f.name||'file',type=f.type||'';
    if(type.startsWith('image/')&&type!=='image/gif'){const c=await compressImg(f);if(c!==f){blob=c;type='image/jpeg';name=name.replace(/\.[^.]+$/,'')+'.jpg'}}
    const id=uid();await FDB.put({id,blob,name,type});S.fmeta[id]={name,type,size:blob.size,at:Date.now()};ids.push(id);
  }
  save();return ids;
}
function pickFiles(mode,cb){
  const i=document.createElement('input');i.type='file';
  if(mode==='cam'){i.accept='image/*';i.setAttribute('capture','environment')}
  else if(mode==='img'){i.accept='image/*'}
  else{i.accept='image/*,application/pdf,.doc,.docx,.xls,.xlsx,.txt';i.multiple=true}
  document.body.appendChild(i);
  i.onchange=async()=>{if(!i.files.length){i.remove();return}toast('⏳ جاري الحفظ...');const ids=await addFiles(i.files);i.remove();cb(ids)};
  i.click();
}
const fileIcon=m=>{const t=(m&&m.type)||'',n=(m&&m.name)||'';return t.includes('pdf')?'📄':/\.docx?$/i.test(n)?'📝':/\.xlsx?$/i.test(n)?'📊':t.startsWith('image/')?'🖼️':'📎'};
function fileThumb(id,ctx){const m=S.fmeta[id]||{};const img=(m.type||'').startsWith('image/');return `<div class="fth" onclick="viewFile('${id}','${ctx}')">${img?`<img data-fid="${id}" alt="">`:`<span>${fileIcon(m)}</span>`}<small>${esc(m.name||'ملف')}</small></div>`}
function filesBox(ids,ctx){return `<div class="files">${(ids||[]).map(id=>fileThumb(id,ctx)).join('')}<button type="button" class="fadd" onclick="attach('${ctx}',true)">📷<small>كاميرا</small></button><button type="button" class="fadd" onclick="attach('${ctx}',false)">📎<small>ملف</small></button></div>`}
function attach(ctx,cam){pickFiles(cam?'cam':'file',ids=>{if(ids.length)ATT[ctx].add(ids)})}
const ATT={
  tx:{add:ids=>{grab();F.files=(F.files||[]).concat(ids);txForm()},rm:id=>{grab();F.files=(F.files||[]).filter(x=>x!==id);txForm()}},
  cat:{add:ids=>{grabCF();CF.files=(CF.files||[]).concat(ids);catSheet()},rm:id=>{grabCF();CF.files=(CF.files||[]).filter(x=>x!==id);catSheet()}},
  catf:{add:ids=>{const c=C(curCat);c.files=(c.files||[]).concat(ids);save();render();catFiles(curCat)},rm:id=>{const c=C(curCat);c.files=c.files.filter(x=>x!==id);save();render();catFiles(curCat)}},
  doc:{add:ids=>{const d=doc(curDoc);d.files=d.files.concat(ids);d.upd=Date.now();save();render();docSheet(curDoc)},rm:id=>{const d=doc(curDoc);d.files=d.files.filter(x=>x!==id);d.upd=Date.now();save();render();docSheet(curDoc)}},
  plan:{add:ids=>{grabPF();PF.files=PF.files.concat(ids);planForm()},rm:id=>{grabPF();PF.files=PF.files.filter(x=>x!==id);planForm()}},
  pay:{add:ids=>{grabPay();PAY.files=PAY.files.concat(ids);paySheet()},rm:id=>{grabPay();PAY.files=PAY.files.filter(x=>x!==id);paySheet()}},
  ren:{add:ids=>{rnGrab();RNF.files=RNF.files.concat(ids);renSheet()},rm:id=>{rnGrab();RNF.files=RNF.files.filter(x=>x!==id);renSheet()}},
  view:{}
};
async function viewFile(id,ctx){
  const m=S.fmeta[id]||{name:'ملف'},u=await fileURL(id),img=(m.type||'').startsWith('image/');
  $('#viewer').innerHTML=`<div class="vtop"><button class="mini" onclick="closeViewer()">→ رجوع</button><b>${esc(m.name)}</b><button class="mini" onclick="closeViewer()">✕</button></div>
  <div class="vbody">${img&&u?`<img src="${u}">`:`<div class="vic">${fileIcon(m)}</div>`}</div>
  <div class="vbar"><button class="mini" onclick="openFile('${id}')">🔍 فتح</button><button class="mini" onclick="shareFiles(['${id}'])">📤 مشاركة</button><button class="mini" onclick="dlFile('${id}')">⬇️ تنزيل</button>
  ${ATT[ctx]&&ATT[ctx].rm?`<button class="mini danger" onclick="rmFile('${id}','${ctx}')">🗑 حذف</button>`:''}</div>`;
  $('#viewer').classList.add('on');
}
async function rmFile(id,ctx){if(!await ask('حذف المرفق؟','',{danger:true,icon:'🗑',ok:'حذف'}))return;closeViewer();ATT[ctx].rm(id)}
function closeViewer(){$('#viewer').classList.remove('on')}
function dlBlob(b,name){const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),3000)}
async function dlFile(id){const r=await FDB.get(id);if(r)dlBlob(r.blob,r.name)}
async function openFile(id){const u=await fileURL(id);if(u)window.open(u,'_blank')}
async function shareOrDl(files){
  try{if(navigator.canShare&&navigator.canShare({files})){await navigator.share({files,title:appName()});return}}
  catch(e){if(e&&e.name==='AbortError')return}
  files.forEach(f=>dlBlob(f,f.name));toast('اتنزل الملف ✓');
}
async function shareFiles(ids){
  const files=[];for(const id of ids){const r=await FDB.get(id);if(r)files.push(new File([r.blob],r.name,{type:r.type||r.blob.type}))}
  if(files.length)shareOrDl(files);
}
async function gcFiles(){
  if(DEMO)return;
  try{
    const ref=new Set();
    S.txs.forEach(t=>(t.files||[]).forEach(i=>ref.add(i)));S.docs.forEach(d=>d.files.forEach(i=>ref.add(i)));S.plans.forEach(p=>(p.files||[]).forEach(i=>ref.add(i)));S.cats.forEach(c=>(c.files||[]).forEach(i=>ref.add(i)));S.renew.forEach(r=>(r.files||[]).forEach(i=>ref.add(i)));S.buys.forEach(b=>{if(b.fid)ref.add(b.fid)});
    for(const k of await FDB.keys())if(!ref.has(k))await FDB.del(k);
    Object.keys(S.fmeta).forEach(id=>{if(!ref.has(id))delete S.fmeta[id]});save();
  }catch(e){}
}

/* ========== الحالة ========== */
load();
const NOW=new Date(),NY=NOW.getFullYear(),NM=NOW.getMonth()+1,NKM=ym(NY,NM);
let cur={y:NY,m:NM};
let view='home',rtab='',stab='',itab='inc',dtab='my',wtab='cards',ctab='all',bq='',F=null,CF=null,PF=null,PAY=null,CRF=null,RNF=null,CTF=null,BF=null,curDoc=null,curCat=null,instPlan=null,RVCSV=null,RVST=[],PINMODE='show',TXBACK=false,GOPEN={};
const RFDEF={type:'all',cat:'',method:'',period:'m',from:'',to:'',month:NKM,year:NY,ccat:'ALL_EXP',crange:'6',plan:''};
let RF={...RFDEF};
let LK={};if(!DEMO){try{LK=JSON.parse(localStorage.getItem(LKEY)||'{}')||{}}catch(e){LK={}}}
const saveLK=()=>{if(!DEMO)localStorage.setItem(LKEY,JSON.stringify(LK))};
let GD={};try{GD=JSON.parse(localStorage.getItem(GKEY)||'{}')||{}}catch(e){GD={}}
const saveGD=()=>localStorage.setItem(GKEY,JSON.stringify(GD));

/* ========== الثيم والخط والاسم ========== */
function applyTheme(){
  const t=THEMES[S.settings.theme]||THEMES.teal;
  document.documentElement.style.setProperty('--p',t.p);
  document.body.classList.toggle('dark',!!t.dark);
  $('meta[name=theme-color]').content=t.dark?'#162032':t.p;
}
function loadFont(k){const f=FONTS[k];if(!f||!f[2]||document.getElementById('gf-'+k))return;const l=document.createElement('link');l.rel='stylesheet';l.id='gf-'+k;l.href=`https://fonts.googleapis.com/css2?family=${f[2]}&display=swap`;document.head.appendChild(l)}
function applyFont(){
  const k=FONTS[S.settings.font]?S.settings.font:'cairo',f=FONTS[k];loadFont(k);
  document.documentElement.style.setProperty('--ff',(f[1]?f[1]+',':'')+'system-ui,-apple-system,"Segoe UI",Tahoma,sans-serif');
  document.documentElement.style.setProperty('--z',+S.settings.fsz||1.07);
}
function applyName(){$('#appn').textContent=appName();document.title=appName();$('#hlg').innerHTML=LOGO();$('#dch').innerHTML=DEMO?'<span class="dchip">🧪 تجريبي</span>':''}
function brand(){
  return `<div class="brand"><div class="pill"><b dir="ltr">${DEV.name}</b><span class="co" dir="ltr">${DEV.company}</span><span>${DEV.phones.map(p=>`<a href="tel:${p}" dir="ltr">${p}</a>`).join(' - ')}</span></div><small><span dir="ltr">${esc(appName())}</span> · الإصدار ${APP_VERSION} · ${APP_BUILD}</small></div>`;
}

/* ========== أصوات التنبيه ========== */
const SOUNDS={
  ding:{n:'دينج',s:[[880,.12],[1320,.35]]},
  chime:{n:'جرس ناعم',s:[[1047,.15],[1319,.15],[1568,.4]],w:'triangle'},
  bell:{n:'جرس كبير',s:[[660,1]],h:1},
  marimba:{n:'ماريمبا',s:[[784,.12],[988,.12],[784,.12],[1175,.35]]},
  rise:{n:'نغمة صاعدة',s:[[523,.1],[659,.1],[784,.1],[1047,.35]]},
  cash:{n:'كاشير',s:[[2093,.08],[2637,.45]],w:'triangle'},
  pop:{n:'بوب',s:[[600,.06],[900,.1]]},
  alert:{n:'تنبيه قوي',s:[[880,.12],[0,.08],[880,.12],[0,.08],[880,.22]],w:'square'},
  none:{n:'بدون صوت',s:[]}
};
let AC=null,sndQ=0;
const newAC=()=>AC||(AC=new (window.AudioContext||window.webkitAudioContext)());
function playSound(k){
  const sd=SOUNDS[k||S.settings.snd||'ding'];if(!sd||!sd.s.length)return;
  try{
    newAC();if(AC.state!=='running')AC.resume();
    const v=Math.max(.05,Math.min(1,+(S.settings.svol??.7)));let t=AC.currentTime+.03;
    sd.s.forEach(([f,d])=>{
      if(f)[[f,1]].concat(sd.h?[[f*2.76,.25]]:[]).forEach(([fr,gm])=>{
        const o=AC.createOscillator(),g=AC.createGain();o.type=sd.w||'sine';o.frequency.value=fr;
        g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.45*v*gm,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+d);
        o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+d+.03);
      });
      t+=d;
    });
  }catch(e){}
}
function alertSound(){
  if((S.settings.snd||'ding')==='none')return;
  try{newAC()}catch(e){}
  if(AC&&AC.state==='running')return playSound();
  sndQ=Date.now();
}
document.addEventListener('pointerdown',()=>{
  try{newAC();const q=sndQ&&Date.now()-sndQ<20000;sndQ=0;
    (AC.state==='running'?Promise.resolve():AC.resume()).then(()=>{if(q)playSound()}).catch(()=>{});
  }catch(e){}
},true);
function setSnd(k){S.settings.snd=k;save();render();playSound(k)}

/* ========== التنبيهات ========== */
function alerts(){
  const out=[],td=today();
  FX().filter(r=>r.active!==false).forEach(r=>{
    const ann=isAnn(r),inc=r.kind==='inc';
    if(!inc&&!ann)return;
    const lim=ann?leadA():0;
    for(let k=0;k<1000;k++){
      const d=occDate(r,k),left=daysBetween(d,td);
      if(left>lim)break;
      if(left<-62)continue;
      if(!inc&&left<=0)continue;
      if(stOf(occRec(r,k)).st!=='wait')continue;
      const amt=occAmt(r,k),w=inc?'تحصيل':'دفع';
      if(ann){
        const last=lastDone(r);
        out.push({id:`c-${r.id}-${k}`,ic:'📆',lv:left<0?'late':'soon',title:left<0?`${w} ${r.name} متأخر ${-left} يوم`:left===0?`النهارده ميعاد ${w} ${r.name}`:`${w} ${r.name} · باقي ${left} يوم`,body:`${fdate(d)} · ${fmt(amt)}${r.pct?` (زيادة ${r.pct}%)`:''}${last?` · المرة اللي فاتت ${fmt(last.amount)}`:''}${r.note?' · '+r.note:''}`,go:`cur.y=${+d.slice(0,4)};go('annual')`});
      }else{
        out.push({id:`f-${r.id}-${k}`,ic:'💼',lv:'late',title:`${r.name}: لم يتم تحصيله`,body:`${mName(d.slice(0,7))} · ${fmt(amt)}${r.note?' · '+r.note:''}`,go:`gocol('${d.slice(0,7)}')`});
      }
    }
  });
  S.txs.filter(t=>t.pend&&t.type==='inc'&&t.date<=td).forEach(t=>{
    out.push({id:`p-${t.id}-${t.date}`,ic:'⏳',lv:t.date<td?'late':'soon',title:`${C(t.cat)?.name||'—'}: غير محصّل`,body:`${fdate(t.date)} · ${fmt(t.amount)}${t.post?` · اتأجّل ${t.post} مرة`:''}`,go:`gocol('${NKM}')`});
  });
  S.plans.forEach(p=>{
    const un=p.items.filter(it=>!itTx(it)&&it.due).sort((a,b)=>a.due.localeCompare(b.due));if(!un.length)return;
    const late=un.filter(it=>it.due<td),nx=un[0],left=daysBetween(nx.due,td),go=`instPlan='${p.id}';go('plan')`;
    if(late.length)out.push({id:`i-${p.id}-late-${late.length}-${late[0].id}`,ic:'🏦',lv:'late',title:`${p.name}: ${late.length} قسط متأخر`,body:`${fdate(late[0].due)} · ${fmt(+late[0].amount||0)}`,go});
    else if(left<=leadI())out.push({id:`i-${p.id}-${nx.id}`,ic:'🏦',lv:'soon',title:left?`قسط ${p.name} · باقي ${left} يوم`:`النهارده ميعاد قسط ${p.name}`,body:`${fdate(nx.due)} · ${fmt(+nx.amount||0)}`,go});
  });
  S.renew.forEach(r=>{
    if(!r.exp)return;const left=daysBetween(r.exp,td),lead=+r.lead||leadR();if(left>lead)return;const t=REN[r.type]||REN.other;
    out.push({id:`r-${r.id}-${r.exp}`,ic:t[0],lv:left<0?'late':'soon',title:left<0?`${r.name} منتهي من ${-left} يوم`:left===0?`${r.name} بينتهي النهارده`:`${r.name} · باقي ${left} يوم على الانتهاء`,body:`${fdate(r.exp)}${r.num?' · '+r.num:''}`,go:`wtab='ren';go('wallet')`});
  });
  const pk=prevKey(NKM);
  if(!S.closed[pk]&&keyTx(pk).length)out.push({id:'close-'+pk,ic:'🔓',lv:'info',title:`${mName(pk)} لسه مفتوح`,body:'اقفل الشهر عشان أرقامه تتثبت',go:`go('months')`});
  const lb=localStorage.getItem(BKEY);
  if(!DEMO&&S.txs.length&&(!lb||(Date.now()-new Date(lb))/864e5>30))out.push({id:'backup-'+NKM,ic:'💾',lv:'info',title:'وقت النسخة الاحتياطية',body:lb?'آخر نسخة من أكتر من شهر':'لسه معملتش نسخة احتياطية',go:`stab='drive';go('settings')`});
  return out;
}
function updateBell(){const n=unread().length;$('#bell b').textContent=n?n:''}
function openNotifs(){
  const all=alerts(),un=all.filter(a=>!READ[a.id]),rd=all.filter(a=>READ[a.id]===1);
  const card=(a,dim)=>`<div class="ncard ${a.lv||'info'} swp ${dim?'dim':''}" data-aid="${esc(a.id)}"><div class="nic">${a.ic||'🔔'}</div><div class="grow"><b>${esc(a.title)}</b><small>${esc(a.body)}</small></div><span class="nchev">‹</span></div>`;
  sheet(`<div class="phead"><h2>🔔 التنبيهات</h2><span class="badge ${un.length?'late':'done'}">${un.length?un.length+' جديد':'✓'}</span></div>
  ${un.length?un.map(a=>card(a)).join('')+`<button class="btn ghost" onclick="readAll()">✓ اعتبرها كلها مقروءة</button>`:'<div class="nempty"><div>✅</div><b>لا يوجد تنبيهات جديدة</b></div>'}
  ${rd.length?`<details class="gen"><summary>📭 المقروءة (${rd.length})</summary><div style="margin-top:8px">${rd.map(a=>card(a,1)).join('')}</div></details>`:''}
  <button class="btn ghost" onclick="notifSheet()">⚙️ فحص الإشعارات</button>`);
  bindSwipe('#sheet .swp',
    id=>{READ[id]=READ[id]?2:1;saveRead();updateBell();render();openNotifs()},
    id=>{const a=alerts().find(x=>x.id===id);readAlert(id);closeSheet();if(a)try{new Function(a.go)()}catch(e){}});
}
function bindSwipe(sel,onSwipe,onTap){
  document.querySelectorAll(sel).forEach(el=>{
    let x0=0,y0=0,dx=0,down=false,lock=null;
    el.addEventListener('pointerdown',e=>{down=true;lock=null;dx=0;x0=e.clientX;y0=e.clientY;el.style.transition='none'});
    el.addEventListener('pointermove',e=>{
      if(!down)return;const mx=e.clientX-x0,my=e.clientY-y0;
      if(!lock&&(Math.abs(mx)>10||Math.abs(my)>10)){lock=Math.abs(mx)>Math.abs(my)?'x':'y';if(lock==='x')try{el.setPointerCapture(e.pointerId)}catch(_){}}
      if(lock!=='x')return;dx=mx;el.style.transform=`translateX(${dx}px)`;el.style.opacity=String(1-Math.min(.8,Math.abs(dx)/260));
    });
    const up=()=>{
      if(!down)return;down=false;el.style.transition='transform .2s,opacity .2s';
      if(lock==='x'&&Math.abs(dx)>90){el.style.transform=`translateX(${dx>0?120:-120}%)`;el.style.opacity='0';setTimeout(()=>onSwipe(el.dataset.aid),200)}
      else{el.style.transform='';el.style.opacity=''}
      if(lock==='x')el._sw=Date.now();
    };
    el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);
    el.addEventListener('click',()=>{if(el._sw&&Date.now()-el._sw<400)return;onTap(el.dataset.aid)});
  });
}
const isTouch=()=>matchMedia('(pointer:coarse)').matches;
async function notifSheet(){
  const sup='Notification' in window,perm=sup?Notification.permission:'unsupported';
  let reg=null;try{reg=navigator.serviceWorker?await navigator.serviceWorker.getRegistration():null}catch(e){}
  const inst=matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
  const line=(st,t,fix)=>`<div class="ncard ${st==='ok'?'ok':st==='warn'?'soon':'late'}" style="cursor:default"><div class="nic">${st==='ok'?'✅':st==='warn'?'⚠️':'❌'}</div><div class="grow"><b>${t}</b>${st!=='ok'&&fix?`<small>${fix}</small>`:''}</div></div>`;
  sheet(`<h2>🔔 فحص الإشعارات</h2>
  ${line(sup?'ok':'bad','المتصفح بيدعم الإشعارات','افتح التطبيق من Chrome على أندرويد، أو من Safari على آيفون (iOS 16.4 أو أحدث)')}
  ${line(perm==='granted'?'ok':'bad','إذن الإشعارات',perm==='denied'?'من Chrome: ⋮ ← الإعدادات ← إعدادات المواقع ← الإشعارات، واسمح للموقع':'دوس "تفعيل الإشعارات" ووافق')}
  ${line(reg&&reg.active?'ok':'bad','خدمة الخلفية','اقفل التطبيق وافتحه تاني')}
  ${isTouch()?line(inst?'ok':'warn','التطبيق متثبت على الشاشة الرئيسية','افتحه من الأيقونة اللي على الشاشة الرئيسية')
    :`<div class="ncard soon" style="cursor:default"><div class="nic">🖥️</div><div class="grow"><b>الويندوز لازم يسمح لـ Chrome</b><small>إعدادات ويندوز ← System ← Notifications ← خلي Google Chrome شغال، واقفل Do not disturb</small></div></div>`}
  ${sup&&perm==='default'?'<button class="btn" onclick="enableNotif()">🔔 تفعيل الإشعارات</button>':''}
  <button class="btn" onclick="testNotif(0)">🧪 جرّب إشعار دلوقتي</button>
  <button class="btn ghost" onclick="testNotif(10)">⏱️ جرّب بعد 10 ثواني</button>`);
}
async function enableNotif(){
  try{const p=await Notification.requestPermission();if(p==='granted'){toast('اتفعلت الإشعارات ✓');localStorage.removeItem(NKEY);pushAlerts()}else toast('الإشعارات اترفضت')}catch(e){toast('مش قادر أفعّل الإشعارات')}
  notifSheet();
}
const NOPT={icon:'icon-192.png',badge:'icon-192.png',lang:'ar',dir:'rtl',vibrate:[200,100,200],silent:false,renotify:true};
async function showNotif(title,o){
  const opts={...NOPT,...o};let reg=null;
  try{if(navigator.serviceWorker)reg=await Promise.race([navigator.serviceWorker.ready,new Promise(r=>setTimeout(()=>r(null),2000))])}catch(e){}
  if(reg&&reg.showNotification)return reg.showNotification(title,opts);
  return new Notification(title,opts);
}
async function testNotif(delay){
  if(!delay){alertSound();banner('🔔','إشعار تجريبي','الإشعارات شغالة ✓',null,'ok')}
  if(!('Notification' in window))return toast('الجهاز ده مش بيدعم الإشعارات');
  if(Notification.permission!=='granted'){const p=await Notification.requestPermission();if(p!=='granted'){notifSheet();return toast('لازم توافق على الإشعارات الأول')}}
  const fire=()=>showNotif(`🔔 ${appName()}`,{body:'الإشعارات شغالة ✓',tag:'test-'+Date.now(),requireInteraction:!isTouch()})
    .then(()=>{if(delay)banner('🔔','إشعار تجريبي','اتبعت ✓',null,'ok');else toast('اتبعت ✓')})
    .catch(e=>say('الإشعار ما اتبعتش',(e&&e.message)||'','⚠️'));
  if(delay){closeSheet();toast(`اخرج من التطبيق، الإشعار جاي بعد ${delay} ثواني`);setTimeout(fire,delay*1000)}else fire();
}
async function pushAlerts(){
  if(DEMO)return;
  try{
    if(!('Notification' in window)||Notification.permission!=='granted')return;
    const sent=JSON.parse(localStorage.getItem(NKEY)||'{}'),td=today();
    const list=unread().filter(a=>sent[a.id]!==td);if(!list.length)return;
    if(list.length>3)await showNotif(`${appName()}: عندك ${list.length} تنبيه`,{body:list.slice(0,3).map(a=>a.ic+' '+a.title).join('\n'),tag:'masrofi-sum'});
    else for(const a of list)await showNotif(a.ic+' '+a.title,{body:a.body,tag:a.id});
    list.forEach(a=>sent[a.id]=td);localStorage.setItem(NKEY,JSON.stringify(sent));
  }catch(e){}
}

/* ========== القفل: رقم سري + بصمة ========== */
async function hash(s){
  try{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('masrofi:'+s));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
  catch(e){let h=0;for(const c of 'masrofi:'+s)h=(h*31+c.charCodeAt(0))|0;return 'x'+h}
}
const rnd=n=>crypto.getRandomValues(new Uint8Array(n));
const b64=buf=>btoa(String.fromCharCode(...new Uint8Array(buf)));
const unb64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
function showLock(){
  if(!LK.pin)return;closeSheet();closeViewer();hideBanner();$('#rv').classList.remove('on');if(SCAN)SCAN.close();SHOWAMT=false;
  $('#lkname').textContent=appName();$('#lkpin').value='';
  $('#lkbio').style.display=LK.bio?'':'none';$('#lkbrand').innerHTML=brand();
  $('#lock').classList.add('on');autoBio();$('#lkhint').style.display=LK.bio?'':'none';
}
function unlock(){$('#lock').classList.remove('on');render();pushAlerts();inAppAlerts()}
async function tryPin(){const v=$('#lkpin').value;if(!v)return;if(await hash(v)===LK.pin)unlock();else{$('#lkpin').value='';toast('الرقم السري غلط')}}
async function bioEnable(){
  try{
    if(!window.PublicKeyCredential||!(await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()))return toast('الجهاز ده مش بيدعم البصمة');
    const c=await navigator.credentials.create({publicKey:{challenge:rnd(32),rp:{name:appName()},user:{id:rnd(16),name:'masrofi-user',displayName:appName()},
      pubKeyCredParams:[{type:'public-key',alg:-7},{type:'public-key',alg:-257}],
      authenticatorSelection:{authenticatorAttachment:'platform',userVerification:'required',residentKey:'discouraged'},timeout:60000,attestation:'none'}});
    LK.bio=b64(c.rawId);saveLK();render();toast('اتفعّلت البصمة ✓');
  }catch(e){toast('ما اتفعّلتش البصمة')}
}
function bioVerify(){return navigator.credentials.get({publicKey:{challenge:rnd(32),allowCredentials:[{type:'public-key',id:unb64(LK.bio),transports:['internal']}],userVerification:'required',timeout:60000}})}
let bioBusy=false;
async function bioUnlock(silent){
  if(!LK.bio||bioBusy||!$('#lock').classList.contains('on'))return;
  bioBusy=true;
  try{await bioVerify();unlock()}
  catch(e){if(silent!==true)toast('البصمة ما اتعرفتش')}
  finally{bioBusy=false}
}
function autoBio(){
  if(!LK.bio)return;let n=0;
  const t=()=>{if(!$('#lock').classList.contains('on'))return;
    if(document.visibilityState==='visible'&&document.hasFocus())bioUnlock(true);
    else if(++n<20)setTimeout(t,300)};
  setTimeout(t,350);
}
$('#lock').addEventListener('click',e=>{if(!e.target.closest('input,button'))bioUnlock()});
async function forgotPin(){
  if(!await ask('نسيت الرقم السري؟','هيتمسح كل البيانات من الجهاز ده ويتشال الرقم السري.\nلو عندك نسخة احتياطية تقدر ترجعها بعدين.',{danger:true,icon:'⚠️',ok:'مسح البيانات'}))return;
  if(!await ask('آخر تأكيد','المسح مش هيترجع.',{danger:true,icon:'🗑',ok:'امسح'}))return;
  localStorage.removeItem(KEY);localStorage.removeItem(LKEY);try{indexedDB.deleteDatabase('masrofi-files')}catch(e){}location.reload();
}
function pinForm(){
  sheet(`<h2>${LK.pin?'تغيير':'تفعيل'} الرقم السري</h2>
  ${LK.pin?'<label>الرقم السري الحالي<input id="p0" type="password" inputmode="numeric"></label>':''}
  <label>الرقم السري الجديد<input id="p1" type="password" inputmode="numeric"></label>
  <label>تأكيد الرقم السري<input id="p2" type="password" inputmode="numeric"></label>
  <button class="btn" onclick="pinSave()">حفظ</button>`);
}
async function pinSave(){
  if(LK.pin&&await hash($('#p0').value)!==LK.pin)return toast('الرقم السري الحالي غلط');
  const a=$('#p1').value,b=$('#p2').value;
  if(a.length<4)return toast('الرقم السري 4 أرقام على الأقل');
  if(a!==b)return toast('الرقمين مش زي بعض');
  LK.pin=await hash(a);if(LK.after==null)LK.after=1;saveLK();closeSheet();render();toast('اتحفظ ✓');
}
function pinOffForm(){sheet(`<h2>إلغاء الرقم السري</h2><label>الرقم السري الحالي<input id="p0" type="password" inputmode="numeric"></label><button class="btn dz" onclick="pinOff()">إلغاء القفل</button>`)}
async function pinOff(){if(await hash($('#p0').value)!==LK.pin)return toast('الرقم السري غلط');LK={};saveLK();closeSheet();render();toast('اتلغى الرقم السري')}

/* ========== إخفاء المبالغ ========== */
let SHOWAMT=false,amtT;
const amtHidden=()=>S.settings.mask!==false&&!SHOWAMT;
const mk=()=>`<span class="msk" onclick="event.stopPropagation();revealAmts()">••••••</span>`;
async function revealAmts(){
  if(LK.bio){try{await bioVerify()}catch(e){return toast('البصمة ما اتعرفتش')}}
  else if(LK.pin){const v=await ask('الرقم السري','',{input:'',num:true,pw:true,icon:'🔒',ok:'إظهار'});if(v==null)return;if(await hash(v)!==LK.pin)return toast('الرقم السري غلط')}
  SHOWAMT=true;render();clearTimeout(amtT);amtT=setTimeout(()=>{SHOWAMT=false;if(view==='home')render()},60000);
}
function hideAmts(){SHOWAMT=false;clearTimeout(amtT);render()}

/* ========== العرض العام ========== */
const NAVOF={home:'home',col:'col',annual:'col',exps:'exps',contacts:'contacts',docs:'docs',reports:'reports'};
function navHTML(){
  const on=NAVOF[view]||'more';
  const b=(v,ic,l,click)=>`<button class="${on===v?'on':''}" onclick="${click||`go('${v}')`}"><span>${ic}</span>${esc(l)}</button>`;
  return b('home','🏠',L('home'))+b('col','💰',L('col'))+b('exps','💸',L('exps'))
    +`<button class="fab" onclick="newTx(view==='col'||view==='annual'?'inc':view==='pmv'?'tr':'exp')" aria-label="+">+</button>`
    +b('contacts','📇',L('contacts'))+b('docs','📎',L('docs'))+b('reports','📊',L('reports'),"rtab='';go('reports')")+b('more','☰',L('more'));
}
function render(){
  $('nav').innerHTML=navHTML();
  $('#view').innerHTML=(DEMO?`<div class="demo">🧪 النسخة التجريبية<button class="mini" onclick="exitDemo()">↩️ خروج</button></div>`:'')
    +({home:vHome,col:vCol,annual:vAnnual,exps:vExps,items:vItems,reports:vReports,settings:vSettings,more:vMore,inst:vInst,plan:vPlan,docs:vDocs,pmv:vPmv,months:vMonths,cash:vCash,wallet:vWallet,contacts:vContacts,buy:vBuy})[view]()+brand();
  updateBell();hydrate();
}
let VH=[];
function go(v,noHist){
  if(!noHist&&v!==view){VH.push({view,rtab,stab});if(VH.length>40)VH.shift()}
  if(v!==view){GOPEN={};if(SHOWAMT){SHOWAMT=false;clearTimeout(amtT)}}
  view=v;render();scrollTo(0,0);
}
function goBack(){
  if(view==='reports'&&rtab){rtab='';render();return true}
  if(view==='settings'&&stab){stab='';render();return true}
  const p=VH.pop();
  if(p){rtab=p.rtab;stab=p.stab;go(p.view,true);return true}
  if(view!=='home'){go('home',true);return true}
  return false;
}
let backAt=0;
function handleBack(){
  if($('#dlg').classList.contains('on')){($('#dno').style.display!=='none'?$('#dno'):$('#dyes')).click();return true}
  if(SCAN){SCAN.close();return true}
  if($('#lock').classList.contains('on'))return false;
  if($('#viewer').classList.contains('on')){closeViewer();return true}
  if($('#sheet').classList.contains('open')){sheetBack();return true}
  if($('#rv').classList.contains('on')){rvBack();return true}
  return goBack();
}
history.replaceState({fb:0},'');history.pushState({fb:1},'');
document.addEventListener('pointerdown',()=>{if(!history.state||history.state.fb!==1)history.pushState({fb:1},'')},true);
addEventListener('popstate',()=>{
  if(handleBack()){history.pushState({fb:1},'');return}
  if(Date.now()-backAt<2000){history.back();return}
  backAt=Date.now();history.pushState({fb:1},'');toast('دوس رجوع تاني للخروج');
});
function gocol(k){if(k){const[y,m]=k.split('-').map(Number);cur.y=y;cur.m=m}go('col')}
function goexp(k){if(k){const[y,m]=k.split('-').map(Number);cur.y=y;cur.m=m}go('exps')}
function shiftM(d){cur.m+=d;if(cur.m<1){cur.m=12;cur.y--}if(cur.m>12){cur.m=1;cur.y++}render()}
const stTag2=k=>S.closed[k]?`<span class="lock" onclick="go('months')">🔒 اتقفل</span>`:`<span class="lock op" onclick="go('months')">🔓 مفتوح</span>`;
function monthBar(noLock){const k=ym(cur.y,cur.m);return `<div class="mbar"><button onclick="shiftM(-1)">›</button><b>${MONTHS[cur.m-1]} ${cur.y} ${noLock?'':stTag2(k)}</b><button onclick="shiftM(1)">‹</button></div>`}
function yearBar(){return `<div class="mbar"><button onclick="cur.y--;render()">›</button><b>${cur.y}</b><button onclick="cur.y++;render()">‹</button></div>`}
const tabsHTML=(arr,curv,setter)=>`<div class="tabs">${arr.map(([k,l])=>`<button class="${curv===k?'on':''}" onclick="${setter}='${k}';render()">${esc(l)}</button>`).join('')}</div>`;
const kpis=a=>`<div class="kpis">${a.map(([l,v,c])=>`<div class="kpi ${c||''}"><small>${esc(l)}</small><b>${v}</b></div>`).join('')}</div>`;
const sec=t=>`<div class="sec">${t}</div>`;
const COLL='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const tbl=(head,rows,foot)=>`<div class="ptbl"><table><thead><tr class="cl"><th class="rn"></th>${head.map((_,i)=>`<th>${COLL[i]||''}</th>`).join('')}</tr><tr class="hd"><th class="rn">#</th>${head.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r,i)=>r.replace(/^\s*<tr([^>]*)>/,`<tr$1><td class="rn">${i+1}</td>`)).join('')}</tbody>${foot?`<tfoot>${foot.replace(/<tr([^>]*)>/g,'<tr$1><td class="rn">Σ</td>')}</tfoot>`:''}</table></div>`;
const tag=t=>`<span class="tag ${t}">${esc(t==='exp'?L('expOne'):t==='tr'?'تحويل':L('incOne'))}</span>`;
const pbar=(p,c)=>`<div class="pb"><div class="pbar"><i style="width:${Math.min(100,p)}%;background:${c}"></i></div><small>${Math.round(p)}%</small></div>`;
function grp(key,title,n,sum,cls,inner){
  const op=!!GOPEN[key];
  return `<details class="grp" ${op?'open':''} ontoggle="GOPEN['${key}']=this.open"><summary><span>${title}</span><span class="badge ${n?'soon':'rej'}">${n}</span><b class="gs ${cls||''}">${num(sum)}</b></summary>${inner||'<p class="empty">لا يوجد</p>'}</details>`;
}
function stTag(s,due){
  if(s.st==='done')return '<span class="tag ok">تم ✓</span>';
  if(s.st==='old')return '<span class="tag rej">سابق</span>';
  if(s.st==='skip')return '<span class="tag rej">اتلغى</span>';
  if(due&&due<today())return '<span class="tag late">متأخر</span>';
  return '<span class="tag wait">منتظر</span>';
}
function opsTable(list,hid){
  if(!list.length)return '<p class="empty">لا يوجد عمليات</p>';
  return tbl(['التاريخ','البند','المبلغ','📎'],[...list].sort(byDesc).map(t=>`<tr class="clk" onclick="editTx('${t.id}')"><td>${fd(t.date)}</td><td class="wrap"><b>${esc(txName(t))}</b>${t.pend?' <span class="tag wait">منتظر</span>':''}${sm([t.type!=='tr'?M(t.method)?.name:'',t.note].filter(Boolean).map(esc).join(' · '))}</td><td class="${t.type}"><b>${hid?'••••':num(t.amount)}</b></td><td>${(t.files||[]).length?'📎':''}</td></tr>`));
}
function txBody(t){
  const bb=S.buys.find(b=>b.txId===t.id);
  return `<div class="kv"><span>التاريخ</span><b>${fdate(t.date)}</b></div>
  <div class="kv"><span>${t.type==='exp'?'دفعت من':'استلمت في'}</span><b>${esc(M(t.method)?.name||'—')}</b></div>
  ${t.via?`<div class="kv"><span>الطريقة</span><b>${viaTxt(t.via)}</b></div>`:''}
  ${t.post?`<div class="kv"><span>اتأجّل قبل كده</span><b>${t.post} مرة</b></div>`:''}
  ${t.note?`<div class="kv"><span>ملاحظة</span><b>${esc(t.note)}</b></div>`:''}
  ${(t.files||[]).length?`<div class="files">${t.files.map(id=>fileThumb(id,'view')).join('')}</div>`:''}
  <div class="etbar" style="margin:8px 0 0"><button class="mini pri" onclick="editTx('${t.id}')">✏️ تعديل</button>${bb?`<button class="mini" onclick="buySheet('${bb.id}')">🛒 الأصناف (${bb.items.length})</button>`:''}</div>`;
}

/* ========== فتح التقارير من الشاشات ========== */
function openRep(key,set){closeSheet();$('#rv').classList.remove('on');RVST=[];RF={...RFDEF};rtab=key;if(set)set();go('reports')}
function setRFmonth(y,m){const k=ym(y,m);if(k===NKM)RF.period='m';else{RF.period='custom';[RF.from,RF.to]=mRange(k)}}
function openFlow(kind,y,m){openRep('stmt',()=>{RF.type=kind;setRFmonth(y||NY,m||NM)})}
function openStmt(kind,id){openRep('ops',()=>{if(kind==='cat'){RF.cat=id;RF.type=C(id)?.kind||'all'}else RF.method=id;setRFmonth(cur.y,cur.m)})}
const repBtn=(label,js)=>`<button class="btn" onclick="${js}">📄 ${label}</button>`;

/* ========== الرئيسية ========== */
function tileHTML(t){const v=!t.nomask&&amtHidden()&&/\d/.test(String(t.val))?mk():t.val;return `<div class="tile ${t.cls||''}" onclick="${t.go}"><div class="tth"><span class="ti">${t.ic}</span><span class="tl">${esc(t.label)}</span>${t.badge?`<span class="tb">${t.badge}</span>`:''}</div><b>${v}</b>${t.sub?`<small>${t.sub}</small>`:''}</div>`}
const REPVAL={
  stmt:()=>{const s=sums(keyTx(NKM));return[netTxt(s.net),L('net')+' · '+MONTHS[NM-1],true]},
  ops:()=>[keyTx(NKM).length+' عملية',MONTHS[NM-1],true],
  month:()=>{const s=sums(keyTx(NKM));return[netTxt(s.net),L('net')+' · '+MONTHS[NM-1],true]},
  year:()=>{const s=sums(S.txs.filter(t=>!t.pend&&t.date.startsWith(NY+'-')));return[netTxt(s.net),L('net')+' · '+NY,true]},
  cmp:()=>['عرض ‹','آخر 6 شهور',true],
  cols:()=>[fmt(sums(keyTx(NKM)).inc),'المحصّل · '+MONTHS[NM-1],true],
  contracts:()=>{const a=annualDue();return[a.length?fmt(a[0].amt):'—',a.length?esc(a[0].r.name)+' · '+leftTxt(a[0].left):'لا يوجد',a.length>0]},
  inst:()=>{const d=instDue();return[d.length?fmt(+d[0].it.amount||0):'—',d.length?esc(d[0].p.name)+' · '+leftTxt(d[0].left):'لا يوجد',d.length>0]},
  pmr:()=>[fmt(sums(keyTx(NKM)).exp),'المصروف · '+MONTHS[NM-1],true],
  cash:()=>{const l=cashOf(NKM);return[fmt(l.reduce((a,c)=>a+c.amount,0)),l.length+' مرة · '+MONTHS[NM-1],l.length>0]}
};
function pinName(p){return p.type==='rep'?REPS[p.ref]?.t:p.type==='pm'?M(p.ref)?.name:p.type==='plan'?plan(p.ref)?.name:C(p.ref)?.name}
function pinType(p){if(p.type==='rep')return 'تقرير';if(p.type==='pm')return 'حساب';if(p.type==='plan')return 'قسط';const c=C(p.ref);return !c?'':c.fixed?(isAnn(c)?'بند سنوي':'بند ثابت'):(c.kind==='inc'?'بند تحصيل':'بند مصروف')}
function pinTile(p){
  if(p.type==='rep'){const r=REPS[p.ref];if(!r)return null;const[v,s,rel]=(REPVAL[p.ref]||(()=>['عرض ‹','',true]))();return{ic:r.ic,label:r.t,val:v,sub:s,go:`openRep('${p.ref}')`,rel}}
  if(p.type==='pm'){const m=M(p.ref);if(!m)return null;const l=keyTx(NKM).filter(t=>t.method===m.id),s=sums(l);return{ic:'🏦',label:m.name,val:fmt(s.exp),sub:'المصروف · '+MONTHS[NM-1],go:`cur.y=NY;cur.m=NM;openStmt('pm','${m.id}')`,rel:l.length>0}}
  if(p.type==='plan'){const pl=plan(p.ref);if(!pl)return null;const st=planStats(pl),nx=st.next,left=nx?daysBetween(nx.due,today()):null;
    return{ic:'🏦',label:pl.name,val:nx?fmt(+nx.amount||0):'خلصت ✓',sub:nx?`${fdate(nx.due)} · ${leftTxt(left)}`:'',cls:nx&&left<0?'hot':nx&&left<=leadI()?'soon':'',go:`instPlan='${pl.id}';go('plan')`,rel:!!nx&&left<=leadI()}}
  const c=C(p.ref);if(!c)return null;
  if(c.fixed&&c.start&&isAnn(c)){const k=nextOcc(c),d=occDate(c,k),left=daysBetween(d,today());return{ic:'📆',label:c.name,val:fmt(occAmt(c,k)),sub:`${fdate(d)} · ${leftTxt(left)}`,cls:left<0?'hot':left<=leadA()?'soon':'',go:`cur.y=${+d.slice(0,4)};go('annual')`,rel:left<=leadA()}}
  if(c.fixed&&c.start){const k=occK(c,NKM),go=c.kind==='inc'?`gocol('${NKM}')`:`goexp('${NKM}')`,W=c.kind==='inc'?'اتحصّل':'اتدفع';
    if(k<0)return{ic:'📌',label:c.name,val:'—',sub:'مالوش ميعاد الشهر ده',go,rel:false};
    const s=stOf(occRec(c,k));return{ic:'📌',label:c.name,val:fmt(s.st==='done'?s.t.amount:occAmt(c,k)),sub:s.st==='done'?'✓ '+W:'لسه ما '+W+'ش',cls:s.st==='done'?'':'hot',go,rel:s.st==='wait'}}
  const v=keyTx(NKM).filter(t=>t.cat===c.id).reduce((a,t)=>a+t.amount,0);
  return{ic:c.kind==='exp'?'🏷️':'💵',label:c.name,val:fmt(v),sub:MONTHS[NM-1],go:`cur.y=NY;cur.m=NM;openStmt('cat','${c.id}')`,rel:v>0};
}
function vHome(){
  const mn=MONTHS[NM-1],s=sums(keyTx(NKM)),pk=prevKey(NKM),tiles=[],hid=amtHidden(),A=v=>hid?mk():v;
  let h='';
  if(!S.closed[pk]&&keyTx(pk).length)h+=`<div class="warn" onclick="go('months')">⚠️ ${mName(pk)} لسه مفتوح</div>`;
  if(wOn('cur',true))h+=`<div class="hero"><div class="hero-t"><span>${esc(L('cur'))}</span><span class="hm">${mn}</span>${S.settings.mask!==false?`<em class="eye" onclick="${hid?'revealAmts()':'hideAmts()'}">${hid?'👁️':'🙈'}</em>`:''}${S.closed[NKM]?`<em class="cl" onclick="go('months')">🔒 اتقفل</em>`:`<em class="op" onclick="go('months')">🔓 مفتوح</em>`}</div>
    <div class="hbtns"><button onclick="openFlow('inc')"><small>${esc(L('inc'))}</small><b>${A(num(s.inc))}</b><i>التفاصيل ‹</i></button><button onclick="openFlow('exp')"><small>${esc(L('exp'))}</small><b>${A(num(s.exp))}</b><i>التفاصيل ‹</i></button></div>
    <div class="hnet"><span>${esc(L('net'))}</span>${hid?`<b>${mk()}</b>`:s.net<0?`<b class="hneg">${num(-s.net)} ج.م · سالب</b>`:`<b>${num(s.net)} ج.م</b>`}</div></div>`;
  const pend=pendAll(),pv=pend.reduce((a,x)=>a+x.a,0);
  if(wOn('pending',pend.length))tiles.push({ic:'💼',label:'غير محصّل',val:pend.length?fmt(pv):'✓ كله اتحصّل',sub:pend.length?`${pend.length} بند`:mn,cls:pend.length?'hot':'',badge:pend.length,go:'pendingSheet()'});
  const ad=annualDue();
  if(wOn('annual',ad.length))tiles.push({ic:'📆',label:'تحصيلات سنوية قريبة',val:ad.length?fmt(ad.reduce((a,o)=>a+o.amt,0)):'لا يوجد',sub:ad.length?`${esc(ad[0].r.name)} · ${leftTxt(ad[0].left)}`:`خلال ${leadA()} يوم`,cls:ad.some(o=>o.left<0)?'hot':ad.length?'soon':'',badge:ad.length,go:'annualSheet()'});
  const idue=instDue();
  if(wOn('inst',idue.length))tiles.push({ic:'🏦',label:'أقساط قريبة',val:idue.length?fmt(idue.reduce((a,o)=>a+(+o.it.amount||0),0)):'لا يوجد',sub:idue.length?`${esc(idue[0].p.name)} · ${leftTxt(idue[0].left)}`:`خلال ${leadI()} يوم`,cls:idue.some(o=>o.left<0)?'hot':idue.length?'soon':'',badge:idue.length,go:'instSheet()'});
  const rd=renDue();
  if(wOn('renew',rd.length))tiles.push({ic:'🪪',label:'كروت شخصية',val:rd.length?esc(rd[0].r.name):'لا يوجد',sub:rd.length?(rd[0].left<0?`منتهي من ${-rd[0].left} يوم`:`باقي ${rd[0].left} يوم`):'',cls:rd.some(x=>x.left<0)?'hot':rd.length?'soon':'',badge:rd.length,go:"wtab='ren';go('wallet')",nomask:1});
  const cl=cashOf(NKM),ct=cl.reduce((a,c)=>a+c.amount,0);
  if(wOn('cash',cl.length))tiles.push({ic:'🏧',label:'سحب كاش · '+mn,val:fmt(ct),sub:`${cl.length} مرة`,go:'cashSheet()'});
  const ci=catItems(keyTx(NKM),'exp');
  if(wOn('topexp',ci.length))tiles.push({ic:'💸',label:'أكبر مصروف · '+mn,val:ci.length?fmt(ci[0].value):'—',sub:ci.length?esc(ci[0].label):'لا يوجد',go:'topSheet()'});
  (S.settings.pins||[]).forEach(p=>{if(p.mode==='hide')return;const t=pinTile(p);if(t&&(p.mode==='show'||t.rel))tiles.push(t)});
  if(tiles.length)h+=`<div class="dash">${tiles.map(tileHTML).join('')}</div>`;
  if(wOn('recent',true))h+='<h3>آخر العمليات</h3>'+opsTable(keyTx(NKM).sort(byDesc).slice(0,8),hid);
  return h;
}
function pendingSheet(){
  const items=sortList(pendAll());
  const row=x=>{
    if(x.o){const o=x.o,late=o.date<today();return `<div class="ckx"><input type="checkbox" onchange="recToggle('${o.r.id}',${o.k},this)"><div class="row grow" style="border:0" onclick="occSheet('${o.r.id}',${o.k})"><div class="grow"><b>📌 ${esc(o.r.name)}</b><small class="${late?'neg':''}">${fdate(o.date)}${late?' · متأخر':''}</small></div><div class="amt">${num(o.amt)}</div></div></div>`}
    const t=x.t,late=t.date<today();
    return `<div class="ckx"><input type="checkbox" onchange="txDone('${t.id}',this)"><div class="row grow" style="border:0" onclick="editTx('${t.id}')"><div class="grow"><b>⏳ ${esc(C(t.cat)?.name||'—')}</b><small class="${late?'neg':''}">${fdate(t.date)}${late?' · متأخر':''}${t.post?' · اتأجّل '+t.post+' مرة':''}</small></div><div class="amt">${num(t.amount)}</div></div><button class="mini" onclick="postpone('${t.id}',1)">⏭</button></div>`;
  };
  sheet(`<div class="phead"><h2>💼 غير محصّل</h2><span class="badge ${items.length?'late':'done'}">${items.length||'✓'}</span></div>
  ${items.length?`<div class="list">${items.map(row).join('')}</div>`:'<div class="nempty"><div>✅</div><b>كله اتحصّل</b></div>'}
  ${repBtn('تقرير التحصيلات',"openRep('cols',()=>RF.month=NKM)")}`);
}
function annualSheet(){
  const list=annualDue();
  sheet(`<div class="phead"><h2>📆 تحصيلات سنوية قريبة</h2><span class="badge ${list.length?'soon':'done'}">${list.length||'✓'}</span></div>
  ${list.length?`<div class="list">${list.map(o=>{const last=lastDone(o.r);return `<div class="ckx"><input type="checkbox" onchange="recToggle('${o.r.id}',${o.k},this)"><div class="row grow" style="border:0" onclick="occSheet('${o.r.id}',${o.k})"><div class="grow"><b>${esc(o.r.name)}</b><small class="${o.left<0?'neg':''}">${fdate(o.d)} · ${leftTxt(o.left)}</small>${last||o.r.pct?`<small>${last?'المرة اللي فاتت '+fmt(last.amount):''}${o.r.pct?' · زيادة '+o.r.pct+'%':''}</small>`:''}</div><div class="amt">${num(o.amt)}</div></div></div>`}).join('')}</div>`:`<div class="nempty"><div>✅</div><b>لا يوجد</b></div>`}
  ${repBtn('تقرير التحصيلات السنوية',"openRep('contracts')")}`);
}
function instSheet(){
  const l=instDue();
  sheet(`<div class="phead"><h2>🏦 أقساط قريبة</h2><span class="badge ${l.length?'soon':'done'}">${l.length||'✓'}</span></div>
  ${l.length?`<div class="list">${l.map(o=>`<div class="row"><div class="grow"><b>${esc(o.p.name)}</b><small class="${o.left<0?'neg':''}">${fdate(o.it.due)} · ${leftTxt(o.left)}</small></div><div class="amt">${num(+o.it.amount||0)}</div><button class="mini pri" onclick="payStart('${o.p.id}','${o.it.id}')">✓ دفع</button></div>`).join('')}</div>`:'<div class="nempty"><div>✅</div><b>لا يوجد</b></div>'}
  ${repBtn('تقرير الأقساط',"openRep('inst')")}`);
}
function cashSheet(){
  const l=cashOf(NKM).sort((a,b)=>b.date.localeCompare(a.date)),t=l.reduce((a,c)=>a+c.amount,0);
  sheet(`<div class="phead"><h2>🏧 سحب كاش · ${MONTHS[NM-1]}</h2><button class="mini pri" onclick="cashForm()">+ سحب</button></div>
  ${kpis([['سحبت الشهر ده',fmt(t),'warn'],['عدد المرات',l.length,'net']])}
  ${l.length?`<div class="list">${l.map(c=>`<div class="row" onclick="cashForm('${c.id}')"><span class="ic" style="background:var(--soft)">🏧</span><div class="grow"><b>${esc(M(c.method)?.name||'—')}</b><small>${fdate(c.date)}${c.note?' · '+esc(c.note):''}</small></div><div class="amt">${num(c.amount)}</div></div>`).join('')}</div>`:'<div class="nempty"><div>🏧</div><b>لا يوجد</b></div>'}
  ${repBtn('تقرير السحب الكاش',"openRep('cash',()=>RF.year=NY)")}`);
}
function topSheet(){
  const ci=catItems(keyTx(NKM),'exp'),mx=ci.length?ci[0].value:1,tot=sums(keyTx(NKM)).exp;
  sheet(`<div class="phead"><h2>💸 ${esc(L('exp'))} · ${MONTHS[NM-1]}</h2><span class="badge late">${num(tot)}</span></div>
  ${ci.length?`<div class="list">${ci.map(c=>`<div class="row col" ${c.id?`onclick="cur.y=NY;cur.m=NM;openStmt('cat','${c.id}')"`:''}><div class="rowin"><span>${esc(c.label)}</span><b>${num(c.value)}</b></div><div class="bar"><i style="width:${c.value/mx*100}%;background:${c.color}"></i></div></div>`).join('')}</div>`:'<div class="nempty"><div>💸</div><b>لا يوجد</b></div>'}
  ${repBtn('التقرير الشهري',"openRep('month',()=>RF.month=NKM)")}`);
}

/* ========== صفوف القوايم ========== */
function fixedRow(o){
  const inc=o.r.kind==='inc',done=o.s.st==='done',old=o.s.st==='old',skip=o.s.st==='skip',late=!done&&!old&&!skip&&o.date<today(),W=inc?'اتحصّل':'اتدفع';
  const sub=done?W+' '+dmy(o.s.t.date):old?'مسجّل سابقاً':skip?'اتلغى الشهر ده':inc?(late?'متأخر':'منتظر')+' · ميعاده '+fd(o.date):(late?'متأخر · '+fd(o.date):'بينزل يوم '+fd(o.date));
  const body=done?txBody(o.s.t):`<div class="kv"><span>الميعاد</span><b>${fdate(o.date)}</b></div><div class="kv"><span>التكرار</span><b>${everyTxt(o.r.every)}</b></div><div class="kv"><span>القيمة</span><b>${fmt(o.amt)}</b></div>${o.r.acct&&M(o.r.acct)?`<div class="kv"><span>${inc?'بيتحصّل على':'بيتدفع من'}</span><b>${esc(M(o.r.acct).name)}</b></div>`:''}${o.r.note?`<div class="kv"><span>ملاحظة</span><b>${esc(o.r.note)}</b></div>`:''}
    <div class="etbar" style="margin:8px 0 0">${old?'':`<button class="mini pri" onclick="occSheet('${o.r.id}',${o.k})">✏️ تعديل</button>`}<button class="mini" onclick="catForm('${o.r.id}')">⚙️ البند</button></div>`;
  return `<div class="ckx"><input type="checkbox" ${done||old?'checked':''} ${old?'disabled':''} onchange="recToggle('${o.r.id}',${o.k},this)"><details class="xr ${done?'done':''}"><summary><div class="grow"><b>📌 ${esc(o.r.name)}</b><small class="${late?'neg':''}">${sub}</small></div><div class="amt ${done?(inc?'inc':'exp'):''}">${num(done?o.s.t.amount:o.amt)}</div></summary><div class="xb">${body}</div></details></div>`;
}
function txRow(t){
  const inc=t.type==='inc',W=inc?'اتحصّل':'اتدفع',late=t.pend&&t.date<today(),fromOld=t.pend&&t.date<ym(cur.y,cur.m)+'-01',nf=(t.files||[]).length;
  const sub=t.pend?`${late?'متأخر':'منتظر'} · ميعاده ${fd(t.date)}${fromOld?' (من '+MONTHS[+t.date.slice(5,7)-1]+')':''}${t.post?' · اتأجّل '+t.post+' مرة':''}`
    :`${W} ${dmy(t.date)} · ${esc(M(t.method)?.name||'')}${t.via?' · '+viaTxt(t.via):''}${nf?' · 📎':''}`;
  const body=t.pend?`<div class="kv"><span>الميعاد</span><b>${fdate(t.date)}</b></div><div class="kv"><span>${inc?'هيتحصّل على':'هيتدفع من'}</span><b>${esc(M(t.method)?.name||'—')}</b></div>${t.via?`<div class="kv"><span>الطريقة</span><b>${viaTxt(t.via)}</b></div>`:''}${t.post?`<div class="kv"><span>اتأجّل</span><b>${t.post} مرة</b></div>`:''}${t.note?`<div class="kv"><span>ملاحظة</span><b>${esc(t.note)}</b></div>`:''}${nf?`<div class="files">${t.files.map(id=>fileThumb(id,'view')).join('')}</div>`:''}
    <div class="etbar" style="margin:8px 0 0"><button class="mini pri" onclick="editTx('${t.id}')">✏️ تعديل</button><button class="mini" onclick="postpone('${t.id}')">⏭ أجّل للشهر الجاي</button></div>`:txBody(t);
  return `<div class="ckx"><input type="checkbox" ${t.pend?'':'checked'} onchange="txDone('${t.id}',this)"><details class="xr ${t.pend?'':'done'}"><summary><div class="grow"><b>${t.pend?'⏳ ':''}${esc(C(t.cat)?.name||'—')}${isAnnualTx(t)?' <span class="tag ctr">سنوي</span>':''}</b><small class="${late?'neg':''}">${sub}</small></div><div class="amt ${t.pend?'':(inc?'inc':'exp')}">${num(t.amount)}</div></summary><div class="xb">${body}</div></details></div>`;
}
async function txDone(id,el){
  const t=S.txs.find(x=>x.id===id);if(!t)return;const inc=t.type==='inc';
  if(t.pend){
    const d=today();
    if(isClosed(d)){el.checked=false;return toast('الشهر الحالي مقفول')}
    t.due=t.date;t.pend=false;t.date=d;save();render();toast(inc?`اتحصّل ${fmt(t.amount)} ✓`:`اتدفع ${fmt(t.amount)} ✓`);
  }else{
    el.checked=true;
    if(isClosed(t.date))return toast('الشهر مقفول');
    if(!inc)return;
    if(!await ask('ترجعه "غير محصّل"؟',`${C(t.cat)?.name||''} · ${fmt(t.amount)}`,{icon:'↩️',ok:'رجّعه',cancel:'رجوع'}))return;
    t.pend=true;if(t.due){t.date=t.due;delete t.due}save();render();toast('رجع منتظر');
  }
}
function postpone(id,fromSheet){
  const t=S.txs.find(x=>x.id===id);if(!t||!t.pend)return;
  t.date=addMonths(t.date<ym(NY,NM)+'-01'?NKM+t.date.slice(7):t.date,1);t.post=(t.post||0)+1;
  save();render();toast(`اتأجّل لـ ${fdate(t.date)} ⏭`);
  if(fromSheet)pendingSheet();
}

/* ========== المصروفات ========== */
function vExps(){
  const k=ym(cur.y,cur.m),list=keyTx(k).filter(t=>t.type==='exp'),tot=list.reduce((a,t)=>a+t.amount,0);
  const dl=dueList(k,'','exp'),linked=new Set(dl.filter(o=>o.s.st==='done').map(o=>o.s.t.id));
  const others=list.filter(t=>!linked.has(t.id)),ptx=pendTx('exp',k);
  const fixSum=dl.reduce((a,o)=>a+(o.s.st==='done'?o.s.t.amount:o.s.st==='skip'?0:o.amt),0);
  const g={};others.forEach(t=>(g[t.cat]=g[t.cat]||[]).push(t));
  const groups=sortList(Object.entries(g).map(([id,ts])=>({id,ts,a:ts.reduce((a,t)=>a+t.amount,0),d:ts.map(t=>t.date).sort().pop(),n:C(id)?.name||''})),true);
  const mx=Math.max(1,...groups.map(x=>x.a)),oSum=others.reduce((a,t)=>a+t.amount,0);
  let h=`<div class="phead"><h3>💸 ${esc(L('exp'))}</h3><button class="mini" onclick="scanReceipt()">📷 Receipt Scan</button><button class="mini pri" onclick="newTx('exp')">+ ${esc(L('expOne'))}</button></div>`+monthBar()
    +kpis([['اتصرف',fmt(tot),'exp'],['ثابت',fmt(fixSum),'warn'],['عدد العمليات',list.length,'net']])+sortBar();
  const fl=sortList(dl.map(o=>({h:fixedRow(o),a:o.s.t?o.s.t.amount:o.amt,d:o.date,n:o.r.name})));
  h+=grp('ef','📌 ثابت',fl.length,fixSum,'neg',fl.map(x=>x.h).join('')+`<div style="padding:8px 12px"><button class="mini pri" onclick="catForm(null,'exp',{fixed:true})">+ مصروف ثابت</button></div>`);
  if(ptx.length)h+=grp('ep','⏳ لسه ما اتدفعش',ptx.length,ptx.reduce((a,t)=>a+t.amount,0),'neg',ptx.map(txRow).join(''));
  h+=grp('eg','💸 المصروفات · حسب البند',groups.length,oSum,'neg',groups.map(gr=>`<details class="xr"><summary><div class="grow"><b>${esc(gr.n||'—')}</b><small>${gr.ts.length} عملية</small><div class="bar"><i style="width:${gr.a/mx*100}%;background:#dc2626"></i></div></div><div class="amt exp">${num(gr.a)}</div></summary>
    <div class="xb">${sortList(gr.ts.map(t=>({t,a:t.amount,d:t.date,n:t.note||''})),true).map(({t})=>`<div class="xl" onclick="editTx('${t.id}')"><span>${fd(t.date)}</span><div class="grow">${esc(t.note||M(t.method)?.name||'')}${t.via?' · '+viaTxt(t.via):''}</div>${(t.files||[]).length?'📎':''}<b class="neg">${num(t.amount)}</b></div>`).join('')}</div></details>`).join(''));
  return h;
}

/* ========== السحب الكاش ========== */
function vCash(){
  const k=ym(cur.y,cur.m),list=sortList(cashOf(k).map(c=>({c,a:c.amount,d:c.date,n:M(c.method)?.name||''})),true),tot=list.reduce((a,x)=>a+x.a,0);
  const yl=S.cash.filter(c=>c.date.startsWith(cur.y+'-')),yt=yl.reduce((a,c)=>a+c.amount,0);
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏧 ${esc(L('cash'))}</h3><button class="mini pri" onclick="cashForm()">+ سحب</button></div>`+monthBar(true)
    +kpis([['سحبت الشهر ده',fmt(tot),'warn'],['عدد المرات',list.length,'net'],['إجمالي '+cur.y,fmt(yt),'net']])+sortBar();
  h+=list.length?`<div class="list">${list.map(({c})=>`<div class="row" onclick="cashForm('${c.id}')"><span class="ic" style="background:var(--soft)">🏧</span><div class="grow"><b>${esc(M(c.method)?.name||'—')}</b><small>${fdate(c.date)}${c.note?' · '+esc(c.note):''}</small></div><div class="amt">${num(c.amount)}</div></div>`).join('')}</div>`:'<p class="empty">لا يوجد</p>';
  const ms=MONTHS.map((n,i)=>[n,cashOf(ym(cur.y,i+1)).reduce((a,c)=>a+c.amount,0)]).filter(x=>x[1]);
  if(ms.length)h+=`<h3>${cur.y} شهر بشهر</h3>`+tbl(['الشهر','المسحوب'],ms.map(([n,v])=>`<tr><td><b>${n}</b></td><td><b>${num(v)}</b></td></tr>`),`<tr><td>الإجمالي</td><td>${num(yt)}</td></tr>`);
  return h;
}
function cashForm(id){
  const c=id?S.cash.find(x=>x.id===id):{amount:'',method:(S.methods.find(m=>m.active&&m.type!=='cash')||S.methods.find(m=>m.active)||{}).id,date:today(),note:''};
  const meths=S.methods.filter(m=>m.active||m.id===c.method);
  sheet(`<h2>🏧 ${id?'تعديل':'تسجيل'} سحب كاش</h2>
  <input id="c-amt" class="amt-in" type="text" inputmode="decimal" value="${c.amount?amtStr(c.amount):''}" placeholder="0">
  <label>سحبت من حساب<select id="c-m">${opt(meths,c.method)}</select></label>
  <div class="two"><label>التاريخ<input id="c-d" type="date" value="${c.date}"></label><label>ملاحظة<input id="c-n" value="${esc(c.note||'')}"></label></div>
  <button class="btn" onclick="cashSave('${id||''}')">حفظ</button>
  ${id?`<button class="btn ghost danger" onclick="cashDel('${id}')">حذف</button>`:''}`);
}
function cashSave(id){
  const amount=parseNum($('#c-amt').value);if(!(amount>0))return toast('اكتب المبلغ');
  const date=$('#c-d').value;if(!date)return toast('اختار التاريخ');
  let c=id?S.cash.find(x=>x.id===id):null;if(!c){c={id:uid()};S.cash.push(c)}
  Object.assign(c,{amount,method:$('#c-m').value,date,note:$('#c-n').value.trim()});
  save();closeSheet();render();toast('اتسجّل ✓');
}
async function cashDel(id){if(!await ask('حذف السحب ده؟','',{danger:true,icon:'🗑',ok:'حذف'}))return;S.cash=S.cash.filter(x=>x.id!==id);save();closeSheet();render()}

/* ========== التحصيلات ========== */
function vCol(){
  const key=ym(cur.y,cur.m),dl=dueList(key,'m','inc'),linked=new Set(dl.filter(o=>o.s.st==='done').map(o=>o.s.t.id));
  const others=keyTx(key).filter(t=>t.type==='inc'&&!linked.has(t.id)),ptx=pendTx('inc',key);
  const pendF=dl.filter(o=>o.s.st==='wait'),doneF=dl.filter(o=>o.s.st!=='wait');
  const remF=pendF.reduce((a,o)=>a+o.amt,0),remT=ptx.reduce((a,t)=>a+t.amount,0),rem=remF+remT;
  const got=sums(keyTx(key)).inc,exp=dl.reduce((a,o)=>a+o.amt,0)+remT;
  let h=`<div class="phead"><h3>💰 ${esc(L('inc'))}</h3><button class="mini pri" onclick="newTx('inc')">+ تحصيل جديد</button></div>`
    +monthBar()+kpis([['المحصّل',fmt(got),'inc'],['المتوقع',fmt(exp),'net'],['المتبقي',fmt(rem),'exp']]);
  if(got+rem)h+=`<div class="prog"><i style="width:${Math.min(100,got/(got+rem)*100)}%"></i></div>`;
  h+=sortBar();
  const pl=sortList(pendF.map(o=>({h:fixedRow(o),a:o.amt,d:o.date,n:o.r.name})).concat(ptx.map(t=>({h:txRow(t),a:t.amount,d:t.date,n:C(t.cat)?.name||''}))));
  const dn=sortList(doneF.map(o=>({h:fixedRow(o),a:o.s.t?o.s.t.amount:o.amt,d:o.s.t?o.s.t.date:o.date,n:o.r.name})).concat(others.map(t=>({h:txRow(t),a:t.amount,d:t.date,n:C(t.cat)?.name||''}))),true);
  h+=grp('cp','⏳ غير محصّل',pl.length,rem,'neg',pl.map(x=>x.h).join(''));
  h+=grp('cd','✅ اتحصّل',dn.length,got,'pos',dn.map(x=>x.h).join(''));
  return h;
}
function vAnnual(){
  const y=cur.y,occ=[];
  FX().filter(isAnn).forEach(r=>{
    for(let k=0;k<300;k++){const d=occDate(r,k),yy=+d.slice(0,4);if(yy>y)break;if(yy<y)continue;const s=stOf(occRec(r,k));if(r.active===false&&s.st==='wait')continue;occ.push({r,k,date:d,amt:occAmt(r,k),s})}
  });
  let exp=0,got=0,rem=0;occ.forEach(o=>{exp+=o.amt;if(o.s.st==='done')got+=o.s.t.amount;else if(o.s.st==='wait')rem+=o.amt});
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>📆 ${esc(L('contracts'))}</h3><button class="mini pri" onclick="catForm(null,'inc',{fixed:true,every:12})">+ إضافة</button></div>`
    +yearBar()+kpis([['اتحصّل',fmt(got),'inc'],['المتوقع',fmt(exp),'net'],['المتبقي',fmt(rem),'exp']]);
  if(!occ.length)return h+'<p class="empty">لا يوجد</p>';
  const row=o=>{
    const done=o.s.st==='done',old=o.s.st==='old',late=!done&&!old&&o.date<today(),prev=o.k>0?occActual(o.r,o.k-1):null,inc=o.r.kind==='inc';
    const body=(done?txBody(o.s.t):`<div class="kv"><span>الميعاد</span><b>${fdate(o.date)}</b></div>`)
      +`<div class="kv"><span>التكرار</span><b>${everyTxt(o.r.every)}</b></div>${o.r.pct?`<div class="kv"><span>نسبة الزيادة</span><b>${o.r.pct}%</b></div>`:''}${prev!=null?`<div class="kv"><span>المرة اللي فاتت</span><b>${fmt(prev)}</b></div>`:''}${o.r.note?`<div class="kv"><span>ملاحظة</span><b>${esc(o.r.note)}</b></div>`:''}
      <div class="etbar" style="margin:8px 0 0">${done||old?'':`<button class="mini pri" onclick="occSheet('${o.r.id}',${o.k})">✏️ تعديل</button>`}<button class="mini" onclick="contractSheet('${o.r.id}')">📄 السجل</button><button class="mini" onclick="catForm('${o.r.id}')">⚙️ البند</button></div>`;
    return `<div class="ckx"><input type="checkbox" ${done||old?'checked':''} ${old?'disabled':''} onchange="recToggle('${o.r.id}',${o.k},this)"><details class="xr ${done?'done':''}"><summary><div class="grow"><b>${esc(o.r.name)}${inc?'':' <span class="tag exp">مصروف</span>'}</b><small class="${late?'neg':''}">${MONTHS[+o.date.slice(5,7)-1]} · ${done?'تم '+dmy(o.s.t.date):old?'سابق':late?'متأخر':'منتظر'}</small></div><div class="amt ${done?(inc?'inc':'exp'):''}">${num(done?o.s.t.amount:o.amt)}</div></summary><div class="xb">${body}</div></details></div>`;
  };
  const wrap=list=>sortList(list.map(o=>({o,a:o.s.t?o.s.t.amount:o.amt,d:o.date,n:o.r.name})));
  const wait=wrap(occ.filter(o=>o.s.st==='wait')),fin=wrap(occ.filter(o=>o.s.st!=='wait'));
  return h+sortBar()+grp('ap','⏳ منتظر',wait.length,rem,'neg',wait.map(x=>row(x.o)).join(''))+grp('ad','✅ اتسجّل',fin.length,got,'pos',fin.map(x=>row(x.o)).join(''));
}
function contractSheet(id){
  const r=C(id),nk=nextOcc(r);let rows=[];
  for(let k=0;k<=nk+1;k++){const s=stOf(occRec(r,k)),d=occDate(r,k);rows.push(`<tr class="${s.st==='done'?'clk':''}" ${s.st==='done'?`onclick="editTx('${s.t.id}')"`:''}><td>${dmy2(d)}</td><td>${num(occAmt(r,k))}</td><td>${s.st==='done'?`<b class="inc">${num(s.t.amount)}</b>`:'—'}</td><td>${stTag(s,d)}</td></tr>`)}
  sheet(`<div class="phead"><h2>📄 ${esc(r.name)}</h2><button class="mini" onclick="catForm('${id}')">⚙️ البند</button></div>
  <p class="muted">${everyTxt(r.every)}${r.pct?' · زيادة '+r.pct+'%':''}${r.note?' · '+esc(r.note):''}</p>
  ${tbl(['الميعاد','المتوقع','الفعلي','الحالة'],rows)}
  <div class="two"><button class="btn" onclick="occSheet('${id}',${nk})">✓ تسجيل المرة الجاية</button><button class="btn ghost" onclick="occSetAmt('${id}',${nk})">✏️ مبلغ المرة الجاية</button></div>`);
}
function occSheet(id,k){
  const r=C(id),s=stOf(occRec(r,k));if(s.st==='done')return editTx(s.t.id);if(s.st==='old')return;
  const inc=r.kind==='inc',date=occDate(r,k),prev=k>0?occActual(r,k-1):null,meths=S.methods.filter(m=>m.active);
  sheet(`<h2>✏️ ${esc(r.name)}</h2><p class="muted">${fdate(date)} · ${everyTxt(r.every)}${r.pct?` · زيادة ${r.pct}%`:''}${prev!=null?` · المرة اللي فاتت ${fmt(prev)}`:''}</p>
  <label>المبلغ<input id="k-amt" class="amt-in" type="text" inputmode="decimal" value="${occAmt(r,k)?amtStr(occAmt(r,k)):''}" placeholder="0"></label>
  <div class="two"><label>${inc?'استلمت في حساب':'دفعت من حساب'}<select id="k-m">${opt(meths,r.acct&&M(r.acct)?r.acct:defMethod())}</select></label><label>الطريقة<select id="k-v">${viaOpts(r.via)}</select></label></div>
  <div class="two"><label>التاريخ<input id="k-d" type="date" value="${defCollectDate(date)}"></label><label>ملاحظة<input id="k-n" type="text"></label></div>
  <button class="btn" onclick="occCollect('${id}',${k})">✓ تم ${inc?'التحصيل':'الدفع'}</button>
  <div class="two"><button class="btn ghost" onclick="occSetAmt('${id}',${k})">✏️ المبلغ المتوقع</button><button class="btn ghost" onclick="catForm('${id}')">⚙️ البند</button></div>`);
}
async function occCollect(id,k,quick){
  const r=C(id);let amount,method,via=r.via||'',date,note='';
  if(quick){
    amount=occAmt(r,k);
    if(!(amount>0)){const v=parseNum(await askInput('المبلغ',r.name,'',true));if(!(v>0))return false;amount=v}
    method=r.acct&&M(r.acct)?r.acct:defMethod();date=defCollectDate(occDate(r,k));
  }else{
    amount=parseNum($('#k-amt').value);method=$('#k-m').value;via=$('#k-v').value;date=$('#k-d').value;note=$('#k-n').value.trim();
    if(!(amount>0)){toast('اكتب مبلغ صحيح');return false}
  }
  if(!method){toast('ضيف حساب الأول');return false}
  if(!date){toast('اختار التاريخ');return false}
  if(isClosed(date)){toast(`شهر ${mName(date.slice(0,7))} مقفول`);return false}
  const t={id:uid(),type:r.kind,amount,cat:r.id,method,via,date,note,files:[],created:Date.now(),src:{k:'r',id:r.id,p:k}};
  S.txs.push(t);r.st=r.st||{};r.st[k]={st:'done',txId:t.id,at:Date.now()};
  save();closeSheet();render();toast('اتسجّل ✓');return true;
}
async function recToggle(id,k,el){
  const r=C(id),s=stOf(occRec(r,k));
  if(s.st==='done'){
    el.checked=true;
    if(isClosed(s.t.date))return toast('الشهر مقفول');
    if(!await ask('إلغاء التسجيل؟',`${r.name} · ${fmt(s.t.amount)}`,{danger:true,icon:'↩️',ok:'إلغاء',cancel:'رجوع'}))return;
    S.txs=S.txs.filter(t=>t.id!==s.t.id);if(r.kind==='exp')r.st[k]={st:'skip'};else delete r.st[k];save();render();toast('اتلغى');return;
  }
  if(await occCollect(id,k,true)!==true)el.checked=false;
}
async function occSetAmt(id,k){
  const r=C(id),v=parseNum(await askInput('المبلغ المتوقع',`${r.name} · ${fdate(occDate(r,k))}`,amtStr(occAmt(r,k)),true));if(isNaN(v))return;
  r.amt=r.amt||{};r.amt[k]=v;save();closeSheet();render();toast('اتحفظ ✓');
}

/* ========== المزيد ========== */
function vMore(){
  const B=[['items','📋',L('items')],['pmv','🏦',L('pm')],['inst','🏦',L('inst')],['buy','🛒',L('buy')],['wallet','💳',L('wallet')],['annual','📆',L('contracts')],['cash','🏧',L('cash')],['months','🔒','قفل الشهور'],['settings','⚙️',L('settings')]];
  return `<h3>☰ ${esc(L('more'))}</h3><div class="rgrid">${B.map(([v,ic,l])=>`<button class="rbtn" onclick="${v==='settings'?"stab='';":''}go('${v}')"><span>${ic}</span>${esc(l)}</button>`).join('')}</div>`;
}

/* ========== الحسابات ========== */
function vPmv(){
  const ml=keyTx(NKM),trs=ml.filter(t=>t.type==='tr').sort(byDesc);
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏦 ${esc(L('pm'))}</h3><button class="mini pri" onclick="editMethod()">+ حساب</button></div>`;
  h+=`<div class="list">${S.methods.map(m=>{let i=0,o=0;ml.forEach(t=>{if(t.method!==m.id)return;if(t.type==='inc')i+=t.amount;else if(t.type==='exp')o+=t.amount});
    return `<div class="row ${m.active?'':'off'}" style="cursor:default"><span class="dot" style="background:${m.color}"></span><div class="grow"><b>${esc(m.name)}</b>${m.active?'':' <span class="badge rej">موقوف</span>'}<small>${TYPES[m.type]||''}${m.bank?' · '+esc(m.bank):''}</small><small>${MONTHS[NM-1]}: قبضت <b class="pos">${num(i)}</b> · صرفت <b class="neg">${num(o)}</b></small></div><div class="acts"><button class="mini" onclick="editMethod('${m.id}')">✏️</button><button class="mini danger" onclick="delMethod('${m.id}')">🗑</button></div></div>`}).join('')}</div>`;
  h+=`<h3>🔁 التحويلات · ${MONTHS[NM-1]}<button class="mini pri" onclick="newTx('tr')">+ تحويل</button></h3>`;
  h+=trs.length?`<div class="list">${trs.map(t=>`<div class="row" onclick="editTx('${t.id}')"><span class="ic" style="background:#dbeafe">🔁</span><div class="grow"><b>من ${esc(M(t.method)?.name||'—')} إلى ${esc(M(t.to)?.name||'—')}</b><small>${fdate(t.date)}${t.via?' · '+viaTxt(t.via):''}${t.note?' · '+esc(t.note):''}</small></div><div class="amt" style="color:var(--tr)">${num(t.amount)}</div></div>`).join('')}</div>`:'<p class="empty">لا يوجد</p>';
  return h;
}
function editMethod(id){
  const m=id?M(id):{name:'',type:'bank',bank:'',color:COLORS[3],active:true};
  sheet(`<h2>${id?'تعديل حساب':'حساب جديد'}</h2>
  <label>اسم الحساب<input id="m-name" value="${esc(m.name)}" placeholder="البنك الأهلي، فودافون كاش..."></label>
  <label>النوع<select id="m-type">${Object.entries(TYPES).filter(([k])=>k!=='instapay'||m.type==='instapay').map(([k,l])=>`<option value="${k}" ${m.type===k?'selected':''}>${l}</option>`).join('')}</select></label>
  <label>ملاحظة<input id="m-bank" value="${esc(m.bank)}"></label>
  <div class="fl">اللون</div>
  <div class="colors">${COLORS.map(c=>`<button type="button" class="sw ${c===m.color?'on':''}" style="background:${c}" onclick="pickColor(this,'${c}')"></button>`).join('')}</div>
  <input type="hidden" id="m-color" value="${m.color}">
  ${id?`<label class="chk"><input type="checkbox" id="m-act" ${m.active?'checked':''}> مفعّل</label>`:''}
  <button class="btn" onclick="saveMethod('${id||''}')">حفظ</button>`);
}
function pickColor(el,c){document.querySelectorAll('.sw').forEach(x=>x.classList.remove('on'));el.classList.add('on');$('#m-color').value=c}
function saveMethod(id){
  const name=$('#m-name').value.trim();if(!name)return toast('اكتب اسم الحساب');
  const m=id?M(id):{id:uid(),active:true};
  Object.assign(m,{name,type:$('#m-type').value,bank:$('#m-bank').value.trim(),color:$('#m-color').value});
  if($('#m-act'))m.active=$('#m-act').checked;if(!id)S.methods.push(m);
  save();
  if(TXBACK&&F){TXBACK=false;if(F.type==='tr'&&F.method)F.to=m.id;else F.method=m.id;render();txForm();toast('اتضاف الحساب ✓');return}
  TXBACK=false;closeSheet();render();toast('اتحفظ ✓');
}
async function delMethod(id){
  if(S.txs.some(t=>t.method===id||t.to===id)||S.cash.some(c=>c.method===id))return say('مينفعش تحذفه','الحساب ده عليه عمليات. تقدر توقفه من ✏️ تعديل','🏦');
  if(!await ask('حذف الحساب؟',M(id)?.name||'',{danger:true,icon:'🗑',ok:'حذف'}))return;
  S.methods=S.methods.filter(m=>m.id!==id);save();render();toast('اتحذف');
}

/* ========== قفل الشهور ========== */
function vMonths(){
  const keys=new Set(S.txs.filter(t=>!t.pend).map(t=>t.date.slice(0,7)));keys.add(NKM);
  const open=[...keys].filter(k=>!S.closed[k]).sort().reverse(),closed=Object.keys(S.closed).sort().reverse();
  const nt=n=>`<span class="${n<0?'neg':''}">${n<0?num(-n)+' سالب':num(n)}</span>`;
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🔒 قفل الشهور</h3></div>`;
  h+=`<h3>🔓 الشهور المفتوحة</h3>`+(open.length?`<div class="list">${open.map(k=>{const s=sums(keyTx(k));return `<div class="row"><div class="grow"><b>${mName(k)}${k===NKM?' <span class="badge soon">الحالي</span>':''}</b><small>${esc(L('inc'))} ${num(s.inc)} · ${esc(L('exp'))} ${num(s.exp)} · ${esc(L('net'))} ${nt(s.net)}</small></div><button class="mini pri" onclick="closeMonth('${k}')">🔒 قفل</button></div>`}).join('')}</div>`:'<p class="empty">لا يوجد</p>');
  h+=`<h3>🔒 الشهور المقفولة</h3>`+(closed.length?`<div class="list">${closed.map(k=>{const c=S.closed[k],inc=+c.inc||0,exp=+c.exp||0;return `<div class="row"><div class="grow"><b>${mName(k)}</b><small>${esc(L('inc'))} ${num(inc)} · ${esc(L('exp'))} ${num(exp)} · ${esc(L('net'))} ${nt(inc-exp)}</small><small>اتقفل ${new Date(c.at).toLocaleDateString('ar-EG')}</small></div><button class="mini" onclick="openMonth('${k}')">🔓 فتح</button></div>`}).join('')}</div>`:'<p class="empty">لا يوجد</p>');
  return h;
}
async function closeMonth(k){
  if(!await ask(`قفل ${mName(k)}؟`,'مش هتقدر تعدّل عملياته لحد ما تفتحه تاني',{icon:'🔒',ok:'قفل الشهر'}))return;
  const s=sums(keyTx(k));
  S.closed[k]={at:new Date().toISOString(),inc:s.inc,exp:s.exp};
  save();render();toast('اتقفل الشهر 🔒');
}
async function openMonth(k){
  if(!await ask(`فتح ${mName(k)}؟`,'',{icon:'🔓',ok:'فتح الشهر'}))return;
  delete S.closed[k];save();render();toast('اتفتح الشهر 🔓');
}

/* ========== الأقساط ========== */
function vInst(){
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏦 ${esc(L('inst'))}</h3><button class="mini pri" onclick="planNew()">+ جديد</button></div>`;
  if(!S.plans.length)return h+'<p class="empty">لا يوجد أقساط</p>';
  return h+S.plans.map(p=>{
    const st=planStats(p);
    const badge=st.late?`<span class="badge late">${st.late} متأخر</span>`:st.next?'<span class="badge wait">منتظر</span>':'<span class="badge done">خلصت ✓</span>';
    return `<div class="pcard" onclick="instPlan='${p.id}';go('plan')"><div class="rowin"><b>${esc(p.name)}</b>${badge}</div>
    <small>${st.paidN}/${st.n} قسط · مدفوع ${num(st.paid)} من ${num(st.total)}</small><div class="prog" style="margin:6px 0 4px"><i style="width:${st.total?Math.min(100,st.paid/st.total*100):0}%"></i></div>
    ${st.next?`<small>القسط الجاي: ${fdate(st.next.due)} · ${fmt(+st.next.amount||0)}</small>`:''}</div>`;
  }).join('');
}
function vPlan(){
  const p=plan(instPlan);if(!p){view='inst';return vInst()}
  const st=planStats(p);
  let h=`<div class="phead"><button class="mini" onclick="go('inst')">→</button><h3>${esc(p.name)}</h3><button class="mini" onclick="planEdit('${p.id}')">✏️ تعديل</button></div>`;
  h+=kpis([['الإجمالي',fmt(st.total),'net'],['المدفوع',fmt(st.paid),'inc'],['الباقي',fmt(st.total-st.paid),'exp']]);
  if(p.note)h+=`<p class="muted">📝 ${esc(p.note)}</p>`;
  if(p.files.length)h+=`<div class="files">${p.files.map(id=>fileThumb(id,'view')).join('')}</div>`;
  const items=[...p.items].sort((a,b)=>(a.due||'').localeCompare(b.due||''));
  h+=tbl(['الميعاد','المبلغ','الحالة',''],items.map(it=>{
    const t=itTx(it);
    return `<tr><td>${dmy2(it.due)}</td><td><b>${num(+it.amount||0)}</b></td><td>${t?`<span class="tag ok">مدفوع</span>${sm(fd(t.date)+((t.files||[]).length?' · 📎':''))}`:stTag({st:'wait'},it.due)}</td>
    <td>${t?`<button class="mini" onclick="editTx('${t.id}')">🧾</button> <button class="mini" onclick="unpay('${p.id}','${it.id}')">↩</button>`:`<button class="mini pri" onclick="payStart('${p.id}','${it.id}')">✓ دفع</button>`}</td></tr>`}));
  return h;
}
function planNew(){PF={id:null,name:'',cat:'',note:'',files:[],items:[]};planForm()}
function planEdit(id){const p=plan(id);PF=JSON.parse(JSON.stringify(p));PF.cat=C(p.catId)?.name||p.name;planForm()}
function planForm(){
  sheet(`<h2>${PF.id?'تعديل':'إضافة'} — ${esc(L('inst'))}</h2>
  <label>اسم القسط<input id="q1" value="${esc(PF.name)}" placeholder="قسط العربية"></label>
  <label>بند المصروف<select id="q2"><option value="">نفس اسم القسط</option>${S.cats.filter(c=>c.kind==='exp').map(c=>`<option value="${esc(c.name)}" ${c.name===PF.cat?'selected':''}>${esc(c.name)}</option>`).join('')}</select></label>
  <label>ملاحظات<input id="q3" value="${esc(PF.note)}"></label>
  <div class="fl">صور العقد / المستندات</div>${filesBox(PF.files,'plan')}
  <h3>الأقساط (${PF.items.length})</h3>
  <div class="etbar"><button class="mini pri" onclick="ocrStart()">📷 من صورة</button><button class="mini" onclick="grabPF();PF.items.push({id:uid(),due:'',amount:''});planForm()">+ قسط</button></div>
  <div id="ocrst"></div>
  <details class="gen"><summary>⚙️ توليد تلقائي</summary>
    <div class="two"><label>عدد الأقساط<input id="g1" inputmode="numeric"></label><label>قيمة القسط<input id="g2" inputmode="decimal"></label></div>
    <div class="two"><label>أول قسط<input id="g3" type="date"></label><label>كل<select id="g4">${EVERY.map(([v,l])=>`<option value="${v}">${l}</option>`).join('')}</select></label></div>
    <button class="mini pri" onclick="genItems()">توليد</button></details>
  ${PF.items.length?`<div class="tbl"><table class="pt"><thead><tr><th>#</th><th>الميعاد</th><th>المبلغ</th><th></th></tr></thead><tbody>${PF.items.map((it,i)=>`<tr><td>${i+1}</td><td><input type="date" data-q="due" value="${it.due||''}" ${it.txId?'disabled':''}></td><td><input type="text" inputmode="decimal" data-q="amount" value="${esc(it.amount??'')}" ${it.txId?'disabled':''}></td><td>${it.txId?'✓':`<button class="mini danger" onclick="grabPF();PF.items.splice(${i},1);planForm()">✕</button>`}</td></tr>`).join('')}</tbody></table></div>`:''}
  <button class="btn" onclick="planSave()">حفظ</button>
  ${PF.id?`<button class="btn ghost danger" onclick="planDel('${PF.id}')">حذف</button>`:''}`);
}
function grabPF(){
  if(!$('#q1'))return;PF.name=$('#q1').value;PF.cat=$('#q2').value;PF.note=$('#q3').value;
  document.querySelectorAll('#sheet .pt tbody tr').forEach((tr,i)=>{const it=PF.items[i];if(!it)return;tr.querySelectorAll('[data-q]').forEach(inp=>{if(!inp.disabled)it[inp.dataset.q]=inp.value})});
}
function genItems(){
  const n=parseNum($('#g1').value),a=parseNum($('#g2').value),f=$('#g3').value,e=+$('#g4').value||1;
  if(!(n>0)||!(a>0)||!f)return toast('اكتب العدد والقيمة وتاريخ أول قسط');
  grabPF();for(let i=0;i<Math.min(n,360);i++)PF.items.push({id:uid(),due:addMonths(f,i*e),amount:String(a)});
  planForm();toast(`اتولّد ${n} قسط ✓`);
}
function parseSchedule(text){
  const t=latD(text),out=[];
  t.split(/\n+/).forEach(line=>{
    let due=null,l=line,m=l.match(/(\d{4})\s*[\/\-.]\s*(\d{1,2})\s*[\/\-.]\s*(\d{1,2})/);
    if(m){due=`${m[1]}-${pad(+m[2])}-${pad(+m[3])}`;l=l.replace(m[0],' ')}
    else if((m=l.match(/(\d{1,2})\s*[\/\-.]\s*(\d{1,2})\s*[\/\-.]\s*(\d{2,4})/))){let y=+m[3];if(y<100)y+=2000;due=`${y}-${pad(+m[2])}-${pad(+m[1])}`;l=l.replace(m[0],' ')}
    if(!due)return;
    const[,Mo,D]=due.split('-').map(Number);if(Mo<1||Mo>12||D<1||D>31)return;
    const nums=(l.match(/\d[\d,]*(\.\d+)?/g)||[]).map(x=>parseFloat(x.replace(/,/g,''))).filter(x=>x>=10);
    if(!nums.length)return;
    out.push({id:uid(),due,amount:String(Math.max(...nums))});
  });
  return out;
}
function ocrStart(){
  grabPF();
  pickFiles('img',async ids=>{
    if(!ids.length)return;
    PF.files=PF.files.concat(ids);planForm();
    const st=()=>$('#ocrst');
    try{
      st()&&(st().innerHTML='<p class="warn">⏳ جاري القراءة...</p>');
      await loadJS(TESS);
      const w=await Tesseract.createWorker('ara+eng',1,{logger:m=>{if(m.status==='recognizing text'&&st())st().innerHTML=`<p class="warn">⏳ ${Math.round(m.progress*100)}%</p>`}});
      let rows=[];for(const id of ids){const r=await FDB.get(id);const{data}=await w.recognize(r.blob);rows=rows.concat(parseSchedule(data.text))}
      await w.terminate();
      grabPF();PF.items=PF.items.concat(rows);planForm();
      toast(rows.length?`${rows.length} قسط ✓`:'ما اتقراش أقساط من الصورة');
    }catch(e){if(st())st().innerHTML='';toast('القراءة ما نفعتش، اتأكد من النت')}
  });
}
function planSave(){
  grabPF();const name=PF.name.trim();if(!name)return toast('اكتب الاسم');
  const items=PF.items.map(it=>({id:it.id||uid(),due:it.due,amount:parseNum(it.amount),txId:it.txId||null})).filter(it=>it.txId||(it.due&&it.amount>0));
  if(!items.length)return toast('ضيف قسط واحد على الأقل');
  const cat=ensureCat((PF.cat||name).trim(),'exp');
  let p=PF.id?plan(PF.id):null;if(!p){p={id:uid()};S.plans.push(p)}
  Object.assign(p,{name,catId:cat.id,note:PF.note.trim(),files:PF.files,items});
  save();closeSheet();instPlan=p.id;go('plan');toast('اتحفظ ✓');
}
async function planDel(id){
  const p=plan(id),paid=p.items.filter(itTx).length;
  if(!await ask('حذف الأقساط؟',paid?`فيه ${paid} قسط مدفوع، والمصروفات بتاعتهم هتفضل.`:'',{danger:true,icon:'🗑',ok:'حذف'}))return;
  S.plans=S.plans.filter(x=>x.id!==id);save();closeSheet();go('inst');
}
function payStart(pid,iid){
  const it=plan(pid).items.find(x=>x.id===iid);
  if(!defMethod())return toast('ضيف حساب الأول');
  PAY={pid,iid,amount:amtStr(it.amount),method:defMethod(),via:'',date:today(),note:'',files:[]};paySheet();
}
function paySheet(){
  const p=plan(PAY.pid),it=p.items.find(x=>x.id===PAY.iid),meths=S.methods.filter(m=>m.active);
  sheet(`<h2>دفع قسط: ${esc(p.name)}</h2><p class="muted">${fdate(it.due)}</p>
  <input id="y-amt" class="amt-in" type="text" inputmode="decimal" value="${esc(PAY.amount)}">
  <div class="two"><label>دفعت من حساب<select id="y-m">${opt(meths,PAY.method)}</select></label><label>الطريقة<select id="y-v">${viaOpts(PAY.via)}</select></label></div>
  <label>تاريخ الدفع<input id="y-d" type="date" value="${PAY.date}"></label>
  <label>ملاحظة<input id="y-n" value="${esc(PAY.note)}"></label>
  <div class="fl">الإيصال</div>${filesBox(PAY.files,'pay')}
  <button class="btn" onclick="doPay()">تم الدفع</button>`);
}
function grabPay(){if(!$('#y-amt'))return;PAY.amount=$('#y-amt').value;PAY.method=$('#y-m').value;PAY.via=$('#y-v').value;PAY.date=$('#y-d').value;PAY.note=$('#y-n').value}
function doPay(){
  grabPay();const amount=parseNum(PAY.amount);
  if(!(amount>0))return toast('اكتب مبلغ صحيح');
  if(!PAY.date)return toast('اختار التاريخ');
  if(isClosed(PAY.date))return toast(`شهر ${mName(PAY.date.slice(0,7))} مقفول`);
  const p=plan(PAY.pid),it=p.items.find(x=>x.id===PAY.iid),cat=C(p.catId)||ensureCat(p.name,'exp');
  const t={id:uid(),type:'exp',amount,cat:cat.id,method:PAY.method,via:PAY.via,date:PAY.date,note:PAY.note.trim()||`قسط ${fdate(it.due)}`,files:PAY.files,created:Date.now(),src:{k:'i',id:p.id,p:it.id}};
  S.txs.push(t);it.txId=t.id;save();closeSheet();render();toast('اتسجّل الدفع ✓');
}
async function unpay(pid,iid){
  const it=plan(pid).items.find(x=>x.id===iid),t=itTx(it);
  if(t){if(isClosed(t.date))return toast('الشهر مقفول');if(!await ask('إلغاء دفع القسط؟','',{danger:true,icon:'↩️',ok:'إلغاء الدفع',cancel:'رجوع'}))return;S.txs=S.txs.filter(x=>x.id!==t.id)}
  it.txId=null;save();render();toast('اتلغى');
}

/* ========== البنود ========== */
function vItems(){
  if(itab!=='exp')itab='inc';
  const k=itab,inc=k==='inc',mtx=keyTx(NKM);
  const rows=sortList(S.cats.filter(c=>c.kind===k).map(c=>{
    const mt=mtx.filter(t=>t.cat===c.id).reduce((a,t)=>a+t.amount,0),pd=S.txs.filter(t=>t.pend&&t.cat===c.id).reduce((a,t)=>a+t.amount,0);
    return{c,mt,pd,a:c.fixed?+c.amount||0:(mt||pd),d:c.start||'',n:c.name};
  }));
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>📋 ${esc(L('items'))}</h3><button class="mini pri" onclick="catForm(null,'${k}')">+ بند جديد</button></div>`
    +tabsHTML([['inc','💰 بنود التحصيل'],['exp','💸 بنود المصروفات']],k,'itab');
  if(!rows.length)return h+`<div class="nempty"><div>📋</div><b>لا يوجد بنود</b></div>`;
  h+=sortBar();
  return h+`<div class="ilist">${rows.map(({c,mt,pd})=>{
    const ann=c.fixed&&isAnn(c),ic=c.fixed?(ann?'📆':'📌'):(inc?'💵':'🏷️'),nf=(c.files||[]).length;
    const meta=c.fixed?[everyTxt(c.every),M(c.acct)?.name,ann&&c.pct?'زيادة '+c.pct+'%':''].filter(Boolean).join(' · '):(c.note||'بند متغير');
    const val=c.fixed?`${num(c.amount)}<small>${ann?'كل مرة':'القيمة الثابتة'}</small>`:mt?`${num(mt)}<small>${MONTHS[NM-1]}</small>`:'';
    return `<div class="ic2 ${inc?'':'exp'} ${c.active===false?'off':''}">
      <div class="ich"><span class="iav">${ic}</span><div class="grow"><b>${esc(c.name)}</b><small>${esc(meta)}</small></div>${val?`<div class="iam ${inc?'pos':'neg'}">${val}</div>`:''}</div>
      <div class="itags">${c.fixed?`<span class="chip fx">${ann?'📆 سنوي':'📌 ثابت'}</span>`:'<span class="chip">متغير</span>'}${pd?`<span class="chip pd">⏳ ${inc?'ليك':'عليك'} ${num(pd)}</span>`:''}${c.active===false?'<span class="chip">موقوف</span>':''}
        <label class="swt"><input type="checkbox" ${c.fixed?'checked':''} onchange="toggleFixed('${c.id}',this)"><i></i>ثابت</label></div>
      <div class="ibar"><button class="mini pri" onclick="quickTx('${c.id}')">➕ تسجيل</button><button class="mini" onclick="catForm('${c.id}')">✏️</button><button class="mini" onclick="catFiles('${c.id}')">📎${nf?' '+nf:''}</button><button class="mini danger" onclick="delCat('${c.id}')">🗑</button></div>
    </div>`}).join('')}</div>`;
}
function quickTx(id){
  const c=C(id);if(!c)return;
  newTx(c.kind);if(!F||F.type!==c.kind)return;
  F.cat=id;if(c.acct&&M(c.acct))F.method=c.acct;if(c.via)F.via=c.via;if(c.fixed)F.amount=c.amount?amtStr(c.amount):'';
  txForm();setTimeout(()=>$('#f-amt')&&$('#f-amt').focus(),120);
}
function toggleFixed(id,el){
  const c=C(id);
  if(el.checked){el.checked=false;catForm(id,null,{fixed:true});return}
  c.fixed=false;save();render();toast('البند بقى متغير');
}
function catForm(id,kind,preset){
  const c=id?C(id):{id:null,name:'',kind:kind||itab||'inc',active:true,fixed:false,amount:'',every:1,start:today(),pct:'',acct:'',via:'',note:'',files:[]};
  CF={...c,amount:c.amount?amtStr(c.amount):'',files:[...(c.files||[])],qa:'',qm:defMethod()||'',qv:'',qd:today(),qp:c.kind==='inc'?1:0,...(preset||{})};
  if(!CF.start)CF.start=today();
  if(CF.fixed&&!CF.acct)CF.acct=defMethod()||'';
  catSheet();
}
const stSeg=(pend,inc,onPick)=>`<div class="seg st">${[[1,'⏳ غير محصّل','wt'],[0,'✅ اتحصّل','dn']].map(([v,l,c])=>`<button type="button" class="${+!!pend===v?'on '+c:''}" onclick="${onPick}(${v})">${l}</button>`).join('')}</div>`;
function cfSetP(v){grabCF();CF.qp=v;catSheet()}
function catSheet(){
  const c=CF,inc=c.kind==='inc',orig=c.id?C(c.id):null,locked=orig&&Object.keys(orig.st||{}).length>0,ann=+c.every>=12,qp=inc&&c.qp;
  const meths=S.methods.filter(m=>m.active||m.id===c.acct);
  sheet(`<h2>${c.id?'تعديل بند':'بند جديد'}</h2>
  <div class="seg">${[['inc','💰 بند تحصيل'],['exp','💸 بند مصروف']].map(([k,l])=>`<button class="${c.kind===k?'on '+k:''}" onclick="grabCF();CF.kind='${k}';catSheet()">${l}</button>`).join('')}</div>
  <label>اسم البند<input id="cf-name" value="${esc(c.name)}" placeholder="${inc?'الراتب، مشروع...':'الإيجار، الإنترنت، بنزين...'}"></label>
  <label class="chk fxbox"><input type="checkbox" id="cf-fx" ${c.fixed?'checked':''} onchange="grabCF();catSheet()"> 📌 ثابت</label>
  ${c.fixed?`<div class="fxin">
    <div class="two"><label>القيمة<input id="cf-amt" type="text" inputmode="decimal" value="${esc(c.amount||'')}"></label>
    <label>التكرار<select id="cf-every" onchange="grabCF();catSheet()" ${locked?'disabled':''}>${EVERY.map(([v,l])=>`<option value="${v}" ${+c.every===v?'selected':''}>${l}</option>`).join('')}</select></label></div>
    <label>${ann?'ميعاد الدفع':'الميعاد'}<input id="cf-start" type="date" value="${c.start||today()}" ${locked?'disabled':''}></label>
    ${ann?`<label>نسبة الزيادة كل مرة %<input id="cf-pct" type="text" inputmode="decimal" value="${esc(c.pct||'')}" placeholder="0"></label>`:''}
    <div class="two"><label>${inc?'بيتحصّل على حساب':'بيتدفع من حساب'}<select id="cf-acct">${opt(meths,c.acct)}</select></label><label>الطريقة<select id="cf-via">${viaOpts(c.via)}</select></label></div>
  </div>`:`<div class="qbox ${inc?'':'exp'}"><b>${inc?'💰 سجّل مبلغ':'💸 سجّل مبلغ'}</b> <small class="muted">(اختياري)</small>
    ${inc?stSeg(c.qp,inc,'cfSetP'):''}
    <input id="cf-qa" class="amt-in" type="text" inputmode="decimal" value="${esc(c.qa||'')}" placeholder="0">
    <div class="two"><label>${qp?'هيتحصّل على حساب':inc?'استلمت في حساب':'دفعت من حساب'}<select id="cf-qm">${opt(S.methods.filter(m=>m.active),c.qm)}</select></label><label>الطريقة<select id="cf-qv">${viaOpts(c.qv)}</select></label></div>
    <label>${qp?'الميعاد المتوقع':'التاريخ'}<input id="cf-qd" type="date" value="${c.qd||today()}"></label>
  </div>`}
  <label>ملاحظات<input id="cf-note" value="${esc(c.note||'')}"></label>
  <div class="fl">مرفقات البند</div>${filesBox(c.files,'cat')}
  <label class="chk"><input type="checkbox" id="cf-act" ${c.active!==false?'checked':''}> مفعّل</label>
  <button class="btn" onclick="catSave()">حفظ</button>
  ${c.id&&inc&&!c.fixed?`<button class="btn ghost" onclick="toAccount('${c.id}')">🏦 انقله للحسابات</button>`:''}
  ${c.id?`<button class="btn ghost danger" onclick="delCat('${c.id}')">🗑 حذف البند</button>`:''}`);
}
function grabCF(){
  if(!$('#cf-name'))return;const v=s=>$(s)?$(s).value:undefined;
  CF.name=v('#cf-name');CF.note=v('#cf-note');CF.active=$('#cf-act').checked;CF.fixed=$('#cf-fx').checked;
  if($('#cf-amt'))CF.amount=v('#cf-amt');
  if($('#cf-every')&&!$('#cf-every').disabled)CF.every=+v('#cf-every');
  if($('#cf-start')&&!$('#cf-start').disabled)CF.start=v('#cf-start');
  if($('#cf-pct'))CF.pct=v('#cf-pct');
  if($('#cf-acct'))CF.acct=v('#cf-acct');
  if($('#cf-via'))CF.via=v('#cf-via');
  if($('#cf-qa'))CF.qa=v('#cf-qa');
  if($('#cf-qm'))CF.qm=v('#cf-qm');
  if($('#cf-qv'))CF.qv=v('#cf-qv');
  if($('#cf-qd'))CF.qd=v('#cf-qd');
  if(CF.fixed&&!CF.acct)CF.acct=defMethod()||'';
}
function catSave(){
  grabCF();const name=(CF.name||'').trim();if(!name)return toast('اكتب اسم البند');
  if(S.cats.some(x=>x.kind===CF.kind&&x.name===name&&x.id!==CF.id))return toast('البند ده موجود قبل كده');
  let c=CF.id?C(CF.id):null;
  if(c&&c.kind!==CF.kind&&S.txs.some(t=>t.cat===c.id))return toast('البند عليه عمليات، مينفعش تغيّر نوعه');
  if(CF.fixed){if(!(parseNum(CF.amount)>0))return toast('اكتب القيمة');if(!CF.start)return toast('اختار الميعاد')}
  const qa=!CF.fixed?parseNum(CF.qa):NaN,qp=CF.kind==='inc'&&!!+CF.qp;
  if(qa>0){
    if(!CF.qm)return toast('اختار الحساب');
    if(!CF.qd)return toast('اختار التاريخ');
    if(!qp&&isClosed(CF.qd))return toast(`شهر ${mName(CF.qd.slice(0,7))} مقفول`);
  }
  if(!c){c={id:uid(),amt:{},st:{}};S.cats.push(c)}
  Object.assign(c,{name,kind:CF.kind,fixed:!!CF.fixed,amount:parseNum(CF.amount)||0,every:+CF.every||1,start:CF.start||today(),pct:parseNum(CF.pct)||0,acct:CF.acct||'',via:CF.via||'',note:(CF.note||'').trim(),files:CF.files||[],active:CF.active!==false});
  if(c.fixed&&c.kind==='exp'&&!c.autoFrom)c.autoFrom=NKM+'-01';
  if(qa>0)S.txs.push({id:uid(),type:c.kind,amount:qa,cat:c.id,method:CF.qm,via:CF.qv||'',date:CF.qd,note:'',files:[],created:Date.now(),pend:qp});
  itab=c.kind;save();autoPostFixed();closeSheet();render();refreshRV();toast('اتحفظ ✓');
}
function catFiles(id){
  curCat=id;const c=C(id);if(!c)return closeSheet();
  sheet(`<div class="phead"><h2>📎 مرفقات: ${esc(c.name)}</h2></div>
  ${filesBox(c.files,'catf')}
  ${(c.files||[]).length?`<button class="btn ghost" onclick="shareFiles(C('${id}').files)">📤 مشاركة الكل</button>`:''}`);
}
async function delCat(id){
  const c=C(id),tx=S.txs.filter(t=>t.cat===id);
  if(tx.some(t=>!t.pend&&isClosed(t.date)))return say('مينفعش الحذف','البند ده عليه عمليات في شهور مقفولة.','🔒');
  if(!await ask(`حذف "${c.name}"؟`,tx.length?`عليه ${tx.length} عملية وهيتمسحوا معاه.`:'',{danger:true,icon:'🗑',ok:'حذف'}))return;
  S.txs=S.txs.filter(t=>t.cat!==id);S.cats=S.cats.filter(x=>x.id!==id);
  S.settings.pins=(S.settings.pins||[]).filter(p=>p.ref!==id);
  save();closeSheet();render();toast('اتحذف');
}
async function toAccount(id){
  const c=C(id);
  if(S.txs.some(t=>t.cat===id))return say('مينفعش ينتقل','البند ده عليه عمليات.','🏦');
  if(!await ask(`نقل "${c.name}" للحسابات؟`,'',{icon:'🏦',ok:'انقله'}))return;
  S.methods.push({id:uid(),name:c.name,type:/كاش|cash/i.test(c.name)?'cash':/wallet|محفظ/i.test(c.name)?'wallet':'bank',bank:'',color:COLORS[S.methods.length%COLORS.length],active:true});
  S.cats=S.cats.filter(x=>x.id!==id);save();closeSheet();render();toast('اتنقل ✓');
}

/* ========== الشيت والنماذج ========== */
let SHST=[],SHKEEP=0;
const shTitle=h=>((String(h).match(/<h2[^>]*>([\s\S]*?)<\/h2>/)||[])[1]||'').replace(/<[^>]+>/g,'').trim();
function snapSheet(){
  const b=$('#sheet .sz');if(!b)return '';
  b.querySelectorAll('input,select,textarea').forEach(e=>{
    if(e.type==='checkbox'||e.type==='radio')e.checked?e.setAttribute('checked',''):e.removeAttribute('checked');
    else if(e.tagName==='SELECT')[...e.options].forEach(o=>o.selected?o.setAttribute('selected',''):o.removeAttribute('selected'));
    else if(e.type!=='file')e.setAttribute('value',e.value);
  });
  return b.innerHTML;
}
function sheet(html,keep){
  keep=keep||SHKEEP;SHKEEP=0;
  const open=$('#sheet').classList.contains('open'),cur=open?shTitle(($('#sheet .sz')||{}).innerHTML||''):'',nt=shTitle(html);
  if(!open)SHST=[];
  else if(!keep&&cur&&cur!==nt){const i=SHST.findIndex(x=>x.t===nt);if(i>=0)SHST=SHST.slice(0,i);else SHST.push({t:cur,h:snapSheet()})}
  $('#sheet .body').innerHTML=`<div class="shbar"><button class="mini" onclick="sheetBack()">→ رجوع</button><i></i><button class="mini" onclick="closeSheet()">✕</button></div><div class="sz">${html}</div>`;
  $('#sheet').classList.add('open');hydrate();
}
function sheetBack(){const p=SHST.pop();if(!p)return closeSheet();sheet(p.h,true)}
function closeSheet(){$('#sheet').classList.remove('open');SHST=[]}
let tt;function toast(m){const e=$('#toast');e.textContent=m;e.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('on'),2800)}
function opt(arr,sel){return arr.map(o=>`<option value="${o.id}" ${o.id===sel?'selected':''}>${esc(o.name)}</option>`).join('')}

/* --- عملية: تحصيل / مصروف / تحويل --- */
function newTx(type){
  const act=S.methods.filter(m=>m.active),dm=defMethod(),k=type||'exp';
  if(!dm){toast('ضيف حساب الأول');TXBACK=false;F=null;return editMethod()}
  F={id:null,type:k,amount:'',cat:'',newCat:'',method:dm,to:(act.find(m=>m.id!==dm)||{}).id||'',via:'',date:today(),note:'',files:[],created:0,pend:k==='inc'};
  txForm();
}
function editTx(id){const t=S.txs.find(x=>x.id===id);if(!t)return;F={...t,amount:amtStr(t.amount),cat:t.cat||'',newCat:'',via:t.via||'',to:t.to||'',note:t.note||'',files:[...(t.files||[])],pend:!!t.pend};txForm()}
function grab(){
  const v=s=>$(s)?$(s).value:null;
  if(v('#f-amt')!==null)F.amount=v('#f-amt');if(v('#f-d')!==null)F.date=v('#f-d');if(v('#f-n')!==null)F.note=v('#f-n');
  if(v('#f-m')!==null)F.method=v('#f-m');if(v('#f-to')!==null)F.to=v('#f-to');if(v('#f-cat')!==null)F.cat=v('#f-cat');
  if(v('#f-new')!==null)F.newCat=v('#f-new');if(v('#f-v')!==null)F.via=v('#f-v');
}
function catPicked(v){
  grab();F.cat=v;const c=C(v);
  if(c&&c.fixed){if(!parseNum(F.amount))F.amount=c.amount?amtStr(c.amount):'';if(c.acct&&M(c.acct))F.method=c.acct;if(c.via)F.via=c.via}
  txForm();if(v==='__new')setTimeout(()=>$('#f-new')&&$('#f-new').focus(),80);
}
function setTxType(k){grab();if(k!==F.type){F.type=k;F.cat='';F.newCat='';if(!F.id)F.pend=k==='inc';if(k!=='inc')F.pend=false}SHKEEP=1;txForm()}
function txSetP(v){grab();F.pend=!!v;txForm()}
function txForm(){
  const orig=F.id&&S.txs.find(t=>t.id===F.id),locked=orig&&!orig.pend&&isClosed(orig.date),inc=F.type==='inc',tr=F.type==='tr',pend=inc&&F.pend;
  const cats=S.cats.filter(c=>c.kind===F.type&&(c.active!==false||c.id===F.cat));
  const meths=S.methods.filter(m=>m.active||m.id===F.method||m.id===F.to);
  const addAcct=`<button type="button" class="mini" title="حساب جديد" onclick="grab();TXBACK=true;editMethod()">+</button>`;
  sheet(`<h2>${F.id?'✏️ تعديل العملية':tr?'تحويل بين حساباتك':inc?'تحصيل جديد':'مصروف جديد'}</h2>
  ${locked?'<p class="warn">🔒 الشهر ده مقفول</p>':''}
  <div class="seg">${[['inc','💰 تحصيل'],['exp','💸 مصروف'],['tr','🔁 تحويل']].map(([k,l])=>`<button class="${F.type===k?'on '+k:''}" onclick="setTxType('${k}')">${l}</button>`).join('')}</div>
  ${!F.id&&F.type==='exp'?'<button class="btn ghost" onclick="scanReceipt()">📷 Receipt Scan</button>':''}
  ${tr||!inc||(orig&&orig.src)?'':stSeg(F.pend,inc,'txSetP')}
  <input id="f-amt" class="amt-in" type="text" inputmode="decimal" placeholder="0" value="${esc(F.amount)}">
  ${tr?`<label>من حساب<div class="inl"><select id="f-m">${opt(meths,F.method)}</select>${addAcct}</div></label>
    <label>إلى حساب<div class="inl"><select id="f-to">${opt(meths,F.to)}</select>${addAcct}</div></label>
    <label>الطريقة<select id="f-v">${viaOpts(F.via)}</select></label>`
  :`<label>البند<select id="f-cat" onchange="catPicked(this.value)"><option value="">— اختار البند —</option>${cats.map(c=>`<option value="${c.id}" ${c.id===F.cat?'selected':''}>${c.fixed?'📌 ':''}${esc(c.name)}</option>`).join('')}<option value="__new" ${F.cat==='__new'?'selected':''}>➕ بند جديد...</option></select></label>
    ${F.cat==='__new'?`<label>اسم البند الجديد<input id="f-new" value="${esc(F.newCat||'')}"></label>`:''}
    <div class="two"><label>${pend?'هيتحصّل على حساب':inc?'استلمت في حساب':'دفعت من حساب'}<div class="inl"><select id="f-m">${opt(meths,F.method)}</select>${addAcct}</div></label>
    <label>الطريقة<select id="f-v">${viaOpts(F.via)}</select></label></div>`}
  <div class="two"><label>${pend?'الميعاد المتوقع':'التاريخ'}<input id="f-d" type="date" value="${F.date}"></label><label>ملاحظة<input id="f-n" type="text" value="${esc(F.note)}"></label></div>
  <div class="fl">المرفقات</div>${filesBox(F.files,'tx')}
  <button class="btn" onclick="saveTx()" ${locked?'disabled':''}>سجّل</button>
  ${F.id&&pend?`<button class="btn ghost" onclick="postpone('${F.id}');closeSheet()">⏭ أجّل للشهر الجاي</button>`:''}
  ${F.id&&!locked?'<button class="btn ghost danger" onclick="delTx()">حذف العملية</button>':''}`);
}
function saveTx(){
  grab();const amount=parseNum(F.amount),pend=F.type==='inc'&&!!F.pend;
  if(!(amount>0))return toast('اكتب مبلغ صحيح');
  if(!F.date)return toast('اختار التاريخ');
  if(!pend&&isClosed(F.date))return toast(`شهر ${mName(F.date.slice(0,7))} مقفول`);
  if(!F.method)return toast('اختار الحساب');
  const t={id:F.id||uid(),type:F.type,amount,method:F.method,via:F.via||'',date:F.date,note:(F.note||'').trim(),files:F.files||[],created:F.created||Date.now()};
  if(pend)t.pend=true;if(F.post)t.post=F.post;if(F.due&&!pend)t.due=F.due;
  if(F.type==='tr'){if(!F.to||F.to===F.method)return toast('اختار حسابين مختلفين');t.to=F.to}
  else{
    let cid=F.cat;
    if(cid==='__new'){const n=(F.newCat||'').trim();if(!n)return toast('اكتب اسم البند');const c=ensureCat(n,F.type);c.active=true;cid=c.id}
    if(!cid||!C(cid))return toast('اختار البند');
    t.cat=cid;
  }
  if(F.src&&F.type!=='tr')t.src=F.src;
  const i=S.txs.findIndex(x=>x.id===t.id);if(i>=0)S.txs[i]=t;else S.txs.push(t);
  const bb=S.buys.find(b=>b.txId===t.id);if(bb){bb.total=t.amount;bb.date=t.date}
  save();closeSheet();render();refreshRV();toast(pend?`⏳ اتسجّل منتظر · ${fmt(amount)}`:'اتسجّل ✓');
}
async function delTx(){
  if(!await ask('حذف العملية؟',`${F.type==='tr'?'تحويل':C(F.cat)?.name||''} · ${fmt(parseNum(F.amount)||0)}`,{danger:true,icon:'🗑',ok:'حذف'}))return;
  const old=S.txs.find(t=>t.id===F.id);
  if(old&&old.src&&old.src.k==='r'){const c=C(old.src.id);if(c&&c.kind==='exp'){c.st=c.st||{};c.st[old.src.p]={st:'skip'}}}
  S.txs=S.txs.filter(t=>t.id!==F.id);
  S.plans.forEach(p=>p.items.forEach(it=>{if(it.txId===F.id)it.txId=null}));
  save();closeSheet();render();refreshRV();toast('اتمسحت');
}

/* ========== النسخ الاحتياطي ========== */
const blob2b64=b=>new Promise(r=>{const fr=new FileReader();fr.onload=()=>r(fr.result);fr.readAsDataURL(b)});
async function backupBlob(quiet){
  if(!quiet)toast('⏳ جاري التجهيز...');
  const files=[];
  for(const id of Object.keys(S.fmeta||{})){try{const r=await FDB.get(id);if(r)files.push({id,name:r.name,type:r.type,data:await blob2b64(r.blob)})}catch(e){}}
  return new Blob([JSON.stringify({app:'masrofi',appVersion:APP_VERSION,exported:new Date().toISOString(),data:S,files})],{type:'application/json'});
}
const backupName=()=>`centric-backup-${today()}.json`;
function markBackup(){localStorage.setItem(BKEY,today());render()}
async function backup(){dlBlob(await backupBlob(),backupName());markBackup();toast('اتنزلت النسخة ✓')}
async function driveBackup(){
  const f=new File([await backupBlob()],backupName(),{type:'application/json'});
  if(navigator.canShare&&navigator.canShare({files:[f]})){
    try{await navigator.share({files:[f],title:appName()+' backup'});markBackup();return}
    catch(e){if(e&&e.name==='AbortError')return}
  }
  dlBlob(f,f.name);markBackup();toast('اتنزلت النسخة ✓');
}
async function applyBackup(text){
  let root;try{root=JSON.parse(text)}catch(e){return say('ملف غير صالح','','⚠️')}
  const d=root.data||root,files=root.files||[];
  if(!Array.isArray(d.methods)||!Array.isArray(d.txs))return say('ملف غير صالح','','⚠️');
  if(!await ask('استرجاع النسخة؟',`${d.txs.length} عملية · ${files.length} مرفق${root.exported?'\n'+new Date(root.exported).toLocaleString('ar-EG'):''}\nهتستبدل البيانات الحالية.`,{icon:'⬆️',ok:'استرجاع',danger:true}))return;
  toast('⏳ جاري الاسترجاع...');
  for(const x of files){try{const b=await (await fetch(x.data)).blob();await FDB.put({id:x.id,blob:b,name:x.name,type:x.type})}catch(e){}}
  S=normalize(d);save();if(!DEMO){GD.hash=strHash(JSON.stringify(S));saveGD()}applyTheme();applyFont();applyName();go('home');toast('اتسترجعت البيانات ✓');
}
function restore(inp){const f=inp.files[0];inp.value='';if(!f)return;const r=new FileReader();r.onload=()=>applyBackup(r.result);r.readAsText(f)}
async function resetAll(){
  if(!await ask('مسح كل البيانات؟','',{danger:true,icon:'⚠️',ok:'مسح'}))return;
  if(!await ask('آخر تأكيد','المسح مش هيترجع.',{danger:true,icon:'🗑',ok:'امسح كل حاجة'}))return;
  S=normalize(defaults());save();gcFiles();applyTheme();applyFont();applyName();go('home');toast('اتمسح كل شيء');
}
/* نهاية app.js · باقي البرنامج في more.js */