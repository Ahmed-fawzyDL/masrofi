/* ========== Centric · fix.js · 2.21.0 ========== */
/* بيتحمّل بعد more.js. لو حصلت مشكلة: شيل سطره من index.html والبرنامج يرجع زي ما كان */
const XVER='2.21.0',XVBUILD='14/10/2026 - 11:00 ص';
try{brand=function(){return `<div class="brand"><div class="pill"><b dir="ltr">${DEV.name}</b><span class="co" dir="ltr">${DEV.company}</span><span>${DEV.phones.map(p=>`<a href="tel:${p}" dir="ltr">${p}</a>`).join(' - ')}</span></div><small><span dir="ltr">${esc(appName())}</span> · الإصدار ${XVER} · ${XVBUILD}</small></div>`}}catch(e){}
function spAbout(){
  return `<div class="list"><div class="row" style="cursor:default"><span class="ic" style="overflow:hidden">${LOGO()}</span><div class="grow"><b dir="ltr" style="text-align:right">${esc(appName())}</b><small>الإصدار ${XVER} · ${XVBUILD}</small></div></div>
  <div class="row" style="cursor:default"><span class="ic" style="background:var(--soft)">👨‍💻</span><div class="grow"><b dir="ltr" style="text-align:right">${DEV.name}</b><small dir="ltr" style="text-align:right">${DEV.company}</small></div></div>
  ${DEV.phones.map(p=>`<a class="row" href="tel:${p}"><span class="ic" style="background:#dcfce7">📞</span><div class="grow"><b dir="ltr" style="text-align:right">${p}</b></div></a>`).join('')}</div>`;
}

/* ========== الشكل ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.btn{backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);background:linear-gradient(135deg,color-mix(in srgb,var(--p) 88%,#fff),color-mix(in srgb,var(--p) 82%,#000))!important;border:1px solid rgba(255,255,255,.22)!important;box-shadow:0 8px 20px color-mix(in srgb,var(--p) 28%,transparent),inset 0 1px 0 rgba(255,255,255,.28)!important;color:#fff}
.btn.ghost{background:color-mix(in srgb,var(--card,#fff) 55%,transparent)!important;color:inherit!important;border:1px solid color-mix(in srgb,var(--p) 28%,transparent)!important;box-shadow:0 4px 14px rgba(15,23,42,.08),inset 0 1px 0 rgba(255,255,255,.2)!important}
.btn.ghost.danger{color:#dc2626!important;border-color:rgba(220,38,38,.35)!important}
.mini,.rbtn,.tile:not(.on),.cbt,.xchip:not(.on){backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);background:color-mix(in srgb,var(--card,#fff) 58%,transparent)!important;border:1px solid rgba(148,163,184,.32)!important;box-shadow:0 4px 12px rgba(15,23,42,.08),inset 0 1px 0 rgba(255,255,255,.18)}
.mini.pri{background:color-mix(in srgb,var(--p) 88%,transparent)!important;color:#fff!important;border-color:transparent!important}
.mini.danger{color:#dc2626}
.tiles.x4{grid-template-columns:repeat(4,1fr)}.tiles.x4 .tile{min-height:74px}
.xchips{display:flex;gap:8px;flex-wrap:wrap;margin:4px 0 10px}
.xchip{border-radius:20px;padding:8px 16px;font:inherit;font-weight:700;color:inherit;cursor:pointer}
.xchip.on{background:var(--p);color:#fff;border:1px solid var(--p);box-shadow:0 6px 14px color-mix(in srgb,var(--p) 30%,transparent)}
.xchip:disabled{opacity:.9}.xhint{display:block;margin:-4px 0 10px}
.xipb{border:1px dashed color-mix(in srgb,var(--p) 40%,transparent);border-radius:14px;padding:10px;margin:0 0 10px}
.xsel{display:flex;align-items:center;gap:8px;width:100%;min-height:44px;margin-top:4px;padding:7px 12px;border-radius:12px;border:1px solid var(--line,rgba(148,163,184,.35));background:color-mix(in srgb,var(--card,#fff) 70%,transparent);color:inherit;font:inherit;text-align:start;cursor:pointer;backdrop-filter:blur(8px)}
.xsel .xl{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.xsel .xl small{opacity:.6;margin-inline-start:6px}
.xsel::after{content:'▾';opacity:.55}.xsel:disabled{opacity:.5}.inl .xsel{flex:1;margin-top:0}
.rfl .xsel{background:#f8fafc!important;color:#0f172a!important;border:1px solid #e2e8f0!important}
.xpk{position:fixed;inset:0;z-index:3500;background:rgba(15,23,42,.45);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:flex;align-items:flex-end;justify-content:center}
.xpb{width:min(100%,520px);max-height:80vh;display:flex;flex-direction:column;background:var(--card,#fff);color:inherit;border-radius:22px 22px 0 0;padding:14px 14px calc(14px + env(safe-area-inset-bottom));box-shadow:0 -10px 40px rgba(0,0,0,.3);animation:xup .2s ease-out}
@keyframes xup{from{transform:translateY(40px);opacity:0}to{transform:none;opacity:1}}
.xpt{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.xpt b{font-size:16px}
.xpx{width:34px;height:34px;border-radius:50%;border:0;background:var(--soft,#eef2f6);color:inherit;cursor:pointer}
.xpq{width:100%;margin:0 0 8px!important}
.xpl{overflow:auto;display:flex;flex-direction:column;gap:6px;padding-bottom:4px}
.xph{font-size:11.5px;font-weight:800;opacity:.6;padding:8px 6px 2px}
.xpo{display:flex;align-items:center;gap:10px;width:100%;padding:10px 12px;border-radius:14px;border:1px solid var(--line,rgba(148,163,184,.3));background:color-mix(in srgb,var(--card,#fff) 70%,transparent);color:inherit;font:inherit;text-align:start;cursor:pointer}
.xpo.on{border-color:var(--p);background:color-mix(in srgb,var(--p) 14%,transparent);font-weight:700}
.xpo i{font-style:normal;color:var(--p);font-weight:800}.xpo .xl{flex:1;min-width:0}.xpo .xl small{opacity:.6;margin-inline-start:6px}.xpo.xnew{border-style:dashed}
.xic{width:30px;height:30px;flex:0 0 30px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;font-size:16px;color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.3)}
.xic.s{width:18px;height:18px;flex-basis:18px;border-radius:6px;font-size:10px;vertical-align:middle}
.xlogo{width:30px;height:30px;flex:0 0 30px;border-radius:10px;object-fit:contain;background:#fff;padding:2px;box-sizing:border-box;box-shadow:0 1px 4px rgba(15,23,42,.15)}
.xlogo.s{width:18px;height:18px;flex-basis:18px;border-radius:5px;padding:1px;vertical-align:middle}
.xic0{font-size:18px;width:30px;text-align:center;flex:0 0 30px}
.xch{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.xch button{width:42px;height:36px;border-radius:12px;border:1px solid var(--line,rgba(148,163,184,.35));background:transparent;color:inherit;font-size:18px;cursor:pointer}
.xch b{cursor:pointer;font-size:16px;padding:4px 10px}
.xcg{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center}
.xcg i{font-style:normal;font-size:10.5px;opacity:.6;padding:4px 0}
.xcg button{aspect-ratio:1;border:0;border-radius:50%;background:transparent;color:inherit;font:inherit;font-size:14px;cursor:pointer}
.xcg button.td{box-shadow:inset 0 0 0 1.5px var(--p)}.xcg button.on{background:var(--p);color:#fff;font-weight:800}
.xcm{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.xcm button{padding:12px 4px;border-radius:12px;border:1px solid var(--line,rgba(148,163,184,.35));background:transparent;color:inherit;font:inherit;cursor:pointer}
.xcm button.on{background:var(--p);color:#fff;border-color:var(--p)}
.xcb{display:flex;gap:8px;margin-top:12px}.xcb button{flex:1;padding:11px;border-radius:12px;border:1px solid var(--line,rgba(148,163,184,.35));background:transparent;color:inherit;font:inherit;font-weight:700;cursor:pointer}
.xcb .pri{background:var(--p);color:#fff;border-color:var(--p)}
.xcr{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;font-size:12px;opacity:.95;margin:8px 0 2px}.xcr b{margin-inline-start:4px}
.hnet.xnn{opacity:.92;font-size:.92em}
.rtb table{table-layout:fixed;width:100%}
.rtb th{white-space:normal!important;padding:9px 6px!important}.rtb th.t{width:42%}
.rtb td{padding:9px 6px!important;overflow-wrap:anywhere}
.rtb td.t,.rtb td.t b,.rtb td.t small,.rtb th.t{text-align:right!important}.rtb td.t{white-space:normal}
.rp .rc.xrc{flex-direction:column;align-items:stretch}
.xlg summary{cursor:pointer;font-weight:700;font-size:12.5px;padding:8px 4px 2px;text-align:center;color:var(--p);list-style:none}
.xlg summary::-webkit-details-marker{display:none}
details.xig{margin-bottom:8px}
.xseg .xsr{display:flex;align-items:flex-end;gap:6px}.xseg .xsr label{flex:1;margin:0}.xseg .xsr span{padding-bottom:12px;font-weight:800}
.xlgp{display:flex;gap:8px;flex-wrap:wrap;margin:4px 0 12px}
.xlgp button{height:46px;min-width:46px;padding:4px 10px;border-radius:12px;border:1.5px solid rgba(148,163,184,.35);background:#fff;color:#334155;font:inherit;font-size:12px;font-weight:700;cursor:pointer}
.xlgp button.on{border-color:var(--p);box-shadow:0 0 0 3px color-mix(in srgb,var(--p) 30%,transparent)}
.xlgp img{height:36px;max-width:90px;object-fit:contain;display:block}
.ccard.xcimg{color:#fff;text-shadow:0 1px 4px rgba(0,0,0,.7)}
.pmlg{display:flex;align-items:center}
`;document.head.appendChild(s)})();

/* ========== أدوات + الكريديت ========== */
var XE={g:'all'},XI={g:'all'},XRC=new Set(),XCATBACK=false;
function xIsCr(mid){const m=M(mid);if(!m)return false;if(typeof m.credit==='boolean')return m.credit;return S.cards.some(c=>c.acct===mid&&c.kind==='credit')}
function xSums(l){const s=sums(l);let cr=0;l.forEach(t=>{if(!t.pend&&t.type==='exp'&&xIsCr(t.method))cr+=t.amount});return{...s,cr,expNC:s.exp-cr,netNC:s.inc-(s.exp-cr)}}

/* ========== اللوجوهات (فولدر logos) ========== */
const XVIA={cash:['💵','#16a34a'],instapay:['⚡','#7c3aed'],transfer:['🏦','#2563eb'],deposit:['🏧','#0891b2'],card:['💳','#ea580c'],wallet:['📱','#db2777'],cheque:['🧾','#64748b'],other:['🔹','#475569'],bank:['🏦','#0f766e']};
const XLG={};
const XLOGOS=['instapay','nbe','fabmisr','nbe-card','fabmisr-card','nbe-credit','nbe-debit','fabmisr-credit','fabmisr-debit','cash','card','wallet','bank','transfer','deposit','cheque','valu'];
let xLR=0;
function xLogoRefresh(){clearTimeout(xLR);xLR=setTimeout(()=>{try{render();document.querySelectorAll('.xsel').forEach(b=>{const s=b.previousElementSibling;if(s&&s.dataset&&s.dataset.x)b.innerHTML=xLbl(s)})}catch(e){}},300)}
XLOGOS.forEach(k=>{const ex=['png','jpg','jpeg','webp'];const tr=i=>{if(i>=ex.length)return;const im=new Image();im.onload=()=>{XLG[k]=im.src;xLogoRefresh()};im.onerror=()=>tr(i+1);im.src='logos/'+k+'.'+ex[i]};tr(0)});
function xMLogo(m){
  if(!m)return '';if(m.logo&&XLG[m.logo])return m.logo;
  const t=((m.name||'')+' '+(m.bank||'')).toLowerCase();
  if(/أهلي|اهلي|ahly|nbe|national/.test(t)&&XLG.nbe)return 'nbe';
  if(/fab|أبوظبي|ابوظبي/.test(t)&&XLG.fabmisr)return 'fabmisr';
  if(/insta|إنستا|انستا/.test(t)&&XLG.instapay)return 'instapay';
  if(/valu|فاليو/.test(t)&&XLG.valu)return 'valu';
  const k=m.type==='bank'?'bank':m.type;return XLG[k]?k:'';
}
const xViaIc=(k,sm)=>{if(!k||!XVIA[k])return '';if(XLG[k])return `<img class="xlogo${sm?' s':''}" src="${XLG[k]}" alt="">`;return `<span class="xic${sm?' s':''}" style="background:${XVIA[k][1]}">${XVIA[k][0]}</span>`};
const xMIc=(m,sm)=>{const lg=xMLogo(m);if(lg)return `<img class="xlogo${sm?' s':''}" src="${XLG[lg]}" alt="">`;const k=m.type==='bank'?'bank':m.type;return `<span class="xic${sm?' s':''}" style="background:${m.color||'#475569'}">${(XVIA[k]||['🏦'])[0]}</span>`};
const xCatIc=c=>`<span class="xic" style="background:${c.kind==='inc'?'#16a34a':'#dc2626'}">${c.fixed?'📌':c.kind==='inc'?'💵':'🏷️'}</span>`;
function xOptIc(s,v){
  if(v==null||v==='')return '<span class="xic0">▫️</span>';
  if(XVIA[v]&&[...s.options].some(o=>o.value==='cheque'))return xViaIc(v);
  const m=M(v);if(m)return xMIc(m);
  const c=C(v);if(c)return xCatIc(c);
  if(TYPES[v])return xViaIc(v);
  if(REN[v])return `<span class="xic0">${REN[v][0]}</span>`;
  if(CTK[v])return `<span class="xic0">${CTK[v][0]}</span>`;
  if(NETS[v])return '<span class="xic0">💳</span>';
  return '';
}

/* ========== القوايم والتاريخ من جوه البرنامج ========== */
const XDN=['سبت','أحد','اتنين','تلات','أربع','خميس','جمعة'],XWD=['الأحد','الاتنين','التلات','الأربع','الخميس','الجمعة','السبت'];
function xOv(){const ov=document.createElement('div');ov.className='xpk';document.body.appendChild(ov);return ov}
function xOvClose(ov){if(ov&&ov.isConnected)ov.remove()}
function xLbl(s){
  if(s.tagName==='SELECT'){const o=s.options[s.selectedIndex];if(!o)return '<span class="xl">—</span>';return `${xOptIc(s,o.value)}<span class="xl">${esc(o.text)}</span>`}
  if(s.type==='month')return `<span class="xic0">📅</span><span class="xl">${s.value?esc(mName(s.value)):'— اختار الشهر —'}</span>`;
  return `<span class="xic0">📅</span><span class="xl">${s.value?`<bdi>${dmy(s.value)}</bdi><small>${XWD[new Date(s.value+'T00:00').getDay()]||''}</small>`:'— اختار التاريخ —'}</span>`;
}
function xEnh(){
  document.querySelectorAll('select:not([data-x]),input[type=date]:not([data-x]),input[type=month]:not([data-x])').forEach(s=>{
    if(s.closest('#printArea'))return;
    s.setAttribute('data-x','1');
    const b=document.createElement('button');b.type='button';b.className='xsel';b.setAttribute('onclick','xPick(this)');
    if(s.disabled)b.disabled=true;b.innerHTML=xLbl(s);s.style.display='none';s.after(b);
  });
}
function xPick(b){const s=b.previousElementSibling;if(!s||b.disabled)return;if(s.tagName==='SELECT')return xSelOpen(s,b);xDateOpen(s,b,s.type==='month')}
function xSelOpen(s,b){
  const items=[];[...s.children].forEach(ch=>{if(ch.tagName==='OPTGROUP'){items.push({h:ch.label});[...ch.children].forEach(o=>items.push({o}))}else items.push({o:ch})});
  let title='اختار';const lb=s.closest('label');if(lb){const tn=[...lb.childNodes].find(n=>n.nodeType===3&&n.nodeValue.trim());if(tn)title=tn.nodeValue.trim()}
  const ov=xOv();
  ov.innerHTML=`<div class="xpb"><div class="xpt"><b>${esc(title)}</b><button type="button" class="xpx">✕</button></div>${items.length>9?'<input class="xpq" placeholder="🔍 دوّر...">':''}<div class="xpl">${items.map(x=>x.h!=null?`<div class="xph">${esc(x.h)}</div>`:`<button type="button" class="xpo ${x.o.value===s.value?'on':''}" data-v="${esc(x.o.value)}" ${x.o.disabled?'disabled':''}>${xOptIc(s,x.o.value)}<span class="xl">${esc(x.o.text)}</span>${x.o.value===s.value?'<i>✓</i>':''}</button>`).join('')}</div></div>`;
  ov.onclick=e=>{if(e.target===ov||e.target.closest('.xpx'))return xOvClose(ov);const o=e.target.closest('.xpo');if(!o||o.disabled)return;s.value=o.dataset.v;b.innerHTML=xLbl(s);xOvClose(ov);s.dispatchEvent(new Event('change',{bubbles:true}))};
  const q=ov.querySelector('.xpq');if(q)q.oninput=()=>{const v=qn(q.value);ov.querySelectorAll('.xpo').forEach(o=>o.style.display=!v||qn(o.textContent).includes(v)?'':'none')};
  const on=ov.querySelector('.xpo.on');if(on)setTimeout(()=>on.scrollIntoView({block:'center'}),30);
}
function xDateOpen(inp,b,monthOnly){
  const v0=inp.value||(monthOnly?NKM:today());let y=+v0.slice(0,4)||NY,m=+v0.slice(5,7)||NM,mode=monthOnly?'m':'d';
  const ov=xOv();
  const set=v=>{inp.value=v;b.innerHTML=xLbl(inp);xOvClose(ov);inp.dispatchEvent(new Event('input',{bubbles:true}));inp.dispatchEvent(new Event('change',{bubbles:true}))};
  const draw=()=>{
    let body;
    if(mode==='d'){
      const off=(new Date(y,m-1,1).getDay()+1)%7,nd=new Date(y,m,0).getDate(),td=today();let c='';
      for(let i=0;i<off;i++)c+='<span></span>';
      for(let d=1;d<=nd;d++){const iso=ym(y,m)+'-'+pad(d);c+=`<button type="button" data-d="${iso}" class="${iso===inp.value?'on':''} ${iso===td?'td':''}">${d}</button>`}
      body=`<div class="xch"><button type="button" data-n="-1">›</button><b data-mm="1">${MONTHS[m-1]} ${y} ▾</b><button type="button" data-n="1">‹</button></div><div class="xcg">${XDN.map(d=>`<i>${d}</i>`).join('')}${c}</div>`;
    }else body=`<div class="xch"><button type="button" data-y="-1">›</button><b>${y}</b><button type="button" data-y="1">‹</button></div><div class="xcm">${MONTHS.map((n,i)=>`<button type="button" data-m="${i+1}" class="${(monthOnly?inp.value===ym(y,i+1):i+1===m)?'on':''}">${n}</button>`).join('')}</div>`;
    ov.innerHTML=`<div class="xpb"><div class="xpt"><b>${monthOnly?'اختار الشهر':'اختار التاريخ'}</b><button type="button" class="xpx">✕</button></div>${body}<div class="xcb"><button type="button" data-t="1" class="pri">${monthOnly?'الشهر ده':'النهارده'}</button><button type="button" class="xpx2">إلغاء</button></div></div>`;
  };
  draw();
  ov.onclick=e=>{
    if(e.target===ov||e.target.closest('.xpx,.xpx2'))return xOvClose(ov);
    const t=e.target.closest('[data-n],[data-d],[data-mm],[data-y],[data-m],[data-t]');if(!t)return;const ds=t.dataset;
    if(ds.n){m+=+ds.n;if(m<1){m=12;y--}if(m>12){m=1;y++}draw()}
    else if(ds.d)set(ds.d);
    else if(ds.mm){mode='m';draw()}
    else if(ds.y){y+=+ds.y;draw()}
    else if(ds.m){m=+ds.m;if(monthOnly)set(ym(y,m));else{mode='d';draw()}}
    else if(ds.t)set(monthOnly?NKM:today());
  };
}
document.addEventListener('change',e=>{const s=e.target;if(s&&s.dataset&&s.dataset.x){const b=s.nextElementSibling;if(b&&b.classList.contains('xsel'))b.innerHTML=xLbl(s)}},true);
/* "اتحصّل" بقت "محصّل" + تحويل القوايم */
(()=>{
  const RX=[[/لسه ما اتحصّلش/g,'غير محصّل'],[/لسه ما اتحصلش/g,'غير محصّل'],[/اتحصّلت?/g,'محصّل'],[/اتحصلت?/g,'محصّل']];
  const fixT=()=>{const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while((n=w.nextNode())){const v=n.nodeValue;if(v&&v.indexOf('اتحص')>-1){let x=v;RX.forEach(([r,s])=>{x=x.replace(r,s)});if(x!==v)n.nodeValue=x}}};
  let q=false;const run=()=>{q=false;try{xEnh()}catch(e){}try{fixT()}catch(e){}};
  new MutationObserver(()=>{if(q)return;q=true;requestAnimationFrame(run)}).observe(document.body,{childList:true,subtree:true,characterData:true});run();
})();
try{const _hb=handleBack;handleBack=function(){const o=document.querySelector('.xpk');if(o){o.remove();return true}const d=document.querySelector('.dlg .dx');if(d){d.click();return true}return _hb.apply(this,arguments)}}catch(e){}

/* ========== ✕ بيرجعك للشاشة اللي قبلها ========== */
function xClose(){
  if(F&&(TXBACK||XCATBACK)){TXBACK=false;XCATBACK=false;SHKEEP=0;txForm();return}
  if(SHST.length)return sheetBack();
  closeSheet();
}
try{const _shX=sheet;sheet=function(){const r=_shX.apply(this,arguments);const x=document.querySelector('#sheet .shbar button:last-child');if(x)x.setAttribute('onclick','xClose()');return r}}catch(e){}

/* ========== تسجيل تحصيل / مصروف ========== */
const XIPK=[['phone','📱 رقم موبايل','01xxxxxxxxx'],['bank','🏦 حساب بنكي','رقم الحساب / IBAN'],['wallet','👛 محفظة','رقم المحفظة'],['other','➕ تاني','name@instapay أو أي حاجة']];
function xIpHist(k){const o=[];[...S.txs].sort(byDesc).forEach(t=>{if(t.ipay&&t.ipay.k===k&&t.ipay.v&&!o.includes(t.ipay.v)&&o.length<8)o.push(t.ipay.v)});return o}
function txForm(){
  NEXTF='tx';
  const orig=F.id&&S.txs.find(t=>t.id===F.id),locked=orig&&!orig.pend&&isClosed(orig.date),inc=F.type==='inc',tr=F.type==='tr',exp=F.type==='exp',src=!!(orig&&orig.src);
  const cur=F.cat&&F.cat!=='__new'?C(F.cat):null;
  if(F.isLoan==null)F.isLoan=!!(orig&&orig.loan);
  if(F.ldue==null)F.ldue=orig&&orig.loan?(orig.loan.due||''):'';
  if(!F.ip||typeof F.ip!=='object')F.ip=orig&&orig.ipay?{...orig.ipay}:{k:'phone',v:''};
  if(F.fev==null)F.fev=1;
  const pend=!tr&&!!F.pend,fxOn=!!(cur&&cur.fixed)||!!F.fix,canFlip=F.id&&!src&&!tr;
  const meths=S.methods.filter(m=>m.active||m.id===F.method||m.id===F.to);
  const addAcct=`<button type="button" class="mini" title="حساب جديد" onclick="grab();TXBACK=true;editMethod()">+</button>`;
  const ttl=F.id?(tr?'✏️ تعديل التحويل':inc?'✏️ تعديل التحصيل':'✏️ تعديل المصروف'):(inc?'💰 تحصيل جديد':'💸 مصروف جديد');
  const W1=inc?'✅ محصّل':'✅ مدفوع',W0=inc?'⏳ غير محصّل':'⏳ غير مدفوع';
  const stBox=canFlip?`<div class="kv"><span>الحالة</span><b>${pend?W0:W1}</b></div>
    ${F._st?`<div class="two"><button type="button" class="btn ${pend?'ghost':''}" onclick="txSetSt(0)">${W1}</button><button type="button" class="btn ${pend?'':'ghost'}" onclick="txSetSt(1)">${W0}</button></div>`
    :`<button type="button" class="btn ghost" onclick="grab();F._st=1;SHKEEP=1;txForm()">🔄 تغيير الحالة</button>`}`:'';
  const catLbl=cur?`${xCatIc(cur)}<span class="xl">${esc(cur.name)}</span>`:F.cat==='__new'?`<span class="xic0">➕</span><span class="xl">بند جديد: ${esc(F.newCat||'')}</span>`:'<span class="xl">— اختار البند —</span>';
  const chips=tr||src?'':`<div class="xchips"><button type="button" class="xchip ${fxOn?'on':''}" ${cur&&cur.fixed?'disabled':''} onclick="grab();F.fix=!F.fix;SHKEEP=1;txForm()">📌 ثابت${cur&&cur.fixed?' ✓':''}</button>${exp?`<button type="button" class="xchip ${F.isLoan?'on':''}" onclick="grab();F.isLoan=!F.isLoan;SHKEEP=1;txForm()">🤝 سلفة</button>`:''}</div>
    ${F.fix&&!(cur&&cur.fixed)?`<label>بيتكرر<select id="f-ev">${EVERY.map(([v,l])=>`<option value="${v}" ${+F.fev===v?'selected':''}>${l}</option>`).join('')}</select></label><small class="muted xhint">📌 البند هيتسجل ثابت، والمرات الجاية هتظهر لوحدها</small>`:''}
    ${cur&&cur.fixed?`<small class="muted xhint">📌 البند ده ثابت، وهيتسجل على ميعاد ${esc(mName((F.date||today()).slice(0,7)))}</small>`:''}
    ${exp&&F.isLoan?`<label>📅 ميعاد سداد السلفة<input id="f-ld" type="date" value="${F.ldue||''}"></label>`:''}`;
  const ipK=XIPK.find(x=>x[0]===F.ip.k)||XIPK[0];
  const ipBox=exp&&F.via==='instapay'?`<div class="xipb"><div class="fl">⚡ حولت على إنستاباي لـ</div><div class="xchips">${XIPK.map(([k,l])=>`<button type="button" class="xchip ${F.ip.k===k?'on':''}" onclick="grab();F.ip.k='${k}';SHKEEP=1;txForm()">${l}</button>`).join('')}</div><input id="f-iv" list="f-ivl" dir="ltr" value="${esc(F.ip.v||'')}" placeholder="${esc(ipK[2])}"><datalist id="f-ivl">${xIpHist(F.ip.k).map(v=>`<option value="${esc(v)}"></option>`).join('')}</datalist></div>`:'';
  sheet(`<h2>${ttl}</h2>
  ${locked?'<p class="warn">🔒 الشهر ده مقفول</p>':''}
  ${!F.id&&exp?'<button class="btn ghost" onclick="scanReceipt()">📷 Receipt Scan</button>':''}
  ${stBox}
  <input id="f-amt" class="amt-in" type="text" inputmode="decimal" placeholder="0" value="${esc(F.amount)}">
  ${tr?`<label>من حساب<div class="inl"><select id="f-m">${opt(meths,F.method)}</select>${addAcct}</div></label>
    <label>إلى حساب<div class="inl"><select id="f-to">${opt(meths,F.to)}</select>${addAcct}</div></label>
    <label>الطريقة<select id="f-v">${viaOpts(F.via)}</select></label>`
  :`<label>البند<button type="button" class="xsel" onclick="xCatOpen()" ${src?'disabled':''}>${catLbl}</button></label>
    ${chips}
    <div class="two"><label>${!F.id?'الحساب':pend?(inc?'هيتحصّل على حساب':'هيتدفع من حساب'):inc?'استلمت في حساب':'دفعت من حساب'}<div class="inl"><select id="f-m">${opt(meths,F.method)}</select>${addAcct}</div></label>
    <label>الطريقة<select id="f-v" onchange="grab();SHKEEP=1;txForm()">${viaOpts(F.via)}</select></label></div>
    ${ipBox}`}
  <div class="two"><label>${F.id&&pend?'الميعاد المتوقع':'التاريخ'}<input id="f-d" type="date" value="${F.date}"></label><label>ملاحظة<input id="f-n" type="text" value="${esc(F.note)}"></label></div>
  <div class="fl">المرفقات</div>${filesBox(F.files,'tx')}
  <button class="btn" onclick="saveTx()" ${locked?'disabled':''}>سجّل</button>
  ${F.id&&pend?`<button class="btn ghost" onclick="postpone('${F.id}');closeSheet()">⏭ أجّل للشهر الجاي</button>`:''}
  ${F.id&&!locked?'<button class="btn ghost danger" onclick="delTx()">حذف العملية</button>':''}`);
}
try{const _gb0=grab;grab=function(){_gb0();if($('#f-ev'))F.fev=+$('#f-ev').value||1;if($('#f-ld'))F.ldue=$('#f-ld').value;if($('#f-iv')){F.ip=F.ip||{k:'phone'};F.ip.v=$('#f-iv').value}}}catch(e){}
/* البند: قايمة مقفولة فيها بحث بالاسم أو المحل أو رقم الموبايل */
function xCatOpen(){
  grab();const kind=F.type==='inc'?'inc':'exp',used={};
  S.txs.forEach(t=>{if(t.cat&&t.type===kind)used[t.cat]=Math.max(used[t.cat]||0,t.created||0)});
  const cats=S.cats.filter(c=>c.kind===kind&&(c.active!==false||c.id===F.cat)).sort((a,b)=>(used[b.id]||0)-(used[a.id]||0)||a.name.localeCompare(b.name,'ar'));
  const H=cats.map(c=>{const cts=S.contacts.filter(x=>x.catId===c.id);return[c,qn([c.name,...(c.alias||[]),...cts.map(x=>x.name+' '+(x.spec||'')+' '+(x.phones||[]).join(' '))].join(' '))]});
  const ov=xOv();
  ov.innerHTML=`<div class="xpb"><div class="xpt"><b>${kind==='inc'?'💰 بند التحصيل':'💸 بند المصروف'}</b><button type="button" class="xpx">✕</button></div><input class="xpq" placeholder="🔍 اسم البند أو المحل أو رقم الموبايل"><div class="xpl"></div></div>`;
  const q=ov.querySelector('.xpq'),box=ov.querySelector('.xpl');
  const draw=()=>{
    const v=qn(q.value),raw=q.value.trim(),l=H.filter(([c,h])=>!v||h.includes(v)),exact=l.some(([c])=>qn(c.name)===v);
    box.innerHTML=l.map(([c])=>`<button type="button" class="xpo ${c.id===F.cat?'on':''}" data-v="${c.id}">${xCatIc(c)}<span class="xl">${esc(c.name)}${c.fixed?'<small>📌 ثابت</small>':''}</span>${c.id===F.cat?'<i>✓</i>':''}</button>`).join('')
      +(raw&&!exact&&!/^[\d\s+]+$/.test(raw)?`<button type="button" class="xpo xnew" data-new="1"><span class="xic0">➕</span><span class="xl">بند جديد: ${esc(raw)}</span></button>`:'')
      +`<button type="button" class="xpo xnew" data-full="1"><span class="xic0">⚙️</span><span class="xl">بند جديد بالتفاصيل</span></button>`;
  };
  draw();q.oninput=draw;
  ov.onclick=e=>{
    if(e.target===ov||e.target.closest('.xpx'))return xOvClose(ov);
    const o=e.target.closest('.xpo');if(!o)return;const nm0=q.value.trim();xOvClose(ov);
    if(o.dataset.new){F.cat='__new';F.newCat=nm0;SHKEEP=1;txForm();return}
    if(o.dataset.full){XCATBACK=true;catForm(null,kind,nm0?{name:nm0}:undefined);return}
    catPick(o.dataset.v);
  };
}
async function saveTx(){
  grab();const amount=parseNum(F.amount),tr=F.type==='tr',kind=F.type,orig=F.id&&S.txs.find(t=>t.id===F.id);
  if(!(amount>0))return toast('اكتب مبلغ صحيح');
  if(!F.date)return toast('اختار التاريخ');
  if(!F.method)return toast('اختار الحساب');
  let cid=null,newName='';
  if(tr){if(!F.to||F.to===F.method)return toast('اختار حسابين مختلفين')}
  else{
    const cc=F.cat&&F.cat!=='__new'&&C(F.cat);
    if(cc&&cc.kind===kind)cid=cc.id;
    else{
      const name=(F.cat==='__new'?F.newCat||'':'').trim();if(!name)return toast('اختار البند');
      const ex=S.cats.find(c=>c.kind===kind&&normAr(c.name)===normAr(name));
      if(ex)cid=ex.id;
      else{const m=findIncCat(name,kind);
        if(m){const use=await ask('خلي بالك ⚠️',`فيه بند متسجل قبل كده اسمه «${m.name}».\nتسجّل عليه، ولا تعمل بند جديد باسم «${name}»؟`,{icon:'⚠️',ok:'سجّل عليه',cancel:'➕ بند جديد'});if(use===null)return;if(use)cid=m.id;else newName=name}
        else newName=name}
    }
  }
  if(!tr&&!F.id){
    const inc=kind==='inc',nm0=cid?C(cid).name:newName;
    const done=await ask('الحالة',`${nm0} · ${fmt(amount)}`,{icon:inc?'💰':'💸',ok:inc?'✅ محصّل':'✅ مدفوع',cancel:inc?'⏳ غير محصّل':'⏳ غير مدفوع'});
    if(done===null)return;F.pend=!done;
  }
  const pend=!tr&&!!F.pend;
  if(!pend&&isClosed(F.date))return toast(`شهر ${mName(F.date.slice(0,7))} مقفول`);
  if(newName){const c=ensureCat(newName,kind);c.active=true;cid=c.id}
  const c=cid?C(cid):null;let link=null;
  if(c&&!(orig&&orig.src)){
    if(F.fix&&!c.fixed){
      const ev=+F.fev||1;
      Object.assign(c,{fixed:true,amount,every:ev,start:F.date,acct:F.method,via:F.via||'',st:{},amt:{},active:true});
      if(kind==='exp')c.autoFrom=pend?addMonths(F.date,ev):F.date;
    }
    if(c.fixed&&c.start){
      const k=occK(c,F.date.slice(0,7));
      if(k>=0){
        const s=stOf(occRec(c,k));
        if(s.st==='done'){
          if(!F.id&&s.t.id!==F.id){
            const r=await ask('البند ده متسجل الشهر ده',`«${c.name}» متسجل قبل كده بـ ${fmt(s.t.amount)} يوم ${dmy(s.t.date)}.\nتعدّل الموجود بدل ما يتسجل مرتين؟`,{icon:'⚠️',ok:'✏️ عدّل الموجود',cancel:'➕ سجّل مرة تانية'});
            if(r===null)return;
            if(r){if(isClosed(s.t.date))return toast('الشهر مقفول');Object.assign(s.t,{amount,method:F.method,via:F.via||'',date:F.date,note:(F.note||'').trim()||s.t.note,files:[...(s.t.files||[]),...(F.files||[])]});save();closeSheet();render();refreshRV();return toast('اتعدّل ✓')}
          }
        }else if(pend){
          if(!F.id){c.amt=c.amt||{};c.amt[k]=amount;c.st=c.st||{};c.st[k]={st:'wait',hold:true};save();closeSheet();render();refreshRV();return toast(`⏳ ${kind==='inc'?'غير محصّل':'غير مدفوع'} · ${fmt(amount)}`)}
        }else link=k;
      }
    }
  }
  const t={id:F.id||uid(),type:kind,amount,method:F.method,via:F.via||'',date:F.date,note:(F.note||'').trim(),files:F.files||[],created:F.created||Date.now()};
  if(pend)t.pend=true;if(F.post)t.post=F.post;if(F.due&&!pend)t.due=F.due;
  if(tr)t.to=F.to;else t.cat=cid;
  if(F.src&&!tr)t.src=F.src;
  if(orig&&orig.loanOf)t.loanOf=orig.loanOf;
  if(kind==='exp'&&F.isLoan)t.loan={due:F.ldue||''};
  if(kind==='exp'&&F.via==='instapay'&&F.ip&&(F.ip.v||'').trim())t.ipay={k:F.ip.k,v:F.ip.v.trim()};
  if(link!=null){t.src={k:'r',id:c.id,p:link};c.st=c.st||{};c.st[link]={st:'done',txId:t.id,at:Date.now()}}
  const i=S.txs.findIndex(x=>x.id===t.id);if(i>=0)S.txs[i]=t;else S.txs.push(t);
  const bb=S.buys.find(b=>b.txId===t.id);if(bb){bb.total=t.amount;bb.date=t.date}
  save();closeSheet();render();refreshRV();
  toast(pend?`⏳ ${kind==='inc'?'غير محصّل':'غير مدفوع'} · ${fmt(amount)}`:kind==='inc'?`✅ محصّل · ${fmt(amount)}`:'اتسجّل ✓');
}
try{const _tb0=txBody;txBody=function(t){let h=_tb0(t);const ex=[];
  if(t.ipay&&t.ipay.v)ex.push(`<div class="kv"><span>⚡ حولت لـ</span><b><bdi>${esc(t.ipay.v)}</bdi></b></div>`);
  if(t.loan){const r=r2(t.amount-xLoanPaid(t));ex.push(`<div class="kv"><span>🤝 سلفة</span><b>${r>0?'باقي '+num(r)+(t.loan.due?' · السداد '+dmy(t.loan.due):''):'اتسددت ✓'}</b></div>`)}
  if(t.type==='exp'&&xIsCr(t.method))ex.push('<div class="kv"><span>💳 الدفع</span><b>كريديت</b></div>');
  if(ex.length)h=h.replace('<div class="etbar"',ex.join('')+'<div class="etbar"');return h}}catch(e){}

/* ========== البند ========== */
const xSeg=(pend,kind,fn)=>`<div class="seg st">${[[1,kind==='inc'?'⏳ غير محصّل':'⏳ غير مدفوع','wt'],[0,kind==='inc'?'✅ محصّل':'✅ مدفوع','dn']].map(([v,l,c])=>`<button type="button" class="${+!!+pend===v?'on '+c:''}" onclick="${fn}(${v})">${l}</button>`).join('')}</div>`;
function catSheet(){
  NEXTF='cat';
  const c=CF,inc=c.kind==='inc',orig=c.id?C(c.id):null,locked=orig&&Object.keys(orig.st||{}).length>0,ann=+c.every>=12,qp=!!+c.qp;
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
    ${inc?'':`<label class="chk fxbox"><input type="checkbox" id="cf-auto" ${c.noAuto?'':'checked'}> 🔄 بيتدفع لوحده في ميعاده</label>`}
  </div>`:XCATBACK?'':`<div class="qbox ${inc?'':'exp'}"><b>${inc?'💰 سجّل مبلغ':'💸 سجّل مبلغ'}</b> <small class="muted">(اختياري)</small>
    ${xSeg(c.qp,c.kind,'cfSetP')}
    <input id="cf-qa" class="amt-in" type="text" inputmode="decimal" value="${esc(c.qa||'')}" placeholder="0">
    <div class="two"><label>${qp?(inc?'هيتحصّل على حساب':'هيتدفع من حساب'):inc?'استلمت في حساب':'دفعت من حساب'}<select id="cf-qm">${opt(S.methods.filter(m=>m.active),c.qm)}</select></label><label>الطريقة<select id="cf-qv">${viaOpts(c.qv)}</select></label></div>
    <label>${qp?'الميعاد المتوقع':'التاريخ'}<input id="cf-qd" type="date" value="${c.qd||today()}"></label>
  </div>`}
  <label>ملاحظات<input id="cf-note" value="${esc(c.note||'')}"></label>
  <div class="fl">مرفقات البند</div>${filesBox(c.files,'cat')}
  <label class="chk"><input type="checkbox" id="cf-act" ${c.active!==false?'checked':''}> مفعّل</label>
  <button class="btn" onclick="catSave()">حفظ</button>
  ${c.id&&inc&&!c.fixed?`<button class="btn ghost" onclick="toAccount('${c.id}')">🏦 انقله للحسابات</button>`:''}
  ${c.id?`<button class="btn ghost danger" onclick="delCat('${c.id}')">🗑 حذف البند</button>`:''}`);
}
try{const _gcf=grabCF;grabCF=function(){_gcf();if($('#cf-auto'))CF.noAuto=!$('#cf-auto').checked}}catch(e){}
function catSave(){
  grabCF();const name=(CF.name||'').trim();if(!name)return toast('اكتب اسم البند');
  if(S.cats.some(x=>x.kind===CF.kind&&x.name===name&&x.id!==CF.id))return toast('البند ده موجود قبل كده');
  let c=CF.id?C(CF.id):null;
  if(c&&c.kind!==CF.kind&&S.txs.some(t=>t.cat===c.id))return toast('البند عليه عمليات، مينفعش تغيّر نوعه');
  if(CF.fixed){if(!(parseNum(CF.amount)>0))return toast('اكتب القيمة');if(!CF.start)return toast('اختار الميعاد')}
  const qa=!CF.fixed&&!XCATBACK?parseNum(CF.qa):NaN,qp=!!+CF.qp;
  if(qa>0){if(!CF.qm)return toast('اختار الحساب');if(!CF.qd)return toast('اختار التاريخ');if(!qp&&isClosed(CF.qd))return toast(`شهر ${mName(CF.qd.slice(0,7))} مقفول`)}
  const isNew=!c;
  if(!c){c={id:uid(),amt:{},st:{}};S.cats.push(c)}
  Object.assign(c,{name,kind:CF.kind,fixed:!!CF.fixed,amount:parseNum(CF.amount)||0,every:+CF.every||1,start:CF.start||today(),pct:parseNum(CF.pct)||0,acct:CF.acct||'',via:CF.via||'',note:(CF.note||'').trim(),files:CF.files||[],active:CF.active!==false,noAuto:CF.kind==='exp'&&CF.fixed?!!CF.noAuto:false});
  if(c.fixed&&c.kind==='exp'&&!c.autoFrom)c.autoFrom=(XCATBACK&&isNew)?addMonths(c.start,+c.every||1):NKM+'-01';
  if(qa>0)S.txs.push({id:uid(),type:c.kind,amount:qa,cat:c.id,method:CF.qm,via:CF.qv||'',date:CF.qd,note:'',files:[],created:Date.now(),pend:qp});
  itab=c.kind;save();autoPostFixed();
  if(XCATBACK&&F){XCATBACK=false;F.cat=c.id;F.newCat='';if(c.acct&&M(c.acct))F.method=c.acct;if(c.via)F.via=c.via;if(c.fixed&&!parseNum(F.amount)&&c.amount)F.amount=amtStr(c.amount);render();txForm();return toast('اتضاف البند ✓')}
  closeSheet();render();refreshRV();toast('اتحفظ ✓');
}

/* ========== الصفوف ========== */
function fixedRow(o){
  const inc=o.r.kind==='inc',done=o.s.st==='done',old=o.s.st==='old',skip=o.s.st==='skip',late=!done&&!old&&!skip&&o.date<today(),W=inc?'محصّل':'مدفوع';
  const auto=!inc&&!o.r.noAuto&&!((occRec(o.r,o.k)||{}).hold);
  const sub=done?W+' '+dmy(o.s.t.date):old?'مسجّل سابقاً':skip?'اتلغى الشهر ده':(late?'متأخر':auto?'بينزل لوحده':inc?'غير محصّل':'غير مدفوع')+' · ميعاده '+dmy(o.date);
  const body=done?txBody(o.s.t):`<div class="kv"><span>الميعاد</span><b>${fdate(o.date)}</b></div><div class="kv"><span>التكرار</span><b>${everyTxt(o.r.every)}</b></div><div class="kv"><span>القيمة</span><b>${fmt(o.amt)}</b></div>${o.r.acct&&M(o.r.acct)?`<div class="kv"><span>${inc?'بيتحصّل على':'بيتدفع من'}</span><b>${xMIc(M(o.r.acct),1)} ${esc(M(o.r.acct).name)}</b></div>`:''}${o.r.note?`<div class="kv"><span>ملاحظة</span><b>${esc(o.r.note)}</b></div>`:''}
    <div class="etbar" style="margin:8px 0 0">${old?'':`<button class="mini pri" onclick="occSheet('${o.r.id}',${o.k})">✏️ تعديل</button>`}<button class="mini" onclick="catForm('${o.r.id}')">⚙️ البند</button></div>`;
  return `<div class="ckx"><input type="checkbox" ${done||old?'checked':''} ${old?'disabled':''} onchange="recToggle('${o.r.id}',${o.k},this)"><details class="xr ${done?'done':''}"><summary><div class="grow"><b>📌 ${esc(o.r.name)}</b><small class="${late?'neg':''}">${sub}</small></div><div class="amt ${done?(inc?'inc':'exp'):''}">${num(done?o.s.t.amount:o.amt)}</div></summary><div class="xb">${body}</div></details></div>`;
}
function txRow(t){
  const inc=t.type==='inc',W=inc?'محصّل':'مدفوع',late=t.pend&&t.date<today(),fromOld=t.pend&&t.date<ym(cur.y,cur.m)+'-01',nf=(t.files||[]).length,m=M(t.method);
  const sub=t.pend?`${late?'متأخر':inc?'غير محصّل':'غير مدفوع'} · ميعاده ${dmy(t.date)}${fromOld?' (من '+MONTHS[+t.date.slice(5,7)-1]+')':''}${t.post?' · اتأجّل '+t.post+' مرة':''}`
    :`${W} ${dmy(t.date)}${m?' · '+xMIc(m,1)+' '+esc(m.name):''}${t.via?' · '+xViaIc(t.via,1)+' '+viaTxt(t.via):''}${nf?' · 📎':''}`;
  const body=t.pend?`<div class="kv"><span>الميعاد</span><b>${fdate(t.date)}</b></div><div class="kv"><span>${inc?'هيتحصّل على':'هيتدفع من'}</span><b>${esc(m?.name||'—')}</b></div>${t.via?`<div class="kv"><span>الطريقة</span><b>${viaTxt(t.via)}</b></div>`:''}${t.post?`<div class="kv"><span>اتأجّل</span><b>${t.post} مرة</b></div>`:''}${t.note?`<div class="kv"><span>ملاحظة</span><b>${esc(t.note)}</b></div>`:''}${nf?`<div class="files">${t.files.map(id=>fileThumb(id,'view')).join('')}</div>`:''}
    <div class="etbar" style="margin:8px 0 0"><button class="mini pri" onclick="editTx('${t.id}')">✏️ تعديل</button><button class="mini" onclick="postpone('${t.id}')">⏭ أجّل للشهر الجاي</button></div>`:txBody(t);
  return `<div class="ckx"><input type="checkbox" ${t.pend?'':'checked'} onchange="txDone('${t.id}',this)"><details class="xr ${t.pend?'':'done'}"><summary><div class="grow"><b>${t.pend?'⏳ ':''}${esc(C(t.cat)?.name||'—')}${isAnnualTx(t)?' <span class="tag ctr">سنوي</span>':''}${t.loan?' <span class="tag wait">سلفة</span>':''}</b><small class="${late?'neg':''}">${sub}</small></div><div class="amt ${t.pend?'':(inc?'inc':'exp')}">${num(t.amount)}</div></summary><div class="xb">${body}</div></details></div>`;
}
function xExpRow(t){
  const r=XRC.has(t.id),m=M(t.method),cr=xIsCr(t.method),lo=t.loan?r2(t.amount-xLoanPaid(t)):0;
  const sub=[dmy(t.date),m?xMIc(m,1)+' '+esc(m.name)+(cr?' 💳':''):'',t.via?xViaIc(t.via,1)+' '+esc(viaTxt(t.via)):'',t.ipay&&t.ipay.v?'← <bdi>'+esc(t.ipay.v)+'</bdi>':'',t.note&&!/^🧾/.test(t.note)?esc(t.note):''].filter(Boolean).join(' · ')+((t.files||[]).length&&!r?' · 📎':'');
  return `<div class="row" onclick="editTx('${t.id}')"><span class="ic" style="background:var(--soft)">${r?'🧾':t.loan?'🤝':'💸'}</span><div class="grow"><b>${esc(C(t.cat)?.name||'—')}${t.loan?` <span class="tag ${lo>0?'wait':'ok'}">${lo>0?'سلفة':'اتسددت'}</span>`:''}</b><small>${sub}</small></div><div class="amt exp">${num(t.amount)}</div></div>`;
}
const xTiles=(arr,curv,setter)=>`<div class="tiles x4">${arr.map(([k,ic,l,n])=>`<button class="tile ${curv===k?'on':''}" onclick="${setter}='${k}';render()"><span>${ic}</span><b>${esc(l)}</b><small>${n}</small></button>`).join('')}</div>`;

/* ========== المصروف الثابت والأقساط بينزلوا لوحدهم ========== */
function autoPostFixed(){
  const td=today();let n=0;
  FX().forEach(r=>{
    for(let k=0;k<600;k++){
      const d=occDate(r,k);if(d.slice(0,7)>NKM)break;
      if(stOf(occRec(r,k)).st!=='wait')continue;
      const man=S.txs.find(t=>t.cat===r.id&&t.type===r.kind&&!t.pend&&!t.src&&!t.loan&&t.date.slice(0,7)===d.slice(0,7));
      if(man){man.src={k:'r',id:r.id,p:k};r.st=r.st||{};r.st[k]={st:'done',txId:man.id,at:Date.now()};n++}
    }
  });
  FX().filter(c=>c.kind==='exp'&&c.active!==false&&!c.noAuto).forEach(r=>{
    const from=r.autoFrom||'0000';
    for(let k=0;k<600;k++){
      const d=occDate(r,k);if(d>td)break;if(d<from)continue;
      const rec=occRec(r,k);if(rec&&rec.hold)continue;
      if(stOf(rec).st!=='wait'||isClosed(d))continue;
      const amt=occAmt(r,k),method=r.acct&&M(r.acct)?r.acct:defMethod();if(!(amt>0)||!method)continue;
      const t={id:uid(),type:'exp',amount:amt,cat:r.id,method,via:r.via||'',date:d,note:'',files:[],created:Date.now(),src:{k:'r',id:r.id,p:k}};
      S.txs.push(t);r.st=r.st||{};r.st[k]={st:'done',txId:t.id,at:Date.now()};n++;
    }
  });
  n+=xAutoPlans();
  if(n)save();return n;
}
function xAutoPlans(){
  let n=0;const td=today();
  S.plans.forEach(p=>{
    if(!p.auto)return;const from=p.autoFrom||'0000',method=p.acct&&M(p.acct)?p.acct:defMethod();if(!method)return;let cat=null;
    p.items.forEach(it=>{
      if(itTx(it)||it.noAuto||!it.due||it.due>td||it.due<from||isClosed(it.due)||!(+it.amount>0))return;
      cat=cat||C(p.catId)||ensureCat(p.name,'exp');
      const t={id:uid(),type:'exp',amount:+it.amount,cat:cat.id,method,via:p.via||'',date:it.due,note:`قسط ${fdate(it.due)}`,files:[],created:Date.now(),src:{k:'i',id:p.id,p:it.id}};
      S.txs.push(t);it.txId=t.id;n++;
    });
  });
  return n;
}
async function xDedupe(){
  const dups=[];
  FX().filter(c=>c.kind==='exp').forEach(r=>Object.entries(r.st||{}).forEach(([k,rec])=>{
    if(!rec||rec.st!=='done')return;const at=S.txs.find(t=>t.id===rec.txId);
    if(!at||!at.src||at.src.k!=='r'||at.note||(at.files||[]).length||isClosed(at.date))return;
    const man=S.txs.find(t=>t.id!==at.id&&t.cat===r.id&&t.type==='exp'&&!t.pend&&!t.src&&t.date.slice(0,7)===at.date.slice(0,7));
    if(man)dups.push({r,k,at,man});
  }));
  if(!dups.length)return;
  const sig=dups.map(d=>d.at.id).sort().join(',');if(S.settings.xdup===sig)return;
  const ok=await ask('مصروف ثابت متسجل مرتين ⚠️',dups.map(d=>`• ${d.r.name} · ${mName(d.at.date.slice(0,7))}\nاتسجل لوحده ${fmt(d.at.amount)} وانت سجلته ${fmt(d.man.amount)}`).join('\n')+'\n\nأشيل اللي اتسجل لوحده وأخلي اللي انت سجلته؟',{icon:'🧹',ok:'✓ صلّحها',cancel:'سيبها زي ما هي'});
  if(ok===null)return;
  if(!ok){S.settings.xdup=sig;save();return}
  dups.forEach(d=>{S.txs=S.txs.filter(t=>t.id!==d.at.id);d.man.src={k:'r',id:d.r.id,p:+d.k};d.r.st[d.k]={st:'done',txId:d.man.id,at:Date.now()}});
  SKIPDEL=true;save();render();refreshRV();toast('اتصلحت ✓');
}
function xDedupeLater(){if($('#lock').classList.contains('on'))return setTimeout(xDedupeLater,1500);xDedupe()}

/* ========== الأقساط ========== */
function planNew(){PF={id:null,name:'',cat:'',note:'',files:[],items:[],acct:defMethod()||'',via:'',auto:false,seg:[{n:'',a:''}],gd:'',ge:1};planForm()}
function planForm(){
  NEXTF='plan';
  if(!PF.seg||!PF.seg.length)PF.seg=[{n:'',a:''}];if(PF.ge==null)PF.ge=1;if(PF.acct==null)PF.acct=defMethod()||'';
  const meths=S.methods.filter(m=>m.active||m.id===PF.acct);
  const sc=PF.seg.reduce((a,s)=>a+(Math.round(parseNum(s.n))||0),0),st=PF.seg.reduce((a,s)=>a+(Math.round(parseNum(s.n))||0)*(parseNum(s.a)||0),0);
  sheet(`<h2>${PF.id?'تعديل':'إضافة'} — ${esc(L('inst'))}</h2>
  <label>اسم القسط<input id="q1" value="${esc(PF.name)}" placeholder="Valu، قسط العربية..."></label>
  <label>بند المصروف<select id="q2"><option value="">نفس اسم القسط</option>${S.cats.filter(c=>c.kind==='exp').map(c=>`<option value="${esc(c.name)}" ${c.name===PF.cat?'selected':''}>${esc(c.name)}</option>`).join('')}</select></label>
  <div class="two"><label>بيتدفع من حساب<select id="q5">${opt(meths,PF.acct)}</select></label><label>الطريقة<select id="q6">${viaOpts(PF.via)}</select></label></div>
  <label class="chk fxbox"><input type="checkbox" id="q7" ${PF.auto?'checked':''}> 🔄 بيتخصم لوحده في ميعاده</label>
  <label>ملاحظات<input id="q3" value="${esc(PF.note)}"></label>
  <div class="fl">صور العقد / المستندات</div>${filesBox(PF.files,'plan')}
  <div class="box xseg"><b>📅 جدول الأقساط</b><p class="muted" style="margin:4px 0 8px">لو المبلغ بيتغير: كل سطر = عدد شهور × قيمة القسط. مثلاً 3 × 2413 وبعدها 1 × 1829</p>
    ${PF.seg.map((s,i)=>`<div class="xsr"><label>عدد الشهور<input data-s="n" data-i="${i}" inputmode="numeric" value="${esc(s.n)}"></label><span>×</span><label>القيمة<input data-s="a" data-i="${i}" inputmode="decimal" value="${esc(s.a)}"></label>${PF.seg.length>1?`<button type="button" class="mini danger" onclick="grabPF();PF.seg.splice(${i},1);planForm()">✕</button>`:''}</div>`).join('')}
    <button type="button" class="mini" style="margin-top:8px" onclick="grabPF();PF.seg.push({n:'',a:''});planForm()">+ مرحلة</button>
    <div class="two"><label>أول قسط<input id="g3" type="date" value="${PF.gd||''}"></label><label>كل<select id="g4">${EVERY.map(([v,l])=>`<option value="${v}" ${+PF.ge===v?'selected':''}>${l}</option>`).join('')}</select></label></div>
    ${sc?`<p class="muted">${sc} قسط · الإجمالي ${fmt(st)}</p>`:''}
    <button type="button" class="mini pri" onclick="genItems()">توليد الأقساط</button></div>
  <h3>الأقساط (${PF.items.length})</h3>
  <div class="etbar"><button class="mini" onclick="ocrStart()">📷 من صورة</button><button class="mini" onclick="grabPF();PF.items.push({id:uid(),due:'',amount:''});planForm()">+ قسط</button></div>
  <div id="ocrst"></div>
  ${PF.items.length?`<div class="tbl"><table class="pt"><thead><tr><th>#</th><th>الميعاد</th><th>المبلغ</th><th></th></tr></thead><tbody>${PF.items.map((it,i)=>`<tr><td>${i+1}</td><td><input type="date" data-q="due" value="${it.due||''}" ${it.txId?'disabled':''}></td><td><input type="text" inputmode="decimal" data-q="amount" value="${esc(it.amount??'')}" ${it.txId?'disabled':''}></td><td>${it.txId?'✓':`<button class="mini danger" onclick="grabPF();PF.items.splice(${i},1);planForm()">✕</button>`}</td></tr>`).join('')}</tbody></table></div>`:''}
  <button class="btn" onclick="planSave()">حفظ</button>
  ${PF.id?`<button class="btn ghost danger" onclick="planDel('${PF.id}')">حذف</button>`:''}`);
}
function grabPF(){
  if(!$('#q1'))return;PF.name=$('#q1').value;PF.cat=$('#q2').value;PF.note=$('#q3').value;
  if($('#q5'))PF.acct=$('#q5').value;if($('#q6'))PF.via=$('#q6').value;if($('#q7'))PF.auto=$('#q7').checked;
  document.querySelectorAll('#sheet [data-s]').forEach(i=>{const s=PF.seg[+i.dataset.i];if(s)s[i.dataset.s]=i.value});
  if($('#g3'))PF.gd=$('#g3').value;if($('#g4'))PF.ge=+$('#g4').value||1;
  document.querySelectorAll('#sheet .pt tbody tr').forEach((tr,i)=>{const it=PF.items[i];if(!it)return;tr.querySelectorAll('[data-q]').forEach(inp=>{if(!inp.disabled)it[inp.dataset.q]=inp.value})});
}
async function genItems(){
  grabPF();const f=PF.gd,e=+PF.ge||1,segs=PF.seg.map(s=>({n:Math.round(parseNum(s.n)),a:parseNum(s.a)})).filter(s=>s.n>0&&s.a>0);
  if(!segs.length||!f)return toast('اكتب عدد الشهور والقيمة وتاريخ أول قسط');
  const un=PF.items.filter(it=>!it.txId);
  if(un.length){const r=await ask('فيه أقساط متسجلة',`فيه ${un.length} قسط مش مدفوع. أشيلهم وأحط الجداد؟`,{icon:'📅',ok:'شيلهم',cancel:'ضيف عليهم'});if(r===null)return;if(r)PF.items=PF.items.filter(it=>it.txId)}
  let i=0;segs.forEach(s=>{for(let j=0;j<s.n&&i<360;j++,i++)PF.items.push({id:uid(),due:addMonths(f,i*e),amount:String(s.a)})});
  PF.items.sort((a,b)=>(a.due||'').localeCompare(b.due||''));planForm();toast(`اتولّد ${i} قسط ✓`);
}
function planSave(){
  grabPF();const name=PF.name.trim();if(!name)return toast('اكتب الاسم');
  const items=PF.items.map(it=>({id:it.id||uid(),due:it.due,amount:parseNum(it.amount),txId:it.txId||null,...(it.noAuto?{noAuto:true}:{})})).filter(it=>it.txId||(it.due&&it.amount>0));
  if(!items.length)return toast('ضيف قسط واحد على الأقل');
  const cat=ensureCat((PF.cat||name).trim(),'exp');
  let p=PF.id?plan(PF.id):null;if(!p){p={id:uid()};S.plans.push(p)}
  Object.assign(p,{name,catId:cat.id,note:(PF.note||'').trim(),files:PF.files,items,acct:PF.acct||'',via:PF.via||'',auto:!!PF.auto});
  if(p.auto&&!p.autoFrom)p.autoFrom=NKM+'-01';if(!p.auto)delete p.autoFrom;
  save();autoPostFixed();closeSheet();instPlan=p.id;go('plan');toast('اتحفظ ✓');
}
function payStart(pid,iid){
  const p=plan(pid),it=p.items.find(x=>x.id===iid),dm=p.acct&&M(p.acct)?p.acct:defMethod();
  if(!dm)return toast('ضيف حساب الأول');
  const d=it.due&&it.due<=today()&&!isClosed(it.due)?it.due:today();
  PAY={pid,iid,amount:amtStr(it.amount),method:dm,via:p.via||'',date:d,note:'',files:[]};paySheet();
}
try{const _ps0=paySheet;paySheet=function(){NEXTF='pay';return _ps0.apply(this,arguments)}}catch(e){}
try{const _up0=unpay;unpay=async function(pid,iid){await _up0(pid,iid);const p=plan(pid),it=p&&p.items.find(x=>x.id===iid);if(it&&!it.txId&&p.auto){it.noAuto=true;save()}}}catch(e){}
function xInstPay(pid,iid,el){
  const p=plan(pid),it=p&&p.items.find(x=>x.id===iid);if(!it)return;
  const d=it.due&&it.due<=today()&&!isClosed(it.due)?it.due:today();
  if(isClosed(d)){el.checked=false;return toast('الشهر مقفول')}
  const method=p.acct&&M(p.acct)?p.acct:defMethod();if(!method){el.checked=false;return toast('ضيف حساب الأول')}
  const cat=C(p.catId)||ensureCat(p.name,'exp');
  const t={id:uid(),type:'exp',amount:+it.amount||0,cat:cat.id,method,via:p.via||'',date:d,note:`قسط ${fdate(it.due)}`,files:[],created:Date.now(),src:{k:'i',id:p.id,p:it.id}};
  S.txs.push(t);it.txId=t.id;save();render();toast(`اتدفع ${fmt(t.amount)} ✓`);
}
function xInstDue(k){const out=[],st=k+'-01';S.plans.forEach(p=>p.items.forEach(it=>{if(itTx(it)||!it.due)return;if(it.due.startsWith(k)||(k===NKM&&it.due<st))out.push({p,it})}));return out}
const xInstDueRow=({p,it})=>{const late=it.due<today();return `<div class="ckx"><input type="checkbox" onchange="xInstPay('${p.id}','${it.id}',this)"><div class="row grow" style="border:0" onclick="payStart('${p.id}','${it.id}')"><span class="ic" style="background:var(--soft)">🏦</span><div class="grow"><b>${esc(p.name)}</b><small class="${late?'neg':''}">${late?'متأخر':'غير مدفوع'} · ميعاده ${dmy(it.due)}${p.auto?' · 🔄 بيتخصم لوحده':''}</small></div><div class="amt">${num(+it.amount||0)}</div></div></div>`};
const xInstPaidRow=t=>{const p=plan(t.src.id),m=M(t.method);return `<div class="ckx"><input type="checkbox" checked onchange="this.checked=true;${p?`unpay('${p.id}','${t.src.p}')`:''}"><div class="row grow" style="border:0" onclick="editTx('${t.id}')"><span class="ic" style="background:var(--soft)">🏦</span><div class="grow"><b>${esc(p?p.name:C(t.cat)?.name||'—')}</b><small>مدفوع ${dmy(t.date)}${m?' · '+xMIc(m,1)+' '+esc(m.name):''}${t.via?' · '+xViaIc(t.via,1)+' '+viaTxt(t.via):''}</small></div><div class="amt exp">${num(t.amount)}</div></div></div>`};

/* ========== شاشة المصروفات ========== */
function vExps(){
  const k=ym(cur.y,cur.m),list=keyTx(k).filter(t=>t.type==='exp'),s=xSums(keyTx(k));
  const dl=dueList(k,'','exp'),linked=new Set(dl.filter(o=>o.s.st==='done').map(o=>o.s.t.id));
  const instT=list.filter(t=>t.src&&t.src.k==='i'),instU=xInstDue(k);
  const others=list.filter(t=>!linked.has(t.id)&&!(t.src&&t.src.k==='i')),ptx=pendTx('exp',k);
  XRC=new Set(S.buys.map(b=>b.txId));
  const fixSum=dl.reduce((a,o)=>a+(o.s.st==='done'?o.s.t.amount:o.s.st==='skip'?0:o.amt),0);
  const instSum=instT.reduce((a,t)=>a+t.amount,0)+instU.reduce((a,x)=>a+(+x.it.amount||0),0);
  const varSum=others.reduce((a,t)=>a+t.amount,0),pSum=ptx.reduce((a,t)=>a+t.amount,0),g=XE.g;
  let h=`<div class="phead"><h3>💸 ${esc(L('exp'))}</h3><button class="mini" onclick="scanReceipt()">📷 Receipt Scan</button><button class="mini pri" onclick="newTx('exp')">+ ${esc(L('expOne'))}</button></div>`+monthBar()
    +kpis([['اتصرف',fmt(s.exp),'exp'],['💳 كريديت',fmt(s.cr),'warn'],['💵 من فلوسك',fmt(s.expNC),'net']])
    +xTiles([['all','🗂️','الكل',list.length+ptx.length+instU.length],['fix','📌','ثابت',dl.length],['inst','🏦','أقساط',instT.length+instU.length],['var','🛒','متغير',others.length+ptx.length]],g,'XE.g')+sortBar();
  if(g==='all'||g==='fix'){const fl=sortList(dl.map(o=>({h:fixedRow(o),a:o.s.t?o.s.t.amount:o.amt,d:o.date,n:o.r.name})));
    h+=grp('ef','📌 ثابت',fl.length,fixSum,'neg',fl.map(x=>x.h).join('')+`<div style="padding:8px 12px"><button class="mini pri" onclick="catForm(null,'exp',{fixed:true})">+ مصروف ثابت</button></div>`)}
  if(g==='all'||g==='inst'){const il=sortList(instU.map(x=>({h:xInstDueRow(x),a:+x.it.amount||0,d:x.it.due,n:x.p.name})).concat(instT.map(t=>({h:xInstPaidRow(t),a:t.amount,d:t.date,n:(plan(t.src.id)||{}).name||''}))));
    h+=grp('ei','🏦 أقساط',il.length,instSum,'neg',il.map(x=>x.h).join('')+`<div style="padding:8px 12px"><button class="mini pri" onclick="planNew()">+ أقساط جديدة</button></div>`)}
  if(g==='all'||g==='var'){
    if(ptx.length)h+=grp('ep','⏳ غير مدفوع',ptx.length,pSum,'neg',ptx.map(txRow).join(''));
    const rows=sortList(others.map(t=>({t,a:t.amount,d:t.date+String(t.created||0).padStart(15,'0'),n:C(t.cat)?.name||''})),true);
    h+=grp('ev','🛒 متغير',rows.length,varSum,'neg',rows.length?`<div class="list">${rows.map(x=>xExpRow(x.t)).join('')}</div>`:'');
  }
  return h;
}
/* ========== شاشة التحصيلات ========== */
function vCol(){
  const key=ym(cur.y,cur.m),dm=dueList(key,'m','inc'),da=dueList(key,'a','inc');
  const linked=new Set(dm.concat(da).filter(o=>o.s.st==='done').map(o=>o.s.t.id));
  const others=keyTx(key).filter(t=>t.type==='inc'&&!linked.has(t.id)),ptx=pendTx('inc',key),it=[];
  const fo=(o,g)=>({g,w:o.s.st==='wait',h:fixedRow(o),a:o.s.t?o.s.t.amount:o.amt,d:o.s.t?o.s.t.date:o.date,n:o.r.name});
  dm.forEach(o=>it.push(fo(o,'fix')));da.forEach(o=>it.push(fo(o,'ann')));
  const tg=t=>{const c=C(t.cat);return c&&c.fixed?(isA(c)?'ann':'fix'):'var'};
  others.forEach(t=>it.push({g:tg(t),w:false,h:txRow(t),a:t.amount,d:t.date,n:C(t.cat)?.name||''}));
  ptx.forEach(t=>it.push({g:tg(t),w:true,h:txRow(t),a:t.amount,d:t.date,n:C(t.cat)?.name||''}));
  const got=sums(keyTx(key)).inc,rem=it.filter(x=>x.w).reduce((a,x)=>a+x.a,0),g=XI.g;
  const cnt=k=>it.filter(x=>k==='all'||x.g===k).length,sel=it.filter(x=>g==='all'||x.g===g),sm0=l=>l.reduce((a,x)=>a+x.a,0);
  let h=`<div class="phead"><h3>💰 ${esc(L('inc'))}</h3><button class="mini pri" onclick="newTx('inc')">+ تحصيل جديد</button></div>`+monthBar()
    +kpis([['محصّل',fmt(got),'inc'],['المتوقع',fmt(got+rem),'net'],['غير محصّل',fmt(rem),'exp']]);
  if(got+rem)h+=`<div class="prog"><i style="width:${Math.min(100,got/(got+rem)*100)}%"></i></div>`;
  h+=xTiles([['all','🗂️','الكل',cnt('all')],['fix','📌','ثابت',cnt('fix')],['ann','📄','سنوي',cnt('ann')],['var','💵','غير ثابت',cnt('var')]],g,'XI.g')+sortBar();
  const pl=sortList(sel.filter(x=>x.w)),dn=sortList(sel.filter(x=>!x.w),true);
  const add=g==='fix'?`<div style="padding:8px 12px"><button class="mini pri" onclick="catForm(null,'inc',{fixed:true})">+ تحصيل ثابت</button></div>`:g==='ann'?`<div style="padding:8px 12px"><button class="mini pri" onclick="catForm(null,'inc',{fixed:true,every:12})">+ تحصيل سنوي</button></div>`:'';
  h+=grp('cp','⏳ غير محصّل',pl.length,sm0(pl),'neg',pl.map(x=>x.h).join('')+add);
  h+=grp('cd','✅ محصّل',dn.length,sm0(dn),'pos',dn.map(x=>x.h).join(''));
  return h;
}
function topSheet(){
  const ci=catItems(keyTx(NKM),'exp'),tot=sums(keyTx(NKM)).exp;
  sheet(`<div class="phead"><h2>💸 ${esc(L('exp'))} · ${MONTHS[NM-1]}</h2><span class="badge late">${num(tot)}</span></div>
  ${ci.length?`<div class="list">${ci.map(c=>`<div class="row" ${c.id?`onclick="cur.y=NY;cur.m=NM;openStmt('cat','${c.id}')"`:''}><div class="grow"><b>${esc(c.label)}</b></div><div class="amt exp">${num(c.value)}</div></div>`).join('')}</div>`:'<div class="nempty"><div>💸</div><b>لا يوجد</b></div>'}
  ${repBtn('التقرير الشهري',"openRep('month',()=>RF.month=NKM)")}`);
}
try{const _vh0=vHome;vHome=function(){let h=_vh0();try{
  const s=xSums(keyTx(NKM));if(!(s.cr>0))return h;const hid=amtHidden(),A=v=>hid?mk():v;
  const blk=`<div class="xcr"><span>💳 منها كريديت<b>${A(num(s.cr))}</b></span><span>💵 من فلوسك<b>${A(num(s.expNC))}</b></span></div>`;
  const net=`<div class="hnet xnn"><span>${esc(L('net'))} من غير الكريديت</span><b class="${s.netNC<0?'hneg':''}">${hid?mk():(s.netNC<0?num(-s.netNC)+' ج.م · سالب':num(s.netNC)+' ج.م')}</b></div>`;
  const i=h.indexOf('<div class="hnet">');if(i>=0){const j=h.indexOf('</div></div>',i);if(j>0)h=h.slice(0,i)+blk+h.slice(i,j+6)+net+h.slice(j+6)}
}catch(e){}return h}}catch(e){}
function itRows(){
  const k=ITAB.k,G=IG[k],q=qn(ITAB.q),ex=k==='exp';
  const base=S.cats.filter(c=>c.kind===k&&(ITAB.off||c.active!==false)&&(!q||qn([c.name,c.amount||'',num(+c.amount||0),c.prevAmt||'',...(c.alias||[])].join(' ')).includes(q)));
  const gs=(ITAB.g==='all'?Object.keys(G):[ITAB.g]).map(g=>({g,l:base.filter(c=>catGrp(c)===g).sort((a,b)=>a.name.localeCompare(b.name,'ar'))})).filter(x=>x.l.length);
  if(!gs.length)return '<p class="empty">لا يوجد</p>';
  const yr=id=>{const l=S.txs.filter(t=>t.cat===id&&!t.pend&&t.date.startsWith(NY+'-'));return[l.length,l.reduce((a,t)=>a+t.amount,0)]};
  return gs.map(({g,l})=>{
    const fx=g!=='var';
    const rows=l.map(c=>{
      const sub=[fx?everyTxt(c.every):'',c.active===false?'⏸ موقوف':''].filter(Boolean).map(esc).join(' · ');
      if(fx){const pc=c.prevAmt&&c.incPct!=null?c.incPct:null;
        return `<tr class="clk" onclick="catForm('${c.id}')">${cT(esc(c.name),sub)}${cN(c.amount?num(+c.amount):'—',k)}${cN(c.prevAmt?num(c.prevAmt):'—','',c.amtAt?nm(dmy(c.amtAt)):'')}${ex?'':cN(pc!=null?(pc>=0?'▲ ':'▼ ')+Math.abs(pc)+'%':'—',pc!=null?(pc>=0?'inc':'exp'):'')}</tr>`}
      const[n,s]=yr(c.id);return `<tr class="clk" onclick="catForm('${c.id}')">${cT(esc(c.name),sub)}${cC(nm(n))}${cN(num(s),k)}</tr>`;
    });
    const head=fx?(ex?['البند','المبلغ|n','السابق|n']:['البند','المبلغ|n','السابق|n','الزيادة|n']):['البند',`عمليات ${NY}|c`,`إجمالي ${NY}|n`];
    return `<details class="grp xig" ${q?'open':''}><summary><span>${G[g][0]} ${esc(G[g][1])}</span><span class="badge soon">${l.length}</span></summary>${rtbl(head,rows)}</details>`;
  }).join('');
}
function vMore(){
  const B=[['items','📋',L('items')],['pmv','🏦',L('pm')],['inst','🏦',L('inst')],['loans','🤝','السلف'],['buy','🛒',L('buy')],['wallet','💳',L('wallet')],['annual','📆',L('contracts')],['cash','🏧',L('cash')],['months','🔒','قفل الشهور'],['contacts','📇',L('contacts')],['docs','📎',L('docs')],['pw','🔐','الباسوردات'],['settings','⚙️',L('settings')]];
  return `<h3>☰ ${esc(L('more'))}</h3><div class="rgrid">${B.map(([v,ic,l])=>`<button class="rbtn" onclick="${v==='pw'?'pwScreen()':(v==='settings'?"stab='';":'')+`go('${v}')`}"><span>${ic}</span>${esc(l)}</button>`).join('')}</div>`;
}

/* ========== الحسابات: لوجو + كريديت ========== */
function vPmv(){
  const ml=keyTx(NKM),trs=ml.filter(t=>t.type==='tr').sort(byDesc);
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏦 ${esc(L('pm'))}</h3><button class="mini pri" onclick="editMethod()">+ حساب</button></div>`;
  h+=`<div class="list">${S.methods.map(m=>{let i=0,o=0;ml.forEach(t=>{if(t.method!==m.id||t.pend)return;if(t.type==='inc')i+=t.amount;else if(t.type==='exp')o+=t.amount});
    return `<div class="row ${m.active?'':'off'}" style="cursor:default"><span class="pmlg">${xMIc(m)}</span><div class="grow"><b>${esc(m.name)}</b>${m.active?'':' <span class="badge rej">موقوف</span>'}${xIsCr(m.id)?' <span class="tag wait">💳 كريديت</span>':''}<small>${TYPES[m.type]||''}${m.bank?' · '+esc(m.bank):''}</small><small>${MONTHS[NM-1]}: قبضت <b class="pos">${num(i)}</b> · صرفت <b class="neg">${num(o)}</b></small></div><div class="acts"><button class="mini" onclick="editMethod('${m.id}')">✏️</button><button class="mini danger" onclick="delMethod('${m.id}')">🗑</button></div></div>`}).join('')}</div>`;
  if(trs.length)h+=`<h3>🔁 التحويلات · ${MONTHS[NM-1]}</h3><div class="list">${trs.map(t=>`<div class="row" onclick="editTx('${t.id}')"><span class="ic" style="background:#dbeafe">🔁</span><div class="grow"><b>من ${esc(M(t.method)?.name||'—')} إلى ${esc(M(t.to)?.name||'—')}</b><small>${fdate(t.date)}${t.via?' · '+viaTxt(t.via):''}</small></div><div class="amt" style="color:var(--tr)">${num(t.amount)}</div></div>`).join('')}</div>`;
  return h;
}
function xLgPick(t){const w=t.closest('.xlgp');w.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===t));$('#m-logo').value=t.dataset.k}
try{const _em0=editMethod;editMethod=function(id){
  if(TXBACK)KEEPF=true;try{_em0.apply(this,arguments)}finally{KEEPF=false}
  const b=document.querySelector('#sheet .sz > .btn');if(!b)return;
  if(!$('#m-cr')){const l=document.createElement('label');l.className='chk fxbox';l.innerHTML=`<input type="checkbox" id="m-cr" ${id&&xIsCr(id)?'checked':''}> 💳 كريديت (الفلوس مش بتاعتي)`;b.before(l)}
  const ks=Object.keys(XLG).filter(k=>!/-(card|credit|debit)$/.test(k));
  if(ks.length&&!$('#m-logo')){const m=id?M(id):null,cur=(m&&m.logo)||'',w=document.createElement('div');
    w.innerHTML=`<div class="fl">اللوجو</div><div class="xlgp"><button type="button" class="${cur?'':'on'}" data-k="" onclick="xLgPick(this)">تلقائي</button>${ks.map(k=>`<button type="button" class="${cur===k?'on':''}" data-k="${k}" onclick="xLgPick(this)"><img src="${XLG[k]}" alt=""></button>`).join('')}</div><input type="hidden" id="m-logo" value="${cur}">`;b.before(w)}
}}catch(e){}
try{const _sm0=saveMethod;saveMethod=function(id){
  const cr=$('#m-cr')?$('#m-cr').checked:null,lg=$('#m-logo')?$('#m-logo').value:null,before=new Set(S.methods.map(m=>m.id));
  _sm0(id);const m=id?M(id):S.methods.find(x=>!before.has(x.id));
  if(m&&(cr!=null||lg!=null)){if(cr!=null)m.credit=cr;if(lg!=null)m.logo=lg;save();render()}
}}catch(e){}

/* ========== الكروت البنكية: صورة الكارت (logos/fabmisr-credit.png ...) ========== */
function xCardImg(c){const m=M(c.acct),k=xMLogo(m)||xMLogo({name:c.name,type:'card'});if(!k)return '';return XLG[k+'-'+(c.kind==='credit'?'credit':'debit')]||XLG[k+'-card']||''}
function wCards(){
  const h=`<div class="etbar"><button class="mini pri" onclick="scanCard()">📷 صوّر</button><button class="mini" onclick="cardGal()">🖼️ من الصور</button><button class="mini" onclick="cardForm()">+ إضافة</button></div>`;
  if(!S.cards.length)return h+`<div class="nempty"><div>💳</div><b>لا يوجد كروت</b></div>`;
  return h+S.cards.map(c=>{const n=cardFiles(c).length,im=xCardImg(c),m=M(c.acct);
    const bg=im?`;background:linear-gradient(to top,rgba(0,0,0,.55),transparent 60%),url('${im}') center/cover`:'';
    return `<div class="ccard ${im?'xcimg':''}" data-wq="${esc(qn([c.name,c.last4,m?.name,NETS[c.net],c.kind==='credit'?'credit':'debit'].join(' ')))}" style="--cc:${c.color||'#1e3a8a'}${bg}" onclick="cardForm('${c.id}')"><div class="cc-t"><b>${esc(c.name)}</b><span>${c.kind==='credit'?'Credit':'Debit'}${n?' · 📷'+n:''}</span></div><div class="cc-n" dir="ltr">•••• •••• •••• ${esc(c.last4)}</div><div class="cc-b"><span>${m&&!im?xMIc(m,1)+' ':''}${esc(m?.name||'—')}</span><b dir="ltr">${NETS[c.net]||''}</b></div></div>`}).join('');
}

/* ========== السلف ========== */
const xLoans=()=>S.txs.filter(t=>t.type==='exp'&&t.loan&&!t.pend);
const xLoanPaid=t=>S.txs.filter(x=>x.loanOf===t.id&&!x.pend).reduce((a,x)=>a+x.amount,0);
function xNewLoan(){newTx('exp');if(F&&F.type==='exp'){F.isLoan=true;txForm()}}
function vLoans(){
  const td=today(),all=xLoans().map(t=>{const p=xLoanPaid(t);return{t,p,r:r2(t.amount-p)}});
  const op=all.filter(x=>x.r>0.001).sort((a,b)=>(a.t.loan.due||'9999').localeCompare(b.t.loan.due||'9999')),cl=all.filter(x=>x.r<=0.001).sort((a,b)=>b.t.date.localeCompare(a.t.date));
  const late=op.filter(x=>x.t.loan.due&&x.t.loan.due<td);
  const row=x=>{const d=x.t.loan.due,lt=d&&d<td&&x.r>0;return `<div class="row" onclick="${x.r>0?`xLoanPay('${x.t.id}')`:`editTx('${x.t.id}')`}"><span class="ic" style="background:var(--soft)">🤝</span><div class="grow"><b>${esc(C(x.t.cat)?.name||'—')}</b><small class="${lt?'neg':''}">اتصرفت ${dmy(x.t.date)} · ${d?(lt?'متأخرة من '+dmy(d):'السداد '+dmy(d)):'من غير ميعاد'}${x.p?' · اتسدد '+num(x.p):''}</small></div><div class="amt ${x.r>0?'exp':'inc'}">${num(x.r>0?x.r:x.t.amount)}</div></div>`};
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🤝 السلف</h3><button class="mini pri" onclick="xNewLoan()">+ سلفة</button></div>`
    +kpis([['ليك عند الناس',fmt(op.reduce((a,x)=>a+x.r,0)),'warn'],['اتسدد',fmt(all.reduce((a,x)=>a+x.p,0)),'inc'],['متأخر',late.length,late.length?'exp':'net']])
    +grp('lo','⏳ لسه ما اتسددتش',op.length,op.reduce((a,x)=>a+x.r,0),'neg',op.length?`<div class="list">${op.map(row).join('')}</div>`:'')
    +grp('lc','✅ اتسددت',cl.length,cl.reduce((a,x)=>a+x.t.amount,0),'pos',cl.length?`<div class="list">${cl.map(row).join('')}</div>`:'');
}
function xLoanPay(id){
  const t=S.txs.find(x=>x.id===id);if(!t)return;const rem=r2(t.amount-xLoanPaid(t));
  sheet(`<h2>🤝 سداد: ${esc(C(t.cat)?.name||'')}</h2><p class="muted">اتصرفت ${fdate(t.date)} · ${fmt(t.amount)}${t.loan.due?' · الميعاد '+fdate(t.loan.due):''}</p>
  <input id="lp-a" class="amt-in" type="text" inputmode="decimal" value="${amtStr(rem)}">
  <div class="two"><label>استلمت في حساب<select id="lp-m">${opt(S.methods.filter(m=>m.active),t.method&&!xIsCr(t.method)?t.method:defMethod())}</select></label><label>الطريقة<select id="lp-v">${viaOpts(t.via)}</select></label></div>
  <label>تاريخ السداد<input id="lp-d" type="date" value="${today()}"></label>
  <button class="btn" onclick="xLoanPaySave('${id}')">✅ اتسددت</button>
  <button class="btn ghost" onclick="editTx('${id}')">✏️ تعديل السلفة أو ميعادها</button>`);
}
function xLoanPaySave(id){
  const t=S.txs.find(x=>x.id===id);if(!t)return;const a=parseNum($('#lp-a').value),d=$('#lp-d').value;
  if(!(a>0))return toast('اكتب المبلغ');if(!d)return toast('اختار التاريخ');if(isClosed(d))return toast(`شهر ${mName(d.slice(0,7))} مقفول`);
  const n=C(t.cat)?.name||'',c=ensureCat(/^سلف/.test(n)?'سداد '+n:'سداد سلفة '+n,'inc');c.active=true;
  S.txs.push({id:uid(),type:'inc',amount:a,cat:c.id,method:$('#lp-m').value,via:$('#lp-v').value,date:d,note:'🤝 سداد سلفة',files:[],created:Date.now(),loanOf:t.id});
  save();closeSheet();render();toast(`✅ اتسدد ${fmt(a)}`);
}
try{const _al0=alerts;alerts=function(){const out=_al0(),td=today();
  xLoans().forEach(t=>{const d=t.loan.due;if(!d)return;const r=r2(t.amount-xLoanPaid(t));if(r<=0)return;const left=daysBetween(d,td);if(left>3)return;const n=C(t.cat)?.name||'';
    out.push({id:`l-${t.id}-${d}-${r}`,ic:'🤝',lv:left<0?'late':'soon',title:left<0?`سلفة ${n} متأخرة ${-left} يوم`:left===0?`النهارده ميعاد سداد ${n}`:`سداد ${n} · باقي ${left} يوم`,body:`${fdate(d)} · ${fmt(r)}`,go:`go('loans')`})});
  return out}}catch(e){}
try{const _rZ=render;render=function(){
  if(view==='loans'){const vh=vHome;vHome=vLoans;view='home';try{_rZ.apply(this,arguments)}finally{view='loans';vHome=vh}$('nav').innerHTML=navHTML()}
  else _rZ.apply(this,arguments);
  try{xStSave()}catch(e){}
}}catch(e){}

/* ========== التقارير ========== */
const XEXPG={fix:['📌 مصروف ثابت','مصروف ثابت','#dc2626'],inst:['🏦 أقساط','أقساط','#7c3aed'],loan:['🤝 سلف','سلف','#0891b2'],var:['🛒 مصروف متغير','مصروف متغير','#ea580c']};
const xExpGrp=t=>t.src&&t.src.k==='i'?'inst':t.loan?'loan':(C(t.cat)&&C(t.cat).fixed?'fix':'var');
const xKp=s=>rkp([[L('inc'),s.inc,'inc'],[L('exp'),s.exp,'exp'],[L('net'),s.net,s.net<0?'exp':'inc']].concat(s.cr?[['💳 كريديت',s.cr,'warn'],[L('net')+' من غير الكريديت',s.netNC,s.netNC<0?'exp':'inc']]:[]));
const xKp3=(s,n)=>RF.type==='inc'?rkp([[L('inc'),s.inc,'inc'],['عدد العمليات',String(n),'net']]):RF.type==='exp'?rkp([[L('exp'),s.exp,'exp']].concat(s.cr?[['💳 كريديت',s.cr,'warn'],['💵 من فلوسك',s.expNC,'net']]:[['عدد العمليات',String(n),'net']])):xKp(s);
function xNetTbl(s){
  let foot=`<tr><td class="t">${esc(L('net'))}</td><td class="n"><b class="${s.net<0?'exp':'inc'}">${nm(sgn(s.net))}</b></td></tr>`;
  if(s.cr)foot+=`<tr><td class="t">💳 منها كريديت</td><td class="n">${nm(num(s.cr))}</td></tr><tr><td class="t">${esc(L('net'))} من غير الكريديت</td><td class="n"><b class="${s.netNC<0?'exp':'inc'}">${nm(sgn(s.netNC))}</b></td></tr>`;
  return rtbl(['البيان','المبلغ|n'],[`<tr>${cT('إجمالي '+esc(L('inc')))}${cN(num(s.inc),'inc')}</tr>`,`<tr>${cT('إجمالي '+esc(L('exp')))}${cN('-'+num(s.exp),'exp')}</tr>`],foot);
}
function catTable(list,kind,click,nopie){
  const g={};list.filter(t=>t.type===kind&&!t.pend).forEach(t=>{g[t.cat]=g[t.cat]||{n:0,v:0};g[t.cat].n++;g[t.cat].v+=t.amount});
  const e=Object.entries(g).sort((a,b)=>b[1].v-a[1].v),tot=e.reduce((a,x)=>a+x[1].v,0),n=e.reduce((a,x)=>a+x[1].n,0),ex=kind==='exp';
  if(!e.length)return NONE;
  const pie=!nopie&&e.length>1?donut(e.map(([id,x])=>({label:C(id)?.name||'—',value:x.v})),kind==='inc'?L('inc'):L('exp')):'';
  return pie+rtbl(ex?['البند','العمليات|c','المبلغ|n']:['البند','العمليات|c','المبلغ|n','النسبة|n'],e.map(([id,x])=>`<tr class="${click?'clk':''}" ${click?`onclick="${click(id)}"`:''}>${cT(esc(C(id)?.name||'—'))}${cC(nm(x.n))}${cN(num(x.v),kind)}${ex?'':cN(Math.round(x.v/tot*100)+'%')}</tr>`),
    e.length>1?(ex?ft('الإجمالي',1,fC(n),fN(num(tot))):ft('الإجمالي',1,fC(n),fN(num(tot)),fN('100%'))):'');
}
function donut(items,label,valText){
  items=items.filter(x=>x.value>0);
  if(!items.some(x=>x.color))items.sort((a,b)=>b.value-a.value);
  if(items.length>7){const rest=items.slice(6).reduce((a,x)=>a+x.value,0);items=items.slice(0,6).concat({label:'أخرى',value:rest,color:'#94a3b8'})}
  const tot=items.reduce((a,x)=>a+x.value,0);if(!(tot>0))return '';
  items.forEach((x,i)=>{if(!x.color)x.color=DPAL[i%DPAL.length]});
  const cx=90,cy=90,R=82,r=54,P=(a,rad)=>(cx+rad*Math.cos(a)).toFixed(2)+' '+(cy+rad*Math.sin(a)).toFixed(2);
  let a0=-Math.PI/2,g='';
  items.forEach(x=>{const f=x.value/tot;if(f>.9999){g+=`<circle cx="${cx}" cy="${cy}" r="${(R+r)/2}" fill="none" stroke="${x.color}" stroke-width="${R-r}"/>`;return}
    const a1=a0+f*2*Math.PI,lg=f>.5?1:0;g+=`<path d="M${P(a0,R)}A${R} ${R} 0 ${lg} 1 ${P(a1,R)}L${P(a1,r)}A${r} ${r} 0 ${lg} 0 ${P(a0,r)}Z" fill="${x.color}" stroke="#fff" stroke-width="2"/>`;a0=a1});
  const noPct=label===L('exp')||label==='المسحوب';
  return `<div class="rc xrc"><svg viewBox="0 0 180 180">${g}<text x="90" y="92" text-anchor="middle" font-size="22" font-weight="800" fill="#0f172a" style="direction:ltr">${esc(valText!=null?valText:short(tot))}</text><text x="90" y="112" text-anchor="middle" font-size="11" fill="#64748b">${esc(label||'الإجمالي')}</text></svg>
  <details class="xlg"><summary>📋 البنود (${items.length}) ▾</summary><div class="lg">${items.map(x=>`<div class="lr"><i style="background:${x.color}"></i><span><bdi>${esc(x.label)}</bdi></span><em>${nm(num(x.value))}</em>${noPct?'':`<b>${nm(Math.round(x.value/tot*100)+'%')}</b>`}</div>`).join('')}</div></details></div>`;
}
function rvClean(){const d=$('#rvdoc').cloneNode(true);d.querySelectorAll('.noprint').forEach(e=>e.remove());d.querySelectorAll('details').forEach(e=>e.setAttribute('open',''));return d.innerHTML}
function bStmt(){
  const{from,to,rows}=stmtRows(),s=xSums(rows),cl=id=>dS(from,to,id);
  let b=xKp3(s,rows.length);
  if(RF.type!=='exp')b+=rsec('💰 '+esc(L('inc')),num(s.inc))+grpBlock(rows,'inc',INCG,incGrp,cl);
  if(RF.type!=='inc')b+=rsec('💸 '+esc(L('exp')),num(s.exp))+grpBlock(rows,'exp',XEXPG,xExpGrp,cl);
  if(RF.type==='all')b+=rsec('🧮 '+esc(L('net')))+xNetTbl(s);
  const g={};rows.forEach(t=>{g[t.cat]=g[t.cat]||{n:0,v:0,type:t.type};g[t.cat].n++;g[t.cat].v+=t.amount});
  return{title:'كشف حساب حسب البند',sub:stmtSub(from,to),body:b,csv:{head:['البند','النوع','عدد العمليات','الإجمالي'],rows:Object.entries(g).map(([id,x])=>[C(id)?.name||'',x.type==='exp'?L('expOne'):L('incOne'),x.n,x.v])}};
}
function bMonth(){
  const k=RF.month,list=keyTx(k),s=xSums(list),[f,t]=mRange(k),cl=cashOf(k).sort((a,c)=>a.date.localeCompare(c.date)),ct=cl.reduce((a,c)=>a+c.amount,0);
  let b=xKp(s)+ioPie(s);
  b+=rsec('💰 '+esc(L('inc')),num(s.inc))+grpBlock(list,'inc',INCG,incGrp,id=>dS(f,t,id));
  b+=rsec('💸 '+esc(L('exp')),num(s.exp))+grpBlock(list,'exp',XEXPG,xExpGrp,id=>dS(f,t,id));
  b+=rsec('🧮 الناتج')+xNetTbl(s);
  if(pmStats(list).some(x=>x.i||x.o))b+=rsec('🏦 '+esc(L('pm')))+pmTable(list,f,t);
  if(cl.length)b+=rsec('🏧 '+esc(L('cash')),num(ct))+rtbl(['التاريخ|c','الحساب','المبلغ|n'],cl.map(c=>`<tr>${cD(c.date)}${cT(esc(M(c.method)?.name||'—'),esc(c.note||''))}${cN(num(c.amount))}</tr>`),cl.length>1?ft('الإجمالي',2,fN(num(ct))):'');
  return{title:'تقرير شهري',sub:mName(k)+(S.closed[k]?' · 🔒 مقفول':''),body:b};
}
function bYear(){
  const y=RF.year,ks=MONTHS.map((n,i)=>ym(y,i+1)),data=ks.map(k=>sums(keyTx(k))),yl=S.txs.filter(t=>!t.pend&&t.date.startsWith(y+'-')),s=xSums(yl),f=y+'-01-01',t2=y+'-12-31';
  let b=xKp(s)+ioPie(s);
  const rows=data.map((d,i)=>[d,i]).filter(([d])=>d.inc||d.exp).map(([d,i])=>`<tr class="clk" onclick="dMonth('${ks[i]}')">${cT(MONTHS[i])}${cN(num(d.inc),'inc')}${cN(num(d.exp),'exp')}${cN(sgn(d.net),d.net<0?'exp':'inc')}</tr>`);
  b+=rsec('📅 شهر بشهر')+(rows.length?rtbl(['الشهر',esc(L('inc'))+'|n',esc(L('exp'))+'|n',esc(L('net'))+'|n'],rows,rows.length>1?ft('الإجمالي',1,fN(num(s.inc)),fN(num(s.exp)),fN(sgn(s.net))):''):NONE);
  b+=rsec('💰 '+esc(L('inc')),num(s.inc))+grpBlock(yl,'inc',INCG,incGrp,id=>dS(f,t2,id));
  b+=rsec('💸 '+esc(L('exp')),num(s.exp))+grpBlock(yl,'exp',XEXPG,xExpGrp,id=>dS(f,t2,id));
  b+=rsec('🧮 '+esc(L('net')))+xNetTbl(s);
  return{title:'تقرير سنوي',sub:'سنة '+y,body:b};
}
REPS.stmt.b=bStmt;REPS.month.b=bMonth;REPS.year.b=bYear;

/* ========== يرجع على آخر حاجة كنت عليها ========== */
const XSK='centric-state';var XRV=false,XRY=0,XSY=0,xsT=null;
function xStSave(){
  try{const rv=$('#rv').classList.contains('on')||XRV;
    localStorage.setItem(XSK,JSON.stringify({v:view,cy:cur.y,cm:cur.m,st:stab,it:itab,wt:wtab,ct:ctab,dt:dtab,ip:instPlan,bs:BSTORE,xe:XE.g,xi:XI.g,
      sy:XRV?XSY:scrollY,rt:rv?rtab:'',rf:rv?RF:null,ry:XRV?XRY:(($('#rvbody')||{}).scrollTop||0),t:Date.now()}))}catch(e){}
}
function xRestore(){
  let x=null;try{x=JSON.parse(localStorage.getItem(XSK)||'null')}catch(e){}
  if(!x||Date.now()-x.t>2*3600e3)return render();
  if(x.cy){cur.y=x.cy;cur.m=x.cm}
  stab=x.st||'';if(x.it)itab=x.it;if(x.wt)wtab=x.wt;if(x.ct)ctab=x.ct;if(x.dt)dtab=x.dt;instPlan=x.ip||instPlan;BSTORE=x.bs||'';
  if(x.xe)XE.g=x.xe;if(x.xi)XI.g=x.xi;
  const ok=['home','col','annual','exps','items','reports','settings','more','inst','plan','docs','pmv','months','cash','wallet','contacts','buy','loans'];
  if(ok.includes(x.v)&&!(x.v==='plan'&&!plan(x.ip)))view=x.v;
  rtab='';render();setTimeout(()=>scrollTo(0,x.sy||0),80);
  if(x.rt&&REPS[x.rt]){
    rtab=x.rt;RF={...RFDEF,...(x.rf||{})};
    if($('#lock').classList.contains('on')){XRV=true;XRY=x.ry||0;XSY=x.sy||0}
    else{openRV(true);setTimeout(()=>{const b=$('#rvbody');if(b)b.scrollTop=x.ry||0},80)}
  }
}
try{const _orv=openRV;openRV=function(){const r=_orv.apply(this,arguments);xStSave();return r}}catch(e){}
try{const _crv=closeRV;closeRV=function(){const r=_crv.apply(this,arguments);xStSave();return r}}catch(e){}
try{const _sl9=showLock;showLock=function(){
  if(LK.pin&&!$('#lock').classList.contains('on')){XRV=$('#rv').classList.contains('on')&&!!rtab;XRY=($('#rvbody')||{}).scrollTop||0;XSY=scrollY;xStSave()}
  return _sl9.apply(this,arguments)}}catch(e){}
try{const _ul9=unlock;unlock=function(){
  const r=_ul9.apply(this,arguments),rv=XRV,ry=XRY,sy=XSY;XRV=false;
  setTimeout(()=>{scrollTo(0,sy);if(rv&&REPS[rtab]){openRV(true);const b=$('#rvbody');if(b)b.scrollTop=ry}},80);return r}}catch(e){}
try{Object.assign(FORMS,{
  tx:{g:()=>{grab();return F},o:d=>{F=d;txForm()}},
  cat:{g:()=>{grabCF();return CF},o:d=>{CF=d;catSheet()}},
  pay:{g:()=>{grabPay();return PAY},o:d=>{PAY=d;paySheet()}},
  plan:{g:()=>{grabPF();return PF},o:d=>{PF=d;planForm()}}
})}catch(e){}

/* ========== نسخة احتياطية تلقائية ========== */
const XBK={db:null,
  open(){return this.db||(this.db=new Promise((res,rej)=>{const r=indexedDB.open('centric-bk',1);r.onupgradeneeded=()=>r.result.createObjectStore('snaps',{keyPath:'d'});r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)}))},
  async run(mode,fn){const db=await this.open();return new Promise((res,rej)=>{const t=db.transaction('snaps',mode);const q=fn(t.objectStore('snaps'));t.oncomplete=()=>res(q?q.result:undefined);t.onerror=()=>rej(t.error)})}
};
let xSnapAt=0,xDrT=0;
async function xAutoSnap(){
  if(DEMO||!S||!S.txs.length||Date.now()-xSnapAt<10*60000)return;xSnapAt=Date.now();
  try{
    await XBK.run('readwrite',s=>s.put({d:today(),at:Date.now(),n:S.txs.length,data:JSON.stringify(S)}));
    const ks=(await XBK.run('readonly',s=>s.getAllKeys())).sort();
    for(const k of ks.slice(0,Math.max(0,ks.length-7)))await XBK.run('readwrite',s=>s.delete(k));
  }catch(e){}
}
function xDriveAuto(){
  if(DEMO||!GD.linked||GD.auto===false||!GD.cid||Date.now()-xDrT<5*60000)return;
  if(strHash(JSON.stringify(S))===GD.hash)return;xDrT=Date.now();driveUpload(false).catch(()=>{});
}
async function xBkList(){
  const el=$('#xbk');if(!el)return;
  try{const all=(await XBK.run('readonly',s=>s.getAll())).sort((a,b)=>b.d.localeCompare(a.d));
    el.innerHTML=all.length?`<div class="list">${all.map(x=>`<div class="row" onclick="xBkRestore('${x.d}')"><span class="ic" style="background:var(--soft)">🕒</span><div class="grow"><b>${fdate(x.d)}</b><small>${new Date(x.at).toLocaleTimeString('ar-EG',{hour:'2-digit',minute:'2-digit'})} · ${x.n} عملية</small></div><span class="mini">⬆️ استرجاع</span></div>`).join('')}</div>`:'<p class="empty">لسه مفيش</p>';
  }catch(e){el.innerHTML='<p class="empty">مش متاح على الجهاز ده</p>'}
}
async function xBkRestore(d){const x=await XBK.run('readonly',s=>s.get(d));if(!x)return;applyBackup(JSON.stringify({data:JSON.parse(x.data),files:[],exported:new Date(x.at).toISOString()}))}
try{const _spd=spData;spData=function(){setTimeout(xBkList,0);return _spd()+`<h3>🕒 نسخ تلقائية على الموبايل</h3><p class="muted">البرنامج بياخد نسخة لوحده كل يوم، وبيحتفظ بآخر 7 أيام. لو بيانات الموبايل نفسها اتمسحت، النسخ دي هتتمسح معاها، فاربط Google Drive كمان.</p><div id="xbk"><p class="muted">⏳</p></div>`}}catch(e){}

/* ========== تشغيل ========== */
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'){xStSave();xAutoSnap();xDriveAuto()}});
addEventListener('pagehide',()=>xStSave());
addEventListener('scroll',()=>{clearTimeout(xsT);xsT=setTimeout(xStSave,400)},{passive:true});
(()=>{const rb=$('#rvbody');if(rb)rb.addEventListener('scroll',()=>{clearTimeout(xsT);xsT=setTimeout(xStSave,400)},{passive:true})})();
autoPostFixed();
xRestore();
setTimeout(()=>{if(!$('#lock').classList.contains('on')&&!$('#sheet').classList.contains('open')&&draftGet())draftOpen(true)},600);
setTimeout(xDedupeLater,1500);
setTimeout(()=>{xSnapAt=0;xAutoSnap()},4000);
/* ========== الأقساط: السداد منك انت، وتاريخ السداد بيبدأ بميعاد القسط ========== */
function xAutoPlans(){return 0}
function payStart(pid,iid){
  const p=plan(pid),it=p.items.find(x=>x.id===iid),dm=p.acct&&M(p.acct)?p.acct:defMethod();
  if(!dm)return toast('ضيف حساب الأول');
  const d=it.due&&!isClosed(it.due)?it.due:today();
  PAY={pid,iid,amount:amtStr(it.amount),method:dm,via:p.via||'',date:d,note:'',files:[]};paySheet();
}
function xInstPay(pid,iid,el){el.checked=false;payStart(pid,iid)}
try{const _ps1=paySheet;paySheet=function(){const r=_ps1.apply(this,arguments);try{
  const p=plan(PAY.pid),it=p&&p.items.find(x=>x.id===PAY.iid),m=document.querySelector('#sheet .sz p.muted');
  if(m&&it)m.textContent='📅 ميعاد القسط: '+fdate(it.due);
  const d=$('#y-d');if(d){const l=d.closest('label');if(l&&l.firstChild&&l.firstChild.nodeType===3)l.firstChild.nodeValue='تاريخ السداد'}
}catch(e){}return r}}catch(e){}
(()=>{const s=document.createElement('style');s.textContent='label:has(#q7){display:none!important}';document.head.appendChild(s)})();
/* ========== زرار ➕ فوق في النص جنب Centric ========== */
(()=>{const s=document.createElement('style');s.textContent=`
nav .fab{display:none!important}
#view{padding-bottom:16px!important}
#xfab{position:absolute!important;left:50%!important;top:50%!important;transform:translate(-50%,-50%)!important;width:46px!important;height:46px!important;min-width:46px;margin:0!important;padding:0!important;border-radius:50%!important;border:1px solid rgba(255,255,255,.28)!important;background:linear-gradient(135deg,color-mix(in srgb,var(--p) 85%,#fff),color-mix(in srgb,var(--p) 78%,#000))!important;color:#fff!important;font-size:28px!important;line-height:1!important;display:flex!important;align-items:center;justify-content:center;box-shadow:0 6px 18px color-mix(in srgb,var(--p) 40%,transparent),inset 0 1px 0 rgba(255,255,255,.3)!important;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);cursor:pointer;z-index:5}
#xfab:active{transform:translate(-50%,-50%) scale(.92)!important}
details.xgr>summary{display:flex;align-items:center;gap:10px;list-style:none;cursor:pointer;padding:10px 12px}
details.xgr>summary::-webkit-details-marker{display:none}
details.xgr>summary .xcnt{font-size:11px;font-weight:800;background:var(--p);color:#fff;border-radius:20px;padding:1px 8px;margin-inline-start:6px}
details.xgr[open]>summary{border-bottom:1px dashed rgba(148,163,184,.35)}
details.xgr .xl{display:flex;align-items:center;gap:8px;padding:9px 14px;cursor:pointer;font-size:13px}
details.xgr .xl+.xl{border-top:1px solid rgba(148,163,184,.15)}
details.xgr .xl .grow{min-width:0}
`;document.head.appendChild(s)})();
function xTopFab(){
  if($('#xfab'))return;const a=$('#appn'),bell=$('#bell');if(!a)return;
  let host=a.closest('header');if(!host){host=a;while(host&&bell&&!host.contains(bell))host=host.parentElement}if(!host)host=a.parentElement;
  if(getComputedStyle(host).position==='static')host.style.position='relative';
  const b=document.createElement('button');b.id='xfab';b.className='fab xfab';b.type='button';b.setAttribute('aria-label','+');b.textContent='+';b.onclick=xFabOpen;
  host.appendChild(b);
}
function xFabOpen(){
  fabMenu();const m=$('#fabm'),b=$('#xfab');
  if(m&&b){const r=b.getBoundingClientRect();m.style.top=(r.bottom+10)+'px';m.style.bottom='auto';m.style.animation='none'}
}

/* ========== البند المتكرر في نفس الشهر: سطر واحد بالتوتال، ولما تدوس عليه تظهر التفاصيل ========== */
function xGroup(txs,kind){
  const g={};txs.forEach(t=>{(g[t.cat]=g[t.cat]||[]).push(t)});
  return Object.entries(g).map(([id,ts])=>{
    ts.sort(byDesc);const a=ts.reduce((s,t)=>s+t.amount,0),d=ts[0].date+String(ts[0].created||0).padStart(15,'0'),n=C(id)?.name||'';
    if(ts.length===1)return{h:kind==='exp'?xExpRow(ts[0]):txRow(ts[0]),a,d,n};
    const c=C(id),inc=kind==='inc';
    const lines=ts.map(t=>{const m=M(t.method),r=XRC.has(t.id);
      const det=[m?xMIc(m,1)+' '+esc(m.name)+(xIsCr(t.method)?' 💳':''):'',t.via?xViaIc(t.via,1)+' '+esc(viaTxt(t.via)):'',t.ipay&&t.ipay.v?'← <bdi>'+esc(t.ipay.v)+'</bdi>':'',t.note&&!/^🧾/.test(t.note)?esc(t.note):''].filter(Boolean).join(' · ');
      return `<div class="xl" onclick="editTx('${t.id}')"><span>${r?'🧾':''}${dmy(t.date)}</span><div class="grow"><small>${det}</small></div>${(t.files||[]).length&&!r?'📎':''}<b class="${inc?'pos':'neg'}">${num(t.amount)}</b></div>`}).join('');
    const h=`<details class="xr xgr"><summary><span class="ic" style="background:var(--soft)">${c&&c.fixed?'📌':inc?'💵':'🛒'}</span><div class="grow"><b>${esc(n||'—')}<span class="xcnt">${ts.length}</span></b><small>${ts.length} عمليات · آخر مرة ${dmy(ts[0].date)}</small></div><div class="amt ${inc?'inc':'exp'}">${num(a)}</div></summary><div class="xb">${lines}</div></details>`;
    return{h,a,d,n};
  });
}
function vExps(){
  const k=ym(cur.y,cur.m),list=keyTx(k).filter(t=>t.type==='exp'),s=xSums(keyTx(k));
  const dl=dueList(k,'','exp'),linked=new Set(dl.filter(o=>o.s.st==='done').map(o=>o.s.t.id));
  const instT=list.filter(t=>t.src&&t.src.k==='i'),instU=xInstDue(k);
  const others=list.filter(t=>!linked.has(t.id)&&!(t.src&&t.src.k==='i')),ptx=pendTx('exp',k);
  XRC=new Set(S.buys.map(b=>b.txId));
  const fixSum=dl.reduce((a,o)=>a+(o.s.st==='done'?o.s.t.amount:o.s.st==='skip'?0:o.amt),0);
  const instSum=instT.reduce((a,t)=>a+t.amount,0)+instU.reduce((a,x)=>a+(+x.it.amount||0),0);
  const varSum=others.reduce((a,t)=>a+t.amount,0),pSum=ptx.reduce((a,t)=>a+t.amount,0),g=XE.g;
  let h=`<div class="phead"><h3>💸 ${esc(L('exp'))}</h3><button class="mini" onclick="scanReceipt()">📷 Receipt Scan</button><button class="mini pri" onclick="newTx('exp')">+ ${esc(L('expOne'))}</button></div>`+monthBar()
    +kpis([['اتصرف',fmt(s.exp),'exp'],['💳 كريديت',fmt(s.cr),'warn'],['💵 من فلوسك',fmt(s.expNC),'net']])
    +xTiles([['all','🗂️','الكل',list.length+ptx.length+instU.length],['fix','📌','ثابت',dl.length],['inst','🏦','أقساط',instT.length+instU.length],['var','🛒','متغير',others.length+ptx.length]],g,'XE.g')+sortBar();
  if(g==='all'||g==='fix'){const fl=sortList(dl.map(o=>({h:fixedRow(o),a:o.s.t?o.s.t.amount:o.amt,d:o.date,n:o.r.name})));
    h+=grp('ef','📌 ثابت',fl.length,fixSum,'neg',fl.map(x=>x.h).join('')+`<div style="padding:8px 12px"><button class="mini pri" onclick="catForm(null,'exp',{fixed:true})">+ مصروف ثابت</button></div>`)}
  if(g==='all'||g==='inst'){const il=sortList(instU.map(x=>({h:xInstDueRow(x),a:+x.it.amount||0,d:x.it.due,n:x.p.name})).concat(instT.map(t=>({h:xInstPaidRow(t),a:t.amount,d:t.date,n:(plan(t.src.id)||{}).name||''}))));
    h+=grp('ei','🏦 أقساط',il.length,instSum,'neg',il.map(x=>x.h).join('')+`<div style="padding:8px 12px"><button class="mini pri" onclick="planNew()">+ أقساط جديدة</button></div>`)}
  if(g==='all'||g==='var'){
    if(ptx.length)h+=grp('ep','⏳ غير مدفوع',ptx.length,pSum,'neg',ptx.map(txRow).join(''));
    const rows=sortList(xGroup(others,'exp'),true);
    h+=grp('ev','🛒 متغير',others.length,varSum,'neg',rows.length?`<div class="list">${rows.map(x=>x.h).join('')}</div>`:'');
  }
  return h;
}
function vCol(){
  const key=ym(cur.y,cur.m),dm=dueList(key,'m','inc'),da=dueList(key,'a','inc');
  const linked=new Set(dm.concat(da).filter(o=>o.s.st==='done').map(o=>o.s.t.id));
  const others=keyTx(key).filter(t=>t.type==='inc'&&!linked.has(t.id)),ptx=pendTx('inc',key),it=[];
  XRC=new Set(S.buys.map(b=>b.txId));
  const fo=(o,g)=>({g,w:o.s.st==='wait',h:fixedRow(o),a:o.s.t?o.s.t.amount:o.amt,d:o.s.t?o.s.t.date:o.date,n:o.r.name});
  dm.forEach(o=>it.push(fo(o,'fix')));da.forEach(o=>it.push(fo(o,'ann')));
  const tg=t=>{const c=C(t.cat);return c&&c.fixed?(isA(c)?'ann':'fix'):'var'};
  others.filter(t=>tg(t)!=='var').forEach(t=>it.push({g:tg(t),w:false,h:txRow(t),a:t.amount,d:t.date,n:C(t.cat)?.name||''}));
  xGroup(others.filter(t=>tg(t)==='var'),'inc').forEach(x=>it.push({g:'var',w:false,...x}));
  ptx.forEach(t=>it.push({g:tg(t),w:true,h:txRow(t),a:t.amount,d:t.date,n:C(t.cat)?.name||''}));
  const got=sums(keyTx(key)).inc,rem=it.filter(x=>x.w).reduce((a,x)=>a+x.a,0),g=XI.g;
  const cnt=k=>it.filter(x=>k==='all'||x.g===k).length,sel=it.filter(x=>g==='all'||x.g===g),sm0=l=>l.reduce((a,x)=>a+x.a,0);
  let h=`<div class="phead"><h3>💰 ${esc(L('inc'))}</h3><button class="mini pri" onclick="newTx('inc')">+ تحصيل جديد</button></div>`+monthBar()
    +kpis([['محصّل',fmt(got),'inc'],['المتوقع',fmt(got+rem),'net'],['غير محصّل',fmt(rem),'exp']]);
  if(got+rem)h+=`<div class="prog"><i style="width:${Math.min(100,got/(got+rem)*100)}%"></i></div>`;
  h+=xTiles([['all','🗂️','الكل',cnt('all')],['fix','📌','ثابت',cnt('fix')],['ann','📄','سنوي',cnt('ann')],['var','💵','غير ثابت',cnt('var')]],g,'XI.g')+sortBar();
  const pl=sortList(sel.filter(x=>x.w)),dn=sortList(sel.filter(x=>!x.w),true);
  const add=g==='fix'?`<div style="padding:8px 12px"><button class="mini pri" onclick="catForm(null,'inc',{fixed:true})">+ تحصيل ثابت</button></div>`:g==='ann'?`<div style="padding:8px 12px"><button class="mini pri" onclick="catForm(null,'inc',{fixed:true,every:12})">+ تحصيل سنوي</button></div>`:'';
  h+=grp('cp','⏳ غير محصّل',pl.length,sm0(pl),'neg',pl.map(x=>x.h).join('')+add);
  h+=grp('cd','✅ محصّل',dn.length,sm0(dn),'pos',dn.map(x=>x.h).join(''));
  return h;
}
/* الفلتر بيدوّر في البنود المجمّعة كمان */
function gfApply(){const q=qn(GQ[view]||'');document.querySelectorAll('#view .row, #view details.xgr').forEach(r=>{if(r.closest('details.xgr')&&!r.matches('details.xgr'))return;r.style.display=!q||qn(r.textContent).includes(q)?'':'none'})}
xTopFab();
/* ========== التقرير بيفتح فوق الشاشة اللي انت فيها، ولما تقفله ترجع لها ========== */
var XRVSH=null;
function openRep(key,set){
  const sh=$('#sheet');
  XRVSH=sh&&sh.classList.contains('open')?(($('#sheet .sz')||{}).innerHTML||null):null;
  closeSheet();$('#rv').classList.remove('on');
  RVST=[];RF={...RFDEF};rtab=key;if(set)set();
  openRV();
}
try{const _crv2=closeRV;closeRV=function(){const h=XRVSH;XRVSH=null;const r=_crv2.apply(this,arguments);if(h)sheet(h,true);return r}}catch(e){}
/* ========== حذف القسط: تختار تحذف مصروفاته معاه ولا لأ ========== */
async function planDel(id){
  const p=plan(id);if(!p)return;
  const txs=S.txs.filter(t=>(t.src&&t.src.k==='i'&&t.src.id===id)||p.items.some(it=>it.txId===t.id));
  let delTx=false;
  if(txs.length){
    const r=await ask(`حذف ${p.name}؟`,`عليه ${txs.length} قسط مدفوع بإجمالي ${fmt(txs.reduce((a,t)=>a+t.amount,0))}.\nتحذف مصروفاتهم كمان؟`,{danger:true,icon:'🗑',ok:'🗑 احذف القسط ومصروفاته',cancel:'احذف القسط بس'});
    if(r===null)return;delTx=r;
  }else if(!await ask(`حذف ${p.name}؟`,'',{danger:true,icon:'🗑',ok:'حذف'}))return;
  let kept=0;
  if(delTx){const ids=new Set(txs.filter(t=>{if(isClosed(t.date)){kept++;return false}return true}).map(t=>t.id));S.txs=S.txs.filter(t=>!ids.has(t.id))}
  S.plans=S.plans.filter(x=>x.id!==id);save();closeSheet();go('inst');refreshRV();
  toast(kept?`اتحذف · ${kept} مصروف في شهور مقفولة فضلوا`:'اتحذف ✓');
}
/* مصروفات أقساط اتحذفت قبل كده: بيسألك مرة واحدة تحذفها */
async function xOrphanInst(){
  const l=S.txs.filter(t=>t.src&&t.src.k==='i'&&!plan(t.src.id)&&!isClosed(t.date));if(!l.length)return;
  const sig=l.map(t=>t.id).sort().join(',');if(S.settings.xorph===sig)return;
  const r=await ask('مصروفات أقساط اتحذفت',`لقيت ${l.length} مصروف لأقساط انت حذفتها قبل كده، بإجمالي ${fmt(l.reduce((a,t)=>a+t.amount,0))}.\nأحذفهم؟`,{danger:true,icon:'🧹',ok:'🗑 احذفهم',cancel:'سيبهم'});
  if(r===null)return;
  if(!r){S.settings.xorph=sig;save();return}
  const ids=new Set(l.map(t=>t.id));S.txs=S.txs.filter(t=>!ids.has(t.id));save();render();refreshRV();toast('اتحذفوا ✓');
}
function xOrphanLater(){if($('#lock').classList.contains('on')||document.querySelector('.dlg'))return setTimeout(xOrphanLater,2000);xOrphanInst()}
setTimeout(xOrphanLater,3000);
/* نهاية fix.js */