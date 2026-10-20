/* ========== Centric · fix.js · 2.21.0 ========== */
/* بيتحمّل بعد more.js. لو حصلت مشكلة: شيل سطره من index.html والبرنامج يرجع زي ما كان */
const XVER='2.21.110',XVBUILD='20/10/2026 - 03:33 م';
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
function xFabOpen(){
  fabMenu();const m=$('#fabm'),b=$('#xfab');
  if(m&&b){const r=b.getBoundingClientRect();m.style.top=(r.bottom+10)+'px';m.style.bottom='auto';m.style.animation='none'}
}

/* ========== التقرير بيفتح فوق الشاشة اللي انت فيها، ولما تقفله ترجع لها ========== */
var XRVSH=null;
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
/* ========== زرار ➕ تحت على الشمال، والزراير بتطلع منه بدوران ========== */
(()=>{const s=document.createElement('style');s.textContent=`
#xfab{display:none!important}
#view{padding-bottom:96px!important}
#xfw{position:fixed;left:16px;bottom:calc(var(--navh,64px) + 16px);width:58px;height:58px;z-index:60}
#xfw .xfbg{position:fixed;inset:0;background:rgba(15,23,42,.35);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);opacity:0;pointer-events:none;transition:opacity .25s}
#xfw.on .xfbg{opacity:1;pointer-events:auto}
#xfw .xfm{position:absolute;inset:0;border-radius:50%;border:1px solid rgba(255,255,255,.3);background:linear-gradient(135deg,color-mix(in srgb,var(--p) 85%,#fff),color-mix(in srgb,var(--p) 78%,#000));color:#fff;font-size:34px;line-height:1;display:flex;align-items:center;justify-content:center;padding:0;cursor:pointer;z-index:2;box-shadow:0 10px 24px color-mix(in srgb,var(--p) 45%,transparent),inset 0 1px 0 rgba(255,255,255,.3);backdrop-filter:blur(10px);transition:transform .4s cubic-bezier(.34,1.56,.64,1)}
#xfw.on .xfm{transform:rotate(135deg)}
#xfw .xfi{position:absolute;left:2px;top:2px;width:54px;height:54px;border-radius:50%;border:1px solid rgba(255,255,255,.35);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:0;font:inherit;cursor:pointer;z-index:1;box-shadow:0 8px 18px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,255,255,.3);backdrop-filter:blur(8px);opacity:0;pointer-events:none;transform:translate(0,0) rotate(-200deg) scale(.3);transition:transform .5s cubic-bezier(.34,1.56,.64,1),opacity .25s;transition-delay:0ms}
#xfw.on .xfi{opacity:1;pointer-events:auto;transform:translate(var(--x),var(--y)) rotate(0) scale(1);transition-delay:var(--d)}
#xfw .xfi span{font-size:19px;line-height:1}
#xfw .xfi small{font-size:9px;font-weight:800;line-height:1.1;text-shadow:0 1px 2px rgba(0,0,0,.35)}
`;document.head.appendChild(s)})();
try{const _hb2=handleBack;handleBack=function(){const w=$('#xfw');if(w&&w.classList.contains('on')){xFab(0);return true}return _hb2.apply(this,arguments)}}catch(e){}
/* ========== زرار ➕ على اليمين ========== */
(()=>{const s=document.createElement('style');s.textContent=`
#xfw{left:auto!important;right:16px!important}
#xfw .xfi{width:50px!important;height:50px!important;left:4px!important;top:4px!important}
#xfw .xfi span{font-size:18px}
#xfw .xfi small{font-size:8.5px}
`;document.head.appendChild(s)})();
/* ========== زرار ➕: تختار زراريره بنفسك (يظهر / تلقائي / مخفي) ========== */
(()=>{const s=document.createElement('style');s.textContent=`
#xfw.xh{display:none!important}
#xfw .xfis{position:absolute;inset:0}
#xfw .xfi{overflow:visible}
#xfw .xfb{position:absolute;top:-5px;right:-5px;min-width:18px;height:18px;border-radius:9px;background:#dc2626;color:#fff;font-size:10.5px;font-weight:800;display:flex;align-items:center;justify-content:center;padding:0 4px;border:2px solid #fff;box-sizing:border-box}
#xfw .xfdot{position:absolute;top:3px;right:3px;width:13px;height:13px;border-radius:50%;background:#dc2626;border:2px solid #fff;display:none}
#xfw.dot .xfdot{display:block}#xfw.on .xfdot{display:none}
`;document.head.appendChild(s)})();
/* كل زرار: [أيقونة، اسم، بيعمل إيه، ألوان، امتى يظهر في "تلقائي"، وصف التلقائي] */
var XFC={
  inc:['💰','تحصيل',"newTx('inc')",'#22c55e,#15803d',()=>pendAll().length,'لما يكون فيه تحصيل غير محصّل'],
  exp:['💸','مصروف',"newTx('exp')",'#ef4444,#b91c1c',()=>pendTx('exp',NKM).length+dueList(NKM,'','exp').filter(o=>o.s.st==='wait'&&o.date<today()).length,'لما يكون فيه مصروف غير مدفوع'],
  inst:['🏦','الأقساط',"go('inst')",'#8b5cf6,#6d28d9',()=>instDue().length,'لما يقرب ميعاد قسط أو يتأخر'],
  loans:['🤝','السلف',"go('loans')",'#06b6d4,#0e7490',()=>xLoans().filter(t=>t.loan.due&&daysBetween(t.loan.due,today())<=3&&t.amount-xLoanPaid(t)>0).length,'لما يقرب ميعاد سداد سلفة أو يتأخر'],
  annual:['📆','السنوي',"go('annual')",'#0ea5e9,#0369a1',()=>annualDue().length,'لما يقرب ميعاد تحصيل سنوي'],
  wallet:['💳','الكروت',"go('wallet')",'#14b8a6,#0f766e',()=>renDue().length,'لما كارت شخصي يقرب يخلص'],
  months:['🔒','قفل الشهور',"go('months')",'#64748b,#1e293b',()=>{const pk=prevKey(NKM);return !S.closed[pk]&&keyTx(pk).length?1:0},'لما الشهر اللي فات يكون لسه مفتوح'],
  set:['⚙️','الإعدادات',"stab='';go('settings')",'#64748b,#334155',()=>{const lb=localStorage.getItem(BKEY);return !DEMO&&S.txs.length&&(!lb||(Date.now()-new Date(lb))/864e5>30)?1:0},'لما يبقى وقت النسخة الاحتياطية'],
  scan:['📷','ريسيت',"scanReceipt()",'#f43f5e,#be123c',()=>0,''],
  cash:['🏧','سحب كاش',"cashForm()",'#eab308,#a16207',()=>0,''],
  buy:['🛒','المشتروات',"go('buy')",'#f97316,#c2410c',()=>0,''],
  docs:['📎','المرفقات',"go('docs')",'#3b82f6,#1d4ed8',()=>0,''],
  contacts:['📇','Contacts',"go('contacts')",'#a855f7,#7e22ce',()=>0,''],
  items:['📋','البنود',"go('items')",'#10b981,#047857',()=>0,''],
  pmv:['🏛️','الحسابات',"go('pmv')",'#0891b2,#155e75',()=>0,''],
  reports:['📊','التقارير',"rtab='';go('reports')",'#6366f1,#4338ca',()=>0,''],
  pw:['🔐','الباسوردات',"pwScreen()",'#475569,#0f172a',()=>0,'']
};
var XFDEF=['inc','exp','inst','docs','buy','set'];
function xFabCfg(){const f=S.settings.fab||(S.settings.fab={});if(!Array.isArray(f.order))f.order=[...XFDEF];Object.keys(XFC).forEach(k=>{if(!f.order.includes(k))f.order.push(k)});f.order=f.order.filter(k=>XFC[k]);f.m=f.m||{};return f}
function xFabMode(k){const f=xFabCfg();return f.m[k]||(XFDEF.includes(k)?'show':'hide')}
function xFabRel(k){try{return +XFC[k][4]()||0}catch(e){return 0}}
function xFabList(){return xFabCfg().order.filter(k=>{const m=xFabMode(k);return m==='show'||(m==='auto'&&xFabRel(k)>0)})}
function xTopFab(){
  const old=$('#xfab');if(old)old.remove();
  const ow=$('#xfw');if(ow)ow.remove();
  const w=document.createElement('div');w.id='xfw';
  w.innerHTML=`<div class="xfbg" onclick="xFab(0)"></div><div class="xfis"></div><button type="button" class="xfm" onclick="xFab()" aria-label="+">+<i class="xfdot"></i></button>`;
  document.body.appendChild(w);
  try{xFabDot();xFabVis()}catch(e){}
}
function xFab(v){
  const w=$('#xfw');if(!w)return;const on=v==null?!w.classList.contains('on'):!!v;
  if(on&&!w.classList.contains('on')){xFabBuild();void w.offsetWidth;w.classList.add('on')}else if(!on)w.classList.remove('on');
}
/* نقطة حمرا على ➕ لو فيه زرار تلقائي ظاهر */
function xFabDot(){const w=$('#xfw');if(!w)return;w.classList.toggle('dot',xFabCfg().order.some(k=>xFabMode(k)==='auto'&&xFabRel(k)>0))}
(()=>{const mo=new MutationObserver(()=>{try{xFabVis()}catch(e){}});['#rv','#lock'].forEach(s=>{const e=$(s);if(e)mo.observe(e,{attributes:true,attributeFilter:['class']})});mo.observe(document.body,{childList:true})})();
try{const _rF=render;render=function(){const r=_rF.apply(this,arguments);try{xFabDot()}catch(e){}return r}}catch(e){}

function xFabSet(k,m){xFabCfg().m[k]=m;save();render()}
function xFabMove(i,d){const o=xFabCfg().order,j=i+d;if(j<0||j>=o.length)return;[o[i],o[j]]=[o[j],o[i]];save();render()}
function xFabReset(){delete S.settings.fab;save();render();toast('رجع الأصلي ✓')}
if(!SETS.some(x=>x[0]==='fab'))SETS.splice(4,0,['fab','➕','أزرار ➕']);

/* الرئيسية: "غير محصّل" وأخواته بيختفوا لوحدهم لما مفيش حاجة */
['pending','annual','inst','renew'].forEach(k=>HWDEF[k]='auto');
if(!S.settings.xhw1){S.settings.hw=Object.assign({},S.settings.hw);['pending','annual','inst','renew'].forEach(k=>{if(S.settings.hw[k]==='show')S.settings.hw[k]='auto'});S.settings.xhw1=1;save()}

xTopFab();render();
try{const _rV=render;render=function(){const r=_rV.apply(this,arguments);try{xFabVis()}catch(e){}return r}}catch(e){}
setInterval(()=>{try{xFabVis()}catch(e){}},700);
/* ========== إخفاء زرار ➕ في التقارير (طريقة تانية احتياطي) ========== */
(()=>{const s=document.createElement('style');s.textContent=`body:has(#rv.on) #xfw,body.xrep #xfw{display:none!important}`;document.head.appendChild(s)})();
try{const _rW=render;render=function(){const r=_rW.apply(this,arguments);try{document.body.classList.toggle('xrep',view==='reports')}catch(e){}return r}}catch(e){}
try{document.body.classList.toggle('xrep',view==='reports')}catch(e){}
/* ========== زرار ➕ في الرئيسية بس ========== */
(()=>{const s=document.createElement('style');s.textContent='body:not(.xhome) #xfw{display:none!important}';document.head.appendChild(s)})();
function xHomeCls(){try{document.body.classList.toggle('xhome',view==='home')}catch(e){}}
try{const _rH=render;render=function(){const r=_rH.apply(this,arguments);xHomeCls();return r}}catch(e){}
xHomeCls();

/* ========== تقسيط للغير: أول قسط الأول وبعده تاريخ الانتهاء جنب بعض ========== */
function xP3Tx(){
  if(!F||F.type!=='inc'||!F.fix)return;
  const s=$('#f-ev');if(!s||s.querySelector('option[value="p3"]'))return;
  const o=document.createElement('option');o.value='p3';o.textContent='🤝 تقسيط للغير';s.appendChild(o);
  s.setAttribute('onchange','grab();SHKEEP=1;txForm()');
  if(!F.p3)return;
  s.value='p3';
  const l=s.closest('label'),d=$('#f-d'),dl=d&&d.closest('label');if(!l||!dl)return;
  const old=dl.parentElement;
  if(dl.firstChild&&dl.firstChild.nodeType===3)dl.firstChild.nodeValue='📅 أول قسط';
  const end=document.createElement('label');end.innerHTML=`📅 تاريخ الانتهاء<input id="f-end" type="date" value="${F.end3||''}">`;
  const row=document.createElement('div');row.className='two';row.appendChild(dl);row.appendChild(end);
  l.after(row);
  if(old&&old.classList.contains('two'))old.style.gridTemplateColumns='1fr';
}
try{const _tf9=txForm;txForm=function(){const r=_tf9.apply(this,arguments);try{xP3Tx()}catch(e){}return r}}catch(e){}
try{const _gb9=grab;grab=function(){_gb9();const s=$('#f-ev');if(s)F.p3=s.value==='p3';if($('#f-end'))F.end3=$('#f-end').value}}catch(e){}
try{const _st9=saveTx;saveTx=async function(){
  grab();const p3=F.type==='inc'&&F.fix&&F.p3,end=F.end3||'';
  if(p3&&!end)return toast('اختار تاريخ الانتهاء');
  if(p3&&F.date&&end<F.date)return toast('تاريخ الانتهاء لازم يكون بعد أول قسط');
  const cid=F.cat&&F.cat!=='__new'?F.cat:null,nm0=(F.newCat||'').trim();
  const r=await _st9.apply(this,arguments);
  if(p3){const c=cid?C(cid):S.cats.find(x=>x.kind==='inc'&&normAr(x.name)===normAr(nm0));if(c&&c.fixed){c.p3=true;c.end=end;save();render()}}
  return r;
}}catch(e){}
/* ========== الرئيسية: كل مبلغ بيظهر لوحده + بوكس الفلوس وبوكس التفاصيل منفصلين ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xhb{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:10px 0}
.xbx{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22);border-radius:16px;padding:10px;display:flex;flex-direction:column;gap:6px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.xbx>small{opacity:.9;font-size:12px;font-weight:700}
.xbx .xv{background:rgba(255,255,255,.18);border-radius:12px;padding:8px;text-align:center;font-size:17px;font-weight:800;min-height:42px;display:flex;align-items:center;justify-content:center;cursor:pointer}
.xbx .xd{border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.1);color:inherit;border-radius:10px;padding:7px;font:inherit;font-size:12px;font-weight:700;cursor:pointer}
.tile .xv{background:color-mix(in srgb,var(--p) 10%,transparent);border-radius:10px;padding:6px 8px;margin:6px 0 4px;font-size:15px;font-weight:800;text-align:center;cursor:pointer;min-height:34px;display:flex;align-items:center;justify-content:center}
.tile .xd{display:block;margin-top:6px;font-size:11px;font-weight:700;color:var(--p);text-align:center;border-top:1px dashed rgba(148,163,184,.4);padding-top:5px}
.hero .hnet .xmk,.xv .xmk{cursor:pointer}
`;document.head.appendChild(s)})();
/* المبلغ المخفي: بيشيل قيمته جواه، ولما تدوس عليه يظهر هو بس */
function xMk(v){return `<span class="msk xmk" data-v="${encodeURIComponent(String(v))}" onclick="event.stopPropagation();xReveal(this)">••••••</span>`}
function xVbox(v,hid){return `<div class="xv" onclick="event.stopPropagation();const m=this.querySelector('.xmk');if(m)xReveal(m)">${hid?xMk(v):`<b>${v}</b>`}</div>`}
function tileHTML(t){
  const hid=!t.nomask&&amtHidden()&&/\d/.test(String(t.val));
  return `<div class="tile ${t.cls||''}" onclick="${t.go}"><div class="tth"><span class="ti">${t.ic}</span><span class="tl">${esc(t.label)}</span>${t.badge?`<span class="tb">${t.badge}</span>`:''}</div>${xVbox(t.val,hid)}${t.sub?`<small>${t.sub}</small>`:''}<span class="xd">التفاصيل ‹</span></div>`;
}
function vHome(){
  const mn=MONTHS[NM-1],s=xSums(keyTx(NKM)),pk=prevKey(NKM),tiles=[],hid=amtHidden();
  const nt=v=>v<0?num(-v)+' ج.م · سالب':num(v)+' ج.م';
  let h='';
  if(!S.closed[pk]&&keyTx(pk).length)h+=`<div class="warn" onclick="go('months')">⚠️ ${mName(pk)} لسه مفتوح</div>`;
  if(wOn('cur',true)){
    const bx=(k,l,v)=>`<div class="xbx"><small>${esc(l)}</small>${xVbox(num(v),hid)}<button type="button" class="xd" onclick="openFlow('${k}')">📄 التفاصيل ‹</button></div>`;
    h+=`<div class="hero"><div class="hero-t"><span>${esc(L('cur'))}</span><span class="hm">${mn}</span>${S.settings.mask!==false?`<em class="eye" onclick="${hid?'revealAmts()':'hideAmts()'}">${hid?'👁️':'🙈'}</em>`:''}${S.closed[NKM]?`<em class="cl" onclick="go('months')">🔒 اتقفل</em>`:`<em class="op" onclick="go('months')">🔓 مفتوح</em>`}</div>
    <div class="xhb">${bx('inc',L('inc'),s.inc)}${bx('exp',L('exp'),s.exp)}</div>
    ${s.cr>0?`<div class="xcr"><span>💳 منها كريديت <b>${hid?xMk(num(s.cr)):num(s.cr)}</b></span><span>💵 من فلوسك <b>${hid?xMk(num(s.expNC)):num(s.expNC)}</b></span></div>`:''}
    <div class="hnet x0"><span>${esc(L('net'))}</span><b class="${s.net<0?'hneg':''}">${hid?xMk(nt(s.net)):nt(s.net)}</b></div>
    ${s.cr>0?`<div class="hnet x0 xnn"><span>${esc(L('net'))} من غير الكريديت</span><b class="${s.netNC<0?'hneg':''}">${hid?xMk(nt(s.netNC)):nt(s.netNC)}</b></div>`:''}</div>`;
  }
  const pend=pendAll(),pv=pend.reduce((a,x)=>a+x.a,0);
  if(wOn('pending',pend.length))tiles.push({ic:'💼',label:'غير محصّل',val:pend.length?fmt(pv):'✓ كله محصّل',sub:pend.length?`${pend.length} بند`:mn,cls:pend.length?'hot':'',badge:pend.length,go:'pendingSheet()'});
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
/* ========== كل مبلغ مخفي بيطلب البصمة لوحده ========== */
async function xReveal(el){
  if(!el||!el.dataset.v)return;
  if(LK.bio){try{await bioVerify()}catch(e){return toast('البصمة ما اتعرفتش')}}
  else if(LK.pin){const v=await ask('الرقم السري','',{input:'',num:true,pw:true,icon:'🔒',ok:'إظهار'});if(v==null)return;if(await hash(v)!==LK.pin)return toast('الرقم السري غلط')}
  el.outerHTML='<b>'+decodeURIComponent(el.dataset.v)+'</b>';
}

/* ========== مصاريف إنستاباي: بتتحسب لوحدها وبتتسجل مصروف منفصل ========== */
(()=>{const s=document.createElement('style');s.textContent=`.xfee{margin-top:10px;padding-top:8px;border-top:1px dashed rgba(148,163,184,.4)}.xfee .inl input{flex:1}.xfee small{display:block;margin-top:4px}`;document.head.appendChild(s)})();
function xFeeCfg(){return S.settings.ipfee||{p:.1,min:.5,max:20}}
function xFeeCalc(a){const c=xFeeCfg();a=+a||0;if(!(a>0))return 0;return r2(Math.min(+c.max,Math.max(+c.min,a*(+c.p)/100)))}
function xFeeTx(id){return id?S.txs.find(x=>x.feeOf===id):null}
function xFeeInject(){
  if(!F||F.type!=='exp'||F.via!=='instapay')return;
  const orig=F.id&&S.txs.find(t=>t.id===F.id);if(orig&&orig.feeOf)return;
  const box=document.querySelector('#sheet .xipb');if(!box||$('#f-feeon'))return;
  if(F.feeOn==null){const ft=xFeeTx(F.id);F.feeOn=F.id?!!ft:true;if(ft){F.fee=amtStr(ft.amount);F.feeMan=true}}
  if(!F.feeMan)F.fee=amtStr(xFeeCalc(parseNum(F.amount)));
  const c=xFeeCfg(),w=document.createElement('div');w.className='xfee';
  w.innerHTML=`<label class="chk"><input type="checkbox" id="f-feeon" ${F.feeOn?'checked':''} onchange="grab();F.feeOn=this.checked;SHKEEP=1;txForm()"> 💸 مصاريف إنستاباي</label>
  ${F.feeOn?`<div class="inl"><input id="f-fee" inputmode="decimal" dir="ltr" value="${esc(F.fee||'')}" oninput="F.feeMan=true"><button type="button" class="mini" onclick="xFeeAuto()">↺</button><button type="button" class="mini" onclick="xIpFeeCfg()">⚙️</button></div>
  <small class="muted">${c.p}% من المبلغ · أقل حاجة ${c.min} · أقصى حاجة ${c.max} · بتتسجل مصروف لوحدها</small>`:''}`;
  box.appendChild(w);
  const a=$('#f-amt');if(a)a.addEventListener('input',()=>{if(!F.feeMan&&$('#f-fee'))$('#f-fee').value=amtStr(xFeeCalc(parseNum(a.value)))});
}
function xFeeAuto(){F.feeMan=false;const f=$('#f-fee');if(f)f.value=amtStr(xFeeCalc(parseNum(($('#f-amt')||{}).value)))}
async function xIpFeeCfg(){
  const c=xFeeCfg();
  const p=await askIn('نسبة المصاريف %','دلوقتي '+c.p+'%',String(c.p),true);if(p==null)return;
  const mn=await askIn('أقل مبلغ للمصاريف','',String(c.min),true);if(mn==null)return;
  const mx=await askIn('أقصى مبلغ للمصاريف','',String(c.max),true);if(mx==null)return;
  S.settings.ipfee={p:parseNum(p)||0,min:parseNum(mn)||0,max:parseNum(mx)||0};save();
  grab();F.feeMan=false;SHKEEP=1;txForm();toast('اتحفظ ✓');
}
try{const _tfF=txForm;txForm=function(){const r=_tfF.apply(this,arguments);try{xFeeInject()}catch(e){}return r}}catch(e){}
try{const _gbF=grab;grab=function(){_gbF();if($('#f-feeon'))F.feeOn=$('#f-feeon').checked;if($('#f-fee'))F.fee=$('#f-fee').value}}catch(e){}
try{const _stF=saveTx;saveTx=async function(){
  grab();const before=new Set(S.txs.map(t=>t.id)),fid=F.id,ip=F.type==='exp'&&F.via==='instapay',on=!!F.feeOn,fee=parseNum(F.fee);
  const r=await _stF.apply(this,arguments);
  try{
    let mid=fid;if(!mid){const n=S.txs.find(t=>!before.has(t.id)&&t.type==='exp'&&!t.feeOf);mid=n&&n.id}
    const m=mid&&S.txs.find(t=>t.id===mid);if(!m||m.feeOf)return r;
    const old=xFeeTx(m.id);
    if(ip&&on&&fee>0&&!m.pend&&!isClosed(m.date)){
      const c=ensureCat('مصاريف إنستاباي','exp');c.active=true;
      if(old)Object.assign(old,{amount:fee,method:m.method,date:m.date});
      else S.txs.push({id:uid(),type:'exp',amount:fee,cat:c.id,method:m.method,via:'instapay',date:m.date,note:'💸 مصاريف تحويل',files:[],created:Date.now(),feeOf:m.id});
      save();render();
    }else if(old&&!isClosed(old.date)){S.txs=S.txs.filter(t=>t.id!==old.id);save();render()}
  }catch(e){}
  return r;
}}catch(e){}
try{const _dtF=delTx;delTx=async function(){const id=F&&F.id;const r=await _dtF.apply(this,arguments);if(id&&!S.txs.some(t=>t.id===id)){const n=S.txs.length;S.txs=S.txs.filter(t=>t.feeOf!==id);if(S.txs.length!==n){save();render()}}return r}}catch(e){}
try{const _tbF=txBody;txBody=function(t){let h=_tbF(t);const f=xFeeTx(t.id);
  if(f)h=h.replace('<div class="etbar"',`<div class="kv"><span>💸 مصاريف إنستاباي</span><b>${fmt(f.amount)}</b></div><div class="etbar"`);
  if(t.feeOf){const m=S.txs.find(x=>x.id===t.feeOf);if(m)h=h.replace('<div class="etbar"',`<div class="kv"><span>🔗 مصاريف تحويل لـ</span><b>${esc(C(m.cat)?.name||'')} · ${fmt(m.amount)}</b></div><div class="etbar"`)}
  return h}}catch(e){}

/* ========== مصاريف إنستاباي للمصروفات القديمة (مرة واحدة) ========== */
async function xFeeBackfill(){
  if(S.settings.xfeebf)return;
  const c0=S.cats.find(c=>c.kind==='exp'&&c.name==='مصاريف إنستاباي');
  const l=S.txs.filter(t=>t.type==='exp'&&t.via==='instapay'&&!t.pend&&!t.feeOf&&t.amount>0&&!(c0&&t.cat===c0.id)&&!xFeeTx(t.id)&&!isClosed(t.date));
  if(!l.length){S.settings.xfeebf=1;save();return}
  const tot=r2(l.reduce((a,t)=>a+xFeeCalc(t.amount),0));
  const r=await ask('مصاريف إنستاباي القديمة',`لقيت ${l.length} مصروف متسجل بإنستاباي من غير مصاريف.\nمصاريفهم كلها ${fmt(tot)}.\nأضيفها؟`,{icon:'💸',ok:'✓ ضيفها',cancel:'لأ'});
  if(r===null)return;
  S.settings.xfeebf=1;
  if(r){
    const c=ensureCat('مصاريف إنستاباي','exp');c.active=true;
    l.forEach(t=>S.txs.push({id:uid(),type:'exp',amount:xFeeCalc(t.amount),cat:c.id,method:t.method,via:'instapay',date:t.date,note:'💸 مصاريف تحويل',files:[],created:Date.now(),feeOf:t.id}));
    toast(`اتضاف مصاريف ${l.length} تحويل ✓`);
  }
  save();render();refreshRV();
}
function xFeeLater(){if($('#lock').classList.contains('on')||document.querySelector('.dlg'))return setTimeout(xFeeLater,2000);xFeeBackfill()}
setTimeout(xFeeLater,4500);
/* ========== مصاريف إنستاباي: بند لكل بنك + المعاملة الأصلية ========== */
const XFEEN='مصاريف إنستاباي';
function xFeeNorm(){
  let ch=false;
  S.txs.forEach(t=>{
    if(!t.feeOf)return;const m=S.txs.find(x=>x.id===t.feeOf);
    const cn=XFEEN+' · '+(M(t.method)?.name||'—'),c=C(t.cat);
    if(!c||c.name!==cn){const nc=ensureCat(cn,'exp');nc.active=true;t.cat=nc.id;ch=true}
    if(m){const nt='💸 مصاريف تحويل لـ '+(C(m.cat)?.name||'—')+' · '+num(m.amount);if((!t.note||t.note.startsWith('💸 مصاريف تحويل'))&&t.note!==nt){t.note=nt;ch=true}}
  });
  const g=S.cats.find(c=>c.kind==='exp'&&c.name===XFEEN);
  if(g&&!S.txs.some(t=>t.cat===g.id)){S.cats=S.cats.filter(c=>c!==g);ch=true}
  if(ch)save();return ch;
}
try{const _rFe=render;render=function(){try{xFeeNorm()}catch(e){}return _rFe.apply(this,arguments)}}catch(e){}
/* لما تفتح مصروف مصاريف: بوكس فيه المعاملة الأصلية */
function xFeeOrigBox(){
  if(!F||!F.id)return;const t=S.txs.find(x=>x.id===F.id);if(!t||!t.feeOf)return;
  const sz=document.querySelector('#sheet .sz');if(!sz||sz.querySelector('.xforig'))return;
  const m=S.txs.find(x=>x.id===t.feeOf),d=document.createElement('div');d.className='xforig';
  d.innerHTML=m?`<b class="xft">🔗 دي مصاريف تحويل إنستاباي لـ</b>
  <div class="kv"><span>📋 البند</span><b>${esc(C(m.cat)?.name||'—')}</b></div>
  <div class="kv"><span>💰 المبلغ</span><b>${fmt(m.amount)}</b></div>
  <div class="kv"><span>📅 التاريخ</span><b>${fdate(m.date)}</b></div>
  <div class="kv"><span>🏦 من</span><b>${M(m.method)?xMIc(M(m.method),1)+' ':''}${esc(M(m.method)?.name||'—')}</b></div>
  ${m.ipay&&m.ipay.v?`<div class="kv"><span>⚡ حولت لـ</span><b><bdi>${esc(m.ipay.v)}</bdi></b></div>`:''}
  ${m.note&&!/^🧾/.test(m.note)?`<div class="kv"><span>📝 ملاحظة</span><b>${esc(m.note)}</b></div>`:''}
  <button type="button" class="btn ghost" onclick="editTx('${m.id}')">📂 افتح المعاملة الأصلية</button>`
  :'<b class="xft">⚠️ المعاملة الأصلية اتحذفت</b>';
  const h2=sz.querySelector('h2');if(h2)h2.after(d);else sz.prepend(d);
}
try{const _tfO=txForm;txForm=function(){const r=_tfO.apply(this,arguments);try{xFeeOrigBox()}catch(e){}return r}}catch(e){}

/* ========== تفاصيل المصروف والتحصيل: واضحة ومقرية ========== */
(()=>{const s=document.createElement('style');s.textContent=`
details.xr .xb{background:color-mix(in srgb,var(--p) 5%,var(--card,#fff));border:1px solid color-mix(in srgb,var(--p) 18%,transparent);border-radius:14px;margin:4px 8px 10px;padding:6px 12px 10px}
.xb .kv,.xforig .kv{display:flex!important;justify-content:space-between;align-items:center;gap:12px;padding:9px 0!important;margin:0!important;border-bottom:1px dashed rgba(148,163,184,.35);font-size:14px}
.xb .kv:last-of-type,.xforig .kv:last-of-type{border-bottom:0}
.xb .kv>span,.xforig .kv>span{opacity:.75;font-weight:600;white-space:nowrap;flex:0 0 auto}
.xb .kv>b,.xforig .kv>b{font-weight:800;font-size:14.5px;text-align:left;unicode-bidi:plaintext;word-break:break-word;display:flex;align-items:center;gap:5px;justify-content:flex-end}
.xb .kv.xbig>b{font-size:18px;color:var(--p)}
.xb .files{margin-top:8px}
.xb .etbar{display:flex!important;gap:8px;flex-wrap:wrap;margin-top:10px!important}
.xb .etbar .mini{flex:1;padding:10px 8px!important;font-size:13px!important;text-align:center}
.xb small,.xb b{opacity:1}
details.xgr .xl{padding:11px 14px!important;font-size:14px!important;align-items:center}
details.xgr .xl>span{font-weight:700;white-space:nowrap;font-size:13px}
details.xgr .xl small{font-size:12.5px!important;opacity:.85;line-height:1.5}
details.xgr .xl>b{font-size:15px;font-weight:800}
details.xr>summary small{font-size:12.5px!important;line-height:1.5}
.xforig{border:1.5px dashed var(--p);border-radius:14px;padding:8px 12px 12px;margin:0 0 12px;background:color-mix(in srgb,var(--p) 6%,transparent)}
.xforig .xft{display:block;margin:2px 0 4px;font-size:14px;color:var(--p)}
.xforig .btn{margin-top:8px}
`;document.head.appendChild(s)})();
try{const _tbX=txBody;txBody=function(t){
  let h=_tbX(t);const m=M(t.method);
  h=h.replace('<span>التاريخ</span>','<span>📅 التاريخ</span>')
     .replace('<span>دفعت من</span><b>','<span>🏦 دفعت من</span><b>'+(m?xMIc(m,1)+' ':''))
     .replace('<span>استلمت في</span><b>','<span>🏦 استلمت في</span><b>'+(m?xMIc(m,1)+' ':''))
     .replace('<span>الطريقة</span><b>','<span>💳 الطريقة</span><b>'+(t.via?xViaIc(t.via,1)+' ':''))
     .replace('<span>ملاحظة</span>','<span>📝 ملاحظة</span>')
     .replace('<span>اتأجّل قبل كده</span>','<span>⏭ اتأجّل</span>');
  return `<div class="kv xbig"><span>💰 المبلغ</span><b>${fmt(t.amount)}</b></div>`+h;
}}catch(e){}
/* ========== بنود مصاريف إنستاباي الفاضية بتتمسح لوحدها ========== */
try{const _fn0=xFeeNorm;xFeeNorm=function(){let ch=_fn0();const e=S.cats.filter(c=>c.kind==='exp'&&c.name.startsWith(XFEEN+' · ')&&!S.txs.some(t=>t.cat===c.id));if(e.length){S.cats=S.cats.filter(c=>!e.includes(c));save();ch=true}return ch}}catch(e){}
function xFeeClean(){try{
  const e=S.cats.filter(c=>c.kind==='exp'&&String(c.name).trim().indexOf('مصاريف إنستاباي')===0&&!S.txs.some(t=>t.cat===c.id));
  if(!e.length)return 0;const ids=new Set(e.map(c=>c.id));
  S.cats=S.cats.filter(c=>!ids.has(c.id));S.settings.pins=(S.settings.pins||[]).filter(p=>!ids.has(p.ref));save();return e.length;
}catch(err){return 0}}
try{const _rCl=render;render=function(){xFeeClean();return _rCl.apply(this,arguments)}}catch(e){}
setTimeout(()=>{if(xFeeClean())render()},1500);

/* ========== شاشة المصروفات والتحصيلات: بوكسات منظمة وسطور متناسقة ========== */
(()=>{const s=document.createElement('style');s.textContent=`
#view .phead{display:flex;align-items:center;gap:8px;margin:4px 0 10px}
#view .phead h3{flex:1;margin:0;font-size:18px}
#view .phead .mini{height:36px;padding:0 12px!important;border-radius:12px!important;font-size:13px!important;display:inline-flex;align-items:center;gap:4px;white-space:nowrap}
#view .mbar{display:flex;align-items:center;justify-content:space-between;background:var(--card,#fff);border:1px solid rgba(148,163,184,.25);border-radius:14px;padding:6px;margin:0 0 10px}
#view .mbar button{width:40px;height:36px;border-radius:10px}
#view .kpis{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important;margin:0 0 10px!important}
#view .kpi{background:var(--card,#fff)!important;border:1px solid rgba(148,163,184,.25);border-radius:14px!important;padding:10px 6px!important;text-align:center;min-height:62px;display:flex;flex-direction:column;justify-content:center;margin:0!important}
#view .kpi small{font-size:11px;opacity:.75}
#view .kpi b{font-size:14px;font-weight:800;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#view .tiles.x4{gap:6px!important;margin:0 0 10px!important}
#view .tiles.x4 .tile{min-height:62px!important;padding:6px 4px!important;border-radius:14px!important}
#view .tiles.x4 .tile span{font-size:19px}
#view .tiles.x4 .tile b{font-size:11.5px}
#view .sortbar{display:flex;align-items:center;gap:8px;margin:0 0 10px}
#view .sortbar>span{font-size:12px;opacity:.7;white-space:nowrap}
#view .sortbar .sseg{flex:1;display:grid!important;grid-template-columns:repeat(3,1fr);gap:4px;background:rgba(148,163,184,.15);border-radius:12px;padding:3px}
#view .sortbar .sseg button{border:0!important;border-radius:9px!important;padding:7px 2px!important;font:inherit;font-size:11.5px!important;background:transparent!important;color:inherit;box-shadow:none!important}
#view .sortbar .sseg button.on{background:var(--card,#fff)!important;font-weight:800;box-shadow:0 1px 4px rgba(0,0,0,.12)!important}
#view .prog,#view .gsr{margin:0 0 10px}
#view details.grp{background:var(--card,#fff);border:1px solid rgba(148,163,184,.25);border-radius:16px;margin:0 0 10px;overflow:hidden;box-shadow:0 2px 10px rgba(15,23,42,.05);padding:0}
#view details.grp>summary{display:flex;align-items:center;gap:10px;padding:13px 14px;font-weight:800;font-size:15px;cursor:pointer;list-style:none;margin:0}
#view details.grp>summary::-webkit-details-marker{display:none}
#view details.grp>summary::after{content:'▾';opacity:.5;transition:transform .2s;font-size:13px}
#view details.grp[open]>summary::after{transform:rotate(180deg)}
#view details.grp>summary>span:first-child{flex:1}
#view details.grp>summary .gs{min-width:84px;text-align:left;font-variant-numeric:tabular-nums;direction:ltr}
#view details.grp[open]>summary{border-bottom:1px solid rgba(148,163,184,.2);background:color-mix(in srgb,var(--p) 6%,transparent)}
#view details.grp .list{margin:0!important;padding:0!important;border:0!important;background:transparent!important;box-shadow:none!important;border-radius:0!important}
#view details.grp .ckx{display:flex!important;align-items:center;gap:10px;padding:0 12px!important;margin:0!important;border:0!important;border-bottom:1px solid rgba(148,163,184,.15)!important;border-radius:0!important;background:transparent!important}
#view details.grp .ckx>input[type=checkbox]{width:22px;height:22px;flex:0 0 22px;accent-color:var(--p);margin:0!important}
#view details.grp .ckx>details.xr,#view details.grp .ckx>.row{flex:1;min-width:0;border:0!important;margin:0!important;background:transparent!important;border-radius:0!important;box-shadow:none!important}
#view details.grp details.xr>summary,#view details.grp .ckx>.row,#view details.grp details.xgr>summary{display:flex!important;align-items:center;gap:10px;padding:11px 0!important;list-style:none;cursor:pointer;min-height:58px;margin:0!important}
#view details.grp details.xr>summary::-webkit-details-marker{display:none}
#view details.grp .list>.row{display:flex!important;align-items:center;gap:10px;padding:11px 12px!important;min-height:58px;margin:0!important;border:0!important;border-bottom:1px solid rgba(148,163,184,.15)!important;border-radius:0!important;background:transparent!important}
#view details.grp .list>details.xgr{padding:0 12px!important;margin:0!important;border:0!important;border-bottom:1px solid rgba(148,163,184,.15)!important;border-radius:0!important;background:transparent!important}
#view details.grp .grow{flex:1;min-width:0}
#view details.grp .grow>b{display:block;font-size:14.5px;font-weight:800;line-height:1.35;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#view details.grp .grow>small{display:block;font-size:12px;opacity:.78;line-height:1.45;margin-top:2px}
#view details.grp .amt{flex:0 0 auto;min-width:80px;text-align:left;font-size:15px;font-weight:800;font-variant-numeric:tabular-nums;direction:ltr;margin:0!important}
#view details.grp .ic{width:36px;height:36px;flex:0 0 36px;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:17px;margin:0!important}
#view details.grp>div[style*="padding"]{padding:10px 12px!important}
#view details.grp>div[style*="padding"] .mini{width:100%;padding:10px!important;border-radius:12px!important;font-size:13px!important}
#view details.grp .empty{padding:14px;text-align:center;opacity:.6;margin:0}
#view h3.exh{display:flex;align-items:center;gap:8px}
`;document.head.appendChild(s)})();
/* ========== القوايم بتطلع فوق الكيبورد في كل البرنامج ========== */
(()=>{
  const m=document.querySelector('meta[name=viewport]');
  if(m&&!/interactive-widget/.test(m.content))m.setAttribute('content',m.content+', interactive-widget=resizes-content');
  const vv=window.visualViewport,R=document.documentElement;
  const set=()=>{R.style.setProperty('--vvh',(vv?vv.height:innerHeight)+'px');R.style.setProperty('--vvt',(vv?vv.offsetTop:0)+'px')};
  if(vv){vv.addEventListener('resize',set);vv.addEventListener('scroll',set)}
  addEventListener('resize',set);set();
  const s=document.createElement('style');s.textContent=`
.xpk{inset:auto 0 auto 0!important;top:var(--vvt,0)!important;height:var(--vvh,100vh)!important}
.xpb{max-height:calc(var(--vvh,100vh) - 12px)!important}
.xpl{flex:1 1 auto;min-height:0;overscroll-behavior:contain}
#sheet .body{max-height:calc(var(--vvh,100vh) - 24px)!important;overflow:auto!important}
`;document.head.appendChild(s);
  /* لما تكتب في أي خانة، بتتحرك لفوق عشان متستخباش ورا الكيبورد */
  document.addEventListener('focusin',e=>{const t=e.target;if(t&&t.matches&&t.matches('input,textarea')&&!t.closest('.xpk'))setTimeout(()=>{try{t.scrollIntoView({block:'center',behavior:'smooth'})}catch(err){}},300)});
})();

/* ========== اختيار البند: من غير بنود مصاريف إنستاباي (بتتسجل لوحدها) ========== */
function xCatOpen(){
  grab();const kind=F.type==='inc'?'inc':'exp',used={};
  S.txs.forEach(t=>{if(t.cat&&t.type===kind&&!t.feeOf)used[t.cat]=Math.max(used[t.cat]||0,t.created||0)});
  const cats=S.cats.filter(c=>c.kind===kind&&(c.active!==false||c.id===F.cat)&&(c.id===F.cat||String(c.name).indexOf('مصاريف إنستاباي')!==0)).sort((a,b)=>(used[b.id]||0)-(used[a.id]||0)||a.name.localeCompare(b.name,'ar'));
  const H=cats.map(c=>{const cts=S.contacts.filter(x=>x.catId===c.id);return[c,qn([c.name,...(c.alias||[]),...cts.map(x=>x.name+' '+(x.spec||'')+' '+(x.phones||[]).join(' '))].join(' '))]});
  const ov=xOv();
  ov.innerHTML=`<div class="xpb"><div class="xpt"><b>${kind==='inc'?'💰 بند التحصيل':'💸 بند المصروف'}</b><button type="button" class="xpx">✕</button></div><input class="xpq" placeholder="🔍 اسم البند أو المحل أو رقم الموبايل"><div class="xpl"></div></div>`;
  const q=ov.querySelector('.xpq'),box=ov.querySelector('.xpl');
  const draw=()=>{
    const v=qn(q.value),raw=q.value.trim(),l=H.filter(([c,h])=>!v||h.includes(v)),exact=l.some(([c])=>qn(c.name)===v);
    box.innerHTML=(raw&&!exact&&!/^[\d\s+]+$/.test(raw)?`<button type="button" class="xpo xnew" data-new="1"><span class="xic0">➕</span><span class="xl">بند جديد: ${esc(raw)}</span></button>`:'')
      +l.map(([c])=>`<button type="button" class="xpo ${c.id===F.cat?'on':''}" data-v="${c.id}">${xCatIc(c)}<span class="xl">${esc(c.name)}${c.fixed?'<small>📌 ثابت</small>':''}</span>${c.id===F.cat?'<i>✓</i>':''}</button>`).join('')
      +(l.length?'':'<p class="muted" style="text-align:center;margin:8px 0">مفيش بند بالاسم ده</p>')
      +`<button type="button" class="xpo xnew" data-full="1"><span class="xic0">⚙️</span><span class="xl">بند جديد بالتفاصيل</span></button>`;
    box.scrollTop=0;
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
/* ========== المصروفات والتحصيلات: كروت + التفاصيل في بوكسات صغيرة ========== */
(()=>{const s=document.createElement('style');s.textContent=`
#view details.grp{background:color-mix(in srgb,var(--card,#fff) 62%,transparent)!important;border:1px solid rgba(148,163,184,.22)!important;border-radius:16px!important;box-shadow:0 6px 20px rgba(0,0,0,.12)!important}
#view details.grp>summary{padding:10px 12px!important;font-size:13.5px!important;min-height:0}
#view details.grp>summary .gs{font-size:13.5px!important;min-width:72px!important}
#view details.grp>summary .badge{font-size:10.5px;padding:1px 8px}
#view details.grp[open]>summary{border-bottom:0!important}
#view details.grp .ckx,#view details.grp .list>.row,#view details.grp .list>details.xgr{margin:0 7px 6px!important;border:1px solid rgba(148,163,184,.18)!important;border-radius:12px!important;background:color-mix(in srgb,var(--p) 5%,rgba(255,255,255,.04))!important;padding-inline:9px!important}
#view details.grp .list>.row{padding-block:6px!important}
#view details.grp .ckx:first-child,#view details.grp .list>:first-child{margin-top:3px!important}
#view details.grp details.xr>summary,#view details.grp .ckx>.row,#view details.grp details.xgr>summary{padding:6px 0!important;min-height:44px!important;gap:8px!important}
#view details.grp .list>.row{min-height:44px!important;gap:8px!important}
#view details.grp .ic{width:28px!important;height:28px!important;flex-basis:28px!important;border-radius:9px!important;font-size:14px!important}
#view details.grp .ckx>input[type=checkbox]{width:18px!important;height:18px!important;flex-basis:18px!important}
#view details.grp .grow>b{font-size:13px!important;line-height:1.3!important}
#view details.grp .grow>b .xcnt{font-size:9.5px;padding:0 5px}
#view details.grp .amt{font-size:13.5px!important;min-width:64px!important}
#view .xcs.neg .xc2:first-child{background:rgba(220,38,38,.14);border-color:rgba(220,38,38,.3);color:#ef4444}
#view details.grp details.xr .xb{margin:0 0 7px!important}
`;document.head.appendChild(s)})();

/* ========== تصغير البرنامج كله: الشاشات والبوكسات والأزرار ========== */
(()=>{const s=document.createElement('style');s.textContent=`
#view h3{font-size:15.5px!important;margin:10px 0 8px!important}
#view .phead h3{font-size:16.5px!important}
#view .phead .mini{height:32px!important;font-size:12px!important;padding:0 10px!important}
#view .mbar{padding:4px!important;border-radius:12px!important}
#view .mbar b{font-size:14px!important}
#view .mbar button{width:34px!important;height:30px!important}
#view .kpi{min-height:52px!important;padding:7px 5px!important;border-radius:12px!important}
#view .kpi small{font-size:10px!important}
#view .kpi b{font-size:12.5px!important}
#view .tiles.x4 .tile{min-height:52px!important;padding:4px 3px!important;border-radius:12px!important}
#view .tiles.x4 .tile span{font-size:16px!important}
#view .tiles.x4 .tile b{font-size:10.5px!important}
#view .tiles.x4 .tile small{font-size:9.5px!important}
#view .sortbar .sseg button{padding:5px 2px!important;font-size:10.5px!important}
#view .sortbar>span{font-size:11px!important}
#view .gsr{padding:0 10px!important;border-radius:12px!important}
#view .gsr input{padding:8px 0!important;font-size:13px!important}
#view .rgrid{gap:8px!important}
#view .rbtn{padding:10px 4px!important;font-size:11.5px!important;border-radius:14px!important;min-height:0!important}
#view .rbtn span{font-size:20px!important;margin-bottom:2px}
#view .list .row{padding-block:8px!important}
#view .list .row b{font-size:13.5px}
#view .list .row small{font-size:11.5px}
#sheet .sz{font-size:13.5px}
#sheet .sz h2{font-size:16px!important;margin:2px 0 10px!important}
#sheet .shbar{padding-block:6px!important}
#sheet .shbar .mini{padding:5px 11px!important;font-size:12.5px!important}
#sheet label{font-size:12px!important;margin-bottom:8px!important}
#sheet input:not([type=checkbox]):not([type=radio]):not([type=range]),#sheet textarea{font-size:13.5px!important;padding:8px 10px!important;min-height:38px!important;border-radius:10px!important}
#sheet .amt-in{font-size:22px!important;padding:6px 12px!important;min-height:48px!important}
#sheet .two{gap:8px!important}
#sheet .btn{padding:9px 12px!important;font-size:13.5px!important;border-radius:11px!important;margin-top:7px!important}
#sheet .mini{padding:5px 9px!important;font-size:12px!important}
#sheet .kv{font-size:12.5px!important;padding:6px 0!important}
#sheet .seg button{padding:7px 4px!important;font-size:12.5px!important}
#sheet .fl{font-size:12px!important;margin:6px 0!important}
#sheet .files .fth,#sheet .files .fadd{width:62px!important;height:62px!important;font-size:18px!important;border-radius:12px!important}
#sheet .files .fadd small,#sheet .files .fth small{font-size:9.5px!important}
.xsel{min-height:38px!important;padding:4px 10px!important;font-size:13px!important;border-radius:10px!important;gap:7px!important}
.xic{width:24px!important;height:24px!important;flex-basis:24px!important;font-size:13px!important;border-radius:7px!important}
.xlogo{width:24px!important;height:24px!important;flex-basis:24px!important;border-radius:7px!important}
.xic0{font-size:15px!important;width:24px!important;flex-basis:24px!important}
.xchip{padding:5px 12px!important;font-size:12px!important;border-radius:16px!important}
.xchips{gap:6px!important;margin:2px 0 8px!important}
.xforig{padding:5px 10px 10px!important;border-radius:12px!important;margin-bottom:10px!important}
.xforig .xft{font-size:13px!important}
.xforig .kv>b,.xb .kv>b{font-size:13px!important}
.xb .kv.xbig>b{font-size:15.5px!important}
.xforig .btn{padding:8px!important;font-size:13px!important}
.xipb{padding:8px!important;border-radius:12px!important}
.xpb{padding:10px 10px calc(10px + env(safe-area-inset-bottom))!important;border-radius:18px 18px 0 0!important}
.xpt b{font-size:14.5px!important}
.xpx{width:30px!important;height:30px!important}
.xpo{padding:7px 9px!important;font-size:13px!important;border-radius:11px!important;gap:8px!important}
.xpl{gap:5px!important}
.xcg button{font-size:13px!important}
nav button{font-size:10.5px!important}
nav button span{font-size:19px!important}
`;document.head.appendChild(s)})();
/* ========== توحيد شكل كل الشاشات: بوكسات + سطور كروت + بوكسات صغيرة للتفاصيل ========== */
(()=>{const s=document.createElement('style');s.textContent=`
#view .list{background:color-mix(in srgb,var(--card,#fff) 62%,transparent)!important;border:1px solid rgba(148,163,184,.22)!important;border-radius:16px!important;padding:5px 0 1px!important;margin:0 0 10px!important;box-shadow:0 6px 20px rgba(0,0,0,.1)!important;overflow:hidden}
#view .list>.row,#view .list>a.row,#view .list>.ckx,#view .list>details{margin:0 6px 5px!important;border:1px solid rgba(148,163,184,.18)!important;border-radius:12px!important;background:color-mix(in srgb,var(--p) 5%,rgba(255,255,255,.04))!important;padding:7px 9px!important;min-height:44px;display:flex;align-items:center;gap:8px;text-decoration:none;color:inherit}
#view .list .ic{width:28px!important;height:28px!important;flex:0 0 28px!important;border-radius:9px!important;font-size:14px!important;display:flex;align-items:center;justify-content:center;overflow:hidden}
#view .list .dot{width:12px;height:12px;flex:0 0 12px;border-radius:50%}
#view .list .grow{flex:1;min-width:0}
#view .list .grow>b{display:block;font-size:13px!important;font-weight:800;line-height:1.3}
#view .list .grow>small{display:block;font-size:10.5px!important;opacity:.8;line-height:1.45;margin-top:2px}
#view .list .amt{flex:0 0 auto;font-size:13.5px!important;font-weight:800;min-width:60px;text-align:left;direction:ltr;font-variant-numeric:tabular-nums}
#view .list .acts{display:flex;gap:5px}
#view .list .acts .mini,#view .list>.row>.mini{height:28px;padding:0 9px!important;font-size:12px!important;border-radius:9px!important}
#view .list .cta{display:flex;gap:5px}
#view .list .cbt{width:30px!important;height:30px!important;border-radius:9px!important;font-size:14px!important;display:flex;align-items:center;justify-content:center}
#view .list .badge,#view .list .tag{font-size:10px!important;padding:1px 7px!important}
#view .list .sseg{display:flex;gap:3px;background:rgba(148,163,184,.15);border-radius:10px;padding:2px}
#view .list .sseg button{border:0!important;background:transparent!important;color:inherit;border-radius:8px!important;padding:4px 8px!important;font-size:11px!important;box-shadow:none!important}
#view .list .sseg button.on{background:var(--card,#fff)!important;font-weight:800;box-shadow:0 1px 3px rgba(0,0,0,.12)!important}
#view .pcard{background:color-mix(in srgb,var(--card,#fff) 62%,transparent)!important;border:1px solid rgba(148,163,184,.22)!important;border-radius:16px!important;padding:10px 12px!important;margin:0 0 8px!important;box-shadow:0 6px 20px rgba(0,0,0,.1)!important}
#view .pcard b{font-size:13.5px}#view .pcard small{font-size:11px;opacity:.85}
#view .box{background:color-mix(in srgb,var(--card,#fff) 62%,transparent)!important;border:1px solid rgba(148,163,184,.22)!important;border-radius:16px!important;padding:10px 12px!important}
#view .ncard{border-radius:14px!important;padding:9px 11px!important;font-size:13px}
#view .ncard b{font-size:13px}#view .ncard small{font-size:11px}
#view .ptbl,#view .tbl{border-radius:14px!important;overflow:hidden;border:1px solid rgba(148,163,184,.22)!important;background:color-mix(in srgb,var(--card,#fff) 62%,transparent)!important}
#view .ptbl td,#view .ptbl th,#view .tbl td,#view .tbl th{font-size:12px!important;padding:7px 6px!important}
#view .tabs{display:flex!important;gap:3px!important;background:rgba(148,163,184,.15)!important;border-radius:12px!important;padding:3px!important;margin:0 0 10px!important;overflow-x:auto;border:0!important}
#view .tabs button{flex:1 0 auto;border:0!important;background:transparent!important;color:inherit!important;border-radius:9px!important;padding:7px 10px!important;font:inherit;font-size:12px!important;white-space:nowrap;box-shadow:none!important}
#view .tabs button.on{background:var(--card,#fff)!important;font-weight:800;box-shadow:0 1px 4px rgba(0,0,0,.12)!important}
#view .etbar{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 10px}
#view .etbar .mini{height:32px;padding:0 11px!important;font-size:12px!important;border-radius:10px!important}
#view .ccard{border-radius:16px!important;margin-bottom:10px!important}
#view .nempty{background:color-mix(in srgb,var(--card,#fff) 62%,transparent);border:1px dashed rgba(148,163,184,.3);border-radius:16px;padding:20px!important;font-size:13px}
#view .empty{font-size:12.5px;opacity:.65;text-align:center}
#view .fonts,#view .themes{gap:8px!important}
`;document.head.appendChild(s)})();
/* ========== تصليح: البند المجمّع ========== */
(()=>{const s=document.createElement('style');s.textContent=`
#view .list>details,#view details.grp .list>details.xgr{display:block!important;padding:0 9px!important}
#view .list>details>summary,#view details.grp details.xgr>summary{display:flex!important;align-items:center;gap:8px!important;padding:7px 0!important;min-height:46px!important;list-style:none;cursor:pointer}
#view details.xgr>summary::-webkit-details-marker{display:none}
#view details.xgr[open]>summary{border-bottom:1px dashed rgba(148,163,184,.3)!important;margin-bottom:6px!important}
#view details.xgr>.xb{display:block!important;margin:0 0 8px!important;padding:6px!important;background:color-mix(in srgb,var(--p) 5%,var(--card,#fff))!important;border:1px solid color-mix(in srgb,var(--p) 18%,transparent)!important;border-radius:12px!important}
`;document.head.appendChild(s)})();
/* ========== الأسامي كاملة من غير قص في كل الشاشات ========== */
(()=>{const s=document.createElement('style');s.textContent=`
#view details.grp .grow>b,#view .list .grow>b,#view details.xr>summary .grow>b{white-space:normal!important;overflow:visible!important;text-overflow:clip!important;word-break:break-word;line-height:1.35!important}
`;document.head.appendChild(s)})();

/* ========== الخطوط والكلام في البرنامج كله: أوضح وأتقل ========== */
(()=>{const s=document.createElement('style');s.textContent=`
html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}
:root{--tx2:#475569}
body.dark{--tx2:#cbd5e1}
#view .list small,#view details.grp small,#view .pcard small,#view .ncard small,#view .muted,#view .tile small,#sheet small,#sheet .muted,#sheet label,.xpo small,.xb .kv>span,.xforig .kv>span{color:var(--tx2)!important;opacity:1!important;font-weight:600!important}
#view .list .grow>b,#view details.grp .grow>b,#view .pcard b,#sheet .kv>b,.xb .kv>b{font-weight:800!important}
#view .xcs{display:flex!important;flex-wrap:wrap;gap:4px!important;margin-top:4px!important}
#view .xc2{display:inline-flex!important;align-items:center;gap:4px;padding:2px 7px!important;border-radius:7px!important;font-size:11px!important;font-weight:600!important;line-height:1.5!important;background:rgba(148,163,184,.16)!important;border:1px solid rgba(148,163,184,.26)!important;color:var(--tx2)!important;white-space:normal!important;max-width:100%!important;overflow:visible!important;text-overflow:clip!important;word-break:break-word}
#view .xc2 .xlogo.s,#view .xc2 .xic.s{width:15px!important;height:15px!important;flex:0 0 15px!important}
#view .xl2{display:flex;align-items:center;gap:10px;padding:9px 10px;margin:0 0 6px;border-radius:11px;background:rgba(148,163,184,.09);border:1px solid rgba(148,163,184,.15);cursor:pointer}
#view .xl2:last-child{margin-bottom:0}
#view .xl2 .grow{flex:1;min-width:0}
#view .xl2 .grow>b{display:block;font-size:12.5px;font-weight:800;line-height:1.35;word-break:break-word}
#view .xl2 .xcs{margin-top:4px!important}
#view .xl2 .xa{flex:0 0 auto;font-size:13.5px;font-weight:800;direction:ltr;min-width:46px;text-align:left}
`;document.head.appendChild(s)})();
/* ========== البوكسات الصغيرة ملونة حسب النوع ========== */
(()=>{const s=document.createElement('style');s.textContent=`
:root{--tx1:#0f172a}body.dark{--tx1:#ffffff}
#view .xc2.xcc{background:color-mix(in srgb,var(--cc) 16%,transparent)!important;border-color:color-mix(in srgb,var(--cc) 48%,transparent)!important;color:color-mix(in srgb,var(--cc) 68%,var(--tx1))!important;font-weight:700!important}
#view details.grp .grow>b,#view .list .grow>b{font-size:13px!important}
`;document.head.appendChild(s)})();
function xC(h,c){return[h,c||'']}
function xChips(a){return `<small class="xcs" data-ch="1">${a.map(x=>{const[h,c]=Array.isArray(x)?x:[x,''];return `<span class="xc2${c?' xcc':''}"${c?` style="--cc:${c}"`:''}>${h}</span>`}).join('')}</small>`}
function xMeta(t,fee){
  const m=M(t.method),out=[xC('📅 '+dmy(t.date))];
  if(m)out.push(xC(xMIc(m,1)+' '+esc(m.name)+(xIsCr(t.method)?' 💳':''),m.color||'#2563eb'));
  if(t.via&&!fee)out.push(xC(xViaIc(t.via,1)+' '+esc(viaTxt(t.via)),(XVIA[t.via]||[])[1]));
  if(t.ipay&&t.ipay.v)out.push(xC('← <bdi>'+esc(t.ipay.v)+'</bdi>','#7c3aed'));
  if((t.files||[]).length&&!XRC.has(t.id))out.push(xC('📎 '+t.files.length));
  return out;
}
function xFeeName(n){n=String(n||'');const p=XFEEN+' · ';return n.indexOf(p)===0?n.slice(p.length):''}
/* البوكسات اللي بتتعمل من الكلام (التحصيلات والثابت): لون حسب معناها */
function xChipColor(tx){
  if(/متأخر/.test(tx))return '#dc2626';
  if(/^(محصّل|مدفوع)\s/.test(tx))return '#16a34a';
  if(/غير محصّل|غير مدفوع|منتظر/.test(tx))return '#ea580c';
  if(/بينزل لوحده/.test(tx))return '#2563eb';
  if(/اتلغى|سابق/.test(tx))return '#64748b';
  const v=VIA.find(x=>x[1]&&tx===x[1]);if(v&&XVIA[v[0]])return XVIA[v[0]][1];
  const m=S.methods.find(x=>tx===x.name||tx===x.name+' 💳');if(m)return m.color||'#2563eb';
  return '';
}
function xChipify(){
  document.querySelectorAll('#view details.grp .grow>small:not([data-ch]),#view .list .grow>small:not([data-ch])').forEach(s=>{
    s.setAttribute('data-ch','1');if(s.closest('.xb'))return;
    const parts=s.innerHTML.split(' · ').map(x=>x.trim()).filter(Boolean);
    if(parts.length<2&&!/\d{2}\/\d{2}\/\d{4}/.test(s.textContent))return;
    s.innerHTML=parts.map(p=>{const tx=p.replace(/<[^>]+>/g,'').trim(),c=xChipColor(tx);return `<span class="xc2${c?' xcc':''}"${c?` style="--cc:${c}"`:''}>${/^\d{2}\/\d{2}\/\d{4}$/.test(tx)?'📅 ':''}${p}</span>`}).join('');
    s.classList.add('xcs');
  });
}
try{const _rCh=render;render=function(){const r=_rCh.apply(this,arguments);try{xChipify()}catch(e){}return r}}catch(e){}
setTimeout(()=>{try{xChipify()}catch(e){}},600);

/* ========== لما تفتح حاجة، اللي قبلها تتقفل لوحدها ========== */
document.addEventListener('toggle',e=>{
  const d=e.target;if(!d||d.tagName!=='DETAILS'||!d.open||!d.closest('#view'))return;
  const lvl=d.classList.contains('grp')?'details.grp':d.classList.contains('xr')?'details.xr':null;if(!lvl)return;
  document.querySelectorAll('#view '+lvl+'[open]').forEach(o=>{if(o!==d&&!o.contains(d)&&!d.contains(o))o.open=false});
  setTimeout(()=>{try{d.scrollIntoView({block:'nearest',behavior:'smooth'})}catch(err){}},60);
},true);
/* ========== تصليح الرسم لما قايمة تتقفل: شكل زجاجي ثابت بدل blur الحقيقي في القوايم ========== */
(()=>{const s=document.createElement('style');s.textContent=`
#view details.grp,#view .list,#view .pcard,#view .box,#view .nempty,#view .ptbl,#view .tbl{backdrop-filter:none!important;-webkit-backdrop-filter:none!important;background:linear-gradient(180deg,color-mix(in srgb,var(--card,#fff) 88%,rgba(255,255,255,.06)),color-mix(in srgb,var(--card,#fff) 76%,transparent))!important;transform:translateZ(0)}
#view details.grp .ckx,#view details.grp .list>.row,#view details.grp .list>details.xgr,#view .list>.row,#view .list>a.row,#view .list>.ckx,#view .list>details{backdrop-filter:none!important;-webkit-backdrop-filter:none!important;background:linear-gradient(180deg,color-mix(in srgb,var(--p) 7%,rgba(255,255,255,.05)),color-mix(in srgb,var(--p) 3%,rgba(255,255,255,.02)))!important}
#view details.grp>summary{position:relative;z-index:1}
`;document.head.appendChild(s)})();
/* بعد ما اللي قبلها يتقفل: استنى الرسم يخلص وبعدين روح على اللي اتفتح */
document.addEventListener('toggle',e=>{
  const d=e.target;if(!d||d.tagName!=='DETAILS'||!d.open||!d.closest('#view'))return;
  if(!d.classList.contains('grp')&&!d.classList.contains('xr'))return;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    document.querySelectorAll('#view details.grp,#view details.xr').forEach(x=>{x.style.transform='translateZ(0)';void x.offsetHeight;x.style.transform=''});
    try{const r=d.getBoundingClientRect();if(r.top<70||r.top>innerHeight-120)d.scrollIntoView({block:'start',behavior:'auto'});scrollBy(0,-70)}catch(err){}
  }));
},true);
/* ========== المصروف بيفتح تحته زي التحصيل بالظبط + عمليات البند مترقمة ========== */
function xExpRow(t){
  const r=XRC.has(t.id),lo=t.loan?r2(t.amount-xLoanPaid(t)):0,fee=!!t.feeOf,o=fee&&S.txs.find(x=>x.id===t.feeOf),meta=xMeta(t,fee),cn=C(t.cat)?.name||'—';
  if(o)meta.splice(1,0,xC('↩ لـ '+esc(C(o.cat)?.name||'—'),'#0d9488'),xC('💰 '+num(o.amount),'#ca8a04'));
  else if(t.note&&!/^🧾/.test(t.note))meta.push(xC('📝 '+esc(t.note)));
  return `<details class="xr"><summary><span class="ic" style="background:var(--soft)">${r?'🧾':t.loan?'🤝':'💸'}</span><div class="grow"><b>${xFeeName(cn)?'مصاريف إنستاباي':esc(cn)}${t.loan?` <span class="tag ${lo>0?'wait':'ok'}">${lo>0?'سلفة':'اتسددت'}</span>`:''}</b>${xChips(meta)}</div><div class="amt exp">${num(t.amount)}</div></summary><div class="xb">${txBody(t)}</div></details>`;
}
function xLine(t,inc,i){
  const fee=!!t.feeOf,o=fee&&S.txs.find(x=>x.id===t.feeOf),meta=xMeta(t,fee);
  let ti='';
  if(fee){ti=o?'↩ لـ '+esc(C(o.cat)?.name||'—'):'↩ مصاريف تحويل';if(o)meta.splice(1,0,xC('💰 '+num(o.amount),'#ca8a04'))}
  else if(t.note&&!/^🧾/.test(t.note))ti=esc(t.note);
  return `<details class="xr xl3"><summary><span class="xn">${(i||0)+1}</span><div class="grow">${ti?`<b>${ti}</b>`:''}${xChips(meta)}</div><b class="xa ${inc?'pos':'neg'}">${num(t.amount)}</b></summary><div class="xb">${txBody(t)}</div></details>`;
}
function xGroup(txs,kind){
  const g={};txs.forEach(t=>{(g[t.cat]=g[t.cat]||[]).push(t)});
  return Object.entries(g).map(([id,ts])=>{
    ts.sort(byDesc);const a=ts.reduce((s,t)=>s+t.amount,0),d=ts[0].date+String(ts[0].created||0).padStart(15,'0'),n=C(id)?.name||'';
    if(ts.length===1)return{h:kind==='exp'?xExpRow(ts[0]):txRow(ts[0]),a,d,n};
    const c=C(id),inc=kind==='inc',bank=xFeeName(n),bm=bank&&S.methods.find(m=>m.name===bank);
    const chips=[];if(bank)chips.push(xC((bm?xMIc(bm,1)+' ':'🏦 ')+esc(bank),bm&&bm.color||'#2563eb'));
    chips.push(xC(ts.length+' عمليات'),xC('آخر مرة '+dmy(ts[0].date)));
    const h=`<details class="xr xgr"><summary><span class="ic" style="background:var(--soft)">${bank?'💸':c&&c.fixed?'📌':inc?'💵':'🛒'}</span><div class="grow"><b>${bank?'مصاريف إنستاباي':esc(n||'—')}</b>${xChips(chips)}</div><div class="amt ${inc?'inc':'exp'}">${num(a)}</div></summary><div class="xb">${ts.map((t,i)=>xLine(t,inc,i)).join('')}</div></details>`;
    return{h,a,d,n};
  });
}
/* المصروفات والتحصيلات بتجمّع البند المتكرر */
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

/* ========== بوكس التفاصيل الصغير (مربعات جنب بعض) في كل الشاشات ========== */
(()=>{const s=document.createElement('style');s.textContent=`
#view details.xr:not(.xgr)>.xb{display:grid!important;grid-template-columns:1fr 1fr;gap:5px!important;padding:6px!important;margin:2px 0 8px!important;border-radius:12px!important}
#view details.xr:not(.xgr)>.xb>.kv{display:flex!important;flex-direction:column;align-items:flex-start!important;justify-content:center;gap:2px!important;padding:6px 8px!important;margin:0!important;border:1px solid rgba(148,163,184,.18)!important;border-radius:9px!important;background:rgba(148,163,184,.07);min-width:0}
#view details.xr:not(.xgr)>.xb>.kv>span{font-size:10.5px!important}
#view details.xr:not(.xgr)>.xb>.kv>b{font-size:12.5px!important;justify-content:flex-start!important;text-align:right!important;max-width:100%}
#view details.xr:not(.xgr)>.xb>.kv.xbig{grid-column:1/-1;flex-direction:row!important;justify-content:space-between!important;align-items:center!important}
#view details.xr:not(.xgr)>.xb>.kv.xbig>b{font-size:14.5px!important}
#view details.xr:not(.xgr)>.xb>.etbar,#view details.xr:not(.xgr)>.xb>.files,#view details.xr:not(.xgr)>.xb>:not(.kv){grid-column:1/-1}
#view details.xr:not(.xgr)>.xb .etbar{margin:2px 0 0!important;gap:6px!important}
#view details.xr:not(.xgr)>.xb .etbar .mini{height:32px;padding:0 8px!important;font-size:12px!important;border-radius:9px!important}
#view details.xr:not(.xgr)>.xb .xlogo.s,#view details.xr:not(.xgr)>.xb .xic.s{width:16px!important;height:16px!important;flex-basis:16px!important}
#view details.xr:not(.xgr)>.xb .files .fth{width:48px!important;height:48px!important}
#view details.xgr>.xb{display:block!important}
#view .xl3{margin:0 0 6px!important;border-radius:11px!important;background:rgba(148,163,184,.09)!important;border:1px solid rgba(148,163,184,.16)!important;padding:0 9px!important}
#view .xl3:last-child{margin-bottom:0!important}
#view .xl3>summary{display:flex!important;align-items:center;gap:8px!important;padding:8px 0!important;min-height:0!important;list-style:none;cursor:pointer}
#view .xl3>summary::-webkit-details-marker{display:none}
#view .xn{width:22px;height:22px;flex:0 0 22px;border-radius:50%;background:var(--p);color:#fff;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center}
#view .xl3 .grow{flex:1;min-width:0}
#view .xl3 .grow>b{display:block;font-size:12.5px!important;font-weight:800}
#view .xl3 .xa{flex:0 0 auto;font-size:13.5px;font-weight:800;direction:ltr;min-width:46px;text-align:left}
`;document.head.appendChild(s)})();
/* ========== الأنواع والطرق: تعديل وإضافة أنواع الحسابات وطرق الدفع ========== */
const XT0={...TYPES},XV0=VIA.map(x=>x.slice()),XVIA0={};Object.entries(XVIA).forEach(([k,v])=>XVIA0[k]=v.slice());
function xTCfg(){const c=S.settings.xt||(S.settings.xt={});c.t=c.t||{};c.v=c.v||{};return c}
function xApplyTypes(){
  const cfg=xTCfg();
  Object.keys(TYPES).forEach(k=>delete TYPES[k]);Object.assign(TYPES,XT0);
  Object.entries(cfg.t).forEach(([k,o])=>{if(o&&o.n)TYPES[k]=o.n});
  VIA.length=0;XV0.forEach(([k,l])=>VIA.push([k,(k&&cfg.v[k]&&cfg.v[k].n)||l]));
  Object.entries(cfg.v).forEach(([k,o])=>{if(o&&o.x&&o.n)VIA.push([k,o.n])});
  Object.keys(XVIA).forEach(k=>{if(!XVIA0[k])delete XVIA[k]});Object.entries(XVIA0).forEach(([k,v])=>XVIA[k]=v.slice());
  [...Object.entries(cfg.t),...Object.entries(cfg.v)].forEach(([k,o])=>{if(!o)return;const b=XVIA[k]||['🔹','#475569'];XVIA[k]=[o.ic||b[0],o.c||b[1]]});
}
function spTypes(){
  const cfg=xTCfg();
  const row=(kind,k,n)=>{const ic=XVIA[k]||['🔹','#475569'],cu=cfg[kind][k]&&cfg[kind][k].x;
    return `<div class="row" onclick="xTypeForm('${kind}','${k}')"><span class="ic" style="background:${ic[1]};color:#fff;overflow:hidden">${XLG[k]?`<img src="${XLG[k]}" style="width:100%;height:100%;object-fit:contain;background:#fff">`:ic[0]}</span><div class="grow"><b>${esc(n)}</b><small>${cu?'من عندك':'أساسي'}${cfg[kind][k]&&!cu?' · متعدّل':''}</small></div><span class="mini">✏️</span></div>`};
  return `<p class="muted">تقدر تغيّر اسم أي نوع أو طريقة، وأيقونتها ولونها، أو تضيف جديد.</p>
  <h3>🏦 أنواع الحسابات</h3><div class="list">${Object.entries(TYPES).map(([k,n])=>row('t',k,n)).join('')}</div>
  <button class="btn ghost" onclick="xTypeForm('t')">+ نوع حساب جديد</button>
  <h3>💳 طرق الدفع</h3><div class="list">${VIA.filter(x=>x[0]).map(([k,n])=>row('v',k,n)).join('')}</div>
  <button class="btn ghost" onclick="xTypeForm('v')">+ طريقة دفع جديدة</button>`;
}
function xTypeForm(kind,key){
  const cfg=xTCfg(),o=key?(cfg[kind][key]||{}):{},cu=!key||o.x;
  const name=key?(kind==='t'?TYPES[key]:viaTxt(key)):'',ic=key?(XVIA[key]||['🔹'])[0]:'🔹',col=key?(XVIA[key]||['','#475569'])[1]:COLORS[S.methods.length%COLORS.length];
  sheet(`<h2>${key?'✏️ تعديل':'➕ إضافة'} ${kind==='t'?'نوع حساب':'طريقة دفع'}</h2>
  <label>الاسم<input id="xt-n" value="${esc(name)}" placeholder="${kind==='t'?'مثلاً: شهادات، ذهب':'مثلاً: Valu، فوري، Vodafone Cash'}"></label>
  <label>الأيقونة (إيموجي)<input id="xt-i" value="${esc(ic)}" maxlength="6"></label>
  <div class="fl">اللون</div>
  <div class="colors">${COLORS.map(c=>`<button type="button" class="sw ${c===col?'on':''}" style="background:${c}" onclick="document.querySelectorAll('#sheet .sw').forEach(x=>x.classList.remove('on'));this.classList.add('on');$('#xt-c').value='${c}'"></button>`).join('')}</div>
  <input type="hidden" id="xt-c" value="${col}">
  <button class="btn" onclick="xTypeSave('${kind}','${key||''}')">حفظ</button>
  ${key&&cu?`<button class="btn ghost danger" onclick="xTypeDel('${kind}','${key}')">🗑 حذف</button>`:''}
  ${key&&!cu&&cfg[kind][key]?`<button class="btn ghost" onclick="xTypeReset('${kind}','${key}')">↺ رجّع الأصلي</button>`:''}`);
}
function xTypeSave(kind,key){
  const n=($('#xt-n').value||'').trim(),ic=($('#xt-i').value||'').trim(),c=$('#xt-c').value;if(!n)return toast('اكتب الاسم');
  const box=xTCfg()[kind];let k=key;if(!k){k='c'+uid();box[k]={x:1}}
  box[k]=Object.assign(box[k]||{},{n,ic,c});
  save();xApplyTypes();closeSheet();render();toast('اتحفظ ✓');
}
async function xTypeReset(kind,key){delete xTCfg()[kind][key];save();xApplyTypes();closeSheet();render();toast('رجع الأصلي ✓')}
async function xTypeDel(kind,key){
  const used=kind==='t'?S.methods.some(m=>m.type===key):(S.txs.some(t=>t.via===key)||S.cats.some(c=>c.via===key)||S.plans.some(p=>p.via===key));
  if(used)return say('مينفعش تحذفه','مستخدم في حسابات أو عمليات. تقدر تغيّر اسمه بدل الحذف.','🏷️');
  if(!await ask('حذف؟',kind==='t'?TYPES[key]:viaTxt(key),{danger:true,icon:'🗑',ok:'حذف'}))return;
  delete xTCfg()[kind][key];save();xApplyTypes();closeSheet();render();toast('اتحذف');
}
function vSettings(){
  const sp=SETS.find(x=>x[0]===stab);
  if(!sp)return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>⚙️ ${esc(L('settings'))}</h3></div><div class="rgrid">${SETS.map(([k,ic,l])=>`<button class="rbtn" onclick="stab='${k}';render();scrollTo(0,0)"><span>${ic}</span>${l}</button>`).join('')}</div>`;
  const P={name:spName,theme:spTheme,font:spFont,home:spHome,labels:spLabels,notif:spNotif,sec:spSec,ocr:spOcr,drive:spDrive,data:spData,demo:spDemo,about:spAbout,fab:spFab,types:spTypes};
  return `<div class="phead"><button class="mini" onclick="stab='';render()">→</button><h3>${sp[1]} ${sp[2]}</h3></div>`+P[stab]();
}
/* في تعديل الحساب: زرار يوديك للأنواع */
try{const _emT=editMethod;editMethod=function(){const r=_emT.apply(this,arguments);try{const s=$('#m-type'),l=s&&s.closest('label');if(l&&!$('#xt-go')){const b=document.createElement('button');b.type='button';b.id='xt-go';b.className='mini';b.style.cssText='margin:-4px 0 10px';b.textContent='🏷️ عدّل أو ضيف أنواع';b.onclick=()=>{TXBACK=false;closeSheet();go('types')};l.after(b)}}catch(e){}return r}}catch(e){}
xApplyTypes();
try{const _rTy=render;render=function(){try{xApplyTypes()}catch(e){}return _rTy.apply(this,arguments)}}catch(e){}
/* ========== ألوان المستويات: البند ← العمليات (بنفسجي) ← البيانات (تركواز) ========== */
(()=>{const s=document.createElement('style');s.textContent=`
#view details.grp .list>details[open],#view details.grp .ckx:has(>details[open]){border-color:color-mix(in srgb,var(--p) 60%,transparent)!important;background:color-mix(in srgb,var(--p) 12%,rgba(255,255,255,.03))!important;box-shadow:0 0 0 1px color-mix(in srgb,var(--p) 30%,transparent),0 6px 18px rgba(0,0,0,.15)!important}
#view details.xgr>.xb{background:color-mix(in srgb,#6366f1 8%,transparent)!important;border:1px solid color-mix(in srgb,#6366f1 30%,transparent)!important;border-radius:12px!important;padding:6px!important}
#view details.xgr .xl3{background:color-mix(in srgb,#6366f1 16%,rgba(255,255,255,.02))!important;border:1px solid color-mix(in srgb,#6366f1 40%,transparent)!important}
#view details.xgr .xl3[open]{border-color:color-mix(in srgb,#6366f1 75%,transparent)!important;background:color-mix(in srgb,#6366f1 24%,rgba(255,255,255,.02))!important}
#view details.xgr .xl3 .xn{background:#6366f1!important}
#view details.xr:not(.xgr)>.xb{background:color-mix(in srgb,#14b8a6 10%,transparent)!important;border:1px solid color-mix(in srgb,#14b8a6 38%,transparent)!important}
#view details.xr:not(.xgr)>.xb>.kv{background:color-mix(in srgb,#14b8a6 12%,rgba(255,255,255,.03))!important;border-color:color-mix(in srgb,#14b8a6 30%,transparent)!important}
#view details.xr:not(.xgr)>.xb>.kv.xbig>b{color:#14b8a6!important}
#view.xfocus details.grp:not(.xon),#view.xfocus>.exh{display:none!important}
#view.xfocus details.grp.xon .list>*:not(.xon),#view.xfocus details.grp.xon>.ckx:not(.xon),#view.xfocus details.grp.xon>div[style*="padding"]{display:none!important}
#view details.xgr.xf2 .xl3:not(.xon2){display:block!important}
#view .xbk{display:block;width:calc(100% - 14px);margin:6px 7px 8px;padding:8px;border-radius:11px;border:1px dashed color-mix(in srgb,var(--p) 55%,transparent);background:color-mix(in srgb,var(--p) 10%,transparent);color:inherit;font:inherit;font-size:12.5px;font-weight:800;cursor:pointer}
`;document.head.appendChild(s)})();
function xFocusClear(){
  const v=$('#view');if(!v)return;v.classList.remove('xfocus');
  v.querySelectorAll('.xon').forEach(e=>e.classList.remove('xon'));v.querySelectorAll('.xbk').forEach(e=>e.remove());
}
document.addEventListener('toggle',e=>{
  const d=e.target;if(!d||d.tagName!=='DETAILS'||!d.closest('#view'))return;
  const v=$('#view');
  if(d.classList.contains('xl3')){
    const g=d.closest('details.xgr');if(!g)return;
    if(d.open){g.classList.add('xf2');g.querySelectorAll('.xon2').forEach(x=>x.classList.remove('xon2'));d.classList.add('xon2')}
    else if(!g.querySelector('.xl3[open]')){g.classList.remove('xf2');d.classList.remove('xon2')}
    return;
  }
  if(d.classList.contains('grp')){if(!d.open&&d.classList.contains('xon'))xFocusClear();return}
  if(!d.classList.contains('xr'))return;
  const grp=d.closest('details.grp');if(!grp)return;
  const item=d.closest('.ckx')||d;
  if(d.open){
    xFocusClear();v.classList.add('xfocus');grp.classList.add('xon');item.classList.add('xon');
    const b=document.createElement('button');b.type='button';b.className='xbk';b.textContent='↩ عرض كل العمليات';b.onclick=ev=>{ev.stopPropagation();d.open=false};
    (grp.querySelector(':scope>summary')||grp).after(b);
    setTimeout(()=>{try{grp.scrollIntoView({block:'start',behavior:'smooth'});setTimeout(()=>scrollBy(0,-70),250)}catch(err){}},80);
  }else if(item.classList.contains('xon'))xFocusClear();
},true);
try{const _rFo=render;render=function(){xFocusClear();return _rFo.apply(this,arguments)}}catch(e){}
try{const _hbF=handleBack;handleBack=function(){if($('#view')&&$('#view').classList.contains('xfocus')){const o=document.querySelector('#view .xon details.xr[open]:not(.xl3)')||document.querySelector('#view details.xr.xon[open]');if(o){const l=o.querySelector('.xl3[open]');if(l){l.open=false;return true}o.open=false}else xFocusClear();return true}return _hbF.apply(this,arguments)}}catch(e){}
/* ========== الرئيسية أصغر ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.hero{padding:8px 10px!important;margin-bottom:8px!important;border-radius:16px!important}
.hero .hero-t{font-size:11.5px!important;gap:5px!important;margin-bottom:0!important}
.hero .hero-t em{font-size:10px!important;padding:1px 7px!important}
.hero .hero-t .eye{font-size:13px!important}
.xhb{gap:5px!important;margin:6px 0 4px!important}
.xbx{padding:5px 6px!important;gap:3px!important;border-radius:11px!important}
.xbx>small{font-size:10px!important}
.xbx .xv{font-size:13px!important;min-height:26px!important;padding:2px 5px!important;border-radius:8px!important}
.xbx .xd{padding:3px!important;font-size:10px!important;border-radius:7px!important}
.hero .hnet{padding:3px 2px!important;font-size:11.5px!important}
.hero .hnet b{font-size:13.5px!important}
.xcr{font-size:10px!important;margin:3px 0 1px!important}
.dash{gap:6px!important;margin-bottom:8px!important}
.dash .tile{padding:6px 7px!important;border-radius:12px!important}
.dash .tile .tth{font-size:10.5px!important;gap:4px!important}
.dash .tile .ti{font-size:13px!important}
.dash .tile .tb{font-size:9.5px!important;padding:0 5px!important}
.dash .tile small{font-size:9.5px!important;line-height:1.3!important}
.tile .xv{font-size:12px!important;min-height:22px!important;padding:2px 5px!important;margin:4px 0 2px!important;border-radius:7px!important}
.tile .xd{font-size:9.5px!important;margin-top:3px!important;padding-top:2px!important}
#view>.warn{padding:6px 10px!important;font-size:12px!important;border-radius:10px!important;margin-bottom:8px!important}
#view .ptbl table td,#view .ptbl table th{font-size:11.5px!important;padding:5px 5px!important}
`;document.head.appendChild(s)})();
/* ========== 2.21.28: زرار ➕ + اللي مستنيك + البحث + الترتيب + فلاتر قبل التقرير + البنود + الكروت + الأنواع ========== */
(()=>{const s=document.createElement('style');s.textContent=`
body:has(#sheet.open) #xfw,body:has(.xpk) #xfw,body:has(.dlg) #xfw,body:has(#viewer.on) #xfw,body:has(#dlg.on) #xfw{display:none!important}
body #view#view [style*="display: none"],body #view#view [style*="display:none"]{display:none!important}
body[data-sdir=asc] #view .sortbar .sseg button.on::after{content:' ▲';font-size:9px}
body[data-sdir=desc] #view .sortbar .sseg button.on::after{content:' ▼';font-size:9px}
.rtb thead th{cursor:pointer;user-select:none}
.rtb thead th[data-sd=asc]::after{content:' ▲';font-size:9px}
.rtb thead th[data-sd=desc]::after{content:' ▼';font-size:9px}
.rtb.xw5 th.t{width:30%!important}
.rtb.xw5 td,.rtb.xw5 th{padding:8px 4px!important;font-size:11.5px!important}
.ccard .cc-t b,.ccard .cc-t span,.ccard .cc-n,.ccard .cc-b>span,.ccard .cc-b>b{background:rgba(15,23,42,.68)!important;color:#fff!important;text-shadow:0 1px 2px rgba(0,0,0,.5)!important;padding:2px 10px!important;border-radius:9px!important;width:fit-content;box-shadow:0 2px 8px rgba(0,0,0,.25);opacity:1!important}
.ccard .cc-n{align-self:flex-end;font-size:17px!important}
.ccard .cc-b{align-items:center;gap:6px}.ccard .cc-b>span{display:inline-flex;align-items:center;gap:4px}
#view .rbtn{position:relative}
.xrb{position:absolute;top:6px;left:6px;min-width:20px;height:20px;border-radius:10px;background:#dc2626;color:#fff;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;padding:0 5px;box-shadow:0 2px 6px rgba(220,38,38,.45)}
.xwl .row{border-inline-start:4px solid #d97706!important}.xwl .row.late{border-inline-start-color:#dc2626!important}
.xpre .rft{display:none!important}
.xpre .rfb{margin:0!important;padding:0!important;border:0!important}
.xpre .rfl{background:var(--soft2)!important;border:1px solid var(--bd)!important;box-shadow:none!important;color:var(--tx)!important;margin-bottom:10px!important}
.xpre .rfl .rfg>small{color:var(--mu)!important}
.xpre .rch{background:var(--card)!important;color:var(--tx)!important;border-color:var(--bd)!important}
.xpre .rch.on{background:var(--p)!important;color:#fff!important;border-color:var(--p)!important}
.xpre .rfl input,.xpre .rfl .xsel{background:var(--card)!important;color:var(--tx)!important;border-color:var(--bd)!important}
.xpre .rfs button{background:var(--card)!important;color:var(--tx)!important;border-color:var(--bd)!important}
.xpre .rfs b{color:var(--tx)!important}
.xpre .rfl .rchs{max-height:220px}
.xpre .xpgo{position:sticky;bottom:0;z-index:3;box-shadow:0 -6px 18px rgba(0,0,0,.25)!important}
.xrfe .rft em{white-space:normal!important;text-overflow:clip!important}
#view.xsq .gsr~:is(.mbar,.kpis,.sortbar,.prog,.warn,.etbar,.box,.ychips,.tabs),#view.xsq .gsr~.tiles:has(.tile:first-child.on),#view.xsq .brand{display:none!important}
#view.xsq{padding-bottom:75vh!important}
#view.xsq .gsr{position:sticky;top:var(--hdh,60px);z-index:4;box-shadow:0 6px 18px rgba(0,0,0,.3)}
#sheet .body.xsqb,#pwv .pwb.xsqb{padding-bottom:75vh!important}
#xfw .xfi.sm span{font-size:15px!important}#xfw .xfi.sm small{font-size:7.5px!important}
.xfl{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}
.xfc{background:linear-gradient(180deg,color-mix(in srgb,var(--card,#fff) 90%,rgba(255,255,255,.05)),color-mix(in srgb,var(--card,#fff) 78%,transparent));border:1px solid rgba(148,163,184,.22);border-radius:14px;padding:10px 12px;display:flex;flex-direction:column;gap:8px}
.xfc.hide{opacity:.6}
.xfh{display:flex;align-items:center;gap:10px}
.xfh b{flex:1;font-size:14px;min-width:0}
.xfic{width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:17px;color:#fff;flex:0 0 34px}
.xfmv{display:flex;gap:5px}.xfmv .mini{width:36px;height:30px;padding:0!important;font-size:12px!important}
.xfc>small{color:var(--tx2,#64748b);font-size:11.5px;line-height:1.5;font-weight:600}
.xfsg{display:grid;gap:4px;background:rgba(148,163,184,.15);border-radius:10px;padding:3px}
.xfsg button{border:0!important;background:transparent!important;color:inherit;border-radius:8px!important;padding:7px 4px!important;font:inherit;font-size:12.5px;box-shadow:none!important;cursor:pointer}
.xfsg button.on{background:var(--p)!important;color:#fff!important;font-weight:800}
`;document.head.appendChild(s)})();

/* زرار ➕ بيختفي لما أي حاجة تتفتح فوقه */
function xFabVis(){
  const w=$('#xfw');if(!w)return;
  const h=view==='reports'||$('#rv').classList.contains('on')||$('#lock').classList.contains('on')||$('#sheet').classList.contains('open')||!!document.querySelector('#pwv,#scan,.xpk,.dlg,#viewer.on,#dlg.on');
  w.classList.toggle('xh',h);if(h)w.classList.remove('on');
}

/* ========== زراير ➕: كل زراير البرنامج ========== */
Object.assign(XFC,{
  notif:['🔔','التنبيهات','openNotifs()','#f59e0b,#b45309',()=>unread().length,'لما يكون فيه تنبيهات جديدة'],
  types:['🏷️','الأنواع',"go('types')",'#2dd4bf,#0f766e',()=>0,''],
  more:['☰','المزيد',"go('more')",'#94a3b8,#475569',()=>0,''],
  newcat:['➕','بند جديد',"catForm(null,'exp')",'#22d3ee,#0e7490',()=>0,''],
  newplan:['🧾','قسط جديد','planNew()','#c084fc,#7e22ce',()=>0,''],
  newct:['👤','جهة اتصال','ctForm()','#e879f9,#a21caf',()=>0,''],
  newdoc:['📄','مستند جديد','docForm()','#60a5fa,#1e40af',()=>0,''],
  bk:['💾','نسخة احتياطية','driveBackup()','#84cc16,#4d7c0f',()=>0,'']
});
var XWK=['inc','exp','inst','loans','annual','wallet','months','set'];
/* الدايرة ملفوفة: لفات جوه بعض، وكل لفة بتاخد على قد ما تشيل */
function xFabPos(n){
  const nav=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--navh'))||64,hd=(document.querySelector('header')||{}).offsetHeight||60;
  let best=null;
  for(let sz=50;sz>=30;sz-=4){
    const gap=sz+8,half=sz/2,mx=innerWidth-16-29-half-6,my=innerHeight-nav-16-29-hd-half-6,pos=[];let R=29+half+14,guard=0;
    while(pos.length<n&&guard++<30){
      if(R>Math.hypot(mx,my))break;
      const a0=R>mx?Math.acos(mx/R):0,a1=R>my?Math.asin(my/R):Math.PI/2;
      if(a1<=a0){R+=gap;continue}
      const cap=Math.floor((a1-a0)*R/gap)+1,m=Math.min(cap,n-pos.length);
      for(let j=0;j<m;j++){const a=m===1?(a0+a1)/2:a1-j*(a1-a0)/(m-1);pos.push([-Math.round(Math.cos(a)*R),-Math.round(Math.sin(a)*R)])}
      R+=gap;
    }
    best={pos,sz};if(pos.length>=n)return best;
  }
  while(best.pos.length<n)best.pos.push(best.pos[best.pos.length-1]||[0,-80]);
  return best;
}
function xFabBuild(){
  const w=$('#xfw');if(!w)return;const ks=xFabList(),box=w.querySelector('.xfis'),n=ks.length;
  const{pos,sz}=xFabPos(n),off=(58-sz)/2;
  box.innerHTML=ks.map((k,i)=>{const[ic,l,,col]=XFC[k],c=xFabRel(k);
    return `<button type="button" class="xfi ${sz<46?'sm':''}" style="--x:${pos[i][0]}px;--y:${pos[i][1]}px;--d:${i*25}ms;width:${sz}px !important;height:${sz}px !important;left:${off}px !important;top:${off}px !important;background:linear-gradient(135deg,${col})" onclick="xFab(0);xFabGo('${k}')"><span>${ic}</span><small>${esc(l)}</small>${c?`<b class="xfb">${c}</b>`:''}</button>`}).join('');
  if(!n)toast('مفيش زراير · ظبطها من ⚙️ الإعدادات ← أزرار ➕');
}
function xFabGo(k){if(XWK.includes(k)&&xFabRel(k)>0)return xWait(k);try{Function(XFC[k][2])()}catch(e){}}
function xWait(k){
  const[ic,l]=XFC[k],td=today(),R=[];let js=XFC[k][2],main=`${ic} ${esc(l)}`;
  const row=(i,t,s,amt,click,late)=>R.push(`<div class="row ${late?'late':''}" onclick="${click}"><span class="ic" style="background:${late?'#fee2e2':'#fef3c7'}">${i}</span><div class="grow"><b>${esc(t)}</b><small class="${late?'neg':''}">${s}</small></div>${amt!=null?`<div class="amt">${num(amt)}</div>`:''}</div>`);
  if(k==='inc'){main='💰 تحصيل جديد';
    pendAll().sort((a,b)=>a.d.localeCompare(b.d)).forEach(x=>{const late=x.d<td;
      if(x.o)row('📌',x.n,`${fdate(x.d)} · ${late?'⚠️ متأخر':'غير محصّل'}`,x.a,`occSheet('${x.o.r.id}',${x.o.k})`,late);
      else row('⏳',x.n,`${fdate(x.d)} · ${late?'⚠️ متأخر':'غير محصّل'}${x.t.post?' · اتأجّل '+x.t.post+' مرة':''}`,x.a,`editTx('${x.t.id}')`,late)})}
  else if(k==='exp'){main='💸 مصروف جديد';
    dueList(NKM,'','exp').filter(o=>o.s.st==='wait'&&o.date<td).forEach(o=>row('📌',o.r.name,`${fdate(o.date)} · ⚠️ متأخر`,o.amt,`occSheet('${o.r.id}',${o.k})`,true));
    pendTx('exp',NKM).forEach(t=>{const late=t.date<td;row('⏳',C(t.cat)?.name||'—',`${fdate(t.date)} · ${late?'⚠️ متأخر':'غير مدفوع'}`,t.amount,`editTx('${t.id}')`,late)})}
  else if(k==='inst')instDue().forEach(o=>row('🏦',o.p.name,`${fdate(o.it.due)} · ${o.left<0?'⚠️ ':''}${leftTxt(o.left)}`,+o.it.amount||0,`payStart('${o.p.id}','${o.it.id}')`,o.left<0));
  else if(k==='loans')xLoans().filter(t=>t.loan.due&&daysBetween(t.loan.due,td)<=3&&t.amount-xLoanPaid(t)>0).forEach(t=>{const left=daysBetween(t.loan.due,td);row('🤝',C(t.cat)?.name||'—',`السداد ${fdate(t.loan.due)} · ${left<0?'⚠️ ':''}${leftTxt(left)}`,r2(t.amount-xLoanPaid(t)),`xLoanPay('${t.id}')`,left<0)});
  else if(k==='annual')annualDue().forEach(o=>row('📆',o.r.name,`${fdate(o.d)} · ${o.left<0?'⚠️ ':''}${leftTxt(o.left)}`,o.amt,`occSheet('${o.r.id}',${o.k})`,o.left<0));
  else if(k==='wallet')renDue().forEach(x=>row((REN[x.r.type]||REN.other)[0],x.r.name,x.left<0?`⚠️ منتهي من ${-x.left} يوم`:`بينتهي ${fdate(x.r.exp)} · باقي ${x.left} يوم`,null,`renForm('${x.r.id}')`,x.left<0));
  else if(k==='months'){const pk=prevKey(NKM);row('🔓',mName(pk)+' لسه مفتوح','دوس هنا عشان تقفله وأرقامه تتثبت',null,`closeSheet();closeMonth('${pk}')`,false)}
  else if(k==='set'){const lb=localStorage.getItem(BKEY);row('💾','وقت النسخة الاحتياطية',lb?'آخر نسخة: '+lb:'لسه معملتش نسخة احتياطية',null,`closeSheet();driveBackup()`,!lb);main='💾 النسخ الاحتياطي';js="stab='data';go('settings')"}
  sheet(`<div class="phead"><h2>${ic} ${esc(l)} · مستنيك</h2><span class="badge late">${R.length}</span></div>
  <p class="muted">دي الحاجات اللي واقفة ومحتاجة منك حاجة. دوس على أي واحدة عشان تخلّصها</p>
  ${R.length?`<div class="list xwl">${R.join('')}</div>`:'<div class="nempty"><div>✅</div><b>مفيش حاجة مستنياك</b></div>'}
  <button class="btn" onclick="closeSheet();${js.replace(/"/g,'&quot;')}">${main}</button>`);
}
/* الإعدادات ← أزرار ➕ : كل زرار كارت */
function spFab(){
  const f=xFabCfg();
  return `<p class="muted"><b>يظهر:</b> دايماً جوه ➕ · <b>تلقائي:</b> يظهر لوحده لما يكون فيه حاجة مستنياك · <b>مخفي:</b> مبيظهرش. ورتّبهم بـ ▲▼</p>
  <div class="xfl">${f.order.map((k,i)=>{const c=XFC[k],n=xFabRel(k),au=!!c[5];let m=xFabMode(k);if(!au&&m==='auto')m='hide';
    const ms=MODES.filter(x=>au||x[0]!=='auto');
    return `<div class="xfc ${m}"><div class="xfh"><span class="xfic" style="background:linear-gradient(135deg,${c[3]})">${c[0]}</span><b>${esc(c[1])}</b>${au&&n?`<span class="badge late">${n}</span>`:''}<div class="xfmv"><button class="mini" onclick="xFabMove(${i},-1)" ${i?'':'disabled'}>▲</button><button class="mini" onclick="xFabMove(${i},1)" ${i<f.order.length-1?'':'disabled'}>▼</button></div></div>
    ${au?`<small>⚡ تلقائي: ${esc(c[5])}${n?' · دلوقتي '+n:''}</small>`:''}
    <div class="xfsg" style="grid-template-columns:repeat(${ms.length},1fr)">${ms.map(([v,l])=>`<button class="${m===v?'on':''}" onclick="xFabSet('${k}','${v}')">${l}</button>`).join('')}</div></div>`}).join('')}</div>
  <button class="btn ghost" onclick="xFabReset()">↺ رجّع الأصلي</button>`;
}
/* الأرقام جوه شاشة المزيد والإعدادات */
function xBadges(){
  const v=$('#view');if(!v)return;
  const add=(sel,n)=>{const b=v.querySelector(sel);if(b&&n&&!b.querySelector('.xrb'))b.insertAdjacentHTML('beforeend',`<b class="xrb">${n}</b>`)};
  if(view==='more')[['inst','inst'],['loans','loans'],['annual','annual'],['wallet','wallet'],['months','months'],['set','settings']].forEach(([k,g])=>add(`.rbtn[onclick*="go('${g}')"]`,xFabRel(k)));
  if(view==='settings'&&!stab)add(`.rbtn[onclick*="stab='data'"]`,xFabRel('set'));
}

/* ========== البحث في البرنامج كله: الخانة بتطلع فوق والنتايج قدامك ========== */
var XSQS='#view .gsr input,#pwv .pwsr input,#sheet .rfq,#sheet #pn-q,#sheet #f-cq';
function xSqTop(el){
  if(!el||!el.isConnected)return;
  if(el.closest('#view')){
    const g=el.closest('.gsr')||el,hd=(document.querySelector('header')||{}).offsetHeight||0,t=g.getBoundingClientRect().top;
    if(Math.abs(t-hd-6)>4)scrollTo({top:Math.max(0,t+scrollY-hd-6)});
  }else{
    const box=el.closest('#sheet .body,#pwv .pwb');if(!box)return;
    const lab=el.closest('label,.pwsr')||el,bar=box.querySelector('.shbar'),off=bar?bar.offsetHeight:0;
    box.scrollTop+=lab.getBoundingClientRect().top-box.getBoundingClientRect().top-off-6;
  }
}
function xSqSync(el){
  const on=!!(el.value||'').trim();
  if(el.closest('#view'))$('#view').classList.toggle('xsq',on);
  else{const box=el.closest('#sheet .body,#pwv .pwb');if(box)box.classList.toggle('xsqb',on)}
  if(on)requestAnimationFrame(()=>requestAnimationFrame(()=>xSqTop(el)));
}
document.addEventListener('input',e=>{const el=e.target;if(el&&el.matches&&el.matches(XSQS))xSqSync(el)},true);
document.addEventListener('focusin',e=>{const el=e.target;if(el&&el.matches&&el.matches(XSQS)&&(el.value||'').trim())setTimeout(()=>xSqTop(el),380)});
if(window.visualViewport)visualViewport.addEventListener('resize',()=>{const a=document.activeElement;if(a&&a.matches&&a.matches(XSQS)&&(a.value||'').trim())setTimeout(()=>xSqTop(a),60)});
try{const _clS=closeSheet;closeSheet=function(){const b=$('#sheet .body');if(b)b.classList.remove('xsqb');return _clS.apply(this,arguments)}}catch(e){}

/* ========== البحث بالمبلغ في كل الشاشات: 50 · >500 · <100 · >=500 · 100-500 ========== */
function xqn(s){return qn(String(s??'').replace(/(\d)[,٬](?=\d)/g,'$1'))}
function xQParse(raw){
  const s=latD(String(raw||'')).replace(/[,٬\s]/g,'').replace(/≥/g,'>=').replace(/≤/g,'<=');let m;
  if((m=s.match(/^(\d+(?:\.\d+)?)-(\d+(?:\.\d+)?)$/)))return{op:'rng',a:Math.min(+m[1],+m[2]),b:Math.max(+m[1],+m[2])};
  if((m=s.match(/^(>=|<=|>|<|=)(\d+(?:\.\d+)?)$/)))return{op:m[1],a:+m[2]};
  if((m=s.match(/^(\d+(?:\.\d+)?)(>=|<=|>|<|=)$/)))return{op:m[2],a:+m[1]};
  if(/^\d+(?:\.\d+)?$/.test(s))return{op:'has',a:+s};
  return null;
}
function xQOk(v,nq){const a=nq.a;return nq.op==='>'?v>a:nq.op==='<'?v<a:nq.op==='>='?v>=a:nq.op==='<='?v<=a:nq.op==='rng'?v>=a&&v<=nq.b:Math.abs(v-a)<.005}
/* لقوايم البيانات: بيرجّع اللي مبلغه مطابق، أو null لو الكلام مش مبلغ (أو رقم لوحده ومفيش مبلغ بيه بالظبط) */
function xNumPick(arr,amtsOf,raw){
  const nq=xQParse(raw);if(!nq)return null;
  const ok=x=>amtsOf(x).some(a=>xQOk(+a||0,nq));
  if(nq.op==='has'&&!arr.some(ok))return null;
  return arr.filter(ok);
}
function xAmts(el){return [...el.querySelectorAll('.amt,.xa,b.pos,b.neg')].map(x=>parseNum(x.textContent.replace(/[^\d.,٠-٩]/g,''))).filter(n=>!isNaN(n))}
addEventListener('toggle',e=>{const d=e.target;if(d&&d.matches&&d.matches('#view details.grp')&&qn(GQ[view]||''))e.stopPropagation()},true);
function gfApply(){
  const raw=GQ[view]||'',q=xqn(raw),v=$('#view');if(!v)return;
  const nq=xQParse(raw);
  v.classList.toggle('xsq',!!q);
  let test=el=>xqn(el.textContent).includes(q);
  if(nq&&nq.op!=='has')test=el=>xAmts(el).some(a=>xQOk(a,nq));
  else if(nq){const all=[...v.querySelectorAll('details.grp>.ckx,.list>*,.pcard')];if(all.some(el=>xAmts(el).some(a=>xQOk(a,nq))))test=el=>xAmts(el).some(a=>xQOk(a,nq))}
  v.querySelectorAll('details.grp').forEach(g=>{
    let n=0;
    g.querySelectorAll(':scope>.ckx,:scope>.list>*').forEach(r=>{const ok=!q||test(r);r.style.display=ok?'':'none';if(ok)n++});
    if(q){g.style.display=n?'':'none';if(n&&!g.open){g.dataset.xso='1';g.open=true}}
    else{g.style.display='';if(g.dataset.xso){delete g.dataset.xso;g.open=false}}
  });
  v.querySelectorAll('.list>*,.pcard').forEach(r=>{if(r.closest('details.grp'))return;r.style.display=!q||test(r)?'':'none'});
  if(q){const i=v.querySelector('.gsr input');if(i)requestAnimationFrame(()=>xSqTop(i))}
}
/* المشتروات: بالمحل أو الصنف أو المبلغ */
function bRender(){
  const el=$('#b-l');if(!el)return;
  const list=[...S.buys].sort(bSort);
  if(BSTORE){
    const l=list.filter(b=>bKey(b)===BSTORE),tot=l.reduce((a,b)=>a+(+b.total||0),0);
    el.innerHTML=kpis([['الإجمالي',fmt(tot),'exp'],['عدد الريسيتات',l.length,'net']])+`<div class="list">${l.map(buyRow).join('')}</div>`;
    return;
  }
  const q=normAr(latD(bq));
  if(q){
    const np=xNumPick(list,b=>[+b.total||0,...biOf(b).map(x=>+x.v||0),...biOf(b).map(x=>+x.p||0)],bq);
    const inv=np||list.filter(b=>normAr(b.store).includes(q)||biOf(b).some(x=>normAr(x.n).includes(q)));
    el.innerHTML=inv.length?`<div class="list">${inv.map(buyRow).join('')}</div>`:'<p class="empty">لا يوجد</p>';return;
  }
  if(!list.length){el.innerHTML='<div class="nempty"><div>🛒</div><b>لا يوجد مشتروات</b></div>';return}
  const m=new Map();
  list.forEach(b=>{const k=bKey(b);let g=m.get(k);if(!g){g={k,name:(C(b.catId)||{}).name||b.store,n:0,tot:0,last:b.date};m.set(k,g)}g.n++;g.tot+=(+b.total||0)});
  BGRP=[...m.values()];
  const mt=list.filter(b=>b.date.startsWith(NKM)).reduce((a,b)=>a+(+b.total||0),0);
  el.innerHTML=kpis([['مشتروات '+MONTHS[NM-1],fmt(mt),'exp'],['عدد المحلات',BGRP.length,'net']])
    +`<div class="list">${BGRP.map((g,i)=>`<div class="row" onclick="bOpen(${i})"><span class="ic" style="background:var(--soft)">🏪</span><div class="grow"><b>${esc(g.name)}</b><small>${g.n} ريسيت · آخر مرة ${fdate(g.last)}</small></div><div class="amt exp">${num(g.tot)}</div></div>`).join('')}</div>`;
}
/* مرفقات العمليات: بالبند أو التاريخ أو المبلغ */
function dtxHTML(){
  const q=qn(DTX.q);
  let l=attTx().filter(t=>(DTX.y==='all'||t.date.startsWith(DTX.y))&&(DTX.g==='all'||txGrp(t)===DTX.g));
  const np=xNumPick(l,t=>[t.amount],DTX.q);
  l=(np||l.filter(t=>!q||qn([C(t.cat)?.name,t.note,dmy(t.date),t.amount,num(t.amount),M(t.method)?.name,ATG[txGrp(t)][1]].join(' ')).includes(q))).sort(byDesc);
  if(!l.length)return '<p class="empty">لا يوجد</p>';
  const m=new Map();l.forEach(t=>{const k=t.cat||'—';if(!m.has(k))m.set(k,[]);m.get(k).push(t)});
  return [...m.entries()].sort((a,b)=>(C(a[0])?.name||'').localeCompare(C(b[0])?.name||'','ar')).map(([id,ts])=>{
    const c=C(id),sum=ts.reduce((a,t)=>a+t.amount,0),kind=ts[0].type;
    return `<div class="agh"><span>${ATG[txGrp(ts[0])][0]} <bdi>${esc(c?.name||'—')}</bdi></span><small>${ts.length} عملية · ${nm(num(sum))}</small></div>`+
      rtbl(['التاريخ|c','المبلغ|n','الملفات|c'],ts.map(t=>`<tr class="clk" onclick="editTx('${t.id}')">${cD(t.date)}${cN(num(t.amount),kind,t.note&&!/^🧾/.test(t.note)?esc(t.note):'')}${cC('📎 '+nm((t.files||[]).length))}</tr>`));
  }).join('');
}

/* الترتيب: دوسة = الأحدث / الأعلى، ودوسة تانية = بالعكس */
function xSortDef(k){return k==='name'?'asc':'desc'}
function sortList(arr){
  const m=sortMode(),f=(S.settings.sdir||xSortDef(m))==='asc'?1:-1;
  return [...arr].sort((x,y)=>(m==='amt'?(x.a||0)-(y.a||0):m==='date'?String(x.d).localeCompare(String(y.d)):String(x.n).localeCompare(String(y.n),'ar'))*f);
}
function setSort(k){
  if(sortMode()===k)S.settings.sdir=(S.settings.sdir||xSortDef(k))==='asc'?'desc':'asc';
  else{S.settings.sort=k;S.settings.sdir=xSortDef(k)}
  save();render();
  const d=S.settings.sdir;toast(k==='date'?(d==='desc'?'📅 الأحدث الأول':'📅 الأقدم الأول'):k==='amt'?(d==='desc'?'💰 الأعلى الأول':'💰 الأقل الأول'):(d==='asc'?'🔤 أ ← ي':'🔤 ي ← أ'));
}
/* أي جدول: دوس على العنوان يترتب بيه */
document.addEventListener('click',e=>{
  const th=e.target.closest('.rtb thead th');if(!th)return;
  const table=th.closest('table'),tb=table&&table.tBodies[0];if(!tb||tb.rows.length<2)return;
  const idx=[...th.parentNode.children].indexOf(th),dir=th.dataset.sd==='desc'?'asc':'desc';
  th.parentNode.querySelectorAll('th').forEach(x=>{delete x.dataset.sd});th.dataset.sd=dir;
  const val=td=>td?cellVal({textContent:(td.querySelector('b')||td).textContent}):'';
  [...tb.rows].sort((a,b)=>{const x=val(a.children[idx]),y=val(b.children[idx]);const c=typeof x==='number'&&typeof y==='number'?x-y:String(x).localeCompare(String(y),'ar');return dir==='asc'?c:-c}).forEach(r=>tb.appendChild(r));
});

/* البنود: التكرار عمود، ومن غير "سنوي" تحت كل بند، والبحث بالمبلغ */
function itRows(){
  const k=ITAB.k,G=IG[k],q=qn(ITAB.q),ex=k==='exp';
  const yr=id=>{const l=S.txs.filter(t=>t.cat===id&&!t.pend&&t.date.startsWith(NY+'-'));return[l.length,l.reduce((a,t)=>a+t.amount,0)]};
  const all=S.cats.filter(c=>c.kind===k&&(ITAB.off||c.active!==false));
  const np=xNumPick(all,c=>[+c.amount||0,+c.prevAmt||0,yr(c.id)[1]].filter(Boolean),ITAB.q);
  const base=np||all.filter(c=>!q||qn([c.name,c.amount||'',num(+c.amount||0),c.prevAmt||'',...(c.alias||[])].join(' ')).includes(q));
  const gs=(ITAB.g==='all'?Object.keys(G):[ITAB.g]).map(g=>({g,l:base.filter(c=>catGrp(c)===g).sort((a,b)=>a.name.localeCompare(b.name,'ar'))})).filter(x=>x.l.length);
  if(!gs.length)return '<p class="empty">لا يوجد</p>';
  return gs.map(({g,l})=>{
    const fx=g!=='var',evc=fx&&(g!=='ann'||l.some(c=>+c.every!==12));
    const rows=l.map(c=>{
      const sub=c.active===false?'⏸ موقوف':'';
      if(fx){const pc=c.prevAmt&&c.incPct!=null?c.incPct:null;
        return `<tr class="clk" onclick="catForm('${c.id}')">${cT(esc(c.name),sub)}${evc?cC(esc(everyTxt(c.every))):''}${cN(c.amount?num(+c.amount):'—',k)}${cN(c.prevAmt?num(c.prevAmt):'—','',c.amtAt?nm(dmy(c.amtAt)):'')}${ex?'':cN(pc!=null?(pc>=0?'▲ ':'▼ ')+Math.abs(pc)+'%':'—',pc!=null?(pc>=0?'inc':'exp'):'')}</tr>`}
      const[n,s]=yr(c.id);return `<tr class="clk" onclick="catForm('${c.id}')">${cT(esc(c.name),sub)}${cC(nm(n))}${cN(num(s),k)}</tr>`;
    });
    const head=fx?['البند'].concat(evc?['التكرار|c']:[],['المبلغ|n','السابق|n'],ex?[]:['الزيادة|n']):['البند',`عمليات ${NY}|c`,`إجمالي ${NY}|n`];
    let t=rtbl(head,rows);if(head.length>=5)t=t.replace('class="rtb"','class="rtb xw5"');
    return `<details class="grp xig" ${q?'open':''}><summary><span>${G[g][0]} ${esc(G[g][1])}</span><span class="badge soon">${l.length}</span></summary>${t}</details>`;
  }).join('');
}

/* المشتروات: لما تخرج منها وترجع، بتلاقيها على قايمة المحلات */
try{const _goB=go;go=function(v){if(view==='buy'&&v!=='buy')BSTORE='';return _goB.apply(this,arguments)}}catch(e){}

/* الأنواع والطرق في شاشة المزيد */
(()=>{const i=SETS.findIndex(x=>x[0]==='types');if(i>=0)SETS.splice(i,1)})();
var XVW={types:()=>`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏷️ الأنواع والطرق</h3></div>`+spTypes()};
function vMore(){
  const B=[['items','📋',L('items')],['pmv','🏦',L('pm')],['types','🏷️','الأنواع والطرق'],['inst','🏦',L('inst')],['loans','🤝','السلف'],['buy','🛒',L('buy')],['wallet','💳',L('wallet')],['annual','📆',L('contracts')],['cash','🏧',L('cash')],['months','🔒','قفل الشهور'],['contacts','📇',L('contacts')],['docs','📎',L('docs')],['pw','🔐','الباسوردات'],['settings','⚙️',L('settings')]];
  return `<h3>☰ ${esc(L('more'))}</h3><div class="rgrid">${B.map(([v,ic,l])=>`<button class="rbtn" onclick="${v==='pw'?'pwScreen()':(v==='settings'?"stab='';":'')+`go('${v}')`}"><span>${ic}</span>${esc(l)}</button>`).join('')}</div>`;
}

/* ========== التقارير: الفلاتر بتظهر قبل ما التقرير يتفتح ========== */
var XRBC={month:{t:1,m:1,k:'all'},year:{t:1,m:1,k:'all'},pmr:{t:1,k:'all'},cols:{k:'inc'},contracts:{k:'ann'},cnext:{k:'ann'},cash:{m:1}};
var XPRE=false,XPRE_RV=false,XPRDRAW=false,XRFSV='';
function xRfC(id){const s=new Set(RF.xc||[]);s.has(id)?s.delete(id):s.add(id);RF.xc=[...s];rvUp()}
function xRepBar(){
  const c=XRBC[rtab];if(!c)return '';
  const sel=new Set(RF.xc||[]),ty=c.t?RF.xt||'':'',mt=RF.xm||'',g=[];
  let cats=!c.k?[]:S.cats.filter(x=>c.k==='inc'?x.kind==='inc':c.k==='ann'?(x.fixed&&isA(x)):(!ty||x.kind===ty));
  cats=cats.filter(x=>x.active!==false||sel.has(x.id)).sort((a,b)=>a.name.localeCompare(b.name,'ar'));
  if(c.t)g.push(rfG('النوع',[['','الكل'],['inc',L('inc')],['exp',L('exp')]].map(([k,l])=>chip(ty===k,esc(l),`RF.xt='${k}';RF.xc=[];rvUp()`)).join('')));
  if(c.m)g.push(rfG('الحساب',chip(!mt,'الكل',`RF.xm='';rvUp()`)+S.methods.map(m=>chip(mt===m.id,esc(m.name),`RF.xm='${m.id}';rvUp()`)).join('')));
  if(cats.length)g.push(rfG('البنود'+(sel.size?` (${sel.size})`:''),chip(!sel.size,'كل البنود',`RF.xc=[];rvUp()`)+cats.map(x=>chip(sel.has(x.id),esc(x.name),`xRfC('${x.id}')`,x.kind==='inc'?'i':'e')).join(''),'',true));
  return g.length?`<div class="rfl noprint">${g.join('')}</div>`:'';
}
function xRepSum(){
  const c=XRBC[rtab];if(!c)return '';const p=[];
  if(c.t&&RF.xt)p.push(RF.xt==='inc'?L('inc'):L('exp'));
  if(c.m&&RF.xm&&M(RF.xm))p.push(M(RF.xm).name);
  const xs=(RF.xc||[]).map(id=>C(id)&&C(id).name).filter(Boolean);
  if(xs.length)p.push(xs.length>3?xs.slice(0,3).join('، ')+' +'+(xs.length-3):xs.join('، '));
  return p.join(' · ');
}
function xRepScope(fn){
  const c=XRBC[rtab];if(!c)return fn();
  const sel=new Set(RF.xc||[]),mt=c.m?RF.xm||'':'',ty=c.t?RF.xt||'':'';
  if(!sel.size&&!mt&&!ty)return fn();
  const T=S.txs,Cs=S.cats,Ca=S.cash,P=S.plans;
  try{
    S.txs=T.filter(t=>(!sel.size||sel.has(t.cat))&&(!mt||t.method===mt||t.to===mt)&&(!ty||t.type===ty));
    if(sel.size||ty)S.cats=Cs.filter(x=>(!sel.size||sel.has(x.id))&&(!ty||x.kind===ty));
    S.cash=sel.size||ty==='inc'?[]:Ca.filter(x=>!mt||x.method===mt);
    if(sel.size)S.plans=P.filter(p=>sel.has(p.catId));
    return fn();
  }finally{S.txs=T;S.cats=Cs;S.cash=Ca;S.plans=P}
}
function xRepPre(fromRv){
  if(!REPS[rtab])return;
  XPRE=true;XPRE_RV=!!fromRv;XRFSV=JSON.stringify(RF);
  xPreDraw(false);
}
function xPreDraw(keep){
  const Rp=REPS[rtab];if(!Rp)return;
  RFOPEN=true;XPRDRAW=true;
  let f='';try{f=(Rp.f?Rp.f():'')+xRepBar()}catch(e){}
  try{sheet(`<div class="xpre"><h2>${Rp.ic} ${esc(Rp.t)}</h2><p class="muted">اختار الفلاتر، وبعدين اعرض التقرير</p>
    ${f||'<p class="muted">التقرير ده مالوش فلاتر</p>'}
    <button class="btn ghost" onclick="xPreReset()">↺ رجّع الافتراضي</button>
    <button class="btn xpgo" onclick="xPreGo()">📄 اعرض التقرير</button></div>`,keep)}
  finally{XPRDRAW=false}
}
function xPreReset(){RF={...RFDEF};xPreDraw(true)}
function xPreCancel(){
  XPRE=false;
  if(XPRE_RV){try{RF=JSON.parse(XRFSV)}catch(e){}}
  else if(!$('#rv').classList.contains('on'))rtab='';
}
function xPreGo(){
  const fromRv=XPRE_RV;XPRE=false;
  if(!fromRv){XRVSH=SHST.length?SHST[SHST.length-1].h:null;RVST=[]}
  closeSheet();
  openRV(fromRv?'nav':false);
}
try{const _sP=sheet;sheet=function(){if(XPRE&&!XPRDRAW)xPreCancel();return _sP.apply(this,arguments)}}catch(e){}
try{const _cP=closeSheet;closeSheet=function(){if(XPRE)xPreCancel();return _cP.apply(this,arguments)}}catch(e){}
function openRep(key,set){
  if(!REPS[key])return;
  $('#rv').classList.remove('on');RVST=[];RF={...RFDEF};rtab=key;if(set)set();
  xRepPre();
}
function vReports(){
  if(rtab&&REPS[rtab]&&!XPRE&&!$('#rv').classList.contains('on'))setTimeout(()=>{if(rtab&&REPS[rtab]&&!XPRE&&!$('#rv').classList.contains('on'))openRV()},0);
  return `<h3>📊 ${esc(L('reports'))}</h3><div class="rgrid">${Object.entries(REPS).map(([k,r])=>`<button class="rbtn" onclick="openRep('${k}')"><span>${r.ic}</span>${r.t}</button>`).join('')}</div>`;
}
function openRV(keep){
  if(XPRE){xPreDraw(true);return}
  const Rp=REPS[rtab];if(!Rp)return;
  if(!keep)RVST=[];
  const r=xRepScope(()=>Rp.b()),fs=xRepSum();
  if(fs)r.sub=(r.sub?r.sub+' · ':'')+fs;
  const fl=`<div class="rfl noprint xrfe"><button type="button" class="rft" onclick="xRepPre(1)"><span>${FIC} الفلاتر</span><em><bdi>${esc(r.sub||'')}</bdi></em><b>✏️</b></button></div>`;
  RVCSV=r.csv||null;RVTITLE=r.title;
  $('#rvt').textContent='';$('#rvdoc').innerHTML=paper(r.title,r.sub,r.body,fl);
  $('#rvcsv').style.display=RVCSV?'':'none';
  $('#rv').classList.add('on');if(!keep||keep==='nav')$('#rvbody').scrollTop=0;
}

/* شاشات زيادة + سهم الترتيب + الأرقام + خانة البحث */
try{const _rT=render;render=function(){
  if(XVW[view]){const v0=view,vh=vHome;vHome=XVW[v0];view='home';
    try{_rT.apply(this,arguments)}finally{view=v0;vHome=vh}
    try{$('nav').innerHTML=navHTML();xHomeCls();xStSave();xFabVis()}catch(e){}}
  else _rT.apply(this,arguments);
  try{document.body.dataset.sdir=S.settings.sdir||xSortDef(sortMode())}catch(e){}
  try{xBadges()}catch(e){}
  try{const h=document.querySelector('header');if(h)document.documentElement.style.setProperty('--hdh',h.offsetHeight+'px');
    const i=$('#view .gsr input'),AM=' أو مبلغ (50 · >500 · <100 · 100-500)';
    if(i){if(GFV.includes(view))i.placeholder='فلتر: اسم، تاريخ،'+AM;
      else if(view==='buy')i.placeholder='فلتر: المحل، الصنف،'+AM;
      else if(view==='items')i.placeholder='فلتر: اسم البند'+AM;
      else if(view==='docs'&&dtab==='tx')i.placeholder='فلتر: البند، التاريخ،'+AM}
    $('#view').classList.toggle('xsq',!!(i&&(i.value||'').trim()))}catch(e){}
}}catch(e){}
render();
/* ========== 2.21.29: فلاتر التقرير في قوايم منسدلة قبل ما يتفتح ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xpre .xpf{background:var(--soft2);border:1px solid var(--bd);border-radius:14px;padding:2px 12px 12px;margin:0 0 10px}
.xpre .xpf label{margin:10px 0 0!important}
.xpre .xpm{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0 0}
.xpre .xpm button{border:1px solid var(--p);background:color-mix(in srgb,var(--p) 14%,transparent);color:inherit;border-radius:16px;padding:5px 12px;font:inherit;font-size:12px;cursor:pointer}
`;document.head.appendChild(s)})();
function xOptL(arr,cur){return arr.map(([v,l])=>`<option value="${esc(String(v))}" ${String(v)===String(cur??'')?'selected':''}>${esc(l)}</option>`).join('')}
function xSel(lbl,key,html){return `<label>${lbl}<select onchange="xPF('${key}',this.value)">${html}</select></label>`}
function xCatOptsH(cur,mode,ty,first){
  const srt=l=>l.filter(c=>c.active!==false||c.id===cur).sort((a,b)=>a.name.localeCompare(b.name,'ar'));
  const grp=(lab,l)=>l.length?`<optgroup label="${esc(lab)}">${l.map(c=>`<option value="${c.id}" ${c.id===cur?'selected':''}>${esc(c.name)}</option>`).join('')}</optgroup>`:'';
  let h=first!=null?`<option value="" ${!cur?'selected':''}>${esc(first)}</option>`:'';
  if(mode==='ann')return h+grp('📄 سنوي',srt(S.cats.filter(c=>c.fixed&&isA(c))));
  if(mode!=='exp'&&ty!=='exp')h+=grp('💰 '+L('inc'),srt(S.cats.filter(c=>c.kind==='inc')));
  if(mode!=='inc'&&ty!=='inc')h+=grp('💸 '+L('exp'),srt(S.cats.filter(c=>c.kind==='exp')));
  return h;
}
function xPreFields(){
  const k=rtab,R=RF,f=[],two=(a,b)=>`<div class="two">${a}${b}</div>`;
  const meth=(key,cur)=>xSel('🏦 الحساب',key,xOptL([['','كل الحسابات']].concat(S.methods.map(m=>[m.id,m.name])),cur));
  const month=(key,lbl,val)=>`<label>${lbl}<input type="month" value="${val||NKM}" onchange="xPF('${key}',this.value)"></label>`;
  const year=()=>xSel('📅 السنة','year',xOptL(yearsList().map(y=>[y,String(y)]),R.year));
  const xty=()=>xSel('🔀 النوع','xt',xOptL([['','الكل'],['inc',L('inc')],['exp',L('exp')]],R.xt||''));
  const xc=mode=>xSel('📋 البند','xc',xCatOptsH((R.xc||[])[0]||'',mode,R.xt||'','كل البنود'));
  if(k==='stmt'||k==='ops'){
    if(R.period==='custom'&&!R.from){R.from=NKM+'-01';R.to=today()}
    f.push(two(xSel('🔀 النوع','type',xOptL([['all','الكل'],['inc',L('inc')],['exp',L('exp')]],R.type)),meth('method',R.method||'')));
    f.push(xSel('📋 البند','cat',xCatOptsH(R.cat||'','all',R.type==='all'?'':R.type,'كل البنود')));
    f.push(xSel('📆 الفترة','period',xOptL(PERIODS,R.period)));
    if(R.period==='custom')f.push(two(`<label>من<input type="date" value="${R.from||''}" onchange="xPF('from',this.value)"></label>`,`<label>إلى<input type="date" value="${R.to||''}" onchange="xPF('to',this.value)"></label>`));
  }
  else if(k==='month')f.push(month('month','📅 الشهر',R.month),two(xty(),meth('xm',R.xm||'')),xc('all'));
  else if(k==='year')f.push(year(),two(xty(),meth('xm',R.xm||'')),xc('all'));
  else if(k==='pmr')f.push(month('month','📅 الشهر',R.month),xty(),xc('all'));
  else if(k==='cols')f.push(month('month','📅 الشهر',R.month),xc('inc'));
  else if(k==='contracts')f.push(year(),xc('ann'));
  else if(k==='cnext')f.push(xc('ann'));
  else if(k==='cash')f.push(year(),meth('xm',R.xm||''));
  else if(k==='cmp'){
    f.push(xSel('📋 البند','ccat',`<option value="ALL_EXP" ${R.ccat==='ALL_EXP'?'selected':''}>كل ${esc(L('exp'))}</option><option value="ALL_INC" ${R.ccat==='ALL_INC'?'selected':''}>كل ${esc(L('inc'))}</option>`+xCatOptsH(R.ccat,'all','',null)));
    f.push(xSel('📆 الفترة','crange',xOptL(CMPR(),R.crange)));
    if(R.crange==='c')f.push(two(month('cf','من شهر',R.cf||prevKey(NKM)),month('ct','إلى شهر',R.ct||NKM)));
    if(R.crange==='p')f.push(`<div class="xpm">${(R.cms||[]).slice().sort().map(m=>`<button type="button" onclick="xPF('delm','${m}')">${esc(mName(m))} ✕</button>`).join('')}</div><label>➕ ضيف شهر<input type="month" value="" onchange="xPF('addm',this.value)"></label>`);
  }
  else if(k==='inst')f.push(xSel('🏦 القسط','plan',xOptL([['','كل الأقساط']].concat(S.plans.map(p=>[p.id,p.name])),R.plan||'')));
  return f.join('');
}
function xPF(k,v){
  const R=RF;
  if(k==='type'){R.type=v;R.cat=''}
  else if(k==='xt'){R.xt=v;R.xc=[]}
  else if(k==='xc')R.xc=v?[v]:[];
  else if(k==='year')R.year=+v;
  else if(k==='period'){R.period=v;if(v==='custom'&&!R.from){R.from=NKM+'-01';R.to=today()}}
  else if(k==='crange'){R.crange=v;if(v==='c'){R.cf=R.cf||prevKey(NKM);R.ct=R.ct||NKM}if(v==='p'&&!(R.cms&&R.cms.length))R.cms=[prevKey(NKM),NKM]}
  else if(k==='addm'){if(v)R.cms=[...new Set([...(R.cms||[]),v])].sort()}
  else if(k==='delm')R.cms=(R.cms||[]).filter(x=>x!==v);
  else R[k]=v;
  xPreDraw(true);
}
function xPreDraw(keep){
  const Rp=REPS[rtab];if(!Rp)return;
  XPRDRAW=true;
  let f='';try{f=xPreFields()}catch(e){}
  try{sheet(`<div class="xpre"><h2>${Rp.ic} ${esc(Rp.t)}</h2><p class="muted">اختار من القوايم، وبعدين اعرض التقرير</p>
    ${f?`<div class="xpf">${f}</div>`:'<p class="muted">التقرير ده مالوش فلاتر</p>'}
    <button class="btn ghost" onclick="xPreReset()">↺ رجّع الافتراضي</button>
    <button class="btn xpgo" onclick="xPreGo()">📄 اعرض التقرير</button></div>`,keep)}
  finally{XPRDRAW=false}
}
/* ========== 2.21.30: من تاريخ إلى تاريخ في كل التقارير + أكتر من بند وحساب + الرجوع للفلاتر ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xpre .xmr{display:flex;align-items:flex-end;gap:6px}
.xpre .xmr label{flex:1;min-width:0}
.xpre .xmr .mini{height:38px;flex:0 0 38px;padding:0!important;margin-bottom:1px}
.xpre .xadd{display:block;width:100%;margin-top:8px;padding:8px!important;border-style:dashed!important}
`;document.head.appendChild(s)})();

/* الفترة: بترجّع من / إلى (أو شهر / سنة) */
var XPD={stmt:'m',ops:'m',month:'m',cols:'m',pmr:'m',year:'y',contracts:'y',cash:'y',cnext:'ny',inst:'all'};
function xRngTxt(f,t){return `من ${dmy(f)} إلى ${dmy(t)}`}
function xMonthsIn(f,t){const out=[];let k=f.slice(0,7),n=0;const e=t.slice(0,7);while(k<=e&&n<240){out.push(k);k=addMonths(k+'-01',1).slice(0,7);n++}return out}
function xPer(k){
  const p=RF.xp||XPD[k]||'m',o={p};
  if(p==='m')o.k=NKM;else if(p==='pm')o.k=prevKey(NKM);else if(p==='mon')o.k=RF.month||NKM;
  else if(p==='y')o.y=NY;else if(p==='py')o.y=NY-1;else if(p==='ny')o.y=NY+1;else if(p==='yr')o.y=+RF.year||NY;
  if(o.k)[o.f,o.t]=mRange(o.k);
  else if(o.y){o.f=o.y+'-01-01';o.t=o.y+'-12-31'}
  else if(p==='all'){const ds=S.txs.map(t=>t.date).concat(S.cash.map(c=>c.date)).sort();o.f=ds[0]||NKM+'-01';o.t=(NY+1)+'-12-31'}
  else{o.f=RF.xf||NKM+'-01';o.t=RF.xto||today();if(o.f>o.t)[o.f,o.t]=[o.t,o.f]}
  return o;
}
/* الاختيارات القديمة (من الرئيسية والشاشات) بتتحول للفلاتر الجديدة */
function xLegacy(k){
  if(RF.xp)return;
  if(k==='stmt'||k==='ops'){
    if(RF.type&&RF.type!=='all')RF.xt=RF.type;
    if(RF.cat)RF.xc=[RF.cat];if(RF.method)RF.xms=[RF.method];
    if(RF.period==='custom'){RF.xp='custom';RF.xf=RF.from;RF.xto=RF.to}else RF.xp=RF.period||'m';
    RF.cat='';RF.method='';
  }
  else if(['month','cols','pmr'].includes(k))RF.xp=RF.month&&RF.month!==NKM?'mon':'m';
  else if(['year','contracts','cash'].includes(k))RF.xp=RF.year&&+RF.year!==NY?'yr':'y';
  else RF.xp=XPD[k]||'m';
}

/* الفلاتر: النوع + أكتر من حساب + أكتر من بند */
function xRepScope(fn){
  if(rtab==='cmp')return fn();
  const sel=new Set((RF.xc||[]).filter(Boolean)),ms=new Set((RF.xms||[]).filter(Boolean)),ty=RF.xt||'';
  if(!sel.size&&!ms.size&&!ty)return fn();
  const T=S.txs,Cs=S.cats,Ca=S.cash,P=S.plans;
  try{
    S.txs=T.filter(t=>(!sel.size||sel.has(t.cat))&&(!ms.size||ms.has(t.method)||ms.has(t.to))&&(!ty||t.type===ty));
    if(sel.size||ty)S.cats=Cs.filter(x=>(!sel.size||sel.has(x.id))&&(!ty||x.kind===ty));
    S.cash=sel.size||ty==='inc'?[]:Ca.filter(x=>!ms.size||ms.has(x.method));
    if(sel.size)S.plans=P.filter(p=>sel.has(p.catId));
    return fn();
  }finally{S.txs=T;S.cats=Cs;S.cash=Ca;S.plans=P}
}
function xRepSum(){
  if(rtab==='cmp')return '';const p=[],g=n=>(RF[n]||[]).filter(Boolean);
  if(RF.xt)p.push(RF.xt==='inc'?L('inc'):L('exp'));
  const ms=g('xms').map(id=>M(id)?.name).filter(Boolean);if(ms.length)p.push(ms.join('، '));
  const xs=g('xc').map(id=>C(id)?.name).filter(Boolean);if(xs.length)p.push(xs.length>3?xs.slice(0,3).join('، ')+' +'+(xs.length-3):xs.join('، '));
  return p.join(' · ');
}

/* تقارير الفترة (لما تختار من تاريخ إلى تاريخ أو كل الفترات) */
function xBRange(f,t){
  const list=S.txs.filter(x=>!x.pend&&x.date>=f&&x.date<=t),s=xSums(list);
  const cl=S.cash.filter(c=>c.date>=f&&c.date<=t).sort((a,b)=>a.date.localeCompare(b.date)),ct=cl.reduce((a,c)=>a+c.amount,0);
  let b=xKp(s)+ioPie(s);
  const rows=xMonthsIn(f,t).map(k=>[k,sums(list.filter(x=>x.date.startsWith(k+'-')))]).filter(([,d])=>d.inc||d.exp)
    .map(([k,d])=>`<tr class="clk" onclick="dMonth('${k}')">${cT(esc(mName(k)))}${cN(num(d.inc),'inc')}${cN(num(d.exp),'exp')}${cN(sgn(d.net),d.net<0?'exp':'inc')}</tr>`);
  if(rows.length>1)b+=rsec('📅 شهر بشهر')+rtbl(['الشهر',esc(L('inc'))+'|n',esc(L('exp'))+'|n',esc(L('net'))+'|n'],rows,ft('الإجمالي',1,fN(num(s.inc)),fN(num(s.exp)),fN(sgn(s.net))));
  b+=rsec('💰 '+esc(L('inc')),num(s.inc))+grpBlock(list,'inc',INCG,incGrp,id=>dS(f,t,id));
  b+=rsec('💸 '+esc(L('exp')),num(s.exp))+grpBlock(list,'exp',XEXPG,xExpGrp,id=>dS(f,t,id));
  b+=rsec('🧮 '+esc(L('net')))+xNetTbl(s);
  if(pmStats(list).some(x=>x.i||x.o))b+=rsec('🏦 '+esc(L('pm')))+pmTable(list,f,t);
  if(cl.length)b+=rsec('🏧 '+esc(L('cash')),num(ct))+rtbl(['التاريخ|c','الحساب','المبلغ|n'],cl.map(c=>`<tr>${cD(c.date)}${cT(esc(M(c.method)?.name||'—'),esc(c.note||''))}${cN(num(c.amount))}</tr>`),cl.length>1?ft('الإجمالي',2,fN(num(ct))):'');
  return{title:'تقرير الفترة',sub:xRngTxt(f,t),body:b};
}
function xBPmRange(f,t){
  const list=S.txs.filter(x=>!x.pend&&x.date>=f&&x.date<=t),s=sums(list);
  return{title:'تقرير '+L('pm'),sub:xRngTxt(f,t),body:rkp([[L('inc'),s.inc,'inc'],[L('exp'),s.exp,'exp']])+donut(pmStats(list).filter(x=>x.o).map(x=>({label:x.m.name,value:x.o})),L('exp'))+rsec('🏦 '+esc(L('pm')))+pmTable(list,f,t)};
}
function xBColsRange(f,t){
  const got=S.txs.filter(x=>x.type==='inc'&&!x.pend&&x.date>=f&&x.date<=t),gs=got.reduce((a,x)=>a+x.amount,0);
  const ptx=S.txs.filter(x=>x.type==='inc'&&x.pend&&x.date>=f&&x.date<=t),wait=[];
  xMonthsIn(f,t).forEach(k=>dueList(k,'m','inc').forEach(o=>{if(o.s.st==='wait'&&o.date>=f&&o.date<=t)wait.push(o)}));
  const rem=wait.reduce((a,o)=>a+o.amt,0)+ptx.reduce((a,x)=>a+x.amount,0),td=today();
  let b=rkp([['محصّل',gs,'inc'],['المتوقع',gs+rem,'net'],['غير محصّل',rem,'warn']]);
  b+=donut([{label:'محصّل',value:gs,color:'#16a34a'},{label:'غير محصّل',value:rem,color:'#ea580c'}],'محصّل',short(gs));
  b+=rsec('✅ محصّل',num(gs))+catTable(got,'inc',id=>dS(f,t,id),true);
  const pr=wait.map(o=>({n:o.r.name,d:o.date,a:o.amt,s:everyTxt(o.r.every),c:`occSheet('${o.r.id}',${o.k})`}))
    .concat(ptx.map(x=>({n:C(x.cat)?.name||'—',d:x.date,a:x.amount,s:x.note||'',c:`editTx('${x.id}')`}))).sort((a,b)=>a.d.localeCompare(b.d));
  b+=rsec('⏳ غير محصّل',num(rem))+(pr.length?rtbl(['البند','الميعاد|c','المبلغ|n','الحالة|c'],pr.map(x=>`<tr class="clk" onclick="${x.c}">${cT(esc(x.n),esc(x.s))}${cD(x.d)}${cN(num(x.a),'wrn')}${cC(x.d<td?'<span class="rb late">متأخر</span>':'<span class="rb wait">غير محصّل</span>')}</tr>`),pr.length>1?ft('الإجمالي',2,fN(num(rem)),fE):''):NONE);
  return{title:'تقرير التحصيلات',sub:xRngTxt(f,t),body:b};
}
function xBAnnRange(f,t){
  const oc=[];
  FX().filter(isAnn).forEach(r=>{for(let k=0;k<300;k++){const d=occDate(r,k);if(d>t)break;if(d<f)continue;const s=stOf(occRec(r,k));if(r.active===false&&s.st==='wait')continue;oc.push({r,k,d,amt:occAmt(r,k),s})}});
  oc.sort((a,b)=>a.d.localeCompare(b.d));
  if(!oc.length)return{title:'التحصيلات السنوية',sub:xRngTxt(f,t),body:NONE};
  let ex=0,got=0,rem=0;oc.forEach(o=>{ex+=o.amt;if(o.s.st==='done')got+=o.s.t.amount;else if(o.s.st==='wait')rem+=o.amt});
  let b=rkp([['المتوقع',ex,'net'],['محصّل',got,'inc'],['غير محصّل',rem,'warn']]);
  b+=donut([{label:'محصّل',value:got,color:'#16a34a'},{label:'غير محصّل',value:rem,color:'#ea580c'}],'المتوقع',short(ex));
  b+=rsec('📄 المواعيد',oc.length+' ميعاد')+rtbl(['البند','تاريخ التجديد|c','المبلغ|n','الحالة|c'],oc.map(o=>{const done=o.s.st==='done';return `<tr class="${done?'clk':''}" ${done?`onclick="editTx('${o.s.t.id}')"`:''}>${cT(esc(o.r.name),annSub(o.r))}${cD(o.d)}${cN(num(done?o.s.t.amount:o.amt),done?'inc':'')}${cC(stB(o.s,o.d,o.r.kind))}</tr>`}),oc.length>1?ft('الإجمالي',2,fN(num(got+rem)),fE):'');
  return{title:'التحصيلات السنوية',sub:xRngTxt(f,t),body:b};
}
function xBCashRange(f,t){
  const yl=S.cash.filter(c=>c.date>=f&&c.date<=t).sort((a,b)=>a.date.localeCompare(b.date)),tot=yl.reduce((a,c)=>a+c.amount,0);
  const ms=xMonthsIn(f,t).map(k=>[k,yl.filter(c=>c.date.startsWith(k+'-'))]).filter(x=>x[1].length),g={};
  yl.forEach(c=>{g[c.method]=(g[c.method]||0)+c.amount});
  let b=rkp([['المسحوب',tot,'warn'],['متوسط الشهر',r2(tot/(ms.length||1)),'net'],['عدد المرات',String(yl.length),'net']]);
  b+=donut(Object.entries(g).map(([id,v])=>({label:M(id)?.name||'—',value:v})),'المسحوب');
  if(ms.length>1)b+=rsec('📅 شهر بشهر')+rtbl(['الشهر','المرات|c','المسحوب|n'],ms.map(([k,l])=>`<tr>${cT(esc(mName(k)))}${cC(nm(l.length))}${cN(num(l.reduce((a,c)=>a+c.amount,0)))}</tr>`));
  b+=rsec('🏧 التفاصيل',num(tot))+(yl.length?rtbl(['التاريخ|c','الحساب','المبلغ|n'],yl.map(c=>`<tr>${cD(c.date)}${cT(esc(M(c.method)?.name||'—'),esc(c.note||''))}${cN(num(c.amount))}</tr>`),yl.length>1?ft('الإجمالي',2,fN(num(tot))):''):NONE);
  return{title:'تقرير '+L('cash'),sub:xRngTxt(f,t),body:b,csv:{head:['التاريخ','سحبت من','المبلغ','ملاحظة'],rows:yl.map(c=>[dmy(c.date),M(c.method)?.name||'',c.amount,c.note||''])}};
}
/* كل تقرير بيشتغل على الفترة اللي اخترتها */
function xRepRun(k){
  xLegacy(k);const p=xPer(k),B=window.XB0;
  if(k==='stmt'||k==='ops'){RF.period='custom';RF.from=p.f;RF.to=p.t;RF.type=RF.xt||'all';RF.cat='';RF.method='';return B[k]()}
  if(k==='month'||k==='year'){if(p.k){RF.month=p.k;return B.month()}if(p.y){RF.year=p.y;return B.year()}return xBRange(p.f,p.t)}
  if(k==='pmr'){if(p.k){RF.month=p.k;return B.pmr()}return xBPmRange(p.f,p.t)}
  if(k==='cols'){if(p.k){RF.month=p.k;return B.cols()}return xBColsRange(p.f,p.t)}
  if(k==='contracts'||k==='cnext'){if(k==='cnext'&&p.y===NY+1)return B.cnext();if(p.y){RF.year=p.y;return B.contracts()}return xBAnnRange(p.f,p.t)}
  if(k==='cash'){if(p.y){RF.year=p.y;return B.cash()}return xBCashRange(p.f,p.t)}
  if(k==='inst'){if(p.p==='all')return B.inst();const P=S.plans;try{S.plans=P.map(x=>({...x,items:x.items.filter(it=>it.due&&it.due>=p.f&&it.due<=p.t)})).filter(x=>x.items.length);const r=B.inst();r.sub=(r.sub?r.sub+' · ':'')+xRngTxt(p.f,p.t);return r}finally{S.plans=P}}
  return B[k]();
}
if(!window.XB0){window.XB0={};Object.keys(REPS).forEach(k=>{window.XB0[k]=REPS[k].b;if(k!=='cmp')REPS[k].b=()=>xRepRun(k)})}
/* لما تدوس على حاجة جوه التقرير بيفتح تقرير تاني بنفس الطريقة */
function dOps(from,to,cat,type,method){drill(()=>{rtab='ops';RF.xp='custom';RF.xf=from;RF.xto=to;RF.xc=cat?[cat]:[];RF.xt=type||(cat?(C(cat)?.kind||''):'');RF.xms=method?[method]:[]})}
function dMonth(k){drill(()=>{rtab='month';RF.xp='mon';RF.month=k})}

/* شاشة الفلاتر: قوايم منسدلة + من / إلى + ➕ بند تاني */
function xMulti(lbl,key,vals,opts,addLbl){
  const v=vals.length?vals:[''];
  return v.map((x,i)=>`<div class="xmr"><label>${i?lbl+' '+(i+1):lbl}<select onchange="xPF('${key}',this.value,${i})">${opts(x,i)}</select></label>${v.length>1?`<button type="button" class="mini danger" onclick="xPF('${key}-del','',${i})">✕</button>`:''}</div>`).join('')
    +(vals.filter(Boolean).length?`<button type="button" class="mini xadd" onclick="xPF('${key}-add','')">➕ ${addLbl}</button>`:'');
}
function xPreFields(){
  const k=rtab,R=RF,f=[],two=(a,b)=>`<div class="two">${a}${b}</div>`;
  const month=(key,lbl,val)=>`<label>${lbl}<input type="month" value="${val||NKM}" onchange="xPF('${key}',this.value)"></label>`;
  if(k==='cmp'){
    f.push(xSel('📋 البند','ccat',`<option value="ALL_EXP" ${R.ccat==='ALL_EXP'?'selected':''}>كل ${esc(L('exp'))}</option><option value="ALL_INC" ${R.ccat==='ALL_INC'?'selected':''}>كل ${esc(L('inc'))}</option>`+xCatOptsH(R.ccat,'all','',null)));
    f.push(xSel('📆 الفترة','crange',xOptL(CMPR(),R.crange)));
    if(R.crange==='c')f.push(two(month('cf','من شهر',R.cf||prevKey(NKM)),month('ct','إلى شهر',R.ct||NKM)));
    if(R.crange==='p')f.push(`<div class="xpm">${(R.cms||[]).slice().sort().map(m=>`<button type="button" onclick="xPF('delm','${m}')">${esc(mName(m))} ✕</button>`).join('')}</div><label>➕ ضيف شهر<input type="month" value="" onchange="xPF('addm',this.value)"></label>`);
    return f.join('');
  }
  xLegacy(k);const p=R.xp;
  const PO=[['m','الشهر الحالي'],['pm','الشهر اللي فات'],['mon','شهر معيّن'],['y','السنة الحالية'],['py','السنة اللي فاتت'],['yr','سنة معيّنة']]
    .concat(['contracts','cnext','inst'].includes(k)?[['ny','السنة الجاية']]:[]).concat([['all','كل الفترات'],['custom','📅 من تاريخ إلى تاريخ']]);
  f.push(xSel('📆 الفترة','xp',xOptL(PO,p)));
  if(p==='mon')f.push(month('month','📅 الشهر',R.month));
  if(p==='yr')f.push(xSel('📅 السنة','year',xOptL(yearsList().map(y=>[y,String(y)]),R.year)));
  if(p==='custom')f.push(two(`<label>📅 من تاريخ<input type="date" value="${R.xf||NKM+'-01'}" onchange="xPF('xf',this.value)"></label>`,`<label>📅 إلى تاريخ<input type="date" value="${R.xto||today()}" onchange="xPF('xto',this.value)"></label>`));
  if(k==='inst'){f.push(xSel('🏦 القسط','plan',xOptL([['','كل الأقساط']].concat(S.plans.map(x=>[x.id,x.name])),R.plan||'')));return f.join('')}
  const noType=['cols','contracts','cnext','cash'].includes(k),mode=k==='cols'?'inc':(k==='contracts'||k==='cnext')?'ann':'all';
  if(!noType)f.push(xSel('🔀 النوع','xt',xOptL([['','الكل'],['inc',L('inc')],['exp',L('exp')]],R.xt||'')));
  if(k!=='contracts'&&k!=='cnext')f.push(xMulti('🏦 الحساب','xms',R.xms||[],(x,i)=>xOptL([['',i?'— اختار —':'كل الحسابات']].concat(S.methods.map(m=>[m.id,m.name])),x),'حساب تاني'));
  if(k!=='cash')f.push(xMulti('📋 البند','xc',R.xc||[],(x,i)=>xCatOptsH(x,mode,R.xt||'',i?'— اختار —':'كل البنود'),'بند تاني'));
  return f.join('');
}
function xPF(k,v,i){
  const R=RF,arr=n=>(R[n]=(R[n]||[]).slice());
  if(k==='xc'||k==='xms'){const a=arr(k);if(!a.length)a.push('');if(v)a[i]=v;else a.splice(i,1);R[k]=a.filter((x,j)=>!x||a.indexOf(x)===j)}
  else if(k==='xc-add'||k==='xms-add')arr(k.slice(0,-4)).push('');
  else if(k==='xc-del'||k==='xms-del')arr(k.slice(0,-4)).splice(i,1);
  else if(k==='xt'){R.xt=v;R.xc=[]}
  else if(k==='xp'){R.xp=v;if(v==='custom'){R.xf=R.xf||NKM+'-01';R.xto=R.xto||today()}if(v==='mon')R.month=R.month||NKM;if(v==='yr')R.year=R.year||NY}
  else if(k==='year')R.year=+v;
  else if(k==='crange'){R.crange=v;if(v==='c'){R.cf=R.cf||prevKey(NKM);R.ct=R.ct||NKM}if(v==='p'&&!(R.cms&&R.cms.length))R.cms=[prevKey(NKM),NKM]}
  else if(k==='addm'){if(v)R.cms=[...new Set([...(R.cms||[]),v])].sort()}
  else if(k==='delm')R.cms=(R.cms||[]).filter(x=>x!==v);
  else R[k]=v;
  xPreDraw(true);
}
function xPreReset(){RF={...RFDEF};xLegacy(rtab);xPreDraw(true)}

/* → رجوع من التقرير: بيرجعك للفلاتر عشان تشغّله تاني · ✕: بيقفله ويرجعك لشاشة التقارير */
function rvBack(){
  const p=RVST.pop();
  if(p){rtab=p.rtab;RF=p.RF;openRV('nav');return}
  const k=rtab,rf=JSON.parse(JSON.stringify(RF));
  $('#rv').classList.remove('on');XRVSH=null;rtab=k;RF=rf;
  try{xStSave()}catch(e){}
  xRepPre();
}
try{const _crX=closeRV;closeRV=function(){XRVSH=null;const r=_crX.apply(this,arguments);if(view!=='reports'){rtab='';go('reports')}return r}}catch(e){}
/* ========== 2.21.31 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.brand{margin-top:10px!important;gap:3px!important;font-size:9.5px!important;line-height:1.5!important}
.brand::before{width:170px!important;height:46px!important}
.brand .pill{padding:4px 16px!important}.brand .pill b{font-size:10.5px!important}
.brand .pill .co,.brand .pill span,.brand .pill a{font-size:9.5px!important}
main{padding-top:8px!important;padding-bottom:calc(68px + env(safe-area-inset-bottom))!important}
body:not(.xhome) #view{padding-bottom:4px!important}
body.xhome #view{padding-bottom:78px!important}
body #view.xsq{padding-bottom:75vh!important}
#view.xsq .gsr~.xqb{display:none!important}
#view .tiles.x5{display:grid!important;grid-template-columns:repeat(5,1fr)!important;gap:5px!important;margin:0 0 10px!important}
#view .tiles.x5 .tile{min-height:50px!important;padding:4px 2px!important;border-radius:12px!important}
#view .tiles.x5 .tile span{font-size:15px!important}#view .tiles.x5 .tile b{font-size:10px!important}#view .tiles.x5 .tile small{font-size:9px!important}
#view .xqb{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:0 0 8px}#view .xqb .mini{height:34px;font-size:12.5px!important}
#sheet .xatt{display:flex;flex-direction:column;justify-content:flex-end;min-width:0;margin:8px 0}
#sheet .xatt>small{font-size:12px;color:var(--mu);margin-bottom:4px}
#sheet .xatt .files{margin:0!important;gap:5px!important;flex-wrap:nowrap!important;overflow-x:auto}
#sheet .xatt .fadd,#sheet .xatt .fth{width:42px!important;height:42px!important;flex:0 0 42px!important;font-size:15px!important;border-radius:10px!important;padding:0!important}
#sheet .xatt .fadd small,#sheet .xatt .fth small{font-size:8px!important}
#sheet .xatt .fth img{height:28px!important}
#sheet label.xnote{margin-top:0!important}
#sheet label.xnote input{font-size:12.5px!important;min-height:34px!important;text-align:start}
.xsel .xl{white-space:normal!important;overflow:visible!important;text-overflow:clip!important;line-height:1.25}
.xsel .xl small{white-space:nowrap;font-size:.85em}
#xfw .xfarc,#xfw .xfglow{position:absolute;left:calc(29px - var(--r));top:calc(29px - var(--r));width:calc(var(--r) * 2);height:calc(var(--r) * 2);border-radius:50%;pointer-events:none;clip-path:inset(0 50% 50% 0);opacity:0;transform:scale(.4);transition:transform .45s cubic-bezier(.34,1.56,.64,1),opacity .3s;transition-delay:var(--d,0ms);z-index:0}
#xfw .xfarc{border:1.5px dashed rgba(255,255,255,.28)}
#xfw .xfglow{background:radial-gradient(circle,color-mix(in srgb,var(--p) 35%,transparent) 0%,transparent 70%)}
#xfw.on .xfarc,#xfw.on .xfglow{opacity:1;transform:scale(1)}
#xfw .xfi small{font-size:8px!important}
#xupd{position:fixed;top:calc(env(safe-area-inset-top) + 8px);left:50%;transform:translate(-50%,-150%);z-index:3600;display:flex;align-items:center;gap:8px;padding:7px 8px 7px 14px;border-radius:30px;background:linear-gradient(135deg,color-mix(in srgb,var(--p) 85%,#fff),color-mix(in srgb,var(--p) 78%,#000));color:#fff;font-size:13px;font-weight:800;box-shadow:0 10px 26px rgba(0,0,0,.35);transition:transform .35s cubic-bezier(.34,1.56,.64,1);white-space:nowrap}
#xupd.on{transform:translate(-50%,0)}
#xupd button{border:0;border-radius:20px;padding:6px 14px;font:inherit;font-size:12.5px;font-weight:800;cursor:pointer}
#xupd .go{background:#fff;color:var(--p)}#xupd .no{background:rgba(255,255,255,.2);color:#fff;padding:6px 10px}
`;document.head.appendChild(s)})();

/* --- البحث: على مستوى السطر + بيتمسح لما تغيّر الشاشة --- */
addEventListener('toggle',e=>{const d=e.target;if(d&&d.dataset&&d.dataset.xso&&d.matches&&d.matches('#view details'))e.stopPropagation()},true);
function gfApply(){
  const raw=GQ[view]||'',q=xqn(raw),v=$('#view');if(!v)return;
  v.classList.toggle('xsq',!!q);
  const nq=xQParse(raw);
  const sumOf=el=>el.matches('details')?el.querySelector(':scope>summary'):el.querySelector(':scope>details>summary');
  const tx=el=>{const s=sumOf(el);let t=(s||el).textContent;
    if(s)s.parentElement.querySelectorAll(':scope>.xb>.kv').forEach(k=>{if(/ملاحظ/.test(((k.querySelector('span')||{}).textContent)||''))t+=' '+k.textContent});
    return xqn(t)};
  const am=el=>xAmts(sumOf(el)||el);
  const units=[...v.querySelectorAll('details.grp>.ckx,.list>*,.pcard')].filter((x,i,a)=>a.indexOf(x)===i);
  const lines=[...v.querySelectorAll('details.xgr .xl3')];
  let byAmt=!!(nq&&nq.op!=='has');
  if(nq&&nq.op==='has')byAmt=units.concat(lines).some(u=>am(u).some(a=>xQOk(a,nq)));
  const hit=el=>byAmt?am(el).some(a=>xQOk(a,nq)):tx(el).includes(q);
  const openSet=new Set();
  lines.forEach(l=>l.style.display='');
  units.forEach(u=>{
    let ok=true;
    if(q){const g=u.matches('details.xgr')?u:u.querySelector(':scope>details.xgr');
      if(g){const nb=g.querySelector(':scope>summary .grow>b');
        if(!byAmt&&nb&&xqn(nb.textContent).includes(q))ok=true;
        else{let n=0;g.querySelectorAll('.xl3').forEach(l=>{const h=hit(l);l.style.display=h?'':'none';if(h)n++});ok=n>0;if(ok)openSet.add(g)}}
      else ok=hit(u)}
    u.style.display=ok?'':'none';
  });
  v.querySelectorAll('details.grp').forEach(g=>{
    const it=[...g.querySelectorAll(':scope>.ckx,:scope>.list>*')];
    if(!q){g.style.display='';return}
    const n=it.filter(x=>x.style.display!=='none').length;g.style.display=n?'':'none';if(n)openSet.add(g);
  });
  v.querySelectorAll('details[data-xso]').forEach(d=>{if(!openSet.has(d)){delete d.dataset.xso;d.open=false}});
  openSet.forEach(d=>{if(!d.open){d.dataset.xso='1';d.open=true}});
  if(q){const i=v.querySelector('.gsr input');if(i)requestAnimationFrame(()=>xSqTop(i))}
}
try{const _goQ=go;go=function(v){if(v!==view){GQ={};bq='';WQ='';DQ='';DTX.q='';ITAB.q=''}return _goQ.apply(this,arguments)}}catch(e){}

/* --- أسهم الشهر والتقويم --- */
function monthBar(noLock){const k=ym(cur.y,cur.m);return `<div class="mbar"><button onclick="shiftM(1)">›</button><b>${MONTHS[cur.m-1]} ${cur.y} ${noLock?'':stTag2(k)}</b><button onclick="shiftM(-1)">‹</button></div>`}
function yearBar(){return `<div class="mbar"><button onclick="cur.y++;render()">›</button><b>${cur.y}</b><button onclick="cur.y--;render()">‹</button></div>`}
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
      body=`<div class="xch"><button type="button" data-n="1">›</button><b data-mm="1">${MONTHS[m-1]} ${y} ▾</b><button type="button" data-n="-1">‹</button></div><div class="xcg">${XDN.map(d=>`<i>${d}</i>`).join('')}${c}</div>`;
    }else body=`<div class="xch"><button type="button" data-y="1">›</button><b>${y}</b><button type="button" data-y="-1">‹</button></div><div class="xcm">${MONTHS.map((n,i)=>`<button type="button" data-m="${i+1}" class="${(monthOnly?inp.value===ym(y,i+1):i+1===m)?'on':''}">${n}</button>`).join('')}</div>`;
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

/* --- اختيار البند: مفيش قايمة غير لما تكتب --- */
function xCatOpen(){
  grab();const kind=F.type==='inc'?'inc':'exp',used={};
  S.txs.forEach(t=>{if(t.cat&&t.type===kind&&!t.feeOf)used[t.cat]=Math.max(used[t.cat]||0,t.created||0)});
  const auto=n=>String(n).indexOf('مصاريف إنستاباي')===0||n==='مصاريف الدفع';
  const cats=S.cats.filter(c=>c.kind===kind&&(c.active!==false||c.id===F.cat)&&(c.id===F.cat||!auto(c.name))).sort((a,b)=>(used[b.id]||0)-(used[a.id]||0)||a.name.localeCompare(b.name,'ar'));
  const H=cats.map(c=>{const cts=S.contacts.filter(x=>x.catId===c.id);return[c,qn([c.name,...(c.alias||[]),...cts.map(x=>x.name+' '+(x.spec||'')+' '+(x.phones||[]).join(' '))].join(' '))]});
  const ov=xOv();
  ov.innerHTML=`<div class="xpb"><div class="xpt"><b>${kind==='inc'?'💰 بند التحصيل':'💸 بند المصروف'}</b><button type="button" class="xpx">✕</button></div><input class="xpq" placeholder="🔍 اسم البند أو المحل أو رقم الموبايل"><div class="xpl"></div></div>`;
  const q=ov.querySelector('.xpq'),box=ov.querySelector('.xpl');
  const opt1=c=>`<button type="button" class="xpo ${c.id===F.cat?'on':''}" data-v="${c.id}">${xCatIc(c)}<span class="xl">${esc(c.name)}${c.fixed?'<small>📌 ثابت</small>':''}</span>${c.id===F.cat?'<i>✓</i>':''}</button>`;
  const full='<button type="button" class="xpo xnew" data-full="1"><span class="xic0">⚙️</span><span class="xl">بند جديد بالتفاصيل</span></button>';
  const draw=()=>{
    const v=qn(q.value),raw=q.value.trim();
    if(!v){const c=F.cat&&C(F.cat);box.innerHTML=(c?opt1(c):'')+'<p class="muted" style="text-align:center;margin:10px 0">🔍 اكتب عشان تدوّر على بند، أو اكتب اسم بند جديد</p>'+full;return}
    const l=H.filter(([c,h])=>h.includes(v)),exact=l.some(([c])=>qn(c.name)===v);
    box.innerHTML=(raw&&!exact&&!/^[\d\s+]+$/.test(raw)?`<button type="button" class="xpo xnew" data-new="1"><span class="xic0">➕</span><span class="xl">بند جديد: ${esc(raw)}</span></button>`:'')
      +l.map(([c])=>opt1(c)).join('')+(l.length?'':'<p class="muted" style="text-align:center;margin:8px 0">مفيش بند بالاسم ده</p>')+full;
    box.scrollTop=0;
  };
  draw();q.oninput=draw;setTimeout(()=>q.focus(),80);
  ov.onclick=e=>{
    if(e.target===ov||e.target.closest('.xpx'))return xOvClose(ov);
    const o=e.target.closest('.xpo');if(!o)return;const nm0=q.value.trim();xOvClose(ov);
    if(o.dataset.new){F.cat='__new';F.newCat=nm0;SHKEEP=1;txForm();return}
    if(o.dataset.full){XCATBACK=true;catForm(null,kind,nm0?{name:nm0}:undefined);return}
    catPick(o.dataset.v);
  };
}

/* --- فورم التسجيل: ✏️ البند · فاتورة · الأصناف · الملاحظة والمرفقات · الكريديت = فيزا --- */
function xIsCardAcct(id){const m=M(id);return !!m&&(xIsCr(id)||m.type==='card')}
var XACV={'f-m':'f-v','cf-acct':'cf-via','cf-qm':'cf-qv','y-m':'y-v','k-m':'k-v','lp-m':'lp-v'};
document.addEventListener('change',e=>{const s=e.target;if(!s||!XACV[s.id]||!xIsCardAcct(s.value))return;const v=document.getElementById(XACV[s.id]);if(!v||v.value==='card')return;v.value='card';v.dispatchEvent(new Event('change',{bubbles:true}));toast('💳 الطريقة بقت فيزا / كارت')});
function xCatEdit(){grab();XCATBACK=true;catForm(F.cat)}
async function xTxItems(){
  grab();if(F.items==null){const b=F.id&&S.buys.find(x=>x.txId===F.id);F.items=b?biOf(b).map(x=>({...x})):[]}
  const keep=F,r=await biReview(F.items,parseNum(F.amount));F=keep;if(r!==null)F.items=r;SHKEEP=1;txForm();
}
function xTxPost(){
  if(!F)return;const sz=document.querySelector('#sheet .sz');if(!sz)return;
  const orig=F.id&&S.txs.find(t=>t.id===F.id),src=!!(orig&&orig.src),exp=F.type==='exp';
  if(F.type==='tr'&&!F.id){const h=sz.querySelector('h2');if(h)h.textContent='🔁 تحويل بين حساباتك'}
  const xs=sz.querySelector('button.xsel[onclick="xCatOpen()"]'),cc=F.cat&&F.cat!=='__new'&&C(F.cat);
  if(xs&&cc&&!xs.disabled&&!xs.parentElement.classList.contains('inl')){const w=document.createElement('div');w.className='inl';xs.before(w);w.appendChild(xs);w.insertAdjacentHTML('beforeend','<button type="button" class="mini" title="تعديل البند" onclick="xCatEdit()">✏️</button>')}
  if(exp&&!src){const ch=sz.querySelector('.xchips');if(ch&&!ch.querySelector('.xbill'))ch.insertAdjacentHTML('beforeend',`<button type="button" class="xchip xbill ${F.isBill?'on':''}" onclick="grab();F.isBill=!F.isBill;SHKEEP=1;txForm()">🧾 فاتورة</button>`)}
  if(F.isBill||src){const fe=sz.querySelector('.xfee');if(fe)fe.remove()}
  const sv=sz.querySelector('.btn[onclick="saveTx()"]');
  if(exp&&sv&&!sz.querySelector('.xitb')){const bb=F.id&&S.buys.find(b=>b.txId===F.id),n=F.items?F.items.length:(bb?biOf(bb).length:0);sv.insertAdjacentHTML('beforebegin',`<button type="button" class="btn ghost xitb" onclick="xTxItems()">🧾 الأصناف${n?' ('+n+')':''}</button>`)}
  const nn=sz.querySelector('#f-n'),nl=nn&&nn.closest('label'),row=nl&&nl.parentElement,fl=[...sz.children].find(e=>e.classList.contains('files'));
  if(nl&&row&&row.classList.contains('two')&&fl){const pv=fl.previousElementSibling,cell=document.createElement('div');cell.className='xatt';cell.innerHTML='<small>📎 المرفقات</small>';cell.appendChild(fl);row.replaceChild(cell,nl);row.after(nl);nl.classList.add('xnote');if(pv&&pv.classList.contains('fl'))pv.remove()}
}
try{const _tfX=txForm;txForm=function(){
  try{if(F){const o=F.id&&S.txs.find(t=>t.id===F.id);
    if(F.isBill==null)F.isBill=!!(o&&o.bill);
    if(F.type!=='tr'&&!F.id&&!F.via&&xIsCardAcct(F.method))F.via='card';
    if(F.isBill||(o&&(o.src||o.payFeeOf)))F.feeOn=false}}catch(e){}
  const r=_tfX.apply(this,arguments);try{xTxPost()}catch(e){}return r}}catch(e){}
try{const _stX=saveTx;saveTx=async function(){
  grab();const before=new Set(S.txs.map(t=>t.id)),fid=F.id,isBill=!!F.isBill,items=F.items,kind=F.type;
  const r=await _stX.apply(this,arguments);
  try{if($('#sheet').classList.contains('open'))return r;
    let id=fid;if(!id){const n=S.txs.find(t=>!before.has(t.id)&&t.type===kind&&!t.feeOf&&!t.payFeeOf);id=n&&n.id}
    const t=id&&S.txs.find(x=>x.id===id);if(!t||kind!=='exp')return r;let ch=false;
    if(isBill&&!t.bill){t.bill=true;ch=true}else if(!isBill&&t.bill){delete t.bill;ch=true}
    if(Array.isArray(items)){let b=S.buys.find(x=>x.txId===t.id);
      if(items.length){if(!b){b={id:uid(),date:t.date,time:nowTime(),rt:'',no:'',txId:t.id,catId:t.cat,store:C(t.cat)?.name||'',items:[],total:t.amount,method:t.method,via:t.via,card:'',deliv:false,fid:'',ph:''};S.buys.push(b)}
        Object.assign(b,{items,total:t.amount,catId:t.cat,store:C(t.cat)?.name||b.store});ch=true}
      else if(b){b.items=[];ch=true}}
    if(ch){save();render()}
  }catch(e){}
  return r}}catch(e){}
function biRows(){
  const el=$('#bi-rows');if(!el)return;
  el.innerHTML=BIT.length?BIT.map((x,i)=>`<div class="bir"><input data-i="${i}" data-f="n" value="${esc(x.n)}" placeholder="اسم الصنف" oninput="biUpd(this)"><button type="button" class="mini danger bix" onclick="biDel(${i})">✕</button>
    <div class="three"><label>الكمية<input data-i="${i}" data-f="q" inputmode="decimal" dir="ltr" value="${x.q||''}" placeholder="1" oninput="biUpd(this)"></label><label>السعر<input data-i="${i}" data-f="p" inputmode="decimal" dir="ltr" value="${x.p||''}" placeholder="0" oninput="biUpd(this)"></label><label>القيمة<b data-v="${i}">${num(x.v)}</b></label></div></div>`).join(''):'<p class="empty">مفيش أصناف</p>';
  biSum();
}

/* --- الحسابات: الرصيد + المطابقة + التحويل --- */
function xNewTr(){newTx('tr')}
function xCashAcct(){return (S.methods.find(m=>m.active&&m.type==='cash')||S.methods.find(m=>m.type==='cash')||{}).id}
function xBal(id){
  const m=M(id),ca=xCashAcct();let b=+(m&&m.open)||0;
  S.txs.forEach(t=>{if(t.pend)return;if(t.type==='tr'){if(t.method===id)b-=t.amount;if(t.to===id)b+=t.amount}else if(t.method===id)b+=t.type==='inc'?t.amount:-t.amount});
  S.cash.forEach(c=>{if(c.method===id&&id!==ca)b-=c.amount;else if(id===ca&&c.method!==ca)b+=c.amount});
  return r2(b);
}
function vPmv(){
  const ml=keyTx(NKM),trs=S.txs.filter(t=>t.type==='tr'&&t.date.startsWith(NKM)).sort(byDesc);let mine=0,debt=0;
  const rows=S.methods.map(m=>{const b=xBal(m.id),cr=xIsCr(m.id);if(cr)debt+=Math.min(0,b);else mine+=b;
    let i=0,o=0;ml.forEach(t=>{if(t.method!==m.id||t.pend)return;if(t.type==='inc')i+=t.amount;else if(t.type==='exp')o+=t.amount});
    const bc=cr?xC((b<0?'💳 عليك ':'💳 ليك ')+num(Math.abs(b)),'#ea580c'):xC('💰 الرصيد '+(b<0?'-':'')+num(Math.abs(b)),b<0?'#dc2626':'#16a34a');
    return `<div class="row ${m.active?'':'off'}" style="cursor:default"><span class="pmlg">${xMIc(m)}</span><div class="grow"><b>${esc(m.name)}${cr?' <span class="tag wait">💳 كريديت</span>':''}${m.active?'':' <span class="badge rej">موقوف</span>'}</b>${xChips([bc,xC('⬇ '+num(i),'#16a34a'),xC('⬆ '+num(o),'#dc2626')])}</div><div class="acts"><button class="mini" onclick="xRecon('${m.id}')">⚖️</button><button class="mini" onclick="editMethod('${m.id}')">✏️</button><button class="mini danger" onclick="delMethod('${m.id}')">🗑</button></div></div>`});
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏦 ${esc(L('pm'))}</h3><button class="mini" onclick="xNewTr()">🔁 تحويل</button><button class="mini pri" onclick="editMethod()">+ حساب</button></div>`
    +kpis([['💰 فلوسك في الحسابات',fmt(mine),'inc'],['💳 مديونية الكريديت',fmt(Math.abs(debt)),'exp']])
    +`<p class="muted" style="font-size:11.5px;margin:0 2px 8px">⬇ دخل · ⬆ اتصرف في ${MONTHS[NM-1]} · ⚖️ قارن الرصيد بالبنك</p><div class="list">${rows.join('')}</div>`;
  h+=`<h3>🔁 التحويلات · ${MONTHS[NM-1]}</h3>`+(trs.length?`<div class="list">${trs.map(t=>`<div class="row" onclick="editTx('${t.id}')"><span class="ic" style="background:#dbeafe">🔁</span><div class="grow"><b>من ${esc(M(t.method)?.name||'—')} إلى ${esc(M(t.to)?.name||'—')}</b><small>${fdate(t.date)}${t.via?' · '+viaTxt(t.via):''}${t.note?' · '+esc(t.note):''}</small></div><div class="amt" style="color:var(--tr)">${num(t.amount)}</div></div>`).join('')}</div>`:'<p class="empty">لا يوجد</p>');
  return h;
}
function xRecon(id){
  const m=M(id);if(!m)return;const b=xBal(id),cr=xIsCr(id);
  sheet(`<h2>⚖️ مطابقة: ${esc(m.name)}</h2>
  <div class="kv"><span>${cr?'المديونية في البرنامج':'الرصيد في البرنامج'}</span><b>${fmt(cr?Math.max(0,-b):b)}</b></div>
  <label>${cr?'المديونية الحقيقية من كشف البنك':'الرصيد الحقيقي (من البنك أو اللي في إيدك)'}<input id="rc-v" class="amt-in" inputmode="decimal" dir="ltr" placeholder="0" oninput="xReconDiff('${id}')"></label>
  <div id="rc-d"></div>
  <button class="btn" onclick="xReconOpen('${id}')">🏁 أول مرة؟ اظبط رصيد البداية</button>
  <button class="btn ghost" onclick="xReconAdj('${id}')">🧾 سجّل الفرق كتسوية</button>
  <p class="muted" style="font-size:11.5px">أول مرة: اكتب رصيدك الحقيقي ودوس "رصيد البداية"، ودي مبتأثرش على المصروفات. بعد كده لو طلع فرق، راجع عمليات الحساب ده الأول (تحويل متسجل مصروف، أو حاجة مش متسجلة). ولو ملقتش السبب، سجّله تسوية.</p>`);
}
function xReconVal(id){const v=parseNum(($('#rc-v')||{}).value);if(isNaN(v))return null;return xIsCr(id)?-Math.abs(v):v}
function xReconDiff(id){const a=xReconVal(id),el=$('#rc-d');if(!el)return;if(a==null){el.innerHTML='';return}const d=r2(a-xBal(id));el.innerHTML=`<div class="kv"><span>الفرق</span><b class="${d<0?'neg':d>0?'pos':''}">${d?(d<0?'عجز ':'زيادة ')+fmt(Math.abs(d)):'مظبوط ✓'}</b></div>`}
function xReconOpen(id){const a=xReconVal(id);if(a==null)return toast('اكتب الرصيد');const m=M(id),d=r2(a-xBal(id));m.open=r2((+m.open||0)+d);m.openAt=today();save();closeSheet();render();toast('اتظبط رصيد البداية ✓')}
async function xReconAdj(id){
  const a=xReconVal(id);if(a==null)return toast('اكتب الرصيد');const d=r2(a-xBal(id));if(!d)return toast('مفيش فرق ✓');
  if(isClosed(today()))return toast('الشهر الحالي مقفول');
  if(!await ask('تسجيل الفرق؟',`${d>0?'تحصيل':'مصروف'} ${fmt(Math.abs(d))} باسم "تسوية رصيد"`,{icon:'⚖️',ok:'سجّل'}))return;
  const c=ensureCat('تسوية رصيد',d>0?'inc':'exp');c.active=true;
  S.txs.push({id:uid(),type:d>0?'inc':'exp',amount:Math.abs(d),cat:c.id,method:id,via:'',date:today(),note:'⚖️ تسوية',files:[],created:Date.now(),adj:true});
  save();closeSheet();render();toast('اتسجل ✓');
}

/* --- الفواتير والأقساط في المصروفات + مصاريف الدفع --- */
function xNewBill(){newTx('exp');if(F&&F.type==='exp'){F.isBill=true;F.feeOn=false;SHKEEP=1;txForm()}}
function xInstSheet(){
  const l=xInstDue(NKM).sort((a,b)=>a.it.due.localeCompare(b.it.due)),tot=l.reduce((a,x)=>a+(+x.it.amount||0),0),td=today();
  sheet(`<h2>🏦 الأقساط</h2>
  <details class="gen"><summary>📅 أقساط ${MONTHS[NM-1]} (${l.length}) · ${num(tot)}</summary>
  ${l.length?`<div class="list" style="margin-top:8px">${l.map(({p,it})=>`<div class="row" onclick="payStart('${p.id}','${it.id}')"><span class="ic" style="background:var(--soft)">🏦</span><div class="grow"><b>${esc(p.name)}</b><small class="${it.due<td?'neg':''}">${fdate(it.due)}${it.due<td?' · متأخر':''}</small></div><div class="amt">${num(+it.amount||0)}</div><span class="mini pri">✓ دفع</span></div>`).join('')}</div>`:'<p class="empty">مفيش أقساط الشهر ده</p>'}
  </details><button class="btn ghost" onclick="closeSheet();go('inst')">🏦 كل الأقساط</button>`);
}
try{const _psF=paySheet;paySheet=function(){const r=_psF.apply(this,arguments);try{const v=$('#y-v'),row=v&&v.closest('label')&&v.closest('label').parentElement;if(row&&!$('#y-fee'))row.insertAdjacentHTML('afterend',`<label>💸 مصاريف الدفع<input id="y-fee" inputmode="decimal" dir="ltr" value="${esc(PAY.fee||'')}" placeholder="0"></label>`)}catch(e){}return r}}catch(e){}
try{const _gpF=grabPay;grabPay=function(){_gpF.apply(this,arguments);if($('#y-fee'))PAY.fee=$('#y-fee').value}}catch(e){}
function xPayFeeAdd(t,a,pn){const c=ensureCat('مصاريف الدفع','exp');c.active=true;S.txs.push({id:uid(),type:'exp',amount:a,cat:c.id,method:t.method,via:t.via||'',date:t.date,note:'💸 مصاريف دفع قسط'+(pn?' '+pn:''),files:[],created:Date.now(),payFeeOf:t.id})}
try{const _dpF=doPay;doPay=function(){grabPay();const fee=parseNum(PAY.fee),pid=PAY.pid,iid=PAY.iid;const r=_dpF.apply(this,arguments);
  try{const p=plan(pid),it=p&&p.items.find(x=>x.id===iid),t=it&&itTx(it);if(t&&fee>0&&!S.txs.some(x=>x.payFeeOf===t.id)){xPayFeeAdd(t,fee,p.name);save();render()}}catch(e){}return r}}catch(e){}
async function xPayFeeEdit(txId){
  const t=S.txs.find(x=>x.id===txId);if(!t)return;const f=S.txs.find(x=>x.payFeeOf===txId);
  const v=await askIn('💸 مصاريف الدفع','',f?amtStr(f.amount):'',true);if(v==null)return;
  if(isClosed(t.date))return toast('الشهر مقفول');const a=parseNum(v)||0;
  if(f){if(a>0)f.amount=a;else S.txs=S.txs.filter(x=>x!==f)}else if(a>0)xPayFeeAdd(t,a,'');
  save();render();toast('اتحفظ ✓');
}
function xPayFeeClean(){const ids=new Set(S.txs.map(t=>t.id)),bad=S.txs.filter(t=>t.payFeeOf&&!ids.has(t.payFeeOf)&&!isClosed(t.date));if(bad.length){const b=new Set(bad);S.txs=S.txs.filter(t=>!b.has(t));save()}}
try{const _rPF=render;render=function(){try{xPayFeeClean()}catch(e){}return _rPF.apply(this,arguments)}}catch(e){}
function vPlan(){
  const p=plan(instPlan);if(!p){view='inst';return vInst()}
  const st=planStats(p),fee=t=>{const f=t&&S.txs.find(x=>x.payFeeOf===t.id);return f?f.amount:0};
  const items=[...p.items].sort((a,b)=>(a.due||'').localeCompare(b.due||'')),ft0=items.reduce((a,it)=>a+fee(itTx(it)),0);
  let h=`<div class="phead"><button class="mini" onclick="go('inst')">→</button><h3>${esc(p.name)}</h3><button class="mini" onclick="planEdit('${p.id}')">✏️ تعديل</button></div>`;
  h+=kpis([['الإجمالي',fmt(st.total),'net'],['المدفوع',fmt(st.paid),'inc'],['الباقي',fmt(st.total-st.paid),'exp']].concat(ft0?[['💸 مصاريف الدفع',fmt(ft0),'warn']]:[]));
  if(p.note)h+=`<p class="muted">📝 ${esc(p.note)}</p>`;
  if(p.files.length)h+=`<div class="files">${p.files.map(id=>fileThumb(id,'view')).join('')}</div>`;
  h+=tbl(['الميعاد','المبلغ','مصاريف الدفع','الحالة',''],items.map(it=>{const t=itTx(it),f=fee(t);
    return `<tr><td>${dmy2(it.due)}</td><td><b>${num(+it.amount||0)}</b></td><td>${t?`<button class="mini" onclick="xPayFeeEdit('${t.id}')">${f?num(f):'＋'}</button>`:'—'}</td><td>${t?`<span class="tag ok">مدفوع</span>${sm(fd(t.date)+((t.files||[]).length?' · 📎':''))}`:stTag({st:'wait'},it.due)}</td>
    <td>${t?`<button class="mini" onclick="editTx('${t.id}')">🧾</button> <button class="mini" onclick="unpay('${p.id}','${it.id}')">↩</button>`:`<button class="mini pri" onclick="payStart('${p.id}','${it.id}')">✓ دفع</button>`}</td></tr>`}),
    ft0?`<tr><td>الإجمالي</td><td>${num(st.total)}</td><td>${num(ft0)}</td><td></td><td></td></tr>`:'');
  return h;
}
function vExps(){
  const k=ym(cur.y,cur.m),list=keyTx(k).filter(t=>t.type==='exp'),s=xSums(keyTx(k));
  const dl=dueList(k,'','exp'),linked=new Set(dl.filter(o=>o.s.st==='done').map(o=>o.s.t.id));
  const isI=t=>!!((t.src&&t.src.k==='i')||t.payFeeOf);
  const instT=list.filter(isI),instU=xInstDue(k);
  const bills=list.filter(t=>t.bill&&!linked.has(t.id)&&!isI(t));
  const others=list.filter(t=>!linked.has(t.id)&&!isI(t)&&!t.bill),ptx=pendTx('exp',k);
  XRC=new Set(S.buys.map(b=>b.txId));
  const fixSum=dl.reduce((a,o)=>a+(o.s.st==='done'?o.s.t.amount:o.s.st==='skip'?0:o.amt),0);
  const instSum=instT.reduce((a,t)=>a+t.amount,0)+instU.reduce((a,x)=>a+(+x.it.amount||0),0);
  const billSum=bills.reduce((a,t)=>a+t.amount,0),varSum=others.reduce((a,t)=>a+t.amount,0),pSum=ptx.reduce((a,t)=>a+t.amount,0),g=XE.g;
  let h=`<div class="phead"><h3>💸 ${esc(L('exp'))}</h3><button class="mini" onclick="scanReceipt()">📷 Receipt Scan</button><button class="mini pri" onclick="newTx('exp')">+ ${esc(L('expOne'))}</button></div>`
    +`<div class="xqb"><button class="mini" onclick="xNewBill()">🧾 فاتورة</button><button class="mini" onclick="xInstSheet()">🏦 قسط${instU.length?' ('+instU.length+')':''}</button></div>`
    +monthBar()+kpis([['اتصرف',fmt(s.exp),'exp'],['💳 كريديت',fmt(s.cr),'warn'],['💵 من فلوسك',fmt(s.expNC),'net']])
    +xTiles([['all','🗂️','الكل',list.length+ptx.length+instU.length],['fix','📌','ثابت',dl.length],['inst','🏦','أقساط',instT.length+instU.length],['bill','🧾','فواتير',bills.length],['var','🛒','متغير',others.length+ptx.length]],g,'XE.g').replace('tiles x4','tiles x5')+sortBar();
  if(g==='all'||g==='fix'){const fl=sortList(dl.map(o=>({h:fixedRow(o),a:o.s.t?o.s.t.amount:o.amt,d:o.date,n:o.r.name})));
    h+=grp('ef','📌 ثابت',fl.length,fixSum,'neg',fl.map(x=>x.h).join('')+`<div style="padding:8px 12px"><button class="mini pri" onclick="catForm(null,'exp',{fixed:true})">+ مصروف ثابت</button></div>`)}
  if(g==='all'||g==='inst'){const il=sortList(instU.map(x=>({h:xInstDueRow(x),a:+x.it.amount||0,d:x.it.due,n:x.p.name})).concat(instT.map(t=>({h:t.payFeeOf?xExpRow(t):xInstPaidRow(t),a:t.amount,d:t.date,n:t.payFeeOf?'':(plan(t.src.id)||{}).name||''}))));
    h+=grp('ei','🏦 أقساط',il.length,instSum,'neg',il.map(x=>x.h).join('')+`<div style="padding:8px 12px"><button class="mini pri" onclick="planNew()">+ أقساط جديدة</button></div>`)}
  if(g==='all'||g==='bill'){const rows=sortList(xGroup(bills,'exp'),true);
    h+=grp('eb','🧾 فواتير',bills.length,billSum,'neg',(rows.length?`<div class="list">${rows.map(x=>x.h).join('')}</div>`:'')+`<div style="padding:8px 12px"><button class="mini pri" onclick="xNewBill()">+ فاتورة</button></div>`)}
  if(g==='all'||g==='var'){
    if(ptx.length)h+=grp('ep','⏳ غير مدفوع',ptx.length,pSum,'neg',ptx.map(txRow).join(''));
    const rows=sortList(xGroup(others,'exp'),true);
    h+=grp('ev','🛒 متغير',others.length,varSum,'neg',rows.length?`<div class="list">${rows.map(x=>x.h).join('')}</div>`:'');
  }
  return h;
}

/* --- التقرير اليومي + كشف حساب الكريديت --- */
function xBDay(){
  const d=RF.xd||today(),ty=RF.xt||'',l=S.txs.filter(t=>!t.pend&&t.type!=='tr'&&t.date===d&&(!ty||t.type===ty)).sort(byAsc),s=xSums(l);
  let b=ty==='inc'?rkp([[L('inc'),s.inc,'inc'],['عدد العمليات',String(l.length),'net']]):ty==='exp'?rkp([[L('exp'),s.exp,'exp'],['عدد العمليات',String(l.length),'net']]):xKp(s)+ioPie(s);
  const sub=fdate(d)+' · '+(XWD[new Date(d+'T00:00').getDay()]||'');
  if(!l.length)return{title:'التقرير اليومي',sub,body:b+NONE};
  const part=kind=>{const g={};l.filter(t=>t.type===kind).forEach(t=>(g[t.cat]=g[t.cat]||[]).push(t));
    const e=Object.entries(g).map(([id,ts])=>[id,ts,ts.reduce((a,t)=>a+t.amount,0)]).sort((a,c)=>c[2]-a[2]);if(!e.length)return NONE;
    return e.map(([id,ts,v])=>`<div class="rs2">${esc(C(id)?.name||'—')}<em>${nm(num(v))}</em></div>`+rtbl(['الحساب','المبلغ|n'],ts.map(t=>`<tr class="clk" onclick="editTx('${t.id}')">${cT(esc(M(t.method)?.name||'—'),[t.via?viaTxt(t.via):'',t.created?fmtTime(new Date(t.created).toTimeString().slice(0,5)):'',t.note&&!/^🧾/.test(t.note)?t.note:''].filter(Boolean).map(esc).join(' · '))}${cN(num(t.amount),kind)}</tr>`),ts.length>1?ft('الإجمالي',1,fN(num(v))):'')).join('')};
  if(ty!=='exp')b+=rsec('💰 '+esc(L('inc')),num(s.inc))+part('inc');
  if(ty!=='inc')b+=rsec('💸 '+esc(L('exp')),num(s.exp))+part('exp');
  if(!ty)b+=rsec('🧮 '+esc(L('net')))+xNetTbl(s);
  return{title:'التقرير اليومي',sub,body:b,csv:{head:['النوع','البند','الحساب','الطريقة','المبلغ','ملاحظة'],rows:l.map(t=>[t.type==='inc'?L('incOne'):L('expOne'),C(t.cat)?.name||'',M(t.method)?.name||'',viaTxt(t.via),t.type==='exp'?-t.amount:t.amount,t.note||''])}};
}
if(!REPS.day){const tmp={...REPS};Object.keys(tmp).forEach(k=>delete REPS[k]);REPS.day={ic:'🗓️',t:'التقرير اليومي',b:xBDay};Object.assign(REPS,tmp)}
try{const _xpfD=xPreFields;xPreFields=function(){
  if(rtab!=='day')return _xpfD.apply(this,arguments);if(!RF.xd)RF.xd=today();
  return `<label>📅 اليوم<input type="date" value="${RF.xd}" onchange="xPF('xd',this.value)"></label>`
    +xSel('🔀 النوع','xt',xOptL([['','التحصيل والمصروف'],['inc',L('inc')],['exp',L('exp')]],RF.xt||''))
    +xMulti('🏦 الحساب','xms',RF.xms||[],(x,i)=>xOptL([['',i?'— اختار —':'كل الحسابات']].concat(S.methods.map(m=>[m.id,m.name])),x),'حساب تاني');
}}catch(e){}
function xBCredit(f,t,ms){
  const set=new Set(ms),inR=x=>!x.pend&&x.date>=f&&x.date<=t;
  const ex=S.txs.filter(x=>x.type==='exp'&&set.has(x.method)&&inR(x)).sort(byAsc);
  const pay=S.txs.filter(x=>inR(x)&&((x.type==='tr'&&set.has(x.to))||(x.type==='inc'&&set.has(x.method)))).sort(byAsc);
  const te=r2(ex.reduce((a,x)=>a+x.amount,0)),tp=r2(pay.reduce((a,x)=>a+x.amount,0));
  let b=rkp([['💳 اتصرف بالكريديت',te,'exp'],['✅ اتسدد',tp,'inc'],[te>=tp?'⏳ لسه عليك':'ليك',Math.abs(r2(te-tp)),te>tp?'warn':'inc']]);
  const g={};ex.forEach(x=>(g[x.cat]=g[x.cat]||[]).push(x));
  const e=Object.entries(g).map(([id,ts])=>[id,ts,ts.reduce((a,x)=>a+x.amount,0)]).sort((a,c)=>c[2]-a[2]);
  if(e.length>1)b+=donut(e.map(([id,,v])=>({label:C(id)?.name||'—',value:v})),'الكريديت');
  b+=rsec('💳 المصروفات',num(te))+(e.length?e.map(([id,ts,v])=>`<div class="rs2">${esc(C(id)?.name||'—')}<em>${nm(num(v))}</em></div>`+rtbl(['التاريخ|c','التفاصيل','المبلغ|n'],ts.map(x=>`<tr class="clk" onclick="editTx('${x.id}')">${cD(x.date)}${cT(esc(M(x.method)?.name||'—'),[viaTxt(x.via),x.note&&!/^🧾/.test(x.note)?x.note:''].filter(Boolean).map(esc).join(' · '))}${cN(num(x.amount),'exp')}</tr>`),ts.length>1?ft('الإجمالي',2,fN(num(v))):'')).join(''):NONE);
  if(pay.length)b+=rsec('✅ السداد',num(tp))+rtbl(['التاريخ|c','من','المبلغ|n'],pay.map(x=>`<tr class="clk" onclick="editTx('${x.id}')">${cD(x.date)}${cT(esc(x.type==='tr'?(M(x.method)?.name||'—'):(C(x.cat)?.name||'—')),'')}${cN(num(x.amount),'inc')}</tr>`),pay.length>1?ft('الإجمالي',2,fN(num(tp))):'');
  return{title:'كشف حساب الكريديت',sub:xRngTxt(f,t),body:b,csv:{head:['التاريخ','البند','المبلغ','ملاحظة'],rows:ex.map(x=>[dmy(x.date),C(x.cat)?.name||'',x.amount,x.note||''])}};
}
try{const _xrrC=xRepRun;xRepRun=function(k){try{if(k==='stmt'){xLegacy(k);const ms=(RF.xms||[]).filter(Boolean);if(ms.length&&ms.every(xIsCr)){const p=xPer(k);return xBCredit(p.f,p.t,ms)}}}catch(e){}return _xrrC.apply(this,arguments)}}catch(e){}

/* --- دايرة ➕ منظمة --- */
function xFabPos(n){
  const nav=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--navh'))||64,hd=(document.querySelector('header')||{}).offsetHeight||60;
  const mx=innerWidth-16-29-8,my=innerHeight-nav-16-29-hd-8,Q=Math.PI/2;let best=null;
  for(let sz=52;sz>=34;sz-=3){
    const gap=sz+12,half=sz/2,lim=Math.min(mx,my)-half,rings=[];let R=Math.max(29+half+26,Math.ceil(2*gap/Q)+1),tc=0;
    while(tc<n&&R<=lim){const cap=Math.floor(Q*R/gap)+1;rings.push({R,cap});tc+=cap;R+=gap}
    if(!rings.length)continue;
    const ms=rings.map(r=>Math.max(1,Math.floor(n*r.cap/Math.max(tc,n))));let s=ms.reduce((a,b)=>a+b,0);
    const ord=rings.map((r,i)=>[n*r.cap/Math.max(tc,n)%1,i]).sort((a,b)=>b[0]-a[0]);
    for(let k=0;s<n&&k<200;k++){const i=ord[k%ord.length][1];if(ms[i]<rings[i].cap){ms[i]++;s++}}
    for(let i=ms.length-1;i>=0&&s>n;i--)while(ms[i]>1&&s>n){ms[i]--;s--}
    const pos=[];rings.forEach(({R},i)=>{const m=ms[i];for(let j=0;j<m;j++){const a=1.5*Math.PI-(m===1?Q/2:j*Q/(m-1));pos.push([Math.round(Math.cos(a)*R),Math.round(Math.sin(a)*R)])}});
    best={pos:pos.slice(0,n),sz,rings:rings.map(r=>r.R)};if(tc>=n)return best;
  }
  best=best||{pos:[],sz:34,rings:[]};while(best.pos.length<n)best.pos.push(best.pos[best.pos.length-1]||[0,-80]);return best;
}
function xFabBuild(){
  const w=$('#xfw');if(!w)return;const ks=xFabList(),box=w.querySelector('.xfis'),n=ks.length;
  const{pos,sz,rings}=xFabPos(n),off=(58-sz)/2,last=rings.length?rings[rings.length-1]:0;
  box.innerHTML=(last?`<i class="xfglow" style="--r:${last+sz}px"></i>`:'')+rings.map((R,i)=>`<i class="xfarc" style="--r:${R}px;--d:${i*70}ms"></i>`).join('')
    +ks.map((k,i)=>{const[ic,l,,col]=XFC[k],c=xFabRel(k);
    return `<button type="button" class="xfi ${sz<46?'sm':''}" style="--x:${pos[i][0]}px;--y:${pos[i][1]}px;--d:${i*25}ms;width:${sz}px !important;height:${sz}px !important;left:${off}px !important;top:${off}px !important;background:linear-gradient(135deg,${col})" onclick="xFab(0);xFabGo('${k}')"><span>${ic}</span><small>${esc(l)}</small>${c?`<b class="xfb">${c}</b>`:''}</button>`}).join('');
  if(!n)toast('مفيش زراير · ظبطها من ⚙️ الإعدادات ← أزرار ➕');
}
Object.assign(XFC,{tr:['🔁','تحويل','xNewTr()','#38bdf8,#0369a1',()=>0,''],bill:['🧾','فاتورة','xNewBill()','#fb7185,#be123c',()=>0,''],day:['🗓️','اليوم',"openRep('day')",'#a3e635,#4d7c0f',()=>0,'']});

/* --- الكونتاكت من الريسيت: Yes / تعديل / No --- */
var XCTP=null;
async function contactFromReceipt(rc,cat){
  await new Promise(r=>setTimeout(r,700));
  const phones=rc.phones||[];
  let mine=S.contacts.find(c=>c.catId===cat.id)||S.contacts.find(c=>normAr(c.name)===normAr(cat.name));
  if(!mine&&phones.length){const f=findPhone(phones);if(f)mine=f.c}
  if(!phones.length){if(mine&&!mine.catId){mine.catId=cat.id;save()}if(!mine||!(mine.phones||[]).length)askAddPhone(cat,rc,mine?mine.id:null);return}
  const known=[],added=[];
  phones.forEach(p=>{const f=findPhone([p]);if(f&&mine&&f.c.id===mine.id)return;if(f)known.push({p,n:f.c.name});else added.push(p)});
  if(mine&&!added.length){let ch=false;if(!mine.catId){mine.catId=cat.id;ch=true}if(!mine.address&&rc.address){mine.address=rc.address;ch=true}if(ch)save();toast('📇 رقم المحل متسجل قبل كده');return}
  XCTP={id:mine?mine.id:null,cat,added,address:rc.address||'',kind:rc.rest?'rest':'shop'};
  sheet(`<h2>📇 ${mine?'أضيف الرقم الجديد للمحل؟':'أسجّل المحل في Contacts؟'}</h2>
  <div class="kv"><span>🏪 الاسم</span><b>${esc(mine?mine.name:cat.name)}</b></div>
  ${added.map(p=>`<div class="kv"><span>📞 ${mine?'رقم جديد':'الرقم'}</span><b dir="ltr">${p}</b></div>`).join('')}
  ${known.map(x=>`<div class="kv"><span>📞 متسجل باسم ${esc(x.n)}</span><b dir="ltr">${x.p}</b></div>`).join('')}
  ${rc.address?`<div class="kv"><span>📍 العنوان</span><b>${esc(rc.address)}</b></div>`:''}
  <p class="muted" style="font-size:11.5px">الأرقام ساعات بتتقرا غلط من الريسيت. دوس ✏️ تعديل وصلّحها، وبعدين احفظ.</p>
  <button class="btn" onclick="xCtYes()">✅ Yes</button>
  <button class="btn ghost" onclick="xCtEdit()">✏️ تعديل</button>
  <button class="btn ghost danger" onclick="XCTP=null;closeSheet()">❌ No</button>`);
}
function xCtYes(){
  const x=XCTP;XCTP=null;if(!x)return closeSheet();let c=x.id&&S.contacts.find(y=>y.id===x.id);
  if(c){c.phones=[...new Set([...(c.phones||[]),...x.added])];if(!c.address&&x.address)c.address=x.address;if(!c.catId)c.catId=x.cat.id}
  else S.contacts.push({id:uid(),name:x.cat.name,kind:x.kind,spec:'',phones:x.added,address:x.address,loc:'',catId:x.cat.id,at:Date.now()});
  save();closeSheet();render();toast('📇 اتسجل ✓');
}
function xCtEdit(){
  const x=XCTP;XCTP=null;if(!x)return;const c=x.id&&S.contacts.find(y=>y.id===x.id);
  if(c)ctForm(c.id,{phones:[...(c.phones||[]),...x.added],address:c.address||x.address,catId:c.catId||x.cat.id});
  else ctForm(null,{name:x.cat.name,kind:x.kind,phones:x.added.length?x.added:[''],address:x.address,catId:x.cat.id});
}

/* --- الباسوردات: أرقام عربي + ريسيت --- */
async function pwUnlock(){
  const el=$('#pw-m'),v=el?el.value:'';if(!v)return toast('اكتب الباسورد');toast('⏳ ...');
  const V=S.settings.vault,salt=pwUnB64(V.salt);
  for(const c of [...new Set([v,v.trim(),latD(v),latD(v).trim()])]){try{const key=await pwKey(c,salt);PWV.items=await pwDec(key,V);PWV.key=key;return pwGo('list')}catch(e){}}
  toast('الباسورد غلط');if(el){el.value='';el.focus()}
}
async function xPwReset(){
  if(!await ask('ريسيت الخزنة؟','كل الباسوردات المتسجلة هتتمسح، وهتعمل باسورد رئيسي جديد.',{danger:true,icon:'⚠️',ok:'امسح وابدأ من جديد'}))return;
  if(!await ask('آخر تأكيد','المسح مش هيترجع.',{danger:true,icon:'🗑',ok:'امسح'}))return;
  delete S.settings.vault;save();pwLock(true);pwRender();toast('اتعملت ريسيت ✓ اعمل باسورد جديد');
}
try{const _pwR=pwRender;pwRender=function(){const r=_pwR.apply(this,arguments);try{const el=$('#pw-m'),c=el&&el.closest('.pwc');if(c&&!c.querySelector('.xpwr'))c.insertAdjacentHTML('beforeend','<button class="btn ghost danger xpwr" onclick="xPwReset()">🔄 نسيت الباسورد؟ ريسيت الخزنة</button>')}catch(e){}return r}}catch(e){}

/* --- إيصال إنستاباي من Share --- */
async function xShareIn(){
  if(!/[?&]share=1/.test(location.search))return;
  try{history.replaceState(history.state,'',location.pathname)}catch(e){}
  if(!('caches' in window))return;
  const c=await caches.open('centric-share'),ks=await c.keys(),files=[];
  for(const k of ks){const r=await c.match(k);if(!r)continue;const b=await r.blob();files.push(new File([b],decodeURIComponent(r.headers.get('X-Name')||'receipt'),{type:b.type||r.headers.get('Content-Type')||''}))}
  await caches.delete('centric-share');if(!files.length)return;
  const ids=await addFiles(files);
  const wait=()=>{if($('#lock').classList.contains('on')||document.querySelector('.dlg'))return setTimeout(wait,800);xShareAsk(ids)};setTimeout(wait,500);
}
async function xShareAsk(ids){
  const r=await ask('📎 إيصال جديد',`اتستلم ${ids.length} ملف. تسجله على إيه؟`,{icon:'📎',ok:'💸 مصروف',cancel:'💰 تحصيل'});if(r===null)return;
  closeSheet();newTx(r?'exp':'inc');if(F){F.files=(F.files||[]).concat(ids);F.via='instapay';SHKEEP=1;txForm()}
}
setTimeout(xShareIn,900);

/* --- التحديث: البرنامج بيفتح فوراً، ولو فيه نسخة جديدة بيقولك --- */
var XUPD=false;
function xUpdShow(){
  if($('#lock').classList.contains('on'))return setTimeout(xUpdShow,1500);
  let el=$('#xupd');if(!el){el=document.createElement('div');el.id='xupd';document.body.appendChild(el)}
  el.innerHTML='<span>🆕 فيه تحديث جديد</span><button class="go" onclick="xUpdGo()">تشغيل</button><button class="no" onclick="$(\'#xupd\').classList.remove(\'on\')">✕</button>';
  requestAnimationFrame(()=>el.classList.add('on'));
}
function xUpdGo(){try{xStSave()}catch(e){}try{draftSave()}catch(e){}location.reload()}
if(navigator.serviceWorker)navigator.serviceWorker.addEventListener('message',e=>{
  const d=e.data||{};
  if(d.type==='locked'){location.reload();return}
  if(d.type==='update'&&!XUPD){XUPD=true;setTimeout(xUpdShow,1200)}
});
try{render()}catch(e){}
/* ========== 2.21.32 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
html,body{overscroll-behavior-y:none!important}
header,main,nav,.sz,.dbox,#banner,.paper{zoom:calc(var(--z) * .93)!important}
.mbar button,.xch button{direction:ltr!important;unicode-bidi:isolate!important}
.xsel{overflow:hidden}
#sheet .two .xsel .xl{display:flex!important;flex-direction:column;align-items:flex-start;line-height:1.15!important}
#sheet .two .xsel .xl small{margin:0!important;font-size:10px!important}
#sheet .sz h2{font-size:15px!important;margin:0 0 8px!important}
#sheet .amt-in{font-size:19px!important;min-height:42px!important;padding:4px 10px!important;margin-top:4px!important}
#sheet .xsel{min-height:36px!important;padding:3px 9px!important;font-size:12.5px!important}
#sheet label{margin:6px 0!important}
#sheet .xchip{padding:4px 10px!important;font-size:11.5px!important}
#sheet .xchips{margin:2px 0 6px!important}
#sheet .xipb{padding:6px 8px!important;margin-bottom:6px!important}
#sheet .btn{padding:8px!important;font-size:13px!important;margin-top:6px!important}
#sheet .inl .mini{padding:0 10px!important}
#sheet .shbar{padding-block:5px!important;margin-bottom:6px!important}
`;document.head.appendChild(s)})();

/* --- Enter بيقفل الكيبورد في كل البرنامج --- */
document.addEventListener('focusin',e=>{const t=e.target;if(t&&t.tagName==='INPUT'&&!/^(checkbox|radio|range|file)$/.test(t.type)&&!t.hasAttribute('enterkeyhint'))t.setAttribute('enterkeyhint','done')});
document.addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.keyCode!==13)return;const t=e.target;if(!t||t.tagName!=='INPUT')return;setTimeout(()=>{try{t.blur()}catch(_){}},0)});

/* --- الفاتورة: من غير "حولت على إنستاباي لـ" --- */
try{const _tfB=txForm;txForm=function(){
  let ib=false;
  try{if(F){const o=F.id&&S.txs.find(t=>t.id===F.id);ib=F.isBill==null?!!(o&&o.bill):!!F.isBill;if(ib)F.ip={k:'phone',v:''}}}catch(e){}
  const r=_tfB.apply(this,arguments);
  try{if(ib){const b=document.querySelector('#sheet .xipb');if(b)b.remove()}}catch(e){}
  return r}}catch(e){}

/* --- التقارير: الفواتير قسم لوحدها --- */
if(!XEXPG.bill){const v0=XEXPG.var;delete XEXPG.var;XEXPG.bill=['🧾 فواتير','فواتير','#db2777'];XEXPG.var=v0}
try{const _gbB=grpBlock;grpBlock=function(list,kind,G,fn,click){if(G===XEXPG){const f0=fn;fn=t=>t.bill?'bill':t.payFeeOf?'inst':f0(t)}return _gbB.call(this,list,kind,G,fn,click)}}catch(e){}

/* --- Share: مصروف جديد / تحصيل جديد / أرفقه على عملية متسجلة --- */
var XSHIDS=[];
XSQS+=',#sheet #shq';
function xShareAsk(ids){
  XSHIDS=ids;const lim=addMonths(today(),-2);
  const l=S.txs.filter(t=>t.type!=='tr'&&!t.feeOf&&!t.payFeeOf&&t.date>=lim).sort(byDesc).slice(0,80);
  sheet(`<h2>📎 إيصال جديد</h2>
  <div class="files">${ids.map(id=>fileThumb(id,'view')).join('')}</div>
  <div class="two"><button class="btn" onclick="xShareNew('exp')">💸 مصروف جديد</button><button class="btn ghost" onclick="xShareNew('inc')">💰 تحصيل جديد</button></div>
  <h3>📂 أو أرفقه على عملية متسجلة</h3>
  <input id="shq" placeholder="🔍 اسم البند أو المبلغ" oninput="xShFilt(this.value)">
  <div class="list" id="shl" style="margin-top:8px">${l.map(t=>`<div class="row" data-q="${esc(xqn([C(t.cat)?.name,t.note,t.amount,num(t.amount),dmy(t.date)].join(' ')))}" onclick="xShareTo('${t.id}')"><span class="ic" style="background:var(--soft)">${t.type==='inc'?'💰':t.bill?'🧾':'💸'}</span><div class="grow"><b>${esc(C(t.cat)?.name||'—')}</b><small>${dmy(t.date)}${(t.files||[]).length?' · 📎 '+t.files.length:''}${t.pend?' · ⏳':''}</small></div><div class="amt ${t.type}">${num(t.amount)}</div></div>`).join('')||'<p class="empty">مفيش عمليات</p>'}</div>`);
}
function xShFilt(v){const q=xqn(v);document.querySelectorAll('#shl .row').forEach(r=>r.style.display=!q||r.dataset.q.includes(q)?'':'none')}
function xShareNew(k){const ids=XSHIDS;closeSheet();newTx(k);if(F){F.files=(F.files||[]).concat(ids);if(k==='exp')F.via='instapay';SHKEEP=1;txForm()}}
function xShareTo(id){const t=S.txs.find(x=>x.id===id);if(!t)return;t.files=[...(t.files||[]),...XSHIDS];save();closeSheet();render();toast('📎 اترفق ✓');setTimeout(()=>editTx(id),300)}

/* --- شاشة التحميل بتختفي لما كل حاجة تحمّل --- */
(function(){try{const b=document.getElementById('xboot');if(b)b.remove()}catch(e){}})();
try{render()}catch(e){}
/* ========== 2.21.33 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
html,body{overscroll-behavior-y:auto!important}
html{overscroll-behavior-y:none!important}
*,*::before,*::after{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
.brand::before{display:none!important}
.appbox{background:rgba(255,255,255,.16)!important}
.brand .pill{background:var(--card,#fff)!important}
#view .mini,#view .rbtn,#view .tile:not(.on),#sheet .mini,#sheet .btn.ghost,.xchip:not(.on),.cbt{background:var(--card,#fff)!important}
.hero .xbx{background:rgba(255,255,255,.14)!important}
body.xhome main{zoom:calc(var(--z) * 1)!important}
body.xhome .hero{padding:10px 12px!important}
body.xhome .xbx .xv{font-size:14.5px!important;min-height:30px!important}
body.xhome .dash .tile .tth{font-size:11.5px!important}
body.xhome .tile .xv{font-size:13px!important;min-height:26px!important}
`;document.head.appendChild(s)})();
/* ========== 2.21.34 ========== */
/* --- أرصدة الحسابات: بصمة + باسورد --- */
var XBALOK=false;
async function xBalUnlock(after){
  if(XBALOK){if(after)after();return true}
  if(LK.bio){try{await bioVerify()}catch(e){toast('البصمة ما اتعرفتش');return false}}
  if(!S.settings.balPw){
    const a=await dlg({title:'باسورد الأرصدة',msg:'اعمل باسورد مخصوص لأرصدة البنوك (4 حروف على الأقل)',icon:'🔐',input:true,pw:true,ok:'التالي',cancel:'إلغاء'});if(!a)return false;
    if(a.length<4){toast('4 حروف على الأقل');return false}
    const b=await dlg({title:'اكتبه تاني',icon:'🔐',input:true,pw:true,ok:'حفظ',cancel:'إلغاء'});if(b!==a){toast('الباسوردين مش زي بعض');return false}
    S.settings.balPw=await hash('bal:'+a);save();toast('اتعمل باسورد الأرصدة ✓');
  }else{
    const v=await dlg({title:'باسورد الأرصدة',icon:'🔐',input:true,pw:true,ok:'افتح',cancel:'إلغاء'});if(v==null)return false;
    if(await hash('bal:'+v)!==S.settings.balPw&&await hash('bal:'+latD(v).trim())!==S.settings.balPw){toast('الباسورد غلط');return false}
  }
  XBALOK=true;render();if(after)after();return true;
}
async function xBalForgot(){
  if(LK.pin){const v=await dlg({title:'الرقم السري بتاع البرنامج',icon:'🔒',input:true,pw:true,num:true,ok:'تأكيد',cancel:'إلغاء'});if(v==null)return;if(await hash(v)!==LK.pin)return toast('الرقم السري غلط')}
  else if(!await ask('مسح باسورد الأرصدة؟','هتعمل باسورد جديد',{icon:'🔐',ok:'امسح'}))return;
  delete S.settings.balPw;save();toast('اتمسح · اعمل باسورد جديد');xBalUnlock();
}
try{const _goB=go;go=function(v){if(v!=='pmv')XBALOK=false;return _goB.apply(this,arguments)}}catch(e){}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')XBALOK=false});
function vPmv(){
  const ml=keyTx(NKM),trs=S.txs.filter(t=>t.type==='tr'&&t.date.startsWith(NKM)).sort(byDesc),MB=v=>XBALOK?v:'••••••';let mine=0,debt=0;
  const rows=S.methods.map(m=>{const b=xBal(m.id),cr=xIsCr(m.id);if(cr)debt+=Math.min(0,b);else mine+=b;
    let i=0,o=0;ml.forEach(t=>{if(t.method!==m.id||t.pend)return;if(t.type==='inc')i+=t.amount;else if(t.type==='exp')o+=t.amount});
    const bc=cr?xC((b<0?'💳 عليك ':'💳 ليك ')+MB(num(Math.abs(b))),'#ea580c'):xC('💰 الرصيد '+MB((b<0?'-':'')+num(Math.abs(b))),b<0?'#dc2626':'#16a34a');
    return `<div class="row ${m.active?'':'off'}" style="cursor:default"><span class="pmlg">${xMIc(m)}</span><div class="grow"><b>${esc(m.name)}${cr?' <span class="tag wait">💳 كريديت</span>':''}${m.active?'':' <span class="badge rej">موقوف</span>'}</b>${xChips([bc,xC('⬇ '+num(i),'#16a34a'),xC('⬆ '+num(o),'#dc2626')])}</div><div class="acts"><button class="mini" onclick="xRecon('${m.id}')">⚖️</button><button class="mini" onclick="editMethod('${m.id}')">✏️</button><button class="mini danger" onclick="delMethod('${m.id}')">🗑</button></div></div>`});
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏦 ${esc(L('pm'))}</h3><button class="mini" onclick="${XBALOK?'XBALOK=false;render()':'xBalUnlock()'}">${XBALOK?'🙈':'👁️'}</button><button class="mini" onclick="xNewTr()">🔁 تحويل</button><button class="mini pri" onclick="editMethod()">+ حساب</button></div>`
    +kpis([['💰 فلوسك في الحسابات',MB(fmt(mine)),'inc'],['💳 مديونية الكريديت',MB(fmt(Math.abs(debt))),'exp']])
    +`<p class="muted" style="font-size:11.5px;margin:0 2px 8px">⬇ دخل · ⬆ اتصرف في ${MONTHS[NM-1]} · ⚖️ قارن الرصيد بالبنك${XBALOK?'':' · 👁️ عشان تظهر الأرصدة'}</p><div class="list">${rows.join('')}</div>`;
  if(!XBALOK&&S.settings.balPw)h+=`<button class="btn ghost" style="margin-bottom:8px" onclick="xBalForgot()">🔑 نسيت باسورد الأرصدة؟</button>`;
  h+=`<h3>🔁 التحويلات · ${MONTHS[NM-1]}</h3>`+(trs.length?`<div class="list">${trs.map(t=>`<div class="row" onclick="editTx('${t.id}')"><span class="ic" style="background:#dbeafe">🔁</span><div class="grow"><b>من ${esc(M(t.method)?.name||'—')} إلى ${esc(M(t.to)?.name||'—')}</b><small>${fdate(t.date)}${t.via?' · '+viaTxt(t.via):''}${t.note?' · '+esc(t.note):''}</small></div><div class="amt" style="color:var(--tr)">${num(t.amount)}</div></div>`).join('')}</div>`:'<p class="empty">لا يوجد</p>');
  return h;
}
try{const _xrB=xRecon;xRecon=function(id){if(!XBALOK)return xBalUnlock(()=>_xrB(id));return _xrB(id)}}catch(e){}

/* --- سداد الكريديت --- */
function xCcDue(id){
  const st=NKM+'-01',m=M(id);let b=+(m&&m.open)||0;
  S.txs.forEach(t=>{if(t.pend||t.date>=st)return;if(t.type==='tr'){if(t.method===id)b-=t.amount;if(t.to===id)b+=t.amount}else if(t.method===id)b+=t.type==='inc'?t.amount:-t.amount});
  const paid=S.txs.filter(t=>!t.pend&&t.date>=st&&((t.type==='tr'&&t.to===id)||(t.type==='inc'&&t.method===id))).reduce((a,t)=>a+t.amount,0);
  return r2(Math.max(0,Math.max(0,-b)-paid));
}
function xCcList(){return S.methods.filter(m=>m.active!==false&&xIsCr(m.id)).map(m=>({m,due:xCcDue(m.id)})).filter(x=>x.due>.009)}
var XCC=null;
function xCcOpen(){const l=xCcList();if(!l.length)return toast('مفيش مديونية كريديت ✓');if(l.length===1)return xCcPay(l[0].m.id);
  sheet(`<h2>💳 سداد الكريديت</h2><div class="list">${l.map(x=>`<div class="row" onclick="xCcPay('${x.m.id}')"><span class="pmlg">${xMIc(x.m)}</span><div class="grow"><b>${esc(x.m.name)}</b></div><div class="amt exp">${num(x.due)}</div></div>`).join('')}</div>`)}
function xCcPay(id){
  const m=M(id),due=xCcDue(id),cfg=(S.settings.ccpay||{})[id]||{},debits=S.methods.filter(x=>x.active!==false&&!xIsCr(x.id));
  const from=cfg.from&&M(cfg.from)?cfg.from:(debits.find(x=>xMLogo(x)&&xMLogo(x)===xMLogo(m))||debits.find(x=>x.type==='bank')||debits[0]||{}).id||'';
  const src=cfg.src&&M(cfg.src)?cfg.src:(debits.find(x=>x.id!==from&&x.type==='bank')||debits.find(x=>x.id!==from)||{}).id||'';
  XCC={id,mode:cfg.mode||'debit',from,src,amt:amtStr(due),tamt:amtStr(due),date:today(),due};xCcSheet();
}
function xCcGrab(){const v=s=>$(s)?$(s).value:null;if(!XCC)return;['from','src','amt','tamt','date'].forEach(k=>{const x=v('#cc-'+k);if(x!==null)XCC[k]=x})}
function xCcSheet(){
  const c=XCC,m=M(c.id),opts=S.methods.filter(x=>x.active!==false&&!xIsCr(x.id)),tr=c.mode==='tr';
  const rest=tr?r2((parseNum(c.tamt)||0)-(parseNum(c.amt)||0)):0;
  sheet(`<h2>💳 سداد ${esc(m.name)}</h2>
  <div class="kv"><span>مديونية الشهر اللي فات</span><b class="neg">${fmt(c.due)}</b></div>
  <div class="seg"><button type="button" class="${tr?'':'on'}" onclick="xCcGrab();XCC.mode='debit';xCcSheet()">💳 سداد من الـ Debit</button><button type="button" class="${tr?'on':''}" onclick="xCcGrab();XCC.mode='tr';xCcSheet()">🔁 تحويل + سداد</button></div>
  ${tr?`<div class="two"><label>حولت من<select id="cc-src">${opt(opts,c.src)}</select></label><label>إلى<select id="cc-from">${opt(opts,c.from)}</select></label></div>
  <label>المبلغ اللي اتحول<input id="cc-tamt" class="amt-in" inputmode="decimal" dir="ltr" value="${esc(c.tamt)}" oninput="xCcGrab();xCcRest()"></label>
  <label>مبلغ السداد<input id="cc-amt" inputmode="decimal" dir="ltr" value="${esc(c.amt)}" oninput="xCcGrab();xCcRest()"></label>
  <div id="cc-rest" class="kv"><span>الباقي في ${esc(M(c.from)?.name||'')}</span><b class="pos">${fmt(Math.max(0,rest))}</b></div>`
  :`<label>السداد من حساب<select id="cc-from">${opt(opts,c.from)}</select></label>
  <label>مبلغ السداد<input id="cc-amt" class="amt-in" inputmode="decimal" dir="ltr" value="${esc(c.amt)}"></label>`}
  <label>التاريخ<input id="cc-date" type="date" value="${c.date}"></label>
  <button class="btn" onclick="xCcSave()">✅ ${tr?'سجّل التحويل والسداد':'سدد'}</button>`);
}
function xCcRest(){const el=$('#cc-rest b');if(el&&XCC)el.textContent=fmt(Math.max(0,r2((parseNum(XCC.tamt)||0)-(parseNum(XCC.amt)||0))))}
function xCcSave(){
  xCcGrab();const c=XCC;if(!c)return;const a=parseNum(c.amt),tr=c.mode==='tr',ta=parseNum(c.tamt);
  if(!(a>0))return toast('اكتب مبلغ السداد');if(!c.from)return toast('اختار الحساب');if(!c.date)return toast('اختار التاريخ');
  if(isClosed(c.date))return toast(`شهر ${mName(c.date.slice(0,7))} مقفول`);
  if(tr){if(!(ta>0))return toast('اكتب المبلغ اللي اتحول');if(!c.src||c.src===c.from)return toast('اختار حسابين مختلفين')}
  const now=Date.now();
  if(tr)S.txs.push({id:uid(),type:'tr',amount:ta,method:c.src,to:c.from,via:'transfer',date:c.date,note:'🔁 تحويل لسداد الكريديت',files:[],created:now});
  S.txs.push({id:uid(),type:'tr',amount:a,method:c.from,to:c.id,via:'',date:c.date,note:'💳 سداد الكريديت',files:[],created:now+1});
  S.settings.ccpay=Object.assign({},S.settings.ccpay,{[c.id]:{from:c.from,src:c.src,mode:c.mode}});
  XCC=null;save();closeSheet();render();toast(tr?`✅ اتحول ${fmt(ta)} واتسدد ${fmt(a)}`:`✅ اتسدد ${fmt(a)}`);
}
try{const _vhC=vHome;vHome=function(){let h=_vhC.apply(this,arguments);try{
  const t=xCcList().map(x=>tileHTML({ic:'💳',label:'سداد الكريديت',val:fmt(x.due),sub:esc(x.m.name),cls:'hot',go:`xCcPay('${x.m.id}')`})).join('');
  if(t)h=h.includes('<div class="dash">')?h.replace('<div class="dash">','<div class="dash">'+t):h+`<div class="dash">${t}</div>`;
}catch(e){}return h}}catch(e){}
XFC.cc=['💳','سداد الكريديت','xCcOpen()','#f97316,#9a3412',()=>xCcList().length,'لما يكون عليك مديونية كريديت الشهر اللي فات'];
try{render()}catch(e){}
/* ========== 2.21.35 ========== */
/* --- سداد الكريديت: المبلغ مفتوح، والزيادة بتروح مصاريف الكريديت --- */
function xCcFeeShow(){if(!XCC)return;const a=parseNum(($('#cc-amt')||{}).value)||0,d=r2(a-XCC.due),el=$('#cc-fee');if(el)el.innerHTML=d>.009?`<div class="kv"><span>➕ هيتسجل في مصاريف الكريديت</span><b class="neg">${fmt(d)}</b></div>`:''}
try{const _ccS=xCcSheet;xCcSheet=function(){const r=_ccS.apply(this,arguments);try{const a=$('#cc-amt');if(a&&!$('#cc-fee')){const l=a.closest('label');(l||a).insertAdjacentHTML('afterend','<div id="cc-fee"></div><p class="muted" style="font-size:11.5px;margin:2px 0 6px">✏️ اكتب المبلغ الحقيقي اللي اتخصم. لو أكبر من حساب البرنامج، الفرق بيتسجل لوحده في مصاريف الكريديت.</p>');a.addEventListener('input',xCcFeeShow);xCcFeeShow()}}catch(e){}return r}}catch(e){}
try{const _ccV=xCcSave;xCcSave=function(){
  xCcGrab();const c=XCC;
  try{const a=parseNum(c&&c.amt),okTr=c&&(c.mode!=='tr'||(parseNum(c.tamt)>0&&c.src&&c.src!==c.from));
    if(c&&a>0&&c.from&&c.date&&!isClosed(c.date)&&okTr){const d=r2(a-c.due);
      if(d>.009){const pe=mRange(prevKey(NKM))[1],dt=isClosed(pe)?c.date:pe,cat=ensureCat('مصاريف الكريديت','exp');cat.active=true;
        S.txs.push({id:uid(),type:'exp',amount:d,cat:cat.id,method:c.id,via:'card',date:dt,note:'🧾 فرق سداد الكريديت',files:[],created:Date.now()})}}}catch(e){}
  return _ccV.apply(this,arguments)}}catch(e){}

/* --- أقساط بتتخصم من الكريديت --- */
function xCcAccts(){return S.methods.filter(m=>m.active!==false&&xIsCr(m.id))}
function xCcPlanPost(){
  let n=0;const td=today();
  S.plans.forEach(p=>{if(!p.cc||!p.acct||!M(p.acct))return;const from=p.ccFrom||'0000';let cat=null;
    p.items.forEach(it=>{if(itTx(it)||it.noAuto||!it.due||it.due>td||it.due<from||isClosed(it.due)||!(+it.amount>0))return;
      cat=cat||C(p.catId)||ensureCat(p.name,'exp');
      const t={id:uid(),type:'exp',amount:+it.amount,cat:cat.id,method:p.acct,via:'card',date:it.due,note:`💳 قسط ${fdate(it.due)} على الكريديت`,files:[],created:Date.now(),src:{k:'i',id:p.id,p:it.id}};
      S.txs.push(t);it.txId=t.id;n++})});
  if(n)save();return n;
}
try{const _apC=autoPostFixed;autoPostFixed=function(){const n=_apC.apply(this,arguments);return n+xCcPlanPost()}}catch(e){}
try{const _pfC=planForm;planForm=function(){
  if(PF&&PF.cc&&!PF.cca)PF.cca=PF.acct;
  const r=_pfC.apply(this,arguments);
  try{const cr=xCcAccts(),q5=$('#q5'),row=q5&&q5.closest('label')&&q5.closest('label').parentElement;
    if(row&&cr.length&&!$('#q-cc')){const on=!!PF.cc,ca=PF.cca&&M(PF.cca)?PF.cca:cr[0].id;
      row.insertAdjacentHTML('beforebegin',`<label class="chk fxbox"><input type="checkbox" id="q-cc" ${on?'checked':''} onchange="grabPF();PF.cc=this.checked;planForm()"> 💳 بيتخصم من الكريديت</label>${on?`<div class="fxin">${cr.length>1?`<label>من كارت<select id="q-cca">${opt(cr,ca)}</select></label>`:`<p class="muted" style="margin:8px 0 0">💳 ${esc(cr[0].name)}</p>`}<p class="muted" style="font-size:11.5px;margin:6px 0 0">كل قسط بيتسجل لوحده مصروف على الكريديت يوم ميعاده، وبيدخل في سداد الكريديت أول الشهر.</p></div>`:''}`);
      if(on)row.style.display='none'}}catch(e){}
  return r}}catch(e){}
try{const _gpC=grabPF;grabPF=function(){_gpC.apply(this,arguments);if($('#q-cc'))PF.cc=$('#q-cc').checked;if($('#q-cca'))PF.cca=$('#q-cca').value}}catch(e){}
try{const _psC=planSave;planSave=function(){
  grabPF();const cc=!!PF.cc,ca=(PF.cca&&M(PF.cca))?PF.cca:(xCcAccts()[0]||{}).id;
  const r=_psC.apply(this,arguments);
  try{if(!$('#sheet').classList.contains('open')){const p=plan(instPlan);
    if(p&&cc&&ca){p.cc=true;p.acct=ca;p.via='card';if(!p.ccFrom)p.ccFrom=NKM+'-01'}
    else if(p&&!cc&&p.cc){delete p.cc;delete p.ccFrom}
    xCcPlanPost();save();render()}}catch(e){}
  return r}}catch(e){}
try{const _upC=unpay;unpay=async function(pid,iid){await _upC(pid,iid);const p=plan(pid),it=p&&p.items.find(x=>x.id===iid);if(p&&p.cc&&it&&!it.txId){it.noAuto=true;save()}}}catch(e){}
try{const _idC=instDue;instDue=function(){return _idC.apply(this,arguments).filter(o=>!o.p.cc)}}catch(e){}
try{const _xidC=xInstDue;xInstDue=function(){return _xidC.apply(this,arguments).filter(o=>!o.p.cc)}}catch(e){}
try{const _alC=alerts;alerts=function(){const cc=S.plans.filter(p=>p.cc).map(p=>'i-'+p.id+'-');return _alC.apply(this,arguments).filter(a=>!cc.some(k=>String(a.id).startsWith(k)))}}catch(e){}
try{const _vpC=vPlan;vPlan=function(){let h=_vpC.apply(this,arguments);try{const p=plan(instPlan);if(p&&p.cc){const i=h.indexOf('</div>');if(i>0)h=h.slice(0,i+6)+`<p class="muted" style="margin:0 2px 8px">💳 بيتخصم لوحده من ${esc(M(p.acct)?.name||'الكريديت')} يوم الميعاد</p>`+h.slice(i+6)}}catch(e){}return h}}catch(e){}
xCcPlanPost();
try{render()}catch(e){}
/* ========== 2.21.36 + 2.21.37 ========== */
/* --- المطابقة: الزرار بيقولك الفرق، والفرق بيتسجل مصاريف البنك --- */
function xReconBtn(id){const b=document.querySelector('#sheet .btn[onclick^="xReconAdj"]');if(!b)return;const a=xReconVal(id),d=a==null?null:r2(a-xBal(id));
  b.textContent=d==null||!d?'💸 سجّل الفرق مصاريف بنكية':d<0?`💸 سجّل ${fmt(-d)} مصاريف بنكية`:`💰 سجّل ${fmt(d)} تحصيل`}
function xReconBase(id){
  const m=M(id);if(!m)return;const b=xBal(id),cr=xIsCr(id);
  sheet(`<h2>⚖️ مطابقة: ${esc(m.name)}</h2>
  <div class="kv"><span>${cr?'المديونية في البرنامج':'الرصيد في البرنامج'}</span><b>${fmt(cr?Math.max(0,-b):b)}</b></div>
  <label>${cr?'المديونية الحقيقية من كشف البنك':'الرصيد الحقيقي (من البنك أو اللي في إيدك)'}<input id="rc-v" class="amt-in" inputmode="decimal" dir="ltr" placeholder="0" oninput="xReconDiff('${id}');xReconBtn('${id}')"></label>
  <div id="rc-d"></div>
  <button class="btn" onclick="xReconOpen('${id}')">🏁 أول مرة؟ اظبط رصيد البداية</button>
  <button class="btn ghost" onclick="xReconAdj('${id}')">💸 سجّل الفرق مصاريف بنكية</button>
  <p class="muted" style="font-size:11.5px">أول مرة: اكتب رصيدك الحقيقي ودوس "رصيد البداية"، ودي مبتأثرش على المصروفات. بعد كده لو طلع فرق، الزرار التاني بيسجله مصاريف بنكية.</p>`);
}
xRecon=function(id){if(!XBALOK)return xBalUnlock(()=>xReconBase(id));xReconBase(id)};
async function xReconAdj(id){
  const a=xReconVal(id);if(a==null)return toast('اكتب الرصيد');const d=r2(a-xBal(id));if(!d)return toast('مفيش فرق ✓');
  if(isClosed(today()))return toast('الشهر الحالي مقفول');
  const inc=d>0,nm0=inc?'تسوية رصيد':(xIsCr(id)?'مصاريف الكريديت':'مصاريف البنك');
  if(!await ask(inc?'تسجيل تحصيل؟':'تسجيل مصاريف؟',`${fmt(Math.abs(d))} في بند "${nm0}" على ${M(id)?.name||''}`,{icon:inc?'💰':'💸',ok:'سجّل'}))return;
  const c=ensureCat(nm0,inc?'inc':'exp');c.active=true;
  S.txs.push({id:uid(),type:inc?'inc':'exp',amount:Math.abs(d),cat:c.id,method:id,via:'',date:today(),note:'⚖️ فرق المطابقة مع البنك',files:[],created:Date.now(),adj:true});
  save();closeSheet();render();toast('اتسجل ✓');
}

/* --- زرار مصاريف البنك في المصروفات --- */
(()=>{const s=document.createElement('style');s.textContent=`#view .xqb{grid-template-columns:1fr 1fr 1fr!important}`;document.head.appendChild(s)})();
var XBF=null;
function xBfAccts(){return S.methods.filter(m=>m.active!==false&&m.type!=='cash')}
function xBfGrab(){if(!XBF||!$('#bk-a'))return;XBF.a=$('#bk-a').value;XBF.d=$('#bk-d').value;XBF.n=$('#bk-n').value}
function xBankFee(mid){
  const ac=xBfAccts();if(!ac.length)return toast('ضيف حساب بنك الأول');
  if(!XBF)XBF={m:(ac.find(x=>!xIsCr(x.id))||ac[0]).id,a:'',d:today(),n:''};if(mid)XBF.m=mid;
  sheet(`<h2>🏦 مصاريف البنك</h2>
  <div class="fl">من أنهي حساب؟</div>
  <div class="xchips">${ac.map(m=>`<button type="button" class="xchip ${XBF.m===m.id?'on':''}" onclick="xBfGrab();XBF.m='${m.id}';SHKEEP=1;xBankFee()">${xMIc(m,1)} ${esc(m.name)}</button>`).join('')}</div>
  <input id="bk-a" class="amt-in" inputmode="decimal" dir="ltr" placeholder="0" value="${esc(XBF.a)}">
  <div class="two"><label>التاريخ<input id="bk-d" type="date" value="${XBF.d}"></label><label>ملاحظة<input id="bk-n" value="${esc(XBF.n)}" placeholder="رسايل، كشف حساب..."></label></div>
  <button class="btn" onclick="xBfSave()">سجّل</button>`);
}
function xBfSave(){
  xBfGrab();const x=XBF;if(!x)return;const a=parseNum(x.a);
  if(!(a>0))return toast('اكتب المبلغ');if(!x.d)return toast('اختار التاريخ');if(!M(x.m))return toast('اختار الحساب');
  if(isClosed(x.d))return toast(`شهر ${mName(x.d.slice(0,7))} مقفول`);
  const c=ensureCat(xIsCr(x.m)?'مصاريف الكريديت':'مصاريف البنك','exp');c.active=true;
  S.txs.push({id:uid(),type:'exp',amount:a,cat:c.id,method:x.m,via:xIsCr(x.m)?'card':'',date:x.d,note:(x.n||'').trim(),files:[],created:Date.now()});
  const nm0=M(x.m).name;XBF=null;save();closeSheet();render();toast(`✅ ${fmt(a)} مصاريف على ${nm0}`);
}
try{const _veB=vExps;vExps=function(){let h=_veB.apply(this,arguments);return h.replace('<div class="xqb">','<div class="xqb"><button class="mini" onclick="xBankFee()">🏦 مصاريف البنك</button>')}}catch(e){}
XFC.bfee=['🏦','مصاريف البنك','xBankFee()','#64748b,#0f172a',()=>0,''];
try{render()}catch(e){}
/* ========== 2.21.38 ========== */
/* --- آخر الشاشة مبيستخباش ورا الشريط اللي تحت --- */
(()=>{const s=document.createElement('style');s.textContent=`
body #view#view{padding-bottom:calc(var(--navh,70px) + 30px + env(safe-area-inset-bottom))!important}
body.xhome #view#view{padding-bottom:calc(var(--navh,70px) + 90px + env(safe-area-inset-bottom))!important}
body #view#view.xsq{padding-bottom:75vh!important}
`;document.head.appendChild(s)})();
try{fixNav()}catch(e){}
/* ========== 2.21.39 ========== */
/* --- أسماء الأيام كاملة --- */
XDN.splice(0,7,'السبت','الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة');
XWD.splice(0,7,'الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت');
(()=>{const s=document.createElement('style');s.textContent=`
.xcg i{font-size:8.5px!important;white-space:nowrap;overflow:hidden;letter-spacing:-.3px}
.xccb{background:var(--soft2);border:1px solid var(--bd);border-radius:14px;padding:4px 12px 8px;margin:0 0 10px}
.xccb .kv{font-size:13px}
.xccT{border-top:2px solid var(--p)!important;border-bottom:0!important;margin-top:4px;padding-top:8px!important}
.xccT b{font-size:17px;color:var(--p)}
.xccd{margin:4px 0!important;padding:6px 8px!important}
.xccd summary{display:flex;align-items:center;gap:6px}.xccd summary b{margin-inline-start:auto}
.xccw{background:#fef3c7;color:#78350f;border-radius:10px;padding:8px 10px;font-size:13px;margin:8px 0}
.xccok{background:#dcfce7;color:#166534;border-radius:10px;padding:8px 10px;font-size:13px;margin:8px 0}
`;document.head.appendChild(s)})();

/* --- التحويلات: شاشة لوحدها في المزيد --- */
function xTrRow(t){
  const a=M(t.method),b=M(t.to),ch=[xC('📅 '+dmy(t.date))];
  if(t.via)ch.push(xC(xViaIc(t.via,1)+' '+esc(viaTxt(t.via)),(XVIA[t.via]||[])[1]));
  if(t.note)ch.push(xC('📝 '+esc(t.note)));
  if((t.files||[]).length)ch.push(xC('📎 '+t.files.length));
  return `<div class="row" onclick="editTx('${t.id}')"><span class="ic" style="background:#dbeafe">🔁</span><div class="grow"><b>من ${a?xMIc(a,1)+' ':''}${esc(a?.name||'—')} إلى ${b?xMIc(b,1)+' ':''}${esc(b?.name||'—')}</b>${xChips(ch)}</div><div class="amt" style="color:var(--tr)">${num(t.amount)}</div></div>`;
}
XVW.trs=()=>{
  const k=ym(cur.y,cur.m),l=S.txs.filter(t=>t.type==='tr'&&t.date.startsWith(k+'-')).sort(byDesc),tot=l.reduce((a,t)=>a+t.amount,0);
  setTimeout(()=>{try{gfInject()}catch(e){}},0);
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🔁 التحويلات</h3><button class="mini pri" onclick="xNewTr()">+ تحويل</button></div>`+monthBar(true)
    +kpis([['اتحول',fmt(tot),'net'],['عدد التحويلات',l.length,'net']])
    +(l.length?`<div class="list">${l.map(xTrRow).join('')}</div>`:'<div class="nempty"><div>🔁</div><b>مفيش تحويلات الشهر ده</b></div>');
};
GFV.push('trs');
vPmv=function(){
  const ml=keyTx(NKM),MB=v=>XBALOK?v:'••••••';let mine=0,debt=0;
  const rows=S.methods.map(m=>{const b=xBal(m.id),cr=xIsCr(m.id);if(cr)debt+=Math.min(0,b);else mine+=b;
    let i=0,o=0;ml.forEach(t=>{if(t.method!==m.id||t.pend)return;if(t.type==='inc')i+=t.amount;else if(t.type==='exp')o+=t.amount});
    const bc=cr?xC((b<0?'💳 عليك ':'💳 ليك ')+MB(num(Math.abs(b))),'#ea580c'):xC('💰 الرصيد '+MB((b<0?'-':'')+num(Math.abs(b))),b<0?'#dc2626':'#16a34a');
    return `<div class="row ${m.active?'':'off'}" style="cursor:default"><span class="pmlg">${xMIc(m)}</span><div class="grow"><b>${esc(m.name)}${cr?' <span class="tag wait">💳 كريديت</span>':''}${m.active?'':' <span class="badge rej">موقوف</span>'}</b>${xChips([bc,xC('⬇ '+num(i),'#16a34a'),xC('⬆ '+num(o),'#dc2626')])}</div><div class="acts">${cr?`<button class="mini" onclick="xCcPay('${m.id}')">💳 سدد</button>`:''}<button class="mini" onclick="xRecon('${m.id}')">⚖️</button><button class="mini" onclick="editMethod('${m.id}')">✏️</button><button class="mini danger" onclick="delMethod('${m.id}')">🗑</button></div></div>`});
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏦 ${esc(L('pm'))}</h3><button class="mini" onclick="${XBALOK?'XBALOK=false;render()':'xBalUnlock()'}">${XBALOK?'🙈':'👁️'}</button><button class="mini pri" onclick="editMethod()">+ حساب</button></div>`
    +kpis([['💰 فلوسك في الحسابات',MB(fmt(mine)),'inc'],['💳 مديونية الكريديت',MB(fmt(Math.abs(debt))),'exp']])
    +`<p class="muted" style="font-size:11.5px;margin:0 2px 8px">⬇ دخل · ⬆ اتصرف في ${MONTHS[NM-1]} · ⚖️ قارن الرصيد بالبنك${XBALOK?'':' · 👁️ عشان تظهر الأرصدة'}</p><div class="list">${rows.join('')}</div>`;
  if(!XBALOK&&S.settings.balPw)h+=`<button class="btn ghost" onclick="xBalForgot()">🔑 نسيت باسورد الأرصدة؟</button>`;
  return h;
};
vMore=function(){
  const n=xCcList().length;
  const B=[['items','📋',L('items')],['pmv','🏦',L('pm')],['trs','🔁','التحويلات'],['ccpay','💳','سداد الكريديت'],['types','🏷️','الأنواع والطرق'],['inst','🏦',L('inst')],['loans','🤝','السلف'],['buy','🛒',L('buy')],['wallet','🪪',L('wallet')],['annual','📆',L('contracts')],['cash','🏧',L('cash')],['months','🔒','قفل الشهور'],['contacts','📇',L('contacts')],['docs','📎',L('docs')],['pw','🔐','الباسوردات'],['settings','⚙️',L('settings')]];
  return `<h3>☰ ${esc(L('more'))}</h3><div class="rgrid">${B.map(([v,ic,l])=>{const js=v==='pw'?'pwScreen()':v==='ccpay'?'xCcOpen()':(v==='settings'?"stab='';":'')+`go('${v}')`;return `<button class="rbtn" onclick="${js}"><span>${ic}</span>${esc(l)}${v==='ccpay'&&n?`<b class="xrb">${n}</b>`:''}</button>`}).join('')}</div>`;
};
XFC.trs=['🔁','التحويلات',"go('trs')",'#38bdf8,#075985',()=>0,''];

/* --- سداد الكريديت: البرنامج بيحسب المفروض يتخصم، ولو فيه فرق انت تحدد --- */
xCcPlanPost=function(){return 0};
var XCCBACK=null,XCCSV=false;
function xCcPlanOf(t){if(!t||!t.src||t.src.k!=='i')return null;const p=plan(t.src.id);return p&&p.cc?p:null}
function xCcCyc(t){if(t.ccPay)return t.ccPay;if(xCcPlanOf(t))return 'i';if(t.payFeeOf&&xCcPlanOf(S.txs.find(x=>x.id===t.payFeeOf)))return 'i';return ''}
function xCcCalc(id){
  const st=NKM+'-01',en=mRange(NKM)[1],pk=prevKey(NKM),m=M(id);
  let bPre=+(m&&m.open)||0,cyc=0,paid=0;const buys=[];
  S.txs.forEach(t=>{if(t.pend)return;const pre=t.date<st;
    if(t.type==='tr'){if(pre){if(t.to===id)bPre+=t.amount;if(t.method===id)bPre-=t.amount}else if(t.to===id&&t.date<=en)paid+=t.amount;return}
    if(t.method!==id)return;
    if(pre){bPre+=t.type==='inc'?t.amount:-t.amount;if(t.type==='exp'&&t.date.startsWith(pk)&&!xCcCyc(t))buys.push(t);return}
    if(t.date>en)return;
    if(t.type==='inc')paid+=t.amount;else if(xCcCyc(t))cyc+=t.amount;
  });
  const inst=[];
  S.plans.forEach(p=>{if(!p.cc||p.acct!==id)return;const from=p.ccFrom||st;
    p.items.forEach(it=>{if(!it.due||it.due<from||it.due>en)return;const t=itTx(it),f=+it.fee||+p.fee||0;
      if(t){if(f>0&&t.method===id&&t.date>=st&&!S.txs.some(x=>x.payFeeOf===t.id))inst.push({p,it,a:0,f,t});return}
      if(it.noAuto||!(+it.amount>0))return;inst.push({p,it,a:+it.amount,f})})});
  inst.sort((a,b)=>a.it.due.localeCompare(b.it.due));
  const A=r2(buys.reduce((a,t)=>a+t.amount,0)),I=r2(inst.reduce((a,x)=>a+x.a+x.f,0)),B=r2(-bPre-A);
  return{A,buys,B,cyc:r2(cyc),paid:r2(paid),inst,I,due:r2(Math.max(0,-bPre+cyc-paid)+I)};
}
xCcDue=function(id){return xCcCalc(id).due};
if(XFC.cc)XFC.cc[5]='لما يكون فيه سداد كريديت مستحق';
xCcOpen=function(){
  const cr=xCcAccts();
  if(!cr.length)return say('مفيش حساب كريديت','علّم حساب الفيزا الكريديت الأول:\n☰ المزيد ← 🏦 الحسابات ← ✏️ جنب الحساب ← 💳 كريديت','💳');
  if(cr.length===1)return xCcPay(cr[0].id);
  sheet(`<h2>💳 سداد الكريديت</h2><div class="list">${cr.map(m=>{const d=xCcDue(m.id);return `<div class="row" onclick="xCcPay('${m.id}')"><span class="pmlg">${xMIc(m)}</span><div class="grow"><b>${esc(m.name)}</b><small>${d>0?'المفروض يتخصم':'مفيش مستحق'}</small></div><div class="amt ${d>0?'exp':''}">${num(d)}</div></div>`}).join('')}</div>`);
};
xCcPay=function(id){
  const m=M(id);if(!m)return;const cfg=(S.settings.ccpay||{})[id]||{},debits=S.methods.filter(x=>x.active!==false&&!xIsCr(x.id));
  const from=cfg.from&&M(cfg.from)?cfg.from:(debits.find(x=>xMLogo(x)&&xMLogo(x)===xMLogo(m))||debits.find(x=>x.type==='bank')||debits[0]||{}).id||'';
  const src=cfg.src&&M(cfg.src)?cfg.src:(debits.find(x=>x.id!==from&&x.type==='bank')||debits.find(x=>x.id!==from)||{}).id||'';
  XCC={id,mode:cfg.mode||'debit',from,src,tamt:'',date:today(),bankOn:false,bank:'',ch:''};xCcSheet();
};
xCcGrab=function(){if(!XCC)return;[['from','#cc-from'],['src','#cc-src'],['tamt','#cc-tamt'],['date','#cc-date'],['bank','#cc-bank']].forEach(([k,s])=>{const e=$(s);if(e)XCC[k]=e.value})};
xCcSheet=function(){
  const c=XCC;if(!c)return;const m=M(c.id),k=xCcCalc(c.id),opts=S.methods.filter(x=>x.active!==false&&!xIsCr(x.id)),tr=c.mode==='tr',pv=mName(prevKey(NKM));
  if(!c.tamt)c.tamt=k.due?amtStr(k.due):'';
  const ln=(l,v,cls)=>`<div class="kv"><span>${l}</span><b class="${cls||''}">${v}</b></div>`;
  let b=k.buys.length?`<details class="gen xccd" id="cc-pl"><summary>🛒 مشتريات ${esc(pv)} بالفيزا (${k.buys.length}) ▾<b>${num(k.A)}</b></summary><div class="list" style="margin-top:6px">${[...k.buys].sort(byAsc).map(t=>`<div class="row" onclick="editTx('${t.id}')"><div class="grow"><b>${esc(C(t.cat)?.name||'—')}</b><small>${dmy(t.date)}${t.note&&!/^🧾/.test(t.note)?' · '+esc(t.note):''}</small></div><div class="amt exp">${num(t.amount)}</div></div>`).join('')}</div></details>`:ln(`🛒 مشتريات ${esc(pv)} بالفيزا`,'0');
  if(Math.abs(k.B)>.009)b+=ln(k.B>0?'📂 مديونية من قبل':'💚 رصيد ليك من قبل',(k.B<0?'-':'')+num(Math.abs(k.B)),k.B<0?'pos':'');
  k.inst.forEach(x=>{b+=x.t?ln(`💸 مصاريف قسط ${esc(x.p.name)}`,num(x.f)):ln(`🏦 قسط ${esc(x.p.name)} · ${fdate(x.it.due)}`,num(x.a)+(x.f?` + ${num(x.f)} مصاريف`:''))});
  if(k.cyc>.009)b+=ln('🏦 أقساط ومصاريف الشهر ده',num(k.cyc));
  if(k.paid>.009)b+=ln('✅ اتسدد الشهر ده','-'+num(k.paid),'pos');
  b+=`<div class="kv xccT"><span>💳 المفروض يتخصم</span><b>${fmt(k.due)}</b></div><p class="muted" style="font-size:11px;margin:4px 0 0">مشتريات الفيزا الشهر ده بتتسدد الشهر الجاي.</p>`;
  sheet(`<h2>💳 سداد ${esc(m.name)}</h2>
  <div class="xccb">${b}</div>
  <div class="seg"><button type="button" class="${tr?'':'on'}" onclick="xCcGrab();XCC.mode='debit';xCcSheet()">💳 اتخصم من الـ Debit</button><button type="button" class="${tr?'on':''}" onclick="xCcGrab();XCC.mode='tr';xCcSheet()">🔁 حولت الأول</button></div>
  ${tr?`<div class="two"><label>حولت من<select id="cc-src">${opt(opts,c.src)}</select></label><label>إلى<select id="cc-from">${opt(opts,c.from)}</select></label></div><label>المبلغ اللي اتحول<input id="cc-tamt" inputmode="decimal" dir="ltr" value="${esc(c.tamt)}"></label>`
    :`<label>اتخصم من حساب<select id="cc-from">${opt(opts,c.from)}</select></label>`}
  <label>تاريخ الخصم<input id="cc-date" type="date" value="${c.date}"></label>
  ${c.bankOn?`<label>💳 المبلغ اللي في كشف البنك<input id="cc-bank" class="amt-in" inputmode="decimal" dir="ltr" value="${esc(c.bank)}" placeholder="0" oninput="XCC.bank=this.value;xCcDiff()"></label><div id="cc-diff"></div>
    <button class="btn ghost" onclick="xCcGrab();XCC.bankOn=false;XCC.ch='';xCcSheet()">↩ رجوع للمبلغ المحسوب</button>`
  :`<button class="btn" onclick="xCcSave()" ${k.due>0?'':'disabled'}>✅ صح · سجّل ${fmt(k.due)}</button>
    <button class="btn ghost" onclick="xCcGrab();XCC.bankOn=true;xCcSheet()">✏️ ${k.due>0?'لأ، كشف البنك فيه رقم تاني':'البنك خصم مبلغ؟ اكتبه'}</button>`}`);
  if(c.bankOn)xCcDiff();
};
function xCcDiff(){
  const el=$('#cc-diff');if(!el||!XCC)return;const k=xCcCalc(XCC.id),b=parseNum(XCC.bank);
  if(isNaN(b)){el.innerHTML='';return}
  const d=r2(b-k.due),ch=XCC.ch,ob=(v,l)=>`<button type="button" class="${ch===v?'on':''}" onclick="XCC.ch='${v}';xCcDiff()">${l}</button>`;
  let h='',bt='';
  if(Math.abs(d)<.01){h='<p class="xccok">✅ مظبوط، نفس اللي البرنامج حاسبه</p>';bt=`<button class="btn" onclick="xCcSave()">سجّل ${fmt(b)}</button>`}
  else if(d>0){
    h=`<p class="xccw">البنك خصم <b>${fmt(d)}</b> زيادة عن حساب البرنامج. الزيادة دي إيه؟</p><div class="seg">${ob('fee','🧾 مصاريف أو فوايد')}${ob('miss','🛒 مصروف ناقص')}</div>`;
    bt=ch==='fee'?`<button class="btn" onclick="xCcSave()">سجّل ${fmt(b)} · منهم ${fmt(d)} مصاريف الكريديت</button>`:ch==='miss'?`<button class="btn" onclick="xCcSave()">➕ سجّل المصروف الناقص (${fmt(d)})</button><small class="muted">بعد ما تسجله هرجعك هنا تاني</small>`:'';
  }else{
    h=`<p class="xccw">البنك خصم <b>${fmt(-d)}</b> أقل من حساب البرنامج. ده ليه؟</p><div class="seg">${ob('carry','⏭ الباقي يترحّل')}${ob('check','🔍 مصروف متسجل غلط')}</div>`;
    bt=ch==='carry'?`<button class="btn" onclick="xCcSave()">سجّل ${fmt(b)} · و${fmt(-d)} تفضل عليك</button>`:ch==='check'?`<button class="btn" onclick="xCcSave()">🔍 راجع مشتريات ${esc(mName(prevKey(NKM)))}</button>`:'';
  }
  el.innerHTML=h+bt;
}
function xCcMiss(d){
  const c=XCC;closeSheet();XCCBACK={x:{...c}};
  newTx('exp');if(!F)return;
  const pe=mRange(prevKey(NKM))[1];F.method=c.id;F.via='card';F.amount=amtStr(d);F.date=isClosed(pe)?today():pe;SHKEEP=1;txForm();
  toast('سجّل المصروف الناقص على الكريديت، وبعدها هرجعك للسداد');
}
function xCcCheck(){
  XCCBACK={x:{...XCC}};const d=$('#cc-pl');
  if(!d)return toast('مفيش مشتريات متسجلة على الكريديت الشهر اللي فات');
  d.open=true;d.scrollIntoView({block:'start',behavior:'smooth'});toast('دوس على المصروف الغلط وصلّحه، وبعدها هرجعك هنا');
}
function xCcBack(){try{if(XCCBACK&&!$('#sheet').classList.contains('open')){const b=XCCBACK;XCCBACK=null;setTimeout(()=>{XCC={...b.x,ch:''};xCcSheet()},350)}}catch(e){}}
try{const _stC=saveTx;saveTx=async function(){XCCSV=true;let r;try{r=await _stC.apply(this,arguments)}finally{XCCSV=false}xCcBack();return r}}catch(e){}
try{const _dtC=delTx;delTx=async function(){XCCSV=true;let r;try{r=await _dtC.apply(this,arguments)}finally{XCCSV=false}xCcBack();return r}}catch(e){}
try{const _clC=closeSheet;closeSheet=function(){if(!XCCSV)XCCBACK=null;return _clC.apply(this,arguments)}}catch(e){}
xCcSave=function(){
  xCcGrab();const c=XCC;if(!c)return;const k=xCcCalc(c.id);let pay=k.due,fee=0;
  if(c.bankOn){const b=parseNum(c.bank);if(isNaN(b)||b<0)return toast('اكتب المبلغ اللي في كشف البنك');const d=r2(b-k.due);
    if(Math.abs(d)>=.01){if(!c.ch)return toast('اختار الفرق ده إيه');if(c.ch==='miss')return xCcMiss(d);if(c.ch==='check')return xCcCheck();if(c.ch==='fee')fee=d}
    pay=b}
  if(!(pay>0))return toast('مفيش مبلغ يتسدد');
  if(!c.from)return toast('اختار الحساب');if(!c.date)return toast('اختار التاريخ');
  if(isClosed(c.date))return toast(`شهر ${mName(c.date.slice(0,7))} مقفول`);
  const tr=c.mode==='tr',ta=parseNum(c.tamt);
  if(tr){if(!(ta>0))return toast('اكتب المبلغ اللي اتحول');if(!c.src||c.src===c.from)return toast('اختار حسابين مختلفين')}
  const st=NKM+'-01';let now=Date.now();const mk=o=>{const t={id:uid(),files:[],created:now++,ccPay:NKM,...o};S.txs.push(t);return t};
  k.inst.forEach(x=>{
    if(x.t){const fc=ensureCat('مصاريف الدفع','exp');fc.active=true;mk({type:'exp',amount:x.f,cat:fc.id,method:c.id,via:'card',date:x.t.date,note:'💸 مصاريف دفع قسط '+x.p.name,payFeeOf:x.t.id});return}
    const d=x.it.due>=st&&x.it.due<=c.date&&!isClosed(x.it.due)?x.it.due:c.date,cat=C(x.p.catId)||ensureCat(x.p.name,'exp');
    const t=mk({type:'exp',amount:x.a,cat:cat.id,method:c.id,via:'card',date:d,note:`💳 قسط ${fdate(x.it.due)}`,src:{k:'i',id:x.p.id,p:x.it.id}});x.it.txId=t.id;
    if(x.f>0){const fc=ensureCat('مصاريف الدفع','exp');fc.active=true;mk({type:'exp',amount:x.f,cat:fc.id,method:c.id,via:'card',date:d,note:'💸 مصاريف دفع قسط '+x.p.name,payFeeOf:t.id})}
  });
  if(fee>0){const fc=ensureCat('مصاريف الكريديت','exp');fc.active=true;mk({type:'exp',amount:fee,cat:fc.id,method:c.id,via:'card',date:c.date,note:'🧾 فرق كشف الكريديت'})}
  if(tr)mk({type:'tr',amount:ta,method:c.src,to:c.from,via:'transfer',date:c.date,note:'🔁 تحويل لسداد الكريديت'});
  mk({type:'tr',amount:pay,method:c.from,to:c.id,via:'',date:c.date,note:'💳 سداد الكريديت'});
  S.settings.ccpay=Object.assign({},S.settings.ccpay,{[c.id]:{from:c.from,src:c.src,mode:c.mode}});
  XCC=null;save();closeSheet();render();toast(`✅ اتسدد ${fmt(pay)}`);
};
if(!S.settings.xcc1){const f=xFabCfg();if(!f.m.cc)f.m.cc='auto';S.settings.xcc1=1;save()}

/* --- الأقساط: مصاريف الدفع وانت بتعمل القسط + أقساط الكريديت بتدخل في السداد --- */
try{const _pfF=planForm;planForm=function(){const r=_pfF.apply(this,arguments);try{
  const gb=document.querySelector('#sheet .xseg button[onclick="genItems()"]');
  if(gb&&!$('#q-fee'))gb.insertAdjacentHTML('beforebegin',`<label>💸 مصاريف الدفع لكل قسط<input id="q-fee" inputmode="decimal" dir="ltr" value="${esc(PF.fee??'')}" placeholder="0"></label>`);
  const tb=document.querySelector('#sheet .pt');
  if(tb&&!tb.dataset.xf){tb.dataset.xf=1;const hr=tb.querySelector('thead tr');if(hr&&hr.children[2])hr.children[2].insertAdjacentHTML('afterend','<th>💸 مصاريف</th>');
    tb.querySelectorAll('tbody tr').forEach((tr,i)=>{const it=PF.items[i],td=tr.children[2];if(it&&td)td.insertAdjacentHTML('afterend',`<td><input type="text" inputmode="decimal" data-q="fee" dir="ltr" value="${esc(it.fee??'')}" placeholder="0" ${it.txId?'disabled':''} style="min-width:70px"></td>`)})}
  const cc=$('#q-cc'),fx=cc&&cc.closest('label')&&cc.closest('label').nextElementSibling;
  if(fx&&fx.classList.contains('fxin')){const pm=fx.querySelector('p.muted:last-child');if(pm)pm.textContent='💳 القسط بيدخل لوحده في حساب سداد الكريديت أول كل شهر، وبيتسجل مصروف لما تسجّل السداد.'}
}catch(e){}return r}}catch(e){}
try{const _gpF2=grabPF;grabPF=function(){_gpF2.apply(this,arguments);if($('#q-fee'))PF.fee=$('#q-fee').value}}catch(e){}
try{const _giF=genItems;genItems=async function(){
  grabPF();const f=parseNum(PF.fee)||0,before=new Set(PF.items.map(i=>i.id));
  await _giF.apply(this,arguments);
  if(f>0){let n=0;PF.items.forEach(it=>{if(!before.has(it.id)&&!it.txId&&(it.fee==null||it.fee==='')){it.fee=amtStr(f);n++}});if(n)planForm()}
}}catch(e){}
try{const _psF2=planSave;planSave=function(){
  grabPF();const fm={},pf=parseNum(PF.fee)||0;PF.items.forEach(it=>{const v=parseNum(it.fee);if(it.id&&v>0)fm[it.id]=v});
  const r=_psF2.apply(this,arguments);
  try{if(!$('#sheet').classList.contains('open')){const p=plan(instPlan);if(p){p.fee=pf;p.items.forEach(it=>{if(fm[it.id])it.fee=fm[it.id];else delete it.fee});save();render()}}}catch(e){}
  return r}}catch(e){}
try{const _pSF=payStart;payStart=function(pid,iid){const r=_pSF.apply(this,arguments);try{
  const p=plan(pid),it=p&&p.items.find(x=>x.id===iid),f=it?(+it.fee||+p.fee||0):0;
  if(PAY&&PAY.iid===iid&&f>0&&!PAY.fee){PAY.fee=amtStr(f);SHKEEP=1;paySheet()}
}catch(e){}return r}}catch(e){}
vPlan=function(){
  const p=plan(instPlan);if(!p){view='inst';return vInst()}
  const st=planStats(p),fOf=t=>{const f=t&&S.txs.find(x=>x.payFeeOf===t.id);return f?f.amount:0};
  const items=[...p.items].sort((a,b)=>(a.due||'').localeCompare(b.due||''));let fp=0,fe=0;
  items.forEach(it=>{const t=itTx(it);if(t)fp+=fOf(t);else fe+=+it.fee||0});
  let h=`<div class="phead"><button class="mini" onclick="go('inst')">→</button><h3>${esc(p.name)}</h3><button class="mini" onclick="planEdit('${p.id}')">✏️ تعديل</button></div>`;
  h+=kpis([['الإجمالي',fmt(st.total),'net'],['المدفوع',fmt(st.paid),'inc'],['الباقي',fmt(st.total-st.paid),'exp']].concat(fp||fe?[['💸 مصاريف الدفع',fmt(fp+fe),'warn']]:[]));
  if(p.cc)h+=`<p class="muted" style="margin:0 2px 8px">💳 بيتدفع مع سداد ${esc(M(p.acct)?.name||'الكريديت')} أول كل شهر</p>`;
  if(p.note)h+=`<p class="muted">📝 ${esc(p.note)}</p>`;
  if(p.files.length)h+=`<div class="files">${p.files.map(id=>fileThumb(id,'view')).join('')}</div>`;
  h+=tbl(['الميعاد','المبلغ','💸 مصاريف','الحالة',''],items.map(it=>{const t=itTx(it),f=fOf(t),viaCc=p.cc&&it.due>=(p.ccFrom||'');
    return `<tr><td>${dmy2(it.due)}</td><td><b>${num(+it.amount||0)}</b></td><td>${t?`<button class="mini" onclick="xPayFeeEdit('${t.id}')">${f?num(f):'＋'}</button>`:(+it.fee?`<span class="muted">${num(+it.fee)}</span>`:'—')}</td><td>${t?`<span class="tag ok">مدفوع</span>${sm(fd(t.date)+((t.files||[]).length?' · 📎':''))}`:stTag({st:'wait'},it.due)}</td>
    <td>${t?`<button class="mini" onclick="editTx('${t.id}')">✏️</button> <button class="mini" onclick="unpay('${p.id}','${it.id}')">↩</button>`:viaCc?`<button class="mini" onclick="xCcPay('${p.acct}')">💳 مع السداد</button>`:`<button class="mini pri" onclick="payStart('${p.id}','${it.id}')">✓ دفع</button>`}</td></tr>`}),
    fp||fe?`<tr><td>الإجمالي</td><td>${num(st.total)}</td><td>${num(fp+fe)}</td><td></td><td></td></tr>`:'');
  return h;
};

/* --- تعديل القسط: اسمه قسط، ومصاريف الدفع، ومن غير أصناف --- */
try{const _tfI=txForm;txForm=function(){
  const o=F&&F.id&&S.txs.find(t=>t.id===F.id),inst=!!(o&&o.src&&o.src.k==='i'),p=inst&&plan(o.src.id),it=p&&p.items.find(x=>x.id===o.src.p);
  if(inst&&F.pfee==null){const f=S.txs.find(x=>x.payFeeOf===o.id);F.pfee=f?amtStr(f.amount):''}
  const r=_tfI.apply(this,arguments);
  try{const sz=document.querySelector('#sheet .sz');if(!sz)return r;const h=sz.querySelector('h2');
    if(o&&(o.src||o.payFeeOf||o.feeOf||o.loan||o.loanOf||o.adj||o.ccPay)){const b=sz.querySelector('.xitb');if(b)b.remove()}
    if(inst){
      if(h)h.textContent='✏️ تعديل القسط · '+(p?p.name:(C(o.cat)?.name||''));
      if(h&&it&&!$('#f-idue'))h.insertAdjacentHTML('afterend',`<div class="kv" id="f-idue"><span>📅 ميعاد القسط</span><b>${fdate(it.due)}</b></div>`);
      const dl=$('#f-d')&&$('#f-d').closest('label');if(dl&&dl.firstChild&&dl.firstChild.nodeType===3)dl.firstChild.nodeValue='تاريخ السداد';
      const am=$('#f-amt');if(am&&!$('#f-pfee'))am.insertAdjacentHTML('afterend',`<label>💸 مصاريف الدفع<input id="f-pfee" inputmode="decimal" dir="ltr" value="${esc(F.pfee||'')}" placeholder="0"></label>`);
    }
    if(o&&o.payFeeOf&&h)h.textContent='✏️ تعديل مصاريف الدفع';
  }catch(e){}return r}}catch(e){}
try{const _gbI=grab;grab=function(){_gbI.apply(this,arguments);if($('#f-pfee'))F.pfee=$('#f-pfee').value}}catch(e){}
try{const _stI=saveTx;saveTx=async function(){
  grab();const id=F&&F.id,o=id&&S.txs.find(t=>t.id===id),inst=!!(o&&o.src&&o.src.k==='i'),fv=inst?parseNum(F.pfee)||0:0,pn=inst&&plan(o.src.id)?plan(o.src.id).name:'';
  const r=await _stI.apply(this,arguments);
  try{if(inst&&!$('#sheet').classList.contains('open')){const t=S.txs.find(x=>x.id===id);if(t&&!isClosed(t.date)){const f=S.txs.find(x=>x.payFeeOf===id);
    if(f){if(fv>0)Object.assign(f,{amount:fv,date:t.date,method:t.method,via:t.via||''});else S.txs=S.txs.filter(x=>x!==f)}else if(fv>0)xPayFeeAdd(t,fv,pn);
    save();render()}}}catch(e){}
  return r}}catch(e){}

/* --- 🧾 تقرير الفواتير --- */
function xBBills(){
  xLegacy('bills');const p=xPer('bills'),f=p.f,t=p.t,sub=p.k?mName(p.k):p.y?'سنة '+p.y:xRngTxt(f,t);
  const l=S.txs.filter(x=>x.type==='exp'&&x.bill&&!x.pend&&x.date>=f&&x.date<=t).sort(byAsc),tot=l.reduce((a,x)=>a+x.amount,0);
  let b=rkp([['🧾 الفواتير',tot,'exp'],['عدد الفواتير',String(l.length),'net']]);
  if(!l.length)return{title:'تقرير الفواتير',sub,body:b+NONE};
  const g={};l.forEach(x=>(g[x.cat]=g[x.cat]||[]).push(x));
  const e=Object.entries(g).map(([id,ts])=>[id,ts,ts.reduce((a,x)=>a+x.amount,0)]).sort((a,c)=>c[2]-a[2]);
  if(e.length>1)b+=donut(e.map(([id,,v])=>({label:C(id)?.name||'—',value:v})),'الفواتير');
  const ms=xMonthsIn(f,t).map(k=>[k,l.filter(x=>x.date.startsWith(k+'-'))]).filter(x=>x[1].length);
  if(ms.length>1)b+=rsec('📅 شهر بشهر')+rtbl(['الشهر','العدد|c','المبلغ|n'],ms.map(([k,ts])=>`<tr>${cT(esc(mName(k)))}${cC(nm(ts.length))}${cN(num(ts.reduce((a,x)=>a+x.amount,0)),'exp')}</tr>`),ft('الإجمالي',1,fC(l.length),fN(num(tot))));
  b+=rsec('🧾 حسب البند',num(tot))+e.map(([id,ts,v])=>`<div class="rs2">${esc(C(id)?.name||'—')}<em>${nm(num(v))}</em></div>`+rtbl(['التاريخ|c','الحساب','المبلغ|n'],ts.map(x=>`<tr class="clk" onclick="editTx('${x.id}')">${cD(x.date)}${cT(esc(M(x.method)?.name||'—'),[viaTxt(x.via),x.note&&!/^🧾/.test(x.note)?x.note:''].filter(Boolean).map(esc).join(' · ')+((x.files||[]).length?' · 📎':''))}${cN(num(x.amount),'exp')}</tr>`),ts.length>1?ft('الإجمالي',2,fN(num(v))):'')).join('');
  return{title:'تقرير الفواتير',sub,body:b,csv:{head:['التاريخ','البند','الحساب','الطريقة','المبلغ','ملاحظة'],rows:l.map(x=>[dmy(x.date),C(x.cat)?.name||'',M(x.method)?.name||'',viaTxt(x.via),x.amount,x.note||''])}};
}
XPD.bills='m';
if(!REPS.bills){const tmp={...REPS};Object.keys(REPS).forEach(k=>delete REPS[k]);Object.entries(tmp).forEach(([k,v])=>{REPS[k]=v;if(k==='year')REPS.bills={ic:'🧾',t:'تقرير الفواتير',b:xBBills}});if(!REPS.bills)REPS.bills={ic:'🧾',t:'تقرير الفواتير',b:xBBills}}
try{const _xpfB=xPreFields;xPreFields=function(){const h=_xpfB.apply(this,arguments);return rtab==='bills'?h.replace(/<label>🔀 النوع<select[\s\S]*?<\/select><\/label>/,''):h}}catch(e){}

/* --- المطابقة: رصيد النهارده --- */
try{const _rbH=xReconBase;xReconBase=function(id){const r=_rbH.apply(this,arguments);try{
  const v=$('#rc-v'),l=v&&v.closest('label');
  if(l&&l.firstChild&&l.firstChild.nodeType===3)l.firstChild.nodeValue=xIsCr(id)?'المديونية دلوقتي من كشف البنك':'الرصيد دلوقتي (المتاح في أبلكيشن البنك)';
  const p=document.querySelector('#sheet .sz p.muted');
  if(p)p.innerHTML='📌 اكتب رصيد <b>النهارده</b> مش رصيد يوم 1، بعد ما تسجل كل عمليات الحساب ده. البرنامج بيرجع لورا ويحسب رصيد البداية لوحده.<br>🏁 أول مرة بس: <b>اظبط رصيد البداية</b>.<br>💸 بعد كده لو طلع فرق: يتسجل مصاريف بنكية، أو تحصيل لو البنك أكتر.';
}catch(e){}return r}}catch(e){}
try{render()}catch(e){}
/* --- اسم اختيار الكريديت في القسط أوضح --- */
try{const _pfL=planForm;planForm=function(){const r=_pfL.apply(this,arguments);try{const c=$('#q-cc'),l=c&&c.closest('label');if(l&&l.lastChild&&l.lastChild.nodeType===3)l.lastChild.nodeValue=' 💳 بيتضاف على كشف الكريديت (ويتسدد من الـ Debit)'}catch(e){}return r}}catch(e){}
/* --- تصليح: البرنامج كان بيقف لو آخر شاشة كانت المصروفات --- */
function xFeeName(n){n=String(n||'');const p='مصاريف إنستاباي · ';return n.indexOf(p)===0?n.slice(p.length):''}
/* ========== 2.21.41 ========== */
/* --- البنود: الدوسة على بند بتفتح عملياته، و✏️ لتعديل البند --- */
function xCatTxs(id){
  const c=C(id);if(!c)return;
  const l=S.txs.filter(t=>t.cat===id&&t.date.startsWith(NY+'-')).sort(byDesc),tot=l.filter(t=>!t.pend).reduce((a,t)=>a+t.amount,0);
  sheet(`<div class="phead"><h2>${c.kind==='inc'?'💰':'💸'} ${esc(c.name)}</h2><span class="badge soon">${l.length}</span></div>
  <div class="kv"><span>إجمالي ${NY}</span><b class="${c.kind==='inc'?'pos':'neg'}">${fmt(tot)}</b></div>
  ${l.length?`<div class="list">${l.map(t=>{const m=M(t.method);return `<div class="row" onclick="editTx('${t.id}')"><div class="grow"><b>${dmy(t.date)}${t.pend?' · ⏳':''}</b><small>${m?esc(m.name):'—'}${t.via?' · '+esc(viaTxt(t.via)):''}${t.note&&!/^🧾/.test(t.note)?' · '+esc(t.note):''}</small></div><div class="amt ${c.kind}">${num(t.amount)}</div></div>`}).join('')}</div>`:'<p class="empty">مفيش عمليات السنة دي</p>'}
  <button class="btn ghost" onclick="catForm('${id}')">✏️ تعديل البند</button>`);
}
try{const _irT=itRows;itRows=function(){return _irT.apply(this,arguments).replace(/onclick="catForm\('([^']+)'\)"/g,'onclick="xCatTxs(\'$1\')"')}}catch(e){}

/* --- طريقة جديدة: البنك نفسه (فوايد، مصاريف، أي حاجة البنك بيعملها لوحده) --- */
if(!XV0.some(x=>x[0]==='bankop')){XV0.push(['bankop','البنك نفسه']);XVIA0.bankop=['🏛️','#0f766e']}
try{xApplyTypes();render()}catch(e){}
/* ========== 2.21.42 ========== */
/* --- الرئيسية من غير سكرول زيادة: مسافة الشريط اللي تحت مرة واحدة بس --- */
(()=>{const s=document.createElement('style');s.textContent=`
main{padding-bottom:calc(var(--navh,70px) + 6px)!important}
body #view#view{padding-bottom:12px!important}
body.xhome #view#view{padding-bottom:76px!important}
body.xhome main,body.xhome #view#view{min-height:0!important}
body #view#view.xsq{padding-bottom:75vh!important}
`;document.head.appendChild(s)})();
try{fixNav()}catch(e){}
/* ========== 2.21.43 ========== */
/* --- نسخة GitHub Pages: للتحديثات بس، مش للاستخدام --- */
if(/github\.io$/i.test(location.hostname)){document.documentElement.innerHTML='<body style="font-family:sans-serif;background:#0f172a;color:#e2e8f0;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;text-align:center"><div><h2>Centric</h2><p>افتح البرنامج من اللينك الرسمي</p></div></body>'}
/* ========== 2.21.44 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
main{padding-bottom:0!important}
body #view#view{padding-bottom:calc(var(--navh,70px) + 24px)!important}
body.xhome #view#view{padding-bottom:calc(var(--navh,70px) + 80px)!important}
body.xhome main,body.xhome #view#view{min-height:0!important}
body #view#view.xsq{padding-bottom:75vh!important}
.xacs{display:flex;flex-direction:column;gap:8px;margin:0 0 10px}
.xac{background:linear-gradient(180deg,color-mix(in srgb,var(--card,#fff) 90%,rgba(255,255,255,.05)),color-mix(in srgb,var(--card,#fff) 78%,transparent));border:1px solid rgba(148,163,184,.22);border-radius:16px;padding:10px 12px}
.xac.off{opacity:.55}
.xah{display:flex;align-items:center;gap:10px}
.xan{flex:1;min-width:0}.xan b{display:block;font-size:15px;font-weight:800;line-height:1.3}.xan small{display:block;font-size:11.5px;color:var(--tx2);font-weight:600;margin-top:2px}
.xab{text-align:left;white-space:nowrap}.xab small{display:block;font-size:10.5px;color:var(--tx2);font-weight:700}.xab b{font-size:17px;font-weight:800}
.xab.pos b{color:#16a34a}.xab.neg b{color:#dc2626}.xab.cr b{color:#ea580c}
.xaa{display:flex;gap:6px;margin-top:9px;padding-top:8px;border-top:1px dashed rgba(148,163,184,.25)}
.xaa .mini{flex:1;height:32px;padding:0 6px!important;font-size:12px!important;border-radius:10px!important}
.xaa .mini.ic{flex:0 0 40px}
.xstc{display:flex;margin:4px 0 -2px}
.xemo{display:grid;grid-template-columns:repeat(8,1fr);gap:6px;margin:4px 0 10px}
.xemo button{aspect-ratio:1;border-radius:10px;border:1px solid rgba(148,163,184,.3);background:var(--card,#fff);font-size:18px;cursor:pointer;padding:0}
.xemo button.on{border-color:var(--p);box-shadow:0 0 0 2px var(--p)}
`;document.head.appendChild(s)})();
try{fixNav()}catch(e){}

/* --- الحسابات: الرصيد بس، بشكل أوضح --- */
vPmv=function(){
  const MB=v=>XBALOK?v:'••••••';let mine=0,debt=0;
  const rows=S.methods.map(m=>{const b=xBal(m.id),cr=xIsCr(m.id);if(cr)debt+=Math.min(0,b);else mine+=b;
    const lbl=cr?(b<0?'عليك':'ليك'):'الرصيد',cls=cr?'cr':b<0?'neg':'pos';
    return `<div class="xac ${m.active?'':'off'}"><div class="xah"><span class="pmlg">${xMIc(m)}</span><div class="xan"><b>${esc(m.name)}</b><small>${cr?'💳 كريديت':esc(TYPES[m.type]||'')}${m.active?'':' · ⏸ موقوف'}</small></div><div class="xab ${cls}"><small>${lbl}</small><b dir="ltr">${MB((!cr&&b<0?'-':'')+num(Math.abs(b)))}</b></div></div>
    <div class="xaa">${cr?`<button class="mini pri" onclick="xCcPay('${m.id}')">💳 سدد</button>`:''}<button class="mini" onclick="xRecon('${m.id}')">⚖️ مطابقة</button><button class="mini ic" onclick="editMethod('${m.id}')">✏️</button><button class="mini ic danger" onclick="delMethod('${m.id}')">🗑</button></div></div>`});
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏦 ${esc(L('pm'))}</h3><button class="mini" onclick="${XBALOK?'XBALOK=false;render()':'xBalUnlock()'}">${XBALOK?'🙈':'👁️'}</button><button class="mini pri" onclick="editMethod()">+ حساب</button></div>`
    +kpis([['💰 فلوسك في الحسابات',MB(fmt(mine)),'inc'],['💳 مديونية الكريديت',MB(fmt(Math.abs(debt))),'exp']])
    +`<div class="xacs">${rows.join('')}</div>`;
  if(!XBALOK&&S.settings.balPw)h+=`<button class="btn ghost" onclick="xBalForgot()">🔑 نسيت باسورد الأرصدة؟</button>`;
  return h;
};

/* --- فورم التسجيل: إلغاء تغيير الحالة · "حولت على" قايمة · من غير "حولت على" في الأقساط · مصاريف التحويل --- */
try{const _tfY=txForm;txForm=function(){
  try{if(F&&F.type==='tr'&&F.tfeeOn==null){const ft=F.id&&xFeeTx(F.id);F.tfeeOn=!!ft;F.tfee=ft?amtStr(ft.amount):''}}catch(e){}
  const r=_tfY.apply(this,arguments);
  try{const sz=document.querySelector('#sheet .sz');if(!sz||!F)return r;
    const o=F.id&&S.txs.find(t=>t.id===F.id);
    const b0=sz.querySelector('button[onclick="txSetSt(0)"]'),row=b0&&b0.parentElement;
    if(row&&!sz.querySelector('.xstc'))row.insertAdjacentHTML('beforebegin','<div class="xstc"><button type="button" class="mini" onclick="grab();F._st=0;SHKEEP=1;txForm()">✕ إلغاء</button></div>');
    const ip=sz.querySelector('.xipb');
    if(ip&&o&&o.src&&o.src.k==='i')ip.remove();
    else if(ip){const ch=ip.querySelector('.xchips');if(ch&&!$('#f-ipk')){const k=(F.ip&&F.ip.k)||'phone';ch.outerHTML=`<label>⚡ حولت على<select id="f-ipk" onchange="grab();F.ip=F.ip||{};F.ip.k=this.value;SHKEEP=1;txForm()">${XIPK.map(([v,l])=>`<option value="${v}" ${v===k?'selected':''}>${l}</option>`).join('')}</select></label>`;const fl=ip.querySelector('.fl');if(fl)fl.remove()}}
    if(F.type==='tr'&&!$('#f-tfeeon')){const v=$('#f-v'),lab=v&&v.closest('label');if(lab){const w=document.createElement('div');w.className='xfee';
      w.innerHTML=`<label class="chk"><input type="checkbox" id="f-tfeeon" ${F.tfeeOn?'checked':''} onchange="grab();F.tfeeOn=this.checked;if(this.checked&&!parseNum(F.tfee))F.tfee=amtStr(xFeeCalc(parseNum(F.amount)));SHKEEP=1;txForm()"> 💸 مصاريف التحويل (إنستاباي)</label>${F.tfeeOn?`<div class="inl"><input id="f-tfee" inputmode="decimal" dir="ltr" value="${esc(F.tfee||'')}"><button type="button" class="mini" onclick="$('#f-tfee').value=amtStr(xFeeCalc(parseNum(($('#f-amt')||{}).value)))">↺</button></div><small class="muted">بتتسجل مصروف على الحساب اللي حولت منه</small>`:''}`;
      lab.after(w)}}
  }catch(e){}return r}}catch(e){}
try{const _gbY=grab;grab=function(){_gbY.apply(this,arguments);if($('#f-tfeeon'))F.tfeeOn=$('#f-tfeeon').checked;if($('#f-tfee'))F.tfee=$('#f-tfee').value;if($('#f-ipk')){F.ip=F.ip||{};F.ip.k=$('#f-ipk').value}}}catch(e){}
try{const _stT=saveTx;saveTx=async function(){
  grab();const tr=!!(F&&F.type==='tr'),fid=F&&F.id,on=!!(F&&F.tfeeOn),fee=parseNum(F&&F.tfee),before=new Set(S.txs.map(t=>t.id));
  const r=await _stT.apply(this,arguments);
  try{if(!tr||$('#sheet').classList.contains('open'))return r;
    const id=fid||(S.txs.find(t=>!before.has(t.id)&&t.type==='tr')||{}).id,t=id&&S.txs.find(x=>x.id===id);if(!t)return r;
    const old=xFeeTx(t.id);
    if(on&&fee>0&&!isClosed(t.date)){const nt='🔁 مصاريف تحويل من '+(M(t.method)?.name||'')+' لـ '+(M(t.to)?.name||'')+' · '+num(t.amount);
      if(old)Object.assign(old,{amount:fee,method:t.method,date:t.date,note:nt});
      else{const c=ensureCat(XFEEN+' · '+(M(t.method)?.name||'—'),'exp');c.active=true;S.txs.push({id:uid(),type:'exp',amount:fee,cat:c.id,method:t.method,via:'instapay',date:t.date,note:nt,files:[],created:Date.now(),feeOf:t.id})}
      save();render()}
    else if(old&&!on&&!isClosed(old.date)){S.txs=S.txs.filter(x=>x!==old);save();render()}
  }catch(e){}return r}}catch(e){}
try{const _xeR=xExpRow;xExpRow=function(){return _xeR.apply(this,arguments).replace('↩ لـ —','↩ 🔁 تحويل')}}catch(e){}
try{const _xlR=xLine;xLine=function(){return _xlR.apply(this,arguments).replace('↩ لـ —','↩ 🔁 تحويل')}}catch(e){}

/* --- الأنواع والطرق: قوايم بتفتح وتتقفل + اختيار أيقونة --- */
var XEMO=['💵','🏦','🏛️','💳','📱','⚡','🏧','🧾','👛','💰','🪙','📲','🌐','🔁','🛒','🏠','🚗','⛽','🎓','🩺','🎁','✈️','📦','🔹'];
function spTypes(){
  const cfg=xTCfg(),tl=Object.entries(TYPES),vl=VIA.filter(x=>x[0]);
  const row=(kind,k,n)=>{const ic=XVIA[k]||['🔹','#475569'],cu=cfg[kind][k]&&cfg[kind][k].x;
    return `<div class="row" onclick="xTypeForm('${kind}','${k}')"><span class="ic" style="background:${ic[1]};color:#fff;overflow:hidden">${XLG[k]?`<img src="${XLG[k]}" style="width:100%;height:100%;object-fit:contain;background:#fff">`:ic[0]}</span><div class="grow"><b>${esc(n)}</b><small>${cu?'من عندك':'أساسي'}${cfg[kind][k]&&!cu?' · متعدّل':''}</small></div><span class="mini">✏️</span></div>`};
  return `<p class="muted">دوس على أي واحد عشان تغيّر اسمه أو أيقونته أو لونه.</p>
  <details class="grp" open><summary><span>🏦 أنواع الحسابات</span><span class="badge soon">${tl.length}</span></summary><div class="list">${tl.map(([k,n])=>row('t',k,n)).join('')}</div><div style="padding:8px 12px"><button class="mini pri" onclick="xTypeForm('t')">+ نوع حساب جديد</button></div></details>
  <details class="grp"><summary><span>💳 طرق الدفع</span><span class="badge soon">${vl.length}</span></summary><div class="list">${vl.map(([k,n])=>row('v',k,n)).join('')}</div><div style="padding:8px 12px"><button class="mini pri" onclick="xTypeForm('v')">+ طريقة دفع جديدة</button></div></details>`;
}
function xTypeForm(kind,key){
  const cfg=xTCfg(),o=key?(cfg[kind][key]||{}):{},cu=!key||o.x;
  const name=key?(kind==='t'?TYPES[key]:viaTxt(key)):'',ic=key?(XVIA[key]||['🔹'])[0]:'🔹',col=key?(XVIA[key]||['','#475569'])[1]:COLORS[S.methods.length%COLORS.length];
  sheet(`<h2>${key?'✏️ تعديل':'➕ إضافة'} ${kind==='t'?'نوع حساب':'طريقة دفع'}</h2>
  <label>الاسم<input id="xt-n" value="${esc(name)}" placeholder="${kind==='t'?'مثلاً: شهادات، ذهب':'مثلاً: Valu، فوري، Vodafone Cash'}"></label>
  <div class="fl">الأيقونة</div>
  <div class="xemo">${XEMO.map(e=>`<button type="button" class="${e===ic?'on':''}" onclick="document.querySelectorAll('#sheet .xemo button').forEach(x=>x.classList.remove('on'));this.classList.add('on');$('#xt-i').value=this.textContent">${e}</button>`).join('')}</div>
  <label>أو اكتب إيموجي تاني<input id="xt-i" value="${esc(ic)}" maxlength="6"></label>
  <div class="fl">اللون</div>
  <div class="colors">${COLORS.map(c=>`<button type="button" class="sw ${c===col?'on':''}" style="background:${c}" onclick="document.querySelectorAll('#sheet .sw').forEach(x=>x.classList.remove('on'));this.classList.add('on');$('#xt-c').value='${c}'"></button>`).join('')}</div>
  <input type="hidden" id="xt-c" value="${col}">
  <button class="btn" onclick="xTypeSave('${kind}','${key||''}')">حفظ</button>
  ${key&&cu?`<button class="btn ghost danger" onclick="xTypeDel('${kind}','${key}')">🗑 حذف</button>`:''}
  ${key&&!cu&&cfg[kind][key]?`<button class="btn ghost" onclick="xTypeReset('${kind}','${key}')">↺ رجّع الأصلي</button>`:''}`);
}

/* --- آخر شاشة: بترجع لو فتحت خلال دقيقة، وبعدها الرئيسية --- */
(()=>{const h=+localStorage.getItem('centric-hid')||0;window.XSTALE=!h||Date.now()-h>60000;
  if(window.XSTALE&&view!=='home'){try{$('#rv').classList.remove('on')}catch(e){}rtab='';view='home';try{render();scrollTo(0,0)}catch(e){}}
  setTimeout(()=>{window.XSTALE=false},3000);
})();
try{const _doD=draftOpen;draftOpen=function(){if(window.XSTALE)return;return _doD.apply(this,arguments)}}catch(e){}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')localStorage.setItem('centric-hid',String(Date.now()))});
addEventListener('pagehide',()=>localStorage.setItem('centric-hid',String(Date.now())));

/* --- إيصال متكرر من Share --- */
function xKillTx(t){
  if(t.src&&t.src.k==='r'){const c=C(t.src.id);if(c&&c.st)delete c.st[t.src.p]}
  if(t.src&&t.src.k==='i'){const p=plan(t.src.id),it=p&&p.items.find(x=>x.id===t.src.p);if(it)it.txId=null}
  const ids=new Set([t.id]);S.txs.forEach(x=>{if(x.feeOf===t.id||x.payFeeOf===t.id)ids.add(x.id)});
  S.txs=S.txs.filter(x=>!ids.has(x.id));S.buys=S.buys.filter(b=>b.txId!==t.id);
}
try{const _saD=xShareAsk;xShareAsk=async function(ids){
  try{const fm=S.fmeta||{},dup=[];
    ids.forEach(id=>{const a=fm[id];if(!a)return;Object.keys(fm).forEach(k=>{if(ids.includes(k))return;const b=fm[k];if(b&&b.size===a.size&&b.name===a.name){const t=S.txs.find(x=>(x.files||[]).includes(k));if(t&&!dup.includes(t))dup.push(t)}})});
    if(dup.length){const t=dup[0];
      const r=await ask('⚠️ الإيصال ده متسجل قبل كده',`على «${C(t.cat)?.name||'—'}» · ${fmt(t.amount)} · ${dmy(t.date)}\nتلغي القديم وتسجل الجديد، ولا تسجله تاني؟`,{icon:'📎',ok:'🔁 الغي القديم وسجّل الجديد',cancel:'➕ سجّله تاني'});
      if(r===null)return;
      if(r){if(isClosed(t.date))return toast('شهر العملية القديمة مقفول');xKillTx(t);save();render();toast('اتلغت العملية القديمة')}}
  }catch(e){}
  return _saD.apply(this,arguments)}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.45 ========== */
/* --- الأنواع والطرق: القوايم مقفولة لحد ما تفتحها --- */
try{const _spT=spTypes;spTypes=function(){return _spT.apply(this,arguments).replace(/<details class="grp" open>/g,'<details class="grp">')}}catch(e){}

/* --- الأرصدة بتستخبى لوحدها بعد 20 ثانية --- */
var XBALT=0;
try{const _buT=xBalUnlock;xBalUnlock=async function(){const r=await _buT.apply(this,arguments);if(XBALOK){clearTimeout(XBALT);XBALT=setTimeout(()=>{if(!XBALOK)return;XBALOK=false;if(view==='pmv'&&!$('#sheet').classList.contains('open'))render()},20000)}return r}}catch(e){}

/* --- كشف حساب لحساب واحد: حركة الحساب من الرصيد للرصيد --- */
var XTALL=null,XCALL=null;
function xNxD(d){const x=new Date(d+'T00:00');x.setDate(x.getDate()+1);return x.getFullYear()+'-'+pad(x.getMonth()+1)+'-'+pad(x.getDate())}
function xBalAt(id,d,L,Cs){const m=M(id),ca=xCashAcct();let b=+(m&&m.open)||0;
  (L||S.txs).forEach(t=>{if(t.pend||t.date>=d)return;if(t.type==='tr'){if(t.method===id)b-=t.amount;if(t.to===id)b+=t.amount}else if(t.method===id)b+=t.type==='inc'?t.amount:-t.amount});
  (Cs||S.cash).forEach(c=>{if(c.date>=d)return;if(c.method===id&&id!==ca)b-=c.amount;else if(id===ca&&c.method!==ca)b+=c.amount});
  return r2(b)}
try{const _rsC=xRepScope;xRepScope=function(fn){const T=S.txs;XTALL=T;XCALL=S.cash;S.txs=T.filter(t=>!(t.ccr&&t.type==='inc'));try{return _rsC.call(this,fn)}finally{S.txs=T;XTALL=null;XCALL=null}}}catch(e){}
try{const _xrrA=xRepRun;xRepRun=function(k){const r=_xrrA.apply(this,arguments);try{
  const ms=(RF.xms||[]).filter(Boolean);
  if((k==='stmt'||k==='ops')&&!RF.xt&&!(RF.xc||[]).filter(Boolean).length&&ms.length===1&&!xIsCr(ms[0])&&r&&r.body!=null){
    const id=ms[0],p=xPer(k),f=p.f,t=p.t>today()?today():p.t,L=XTALL||S.txs,Cs=XCALL||S.cash,ca=xCashAcct();
    let inc=0,ccr=0,exp=0,ti=0,to=0,cin=0,cout=0;
    L.forEach(x=>{if(x.pend||x.date<f||x.date>t)return;if(x.type==='tr'){if(x.to===id)ti+=x.amount;if(x.method===id)to+=x.amount}else if(x.method===id){if(x.type==='inc'){if(x.ccr)ccr+=x.amount;else inc+=x.amount}else exp+=x.amount}});
    Cs.forEach(c=>{if(c.date<f||c.date>t)return;if(c.method===id&&id!==ca)cout+=c.amount;else if(id===ca&&c.method!==ca)cin+=c.amount});
    const o=xBalAt(id,f,L,Cs),e=xBalAt(id,xNxD(t),L,Cs),rw=(l,v,c)=>`<tr>${cT(l)}${cN(v,c||'')}</tr>`;
    const rows=[rw('رصيد أول الفترة ('+dmy(f)+')',num(o)),rw('+ التحصيلات',num(r2(inc)),'inc')];
    if(ccr)rows.push(rw('+ تحصيل لحساب الكريديت',num(r2(ccr)),'inc'));
    rows.push(rw('− المصروفات','-'+num(r2(exp)),'exp'));
    if(ti)rows.push(rw('+ تحويلات داخلة',num(r2(ti)),'inc'));
    if(to)rows.push(rw('− تحويلات خارجة','-'+num(r2(to)),'exp'));
    if(cin)rows.push(rw('+ سحب كاش داخل',num(r2(cin)),'inc'));
    if(cout)rows.push(rw('− سحب كاش','-'+num(r2(cout)),'exp'));
    r.body+=rsec('🏦 حركة الحساب')+rtbl(['البيان','المبلغ|n'],rows,`<tr><td class="t">رصيد آخر الفترة (${dmy(t)})</td><td class="n"><b class="${e<0?'exp':'inc'}">${nm(num(e))}</b></td></tr>`);
  }}catch(e){}return r}}catch(e){}

/* --- تحصيل لحساب الكريديت: في الرصيد، بس مش مع التحصيلات --- */
try{const _smC=sums;sums=function(l){return _smC.call(this,Array.isArray(l)?l.filter(t=>!(t&&t.ccr&&t.type==='inc')):l)}}catch(e){}
try{const _ktC=keyTx;keyTx=function(){const r=_ktC.apply(this,arguments);return Array.isArray(r)?r.filter(t=>!(t&&t.ccr&&t.type==='inc')):r}}catch(e){}
try{const _vcC=vCol;vCol=function(){let h=_vcC.apply(this,arguments);try{const k=ym(cur.y,cur.m),l=S.txs.filter(t=>t.ccr&&t.type==='inc'&&!t.pend&&t.date.startsWith(k+'-')).sort(byDesc);
  if(l.length)h+=grp('ccr','💳 تحصيل لحساب الكريديت',l.length,r2(l.reduce((a,t)=>a+t.amount,0)),'pos',l.map(txRow).join(''));
}catch(e){}return h}}catch(e){}

/* --- فورم التسجيل: لسداد الكريديت · إكرامية · جزء من المبلغ --- */
try{const _tfZ=txForm;txForm=function(){
  try{if(F&&!F._x45){F._x45=1;const o=F.id&&S.txs.find(t=>t.id===F.id);
    if(F.ccr==null)F.ccr=!!(o&&o.ccr);
    if(F.tip==null){F.tip='';if(o&&+o.tip>0){F.tip=amtStr(o.tip);F.amount=amtStr(r2(o.amount-o.tip))}}}}catch(e){}
  const r=_tfZ.apply(this,arguments);
  try{const sz=document.querySelector('#sheet .sz');if(!sz||!F)return r;const o=F.id&&S.txs.find(t=>t.id===F.id),plain=!(o&&(o.src||o.feeOf||o.payFeeOf||o.loanOf||o.adj||o.ccPay));
    if(F.type==='inc'&&plain){const ch=sz.querySelector('.xchips');if(ch&&!ch.querySelector('.xccr'))ch.insertAdjacentHTML('beforeend',`<button type="button" class="xchip xccr ${F.ccr?'on':''}" onclick="grab();F.ccr=!F.ccr;SHKEEP=1;txForm()">💳 لسداد الكريديت</button>`);
      if(ch&&F.ccr&&!sz.querySelector('.xccrh'))ch.insertAdjacentHTML('afterend','<small class="muted xhint xccrh">💳 الفلوس دي بتتحسب في رصيد الحساب، بس مش بتدخل في تحصيلاتك. بتظهر لوحدها في "تحصيل لحساب الكريديت"</small>')}
    if(F.type==='exp'&&plain&&!$('#f-tip')){const a=$('#f-amt');if(a)a.insertAdjacentHTML('afterend',`<label>🎁 إكرامية <small class="muted">(اختياري · بتتجمع على المبلغ)</small><input id="f-tip" inputmode="decimal" dir="ltr" placeholder="0" value="${esc(F.tip||'')}"></label>`)}
    if(o&&o.pend&&!sz.querySelector('.xppb')){const pb=sz.querySelector('.btn[onclick^="postpone("]');if(pb)pb.insertAdjacentHTML('beforebegin',`<button class="btn ghost xppb" onclick="xPartial('${o.id}')">${o.type==='inc'?'💵 اتحصّل جزء من المبلغ':'💸 اتدفع جزء من المبلغ'}</button>`)}
  }catch(e){}return r}}catch(e){}
try{const _gbZ=grab;grab=function(){_gbZ.apply(this,arguments);if($('#f-tip'))F.tip=$('#f-tip').value}}catch(e){}
try{const _stZ=saveTx;saveTx=async function(){
  grab();const tip=F&&F.type==='exp'?parseNum(F.tip)||0:0,base=F?F.amount:'',a=$('#f-amt'),ccr=!!(F&&F.type==='inc'&&F.ccr),fid=F&&F.id,kind=F&&F.type,before=new Set(S.txs.map(t=>t.id));
  if(tip>0&&a){const tot=amtStr(r2((parseNum(base)||0)+tip));a.value=tot;F.amount=tot}
  const r=await _stZ.apply(this,arguments);
  try{if($('#sheet').classList.contains('open')&&$('#f-amt')){if(tip>0){$('#f-amt').value=base;F.amount=base}return r}
    const id=fid||(S.txs.find(t=>!before.has(t.id)&&t.type===kind&&!t.feeOf&&!t.payFeeOf)||{}).id,t=id&&S.txs.find(x=>x.id===id);if(!t)return r;let ch=false;
    if(kind==='exp'){if(tip>0){t.tip=tip;ch=true}else if(t.tip){delete t.tip;ch=true}
      const b=S.buys.find(x=>x.txId===t.id);if(b){b.items=(b.items||[]).filter(i=>i.n!=='🎁 إكرامية');if(tip>0)b.items.push({n:'🎁 إكرامية',q:1,p:tip,v:tip});b.total=t.amount;ch=true}}
    if(kind==='inc'){if(ccr&&!t.ccr){t.ccr=true;ch=true}else if(!ccr&&t.ccr){delete t.ccr;ch=true}}
    if(ch){save();render()}
  }catch(e){}return r}}catch(e){}

/* --- تحصيل أو دفع جزء من مبلغ معلّق --- */
function xPartial(id){
  const t=S.txs.find(x=>x.id===id);if(!t||!t.pend)return;const inc=t.type==='inc';
  sheet(`<h2>${inc?'💵 اتحصّل جزء':'💸 اتدفع جزء'} · ${esc(C(t.cat)?.name||'')}</h2>
  <div class="kv"><span>المبلغ كله</span><b>${fmt(t.amount)}</b></div>
  <label>${inc?'المبلغ اللي اتحصّل':'المبلغ اللي اتدفع'}<input id="pp-a" class="amt-in" inputmode="decimal" dir="ltr" placeholder="0" oninput="xPpRest(${t.amount})"></label>
  <div id="pp-r"></div>
  <div class="two"><label>${inc?'استلمت في حساب':'دفعت من حساب'}<select id="pp-m">${opt(S.methods.filter(m=>m.active),t.method)}</select></label><label>الطريقة<select id="pp-v">${viaOpts(t.via)}</select></label></div>
  <label>التاريخ<input id="pp-d" type="date" value="${today()}"></label>
  <button class="btn" onclick="xPartialSave('${id}')">✅ سجّل</button>`);
}
function xPpRest(all){const a=parseNum(($('#pp-a')||{}).value)||0,el=$('#pp-r');if(el)el.innerHTML=a>0&&a<all?`<div class="kv"><span>هيفضل معلّق</span><b class="neg">${fmt(r2(all-a))}</b></div>`:''}
function xPartialSave(id){
  const t=S.txs.find(x=>x.id===id);if(!t)return;const a=parseNum($('#pp-a').value),d=$('#pp-d').value;
  if(!(a>0))return toast('اكتب المبلغ');if(!d)return toast('اختار التاريخ');if(isClosed(d))return toast(`شهر ${mName(d.slice(0,7))} مقفول`);
  if(a>=t.amount-0.009)return toast('ده المبلغ كله، علّم عليه ✅ بدل كده');
  S.txs.push({id:uid(),type:t.type,amount:a,cat:t.cat,method:$('#pp-m').value,via:$('#pp-v').value,date:d,note:(t.note?t.note+' · ':'')+'جزء من '+num(t.amount),files:[],created:Date.now()});
  t.amount=r2(t.amount-a);save();closeSheet();render();refreshRV();toast(`✅ ${fmt(a)} · الباقي ${fmt(t.amount)} معلّق`);
}
try{const _trP=txRow;txRow=function(t){let h=_trP.apply(this,arguments);if(t&&t.pend)h=h.replace(`<button class="mini" onclick="postpone('${t.id}')">`,`<button class="mini" onclick="xPartial('${t.id}')">${t.type==='inc'?'💵 جزء':'💸 جزء'}</button><button class="mini" onclick="postpone('${t.id}')">`);return h}}catch(e){}

/* --- السلف: سداد جزئي والباقي على ميعاد، ترحيل، وتنبيه في الرئيسية --- */
xLoanPay=function(id){
  const t=S.txs.find(x=>x.id===id);if(!t)return;const pd=xLoanPaid(t),rem=r2(t.amount-pd),due=t.loan.due||'',nd=due&&due>today()?due:addMonths(today(),1);
  sheet(`<h2>🤝 سداد: ${esc(C(t.cat)?.name||'')}</h2><p class="muted">اتصرفت ${fdate(t.date)} · ${fmt(t.amount)}${pd?' · اتسدد '+fmt(pd):''}${due?' · الميعاد '+fdate(due):''}</p>
  <div class="kv"><span>الباقي</span><b class="neg">${fmt(rem)}</b></div>
  <label>المبلغ اللي اتسدد<input id="lp-a" class="amt-in" type="text" inputmode="decimal" dir="ltr" value="${amtStr(rem)}" oninput="xLpRest(${rem})"></label>
  <div id="lp-r"></div>
  <div class="two"><label>استلمت في حساب<select id="lp-m">${opt(S.methods.filter(m=>m.active),t.method&&!xIsCr(t.method)?t.method:defMethod())}</select></label><label>الطريقة<select id="lp-v">${viaOpts(t.via)}</select></label></div>
  <label>تاريخ السداد<input id="lp-d" type="date" value="${today()}"></label>
  <label id="lp-nl" style="display:none">📅 ميعاد الباقي<input id="lp-n" type="date" value="${nd}"></label>
  <button class="btn" onclick="xLoanPaySave('${id}')">✅ سجّل السداد</button>
  <button class="btn ghost" onclick="xLoanPost('${id}')">⏭ رحّلها للشهر الجاي</button>
  <button class="btn ghost" onclick="editTx('${id}')">✏️ تعديل السلفة أو ميعادها</button>`);
};
function xLpRest(rem){const a=parseNum(($('#lp-a')||{}).value)||0,r=r2(rem-a),el=$('#lp-r'),nl=$('#lp-nl'),part=a>0&&r>0.009;if(el)el.innerHTML=part?`<div class="kv"><span>هيفضل باقي</span><b class="neg">${fmt(r)}</b></div>`:'';if(nl)nl.style.display=part?'':'none'}
xLoanPaySave=function(id){
  const t=S.txs.find(x=>x.id===id);if(!t)return;const a=parseNum($('#lp-a').value),d=$('#lp-d').value,rem=r2(t.amount-xLoanPaid(t));
  if(!(a>0))return toast('اكتب المبلغ');if(!d)return toast('اختار التاريخ');if(isClosed(d))return toast(`شهر ${mName(d.slice(0,7))} مقفول`);
  if(a-rem>0.009)return toast('المبلغ أكبر من الباقي ('+fmt(rem)+')');
  const n=C(t.cat)?.name||'',c=ensureCat(/^سلف/.test(n)?'سداد '+n:'سداد سلفة '+n,'inc');c.active=true;
  S.txs.push({id:uid(),type:'inc',amount:a,cat:c.id,method:$('#lp-m').value,via:$('#lp-v').value,date:d,note:'🤝 سداد سلفة',files:[],created:Date.now(),loanOf:t.id});
  const left=r2(rem-a);if(left>0.009){const nd=($('#lp-n')||{}).value;if(nd)t.loan.due=nd}
  save();closeSheet();render();toast(left>0.009?`✅ اتسدد ${fmt(a)} · الباقي ${fmt(left)}${t.loan.due?' يوم '+dmy(t.loan.due):''}`:'✅ اتسددت بالكامل');
};
function xLoanPost(id){const t=S.txs.find(x=>x.id===id);if(!t||!t.loan)return;let d=t.loan.due||today();do{d=addMonths(d,1)}while(d<today());t.loan.due=d;t.loan.post=(t.loan.post||0)+1;save();closeSheet();render();toast('⏭ اترحّلت لـ '+dmy(d))}
try{const _vhL=vHome;vHome=function(){let h=_vhL.apply(this,arguments);try{const td=today();
  const t=xLoans().map(x=>({x,r:r2(x.amount-xLoanPaid(x))})).filter(o=>o.r>0.009&&o.x.loan.due&&o.x.loan.due<=td).map(o=>tileHTML({ic:'🤝',label:'سلفة لم تسدد',val:fmt(o.r),sub:esc(C(o.x.cat)?.name||'')+' · '+dmy(o.x.loan.due),cls:'hot',go:`xLoanPay('${o.x.id}')`})).join('');
  if(t)h=h.includes('<div class="dash">')?h.replace('<div class="dash">','<div class="dash">'+t):h+`<div class="dash">${t}</div>`;
}catch(e){}return h}}catch(e){}

/* --- الكريديت: سياسة الـ 55 يوم (الكشف بيقفل يوم 5 وبيتسدد يوم 1) --- */
function xCcCfg(id){const c=((S.settings.ccc||{})[id])||{};return{cut:Math.min(28,Math.max(1,+c.cut||5)),due:Math.min(28,Math.max(1,+c.due||1)),lim:+c.lim||0}}
function xCcWin(id,mk){const g=xCcCfg(id),cm=g.due>g.cut?mk:prevKey(mk);return{ws:xNxD(prevKey(cm)+'-'+pad(g.cut)),we:cm+'-'+pad(g.cut),dd:mk+'-'+pad(g.due)}}
xCcCalc=function(id,mk){
  mk=mk||NKM;const w=xCcWin(id,mk),st=mk+'-01',en=mRange(mk)[1],td=today(),m=M(id);
  let bal=+(m&&m.open)||0,paid=0;const buys=[];
  S.txs.forEach(t=>{if(t.pend)return;
    const pay=(t.type==='tr'&&t.to===id)||(t.type==='inc'&&t.method===id),chg=(t.type==='exp'&&t.method===id)||(t.type==='tr'&&t.method===id);
    if(!pay&&!chg)return;
    if(t.date<=w.we){bal+=pay?t.amount:-t.amount;if(t.type==='exp'&&t.method===id&&t.date>=w.ws&&!xCcCyc(t))buys.push(t)}
    else if(pay&&t.date<=td)paid+=t.amount;
  });
  const inst=[];
  S.plans.forEach(p=>{if(!p.cc||p.acct!==id)return;const from=p.ccFrom||st;
    p.items.forEach(it=>{if(!it.due||it.due<from||it.due>en||(mk!==NKM&&it.due<st))return;const t=itTx(it),f=+it.fee||+p.fee||0;
      if(t){if(f>0&&t.method===id&&t.date>=st&&!S.txs.some(x=>x.payFeeOf===t.id))inst.push({p,it,a:0,f,t});return}
      if(it.noAuto||!(+it.amount>0))return;inst.push({p,it,a:+it.amount,f})})});
  inst.sort((a,b)=>a.it.due.localeCompare(b.it.due));
  const A=r2(buys.reduce((a,t)=>a+t.amount,0)),debt=r2(Math.max(0,-bal)),I=r2(inst.reduce((a,x)=>a+x.a+x.f,0));
  return{A,buys,B:r2(debt-A),cyc:0,paid:r2(paid),inst,I,due:r2(Math.max(0,debt-paid)+I),ws:w.ws,we:w.we,dd:w.dd,debt};
};
async function xCcCfgEdit(id){
  const g=xCcCfg(id);
  const a=await askIn('الكشف بيقفل يوم كام؟','مثلاً 5',String(g.cut),true);if(a==null)return;
  const b=await askIn('بيتسدد يوم كام؟','مثلاً 1',String(g.due),true);if(b==null)return;
  const l=await askIn('الحد الائتماني (اختياري)','',g.lim?String(g.lim):'',true);if(l==null)return;
  S.settings.ccc=Object.assign({},S.settings.ccc,{[id]:{cut:parseNum(a)||5,due:parseNum(b)||1,lim:parseNum(l)||0}});save();
  if(XCC)xCcSheet();toast('اتحفظ ✓');
}
xCcSheet=function(){
  const c=XCC;if(!c)return;const m=M(c.id),k=xCcCalc(c.id),g=xCcCfg(c.id),opts=S.methods.filter(x=>x.active!==false&&!xIsCr(x.id)),tr=c.mode==='tr',td=today();
  if(!c.dset){c.dset=1;if(k.dd<=td&&!isClosed(k.dd))c.date=k.dd}
  if(!c.tamt)c.tamt=k.due?amtStr(k.due):'';
  const ln=(l,v,cls)=>`<div class="kv"><span>${l}</span><b class="${cls||''}">${v}</b></div>`,per=dmy(k.ws)+' – '+dmy(k.we);
  let b=k.buys.length?`<details class="gen xccd" id="cc-pl"><summary>🛒 مشتريات ${per} (${k.buys.length}) ▾<b>${num(k.A)}</b></summary><div class="list" style="margin-top:6px">${[...k.buys].sort(byAsc).map(t=>`<div class="row" onclick="editTx('${t.id}')"><div class="grow"><b>${esc(C(t.cat)?.name||'—')}</b><small>${dmy(t.date)}${t.note&&!/^🧾/.test(t.note)?' · '+esc(t.note):''}</small></div><div class="amt exp">${num(t.amount)}</div></div>`).join('')}</div></details>`:ln('🛒 مشتريات '+per,'0');
  if(Math.abs(k.B)>.009)b+=ln(k.B>0?'📂 مديونية قبلها':'💚 مدفوع زيادة قبلها',(k.B<0?'-':'')+num(Math.abs(k.B)),k.B<0?'pos':'');
  k.inst.forEach(x=>{b+=x.t?ln(`💸 مصاريف قسط ${esc(x.p.name)}`,num(x.f)):ln(`🏦 قسط ${esc(x.p.name)} · ${fdate(x.it.due)}`,num(x.a)+(x.f?` + ${num(x.f)} مصاريف`:''))});
  if(k.paid>.009)b+=ln('✅ اتسدد بعد قفل الكشف','-'+num(k.paid),'pos');
  b+=`<div class="kv xccT"><span>💳 المفروض يتخصم يوم ${dmy(k.dd)}</span><b>${fmt(k.due)}</b></div>`;
  const n=xCcCalc(c.id,addMonths(NKM+'-01',1).slice(0,7));
  let x=ln(`📅 الكشف الجاي ${dmy(n.dd)}${n.we>=td?' · لحد دلوقتي':''}`,num(n.due));
  const lp=S.txs.filter(t=>t.type==='tr'&&t.to===c.id&&!t.pend).map(t=>t.date).sort().pop()||'',cr=r2(S.txs.filter(t=>t.ccr&&t.type==='inc'&&!t.pend&&(!lp||t.date>lp)).reduce((a,t)=>a+t.amount,0));
  if(cr>.009)x+=ln('💰 اتجمع لحساب الكريديت من آخر سداد',num(cr),'pos');
  if(g.lim>0){const rest=S.plans.filter(p=>p.cc&&p.acct===c.id).reduce((a,p)=>a+p.items.filter(it=>!itTx(it)).reduce((s,it)=>s+(+it.amount||0),0),0),av=r2(g.lim-Math.max(0,-xBal(c.id))-rest);x+=ln('🟢 المتاح من الحد',num(av),av<0?'neg':'pos')}
  x+=`<p class="muted" style="font-size:11px;margin:6px 0 0">الكشف بيقفل يوم ${g.cut} وبيتسدد يوم ${g.due} · <a href="#" onclick="event.preventDefault();xCcCfgEdit('${c.id}')">⚙️ تغيير</a></p>`;
  sheet(`<h2>💳 سداد ${esc(m.name)}</h2>
  <div class="xccb">${b}</div>
  <div class="xccb">${x}</div>
  <div class="seg"><button type="button" class="${tr?'':'on'}" onclick="xCcGrab();XCC.mode='debit';xCcSheet()">💳 اتخصم من الـ Debit</button><button type="button" class="${tr?'on':''}" onclick="xCcGrab();XCC.mode='tr';xCcSheet()">🔁 حولت الأول</button></div>
  ${tr?`<div class="two"><label>حولت من<select id="cc-src">${opt(opts,c.src)}</select></label><label>إلى<select id="cc-from">${opt(opts,c.from)}</select></label></div><label>المبلغ اللي اتحول<input id="cc-tamt" inputmode="decimal" dir="ltr" value="${esc(c.tamt)}"></label>`
    :`<label>اتخصم من حساب<select id="cc-from">${opt(opts,c.from)}</select></label>`}
  <label>تاريخ الخصم<input id="cc-date" type="date" value="${c.date}"></label>
  ${c.bankOn?`<label>💳 المبلغ اللي في كشف البنك<input id="cc-bank" class="amt-in" inputmode="decimal" dir="ltr" value="${esc(c.bank)}" placeholder="0" oninput="XCC.bank=this.value;xCcDiff()"></label><div id="cc-diff"></div>
    <button class="btn ghost" onclick="xCcGrab();XCC.bankOn=false;XCC.ch='';xCcSheet()">↩ رجوع للمبلغ المحسوب</button>`
  :`<button class="btn" onclick="xCcSave()" ${k.due>0?'':'disabled'}>✅ صح · سجّل ${fmt(k.due)}</button>
    <button class="btn ghost" onclick="xCcGrab();XCC.bankOn=true;xCcSheet()">✏️ ${k.due>0?'لأ، كشف البنك فيه رقم تاني':'البنك خصم مبلغ؟ اكتبه'}</button>`}`);
  if(c.bankOn)xCcDiff();
};
xCcMiss=function(d){
  const c=XCC,k=xCcCalc(c.id);closeSheet();XCCBACK={x:{...c}};
  newTx('exp');if(!F)return;
  F.method=c.id;F.via='card';F.amount=amtStr(d);F.date=isClosed(k.we)?today():k.we;SHKEEP=1;txForm();
  toast('سجّل المصروف الناقص على الكريديت، وبعدها هرجعك للسداد');
};
try{render()}catch(e){}
/* ========== 2.21.46 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xlps{display:flex;gap:6px;align-items:flex-end}.xlps label{flex:1;min-width:0;margin:6px 0 0!important}
.xaa .mini{white-space:nowrap}
`;document.head.appendChild(s)})();

/* --- كشف الحساب: زي كشف البنك، من الرصيد للرصيد، وكل حركة بتفاصيلها --- */
function xCcIncl(x){const T=S.txs;try{if(XTALL)S.txs=XTALL;const id=x.to,mk=x.date.slice(0,7),k=xCcCalc(id,mk),p=[];
  if(k.A)p.push('مشتريات '+dmy(k.ws)+' – '+dmy(k.we)+': '+num(k.A));
  S.txs.filter(t=>t.method===id&&t.type==='exp'&&!t.pend&&t.date.startsWith(mk)&&xCcCyc(t)).forEach(t=>p.push((C(t.cat)?.name||'—')+': '+num(t.amount)));
  return p.length?'يشمل: '+p.join(' · '):(x.note||'')}catch(e){return x.note||''}finally{S.txs=T}}
function xLedger(id,f,t,L,Cs){
  const ca=xCashAcct(),o=xBalAt(id,f,L,Cs),ev=[];
  L.forEach(x=>{if(x.pend||x.date<f||x.date>t)return;
    if(x.type==='tr'){
      if(x.to===id)ev.push({d:x.date,c:x.created||0,k:'tri',a:x.amount,l:'🔁 تحويل من '+(M(x.method)?.name||'—'),s:x.note||'',id:x.id});
      if(x.method===id){const cc=xIsCr(x.to);ev.push({d:x.date,c:x.created||0,k:cc?'cc':'tro',a:-x.amount,l:cc?'💳 سداد '+(M(x.to)?.name||'الكريديت'):'🔁 تحويل لـ '+(M(x.to)?.name||'—'),s:cc?xCcIncl(x):(x.note||''),id:x.id})}
    }else if(x.method===id){const inc=x.type==='inc';ev.push({d:x.date,c:x.created||0,k:inc?(x.ccr?'ccr':'inc'):'exp',a:inc?x.amount:-x.amount,l:(inc?'💰 ':'💸 ')+(C(x.cat)?.name||'—'),s:[x.via?viaTxt(x.via):'',x.note&&!/^🧾/.test(x.note)?x.note:''].filter(Boolean).join(' · '),id:x.id})}
  });
  Cs.forEach(c=>{if(c.date<f||c.date>t)return;if(c.method===id&&id!==ca)ev.push({d:c.date,c:0,k:'cash',a:-c.amount,l:'🏧 سحب كاش',s:c.note||''});else if(id===ca&&c.method!==ca)ev.push({d:c.date,c:0,k:'cash',a:c.amount,l:'🏧 سحب من '+(M(c.method)?.name||'—'),s:c.note||''})});
  ev.sort((a,b)=>a.d.localeCompare(b.d)||a.c-b.c);
  let run=o;const sum={};ev.forEach(e=>{run=r2(run+e.a);e.r=run;sum[e.k]=r2((sum[e.k]||0)+e.a)});
  return{o,e:run,ev,sum};
}
function xLedgerHTML(id,f,t,kp){
  const g=xLedger(id,f,t,XTALL||S.txs,XCALL||S.cash),s=g.sum,sg=v=>(v<0?'-':'+')+num(Math.abs(v)),rw=(l,v,c)=>`<tr>${cT(l)}${cN(v,c||'')}</tr>`;
  const rows=[rw('رصيد أول الفترة · '+dmy(f),num(g.o))];
  [['inc','💰 التحصيلات'],['ccr','💳 تحصيل لحساب الكريديت'],['exp','💸 المصروفات'],['tri','🔁 تحويلات داخلة'],['tro','🔁 تحويلات خارجة'],['cc','💳 سداد الكريديت'],['cash','🏧 سحب كاش']].forEach(([k,l])=>{if(s[k])rows.push(rw(l,sg(s[k]),s[k]<0?'exp':'inc'))});
  let h=kp?rkp([['رصيد أول الفترة',g.o,'net'],['داخل',r2(g.ev.filter(e=>e.a>0).reduce((a,e)=>a+e.a,0)),'inc'],['خارج',r2(-g.ev.filter(e=>e.a<0).reduce((a,e)=>a+e.a,0)),'exp'],['رصيد آخر الفترة',g.e,g.e<0?'exp':'inc']]):'';
  h+=rsec('🧮 الملخص')+rtbl(['البيان','المبلغ|n'],rows,`<tr><td class="t"><b>رصيد آخر الفترة · ${dmy(t)}</b></td><td class="n"><b class="${g.e<0?'exp':'inc'}">${nm(num(g.e))}</b></td></tr>`);
  h+=rsec('📋 كل الحركات',String(g.ev.length))+(g.ev.length?rtbl(['التاريخ|c','البيان','المبلغ|n','الرصيد|n'],g.ev.map(e=>`<tr ${e.id?`class="clk" onclick="editTx('${e.id}')"`:''}>${cD(e.d)}${cT(esc(e.l),esc(e.s||''))}${cN(sg(e.a),e.a<0?'exp':'inc')}${cN(num(e.r),e.r<0?'exp':'')}</tr>`)):NONE);
  return h;
}
XPD.acct='m';
function xBAcct(){xLegacy('acct');const id=(RF.xms||[]).filter(Boolean)[0],m=M(id),p=xPer('acct'),t=p.t>today()?today():p.t;
  return{title:'كشف حساب'+(m?' · '+m.name:''),sub:xRngTxt(p.f,t),body:m?xLedgerHTML(id,p.f,t,true):NONE}}
if(!REPS.acct){const tmp={...REPS};Object.keys(REPS).forEach(k=>delete REPS[k]);Object.entries(tmp).forEach(([k,v])=>{REPS[k]=v;if(k==='stmt')REPS.acct={ic:'🏦',t:'كشف حساب بنكي',b:xBAcct}});if(!REPS.acct)REPS.acct={ic:'🏦',t:'كشف حساب بنكي',b:xBAcct}}
try{const _xpfA=xPreFields;xPreFields=function(){if(rtab!=='acct')return _xpfA.apply(this,arguments);xLegacy('acct');const R=RF;
  if(!(R.xms&&R.xms[0]))R.xms=[(S.methods.find(m=>!xIsCr(m.id))||S.methods[0]||{}).id];
  const PO=[['m','الشهر الحالي'],['pm','الشهر اللي فات'],['mon','شهر معيّن'],['y','السنة الحالية'],['yr','سنة معيّنة'],['all','كل الفترات'],['custom','📅 من تاريخ إلى تاريخ']];
  let h=xSel('🏦 الحساب','xms1',xOptL(S.methods.map(m=>[m.id,m.name]),R.xms[0]))+xSel('📆 الفترة','xp',xOptL(PO,R.xp));
  if(R.xp==='mon')h+=`<label>📅 الشهر<input type="month" value="${R.month||NKM}" onchange="xPF('month',this.value)"></label>`;
  if(R.xp==='yr')h+=xSel('📅 السنة','year',xOptL(yearsList().map(y=>[y,String(y)]),R.year));
  if(R.xp==='custom')h+=`<div class="two"><label>📅 من تاريخ<input type="date" value="${R.xf||NKM+'-01'}" onchange="xPF('xf',this.value)"></label><label>📅 إلى تاريخ<input type="date" value="${R.xto||today()}" onchange="xPF('xto',this.value)"></label></div>`;
  return h}}catch(e){}
try{const _pfX=xPF;xPF=function(k,v){if(k==='xms1'){RF.xms=[v];return xPreDraw(true)}return _pfX.apply(this,arguments)}}catch(e){}
/* كشف حساب حسب البند لحساب واحد: نفس التفاصيل تحت، بدل جدول 2.21.45 */
try{const _xrrL=xRepRun;xRepRun=function(k){const r=_xrrL.apply(this,arguments);try{
  if(r&&typeof r.body==='string'){const mk=rsec('🏦 حركة الحساب'),i=r.body.lastIndexOf(mk);if(i>=0)r.body=r.body.slice(0,i)}
  const ms=(RF.xms||[]).filter(Boolean);
  if((k==='stmt'||k==='ops')&&!RF.xt&&!(RF.xc||[]).filter(Boolean).length&&ms.length===1&&!xIsCr(ms[0])&&r&&r.body!=null){const p=xPer(k);r.body+=rsec('🏦 الرصيد والحركات')+xLedgerHTML(ms[0],p.f,p.t>today()?today():p.t,false)}
}catch(e){}return r}}catch(e){}
/* كشف الحساب من شاشة الحسابات، ولما تقفله يرجعك لها */
var XRVBACK='';
function xAcctRep(id){rtab='acct';RF={...RFDEF,xp:'m',xms:[id]};RVST=[];XRVBACK=view;openRV()}
try{const _crB=closeRV;closeRV=function(){const b=XRVBACK;XRVBACK='';const r=_crB.apply(this,arguments);if(b&&b!=='reports')go(b);return r}}catch(e){}

/* --- الحسابات: رصيد كل حساب لوحده، والمطابقة من غير ما تكشف الباقي --- */
var XBAUTH=0,XBSHOW=new Set(),XBT={};
async function xBalAuth(){
  if(XBALOK||Date.now()-XBAUTH<60000)return true;
  if(LK.bio){try{await bioVerify()}catch(e){toast('البصمة ما اتعرفتش');return false}}
  if(!S.settings.balPw){
    const a=await dlg({title:'باسورد الأرصدة',msg:'اعمل باسورد مخصوص لأرصدة البنوك (4 حروف على الأقل)',icon:'🔐',input:true,pw:true,ok:'التالي',cancel:'إلغاء'});if(!a)return false;
    if(a.length<4){toast('4 حروف على الأقل');return false}
    const b=await dlg({title:'اكتبه تاني',icon:'🔐',input:true,pw:true,ok:'حفظ',cancel:'إلغاء'});if(b!==a){toast('الباسوردين مش زي بعض');return false}
    S.settings.balPw=await hash('bal:'+a);save();toast('اتعمل باسورد الأرصدة ✓');
  }else{
    const v=await dlg({title:'باسورد الأرصدة',icon:'🔐',input:true,pw:true,ok:'افتح',cancel:'إلغاء'});if(v==null)return false;
    if(await hash('bal:'+v)!==S.settings.balPw&&await hash('bal:'+latD(v).trim())!==S.settings.balPw){toast('الباسورد غلط');return false}
  }
  XBAUTH=Date.now();return true;
}
async function xBalOne(id){
  if(XBSHOW.has(id)&&!XBALOK){XBSHOW.delete(id);clearTimeout(XBT[id]);return render()}
  if(!await xBalAuth())return;XBSHOW.add(id);render();clearTimeout(XBT[id]);
  XBT[id]=setTimeout(()=>{XBSHOW.delete(id);if(view==='pmv'&&!$('#sheet').classList.contains('open'))render()},20000);
}
xRecon=function(id){if(XBALOK||Date.now()-XBAUTH<60000)return xReconBase(id);xBalAuth().then(ok=>{if(ok)xReconBase(id)})};
try{const _goS=go;go=function(v){if(v!=='pmv')XBSHOW.clear();return _goS.apply(this,arguments)}}catch(e){}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'){XBSHOW.clear();XBAUTH=0}});
vPmv=function(){
  const MB=v=>XBALOK?v:'••••••';let mine=0,debt=0;
  const rows=S.methods.map(m=>{const b=xBal(m.id),cr=xIsCr(m.id),vis=XBALOK||XBSHOW.has(m.id);if(cr)debt+=Math.min(0,b);else mine+=b;
    const lbl=cr?(b<0?'عليك':'ليك'):'الرصيد',cls=cr?'cr':b<0?'neg':'pos';
    return `<div class="xac ${m.active?'':'off'}"><div class="xah"><span class="pmlg">${xMIc(m)}</span><div class="xan"><b>${esc(m.name)}</b><small>${cr?'💳 كريديت':esc(TYPES[m.type]||'')}${m.active?'':' · ⏸ موقوف'}</small></div><div class="xab ${cls}"><small>${lbl}</small><b dir="ltr">${vis?(!cr&&b<0?'-':'')+num(Math.abs(b)):'••••••'}</b></div></div>
    <div class="xaa"><button class="mini" onclick="xBalOne('${m.id}')">${vis&&!XBALOK?'🙈 إخفاء':'👁️ الرصيد'}</button>${cr?`<button class="mini pri" onclick="xCcPay('${m.id}')">💳 سدد</button>`:`<button class="mini" onclick="xRecon('${m.id}')">⚖️ مطابقة</button>`}<button class="mini" onclick="xAcctRep('${m.id}')">📄 كشف</button><button class="mini ic" onclick="editMethod('${m.id}')">✏️</button><button class="mini ic danger" onclick="delMethod('${m.id}')">🗑</button></div></div>`});
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏦 ${esc(L('pm'))}</h3><button class="mini" onclick="${XBALOK?'XBALOK=false;render()':'xBalUnlock()'}">${XBALOK?'🙈 الكل':'👁️ الكل'}</button><button class="mini pri" onclick="editMethod()">+ حساب</button></div>`
    +kpis([['💰 فلوسك في الحسابات',MB(fmt(mine)),'inc'],['💳 مديونية الكريديت',MB(fmt(Math.abs(debt))),'exp']])
    +`<div class="xacs">${rows.join('')}</div>`;
  if(!XBALOK&&S.settings.balPw)h+=`<button class="btn ghost" onclick="xBalForgot()">🔑 نسيت باسورد الأرصدة؟</button>`;
  return h;
};

/* --- سداد الكريديت: زرار بدل الكلمة الزرقا --- */
try{const _ccQ=xCcSheet;xCcSheet=function(){const r=_ccQ.apply(this,arguments);try{const a=document.querySelector('#sheet a[onclick*="xCcCfgEdit"]');if(a){const b=document.createElement('button');b.type='button';b.className='mini';b.style.cssText='display:block;margin-top:8px';b.setAttribute('onclick',a.getAttribute('onclick').replace('event.preventDefault();',''));b.textContent='⚙️ مواعيد الكشف والحد الائتماني';a.replaceWith(b)}}catch(e){}return r}}catch(e){}

/* --- جزء من المبلغ: والباقي على ميعاد تختاره --- */
xPartial=function(id){
  const t=S.txs.find(x=>x.id===id);if(!t||!t.pend)return;const inc=t.type==='inc',nd=t.date<today()?today():t.date;
  sheet(`<h2>${inc?'💵 اتحصّل جزء':'💸 اتدفع جزء'} · ${esc(C(t.cat)?.name||'')}</h2>
  <div class="kv"><span>المبلغ كله</span><b>${fmt(t.amount)}</b></div>
  <label>${inc?'المبلغ اللي اتحصّل':'المبلغ اللي اتدفع'}<input id="pp-a" class="amt-in" inputmode="decimal" dir="ltr" placeholder="0" oninput="xPpRest(${t.amount})"></label>
  <div id="pp-r"></div>
  <label id="pp-nl" style="display:none">📅 ميعاد الباقي<input id="pp-n" type="date" value="${nd}"></label>
  <div class="two"><label>${inc?'استلمت في حساب':'دفعت من حساب'}<select id="pp-m">${opt(S.methods.filter(m=>m.active),t.method)}</select></label><label>الطريقة<select id="pp-v">${viaOpts(t.via)}</select></label></div>
  <label>التاريخ<input id="pp-d" type="date" value="${today()}"></label>
  <button class="btn" onclick="xPartialSave('${id}')">✅ سجّل</button>`);
};
xPpRest=function(all){const a=parseNum(($('#pp-a')||{}).value)||0,part=a>0&&a<all,el=$('#pp-r'),nl=$('#pp-nl');if(el)el.innerHTML=part?`<div class="kv"><span>هيفضل معلّق</span><b class="neg">${fmt(r2(all-a))}</b></div>`:'';if(nl)nl.style.display=part?'':'none'};
xPartialSave=function(id){
  const t=S.txs.find(x=>x.id===id);if(!t)return;const a=parseNum($('#pp-a').value),d=$('#pp-d').value,nd=($('#pp-n')||{}).value;
  if(!(a>0))return toast('اكتب المبلغ');if(!d)return toast('اختار التاريخ');if(isClosed(d))return toast(`شهر ${mName(d.slice(0,7))} مقفول`);
  if(a>=t.amount-0.009)return toast('ده المبلغ كله، علّم عليه ✅ بدل كده');
  S.txs.push({id:uid(),type:t.type,amount:a,cat:t.cat,method:$('#pp-m').value,via:$('#pp-v').value,date:d,note:(t.note?t.note+' · ':'')+'جزء من '+num(t.amount),files:[],created:Date.now()});
  t.amount=r2(t.amount-a);if(nd)t.date=nd;save();closeSheet();render();refreshRV();toast(`✅ ${fmt(a)} · الباقي ${fmt(t.amount)} يوم ${dmy(t.date)}`);
};

/* --- السلف: سداد جزئي، والباقي مرة واحدة أو على دفعات --- */
var XLPM=1;
function xLoanSched(t){const s=t.loan&&t.loan.sched;if(!s||!s.length)return[];let p=r2(xLoanPaid(t)-(+t.loan.sp||0));return s.map(x=>{const u=Math.min(x.a,Math.max(0,p));p=r2(p-u);return{d:x.d,a:r2(x.a-u)}}).filter(x=>x.a>0.009)}
function xLoanNext(t){const s=xLoanSched(t);if(s.length)t.loan.due=s[0].d;else{delete t.loan.sched;delete t.loan.sp}}
xLoanPay=function(id){
  const t=S.txs.find(x=>x.id===id);if(!t)return;const pd=xLoanPaid(t),rem=r2(t.amount-pd),due=t.loan.due||'',sc=xLoanSched(t),nd=due&&due>today()?due:addMonths(today(),1);
  sheet(`<h2>🤝 سداد: ${esc(C(t.cat)?.name||'')}</h2><p class="muted">اتصرفت ${fdate(t.date)} · ${fmt(t.amount)}${pd?' · اتسدد '+fmt(pd):''}${due?' · الميعاد '+fdate(due):''}</p>
  <div class="kv"><span>الباقي</span><b class="neg">${fmt(rem)}</b></div>
  ${sc.length?`<details class="gen" open><summary>📆 الدفعات الجاية (${sc.length})</summary><div class="list" style="margin-top:6px">${sc.map((s,i)=>`<div class="row"><div class="grow"><b>دفعة ${i+1}</b><small>${fdate(s.d)}</small></div><div class="amt">${num(s.a)}</div></div>`).join('')}</div></details>`:''}
  <label>المبلغ اللي اتسدد<input id="lp-a" class="amt-in" type="text" inputmode="decimal" dir="ltr" value="${amtStr(sc.length?sc[0].a:rem)}" oninput="xLpRest(${rem})"></label>
  <div class="two"><label>استلمت في حساب<select id="lp-m">${opt(S.methods.filter(m=>m.active),t.method&&!xIsCr(t.method)?t.method:defMethod())}</select></label><label>الطريقة<select id="lp-v">${viaOpts(t.via)}</select></label></div>
  <label>تاريخ السداد<input id="lp-d" type="date" value="${today()}"></label>
  <div id="lp-p" class="xccb" style="display:none">
    <div id="lp-r"></div>
    <div class="fl">الباقي هيتسدد إزاي؟</div>
    <div class="seg">${sc.length?`<button type="button" data-m="0" onclick="xLpMode(0,${rem})">📆 على الدفعات</button>`:''}<button type="button" data-m="1" onclick="xLpMode(1,${rem})">📅 مرة واحدة</button><button type="button" data-m="2" onclick="xLpMode(2,${rem})">🧾 دفعات جديدة</button></div>
    <div id="lp-o1"><label>📅 هيسدد الباقي يوم<input id="lp-n" type="date" value="${nd}"></label></div>
    <div id="lp-o2"><div class="two"><label>عدد الدفعات<input id="lp-c" inputmode="numeric" value="2" oninput="xLpGen(${rem})"></label><label>أول دفعة<input id="lp-f" type="date" value="${nd}" onchange="xLpGen(${rem})"></label></div><div id="lp-s"></div></div>
  </div>
  <button class="btn" onclick="xLoanPaySave('${id}')">✅ سجّل السداد</button>
  <button class="btn ghost" onclick="xLoanPost('${id}')">⏭ رحّلها للشهر الجاي</button>
  <button class="btn ghost" onclick="editTx('${id}')">✏️ تعديل السلفة</button>`);
  xLpMode(sc.length?0:1,rem);
};
function xLpMode(m,rem){XLPM=m;document.querySelectorAll('#lp-p .seg button').forEach(b=>b.classList.toggle('on',+b.dataset.m===m));const o1=$('#lp-o1'),o2=$('#lp-o2');if(o1)o1.style.display=m===1?'':'none';if(o2)o2.style.display=m===2?'':'none';xLpRest(rem)}
function xLpGen(rem){const a=parseNum(($('#lp-a')||{}).value)||0,left=r2(rem-a),n=Math.max(1,Math.min(60,Math.round(parseNum(($('#lp-c')||{}).value)||1))),f=($('#lp-f')||{}).value||addMonths(today(),1),el=$('#lp-s');if(!el)return;if(!(left>0)){el.innerHTML='';return}
  const each=Math.floor(left/n*100)/100;let h='';
  for(let i=0;i<n;i++){const v=i===n-1?r2(left-each*(n-1)):each;h+=`<div class="xlps"><label>دفعة ${i+1}<input type="date" data-ld="${i}" value="${addMonths(f,i)}"></label><label>المبلغ<input data-la="${i}" inputmode="decimal" dir="ltr" value="${amtStr(v)}"></label></div>`}
  el.innerHTML=h}
function xLpRest(rem){const a=parseNum(($('#lp-a')||{}).value)||0,r=r2(rem-a),part=a>0&&r>0.009,p=$('#lp-p'),el=$('#lp-r');
  if(p)p.style.display=part?'':'none';if(el)el.innerHTML=part?`<div class="kv"><span>هيفضل باقي</span><b class="neg">${fmt(r)}</b></div>`:'';
  if(part&&XLPM===2)xLpGen(rem)}
xLoanPaySave=function(id){
  const t=S.txs.find(x=>x.id===id);if(!t)return;const a=parseNum($('#lp-a').value),d=$('#lp-d').value,rem=r2(t.amount-xLoanPaid(t)),left=r2(rem-a);
  if(!(a>0))return toast('اكتب المبلغ');if(!d)return toast('اختار التاريخ');if(isClosed(d))return toast(`شهر ${mName(d.slice(0,7))} مقفول`);
  if(left<-0.009)return toast('المبلغ أكبر من الباقي ('+fmt(rem)+')');
  let rows=null,nd='';
  if(left>0.009){
    if(XLPM===1){nd=($('#lp-n')||{}).value;if(!nd)return toast('اختار ميعاد الباقي')}
    else if(XLPM===2){rows=[...document.querySelectorAll('#lp-s [data-ld]')].map(x=>({d:x.value,a:parseNum((document.querySelector('#lp-s [data-la="'+x.dataset.ld+'"]')||{}).value)||0}));
      if(!rows.length||rows.some(x=>!x.d||!(x.a>0)))return toast('كمّل تواريخ ومبالغ الدفعات');
      const sm=r2(rows.reduce((s,x)=>s+x.a,0));if(Math.abs(sm-left)>0.01)return toast('مجموع الدفعات '+fmt(sm)+' لازم يساوي الباقي '+fmt(left));
      rows.sort((x,y)=>x.d.localeCompare(y.d))}
  }
  const n=C(t.cat)?.name||'',c=ensureCat(/^سلف/.test(n)?'سداد '+n:'سداد سلفة '+n,'inc');c.active=true;
  S.txs.push({id:uid(),type:'inc',amount:a,cat:c.id,method:$('#lp-m').value,via:$('#lp-v').value,date:d,note:'🤝 سداد سلفة',files:[],created:Date.now(),loanOf:t.id});
  if(left>0.009){if(XLPM===1){t.loan.due=nd;delete t.loan.sched;delete t.loan.sp}else if(XLPM===2){t.loan.sched=rows;t.loan.sp=r2(xLoanPaid(t));t.loan.due=rows[0].d}else xLoanNext(t)}
  else{delete t.loan.sched;delete t.loan.sp}
  save();closeSheet();render();toast(left>0.009?`✅ اتسدد ${fmt(a)} · الباقي ${fmt(left)} · الميعاد الجاي ${dmy(t.loan.due)}`:'✅ اتسددت بالكامل');
};
xLoanPost=function(id){const t=S.txs.find(x=>x.id===id);if(!t||!t.loan)return;
  if(t.loan.sched&&t.loan.sched.length){t.loan.sched.forEach(s=>{s.d=addMonths(s.d,1)});xLoanNext(t)}
  else{let d=t.loan.due||today();do{d=addMonths(d,1)}while(d<today());t.loan.due=d}
  t.loan.post=(t.loan.post||0)+1;save();closeSheet();render();toast('⏭ اترحّلت لـ '+dmy(t.loan.due))};
try{render()}catch(e){}
/* ========== 2.21.47 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xln{background:var(--card,#fff);border:1px solid var(--line,#e5e7eb);border-radius:14px;padding:12px;margin:8px 0;cursor:pointer}
.xln.late{border-color:#dc2626}
.xlnh{display:flex;justify-content:space-between;gap:8px;font-size:16px}
.xln small{display:block;opacity:.75;margin-top:4px}
.xbar{height:6px;background:#e5e7eb;border-radius:4px;margin-top:8px;overflow:hidden}.xbar i{display:block;height:100%;background:#16a34a}
.xlnal{background:#fef3c7;color:#92400e;border-radius:12px;padding:10px 12px;margin:8px 0;font-weight:700;cursor:pointer}
.xwarn{background:#fef2f2;color:#991b1b;border:1px solid #fecaca;border-radius:12px;padding:10px 12px;margin:10px 0;font-size:13px;line-height:1.8}
.xnote{font-size:12px;opacity:.7;margin:4px 2px 8px}
`;document.head.appendChild(s)})();

/* ================= السلف: نظام منفصل ================= */
function XLN(){S.settings.xln=S.settings.xln||[];return S.settings.xln}
function xLnL(id){return XLN().find(x=>x.id===id)}
function xLnPaid(l,real){return r2((l.pays||[]).filter(p=>!real||!p.wo).reduce((s,x)=>s+x.a,0))}
function xLnRem(l){return r2(l.amt-xLnPaid(l))}
function xLnAlloc(l){let p=xLnPaid(l);const td=today();
  return(l.sch||[]).slice().sort((a,b)=>a.d.localeCompare(b.d)).map(s=>{const u=Math.min(s.a,Math.max(0,p));p=r2(p-u);const rem=r2(s.a-u);
    return{...s,pd:u,rem,st:rem<=0.009?'ok':s.d<td?'late':s.d===td?'today':u>0?'part':'up'}})}
function xLnNext(l){return xLnAlloc(l).find(s=>s.rem>0.009)}
function xLnDelta(id,before){let s=0;XLN().forEach(l=>{if(l.m===id&&l.d<before)s-=l.amt;(l.pays||[]).forEach(p=>{if(p.m===id&&p.d<before)s+=p.a})});return r2(s)}
function xLnMoves(id,f,t){const ev=[];XLN().forEach(l=>{
  if(l.m===id&&l.d>=f&&l.d<=t)ev.push({d:l.d,c:l.c||0,k:'lno',a:-l.amt,l:'🤝 سلفة لـ '+l.who,s:l.note||'',ln:l.id});
  (l.pays||[]).forEach(p=>{if(p.m===id&&p.d>=f&&p.d<=t)ev.push(p.wo?{d:p.d,c:p.c||0,k:'lnw',a:p.a,l:'🚫 إعدام سلفة '+l.who,s:'اتحولت مصروف "سلف معدومة"',ln:l.id}:{d:p.d,c:p.c||0,k:'lni',a:p.a,l:'🤝 سداد سلفة · '+l.who,s:p.note||'',ln:l.id})})});return ev}
/* الرصيد بيشمل حركة السلف */
try{if(String(xBalAt).indexOf('xBal(')<0){const _xbaL=xBalAt;xBalAt=function(id,d){return r2(_xbaL.apply(this,arguments)+xLnDelta(id,d))}}}catch(e){}
try{if(String(xBal).indexOf('xBalAt')<0){const _xbL=xBal;xBal=function(id){return r2(_xbL.apply(this,arguments)+xLnDelta(id,'9999-12-31'))}}}catch(e){}
try{const _lgL=xLedger;xLedger=function(id,f,t){const g=_lgL.apply(this,arguments),ex=xLnMoves(id,f,t);
  if(ex.length){g.ev=g.ev.concat(ex).sort((a,b)=>a.d.localeCompare(b.d)||a.c-b.c);let run=g.o;g.sum={};g.ev.forEach(e=>{run=r2(run+e.a);e.r=run;g.sum[e.k]=r2((g.sum[e.k]||0)+e.a)});g.e=run}return g}}catch(e){}

/* نقل السلف القديمة */
function xLnMig(){const old=S.txs.filter(t=>t.loan&&t.type==='exp');if(!old.length)return;
  old.forEach(t=>{const pays=S.txs.filter(x=>x.loanOf===t.id&&!x.pend),paid=r2(pays.reduce((s,p)=>s+p.amount,0)),rem=r2(t.amount-paid);
    let who=(C(t.cat)?.name||'').replace(/^سلف(ة|ه)?\s*(لـ|ل)?\s*/,'').trim()||(C(t.cat)?.name||'سلفة');
    const sch=[];if(paid>0)sch.push({id:uid(),d:t.date,a:paid});
    let fut=[];try{if(typeof xLoanSched==='function')fut=xLoanSched(t)}catch(e){}
    if(rem>0){if(fut.length&&Math.abs(r2(fut.reduce((s,x)=>s+x.a,0))-rem)<0.02)fut.forEach(x=>sch.push({id:uid(),d:x.d,a:x.a}));else sch.push({id:uid(),d:t.loan.due||addMonths(t.date,1),a:rem})}
    XLN().push({id:uid(),who,amt:t.amount,m:t.method,d:t.date,note:t.note&&!/^🤝/.test(t.note)?t.note:'',sch,pays:pays.map(p=>({id:uid(),d:p.date,a:p.amount,m:p.method,note:'',c:p.created||0})),c:t.created||Date.now()});
    for(let i=S.txs.length-1;i>=0;i--){const x=S.txs[i];if(x===t||x.loanOf===t.id)S.txs.splice(i,1)}});
  save()}

/* شاشة السلف */
function xLnView(){
  const ls=XLN(),td=today(),mk=td.slice(0,7),op=ls.filter(l=>l.st!=='wo'&&xLnRem(l)>0.009),cl=ls.filter(l=>!op.includes(l));let out=0,late=0,mo=0;
  op.forEach(l=>{out+=xLnRem(l);xLnAlloc(l).forEach(s=>{if(s.rem>0){if(s.d<td)late+=s.rem;if(s.d.startsWith(mk))mo+=s.rem}})});
  const card=l=>{const rem=xLnRem(l),pd=xLnPaid(l,1),nx=xLnNext(l),pc=Math.min(100,Math.round(pd/l.amt*100)),lt=nx&&nx.d<td&&l.st!=='wo';
    return `<div class="xln ${lt?'late':''}" onclick="xLnOpen('${l.id}')"><div class="xlnh"><b>👤 ${esc(l.who)}</b><b dir="ltr">${num(l.st==='wo'?0:rem)}</b></div><small>${l.st==='wo'?'🚫 اتعدمت':rem<=0.009?'✅ اتسددت':nx?(lt?'⚠️ متأخر · ':'📅 ')+'القسط الجاي '+num(nx.rem)+' يوم '+dmy(nx.d):''} · من ${num(l.amt)} · اتصرفت ${dmy(l.d)}</small><div class="xbar"><i style="width:${pc}%"></i></div></div>`};
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🤝 السلف</h3><button class="mini pri" onclick="xLnNew()">+ سلفة</button></div>`
   +kpis([['💼 فلوسك عند الناس',fmt(r2(out)),'net'],['⚠️ متأخر',fmt(r2(late)),'exp'],['📅 مستحق الشهر ده',fmt(r2(mo)),'inc']])
   +(op.length?op.map(card).join(''):'<p class="muted" style="text-align:center">مفيش سلف مفتوحة</p>')
   +(cl.length?`<details class="gen"><summary>📁 السلف المقفولة (${cl.length})</summary>${cl.map(card).join('')}</details>`:'')
   +'<p class="xnote">السلف مش بتتحسب مصروف ولا تحصيل. بتأثر بس على رصيد الحساب اللي طلعت منه أو دخلت فيه. ولو حد مسددش، دوس 🚫 إعدام فالباقي يتسجل مصروف.</p>';
}
/* سلفة جديدة */
var XLNM=1;
function xSchRows(total,n,f){const each=Math.floor(total/n*100)/100;let h='';for(let i=0;i<n;i++){const v=i===n-1?r2(total-each*(n-1)):each;h+=`<div class="xlps"><label>قسط ${i+1}<input type="date" data-sd="${i}" value="${addMonths(f,i)}"></label><label>المبلغ<input data-sa="${i}" inputmode="decimal" dir="ltr" value="${amtStr(v)}"></label></div>`}return h}
function xSchRead(sel){return[...document.querySelectorAll(sel+' [data-sd]')].map(x=>({id:uid(),d:x.value,a:parseNum((document.querySelector(sel+' [data-sa="'+x.dataset.sd+'"]')||{}).value)||0}))}
function xSchChk(rows,total){if(!rows.length||rows.some(x=>!x.d||!(x.a>0))){toast('كمّل تواريخ ومبالغ الأقساط');return false}const sm=r2(rows.reduce((s,x)=>s+x.a,0));if(Math.abs(sm-total)>0.01){toast('مجموع الأقساط '+fmt(sm)+' لازم يساوي '+fmt(total));return false}rows.sort((a,b)=>a.d.localeCompare(b.d));return true}
function xLnNew(){XLNM=1;const nm=[...new Set(XLN().map(l=>l.who))],nd=addMonths(today(),1);
  sheet(`<h2>🤝 سلفة جديدة</h2>
  <label>👤 لمين<input id="ln-w" list="ln-wl" placeholder="الاسم"><datalist id="ln-wl">${nm.map(n=>`<option value="${esc(n)}">`).join('')}</datalist></label>
  <label>المبلغ<input id="ln-a" class="amt-in" inputmode="decimal" dir="ltr" placeholder="0" oninput="xLnGen()"></label>
  <div class="two"><label>طلعت من حساب<select id="ln-m">${opt(S.methods.filter(m=>m.active&&!xIsCr(m.id)),defMethod())}</select></label><label>التاريخ<input id="ln-d" type="date" value="${today()}"></label></div>
  <label>ملاحظة<input id="ln-n" placeholder="اختياري"></label>
  <div class="fl">هيرجعها إزاي؟</div>
  <div class="seg" id="ln-sg"><button type="button" class="on" data-m="1" onclick="xLnMode(1)">📅 مرة واحدة</button><button type="button" data-m="2" onclick="xLnMode(2)">🧾 على أقساط</button></div>
  <div id="ln-o1"><label>📅 هيرجعها يوم<input id="ln-1" type="date" value="${nd}"></label></div>
  <div id="ln-o2" style="display:none"><div class="two"><label>عدد الأقساط<input id="ln-c" inputmode="numeric" value="3" oninput="xLnGen()"></label><label>أول قسط<input id="ln-f" type="date" value="${nd}" onchange="xLnGen()"></label></div><div id="ln-s"></div></div>
  <button class="btn" onclick="xLnSave()">✅ سجّل السلفة</button>`)}
function xLnMode(m){XLNM=m;document.querySelectorAll('#ln-sg button').forEach(b=>b.classList.toggle('on',+b.dataset.m===m));$('#ln-o1').style.display=m===1?'':'none';$('#ln-o2').style.display=m===2?'':'none';xLnGen()}
function xLnGen(){if(XLNM!==2)return;const a=parseNum(($('#ln-a')||{}).value)||0,n=Math.max(1,Math.min(60,Math.round(parseNum(($('#ln-c')||{}).value)||1))),f=($('#ln-f')||{}).value||addMonths(today(),1),el=$('#ln-s');if(el)el.innerHTML=a>0?xSchRows(a,n,f):''}
function xLnSave(){const w=($('#ln-w').value||'').trim(),a=parseNum($('#ln-a').value),m=$('#ln-m').value,d=$('#ln-d').value;
  if(!w)return toast('اكتب الاسم');if(!(a>0))return toast('اكتب المبلغ');if(!d)return toast('اختار التاريخ');if(isClosed(d))return toast(`شهر ${mName(d.slice(0,7))} مقفول`);
  let sch;if(XLNM===1){const d1=$('#ln-1').value;if(!d1)return toast('اختار ميعاد الرجوع');sch=[{id:uid(),d:d1,a}]}else{sch=xSchRead('#ln-s');if(!xSchChk(sch,a))return}
  XLN().push({id:uid(),who:w,amt:a,m,d,note:($('#ln-n').value||'').trim(),sch,pays:[],c:Date.now()});save();closeSheet();go('xln');toast('✅ اتسجلت السلفة')}
/* ملف السلفة */
function xLnOpen(id){const l=xLnL(id);if(!l)return;const al=xLnAlloc(l),rem=xLnRem(l),pd=xLnPaid(l,1),wo=l.st==='wo',SL={ok:'✅ اتسدد',part:'🟡 اتدفع جزء',late:'⚠️ متأخر',today:'🔔 النهارده',up:'⏳ جاي'};
  sheet(`<h2>🤝 ${esc(l.who)}</h2><p class="muted">اتصرفت ${dmy(l.d)} من ${esc(M(l.m)?.name||'—')}${l.note?' · '+esc(l.note):''}</p>
  <div class="kv"><span>المبلغ</span><b>${fmt(l.amt)}</b></div><div class="kv"><span>اتسدد</span><b class="pos">${fmt(pd)}</b></div><div class="kv"><span>${wo?'🚫 اتعدم':'الباقي'}</span><b class="neg">${fmt(wo?r2(l.amt-pd):rem)}</b></div>
  <div class="fl">📆 جدول السداد</div>
  <div class="list">${al.map((s,i)=>`<div class="row"><div class="grow"><b>${al.length>1?'قسط '+(i+1)+' · ':''}${dmy(s.d)}</b><small>${wo&&s.rem<=0.009&&s.pd&&!pd?'🚫':SL[s.st]}${s.pd>0&&s.rem>0?' · اتدفع '+num(s.pd)+' وفاضل '+num(s.rem):''}</small></div><div class="amt">${num(s.a)}</div>${s.rem>0.009&&!wo?`<button class="mini" title="تأجيل" onclick="xLnDefer('${id}','${s.id}')">⏭</button>`:''}</div>`).join('')}</div>
  ${(l.pays||[]).length?`<div class="fl">💵 الدفعات</div><div class="list">${l.pays.map(p=>`<div class="row"><div class="grow"><b>${dmy(p.d)}</b><small>${p.wo?'🚫 إعدام (اتحول مصروف)':esc(M(p.m)?.name||'')}${p.note?' · '+esc(p.note):''}</small></div><div class="amt ${p.wo?'':'pos'}">${num(p.a)}</div>${p.wo?'':`<button class="mini ic danger" onclick="xLnPayDel('${id}','${p.id}')">🗑</button>`}</div>`).join('')}</div>`:''}
  ${rem>0.009&&!wo?`<button class="btn" onclick="xLnPay('${id}')">💵 سجّل دفعة</button><button class="btn ghost" onclick="xLnResch('${id}')">🗓 إعادة جدولة الباقي</button><button class="btn ghost danger" onclick="xLnWo('${id}')">🚫 مش هيسدد (إعدام)</button>`:''}
  ${wo?`<button class="btn ghost" onclick="xLnUnWo('${id}')">↩️ إلغاء الإعدام</button>`:''}
  <button class="btn ghost" onclick="xLnEdit('${id}')">✏️ تعديل البيانات</button><button class="btn ghost danger" onclick="xLnDel('${id}')">🗑 حذف السلفة</button>`)}
/* دفعة */
function xLnPay(id){const l=xLnL(id);if(!l)return;const nx=xLnNext(l),rem=xLnRem(l);
  sheet(`<h2>💵 دفعة من ${esc(l.who)}</h2><div class="kv"><span>الباقي كله</span><b class="neg">${fmt(rem)}</b></div>${nx?`<div class="kv"><span>القسط الجاي · ${dmy(nx.d)}</span><b>${fmt(nx.rem)}</b></div>`:''}
  <label>المبلغ اللي استلمته<input id="lp-a" class="amt-in" inputmode="decimal" dir="ltr" placeholder="0" oninput="xLnPR('${id}')"></label><small id="lp-w" class="muted"></small>
  <div class="two"><label>استلمت في حساب<select id="lp-m">${opt(S.methods.filter(m=>m.active&&!xIsCr(m.id)),l.m)}</select></label><label>التاريخ<input id="lp-d" type="date" value="${today()}"></label></div>
  <label>ملاحظة<input id="lp-t" placeholder="اختياري"></label>
  <div id="lp-p" class="xccb" style="display:none"><div id="lp-r"></div><label>📅 باقي القسط ده هيدفعه يوم<input id="lp-n" type="date" value="${nx?(nx.d<today()?today():nx.d):today()}"></label><p class="xnote">لو سبت نفس التاريخ، الباقي يفضل على ميعاده</p></div>
  <button class="btn" onclick="xLnPaySv('${id}')">✅ سجّل</button><button class="btn ghost" onclick="xLnOpen('${id}')">رجوع</button>`)}
function xLnPR(id){const l=xLnL(id);if(!l)return;const a=parseNum(($('#lp-a')||{}).value)||0,nx=xLnNext(l),rem=xLnRem(l),part=nx&&a>0&&a<nx.rem-0.009,p=$('#lp-p'),el=$('#lp-r'),w=$('#lp-w');
  if(p)p.style.display=part?'':'none';if(el)el.innerHTML=part?`<div class="kv"><span>فاضل من القسط ده</span><b class="neg">${fmt(r2(nx.rem-a))}</b></div>`:'';
  if(w)w.textContent=a>rem+0.009?'⚠️ المبلغ أكبر من الباقي ('+fmt(rem)+')':a>0?'هيفضل عليه بعد كده: '+fmt(r2(rem-a)):''}
function xLnPaySv(id){const l=xLnL(id);if(!l)return;const a=parseNum($('#lp-a').value),d=$('#lp-d').value,m=$('#lp-m').value,rem=xLnRem(l),nx=xLnNext(l);
  if(!(a>0))return toast('اكتب المبلغ');if(a>rem+0.009)return toast('المبلغ أكبر من الباقي ('+fmt(rem)+')');if(!d)return toast('اختار التاريخ');if(isClosed(d))return toast(`شهر ${mName(d.slice(0,7))} مقفول`);
  const part=nx&&a<nx.rem-0.009,nd=part?($('#lp-n')||{}).value:'';
  l.pays=l.pays||[];l.pays.push({id:uid(),d,a,m,note:($('#lp-t').value||'').trim(),c:Date.now()});
  if(part&&nd&&nd!==nx.d){const it=l.sch.find(x=>x.id===nx.id);if(it){const r=r2(nx.rem-a);it.a=r2(it.a-r);l.sch.push({id:uid(),d:nd,a:r})}}
  save();render();xLnOpen(id);const left=xLnRem(l);toast(left>0.009?`✅ ${fmt(a)} · فاضل ${fmt(left)}`:'✅ اتسددت بالكامل')}
async function xLnPayDel(id,pid){const l=xLnL(id);if(!l)return;if(!await dlg({title:'مسح الدفعة',msg:'الدفعة دي هتتمسح والمبلغ يرجع على السلفة.',icon:'🗑',ok:'امسح',cancel:'لا'}))return;l.pays=l.pays.filter(p=>p.id!==pid);save();render();xLnOpen(id);toast('اتمسحت')}
/* تأجيل قسط */
function xLnDefer(id,sid){const l=xLnL(id),s=l&&xLnAlloc(l).find(x=>x.id===sid);if(!s)return;
  sheet(`<h2>⏭ تأجيل · ${esc(l.who)}</h2><div class="kv"><span>ميعاده</span><b>${dmy(s.d)}</b></div><div class="kv"><span>المبلغ</span><b>${fmt(s.rem)}</b></div>
  <label>📅 الميعاد الجديد<input id="lf-d" type="date" value="${addMonths(s.d<today()?today():s.d,1)}"></label>
  <button class="btn" onclick="xLnDefSv('${id}','${sid}')">✅ أجّل</button><button class="btn ghost" onclick="xLnOpen('${id}')">رجوع</button>`)}
function xLnDefSv(id,sid){const l=xLnL(id);if(!l)return;const it=l.sch.find(x=>x.id===sid),s=xLnAlloc(l).find(x=>x.id===sid),nd=$('#lf-d').value;if(!it||!s||!nd)return toast('اختار التاريخ');
  if(s.pd>0){it.a=r2(it.a-s.rem);l.sch.push({id:uid(),d:nd,a:s.rem})}else it.d=nd;l.defs=(l.defs||0)+1;save();render();xLnOpen(id);toast('⏭ اتأجل لـ '+dmy(nd))}
/* إعادة جدولة */
function xLnResch(id){const l=xLnL(id);if(!l)return;
  sheet(`<h2>🗓 إعادة جدولة · ${esc(l.who)}</h2><div class="kv"><span>الباقي</span><b class="neg">${fmt(xLnRem(l))}</b></div>
  <div class="two"><label>عدد الأقساط<input id="rs-c" inputmode="numeric" value="1" oninput="xLnRG('${id}')"></label><label>أول قسط<input id="rs-f" type="date" value="${addMonths(today(),1)}" onchange="xLnRG('${id}')"></label></div><div id="rs-s"></div>
  <button class="btn" onclick="xLnRSv('${id}')">✅ احفظ الجدول</button><button class="btn ghost" onclick="xLnOpen('${id}')">رجوع</button>`);xLnRG(id)}
function xLnRG(id){const l=xLnL(id),el=$('#rs-s');if(!l||!el)return;const n=Math.max(1,Math.min(60,Math.round(parseNum(($('#rs-c')||{}).value)||1)));el.innerHTML=xSchRows(xLnRem(l),n,($('#rs-f')||{}).value||addMonths(today(),1))}
function xLnRSv(id){const l=xLnL(id);if(!l)return;const rows=xSchRead('#rs-s');if(!xSchChk(rows,xLnRem(l)))return;
  l.sch=xLnAlloc(l).filter(s=>s.pd>0).map(s=>({id:s.id,d:s.d,a:s.pd})).concat(rows);save();render();xLnOpen(id);toast('✅ اتعمل جدول جديد')}
/* إعدام */
async function xLnWo(id){const l=xLnL(id);if(!l)return;const rem=xLnRem(l);if(!(rem>0))return;
  if(!await dlg({title:'إعدام السلفة',msg:`الباقي ${fmt(rem)} هيتسجل مصروف "سلف معدومة" النهارده، والسلفة تتقفل. رصيد الحساب مش هيتغير.`,icon:'🚫',ok:'أيوه',cancel:'لا'}))return;
  const d=today();if(isClosed(d))return toast('الشهر مقفول');const c=ensureCat('سلف معدومة','exp');c.active=true;
  const tx={id:uid(),type:'exp',amount:rem,cat:c.id,method:l.m,date:d,note:'🚫 سلفة '+l.who+' مش هتترد',files:[],created:Date.now(),xlnwo:l.id};S.txs.push(tx);
  const pid=uid();l.pays.push({id:pid,d,a:rem,m:l.m,wo:1,note:'',c:Date.now()});l.st='wo';l.wo={tx:tx.id,pay:pid};save();render();xLnOpen(id);toast('🚫 اتقفلت واتسجلت مصروف')}
function xLnUnWo(id){const l=xLnL(id);if(!l||!l.wo)return;const i=S.txs.findIndex(t=>t.id===l.wo.tx);if(i>=0)S.txs.splice(i,1);l.pays=l.pays.filter(p=>p.id!==l.wo.pay);delete l.wo;delete l.st;save();render();xLnOpen(id);toast('↩️ رجعت مفتوحة')}
/* تعديل وحذف */
function xLnEdit(id){const l=xLnL(id);if(!l)return;
  sheet(`<h2>✏️ تعديل السلفة</h2><label>👤 لمين<input id="le-w" value="${esc(l.who)}"></label><label>المبلغ<input id="le-a" class="amt-in" inputmode="decimal" dir="ltr" value="${amtStr(l.amt)}"></label>
  <div class="two"><label>طلعت من حساب<select id="le-m">${opt(S.methods.filter(m=>!xIsCr(m.id)),l.m)}</select></label><label>التاريخ<input id="le-d" type="date" value="${l.d}"></label></div>
  <label>ملاحظة<input id="le-n" value="${esc(l.note||'')}"></label><button class="btn" onclick="xLnEdSv('${id}')">💾 حفظ</button><button class="btn ghost" onclick="xLnOpen('${id}')">رجوع</button>`)}
function xLnEdSv(id){const l=xLnL(id);if(!l)return;const w=($('#le-w').value||'').trim(),a=parseNum($('#le-a').value),d=$('#le-d').value;if(!w||!(a>0)||!d)return toast('كمّل البيانات');
  if(a<xLnPaid(l)-0.009)return toast('المبلغ أقل من اللي اتسدد');const df=r2(a-l.amt);
  if(df){const al=xLnAlloc(l),last=al.filter(s=>s.rem>0.009).pop();if(df>0){if(last)l.sch.find(x=>x.id===last.id).a=r2(last.a+df);else l.sch.push({id:uid(),d:addMonths(today(),1),a:df})}else{if(!last||last.rem<-df-0.009)return toast('غيّر المبلغ وبعدين اعمل 🗓 إعادة جدولة');l.sch.find(x=>x.id===last.id).a=r2(last.a+df)}}
  Object.assign(l,{who:w,amt:a,m:$('#le-m').value,d,note:($('#le-n').value||'').trim()});save();render();xLnOpen(id);toast('✅ اتحفظ')}
async function xLnDel(id){const l=xLnL(id);if(!l)return;if(!await dlg({title:'حذف السلفة',msg:'السلفة وكل دفعاتها هتتمسح، ورصيد الحساب هيرجع زي ما كان.',icon:'🗑',ok:'امسح',cancel:'لا'}))return;
  if(l.wo){const i=S.txs.findIndex(t=>t.id===l.wo.tx);if(i>=0)S.txs.splice(i,1)}S.settings.xln=XLN().filter(x=>x.id!==id);save();closeSheet();render();toast('اتمسحت')}
/* تنبيه الرئيسية + مدخل في المزيد */
function xLnInject(){const el=$('#view');if(!el)return;
  if(view==='home'&&!el.querySelector('.xlnal')){const td=today();let n=0,s=0;XLN().forEach(l=>{if(l.st==='wo')return;xLnAlloc(l).forEach(x=>{if(x.rem>0.009&&x.d<=td){n++;s+=x.rem}})});
    if(n){const b=`<div class="xlnal" onclick="go('xln')">🤝 ${n===1?'سلفة مستحقة':n+' أقساط سلف مستحقة'} · ${num(r2(s))} · دوس للتفاصيل</div>`,h=el.querySelector('.phead');h?h.insertAdjacentHTML('afterend',b):el.insertAdjacentHTML('afterbegin',b)}}
  if(view==='more'&&!el.querySelector('[onclick*="xln"]')){const n=XLN().filter(l=>l.st!=='wo'&&xLnRem(l)>0.009).length,b=`<button class="btn ghost" onclick="go('xln')">🤝 السلف والمديونيات${n?' · '+n+' مفتوحة':''}</button>`,h=el.querySelector('.phead');h?h.insertAdjacentHTML('afterend',b):el.insertAdjacentHTML('afterbegin',b)}}
try{const _goL=go;go=function(v){if(typeof v==='string'&&/^loans?$/i.test(v))v='xln';if(v==='xln'){try{XBSHOW.clear()}catch(e){}view='xln';render();try{window.scrollTo(0,0)}catch(e){}return}return _goL.apply(this,arguments)}}catch(e){}
try{const _rnL=render;render=function(){
  try{if(S.txs.some(t=>t.loan&&t.type==='exp'))xLnMig()}catch(e){}
  if(view!=='xln'){const r=_rnL.apply(this,arguments);try{xLnInject()}catch(e){}return r}
  view='more';let r;try{r=_rnL.apply(this,arguments)}finally{view='xln'}
  const el=$('#view')||document.querySelector('main');if(el)el.innerHTML=xLnView();return r}}catch(e){}

/* ================= كشف الحساب: رصيد أول الفترة جه منين + تنبيه السالب ================= */
function xPvD(d){const x=new Date(d+'T12:00:00');x.setDate(x.getDate()-1);return x.toISOString().slice(0,10)}
xLedgerHTML=function(id,f,t,kp){
  const L=XTALL||S.txs,Cs=XCALL||S.cash,g=xLedger(id,f,t,L,Cs),s=g.sum,cr=xIsCr(id),ca=id===xCashAcct();
  const sg=v=>(v<0?'-':'+')+num(Math.abs(v)),N=v=>(v<0?'-':'')+num(Math.abs(v)),rw=(l,v,c)=>`<tr>${cT(l)}${cN(v,c||'')}</tr>`;
  const KN=[['inc','💰 التحصيلات'],['ccr','💳 تحصيل لحساب الكريديت'],['exp','💸 المصروفات'],['tri','🔁 تحويلات داخلة'],['tro','🔁 تحويلات خارجة'],['cc','💳 سداد الكريديت'],['cash',ca?'🏧 سحب من البنوك للكاش':'🏧 سحب كاش'],['lno','🤝 سلف اتصرفت'],['lni','🤝 سداد سلف'],['lnw','🚫 سلف اتعدمت']];
  let h=kp?rkp([['رصيد أول الفترة',g.o,'net'],['داخل',r2(g.ev.filter(e=>e.a>0).reduce((a,e)=>a+e.a,0)),'inc'],['خارج',r2(-g.ev.filter(e=>e.a<0).reduce((a,e)=>a+e.a,0)),'exp'],['رصيد آخر الفترة',g.e,g.e<0?'exp':'inc']]):'';
  if(!cr){const ng=g.o<0?{d:f,r:g.o}:g.ev.find(e=>e.r<0);if(ng)h+=`<div class="xwarn">⚠️ الرصيد نزل تحت الصفر يوم <b>${dmy(ng.d)}</b> (<b dir="ltr">${N(ng.r)}</b>).<br>الحساب مايقدرش يبقى بالسالب، فده معناه واحد من دول: فيه فلوس دخلت قبل كده ومتسجلتش، أو حركة متسجلة بتاريخ متأخر عن الحقيقي، أو رصيد البداية أقل من الحقيقي.</div>`}
  if(f>'1900-01-02'){const b0=xBalAt(id,'1900-01-01',L,Cs),pre=xLedger(id,'1900-01-01',xPvD(f),L,Cs),ps=pre.sum,sm=r2(pre.ev.reduce((a,e)=>a+e.a,0)),df=r2(g.o-b0-sm),rows=[rw('رصيد البداية المتسجل للحساب',N(b0))];
    KN.forEach(([k,l])=>{if(ps[k])rows.push(rw(l+' · قبل '+dmy(f),sg(ps[k]),ps[k]<0?'exp':'inc'))});if(Math.abs(df)>0.009)rows.push(rw('⚖️ تسوية رصيد البداية',sg(df),df<0?'exp':'inc'));
    h+=rsec('🔎 رصيد أول الفترة جه منين',String(pre.ev.length)+' حركة')+rtbl(['البيان','المبلغ|n'],rows,`<tr><td class="t"><b>= رصيد أول الفترة · ${dmy(f)}</b></td><td class="n"><b>${nm(N(g.o))}</b></td></tr>`)+(pre.ev.length?'<p class="xnote">عشان تشوف الحركات دي واحدة واحدة، اختار الفترة: كل الفترات</p>':'')}
  const rows=[rw('رصيد أول الفترة · '+dmy(f),N(g.o))];KN.forEach(([k,l])=>{if(s[k])rows.push(rw(l,sg(s[k]),s[k]<0?'exp':'inc'))});
  h+=rsec('🧮 الملخص')+rtbl(['البيان','المبلغ|n'],rows,`<tr><td class="t"><b>= رصيد آخر الفترة · ${dmy(t)}</b></td><td class="n"><b>${nm(N(g.e))}</b></td></tr>`);
  h+=rsec('📋 كل الحركات',String(g.ev.length))+'<p class="xnote">الرصيد في كل سطر = الرصيد اللي قبله + المبلغ · الأخضر داخل والأحمر خارج · الرصيد بالأحمر يعني بالسالب</p>'
    +(g.ev.length?rtbl(['التاريخ|c','البيان','المبلغ|n','الرصيد|n'],g.ev.map(e=>`<tr ${e.id?`class="clk" onclick="editTx('${e.id}')"`:e.ln?`class="clk" onclick="xLnOpen('${e.ln}')"`:''}>${cD(e.d)}${cT(esc(e.l),esc(e.s||''))}${cN(sg(e.a),e.a<0?'exp':'inc')}${cN(N(e.r),e.r<0&&!cr?'exp':'')}</tr>`)):NONE);
  return h;
};
try{render()}catch(e){}
/* ========== 2.21.48 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xclb{font-size:11px;background:#e0f2fe;color:#075985;border-radius:8px;padding:1px 6px;margin-inline-start:4px;font-weight:600;white-space:nowrap}
.xcltel{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}.xcltel a{text-decoration:none}
.xsrch{width:100%;margin:8px 0;padding:10px 12px;border-radius:12px;border:1px solid #d1d5db;font:inherit;box-sizing:border-box}
.xrow{display:flex;gap:4px;margin:6px 0;flex-wrap:wrap;align-items:center}.xrow input{flex:1;min-width:90px}
.xchk{display:flex!important;align-items:center;gap:8px}.xchk input{width:auto!important;flex:none}
.xln.off{opacity:.55}.xclf{margin:6px 0}
`;document.head.appendChild(s)})();

/* ================= السلف: السداد بقى تحصيل · والإعدام بقى شطب ================= */
function xLnCat(){const c=ensureCat('سداد سلف','inc');c.active=true;return c}
function xLnTx(l,p){const c=xLnCat(),t={id:uid(),type:'inc',amount:p.a,cat:c.id,method:p.m,via:'',date:p.d,note:'🤝 '+l.who+(p.note?' · '+p.note:''),files:[],created:Date.now(),xlnp:l.id};S.txs.push(t);p.tx=t.id;return t}
function xLnSync(){let ch=0;
  XLN().forEach(l=>{(l.pays||[]).forEach(p=>{if(p.wo)return;if(!p.tx){xLnTx(l,p);ch=1;return}const t=S.txs.find(x=>x.id===p.tx);if(!t){p.del=1;ch=1;return}const off=!!t.pend;
    if(p.a!==t.amount||p.d!==t.date||p.m!==t.method||!!p.off!==off){p.a=t.amount;p.d=t.date;p.m=t.method;p.off=off;ch=1}});
    const n=(l.pays||[]).length;l.pays=(l.pays||[]).filter(p=>!p.del);if(l.pays.length!==n)ch=1});
  (S.cats||[]).forEach(c=>{if(c.name==='سلف معدومة'){c.name='سلف مشطوبة';ch=1}});
  if(ch)save()}
xLnPaid=function(l,real){return r2((l.pays||[]).filter(p=>!p.off&&(!real||!p.wo)).reduce((s,x)=>s+x.a,0))};
xLnAlloc=function(l,real){let p=xLnPaid(l,real);const td=today();
  return(l.sch||[]).slice().sort((a,b)=>a.d.localeCompare(b.d)).map(s=>{const u=Math.min(s.a,Math.max(0,p));p=r2(p-u);const rem=r2(s.a-u);
    return{...s,pd:u,rem,st:rem<=0.009?'ok':s.d<td?'late':s.d===td?'today':u>0?'part':'up'}})};
xLnDelta=function(id,before){let s=0;XLN().forEach(l=>{if(l.m===id&&l.d<before)s-=l.amt;(l.pays||[]).forEach(p=>{if(!p.tx&&!p.off&&p.m===id&&p.d<before)s+=p.a})});return r2(s)};
xLnMoves=function(id,f,t){const ev=[];XLN().forEach(l=>{
  if(l.m===id&&l.d>=f&&l.d<=t)ev.push({d:l.d,c:l.c||0,k:'lno',a:-l.amt,l:'🤝 سلفة لـ '+l.who,s:l.note||'',ln:l.id});
  (l.pays||[]).forEach(p=>{if(p.wo&&p.m===id&&p.d>=f&&p.d<=t)ev.push({d:p.d,c:p.c||0,k:'lnw',a:p.a,l:'🧾 شطب سلفة '+l.who,s:'الباقي اتسجل مصروف "سلف مشطوبة"',ln:l.id})})});return ev};
try{const _lhW=xLedgerHTML;xLedgerHTML=function(){const h=_lhW.apply(this,arguments);return typeof h==='string'?h.replace(/🚫 سلف اتعدمت/g,'🧾 سلف مشطوبة'):h}}catch(e){}
xLnMig=function(){const old=S.txs.filter(t=>t.loan&&t.type==='exp');if(!old.length)return;
  old.forEach(t=>{const all=S.txs.filter(x=>x.loanOf===t.id),pays=all.filter(p=>!p.pend),paid=r2(pays.reduce((s,p)=>s+p.amount,0)),rem=r2(t.amount-paid);
    const who=(C(t.cat)?.name||'').replace(/^سلف(ة|ه)?\s*(لـ|ل)?\s*/,'').trim()||(C(t.cat)?.name||'سلفة');
    const sch=[];if(paid>0)sch.push({id:uid(),d:t.date,a:paid});
    let fut=[];try{if(typeof xLoanSched==='function')fut=xLoanSched(t)}catch(e){}
    if(rem>0){if(fut.length&&Math.abs(r2(fut.reduce((s,x)=>s+x.a,0))-rem)<0.02)fut.forEach(x=>sch.push({id:uid(),d:x.d,a:x.a}));else sch.push({id:uid(),d:t.loan.due||addMonths(t.date,1),a:rem})}
    const l={id:uid(),who,amt:t.amount,m:t.method,d:t.date,note:t.note&&!/^🤝/.test(t.note)?t.note:'',sch,pays:pays.map(p=>({id:uid(),d:p.date,a:p.amount,m:p.method,note:'',c:p.created||0,tx:p.id})),c:t.created||Date.now()};XLN().push(l);
    const c=xLnCat();pays.forEach(p=>{p.cat=c.id;p.note='🤝 '+who;p.xlnp=l.id;delete p.loanOf});
    for(let i=S.txs.length-1;i>=0;i--){const x=S.txs[i];if(x===t||(x.loanOf===t.id&&x.pend))S.txs.splice(i,1)}});
  save()};
xLnView=function(){
  const ls=XLN(),td=today(),mk=td.slice(0,7),op=ls.filter(l=>l.st!=='wo'&&xLnRem(l)>0.009),cl=ls.filter(l=>!op.includes(l));let out=0,late=0,mo=0;
  op.forEach(l=>{out+=xLnRem(l);xLnAlloc(l).forEach(s=>{if(s.rem>0){if(s.d<td)late+=s.rem;if(s.d.startsWith(mk))mo+=s.rem}})});
  const card=l=>{const wo=l.st==='wo',rem=xLnRem(l),pd=xLnPaid(l,1),nx=xLnNext(l),pc=Math.min(100,Math.round(pd/l.amt*100)),lt=nx&&nx.d<td&&!wo;
    return `<div class="xln ${lt?'late':''}" onclick="xLnOpen('${l.id}')"><div class="xlnh"><b>👤 ${esc(l.who)}</b><b dir="ltr">${num(wo?0:rem)}</b></div><small>${wo?'🧾 اتشطبت':rem<=0.009?'✅ اتسددت':nx?(lt?'⚠️ متأخر · ':'📅 ')+'القسط الجاي '+num(nx.rem)+' يوم '+dmy(nx.d):''} · من ${num(l.amt)} · اتصرفت ${dmy(l.d)}</small><div class="xbar"><i style="width:${pc}%"></i></div></div>`};
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🤝 السلف</h3><button class="mini pri" onclick="xLnNew()">+ سلفة</button></div>`
   +kpis([['💼 فلوسك عند الناس',fmt(r2(out)),'net'],['⚠️ متأخر',fmt(r2(late)),'exp'],['📅 مستحق الشهر ده',fmt(r2(mo)),'inc']])
   +(op.length?op.map(card).join(''):'<p class="muted" style="text-align:center">مفيش سلف مفتوحة</p>')
   +(cl.length?`<details class="gen"><summary>📁 السلف المقفولة (${cl.length})</summary>${cl.map(card).join('')}</details>`:'')
   +'<p class="xnote">السلفة نفسها مش بتتحسب مصروف. السداد بيتسجل تحصيل في بند "سداد سلف". ولو حد مش هيرجعها، دوس 🧾 شطب فالباقي يتسجل مصروف.</p>';
};
xLnOpen=function(id){const l=xLnL(id);if(!l)return;const wo=l.st==='wo',al=xLnAlloc(l,wo),rem=xLnRem(l),pd=xLnPaid(l,1),SL={ok:'✅ اتسدد',part:'🟡 اتدفع جزء',late:'⚠️ متأخر',today:'🔔 النهارده',up:'⏳ جاي'};
  sheet(`<h2>🤝 ${esc(l.who)}</h2><p class="muted">اتصرفت ${dmy(l.d)} من ${esc(M(l.m)?.name||'—')}${l.note?' · '+esc(l.note):''}</p>
  <div class="kv"><span>المبلغ</span><b>${fmt(l.amt)}</b></div><div class="kv"><span>اتسدد</span><b class="pos">${fmt(pd)}</b></div><div class="kv"><span>${wo?'🧾 اتشطب':'الباقي'}</span><b class="neg">${fmt(wo?r2(l.amt-pd):rem)}</b></div>
  <div class="fl">📆 جدول السداد</div>
  <div class="list">${al.map((s,i)=>`<div class="row"><div class="grow"><b>${al.length>1?'قسط '+(i+1)+' · ':''}${dmy(s.d)}</b><small>${wo&&s.rem>0.009?'🧾 اتشطب':SL[s.st]}${s.pd>0&&s.rem>0?' · اتدفع '+num(s.pd)+' وفاضل '+num(s.rem):''}</small></div><div class="amt">${num(s.a)}</div>${s.rem>0.009&&!wo?`<button class="mini" title="تأجيل" onclick="xLnDefer('${id}','${s.id}')">⏭</button>`:''}</div>`).join('')}</div>
  ${(l.pays||[]).length?`<div class="fl">💵 الدفعات · متسجلة تحصيل في بند "سداد سلف"</div><div class="list">${l.pays.map(p=>`<div class="row ${p.tx?'clk':''}" ${p.tx?`onclick="editTx('${p.tx}')"`:''}><div class="grow"><b>${dmy(p.d)}</b><small>${p.wo?'🧾 شطب · اتسجل مصروف':p.off?'⏳ متعلّم غير محصّل، مش محسوب':esc(M(p.m)?.name||'')}${p.note?' · '+esc(p.note):''}</small></div><div class="amt ${p.wo||p.off?'':'pos'}">${num(p.a)}</div>${p.wo?'':`<button class="mini ic danger" onclick="event.stopPropagation();xLnPayDel('${id}','${p.id}')">🗑</button>`}</div>`).join('')}</div>`:''}
  ${rem>0.009&&!wo?`<button class="btn" onclick="xLnPay('${id}')">💵 سجّل دفعة</button><button class="btn ghost" onclick="xLnResch('${id}')">🗓 إعادة جدولة الباقي</button><button class="btn ghost danger" onclick="xLnWo('${id}')">🧾 مش هيرجعها (شطب)</button>`:''}
  ${wo?`<button class="btn ghost" onclick="xLnUnWo('${id}')">↩️ إلغاء الشطب</button>`:''}
  <button class="btn ghost" onclick="xLnEdit('${id}')">✏️ تعديل البيانات</button><button class="btn ghost danger" onclick="xLnDel('${id}')">🗑 حذف السلفة</button>`)};
xLnPaySv=function(id){const l=xLnL(id);if(!l)return;const a=parseNum($('#lp-a').value),d=$('#lp-d').value,m=$('#lp-m').value,rem=xLnRem(l),nx=xLnNext(l);
  if(!(a>0))return toast('اكتب المبلغ');if(a>rem+0.009)return toast('المبلغ أكبر من الباقي ('+fmt(rem)+')');if(!d)return toast('اختار التاريخ');if(isClosed(d))return toast(`شهر ${mName(d.slice(0,7))} مقفول`);
  const part=nx&&a<nx.rem-0.009,nd=part?($('#lp-n')||{}).value:'';
  const p={id:uid(),d,a,m,note:($('#lp-t').value||'').trim(),c:Date.now()};l.pays=l.pays||[];l.pays.push(p);xLnTx(l,p);
  if(part&&nd&&nd!==nx.d){const it=l.sch.find(x=>x.id===nx.id);if(it){const r=r2(nx.rem-a);it.a=r2(it.a-r);l.sch.push({id:uid(),d:nd,a:r})}}
  save();render();xLnOpen(id);const left=xLnRem(l);toast(left>0.009?`✅ اتسجل تحصيل ${fmt(a)} · فاضل ${fmt(left)}`:'✅ اتسددت بالكامل')};
xLnPayDel=async function(id,pid){const l=xLnL(id);if(!l)return;const p=(l.pays||[]).find(x=>x.id===pid);if(!p)return;
  if(!await dlg({title:'مسح الدفعة',msg:'الدفعة هتتمسح من السلفة ومن التحصيلات، والمبلغ يرجع على السلفة.',icon:'🗑',ok:'امسح',cancel:'لا'}))return;
  if(p.tx){const i=S.txs.findIndex(t=>t.id===p.tx);if(i>=0)S.txs.splice(i,1)}l.pays=l.pays.filter(x=>x.id!==pid);save();render();xLnOpen(id);toast('اتمسحت')};
xLnWo=async function(id){const l=xLnL(id);if(!l)return;const rem=xLnRem(l);if(!(rem>0))return;
  if(!await dlg({title:'شطب السلفة',msg:`الباقي ${fmt(rem)} هيتسجل مصروف في بند "سلف مشطوبة" والسلفة تتقفل. رصيد الحساب مش هيتغير.`,icon:'🧾',ok:'أيوه، اشطبها',cancel:'لا'}))return;
  const d=today();if(isClosed(d))return toast('الشهر مقفول');const c=ensureCat('سلف مشطوبة','exp');c.active=true;
  const tx={id:uid(),type:'exp',amount:rem,cat:c.id,method:l.m,date:d,note:'🧾 سلفة '+l.who+' مش هترجع',files:[],created:Date.now(),xlnwo:l.id};S.txs.push(tx);
  const pid=uid();l.pays.push({id:pid,d,a:rem,m:l.m,wo:1,note:'',c:Date.now()});l.st='wo';l.wo={tx:tx.id,pay:pid};save();render();xLnOpen(id);toast('🧾 اتشطبت واتسجلت مصروف')};
xLnDel=async function(id){const l=xLnL(id);if(!l)return;
  if(!await dlg({title:'حذف السلفة',msg:'السلفة هتتمسح ومعاها تحصيلات سدادها، ورصيد الحساب هيرجع زي ما كان.',icon:'🗑',ok:'امسح',cancel:'لا'}))return;
  const ids=new Set((l.pays||[]).map(p=>p.tx).filter(Boolean));if(l.wo)ids.add(l.wo.tx);for(let i=S.txs.length-1;i>=0;i--)if(ids.has(S.txs[i].id))S.txs.splice(i,1);
  S.settings.xln=XLN().filter(x=>x.id!==id);save();closeSheet();render();toast('اتمسحت')};
try{const _leS=xLnEdSv;xLnEdSv=function(id){const r=_leS.apply(this,arguments);try{const l=xLnL(id);(l.pays||[]).forEach(p=>{const t=p.tx&&S.txs.find(x=>x.id===p.tx);if(t)t.note='🤝 '+l.who+(p.note?' · '+p.note:'')});save()}catch(e){}return r}}catch(e){}

/* ================= 👥 العملاء ================= */
var XCLK={m:'شهري',y:'سنوي',o:'أخرى'},XCLQ='',XCLPK='m',XCLPRK='m',XCLFK='m',XCLE=null;
function XCL(){S.settings.xcl=S.settings.xcl||[];return S.settings.xcl}
function xClL(id){return XCL().find(c=>c.id===id)}
function xClPr(c,k,d){d=d||today();const p=(c.prices||[]).filter(x=>x.k===k&&x.d<=d).sort((a,b)=>a.d.localeCompare(b.d)).pop();return p?p.a:0}
function xClCat(){const c=ensureCat('تحصيل عملاء','inc');c.active=true;return c}
function xPrevM(k){let[y,m]=k.split('-').map(Number);m--;if(!m){m=12;y--}return y+'-'+String(m).padStart(2,'0')}
function xNextM(k){let[y,m]=k.split('-').map(Number);m++;if(m>12){m=1;y++}return y+'-'+String(m).padStart(2,'0')}
function xWa(p){p=String(p||'').replace(/\D/g,'');if(/^0\d{10}$/.test(p))p='2'+p;return p}
function xClNewTx(c,k,d,a,pend){const t={id:uid(),type:'inc',amount:a,cat:c.cat||xClCat().id,method:c.acc||defMethod(),via:'',date:d,note:'',files:[],created:Date.now(),cl:c.id,clk:k};if(pend)t.pend=true;S.txs.push(t);return t}
/* التحصيل الشهري والسنوي التلقائي */
function xClAuto(){const td=today(),mk=td.slice(0,7);let ch=false;
  XCL().forEach(c=>{if(c.off)return;
    if(c.am){let k=c.gm?xNextM(c.gm):mk,n=0;while(k<=mk&&n<24){n++;const d=k+'-'+String(Math.min(28,Math.max(1,+c.day||1))).padStart(2,'0'),a=xClPr(c,'m',d)||xClPr(c,'m',k+'-28');
      if(a>0&&!isClosed(d)&&!S.txs.some(t=>t.cl===c.id&&t.clk==='m'&&t.date.startsWith(k)))xClNewTx(c,'m',d,a,true);c.gm=k;ch=true;k=xNextM(k)}}
    if(c.renew){const gen=()=>{if(c.ay&&c.ya!==c.renew&&c.renew.slice(0,7)<=mk){const d=c.renew,a=xClPr(c,'y',d);if(a>0&&!isClosed(d)&&!S.txs.some(t=>t.cl===c.id&&t.clk==='y'&&t.date===d))xClNewTx(c,'y',d,a,true);c.ya=d;ch=true}};
      gen();let n=0;while(c.renew<td&&n<5){n++;c.renew=addMonths(c.renew,12);ch=true;gen()}}
  });return ch}
/* الشاشة */
function xClCards(){const td=today(),q=XCLQ.trim().toLowerCase(),L=XCL().slice().sort((a,b)=>(+a.no||0)-(+b.no||0)).filter(c=>!q||[c.no,c.name,c.co,c.mob1,c.mob2,c.tel,c.addr].join(' ').toLowerCase().includes(q));
  if(!L.length)return '<p class="muted" style="text-align:center">مفيش عملاء</p>';
  return L.map(c=>{const pm=xClPr(c,'m'),py=xClPr(c,'y'),pd=r2(S.txs.filter(t=>t.cl===c.id&&t.pend&&t.date<=td).reduce((s,t)=>s+t.amount,0));
    return `<div class="xln ${c.off?'off':''}" onclick="xClOpen('${c.id}')"><div class="xlnh"><b>#${esc(String(c.no||''))} · ${esc(c.name)}</b>${pd?`<b class="neg" dir="ltr">${num(pd)}</b>`:''}</div>${c.co||c.mob1?`<small>${[c.co,c.mob1].filter(Boolean).map(esc).join(' · ')}</small>`:''}<small>${[pm?'🔁 شهري '+num(pm):'',py?'📅 سنوي '+num(py):'',c.renew?'التجديد '+dmy(c.renew):'',c.off?'⏸ موقوف':''].filter(Boolean).join(' · ')}</small></div>`}).join('')}
function xClList(){const el=$('#xcl-l');if(el)el.innerHTML=xClCards()}
function xClView(){const mk=today().slice(0,7);let col=0,pen=0;S.txs.forEach(t=>{if(t.cl&&t.type==='inc'&&t.date.startsWith(mk)){if(t.pend)pen+=t.amount;else col+=t.amount}});
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>👥 العملاء</h3><button class="mini" onclick="xClRep('clsum')">📊</button><button class="mini pri" onclick="xClForm()">+ عميل</button></div>`
  +kpis([['👥 العملاء',String(XCL().filter(c=>!c.off).length),'net'],['✅ اتحصّل الشهر ده',fmt(r2(col)),'inc'],['⏳ لسه',fmt(r2(pen)),'exp']])
  +`<input class="xsrch" placeholder="🔍 دوّر بالاسم أو الرقم أو الموبايل" value="${esc(XCLQ)}" oninput="XCLQ=this.value;xClList()"><div id="xcl-l">${xClCards()}</div>`}
/* ملف العميل */
function xClPriceHTML(c){const P=(c.prices||[]).slice().sort((a,b)=>a.d.localeCompare(b.d)),pv={};if(!P.length)return '<p class="muted">مفيش أسعار متسجلة</p>';
  const R=P.map(p=>{const o=pv[p.k];pv[p.k]=p.a;return{p,pc:o?r2((p.a-o)/o*100):null}}).reverse();
  return `<div class="list">${R.map(({p,pc})=>`<div class="row"><div class="grow"><b>${XCLK[p.k]} · ${num(p.a)}</b><small>من ${dmy(p.d)}${pc!=null?' · '+(pc>=0?'📈 +':'📉 ')+pc+'%':' · أول سعر'}${p.d>today()?' · ⏳ لسه ماطبقش':''}</small></div><button class="mini ic danger" onclick="xClPrDel('${c.id}','${p.id}')">🗑</button></div>`).join('')}</div>`}
function xClOpen(id){const c=xClL(id);if(!c)return;const td=today(),T=S.txs.filter(t=>t.cl===id).sort((a,b)=>b.date.localeCompare(a.date)),col=r2(T.filter(t=>!t.pend).reduce((s,t)=>s+t.amount,0)),pen=r2(T.filter(t=>t.pend&&t.date<=td).reduce((s,t)=>s+t.amount,0));
  const tel=v=>v?`<a class="mini" href="tel:${esc(v)}">📞 ${esc(v)}</a>`:'',dd=c.renew?Math.round((new Date(c.renew+'T12:00:00')-new Date(td+'T12:00:00'))/864e5):999,ren=c.renew&&!c.off&&c.incAck!==c.renew&&dd>=0&&dd<=(c.remD??30);
  sheet(`<h2>👥 ${esc(c.name)}</h2><p class="muted">عميل #${esc(String(c.no||''))}${c.co?' · '+esc(c.co):''}${c.off?' · ⏸ موقوف':''}</p>
  ${ren?`<div class="xlnal" style="cursor:default">🔔 التجديد بعد ${dd} يوم (${dmy(c.renew)})${c.pct?' · الزيادة المعتادة '+c.pct+'%':''}<div style="display:flex;gap:6px;margin-top:8px"><button class="mini pri" onclick="xClPrice('${id}')">📈 سجّل الزيادة</button><button class="mini" onclick="xClNoInc('${id}')">✋ مفيش زيادة السنة دي</button></div></div>`:''}
  ${c.addr?`<div class="kv"><span>📍 العنوان</span><b>${esc(c.addr)}</b></div>`:''}
  <div class="xcltel">${tel(c.mob1)}${tel(c.mob2)}${tel(c.tel)}${c.mob1?`<a class="mini" href="https://wa.me/${xWa(c.mob1)}" target="_blank">💬 واتساب</a>`:''}</div>
  <div class="kv"><span>✅ اتحصّل منه</span><b class="pos">${fmt(col)}</b></div>${pen?`<div class="kv"><span>⏳ عليه لسه</span><b class="neg">${fmt(pen)}</b></div>`:''}
  ${c.renew?`<div class="kv"><span>📅 التجديد السنوي</span><b>${dmy(c.renew)}</b></div>`:''}
  <details class="gen" open><summary>💲 الأسعار</summary>${xClPriceHTML(c)}<button class="mini" style="margin-top:6px" onclick="xClPrice('${id}')">📈 تغيير السعر</button></details>
  ${(c.br||[]).length?`<details class="gen"><summary>🏢 الفروع (${c.br.length})</summary><div class="list">${c.br.map(b=>`<div class="row"><div class="grow"><b>${esc(b.n||'—')}</b><small>${esc([b.a,b.t].filter(Boolean).join(' · '))}</small></div>${b.t?`<a class="mini" href="tel:${esc(b.t)}">📞</a>`:''}</div>`).join('')}</div></details>`:''}
  ${(c.ex||[]).length?`<details class="gen"><summary>🔧 بيانات فنية (${c.ex.length})</summary><div class="list">${c.ex.map((e,i)=>`<div class="row"><div class="grow"><b>${esc(e.k)}</b><small dir="ltr" style="user-select:all">${esc(e.v)}</small></div><button class="mini ic" onclick="xClCp('${id}',${i})">📋</button></div>`).join('')}</div></details>`:''}
  ${c.nt?`<p class="xnote">📝 ${esc(c.nt)}</p>`:''}
  ${T.length?`<details class="gen"><summary>📋 آخر التحصيلات (${T.length})</summary><div class="list">${T.slice(0,10).map(t=>`<div class="row clk" onclick="editTx('${t.id}')"><div class="grow"><b>${dmy(t.date)} · ${XCLK[t.clk]||'أخرى'}</b><small>${t.pend?'⏳ لسه':'✅ اتحصّل'}${t.note?' · '+esc(t.note):''}</small></div><div class="amt ${t.pend?'neg':'pos'}">${num(t.amount)}</div></div>`).join('')}</div></details>`:''}
  <button class="btn" onclick="xClPay('${id}')">💵 تحصيل</button>
  <div class="two"><button class="btn ghost" onclick="xClRep('clst','${id}')">📄 كشف حساب</button><button class="btn ghost" onclick="xClRep('cldata','${id}')">🧾 بيانات العميل</button></div>
  <div class="two"><button class="btn ghost" onclick="xClForm('${id}')">✏️ تعديل</button><button class="btn ghost danger" onclick="xClDel('${id}')">🗑 حذف</button></div>`)}
function xClCp(id,i){const c=xClL(id),v=c&&c.ex&&c.ex[i]?c.ex[i].v:'';if(!v)return;try{navigator.clipboard.writeText(v).then(()=>toast('📋 اتنسخ'),()=>toast(v))}catch(e){toast(v)}}
function xClNoInc(id){const c=xClL(id);if(!c)return;c.incAck=c.renew;save();render();xClOpen(id);toast('✋ تمام، مفيش زيادة السنة دي')}
/* إضافة وتعديل */
function xClBrRow(b){b=b||{};return `<div class="xrow"><input data-f="n" placeholder="اسم الفرع" value="${esc(b.n||'')}"><input data-f="a" placeholder="العنوان" value="${esc(b.a||'')}"><input data-f="t" placeholder="تليفون" dir="ltr" inputmode="tel" value="${esc(b.t||'')}"><button type="button" class="mini ic danger" onclick="this.closest('.xrow').remove()">✕</button></div>`}
function xClExRow(e){e=e||{};return `<div class="xrow"><input data-f="k" list="cl-exk" placeholder="الخانة (AnyDesk مثلاً)" value="${esc(e.k||'')}"><input data-f="v" placeholder="القيمة" dir="ltr" value="${esc(e.v||'')}"><button type="button" class="mini ic danger" onclick="this.closest('.xrow').remove()">✕</button></div>`}
function xClAdd(w){const el=$('#cl-'+w);if(el)el.insertAdjacentHTML('beforeend',w==='br'?xClBrRow():xClExRow())}
function xClRows(w,keys){return[...document.querySelectorAll('#cl-'+w+' .xrow')].map(r=>{const o={};keys.forEach(k=>{o[k]=((r.querySelector('[data-f="'+k+'"]')||{}).value||'').trim()});return o}).filter(o=>keys.some(k=>o[k]))}
function xClForm(id){const c=id?xClL(id):null,no=c?c.no:(Math.max(0,...XCL().map(x=>+x.no||0))+1),cid=c&&c.cat?c.cat:xClCat().id,inc=S.cats.filter(x=>x.type==='inc'&&(x.active||x.id===cid));
  sheet(`<h2>${c?'✏️ تعديل عميل':'👥 عميل جديد'}</h2>
  <div class="two"><label>رقم العميل<input id="cl-no" inputmode="numeric" value="${esc(String(no))}"></label><label>الاسم *<input id="cl-n" value="${esc(c?.name||'')}"></label></div>
  <label>الشركة<input id="cl-co" value="${esc(c?.co||'')}"></label>
  <label>العنوان<input id="cl-ad" value="${esc(c?.addr||'')}"></label>
  <div class="two"><label>موبايل 1<input id="cl-m1" inputmode="tel" dir="ltr" value="${esc(c?.mob1||'')}"></label><label>موبايل 2<input id="cl-m2" inputmode="tel" dir="ltr" value="${esc(c?.mob2||'')}"></label></div>
  <label>تليفون أرضي<input id="cl-t" inputmode="tel" dir="ltr" value="${esc(c?.tel||'')}"></label>
  <details class="gen" ${c?'':'open'}><summary>💲 الحساب والتحصيل</summary>
   ${c?'<p class="xnote">الأسعار بتتغير من 📈 تغيير السعر في صفحة العميل، عشان يتحفظ تاريخها ونسبة الزيادة</p>':`<div class="two"><label>الاشتراك الشهري<input id="cl-pm" inputmode="decimal" dir="ltr" placeholder="0"></label><label>الاشتراك السنوي<input id="cl-py" inputmode="decimal" dir="ltr" placeholder="0"></label></div><label>الأسعار دي سارية من<input id="cl-pd" type="date" value="${today()}"></label>`}
   <div class="two"><label>يوم التحصيل الشهري<input id="cl-dy" inputmode="numeric" value="${c?.day||1}"></label><label>ميعاد التجديد السنوي<input id="cl-rn" type="date" value="${c?.renew||''}"></label></div>
   <div class="two"><label>نبّهني قبل التجديد بـ (يوم)<input id="cl-rd" inputmode="numeric" value="${c?.remD??30}"></label><label>نسبة الزيادة السنوية %<input id="cl-pc" inputmode="decimal" dir="ltr" value="${c?.pct??10}"></label></div>
   <div class="two"><label>بيتحصّل في حساب<select id="cl-ac">${opt(S.methods.filter(m=>m.active&&!xIsCr(m.id)),c?.acc||defMethod())}</select></label><label>البند<select id="cl-ct">${opt(inc,cid)}</select></label></div>
   <label class="xchk"><input type="checkbox" id="cl-am" ${!c||c.am?'checked':''}> 🔁 سجّل الاشتراك الشهري لوحده كل شهر (معلّق لحد ما يتحصّل)</label>
   <label class="xchk"><input type="checkbox" id="cl-ay" ${!c||c.ay?'checked':''}> 📅 سجّل الاشتراك السنوي لوحده في ميعاد التجديد</label>
  </details>
  <details class="gen" ${(c?.br||[]).length?'open':''}><summary>🏢 الفروع</summary><div id="cl-br">${(c?.br||[]).map(xClBrRow).join('')}</div><button type="button" class="mini" onclick="xClAdd('br')">+ فرع</button></details>
  <details class="gen" ${(c?.ex||[]).length?'open':''}><summary>🔧 بيانات فنية (AnyDesk · VPN · ...)</summary><div id="cl-ex">${(c?.ex||[]).map(xClExRow).join('')}</div><button type="button" class="mini" onclick="xClAdd('ex')">+ خانة</button><datalist id="cl-exk">${['AnyDesk','AnyDesk Password','VPN','VPN User','VPN Password','IP','Server','User','Password','TeamViewer','Email'].map(k=>`<option value="${k}">`).join('')}</datalist></details>
  <label>ملاحظات<textarea id="cl-nt" rows="2">${esc(c?.nt||'')}</textarea></label>
  ${c?`<label class="xchk"><input type="checkbox" id="cl-off" ${c.off?'checked':''}> ⏸ عميل موقوف (مش هيتسجل له تحصيل تلقائي)</label>`:''}
  <button class="btn" onclick="xClSave(${c?`'${id}'`:''})">💾 حفظ</button>${c?`<button class="btn ghost" onclick="xClOpen('${id}')">رجوع</button>`:''}`)}
function xClSave(id){const g=k=>(($('#cl-'+k)||{}).value||'').trim(),n=g('n');if(!n)return toast('اكتب اسم العميل');
  const no=latD(g('no'));if(no&&XCL().some(x=>x.id!==id&&String(x.no)===no))return toast('رقم العميل ده موجود');
  let c=id?xClL(id):null;const isNew=!c,wasAm=c?!!c.am:false,oldRn=c?c.renew:'';if(!c)c={id:uid(),prices:[],c:Date.now()};
  Object.assign(c,{no:no||'',name:n,co:g('co'),addr:g('ad'),mob1:latD(g('m1')),mob2:latD(g('m2')),tel:latD(g('t')),day:Math.min(28,Math.max(1,parseInt(latD(g('dy')))||1)),renew:g('rn'),remD:Math.max(0,parseInt(latD(g('rd')))||0),pct:parseNum(g('pc'))||0,acc:g('ac'),cat:g('ct'),am:!!($('#cl-am')||{}).checked,ay:!!($('#cl-ay')||{}).checked,br:xClRows('br',['n','a','t']),ex:xClRows('ex',['k','v']),nt:g('nt')});
  if($('#cl-off'))c.off=$('#cl-off').checked;
  if(c.renew&&c.renew!==oldRn){let n2=0;while(c.renew<today()&&n2<50){n2++;c.renew=addMonths(c.renew,12)}}
  const mk=today().slice(0,7);
  if(isNew){const pd=g('pd')||today(),pm=parseNum(g('pm')),py=parseNum(g('py'));if(pm>0)c.prices.push({id:uid(),d:pd,k:'m',a:pm});if(py>0)c.prices.push({id:uid(),d:pd,k:'y',a:py});const m0=pd.slice(0,7)>mk?pd.slice(0,7):mk;c.gm=xPrevM(m0);XCL().push(c)}
  else if(c.am&&!wasAm)c.gm=xPrevM(mk);
  xClAuto();save();render();xClOpen(c.id);toast('✅ اتحفظ')}
async function xClDel(id){const c=xClL(id);if(!c)return;if(!await dlg({title:'حذف العميل',msg:'العميل هيتمسح. التحصيلات اللي اتحصّلت هتفضل في التحصيلات، والمعلّق بتاعه هيتمسح.',icon:'🗑',ok:'امسح',cancel:'لا'}))return;
  for(let i=S.txs.length-1;i>=0;i--){const t=S.txs[i];if(t.cl===id){if(t.pend)S.txs.splice(i,1);else{delete t.cl;delete t.clk}}}
  S.settings.xcl=XCL().filter(x=>x.id!==id);save();closeSheet();render();toast('اتمسح')}
/* تحصيل من صفحة العميل */
function xClPay(id){const c=xClL(id);if(!c)return;const k=xClPr(c,'m')?'m':xClPr(c,'y')?'y':'o',P=S.txs.filter(t=>t.cl===id&&t.pend).sort((a,b)=>a.date.localeCompare(b.date));XCLPK=k;
  sheet(`<h2>💵 تحصيل · ${esc(c.name)}</h2>
  ${P.length?`<div class="fl">⏳ عليه معلّق، علّم على اللي اتحصّل</div><div class="list">${P.map(t=>`<div class="row"><div class="grow"><b>${dmy(t.date)} · ${XCLK[t.clk]||'أخرى'}</b><small>${t.note?esc(t.note):''}</small></div><div class="amt neg">${num(t.amount)}</div><button class="mini pri" onclick="xClMark('${id}','${t.id}')">✅</button></div>`).join('')}</div><div class="fl">أو سجّل تحصيل جديد</div>`:''}
  <div class="seg" id="cp-k">${['m','y','o'].map(x=>`<button type="button" data-k="${x}" class="${x===k?'on':''}" onclick="xClPK('${id}','${x}')">${XCLK[x]}</button>`).join('')}</div>
  <label>المبلغ<input id="cp-a" class="amt-in" inputmode="decimal" dir="ltr" placeholder="0" value="${k!=='o'?amtStr(xClPr(c,k)):''}"></label>
  <div class="two"><label>استلمت في حساب<select id="cp-m">${opt(S.methods.filter(m=>m.active&&!xIsCr(m.id)),c.acc||defMethod())}</select></label><label>الطريقة<select id="cp-v">${viaOpts('')}</select></label></div>
  <div class="two"><label>التاريخ<input id="cp-d" type="date" value="${today()}"></label><label>الحالة<select id="cp-s"><option value="1">✅ اتحصّل</option><option value="0">⏳ لسه (معلّق)</option></select></label></div>
  <label>ملاحظة<input id="cp-n" placeholder="مثلاً: شهر أكتوبر"></label>
  <button class="btn" onclick="xClPaySv('${id}')">✅ سجّل</button><button class="btn ghost" onclick="xClOpen('${id}')">رجوع</button>`)}
function xClPK(id,k){XCLPK=k;document.querySelectorAll('#cp-k button').forEach(b=>b.classList.toggle('on',b.dataset.k===k));const c=xClL(id),a=$('#cp-a');if(c&&a)a.value=k!=='o'&&xClPr(c,k)?amtStr(xClPr(c,k)):''}
function xClMark(id,tid){const t=S.txs.find(x=>x.id===tid);if(!t)return;const d=($('#cp-d')||{}).value||today();if(isClosed(d))return toast(`شهر ${mName(d.slice(0,7))} مقفول`);
  t.pend=false;t.date=d;t.method=$('#cp-m').value;t.via=$('#cp-v').value;save();render();xClPay(id);toast('✅ اتحصّل '+fmt(t.amount))}
function xClPaySv(id){const c=xClL(id);if(!c)return;const a=parseNum($('#cp-a').value),d=$('#cp-d').value;if(!(a>0))return toast('اكتب المبلغ');if(!d)return toast('اختار التاريخ');if(isClosed(d))return toast(`شهر ${mName(d.slice(0,7))} مقفول`);
  const t=xClNewTx(c,XCLPK,d,a,$('#cp-s').value==='0');t.method=$('#cp-m').value;t.via=$('#cp-v').value;t.note=($('#cp-n').value||'').trim();save();render();xClOpen(id);toast(t.pend?'⏳ اتسجل معلّق':'✅ اتسجل التحصيل')}
/* تغيير السعر */
function xClPrice(id){const c=xClL(id);if(!c)return;const k=xClPr(c,'y')&&!xClPr(c,'m')?'y':'m',d0=c.renew&&c.renew>=today()?c.renew:today();XCLPRK=k;
  sheet(`<h2>📈 تغيير السعر · ${esc(c.name)}</h2>
  <div class="seg" id="pr-k"><button type="button" data-k="m" class="${k==='m'?'on':''}" onclick="xClPrK('${id}','m')">شهري</button><button type="button" data-k="y" class="${k==='y'?'on':''}" onclick="xClPrK('${id}','y')">سنوي</button></div>
  <div class="kv"><span>السعر الحالي</span><b id="pr-c">${num(xClPr(c,k))}</b></div>
  <div class="two"><label>نسبة الزيادة %<input id="pr-p" inputmode="decimal" dir="ltr" value="${c.pct||''}" oninput="xClPrC('${id}','p')"></label><label>السعر الجديد<input id="pr-a" class="amt-in" inputmode="decimal" dir="ltr" oninput="xClPrC('${id}','a')"></label></div>
  <label>ساري من<input id="pr-d" type="date" value="${d0}"></label>
  <p class="xnote">أي تحصيل معلّق من التاريخ ده هيتعدّل للسعر الجديد</p>
  <button class="btn" onclick="xClPrSv('${id}')">✅ احفظ</button><button class="btn ghost" onclick="xClOpen('${id}')">رجوع</button>`);xClPrC(id,'p')}
function xClPrK(id,k){XCLPRK=k;document.querySelectorAll('#pr-k button').forEach(b=>b.classList.toggle('on',b.dataset.k===k));const c=xClL(id);if(!c)return;$('#pr-c').textContent=num(xClPr(c,k));xClPrC(id,'p')}
function xClPrC(id,w){const c=xClL(id);if(!c)return;const cur=xClPr(c,XCLPRK);
  if(w==='p'){const p=parseNum($('#pr-p').value)||0;$('#pr-a').value=cur?amtStr(r2(cur*(1+p/100))):''}else{const a=parseNum($('#pr-a').value)||0;$('#pr-p').value=cur&&a?String(r2((a-cur)/cur*100)):''}}
function xClPrSv(id){const c=xClL(id);if(!c)return;const a=parseNum($('#pr-a').value),d=$('#pr-d').value,k=XCLPRK;if(!(a>0))return toast('اكتب السعر الجديد');if(!d)return toast('اختار التاريخ');
  c.prices=c.prices||[];c.prices.push({id:uid(),d,k,a});S.txs.forEach(t=>{if(t.cl===id&&t.clk===k&&t.pend&&t.date>=d)t.amount=a});if(c.renew)c.incAck=c.renew;save();render();xClOpen(id);toast('📈 اتسجل السعر الجديد '+fmt(a))}
async function xClPrDel(id,pid){const c=xClL(id);if(!c)return;if(!await dlg({title:'مسح السعر',msg:'السعر ده هيتمسح من تاريخ الأسعار.',icon:'🗑',ok:'امسح',cancel:'لا'}))return;c.prices=(c.prices||[]).filter(p=>p.id!==pid);save();xClOpen(id)}
/* خانة العميل في شاشة التحصيل */
function xClInjForm(){if(!XCL().length||$('#f-cl'))return;const sh=$('#sheet');if(!sh)return;const e=XCLE?S.txs.find(t=>t.id===XCLE):null;
  const inc=e?e.type==='inc'&&!e.xlnp:/لسداد الكريديت/.test(sh.textContent);if(!inc)return;
  const cl=e&&e.cl||'',k=e&&e.clk||'m';XCLFK=k;
  const h=`<div class="xclf"><label>👥 تحصيل لعميل؟<select id="f-cl" onchange="xClFC()"><option value="">— تحصيل عادي (مش لعميل) —</option>${XCL().filter(c=>!c.off||c.id===cl).sort((a,b)=>(+a.no||0)-(+b.no||0)).map(c=>`<option value="${c.id}" ${c.id===cl?'selected':''}>#${esc(String(c.no))} · ${esc(c.name)}</option>`).join('')}</select></label><div class="seg" id="f-clk" style="${cl?'':'display:none'}">${['m','y','o'].map(x=>`<button type="button" data-k="${x}" class="${x===k?'on':''}" onclick="xClFK('${x}')">${XCLK[x]}</button>`).join('')}</div></div>`;
  const a=sh.querySelector('.amt-in'),lb=a&&a.closest('label'),h2=sh.querySelector('h2');if(lb)lb.insertAdjacentHTML('afterend',h);else if(h2)h2.insertAdjacentHTML('afterend',h)}
function xClFill(){const c=xClL(($('#f-cl')||{}).value),a=$('#sheet .amt-in');if(!c||!a||XCLFK==='o')return;const p=xClPr(c,XCLFK);if(p&&(!parseNum(a.value)||a.dataset.xcl==='1')){a.value=amtStr(p);a.dataset.xcl='1';a.dispatchEvent(new Event('input',{bubbles:true}))}}
function xClFC(){const v=($('#f-cl')||{}).value,s=$('#f-clk');if(s)s.style.display=v?'':'none';if(v)xClFill()}
function xClFK(k){XCLFK=k;document.querySelectorAll('#f-clk button').forEach(b=>b.classList.toggle('on',b.dataset.k===k));xClFill()}
try{const _tfC=txForm;txForm=function(){XCLE=[...arguments].find(x=>typeof x==='string'&&S.txs.some(t=>t.id===x))||null;const r=_tfC.apply(this,arguments);try{xClInjForm()}catch(e){}return r}}catch(e){}
try{const _stC=saveTx;saveTx=function(){const el=$('#f-cl'),cl=el?el.value:null,k=XCLFK,eid=XCLE,t0=Date.now(),r=_stC.apply(this,arguments);
  const ap=()=>{try{if(cl===null)return;const t=eid?S.txs.find(x=>x.id===eid):S.txs.filter(x=>(x.created||0)>=t0-2000&&x.type==='inc').pop();if(!t)return;if(cl){t.cl=cl;t.clk=k}else{delete t.cl;delete t.clk}save()}catch(e){}};
  if(r&&typeof r.then==='function')r.then(ap);else ap();return r}}catch(e){}
try{const _trC=txRow;txRow=function(t){let h=_trC.apply(this,arguments);try{if(t&&t.cl&&typeof h==='string'){const c=xClL(t.cl);if(c)h=h.replace('</b>',' <span class="xclb">👥 '+esc(c.name)+'</span></b>')}}catch(e){}return h}}catch(e){}
/* تقارير العملاء */
XPD.clsum='m';XPD.clst='y';XPD.cldata='all';
function xPerSel(R){const PO=[['m','الشهر الحالي'],['pm','الشهر اللي فات'],['mon','شهر معيّن'],['y','السنة الحالية'],['yr','سنة معيّنة'],['all','كل الفترات'],['custom','📅 من تاريخ إلى تاريخ']];
  let h=xSel('📆 الفترة','xp',xOptL(PO,R.xp));
  if(R.xp==='mon')h+=`<label>📅 الشهر<input type="month" value="${R.month||NKM}" onchange="xPF('month',this.value)"></label>`;
  if(R.xp==='yr')h+=xSel('📅 السنة','year',xOptL(yearsList().map(y=>[y,String(y)]),R.year));
  if(R.xp==='custom')h+=`<div class="two"><label>📅 من تاريخ<input type="date" value="${R.xf||NKM+'-01'}" onchange="xPF('xf',this.value)"></label><label>📅 إلى تاريخ<input type="date" value="${R.xto||today()}" onchange="xPF('xto',this.value)"></label></div>`;
  return h}
function xClRep(k,id){try{closeSheet()}catch(e){}rtab=k;RF={...RFDEF,xp:XPD[k]||'m',xcl:id||''};RVST=[];XRVBACK=view==='reports'?'':view;openRV()}
function xClPrTbl(c){const P=(c.prices||[]).slice().sort((a,b)=>a.d.localeCompare(b.d)),pv={};if(!P.length)return NONE;
  return rtbl(['من|c','النوع','السعر|n','التغيير|n'],P.map(p=>{const o=pv[p.k];pv[p.k]=p.a;const pc=o?r2((p.a-o)/o*100):null;return `<tr>${cD(p.d)}${cT(XCLK[p.k])}${cN(num(p.a))}${cN(pc==null?'—':(pc>0?'+':'')+pc+'%',pc>0?'inc':pc<0?'exp':'')}</tr>`}))}
function xBClSum(){xLegacy('clsum');const p=xPer('clsum'),L=(XTALL||S.txs).filter(t=>t.cl&&t.type==='inc'&&t.date>=p.f&&t.date<=p.t),by={};
  L.forEach(t=>{const b=by[t.cl]=by[t.cl]||{c:0,p:0};b[t.pend?'p':'c']+=t.amount});
  const R=Object.entries(by).map(([id,v])=>({c:xClL(id),v})).filter(x=>x.c).sort((a,b)=>(+a.c.no||0)-(+b.c.no||0)),tc=r2(R.reduce((s,x)=>s+x.v.c,0)),tp=r2(R.reduce((s,x)=>s+x.v.p,0));
  let h=rkp([['✅ اتحصّل',tc,'inc'],['⏳ لسه',tp,'exp'],['👥 عملاء',String(R.length),'net']]);
  h+=rsec('👥 حسب العميل',String(R.length))+(R.length?rtbl(['العميل','اتحصّل|n','لسه|n','الإجمالي|n'],R.map(({c,v})=>`<tr class="clk" onclick="xClRep('clst','${c.id}')">${cT('#'+esc(String(c.no))+' · '+esc(c.name),esc(c.co||''))}${cN(num(r2(v.c)),'inc')}${cN(num(r2(v.p)),v.p?'exp':'')}${cN(num(r2(v.c+v.p)))}</tr>`),`<tr><td class="t"><b>الإجمالي</b></td><td class="n"><b class="inc">${nm(num(tc))}</b></td><td class="n"><b class="exp">${nm(num(tp))}</b></td><td class="n"><b>${nm(num(r2(tc+tp)))}</b></td></tr>`):NONE);
  return{title:'تقرير العملاء',sub:xRngTxt(p.f,p.t),body:h}}
function xBClSt(){xLegacy('clst');const c=xClL(RF.xcl);if(!c)return{title:'كشف حساب عميل',sub:'',body:NONE};const p=xPer('clst'),L=(XTALL||S.txs).filter(t=>t.cl===c.id&&t.date>=p.f&&t.date<=p.t).sort((a,b)=>a.date.localeCompare(b.date));
  const col=r2(L.filter(t=>!t.pend).reduce((s,t)=>s+t.amount,0)),pen=r2(L.filter(t=>t.pend).reduce((s,t)=>s+t.amount,0)),bk={};
  L.forEach(t=>{const k=t.clk||'o';bk[k]=bk[k]||{c:0,p:0};bk[k][t.pend?'p':'c']+=t.amount});
  let h=rkp([['✅ اتحصّل',col,'inc'],['⏳ لسه',pen,'exp'],['الإجمالي',r2(col+pen),'net']]);
  if(Object.keys(bk).length>1)h+=rsec('🧮 حسب النوع')+rtbl(['النوع','اتحصّل|n','لسه|n'],Object.entries(bk).map(([k,v])=>`<tr>${cT(XCLK[k]||'أخرى')}${cN(num(r2(v.c)),'inc')}${cN(num(r2(v.p)),v.p?'exp':'')}</tr>`));
  h+=rsec('📋 الحركات',String(L.length))+(L.length?rtbl(['التاريخ|c','البيان','المبلغ|n','الحالة'],L.map(t=>`<tr class="clk" onclick="editTx('${t.id}')">${cD(t.date)}${cT(esc(XCLK[t.clk]||C(t.cat)?.name||''),esc(t.note||''))}${cN(num(t.amount),t.pend?'exp':'inc')}${cT(t.pend?'⏳ لسه':'✅')}</tr>`),`<tr><td></td><td class="t"><b>الإجمالي</b></td><td class="n"><b>${nm(num(r2(col+pen)))}</b></td><td></td></tr>`):NONE);
  h+=rsec('💲 تاريخ الأسعار')+xClPrTbl(c);
  return{title:'كشف حساب · '+c.name,sub:'عميل #'+c.no+' · '+xRngTxt(p.f,p.t),body:h}}
function xBClData(){const c=xClL(RF.xcl);if(!c)return{title:'بيانات عميل',sub:'',body:NONE};const kv=(l,v)=>v?`<tr>${cT(l)}${cT(esc(String(v)))}</tr>`:'';
  let h=rsec('👤 البيانات')+rtbl(['البيان','القيمة'],[kv('رقم العميل',c.no),kv('الاسم',c.name),kv('الشركة',c.co),kv('العنوان',c.addr),kv('موبايل 1',c.mob1),kv('موبايل 2',c.mob2),kv('تليفون أرضي',c.tel),kv('الاشتراك الشهري الحالي',xClPr(c,'m')?num(xClPr(c,'m')):''),kv('الاشتراك السنوي الحالي',xClPr(c,'y')?num(xClPr(c,'y')):''),kv('يوم التحصيل الشهري',c.day),kv('ميعاد التجديد',c.renew?dmy(c.renew):''),kv('نسبة الزيادة السنوية',c.pct?c.pct+'%':''),kv('ملاحظات',c.nt)].filter(Boolean));
  if((c.br||[]).length)h+=rsec('🏢 الفروع',String(c.br.length))+rtbl(['الفرع','العنوان','التليفون'],c.br.map(b=>`<tr>${cT(esc(b.n||''))}${cT(esc(b.a||''))}${cT(esc(b.t||''))}</tr>`));
  if((c.ex||[]).length)h+=rsec('🔧 بيانات فنية')+rtbl(['الخانة','القيمة'],c.ex.map(e=>`<tr>${cT(esc(e.k))}${cT(esc(e.v))}</tr>`));
  h+=rsec('💲 تاريخ الأسعار')+xClPrTbl(c);
  return{title:'بيانات عميل · '+c.name,sub:'عميل #'+c.no,body:h}}
if(!REPS.clsum){const tmp={...REPS};Object.keys(REPS).forEach(k=>delete REPS[k]);let done=false;
  const add=()=>{REPS.clsum={ic:'👥',t:'تقرير العملاء',b:xBClSum};REPS.clst={ic:'📄',t:'كشف حساب عميل',b:xBClSt};REPS.cldata={ic:'🧾',t:'بيانات عميل',b:xBClData};done=true};
  Object.entries(tmp).forEach(([k,v])=>{REPS[k]=v;if(k==='acct')add()});if(!done)add()}
try{const _xpfC=xPreFields;xPreFields=function(){if(!/^cl(sum|st|data)$/.test(rtab))return _xpfC.apply(this,arguments);xLegacy(rtab);const R=RF;let h='';
  if(rtab!=='clsum'){if(!R.xcl)R.xcl=(XCL().slice().sort((a,b)=>(+a.no||0)-(+b.no||0))[0]||{}).id||'';h+=xSel('👥 العميل','xcl1',xOptL(XCL().slice().sort((a,b)=>(+a.no||0)-(+b.no||0)).map(c=>[c.id,'#'+c.no+' · '+c.name]),R.xcl))}
  if(rtab!=='cldata')h+=xPerSel(R);return h}}catch(e){}
try{const _pfC=xPF;xPF=function(k,v){if(k==='xcl1'){RF.xcl=v;return xPreDraw(true)}return _pfC.apply(this,arguments)}}catch(e){}
/* كشف حساب حسب البند: تحصيلات العملاء */
try{const _xrrC=xRepRun;xRepRun=function(k){const r=_xrrC.apply(this,arguments);try{
  if((k==='stmt'||k==='ops')&&r&&typeof r.body==='string'&&XCL().length&&!(RF.xms||[]).filter(Boolean).length){const p=xPer(k),L=(XTALL||S.txs).filter(t=>t.cl&&t.type==='inc'&&t.date>=p.f&&t.date<=p.t),by={};
    L.forEach(t=>{const b=by[t.cl]=by[t.cl]||{c:0,p:0};b[t.pend?'p':'c']+=t.amount});const R=Object.entries(by).map(([id,v])=>({c:xClL(id),v})).filter(x=>x.c);
    if(R.length){const tc=r2(R.reduce((s,x)=>s+x.v.c,0)),tp=r2(R.reduce((s,x)=>s+x.v.p,0));
      r.body+=rsec('👥 تحصيلات العملاء',String(R.length))+rtbl(['العميل','اتحصّل|n','لسه|n'],R.map(({c,v})=>`<tr>${cT('#'+esc(String(c.no))+' · '+esc(c.name))}${cN(num(r2(v.c)),'inc')}${cN(num(r2(v.p)),v.p?'exp':'')}</tr>`),`<tr><td class="t"><b>الإجمالي</b></td><td class="n"><b class="inc">${nm(num(tc))}</b></td><td class="n"><b class="exp">${nm(num(tp))}</b></td></tr>`)}}
}catch(e){}return r}}catch(e){}
/* الشاشة + تنبيه التجديد + مدخل في المزيد */
function xClInject(){const el=$('#view');if(!el)return;
  if(view==='home'&&!el.querySelector('.xclal')){const td=today(),T=new Date(td+'T12:00:00');const due=XCL().filter(c=>!c.off&&c.renew&&c.incAck!==c.renew&&c.renew>=td&&(new Date(c.renew+'T12:00:00')-T)/864e5<=(c.remD??30));
    if(due.length){const b=due.map(c=>`<div class="xlnal xclal" onclick="xClOpen('${c.id}')">🔔 تجديد ${esc(c.name)} يوم ${dmy(c.renew)}${c.pct?' · زيادة '+c.pct+'%':''} · دوس عشان تسجّل الزيادة</div>`).join(''),h=el.querySelector('.phead');h?h.insertAdjacentHTML('afterend',b):el.insertAdjacentHTML('afterbegin',b)}}
  if(view==='more'&&!el.querySelector('[onclick*="\'xcl\'"]')){const b=`<button class="btn ghost" onclick="go('xcl')">👥 العملاء${XCL().length?' · '+XCL().length:''}</button>`,x=el.querySelector('[onclick*="xln"]'),h=el.querySelector('.phead');x?x.insertAdjacentHTML('afterend',b):h?h.insertAdjacentHTML('afterend',b):el.insertAdjacentHTML('afterbegin',b)}}
try{const _goC=go;go=function(v){if(v==='xcl'){try{XBSHOW.clear()}catch(e){}view='xcl';render();try{window.scrollTo(0,0)}catch(e){}return}return _goC.apply(this,arguments)}}catch(e){}
try{const _rnC=render;render=function(){try{xLnSync()}catch(e){}try{if(XCL().length&&xClAuto())save()}catch(e){}
  if(view!=='xcl'){const r=_rnC.apply(this,arguments);try{xClInject()}catch(e){}return r}
  view='more';let r;try{r=_rnC.apply(this,arguments)}finally{view='xcl'}const el=$('#view')||document.querySelector('main');if(el)el.innerHTML=xClView();return r}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.49 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xlngr{border:1px dashed #cbd5e1;border-radius:16px;padding:8px 10px;margin:10px 0}
.xlock{background:#f8fafc;color:inherit;border:1px solid #e2e8f0;border-radius:12px;padding:14px;margin:10px 0;text-align:center}
`;document.head.appendChild(s)})();

/* --- كشف الحساب بالبصمة والباسورد --- */
function xBalOkR(){return XBALOK||Date.now()-XBAUTH<300000}
async function xRvUnlock(){if(!await xBalAuth())return;try{refreshRV()}catch(e){try{openRV(true)}catch(x){}}}
try{const _lhK=xLedgerHTML;xLedgerHTML=function(){if(!xBalOkR())return '<div class="xlock">🔐 الأرصدة مقفولة<br><button class="mini pri" style="margin-top:8px" onclick="xRvUnlock()">افتح بالبصمة / الباسورد</button></div>';return _lhK.apply(this,arguments)}}catch(e){}
xAcctRep=async function(id){if(!await xBalAuth())return;rtab='acct';RF={...RFDEF,xp:'m',xms:[id]};RVST=[];XRVBACK=view;openRV()};

/* --- الرجوع: بس للحاجة الجديدة اللي بتتكتب، وخلال دقيقة --- */
var XDR=null,XDRN=null;
function xDrWrap(n,isNew){try{const f=window[n];if(typeof f!=='function')return;
  window[n]=function(){let d=null;try{if(!isNew||isNew.apply(null,arguments)){const a=[...arguments];JSON.stringify(a);d={n,a}}}catch(e){d=null}XDRN=d;try{return f.apply(this,arguments)}finally{XDRN=null}}}catch(e){}}
try{const _shD=sheet;sheet=function(){XDR=XDRN;return _shD.apply(this,arguments)}}catch(e){}
try{const _csD=closeSheet;closeSheet=function(){XDR=null;return _csD.apply(this,arguments)}}catch(e){}
xDrWrap('txForm',function(){return ![...arguments].some(x=>typeof x==='string'&&S.txs.some(t=>t.id===x))});
['xLnNew','xLnPay','xClPay','xClPrice','xReconBase','xCcSheet','xPartial'].forEach(n=>xDrWrap(n));
xDrWrap('xClForm',function(id){return !id});
function xDrFill(vals){const sh=$('#sheet');if(!sh||!vals)return;const els=[...sh.querySelectorAll('input,select,textarea')];
  els.forEach((e,i)=>{if(i>=vals.length||e.type==='file')return;const v=vals[i];
    if(e.type==='checkbox'||e.type==='radio'){if(e.checked!==!!v){e.checked=!!v;try{e.dispatchEvent(new Event('change',{bubbles:true}))}catch(x){}}}
    else if(v!=null&&e.value!==v){e.value=v;try{e.dispatchEvent(new Event('input',{bubbles:true}))}catch(x){}}})}
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='hidden'){try{const sh=$('#sheet'),open=sh&&sh.classList.contains('open'),d={t:Date.now()};
      if(open&&XDR){d.dr=XDR;d.vals=[...sh.querySelectorAll('input,select,textarea')].map(e=>e.type==='checkbox'||e.type==='radio'?e.checked:e.type==='file'?null:e.value)}
      localStorage.setItem('centric-xdr',JSON.stringify(d));localStorage.setItem('centric-hid','0')}catch(e){}return}
  let d=null;try{d=JSON.parse(localStorage.getItem('centric-xdr')||'null')}catch(e){}if(!d)return;localStorage.removeItem('centric-xdr');
  if(Date.now()-d.t<60000)return;
  try{XRVBACK='';closeRV()}catch(e){}try{closeSheet()}catch(e){}try{go('home')}catch(e){}
});
(function(){try{if(/share=1/.test(location.search))return;let d=null;try{d=JSON.parse(localStorage.getItem('centric-xdr')||'null')}catch(e){}localStorage.removeItem('centric-xdr');
  const fresh=d&&d.dr&&Date.now()-d.t<60000;
  setTimeout(()=>{try{if(view!=='home')go('home');
    if(fresh){const f=window[d.dr.n];if(typeof f==='function'){f.apply(null,d.dr.a);setTimeout(()=>{xDrFill(d.vals);toast('↩️ رجعتلك اللي كنت بتكتبه')},80)}}}catch(e){}},450)}catch(e){}})();

/* --- السلف: سجل كامل --- */
function xLnLog(l,e,t){l.log=l.log||[];l.log.push({t:t||Date.now(),e})}
function xLnAcc(id){return M(id)?.name||'—'}
function xLnSchTxt(l){const s=(l.sch||[]).slice().sort((a,b)=>a.d.localeCompare(b.d));return s.length>1?'على '+s.length+' أقساط من '+dmy(s[0].d):s.length?'ترجع يوم '+dmy(s[0].d):''}
function xLnLogInit(l){if(l.log)return;l.log=[];xLnLog(l,'🤝 اتصرفت سلفة '+num(l.amt)+' من '+xLnAcc(l.m)+' يوم '+dmy(l.d),l.c||Date.now());
  (l.pays||[]).forEach(p=>xLnLog(l,p.wo?'🧾 اتشطب الباقي '+num(p.a):'💵 دفعة '+num(p.a)+' في '+xLnAcc(p.m)+' يوم '+dmy(p.d),p.c||l.c||Date.now()))}
function xLnTs(t){const d=new Date(t);if(isNaN(d))return '';const p=n=>String(n).padStart(2,'0');let h=d.getHours();const ap=h<12?'ص':'م';h=h%12||12;return p(d.getDate())+'/'+p(d.getMonth()+1)+'/'+d.getFullYear()+' · '+h+':'+p(d.getMinutes())+' '+ap}
xLnSync=function(){let ch=0;
  XLN().forEach(l=>{if(!l.log){xLnLogInit(l);ch=1}
    (l.pays||[]).forEach(p=>{if(p.wo)return;if(!p.tx){xLnTx(l,p);ch=1;return}const t=S.txs.find(x=>x.id===p.tx);
      if(!t){p.del=1;xLnLog(l,'🗑 تحصيل دفعة '+num(p.a)+' ('+dmy(p.d)+') اتمسح من التحصيلات');ch=1;return}const off=!!t.pend;
      if(!!p.off!==off)xLnLog(l,off?'⏳ دفعة '+num(t.amount)+' اتعلّم عليها غير محصّلة':'✅ دفعة '+num(t.amount)+' اتعلّم عليها محصّلة');
      else if(p.a!==t.amount)xLnLog(l,'✏️ مبلغ دفعة اتغير من '+num(p.a)+' لـ '+num(t.amount));
      if(p.a!==t.amount||p.d!==t.date||p.m!==t.method||!!p.off!==off){p.a=t.amount;p.d=t.date;p.m=t.method;p.off=off;ch=1}});
    const n=(l.pays||[]).length;l.pays=(l.pays||[]).filter(p=>!p.del);if(l.pays.length!==n)ch=1});
  (S.cats||[]).forEach(c=>{if(c.name==='سلف معدومة'){c.name='سلف مشطوبة';ch=1}});
  if(ch)save()};
try{const _w=xLnSave;xLnSave=function(){const n0=XLN().length,r=_w.apply(this,arguments);try{if(XLN().length>n0){const l=XLN()[XLN().length-1];l.log=[];xLnLog(l,'🤝 اتصرفت سلفة '+num(l.amt)+' من '+xLnAcc(l.m)+' · '+xLnSchTxt(l));save()}}catch(e){}return r}}catch(e){}
try{const _w=xLnPaySv;xLnPaySv=function(id){const l=xLnL(id),n0=l?(l.pays||[]).length:0,s0=l?(l.sch||[]).length:0,r=_w.apply(this,arguments);
  try{if(l&&(l.pays||[]).length>n0){const p=l.pays[l.pays.length-1];let e='💵 دفعة '+num(p.a)+' في '+xLnAcc(p.m)+' يوم '+dmy(p.d);if(l.sch.length>s0){const s=l.sch[l.sch.length-1];e+=' · باقي القسط '+num(s.a)+' اتأجل لـ '+dmy(s.d)}const rm=xLnRem(l);e+=rm>0.009?' · فاضل '+num(rm):' · ✅ اتقفلت';xLnLog(l,e);save();xLnOpen(id)}}catch(e){}return r}}catch(e){}
try{const _w=xLnPayDel;xLnPayDel=async function(id,pid){const l=xLnL(id),p=l&&(l.pays||[]).find(x=>x.id===pid),r=await _w.apply(this,arguments);
  try{if(l&&p&&!l.pays.some(x=>x.id===pid)){xLnLog(l,'🗑 اتمسحت دفعة '+num(p.a)+' ('+dmy(p.d)+')');save();const nx=xLnNext(l);
    if(xLnRem(l)>0.009&&nx&&nx.d<=l.d){xLnResch(id);toast('حدد هيرجع الباقي إمتى')}else xLnOpen(id)}}catch(e){}return r}}catch(e){}
try{const _w=xLnDefSv;xLnDefSv=function(id,sid){const l=xLnL(id),s=l&&xLnAlloc(l).find(x=>x.id===sid),nd=($('#lf-d')||{}).value,r=_w.apply(this,arguments);
  try{if(l&&s&&nd){xLnLog(l,'⏭ قسط '+num(s.rem)+' اتأجل من '+dmy(s.d)+' لـ '+dmy(nd));save();xLnOpen(id)}}catch(e){}return r}}catch(e){}
try{const _w=xLnRSv;xLnRSv=function(id){const l=xLnL(id),s0=l?JSON.stringify(l.sch):'',r=_w.apply(this,arguments);
  try{if(l&&JSON.stringify(l.sch)!==s0){const u=xLnAlloc(l).filter(s=>s.rem>0.009);xLnLog(l,'🗓 جدول جديد: '+num(xLnRem(l))+(u.length>1?' على '+u.length+' أقساط من ':' ترجع يوم ')+dmy(u[0]?u[0].d:today()));save();xLnOpen(id)}}catch(e){}return r}}catch(e){}
try{const _w=xLnEdSv;xLnEdSv=function(id){const l=xLnL(id),o=l?{w:l.who,a:l.amt,m:l.m,d:l.d}:null,r=_w.apply(this,arguments);
  try{if(l&&o){const c=[];if(o.w!==l.who)c.push('الاسم من '+o.w+' لـ '+l.who);if(o.a!==l.amt)c.push('المبلغ من '+num(o.a)+' لـ '+num(l.amt));if(o.m!==l.m)c.push('الحساب من '+xLnAcc(o.m)+' لـ '+xLnAcc(l.m));if(o.d!==l.d)c.push('التاريخ من '+dmy(o.d)+' لـ '+dmy(l.d));
    if(c.length){xLnLog(l,'✏️ تعديل: '+c.join(' · '));save();xLnOpen(id)}}}catch(e){}return r}}catch(e){}
try{const _w=xLnWo;xLnWo=async function(id){const l=xLnL(id),rm=l?xLnRem(l):0,was=l&&l.st,r=await _w.apply(this,arguments);try{if(l&&l.st==='wo'&&was!=='wo'){xLnLog(l,'🧾 اتشطب الباقي '+num(rm)+' واتسجل مصروف');save();xLnOpen(id)}}catch(e){}return r}}catch(e){}
try{const _w=xLnUnWo;xLnUnWo=function(id){const l=xLnL(id),was=l&&l.st,r=_w.apply(this,arguments);try{if(l&&was==='wo'&&l.st!=='wo'){xLnLog(l,'↩️ اتلغى الشطب');save();xLnOpen(id)}}catch(e){}return r}}catch(e){}
try{const _w=xLnOpen;xLnOpen=function(id){const r=_w.apply(this,arguments);try{const l=xLnL(id),sh=$('#sheet');if(!l||!sh)return r;xLnLogInit(l);
  const rem=xLnRem(l),real=(l.pays||[]).filter(p=>!p.wo&&!p.off);let note='';
  if(rem<=0.009&&l.st!=='wo'&&real.length)note=`<div class="xwarn" style="background:#ecfdf5;color:#065f46;border-color:#a7f3d0">✅ السلفة دي مقفولة لأن اتسجل لها دفعات بـ ${num(xLnPaid(l,1))}.<br>لو فيه دفعة اتسجلت غلط، دوس 🗑 جنبها وهترجع مفتوحة وتحدد هيرجعها إمتى.</div>`;
  const lg=`<details class="gen" open><summary>📜 سجل السلفة (${l.log.length})</summary><div class="list">${l.log.slice().reverse().map(x=>`<div class="row"><div class="grow"><b style="font-weight:600">${esc(x.e)}</b><small>${xLnTs(x.t)}</small></div></div>`).join('')}</div></details>`;
  const b=sh.querySelector('button.btn[onclick*="xLn"]');if(b)b.insertAdjacentHTML('beforebegin',note+lg);else sh.insertAdjacentHTML('beforeend',note+lg)}catch(e){}return r}}catch(e){}
/* شاشة السلف: متجمعة حسب الشخص */
xLnView=function(){
  const ls=XLN(),td=today(),mk=td.slice(0,7),op=ls.filter(l=>l.st!=='wo'&&xLnRem(l)>0.009),cl=ls.filter(l=>!op.includes(l));let out=0,late=0,mo=0;
  op.forEach(l=>{out+=xLnRem(l);xLnAlloc(l).forEach(s=>{if(s.rem>0){if(s.d<td)late+=s.rem;if(s.d.startsWith(mk))mo+=s.rem}})});
  const card=l=>{const wo=l.st==='wo',rem=xLnRem(l),pd=xLnPaid(l,1),nx=xLnNext(l),pc=Math.min(100,Math.round(pd/l.amt*100)),lt=nx&&nx.d<td&&!wo;
    return `<div class="xln ${lt?'late':''}" onclick="xLnOpen('${l.id}')"><div class="xlnh"><b>👤 ${esc(l.who)}</b><b dir="ltr">${num(wo?0:rem)}</b></div><small>${wo?'🧾 اتشطبت':rem<=0.009?'✅ اتسددت':nx?(lt?'⚠️ متأخر · ':'📅 ')+'القسط الجاي '+num(nx.rem)+' يوم '+dmy(nx.d):''} · من ${num(l.amt)} · اتصرفت ${dmy(l.d)}</small><div class="xbar"><i style="width:${pc}%"></i></div></div>`};
  const by={};op.forEach(l=>{(by[l.who]=by[l.who]||[]).push(l)});
  const body=Object.keys(by).sort((a,b)=>a.localeCompare(b,'ar')).map(w=>{const g=by[w];if(g.length===1)return card(g[0]);const t=r2(g.reduce((s,l)=>s+xLnRem(l),0));
    return `<div class="xlngr"><div class="xlnh"><b>👤 ${esc(w)} · ${g.length} سلف</b><b dir="ltr">${num(t)}</b></div>${g.map(card).join('')}</div>`}).join('');
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🤝 السلف</h3><button class="mini pri" onclick="xLnNew()">+ سلفة</button></div>`
   +kpis([['💼 فلوسك عند الناس',fmt(r2(out)),'net'],['⚠️ متأخر',fmt(r2(late)),'exp'],['📅 مستحق الشهر ده',fmt(r2(mo)),'inc']])
   +(op.length?body:'<p class="muted" style="text-align:center">مفيش سلف مفتوحة</p>')
   +(cl.length?`<details class="gen"><summary>📁 السلف المقفولة (${cl.length})</summary>${cl.map(card).join('')}</details>`:'')
   +'<p class="xnote">السلفة نفسها مش بتتحسب مصروف. السداد بيتسجل تحصيل في بند "سداد سلف". ولو حد مش هيرجعها، دوس 🧾 شطب فالباقي يتسجل مصروف.</p>';
};
try{render()}catch(e){}
/* ========== 2.21.50 ========== */

/* ================= السلفة: مصروف لما تطلع · تحصيل لما ترجع ================= */
var XLNED=null;
function xLnECat(){const c=ensureCat('سلف','exp');c.active=true;return c}
function xLnOutTx(l){const t={id:uid(),type:'exp',amount:l.amt,cat:xLnECat().id,method:l.m,via:'',date:l.d,note:'🤝 سلفة لـ '+l.who,files:[],created:Date.now(),xlno:l.id};S.txs.push(t);l.tx=t.id;return t}
xLnDelta=function(id,before){let s=0;XLN().forEach(l=>{if(!l.tx&&l.m===id&&l.d<before)s-=l.amt;(l.pays||[]).forEach(p=>{if(!p.tx&&!p.off&&!p.wo&&p.m===id&&p.d<before)s+=p.a})});return r2(s)};
xLnMoves=function(id,f,t){const ev=[];XLN().forEach(l=>{if(!l.tx&&l.m===id&&l.d>=f&&l.d<=t)ev.push({d:l.d,c:l.c||0,k:'lno',a:-l.amt,l:'🤝 سلفة لـ '+l.who,s:l.note||'',ln:l.id})});return ev};
try{const _sy=xLnSync;xLnSync=function(){let ch=0;try{XLN().forEach(l=>{
  if(l.wo&&l.wo.tx){const i=S.txs.findIndex(t=>t.id===l.wo.tx);if(i>=0)S.txs.splice(i,1);delete l.wo.tx;ch=1}
  if(!l.tx){xLnOutTx(l);xLnLog(l,'💸 السلفة اتسجلت مصروف في بند "سلف"');ch=1;return}
  const t=S.txs.find(x=>x.id===l.tx);
  if(!t){xLnOutTx(l);xLnLog(l,'💸 مصروف السلفة اتمسح فاتسجل تاني. عشان تمسح السلفة امسحها من 🤝 السلف');ch=1;return}
  if(XLNED===l.id){t.date=l.d;t.method=l.m;t.amount=l.amt;t.note='🤝 سلفة لـ '+l.who;ch=1;return}
  if(t.date!==l.d||t.method!==l.m){if(t.date!==l.d)xLnLog(l,'✏️ التاريخ اتغير من المصروفات لـ '+dmy(t.date));if(t.method!==l.m)xLnLog(l,'✏️ الحساب اتغير من المصروفات لـ '+xLnAcc(t.method));l.d=t.date;l.m=t.method;ch=1}
  if(t.amount!==l.amt){const df=r2(t.amount-l.amt),last=xLnAlloc(l).filter(s=>s.rem>0.009).pop();
    if(t.amount>=xLnPaid(l)-0.009&&(df>0||(last&&last.rem>=-df-0.009))){if(last)l.sch.find(x=>x.id===last.id).a=r2(last.a+df);else l.sch.push({id:uid(),d:addMonths(today(),1),a:df});xLnLog(l,'✏️ المبلغ اتغير من المصروفات من '+num(l.amt)+' لـ '+num(t.amount));l.amt=t.amount}
    else{t.amount=l.amt;toast('مبلغ السلفة مايتغيرش كده، غيّره من 🤝 السلف')}ch=1}
  if(t.pend){t.pend=false;ch=1}
  if(t.note!=='🤝 سلفة لـ '+l.who){t.note='🤝 سلفة لـ '+l.who;ch=1}
})}catch(e){}if(ch)save();return _sy.apply(this,arguments)}}catch(e){}
try{const _w=xLnEdSv;xLnEdSv=function(id){XLNED=id;try{return _w.apply(this,arguments)}finally{XLNED=null}}}catch(e){}
try{const _w=xLnDel;xLnDel=async function(id){const l=xLnL(id),tx=l&&l.tx,r=await _w.apply(this,arguments);try{if(tx&&!xLnL(id)){const i=S.txs.findIndex(t=>t.id===tx);if(i>=0){S.txs.splice(i,1);save();render()}}}catch(e){}return r}}catch(e){}
xLnWo=async function(id){const l=xLnL(id);if(!l)return;const rem=xLnRem(l);if(!(rem>0))return;
  if(!await dlg({title:'شطب السلفة',msg:`الباقي ${fmt(rem)} مش هيترد والسلفة هتتقفل. السلفة متسجلة مصروف من الأول، فمش هيتسجل حاجة تانية.`,icon:'🧾',ok:'أيوه، اشطبها',cancel:'لا'}))return;
  const pid=uid();l.pays.push({id:pid,d:today(),a:rem,m:l.m,wo:1,note:'',c:Date.now()});l.st='wo';l.wo={pay:pid};xLnLog(l,'🧾 اتشطب الباقي '+num(rem)+' · مش هيترد');save();render();xLnOpen(id);toast('🧾 اتشطبت')};
try{const _w=xLnOpen;xLnOpen=function(){const r=_w.apply(this,arguments);try{($('#sheet')||document).querySelectorAll('small').forEach(s=>{if(s.textContent.indexOf('شطب · اتسجل مصروف')>=0)s.textContent=s.textContent.replace('شطب · اتسجل مصروف','شطب · مش هيترد')})}catch(e){}return r}}catch(e){}
try{const _w=xLnView;xLnView=function(){const h=_w.apply(this,arguments);return typeof h==='string'?h.replace(/<p class="xnote">السلفة نفسها[\s\S]*?<\/p>/,'<p class="xnote">السلفة بتتسجل مصروف في بند "سلف"، والسداد بيتسجل تحصيل في بند "سداد سلف". ولو حد مش هيرجعها، دوس 🧾 شطب والسلفة تتقفل.</p>'):h}}catch(e){}

/* ================= تحصيل عادي / تحصيل عميل: اختيار ================= */
xClInjForm=function(){if($('#f-cl'))return;const sh=$('#sheet');if(!sh)return;const e=XCLE?S.txs.find(t=>t.id===XCLE):null,h2=(sh.querySelector('h2')||{}).textContent||'';
  const inc=e?(e.type==='inc'&&!e.xlnp):(/لسداد الكريديت/.test(sh.textContent)||/تحصيل|دخل/.test(h2));if(!inc)return;
  const cl=e&&e.cl||'',k=e&&e.clk||'m',L=XCL().filter(c=>!c.off||c.id===cl).sort((a,b)=>(+a.no||0)-(+b.no||0));XCLFK=k;
  const h=`<div class="xclf"><div class="seg" id="f-clm"><button type="button" data-m="0" class="${cl?'':'on'}" onclick="xClFM(0)">💵 تحصيل عادي</button><button type="button" data-m="1" class="${cl?'on':''}" onclick="xClFM(1)">👥 تحصيل عميل</button></div>
  <div id="f-clw" style="${cl?'':'display:none'}">${L.length?`<label>👥 العميل<select id="f-cl" onchange="xClFC()"><option value="">— اختار العميل —</option>${L.map(c=>`<option value="${c.id}" ${c.id===cl?'selected':''}>#${esc(String(c.no))} · ${esc(c.name)}</option>`).join('')}</select></label><div class="seg" id="f-clk" style="${cl?'':'display:none'}">${['m','y','o'].map(x=>`<button type="button" data-k="${x}" class="${x===k?'on':''}" onclick="xClFK('${x}')">${XCLK[x]}</button>`).join('')}</div>`:`<input type="hidden" id="f-cl" value=""><p class="xnote">مفيش عملاء لسه. ضيفهم من المزيد ← 👥 العملاء</p>`}</div></div>`;
  const a=sh.querySelector('.amt-in'),lb=a&&a.closest('label'),hh=sh.querySelector('h2');if(lb)lb.insertAdjacentHTML('afterend',h);else if(hh)hh.insertAdjacentHTML('afterend',h)};
function xClFM(m){document.querySelectorAll('#f-clm button').forEach(b=>b.classList.toggle('on',+b.dataset.m===m));const w=$('#f-clw'),s=$('#f-cl');if(w)w.style.display=m?'':'none';
  if(!m&&s){s.value='';const k=$('#f-clk');if(k)k.style.display='none'}}

/* ================= 🏧 سحب وإيداع كاش ================= */
var XCWT='m';
function xTrNew(f,to,a,d,note){return{id:uid(),type:'tr',amount:a,method:f,to,cat:'',via:'',date:d,note,files:[],created:Date.now()}}
function xCwOpts(sel,fl){return opt(S.methods.filter(m=>m.active&&!xIsCr(m.id)&&(!fl||fl(m))),sel)}
function xCwNames(){const s=new Set();S.txs.forEach(t=>{if(t.xwho)s.add(t.xwho)});XLN().forEach(l=>s.add(l.who));return[...s].map(n=>`<option value="${esc(n)}">`).join('')}
function xCashSheet(t){const keep=($('#xcw-a')||{}).value||'';XCWT=t||XCWT||'m';const ca=xCashAcct(),nonCa=m=>m.id!==ca,ok=id=>id&&M(id)&&id!==ca;
  const firstB=(S.methods.find(m=>m.active&&!xIsCr(m.id)&&m.id!==ca)||{}).id,src=ok(S.settings.xcwSrc)?S.settings.xcwSrc:firstB,bank=ok(S.settings.xcwBank)?S.settings.xcwBank:src,dep=ok(S.settings.xcwDep)?S.settings.xcwDep:src;
  const tabs=`<div class="seg" id="xcw-t">${[['m','🏧 من الماكينة'],['p','🙋 من شخص'],['d','🏦 إيداع']].map(([k,l])=>`<button type="button" class="${k===XCWT?'on':''}" onclick="xCashSheet('${k}')">${l}</button>`).join('')}</div>`;
  const amt=l=>`<label>${l}<input id="xcw-a" class="amt-in" inputmode="decimal" dir="ltr" placeholder="0" value="${esc(keep)}"></label>`,dt=`<label>التاريخ<input id="xcw-d" type="date" value="${today()}"></label>`;
  let b='';
  if(XCWT==='m')b=`<p class="xnote">سحبت من الماكينة والفلوس بقت معاك كاش</p>
    <div class="two"><label>سحبت من حساب<select id="xcw-s">${xCwOpts(src,nonCa)}</select></label><label>الفلوس راحت لـ<select id="xcw-to">${xCwOpts(ca)}</select></label></div>
    ${amt('المبلغ')}<div class="two"><label>رسوم السحب (لو فيه)<input id="xcw-f" inputmode="decimal" dir="ltr" placeholder="0"></label>${dt}</div>`;
  if(XCWT==='p')b=`<p class="xnote">أخدت كاش من حد وحوّلتله من البنك. مش بيتحسب تحصيل ولا مصروف، ومصاريف التحويل بس هي اللي بتتسجل مصروف</p>
    <label>👤 أخدت من مين<input id="xcw-w" placeholder="الاسم" list="xcw-wl"><datalist id="xcw-wl">${xCwNames()}</datalist></label>
    ${amt('المبلغ اللي أخدته كاش')}
    <div class="two"><label>حوّلتله من حساب<select id="xcw-s">${xCwOpts(bank,nonCa)}</select></label><label>الكاش راح لـ<select id="xcw-to">${xCwOpts(ca)}</select></label></div>
    <div class="two"><label>مصاريف التحويل<input id="xcw-f" inputmode="decimal" dir="ltr" placeholder="0"></label>${dt}</div>`;
  if(XCWT==='d'){const cut=new Date(Date.now()-120*864e5).toISOString().slice(0,10),dep0={};S.txs.forEach(x=>{if(x.xref)dep0[x.xref]=r2((dep0[x.xref]||0)+x.amount)});
    const refs=S.txs.filter(x=>x.type==='inc'&&!x.pend&&x.method===ca&&x.date>=cut).sort((a,b)=>b.date.localeCompare(a.date));
    b=`<p class="xnote">صاحبك أخد منك كاش وحوّلك على البنك. مش بيتحسب تحصيل، بيتسجل نقل فلوس من الكاش للبنك</p>
    <div class="two"><label>من<select id="xcw-s">${xCwOpts(ca)}</select></label><label>وصلت على حساب<select id="xcw-to">${xCwOpts(dep,nonCa)}</select></label></div>
    ${amt('المبلغ')}
    <label>👤 مين حوّل<input id="xcw-w" placeholder="الاسم (اختياري)" list="xcw-wl"><datalist id="xcw-wl">${xCwNames()}</datalist></label>
    <label>🔗 الفلوس دي من تحصيل (للعلم بس)<select id="xcw-r"><option value="">— مش مربوطة —</option>${refs.map(x=>{const c=x.cl&&xClL(x.cl);return `<option value="${x.id}">${dmy(x.date)} · ${esc(C(x.cat)?.name||'')}${c?' · '+esc(c.name):''} · ${num(x.amount)}${dep0[x.id]?' · اتودع منه '+num(dep0[x.id]):''}</option>`}).join('')}</select></label>${dt}`}
  sheet(`<h2>🏧 سحب وإيداع كاش</h2>${tabs}${b}<label>ملاحظة<input id="xcw-n" placeholder="اختياري"></label><button class="btn" onclick="xCashSave()">✅ سجّل</button>`)}
function xCashSave(){const g=k=>(($('#xcw-'+k)||{}).value||'').trim(),a=parseNum(g('a')),d=g('d'),s=g('s'),to=g('to'),f=parseNum(g('f'))||0,w=g('w'),n=g('n'),ca=xCashAcct(),now=Date.now();
  if(!(a>0))return toast('اكتب المبلغ');if(!d)return toast('اختار التاريخ');if(isClosed(d))return toast(`شهر ${mName(d.slice(0,7))} مقفول`);
  if(!s||!to)return toast('اختار الحسابات');if(s===to)return toast('الحسابين واحد');if(XCWT==='p'&&!w)return toast('اكتب أخدت من مين');
  let msg='';
  if(XCWT==='m'){if(to===ca)S.cash.push({id:uid(),date:d,method:s,amount:a,note:n,created:now});else S.txs.push(xTrNew(s,to,a,d,'🏧 سحب من الماكينة'+(n?' · '+n:'')));
    if(f>0){const c=ensureCat('رسوم سحب كاش','exp');c.active=true;S.txs.push({id:uid(),type:'exp',amount:f,cat:c.id,method:s,via:'',date:d,note:'🏧 رسوم سحب '+num(a),files:[],created:now})}
    S.settings.xcwSrc=s;msg='🏧 اتسحب '+fmt(a)+' من '+M(s).name+' لـ '+M(to).name}
  if(XCWT==='p'){const t=xTrNew(s,to,a,d,'🙋 كاش من '+w+' واتحوّلّه'+(n?' · '+n:''));t.xwho=w;S.txs.push(t);
    if(f>0){const c=ensureCat('مصاريف إنستاباي','exp');c.active=true;S.txs.push({id:uid(),type:'exp',amount:f,cat:c.id,method:s,via:'',date:d,note:'🙋 تحويل لـ '+w,files:[],created:now,feeOf:t.id})}
    S.settings.xcwBank=s;msg='🙋 '+fmt(a)+' كاش من '+w+' · اتخصم من '+M(s).name}
  if(XCWT==='d'){const r=g('r'),t=xTrNew(s,to,a,d,'🏦 إيداع'+(w?' من '+w:'')+(n?' · '+n:''));if(w)t.xwho=w;if(r)t.xref=r;t.xdep=1;S.txs.push(t);S.settings.xcwDep=to;msg='🏦 اتودع '+fmt(a)+' في '+M(to).name}
  save();closeSheet();render();toast(msg)}
xDrWrap('xCashSheet');
/* سحب كاش القديم يفتح الجديد (التعديل يفضل زي ما هو) */
try{const _shH=sheet;sheet=function(h){try{if(typeof h==='string'&&h.indexOf('xcw-')<0){const m=h.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  if(m&&/سحب/.test(m[1])&&/كاش|ATM|🏧/.test(m[1])&&!/تعديل/.test(m[1])&&!/حذف|🗑/.test(h)&&/<input/.test(h))return xCashSheet('m')}}catch(e){}return _shH.apply(this,arguments)}}catch(e){}
/* الإيداع المربوط بتحصيل يبان في كشف الحساب */
try{const _lgX=xLedger;xLedger=function(){const g=_lgX.apply(this,arguments);try{const T=XTALL||S.txs;g.ev.forEach(e=>{if(!e.id)return;const t=T.find(x=>x.id===e.id);
  if(t&&t.xref){const r=T.find(x=>x.id===t.xref);if(r){const c=r.cl&&xClL(r.cl);e.s=(e.s?e.s+' · ':'')+'🔗 من تحصيل '+(C(r.cat)?.name||'')+(c?' · '+c.name:'')+' '+num(r.amount)+' ('+dmy(r.date)+')'}}})}catch(e){}return g}}catch(e){}
/* زرار في الحسابات والمزيد */
try{const _rnW=render;render=function(){const r=_rnW.apply(this,arguments);try{const el=$('#view');if(el&&(view==='pmv'||view==='more')&&!el.querySelector('[onclick*="xCashSheet"]')){const b=`<button class="btn ghost" onclick="xCashSheet('m')">🏧 سحب وإيداع كاش</button>`,h=el.querySelector('.phead');h?h.insertAdjacentHTML('afterend',b):el.insertAdjacentHTML('afterbegin',b)}}catch(e){}return r}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.51 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xlnc{background:var(--card,#fff);border:1px solid rgba(127,127,127,.25);border-radius:16px;padding:12px 14px;margin:10px 0;cursor:pointer}
.xlnr{display:flex;justify-content:space-between;align-items:center;gap:8px}
.xlnbig{font-size:22px;font-weight:800}
.xsm{font-size:12px;opacity:.7;margin-top:2px}
.xlnn{margin-top:8px;font-size:13px;line-height:1.9}
.xchip{display:inline-block;padding:2px 9px;border-radius:999px;font-size:12px;font-weight:700;margin-inline-end:4px}
.xchip.late{background:#fee2e2;color:#991b1b}.xchip.tdy{background:#fef3c7;color:#92400e}.xchip.part{background:#fef9c3;color:#854d0e}.xchip.up{background:#e0f2fe;color:#075985}.xchip.ok{background:#dcfce7;color:#166534}
.xlna{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:10px 0}.xlna .btn{margin:0!important;padding:11px 6px;font-size:14px}
.xlns{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:10px 0}.xlns>div{background:rgba(127,127,127,.1);border-radius:12px;padding:8px 4px;text-align:center}.xlns small{display:block;opacity:.7;font-size:12px}.xlns b{font-size:17px}
`;document.head.appendChild(s)})();

/* الشطب اتلغى: أي سلفة اتشطبت ترجع مفتوحة */
try{let ch=0;XLN().forEach(l=>{if(l.st==='wo'){l.pays=(l.pays||[]).filter(p=>!p.wo);delete l.st;delete l.wo;xLnLog(l,'↩️ الشطب اتلغى ورجعت مفتوحة');ch=1}});if(ch)save()}catch(e){}

var XLNF='open';
function xLnChip(s){const m={late:['late','⚠️ متأخر'],today:['tdy','🔔 النهارده'],part:['part','🟡 اتدفع جزء'],up:['up','⏳ الجاي'],ok:['ok','✅ اتسدد']}[s.st]||['up','⏳'];return `<span class="xchip ${m[0]}">${m[1]}</span>`}

/* شاشة السلف */
xLnView=function(){
  const ls=XLN(),td=today(),mk=td.slice(0,7),op=ls.filter(l=>xLnRem(l)>0.009),dn=ls.filter(l=>xLnRem(l)<=0.009),lt=op.filter(l=>{const n=xLnNext(l);return n&&n.d<td});
  let out=0,late=0,mo=0;op.forEach(l=>{out+=xLnRem(l);xLnAlloc(l).forEach(s=>{if(s.rem>0){if(s.d<td)late+=s.rem;if(s.d.startsWith(mk))mo+=s.rem}})});
  const L=(XLNF==='late'?lt:XLNF==='done'?dn:op).slice().sort((a,b)=>{const x=xLnNext(a),y=xLnNext(b);return(x?x.d:'9')<(y?y.d:'9')?-1:1});
  const card=l=>{const rem=xLnRem(l),pd=xLnPaid(l,1),nx=xLnNext(l),pc=Math.min(100,Math.round(pd/l.amt*100)),done=rem<=0.009;
    return `<div class="xlnc" onclick="xLnOpen('${l.id}')"><div class="xlnr"><b>👤 ${esc(l.who)}</b><span class="xlnbig" dir="ltr">${num(done?l.amt:rem)}</span></div>
    <div class="xlnr xsm"><span>${done?'اتسددت بالكامل':'الباقي من '+num(l.amt)}</span><span>اتصرفت ${dmy(l.d)}</span></div>
    <div class="xbar"><i style="width:${pc}%"></i></div>
    <div class="xlnn">${done?'<span class="xchip ok">✅ اتسددت</span>':nx?xLnChip(nx)+` القسط الجاي <b>${num(nx.rem)}</b> يوم <b>${dmy(nx.d)}</b>`:''}</div>
    ${done?'':`<div class="xlna"><button class="btn" onclick="event.stopPropagation();xLnPay('${l.id}')">💵 استلمت دفعة</button><button class="btn ghost" onclick="event.stopPropagation();xLnOpen('${l.id}')">📄 التفاصيل</button></div>`}</div>`};
  const tb=(k,l,n)=>`<button type="button" class="${XLNF===k?'on':''}" onclick="XLNF='${k}';render()">${l} (${n})</button>`;
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🤝 السلف</h3></div>
  <button class="btn" onclick="xLnNew()">➕ سلفة جديدة</button>
  ${kpis([['💼 فلوسك عند الناس',fmt(r2(out)),'net'],['⚠️ متأخر',fmt(r2(late)),'exp'],['📅 مستحق الشهر ده',fmt(r2(mo)),'inc']])}
  <div class="seg">${tb('open','مفتوحة',op.length)}${tb('late','متأخرة',lt.length)}${tb('done','اتسددت',dn.length)}</div>
  ${L.length?L.map(card).join(''):`<p class="muted" style="text-align:center;margin:20px 0">${XLNF==='late'?'مفيش سلف متأخرة 👍':XLNF==='done'?'مفيش سلف اتسددت لسه':'مفيش سلف مفتوحة'}</p>`}
  <p class="xnote">السلفة بتتسجل مصروف في بند "سلف"، والسداد بيتسجل تحصيل في بند "سداد سلف".</p>`;
};

/* صفحة السلفة */
xLnOpen=function(id){const l=xLnL(id);if(!l)return;xLnLogInit(l);
  const al=xLnAlloc(l),rem=xLnRem(l),pd=xLnPaid(l,1),nx=xLnNext(l),done=rem<=0.009,pc=Math.min(100,Math.round(pd/l.amt*100)),P=(l.pays||[]).filter(p=>!p.wo);
  sheet(`<h2>🤝 سلفة ${esc(l.who)}</h2>
  <p class="muted">اتصرفت ${dmy(l.d)} من ${esc(xLnAcc(l.m))} · متسجلة مصروف في بند "سلف"${l.note?' · '+esc(l.note):''}</p>
  <div class="xlns"><div><small>المبلغ</small><b>${num(l.amt)}</b></div><div><small>اتسدد</small><b class="pos">${num(pd)}</b></div><div><small>الباقي</small><b class="neg">${num(rem)}</b></div></div>
  <div class="xbar"><i style="width:${pc}%"></i></div>
  ${nx?`<div class="xlnn">${xLnChip(nx)} القسط الجاي <b>${num(nx.rem)}</b> يوم <b>${dmy(nx.d)}</b></div>`:''}
  ${done&&P.length?`<div class="xwarn" style="background:#ecfdf5;color:#065f46;border-color:#a7f3d0">✅ السلفة اتسددت بالكامل.<br>لو فيه دفعة اتسجلت غلط، دوس 🗑 جنبها تحت، وهترجع مفتوحة وتحدد هيرجعها إمتى.</div>`:''}
  ${done?'':`<div class="xlna"><button class="btn" onclick="xLnPay('${id}')">💵 استلمت دفعة</button>${nx?`<button class="btn ghost" onclick="xLnDefer('${id}','${nx.id}')">📅 أجّل القسط الجاي</button>`:''}<button class="btn ghost" onclick="xLnResch('${id}')">🗓 قسّط الباقي من جديد</button><button class="btn ghost" onclick="xLnEx('${id}')">✋ إعفاء</button></div>`}
  <div class="fl">📆 جدول السداد</div>
  <div class="list">${al.map((s,i)=>`<div class="row"><div class="grow"><b>${al.length>1?'قسط '+(i+1)+' · ':''}${dmy(s.d)}</b><small>${xLnChip(s)}${s.pd>0&&s.rem>0?' اتدفع '+num(s.pd)+' وفاضل '+num(s.rem):''}</small></div><div class="amt">${num(s.a)}</div>${s.rem>0.009?`<button class="mini" onclick="xLnDefer('${id}','${s.id}')">📅 أجّل</button>`:''}</div>`).join('')}</div>
  ${P.length?`<div class="fl">💵 الدفعات اللي استلمتها · متسجلة تحصيل في "سداد سلف"</div><div class="list">${P.map(p=>`<div class="row ${p.tx?'clk':''}" ${p.tx?`onclick="editTx('${p.tx}')"`:''}><div class="grow"><b>${dmy(p.d)}</b><small>${p.off?'⏳ متعلّم غير محصّل، مش محسوب':esc(xLnAcc(p.m))}${p.note?' · '+esc(p.note):''}</small></div><div class="amt ${p.off?'':'pos'}">${num(p.a)}</div><button class="mini ic danger" onclick="event.stopPropagation();xLnPayDel('${id}','${p.id}')">🗑</button></div>`).join('')}</div>`:''}
  <details class="gen"><summary>📜 سجل السلفة (${l.log.length})</summary><div class="list">${l.log.slice().reverse().map(x=>`<div class="row"><div class="grow"><b style="font-weight:600">${esc(x.e)}</b><small>${xLnTs(x.t)}</small></div></div>`).join('')}</div></details>
  <div class="two"><button class="btn ghost" onclick="xLnEdit('${id}')">✏️ تعديل</button><button class="btn ghost danger" onclick="xLnDel('${id}')">🗑 حذف</button></div>`)};

/* ✋ إعفاء: السلفة تتلغي وتفضل مصروف عادي يوم ما اتصرفت */
function xLnEx(id){const l=xLnL(id);if(!l)return;const pd=xLnPaid(l,1),rem=xLnRem(l),ec=xLnECat().id,cats=S.cats.filter(c=>c.type==='exp'&&(c.active||c.id===ec));
  sheet(`<h2>✋ إعفاء ${esc(l.who)}</h2>
  <div class="xwarn" style="background:#fffbeb;color:#92400e;border-color:#fde68a">السلفة هتتلغي من السلف، والـ <b>${num(l.amt)}</b> اللي طلعت يوم <b>${dmy(l.d)}</b> من ${esc(xLnAcc(l.m))} هتفضل <b>مصروف عادي</b> في نفس اليوم.${pd?`<br>الـ <b>${num(pd)}</b> اللي استلمتهم هيفضلوا تحصيل زي ما هم.`:''}<br>اللي هيتحسب عليك فعلاً: <b>${num(rem)}</b></div>
  <label>المصروف يتسجل في بند<select id="lx-c">${opt(cats,ec)}</select></label>
  <label>ملاحظة<input id="lx-n" value="${esc('إعفاء سلفة '+l.who)}"></label>
  <button class="btn" onclick="xLnExSv('${id}')">✋ تأكيد الإعفاء</button><button class="btn ghost" onclick="xLnOpen('${id}')">رجوع</button>`)}
function xLnExSv(id){const l=xLnL(id);if(!l)return;if(isClosed(l.d))return toast(`شهر ${mName(l.d.slice(0,7))} مقفول`);
  const c=$('#lx-c').value,n=($('#lx-n').value||'').trim();let t=S.txs.find(x=>x.id===l.tx);if(!t)t=xLnOutTx(l);
  t.cat=c;t.note=n||('إعفاء سلفة '+l.who);t.date=l.d;t.method=l.m;t.amount=l.amt;t.pend=false;delete t.xlno;
  (l.pays||[]).forEach(p=>{const x=p.tx&&S.txs.find(y=>y.id===p.tx);if(x)delete x.xlnp});
  S.settings.xln=XLN().filter(x=>x.id!==id);save();closeSheet();render();toast('✋ اتعفى '+l.who+' · بقت مصروف عادي يوم '+dmy(l.d))}
xDrWrap('xLnEx');
try{render()}catch(e){}
/* ========== 2.21.52 ========== */
/* شاشة المزيد: الإضافات الجديدة مربعات زي الباقي */
function xTileLbl(e){return(e.textContent||'').replace(/[^\u0600-\u06FFa-zA-Z ]/g,'').replace(/\s+/g,' ').trim()}
function xTileFind(el,lb){return[...el.querySelectorAll('[onclick]')].find(e=>!e.classList.contains('btn')&&xTileLbl(e)===lb)}
function xTileSet(t,ic,lb,oc){t.setAttribute('onclick',oc);const w=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),ns=[];while(w.nextNode())ns.push(w.currentNode);let done=false;
  ns.forEach(n=>{const s=n.nodeValue.trim();if(!s)return;const hasL=/[\u0600-\u06FFa-zA-Z]/.test(s),hasE=/\p{Extended_Pictographic}/u.test(s);
    if(hasL){n.nodeValue=done?'':(hasE&&ic?ic+' ':'')+lb;done=true}else if(hasE&&ic)n.nodeValue=ic});
  if(ic){const im=t.querySelector('img');if(im){const sp=document.createElement('span');sp.textContent=ic;sp.style.fontSize='28px';im.replaceWith(sp)}}}
function xMoreTiles(){const el=$('#view');if(!el)return;const rmB=sel=>{el.querySelectorAll(sel).forEach(b=>b.remove())};
  const cash=xTileFind(el,'السحب الكاش')||xTileFind(el,'سحب وإيداع كاش');
  if(cash){xTileSet(cash,'🏧','سحب وإيداع كاش',"xCashSheet('m')");rmB('button.btn[onclick*="xCashSheet"]')}
  const ln=xTileFind(el,'السلف');
  if(ln){xTileSet(ln,null,'السلف',"go('xln')");rmB('button.btn[onclick*="xln"]')}
  const base=ln||cash;
  if(base&&!el.querySelector(':not(.btn)[onclick*="\'xcl\'"]')){const c=base.cloneNode(true);xTileSet(c,'👥','العملاء',"go('xcl')");base.insertAdjacentElement('afterend',c)}
  if(el.querySelector(':not(.btn)[onclick*="\'xcl\'"]'))rmB('button.btn[onclick*="\'xcl\'"]')}
try{const _rnM=render;render=function(){const r=_rnM.apply(this,arguments);try{if(view==='more')xMoreTiles()}catch(e){}return r}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.53 ========== */
/* الإيداع: كل التحصيلات (الكاش الأول) + الربط ببند */
function xCwRefOpts(){const ca=xCashAcct(),cut=new Date(Date.now()-180*864e5).toISOString().slice(0,10),dep={};
  S.txs.forEach(x=>{if(x.xref)dep[x.xref]=r2((dep[x.xref]||0)+x.amount)});
  const L=S.txs.filter(x=>x.type==='inc'&&!x.pend&&!x.xlnp&&x.date>=cut).sort((a,b)=>((b.method===ca)-(a.method===ca))||b.date.localeCompare(a.date));
  const lab=x=>{const c=x.cl&&xClL(x.cl);return(x.method===ca?'💵 ':'🏦 ')+dmy(x.date)+' · '+(C(x.cat)?.name||'')+(c?' · '+c.name:'')+' · '+num(x.amount)+(x.method!==ca?' · '+(M(x.method)?.name||''):'')+(dep[x.id]?' · اتودع منه '+num(dep[x.id]):'')};
  const cats=S.cats.filter(c=>c.type==='inc'&&c.active);
  return '<option value="">— مش مربوطة —</option>'+L.map(x=>`<option value="${x.id}">${esc(lab(x))}</option>`).join('')+cats.map(c=>`<option value="c:${c.id}">📋 بند: ${esc(c.name)}</option>`).join('')}
try{const _shR=sheet;sheet=function(h){try{if(typeof h==='string'&&h.indexOf('id="xcw-r"')>=0)h=h.replace(/(<select id="xcw-r">)[\s\S]*?(<\/select>)/,(m,a,b)=>a+xCwRefOpts()+b)}catch(e){}return _shR.apply(this,[h].concat([].slice.call(arguments,1)))}}catch(e){}
try{const _cs=xCashSave;xCashSave=function(){const s=$('#xcw-r'),v=s?s.value:'';let cid='';if(v.indexOf('c:')===0){cid=v.slice(2);s.value=''}
  const n0=S.txs.length,r=_cs.apply(this,arguments);
  try{if(cid){if(S.txs.length>n0){const t=S.txs.slice(n0).find(x=>x.xdep);if(t){t.xrefc=cid;save()}}else if(s)s.value=v}}catch(e){}return r}}catch(e){}
try{const _lgC=xLedger;xLedger=function(){const g=_lgC.apply(this,arguments);try{const T=XTALL||S.txs;g.ev.forEach(e=>{if(!e.id)return;const t=T.find(x=>x.id===e.id);
  if(t&&t.xrefc){const c=C(t.xrefc);if(c)e.s=(e.s?e.s+' · ':'')+'🔗 من بند '+c.name}})}catch(e){}return g}}catch(e){}
/* ========== 2.21.54 ========== */
/* شيل زرار سحب وإيداع كاش من شاشة الحسابات */
try{const _rnP=render;render=function(){const r=_rnP.apply(this,arguments);try{if(view==='pmv'){const el=$('#view');if(el)el.querySelectorAll('button.btn[onclick*="xCashSheet"]').forEach(b=>b.remove())}}catch(e){}return r}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.55 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xlog{margin:12px 0}.xlog>.btn{width:100%;display:flex;justify-content:space-between;align-items:center}
/* كل القوايم كروت زي السلف */
#view .list{background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important}
#view .list>.row{background:var(--card,#fff)!important;border:1px solid rgba(127,127,127,.25)!important;border-radius:16px!important;padding:12px 14px!important;margin:8px 0!important}
#view .list>.row .amt{font-size:17px;font-weight:800}
#view .list>.row small{opacity:.75}
`;document.head.appendChild(s)})();

/* --- السجل: يتصفّر لسطر واحد ويفتح ويقفل --- */
function xLnFirst(l){return '🤝 '+l.who+' أخد سلفة '+num(l.amt)+' يوم '+dmy(l.d)+' من '+xLnAcc(l.m)}
try{if(!S.settings.xlnLR1){XLN().forEach(l=>{l.log=[{t:l.c||Date.now(),e:xLnFirst(l)}]});S.settings.xlnLR1=1;save()}}catch(e){}
try{const _w=xLnSave;xLnSave=function(){const n0=XLN().length,r=_w.apply(this,arguments);try{if(XLN().length>n0){const l=XLN()[XLN().length-1];l.log=[{t:Date.now(),e:xLnFirst(l)}];save()}}catch(e){}return r}}catch(e){}
function xLnLogHTML(l){return `<div class="xlog"><button type="button" class="btn ghost" onclick="xLogT(this)">📜 سجل السلفة (${l.log.length}) <span>▾</span></button><div style="display:none"><div class="list">${l.log.slice().reverse().map(x=>`<div class="row"><div class="grow"><b style="font-weight:600">${esc(x.e)}</b><small>${xLnTs(x.t)}</small></div></div>`).join('')}</div><button class="mini" style="margin-top:6px" onclick="xLnLogClr('${l.id}')">🧹 تصفير السجل</button></div></div>`}
function xLogT(b){const x=b.nextElementSibling;if(!x)return;const o=x.style.display==='none';x.style.display=o?'':'none';const s=b.querySelector('span');if(s)s.textContent=o?'▴':'▾'}
async function xLnLogClr(id){const l=xLnL(id);if(!l)return;if(!await dlg({title:'تصفير السجل',msg:'السجل هيفضل فيه سطر واحد بس: إنه أخد السلفة.',icon:'🧹',ok:'صفّر',cancel:'لا'}))return;l.log=[{t:l.c||Date.now(),e:xLnFirst(l)}];save();xLnOpen(id);toast('🧹 اتصفّر')}

/* --- ✅ سداد كامل --- */
function xLnFull(id){const l=xLnL(id);if(!l)return;const rem=xLnRem(l);xLnPay(id);try{const h=$('#sheet h2');if(h)h.textContent='✅ سداد كامل · '+l.who;const a=$('#lp-a');if(a){a.value=amtStr(rem);xLnPR(id)}}catch(e){}}
xDrWrap('xLnFull');
try{const _w=xLnOpen;xLnOpen=function(id){const r=_w.apply(this,arguments);try{const l=xLnL(id),sh=$('#sheet');if(!l||!sh)return r;
  const g=sh.querySelector('.xlna');if(g&&xLnRem(l)>0.009){g.insertAdjacentHTML('afterbegin',`<button class="btn" onclick="xLnFull('${id}')">✅ سداد كامل</button>`);const ex=g.querySelector('[onclick*="xLnEx"]');if(ex)ex.style.gridColumn='1/-1'}
  const d=[...sh.querySelectorAll('details')].find(x=>/سجل السلفة/.test(x.textContent));if(d)d.outerHTML=xLnLogHTML(l)}catch(e){}return r}}catch(e){}
try{const _w=xLnView;xLnView=function(){const h=_w.apply(this,arguments);return typeof h==='string'?h.replace(/onclick="event\.stopPropagation\(\);xLnOpen\('([^']+)'\)">📄 التفاصيل<\/button>/g,(m,id)=>`onclick="event.stopPropagation();xLnFull('${id}')">✅ سداد كامل</button>`):h}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.56 ========== */
(()=>{const s=document.createElement('style');s.textContent=`.xlnc.off{opacity:.55}`;document.head.appendChild(s)})();

/* --- العملاء: مربوطين بالبنود الثابتة بدل نظام أسعار منفصل --- */
XCLK.f='ثابت';
xClAuto=function(){return false};
xClInject=function(){};
try{if(!S.settings.xclMig1){XCL().forEach(c=>{['am','ay','day','renew','remD','pct','acc','cat','gm','ya','incAck','prices'].forEach(k=>delete c[k])});S.settings.xclMig1=1;save()}}catch(e){}
function xClItems(id){return S.cats.filter(c=>c.kind==='inc'&&c.cl===id)}
function xClSync(){const L=new Map();S.cats.forEach(c=>{if(c.kind==='inc'&&c.cl&&xClL(c.cl))L.set(c.id,{cl:c.cl,y:isAnn(c)})});let ch=false;
  S.txs.forEach(t=>{if(t.type!=='inc')return;const x=L.get(t.cat);
    if(x){if(t.cl!==x.cl||!t.clf){t.cl=x.cl;t.clk=x.y?'y':'m';t.clf=1;ch=true}}
    else if(t.clf){delete t.cl;delete t.clk;delete t.clf;ch=true}});return ch}
try{const _rnS=render;render=function(){try{if(xClSync())save()}catch(e){}return _rnS.apply(this,arguments)}}catch(e){}
function xClDue(c){const out=[],td=today(),end=mRange(NKM)[1];
  xClItems(c.id).filter(r=>r.fixed&&r.start&&r.active!==false).forEach(r=>{for(let k=0;k<1000;k++){const d=occDate(r,k);if(d>end)break;if(daysBetween(td,d)>120)continue;if(stOf(occRec(r,k)).st!=='wait')continue;out.push({r,k,d,amt:occAmt(r,k)})}});
  return out.sort((a,b)=>a.d.localeCompare(b.d))}
function xClNx(r){if(!r.fixed||!r.start||r.active===false)return null;const td=today();for(let k=0;k<1000;k++){const d=occDate(r,k);if(daysBetween(td,d)>62)continue;if(stOf(occRec(r,k)).st!=='wait')continue;return{k,d,amt:occAmt(r,k)}}return null}
function xClPend(c){const td=today();return r2(S.txs.filter(t=>t.cl===c.id&&t.pend&&t.date<=td).reduce((s,t)=>s+t.amount,0)+xClDue(c).filter(o=>o.d<=td).reduce((s,o)=>s+o.amt,0))}
function xClOld(){return S.txs.filter(t=>t.pend&&t.cl&&!t.clf&&(t.clk==='m'||t.clk==='y')&&!t.note)}
async function xClClean(){const L=xClOld();if(!L.length)return;
  if(!await dlg({title:'تنضيف',msg:`${L.length} تحصيل معلّق اتعمل لوحده من نظام العملاء القديم. هيتمسحوا.`,icon:'🧹',ok:'امسحهم',cancel:'لا'}))return;
  const ids=new Set(L.map(t=>t.id));for(let i=S.txs.length-1;i>=0;i--)if(ids.has(S.txs[i].id))S.txs.splice(i,1);save();render();toast('🧹 اتمسحوا')}

/* الشاشة */
xClCards=function(){const q=XCLQ.trim().toLowerCase(),L=XCL().slice().sort((a,b)=>(+a.no||0)-(+b.no||0)).filter(c=>!q||[c.no,c.name,c.co,c.mob1,c.mob2,c.tel,c.addr].join(' ').toLowerCase().includes(q));
  if(!L.length)return '<p class="muted" style="text-align:center;margin:20px 0">مفيش عملاء</p>';
  return L.map(c=>{const it=xClItems(c.id),m=it.filter(r=>r.fixed&&!isAnn(r)).reduce((s,r)=>s+(+r.amount||0),0),y=it.filter(r=>r.fixed&&isAnn(r)).length,pd=xClPend(c);
    return `<div class="xlnc ${c.off?'off':''}" onclick="xClOpen('${c.id}')"><div class="xlnr"><b>#${esc(String(c.no||''))} · ${esc(c.name)}</b>${pd?`<span class="xchip late">⏳ ${num(pd)}</span>`:''}</div>
    <div class="xlnr xsm"><span>${esc(c.co||'')}</span><span dir="ltr">${esc(c.mob1||'')}</span></div>
    <div class="xlnn">${[m?'🔁 شهري '+num(m):'',y?'📅 '+y+' سنوي':'',!it.length?'<span style="opacity:.6">مش مربوط ببنود</span>':'',c.off?'⏸ موقوف':''].filter(Boolean).join(' · ')}</div></div>`}).join('')};
xClView=function(){const mk=today().slice(0,7);let col=0;S.txs.forEach(t=>{if(t.cl&&t.type==='inc'&&!t.pend&&t.date.startsWith(mk))col+=t.amount});
  const pen=r2(XCL().reduce((s,c)=>s+xClPend(c),0)),old=xClOld().length;
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>👥 العملاء</h3><button class="mini" onclick="xClRep('clsum')">📊</button></div>
  <button class="btn" onclick="xClForm()">➕ عميل جديد</button>
  ${kpis([['👥 العملاء',String(XCL().filter(c=>!c.off).length),'net'],['✅ اتحصّل الشهر ده',fmt(r2(col)),'inc'],['⏳ عليهم',fmt(pen),'exp']])}
  ${old?`<div class="xwarn">🧹 فيه ${old} تحصيل معلّق اتعمل لوحده من النسخة اللي فاتت.<br><button class="mini" style="margin-top:6px" onclick="xClClean()">امسحهم</button></div>`:''}
  <input class="xsrch" placeholder="🔍 دوّر بالاسم أو الرقم أو الموبايل" value="${esc(XCLQ)}" oninput="XCLQ=this.value;xClList()"><div id="xcl-l">${xClCards()}</div>`};

/* صفحة العميل */
xClOpen=function(id){const c=xClL(id);if(!c)return;const td=today(),it=xClItems(id),T=S.txs.filter(t=>t.cl===id).sort((a,b)=>b.date.localeCompare(a.date)),col=r2(T.filter(t=>!t.pend).reduce((s,t)=>s+t.amount,0)),pd=xClPend(c),nd=(c.br||[]).length+(c.ex||[]).length+(c.nt?1:0);
  const tel=v=>{if(!v)return '';const w=waNum(normPhone(v));return `<div class="phl"><b dir="ltr" style="text-align:right">${esc(v)}</b><a class="cbt" href="tel:${esc(v)}">📞</a>${w?`<a class="cbt wa" href="https://wa.me/${w}" target="_blank">${waIc('💬')}</a>`:''}</div>`};
  sheet(`<h2>👥 ${esc(c.name)}</h2><p class="muted">عميل #${esc(String(c.no||''))}${c.co?' · '+esc(c.co):''}${c.off?' · ⏸ موقوف':''}</p>
  ${c.addr?`<div class="kv"><span>📍 العنوان</span><b>${esc(c.addr)}</b></div>`:''}${tel(c.mob1)}${tel(c.mob2)}${tel(c.tel)}
  <div class="xlns"><div><small>اتحصّل</small><b class="pos">${num(col)}</b></div><div><small>عليه</small><b class="neg">${num(pd)}</b></div><div><small>البنود</small><b>${it.length}</b></div></div>
  <div class="xlna"><button class="btn" onclick="xClPay('${id}')">💵 تحصيل</button><button class="btn ghost" onclick="xClDet('${id}')">📋 تفاصيل العميل${nd?' ('+nd+')':''}</button></div>
  <div class="fl">📌 التحصيلات الثابتة بتاعته</div>
  ${it.length?`<div class="list">${it.map(r=>{const n=xClNx(r);return `<div class="row clk" onclick="catForm('${r.id}')"><div class="grow"><b>${esc(r.name)}</b><small>${r.fixed?everyTxt(r.every)+' · '+num(+r.amount||0):'بند متغير'}${r.prevAmt?' · كان '+num(r.prevAmt)+(r.incPct!=null?' ('+(r.incPct>=0?'+':'')+r.incPct+'%)':''):''}</small>${n?`<small>${n.d<td?'⚠️ متأخر':'⏳ الجاي'} ${dmy(n.d)} · ${num(n.amt)}</small>`:''}</div><button class="mini ic" title="فك الربط" onclick="event.stopPropagation();xClUnlink('${id}','${r.id}')">✕</button></div>`}).join('')}</div>`
  :'<p class="xnote">مفيش بنود مربوطة. اربط بند تحصيل ثابت موجود، أو اعمل واحد جديد، عشان التحصيل الشهري والسنوي والزيادة يتسجلوا عليه.</p>'}
  <div class="xlna"><button class="btn ghost" onclick="xClLinkPick('${id}')">🔗 اربط بند موجود</button><button class="btn ghost" onclick="xClNewItem('${id}')">➕ بند ثابت جديد</button></div>
  ${T.length?`<div class="xlog"><button type="button" class="btn ghost" onclick="xLogT(this)">💰 التحصيلات (${T.length}) <span>▾</span></button><div style="display:none"><div class="list">${T.slice(0,30).map(t=>`<div class="row clk" onclick="editTx('${t.id}')"><div class="grow"><b>${dmy(t.date)} · ${esc(C(t.cat)?.name||'')}</b><small>${t.pend?'⏳ لسه':'✅ اتحصّل'}${t.note?' · '+esc(t.note):''}</small></div><div class="amt ${t.pend?'neg':'pos'}">${num(t.amount)}</div></div>`).join('')}</div></div></div>`:''}
  <div class="xlna"><button class="btn ghost" onclick="xClRep('clst','${id}')">📄 كشف حساب</button><button class="btn ghost" onclick="xClRep('cldata','${id}')">🧾 بيانات العميل</button></div>
  <div class="two"><button class="btn ghost" onclick="xClForm('${id}')">✏️ تعديل البيانات</button><button class="btn ghost danger" onclick="xClDel('${id}')">🗑 حذف</button></div>`)};

/* بيانات العميل: الخانات الأساسية بس */
xClForm=function(id){const c=id?xClL(id):null,no=c?c.no:(Math.max(0,...XCL().map(x=>+x.no||0))+1);
  sheet(`<h2>${c?'✏️ بيانات العميل':'👥 عميل جديد'}</h2>
  <div class="two"><label>رقم العميل<input id="cl-no" inputmode="numeric" value="${esc(String(no))}"></label><label>الاسم *<input id="cl-n" value="${esc(c?.name||'')}"></label></div>
  <label>الشركة<input id="cl-co" value="${esc(c?.co||'')}"></label>
  <label>العنوان<input id="cl-ad" value="${esc(c?.addr||'')}"></label>
  <div class="two"><label>موبايل 1<input id="cl-m1" type="tel" dir="ltr" value="${esc(c?.mob1||'')}"></label><label>موبايل 2<input id="cl-m2" type="tel" dir="ltr" value="${esc(c?.mob2||'')}"></label></div>
  <label>تليفون أرضي<input id="cl-t" type="tel" dir="ltr" value="${esc(c?.tel||'')}"></label>
  ${c?`<label class="xchk"><input type="checkbox" id="cl-off" ${c.off?'checked':''}> ⏸ عميل موقوف</label>`:''}
  <button class="btn" onclick="xClSave(${c?`'${id}'`:''})">💾 حفظ</button>${c?`<button class="btn ghost" onclick="xClOpen('${id}')">رجوع</button>`:''}`)};
xClSave=function(id){const g=k=>(($('#cl-'+k)||{}).value||'').trim(),n=g('n');if(!n)return toast('اكتب اسم العميل');
  const no=latD(g('no'));if(no&&XCL().some(x=>x.id!==id&&String(x.no)===no))return toast('رقم العميل ده موجود');
  let c=id?xClL(id):null;if(!c){c={id:uid(),c:Date.now(),br:[],ex:[]};XCL().push(c)}
  Object.assign(c,{no:no||'',name:n,co:g('co'),addr:g('ad'),mob1:latD(g('m1')),mob2:latD(g('m2')),tel:latD(g('t'))});if($('#cl-off'))c.off=$('#cl-off').checked;
  save();render();xClOpen(c.id);toast('✅ اتحفظ')};
/* تفاصيل العميل: شيت لوحده */
function xClDet(id){const c=xClL(id);if(!c)return;
  sheet(`<h2>📋 تفاصيل ${esc(c.name)}</h2>
  <div class="fl">🏢 الفروع</div><div id="cl-br">${(c.br||[]).map(xClBrRow).join('')}</div><button type="button" class="mini" onclick="xClAdd('br')">+ فرع</button>
  <div class="fl" style="margin-top:14px">🔧 بيانات فنية (AnyDesk · VPN · ...)</div><div id="cl-ex">${(c.ex||[]).map(xClExRow).join('')}</div><button type="button" class="mini" onclick="xClAdd('ex')">+ خانة</button>
  <datalist id="cl-exk">${['AnyDesk','AnyDesk Password','VPN','VPN User','VPN Password','IP','Server','User','Password','TeamViewer','Email'].map(k=>`<option value="${k}">`).join('')}</datalist>
  <label style="margin-top:14px">ملاحظات<textarea id="cl-nt" rows="3">${esc(c.nt||'')}</textarea></label>
  ${(c.ex||[]).length?`<div class="fl">📋 انسخ</div><div class="list">${c.ex.map((e,i)=>`<div class="row"><div class="grow"><b>${esc(e.k)}</b><small dir="ltr">${esc(e.v)}</small></div><button class="mini ic" onclick="xClCp('${id}',${i})">📋</button></div>`).join('')}</div>`:''}
  <button class="btn" onclick="xClDetSv('${id}')">💾 حفظ</button><button class="btn ghost" onclick="xClOpen('${id}')">رجوع</button>`)}
function xClDetSv(id){const c=xClL(id);if(!c)return;c.br=xClRows('br',['n','a','t']);c.ex=xClRows('ex',['k','v']);c.nt=(($('#cl-nt')||{}).value||'').trim();save();xClOpen(id);toast('✅ اتحفظ')}
xDrWrap('xClDet');

/* الربط بالبنود */
function xClLinkPick(id){const L=S.cats.filter(c=>c.kind==='inc'&&!c.cl&&c.active!==false).sort((a,b)=>(b.fixed?1:0)-(a.fixed?1:0)||a.name.localeCompare(b.name,'ar'));
  sheet(`<h2>🔗 اربط بند بالعميل</h2><p class="muted">اختار بند التحصيل اللي جاي من العميل ده</p>
  <input class="xsrch" placeholder="🔍 دوّر..." oninput="xClLF(this.value)">
  <div class="list" id="xcl-lp">${L.map(c=>`<div class="row clk" data-q="${esc(normAr(c.name))}" onclick="xClLink('${id}','${c.id}')"><span class="ic" style="background:var(--soft)">${c.fixed?(isAnn(c)?'📆':'📌'):'💵'}</span><div class="grow"><b>${esc(c.name)}</b><small>${c.fixed?everyTxt(c.every)+' · '+num(+c.amount||0):'بند متغير'}</small></div></div>`).join('')||'<p class="empty">مفيش بنود</p>'}</div>
  <button class="btn ghost" onclick="xClOpen('${id}')">رجوع</button>`)}
function xClLF(q){q=normAr(q);document.querySelectorAll('#xcl-lp .row').forEach(r=>r.style.display=!q||r.dataset.q.includes(q)?'':'none')}
function xClLink(id,cid){const c=C(cid);if(!c)return;c.cl=id;xClSync();save();render();xClOpen(id);toast('🔗 اتربط '+c.name)}
async function xClUnlink(id,cid){const c=C(cid);if(!c)return;if(!await dlg({title:'فك الربط',msg:`البند «${c.name}» هيفضل زي ما هو، بس مش هيتحسب على العميل.`,icon:'🔗',ok:'فك الربط',cancel:'لا'}))return;delete c.cl;xClSync();save();render();xClOpen(id)}
function xClNewItem(id){const c=xClL(id);if(!c)return;catForm(null,'inc',{fixed:true,cl:id,name:c.name})}
/* خانة العميل في شاشة البند */
try{const _csC=catSheet;catSheet=function(){const r=_csC.apply(this,arguments);try{if(CF&&CF.kind==='inc'&&XCL().length&&!$('#cf-cl')){const n=$('#cf-name'),lb=n&&n.closest('label');
  if(lb)lb.insertAdjacentHTML('afterend',`<label>👥 العميل (لو البند ده من عميل)<select id="cf-cl" onchange="CF.cl=this.value"><option value="">— مش من عميل —</option>${XCL().slice().sort((a,b)=>(+a.no||0)-(+b.no||0)).map(c=>`<option value="${c.id}" ${c.id===CF.cl?'selected':''}>#${esc(String(c.no))} · ${esc(c.name)}</option>`).join('')}</select></label>`)}}catch(e){}return r}}catch(e){}
try{const _cvC=catSave;catSave=function(){const cl=CF?(CF.cl||''):'',id0=CF&&CF.id,n0=S.cats.length,r=_cvC.apply(this,arguments);
  try{const t=id0?C(id0):(S.cats.length>n0?S.cats[S.cats.length-1]:null);if(t&&(id0||S.cats.length>n0)){if(t.kind==='inc'&&cl)t.cl=cl;else delete t.cl;xClSync();save();render()}}catch(e){}return r}}catch(e){}

/* تحصيل من صفحة العميل */
xClPay=function(id){const c=xClL(id);if(!c)return;const due=xClDue(c),P=S.txs.filter(t=>t.cl===id&&t.pend).sort((a,b)=>a.date.localeCompare(b.date)),it=xClItems(id);
  const cid=(it.find(r=>!r.fixed)||{}).id||xClCat().id,cats=S.cats.filter(x=>x.kind==='inc'&&(x.active!==false||x.id===cid));
  sheet(`<h2>💵 تحصيل · ${esc(c.name)}</h2>
  ${due.length?`<div class="fl">📌 مستحق من البنود الثابتة</div><div class="list">${due.map(o=>`<div class="row"><div class="grow"><b>${esc(o.r.name)}</b><small>${o.d<today()?'⚠️ متأخر · ':''}${dmy(o.d)}</small></div><div class="amt">${num(o.amt)}</div><button class="mini pri" onclick="occSheet('${o.r.id}',${o.k})">✓ اتحصّل</button></div>`).join('')}</div>`:''}
  ${P.length?`<div class="fl">⏳ معلّق</div><div class="list">${P.map(t=>`<div class="row"><div class="grow"><b>${dmy(t.date)} · ${esc(C(t.cat)?.name||'')}</b><small>${t.note?esc(t.note):''}</small></div><div class="amt neg">${num(t.amount)}</div><button class="mini pri" onclick="xClMark('${id}','${t.id}')">✅</button></div>`).join('')}</div>`:''}
  <div class="fl">${due.length||P.length?'أو سجّل تحصيل تاني':'تحصيل جديد'}</div>
  <label>المبلغ<input id="cp-a" class="amt-in" inputmode="decimal" dir="ltr" placeholder="0"></label>
  <label>البند<select id="cp-c">${opt(cats,cid)}</select></label>
  <div class="two"><label>استلمت في حساب<select id="cp-m">${opt(S.methods.filter(m=>m.active&&!xIsCr(m.id)),defMethod())}</select></label><label>الطريقة<select id="cp-v">${viaOpts('')}</select></label></div>
  <div class="two"><label>التاريخ<input id="cp-d" type="date" value="${today()}"></label><label>الحالة<select id="cp-s"><option value="1">✅ اتحصّل</option><option value="0">⏳ لسه</option></select></label></div>
  <label>ملاحظة<input id="cp-n" placeholder="اختياري"></label>
  <button class="btn" onclick="xClPaySv('${id}')">✅ سجّل</button><button class="btn ghost" onclick="xClOpen('${id}')">رجوع</button>`)};
xClPaySv=function(id){const c=xClL(id);if(!c)return;const a=parseNum($('#cp-a').value),d=$('#cp-d').value;if(!(a>0))return toast('اكتب المبلغ');if(!d)return toast('اختار التاريخ');if(isClosed(d))return toast(`شهر ${mName(d.slice(0,7))} مقفول`);
  const t={id:uid(),type:'inc',amount:a,cat:$('#cp-c').value||xClCat().id,method:$('#cp-m').value,via:$('#cp-v').value,date:d,note:($('#cp-n').value||'').trim(),files:[],created:Date.now(),cl:id,clk:'o'};
  if($('#cp-s').value==='0')t.pend=true;S.txs.push(t);save();render();xClOpen(id);toast(t.pend?'⏳ اتسجل معلّق':'✅ اتسجل التحصيل')};

/* التقارير: البنود الثابتة بدل الأسعار القديمة */
xClPrTbl=function(c){const it=xClItems(c.id);if(!it.length)return NONE;
  return rtbl(['البند','التكرار','المبلغ|n','السابق|n','الزيادة|n'],it.map(r=>`<tr>${cT(esc(r.name))}${cT(r.fixed?everyTxt(r.every):'متغير')}${cN(r.fixed?num(+r.amount||0):'—')}${cN(r.prevAmt?num(r.prevAmt):'—')}${cN(r.prevAmt&&r.incPct!=null?(r.incPct>0?'+':'')+r.incPct+'%':'—',r.incPct>0?'inc':r.incPct<0?'exp':'')}</tr>`))};
['clst','cldata'].forEach(k=>{try{const f=REPS[k]&&REPS[k].b;if(!f)return;REPS[k].b=function(){const r=f.apply(this,arguments);try{r.body=r.body.split(rsec('💲 تاريخ الأسعار')).join(rsec('📌 البنود الثابتة'))}catch(e){}return r}}catch(e){}});

/* خانة العميل في التحصيل: بتشتغل في التعديل كمان */
xClInjForm=function(){if($('#f-cl'))return;const sh=$('#sheet');if(!sh||!F||F.type!=='inc')return;const e=F.id?S.txs.find(t=>t.id===F.id):null;if(e&&e.xlnp)return;
  const cl=e&&e.cl||'',k=e&&e.clk&&e.clk!=='f'?e.clk:'o',L=XCL().filter(c=>!c.off||c.id===cl).sort((a,b)=>(+a.no||0)-(+b.no||0));XCLFK=k;
  const h=`<div class="xclf"><div class="seg" id="f-clm"><button type="button" data-m="0" class="${cl?'':'on'}" onclick="xClFM(0)">💵 تحصيل عادي</button><button type="button" data-m="1" class="${cl?'on':''}" onclick="xClFM(1)">👥 تحصيل عميل</button></div>
  <div id="f-clw" style="${cl?'':'display:none'}">${L.length?`<label>👥 العميل<select id="f-cl" onchange="xClFC()"><option value="">— اختار العميل —</option>${L.map(c=>`<option value="${c.id}" ${c.id===cl?'selected':''}>#${esc(String(c.no))} · ${esc(c.name)}</option>`).join('')}</select></label><div class="seg" id="f-clk" style="${cl?'':'display:none'}">${['m','y','o'].map(x=>`<button type="button" data-k="${x}" class="${x===k?'on':''}" onclick="xClFK('${x}')">${XCLK[x]}</button>`).join('')}</div>`:`<input type="hidden" id="f-cl" value=""><p class="xnote">مفيش عملاء لسه. ضيفهم من المزيد ← 👥 العملاء</p>`}</div></div>`;
  const a=$('#f-amt'),hh=sh.querySelector('h2');if(a)a.insertAdjacentHTML('afterend',h);else if(hh)hh.insertAdjacentHTML('afterend',h)};
xClFill=function(){};
/* تعديل أي عملية مبيمسحش علاماتها الخاصة، وبيحفظ العميل */
var XKEEP=['xlnp','xlno','xlnwo','feeOf','xref','xrefc','xdep','xwho','clf','loanOf'];
try{const _stK=saveTx;saveTx=function(){const eid=F&&F.id,old=eid?S.txs.find(t=>t.id===eid):null,keep={};if(old)XKEEP.forEach(k=>{if(old[k]!=null)keep[k]=old[k]});
  const el=$('#f-cl'),cl=el?el.value:null,k=XCLFK,r=_stK.apply(this,arguments);
  const ap=()=>{try{if(!eid)return;const t=S.txs.find(x=>x.id===eid);if(!t)return;Object.keys(keep).forEach(x=>{if(t[x]==null)t[x]=keep[x]});
    if(cl!==null){if(cl){t.cl=cl;t.clk=k}else if(!t.clf){delete t.cl;delete t.clk}}xClSync();save()}catch(e){}};
  if(r&&typeof r.then==='function')r.then(ap);else ap();return r}}catch(e){}
/* الرجوع لعملية جديدة بعد قفل البرنامج */
function xTxRe(f){F=f;txForm()}
try{const _tfD=txForm;txForm=function(){const r=_tfD.apply(this,arguments);try{if(F&&F.id)XDR=null;else if(F)XDR={n:'xTxRe',a:[JSON.parse(JSON.stringify(F))]}}catch(e){}return r}}catch(e){}
document.addEventListener('input',e=>{try{if(XDR&&XDR.n==='xTxRe'&&e.target.closest&&e.target.closest('#sheet')){grab();XDR.a=[JSON.parse(JSON.stringify(F))]}}catch(x){}},true);
try{render()}catch(e){}
/* ========== 2.21.57 ========== */
/* التحصيلات والمصروفات والأقساط بشكل السلف */
var XCOLT='pend',XEXPT='all',XVOLD={col:vCol,exps:vExps,inst:vInst};
function xOldBtn(){return `<button class="mini" onclick="S.settings.xoldv=1;save();render()">↺ الشكل القديم</button>`}
function xOldBar(){return `<div class="xwarn" style="background:#eff6ff;color:#1e3a8a;border-color:#bfdbfe">انت على الشكل القديم <button class="mini" onclick="delete S.settings.xoldv;save();render()">✨ الشكل الجديد</button></div>`}
function xCh(c,t){return `<span class="xchip ${c||''}">${t}</span>`}
function xB(js,l,g){return `<button class="btn ${g?'ghost':''}" onclick="event.stopPropagation();${js}">${l}</button>`}
function xCard(o){const n=(o.btns||'').split('<button').length-1;
  return `<div class="xlnc" ${o.click?`onclick="${o.click}"`:''}><div class="xlnr"><b>${o.ic?o.ic+' ':''}${o.title}</b><span class="xlnbig ${o.cls||''}" dir="ltr">${o.amt}</span></div>${o.sub||o.sub2?`<div class="xlnr xsm"><span>${o.sub||''}</span><span>${o.sub2||''}</span></div>`:''}${o.chip?`<div class="xlnn">${o.chip}</div>`:''}${o.btns?`<div class="xlna" ${n>2?'style="grid-template-columns:repeat(3,1fr)"':''}>${o.btns}</div>`:''}</div>`}
function xDayLbl(d){const td=today();if(d===td)return 'النهارده';const y=new Date(td+'T12:00:00');y.setDate(y.getDate()-1);if(d===isoD(y))return 'امبارح';return ['الأحد','الاتنين','التلات','الأربع','الخميس','الجمعة','السبت'][new Date(d+'T12:00:00').getDay()]+' '+dmy(d)}
function xDayGroups(L){let h='',last='';const tot={};L.forEach(x=>{tot[x.d]=r2((tot[x.d]||0)+(x.a||0))});L.forEach(x=>{if(x.d!==last){last=x.d;h+=`<div class="agh"><span>📅 ${xDayLbl(x.d)}</span><small>${num(tot[x.d])}</small></div>`}h+=x.h});return h}
function xQDone(id){const t=S.txs.find(x=>x.id===id);if(!t||!t.pend)return;const d=today();if(isClosed(d))return toast('الشهر الحالي مقفول');t.due=t.date;t.pend=false;t.date=d;save();render();toast((t.type==='inc'?'✅ اتحصّل ':'✅ اتدفع ')+fmt(t.amount))}
function xStChip(d){const td=today();return d<td?xCh('late','⚠️ متأخر'):d===td?xCh('tdy','🔔 النهارده'):xCh('up','⏳ منتظر')}
function xClTag(t){const c=t.cl&&xClL(t.cl);return c?` <span class="xclb">👥 ${esc(c.name)}</span>`:''}
function xPendFix(o,kind){const inc=kind==='inc';
  return xCard({ic:'📌',title:esc(o.r.name),amt:num(o.amt),sub:'ميعاده '+dmy(o.date),sub2:everyTxt(o.r.every),chip:xStChip(o.date),click:`occSheet('${o.r.id}',${o.k})`,
    btns:xB(`occCollect('${o.r.id}',${o.k},true)`,inc?'✅ اتحصّل':'✅ اتدفع')+xB(`occSheet('${o.r.id}',${o.k})`,'✏️ بمبلغ تاني',1)})}
function xPendTx(t){const inc=t.type==='inc';
  return xCard({ic:'⏳',title:esc(C(t.cat)?.name||'—')+xClTag(t),amt:num(t.amount),sub:'ميعاده '+dmy(t.date)+(t.post?' · اتأجّل '+t.post+' مرة':''),sub2:esc(M(t.method)?.name||''),chip:xStChip(t.date),click:`editTx('${t.id}')`,
    btns:xB(`xQDone('${t.id}')`,inc?'✅ اتحصّل':'✅ اتدفع')+(typeof xPartial==='function'?xB(`xPartial('${t.id}')`,'💵 جزء',1):'')+xB(`postpone('${t.id}')`,'⏭ أجّل',1)})}
function xTxCard(t,ic){const inc=t.type==='inc',rc=S.buys.some(b=>b.txId===t.id),nf=(t.files||[]).length;
  return xCard({ic:ic||(rc?'🧾':inc?'💰':'💸'),title:esc(C(t.cat)?.name||'—')+xClTag(t),amt:num(t.amount),cls:inc?'pos':'neg',
    sub:[esc(M(t.method)?.name||''),t.via?viaTxt(t.via):'',nf&&!rc?'📎':''].filter(Boolean).join(' · '),sub2:t.note&&!/^🧾/.test(t.note)?esc(t.note.slice(0,40)):'',click:`editTx('${t.id}')`})}
function xDoneFix(o,kind){if(o.s.st==='skip')return xCard({ic:'📌',title:esc(o.r.name),amt:num(o.amt),sub:'اتلغى الشهر ده',chip:xCh('','⛔ اتلغى'),click:`catForm('${o.r.id}')`});
  if(!o.s.t)return xCard({ic:'📌',title:esc(o.r.name),amt:num(o.amt),sub:'مسجّل سابقاً',chip:xCh('ok','✅')});
  return xTxCard(o.s.t,'📌')}
const xTb=(st,k,l,n)=>`<button type="button" class="${window[st]===k?'on':''}" onclick="${st}='${k}';render()">${l} (${n})</button>`;

/* 💰 التحصيلات */
vCol=function(){if(S.settings.xoldv)return xOldBar()+XVOLD.col();
  const key=ym(cur.y,cur.m),dl=dueList(key,'m','inc'),linked=new Set(dl.filter(o=>o.s.st==='done').map(o=>o.s.t.id));
  const others=keyTx(key).filter(t=>t.type==='inc'&&!linked.has(t.id)),ptx=pendTx('inc',key),pendF=dl.filter(o=>o.s.st==='wait'),doneF=dl.filter(o=>o.s.st!=='wait');
  const remT=ptx.reduce((a,t)=>a+t.amount,0),rem=pendF.reduce((a,o)=>a+o.amt,0)+remT,got=sums(keyTx(key)).inc,exp=dl.reduce((a,o)=>a+o.amt,0)+remT;
  const ccr=S.txs.filter(t=>t.ccr&&!t.pend&&t.type==='inc'&&t.date.startsWith(key+'-'));
  const P=pendF.map(o=>({d:o.date,h:xPendFix(o,'inc')})).concat(ptx.map(t=>({d:t.date,h:xPendTx(t)}))).sort((a,b)=>a.d.localeCompare(b.d));
  const D=doneF.map(o=>({d:o.s.t?o.s.t.date:o.date,c:o.s.t?o.s.t.created||0:0,a:o.s.t?o.s.t.amount:0,h:xDoneFix(o,'inc')})).concat(others.map(t=>({d:t.date,c:t.created||0,a:t.amount,h:xTxCard(t)}))).sort((a,b)=>b.d.localeCompare(a.d)||b.c-a.c);
  let h=`<div class="phead"><h3>💰 ${esc(L('inc'))}</h3>${xOldBtn()}</div>`+monthBar()+`<button class="btn" onclick="newTx('inc')">➕ تحصيل جديد</button>`
    +kpis([['المحصّل',fmt(got),'inc'],['المتوقع',fmt(exp),'net'],['المتبقي',fmt(rem),'exp']])
    +(got+rem?`<div class="xbar" style="margin:0 0 10px"><i style="width:${Math.min(100,got/(got+rem)*100)}%"></i></div>`:'')
    +`<div class="seg">${xTb('XCOLT','pend','⏳ غير محصّل',P.length)}${xTb('XCOLT','done','✅ اتحصّل',D.length+ccr.length)}</div>`;
  if(XCOLT==='pend')h+=P.length?P.map(x=>x.h).join(''):'<div class="nempty"><div>✅</div><b>كله اتحصّل</b></div>';
  else{h+=D.length?xDayGroups(D):'<p class="empty">لسه مفيش تحصيلات الشهر ده</p>';
    if(ccr.length)h+=`<div class="agh"><span>💳 تحصيل لحساب الكريديت</span><small>${num(r2(ccr.reduce((a,t)=>a+t.amount,0)))}</small></div>`+ccr.map(t=>xTxCard(t,'💳')).join('')}
  return h};

/* 💸 المصروفات */
vExps=function(){if(S.settings.xoldv)return xOldBar()+XVOLD.exps();
  const k=ym(cur.y,cur.m),list=keyTx(k).filter(t=>t.type==='exp'),tot=list.reduce((a,t)=>a+t.amount,0);
  const dl=dueList(k,'','exp'),linked=new Set(dl.filter(o=>o.s.st==='done').map(o=>o.s.t.id)),others=list.filter(t=>!linked.has(t.id)),ptx=pendTx('exp',k);
  const fixSum=dl.reduce((a,o)=>a+(o.s.st==='done'?o.s.t.amount:o.s.st==='skip'?0:o.amt),0);
  if(XEXPT==='pend'&&!ptx.length)XEXPT='all';
  let h=`<div class="phead"><h3>💸 ${esc(L('exp'))}</h3>${xOldBtn()}</div>`+monthBar()
    +`<div class="xlna"><button class="btn" onclick="newTx('exp')">➕ مصروف</button><button class="btn ghost" onclick="scanReceipt()">📷 Receipt Scan</button></div>`
    +kpis([['اتصرف',fmt(tot),'exp'],['ثابت',fmt(fixSum),'warn'],['عدد العمليات',String(list.length),'net']])
    +`<div class="seg">${xTb('XEXPT','all','💸 المصروفات',others.length)}${xTb('XEXPT','fix','📌 الثابت',dl.length)}${ptx.length?xTb('XEXPT','pend','⏳ لسه',ptx.length):''}</div>`;
  if(XEXPT==='fix')h+=(dl.length?dl.map(o=>o.s.st==='wait'?xPendFix(o,'exp'):xDoneFix(o,'exp')).join(''):'<p class="empty">مفيش مصروفات ثابتة الشهر ده</p>')+`<button class="btn ghost" onclick="catForm(null,'exp',{fixed:true})">➕ مصروف ثابت</button>`;
  else if(XEXPT==='pend')h+=ptx.map(xPendTx).join('');
  else{const D=others.map(t=>({d:t.date,c:t.created||0,a:t.amount,h:xTxCard(t)})).sort((a,b)=>b.d.localeCompare(a.d)||b.c-a.c);h+=D.length?xDayGroups(D):'<p class="empty">لا يوجد مصروفات الشهر ده</p>'}
  return h};

/* 🏦 الأقساط */
vInst=function(){if(S.settings.xoldv)return xOldBar()+XVOLD.inst();
  const td=today();let rem=0,mo=0,late=0;
  S.plans.forEach(p=>{const s=planStats(p);rem+=s.total-s.paid;late+=s.late;p.items.forEach(it=>{if(!itTx(it)&&it.due&&it.due.startsWith(NKM))mo+=+it.amount||0})});
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏦 ${esc(L('inst'))}</h3>${xOldBtn()}</div><button class="btn" onclick="planNew()">➕ قسط جديد</button>`
    +kpis([['💳 الباقي عليك',fmt(r2(rem)),'exp'],['📅 الشهر ده',fmt(r2(mo)),'warn'],['⚠️ متأخر',String(late),'net']]);
  if(!S.plans.length)return h+'<p class="empty">لا يوجد أقساط</p>';
  const PL=S.plans.slice().sort((a,b)=>{const x=planStats(a).next,y=planStats(b).next;return(x?x.due:'9')<(y?y.due:'9')?-1:1});
  return h+PL.map(p=>{const s=planStats(p),nx=s.next,pc=s.total?Math.min(100,Math.round(s.paid/s.total*100)):0;
    return `<div class="xlnc" onclick="instPlan='${p.id}';go('plan')"><div class="xlnr"><b>🏦 ${esc(p.name)}</b><span class="xlnbig" dir="ltr">${num(r2(s.total-s.paid))}</span></div>
    <div class="xlnr xsm"><span>${s.paidN}/${s.n} قسط · الباقي من ${num(s.total)}</span></div><div class="xbar"><i style="width:${pc}%"></i></div>
    <div class="xlnn">${nx?(s.late?xCh('late','⚠️ '+s.late+' متأخر'):nx.due===td?xCh('tdy','🔔 النهارده'):xCh('up','⏳ الجاي'))+` <b>${num(+nx.amount||0)}</b> يوم <b>${dmy(nx.due)}</b>`:xCh('ok','✅ خلصت')}</div>
    ${nx?`<div class="xlna"><button class="btn" onclick="event.stopPropagation();payStart('${p.id}','${nx.id}')">✓ ادفع القسط</button><button class="btn ghost" onclick="event.stopPropagation();instPlan='${p.id}';go('plan')">📄 التفاصيل</button></div>`:''}</div>`}).join('')};

/* الفلتر يشتغل على الكروت الجديدة */
try{const _gfA=gfApply;gfApply=function(){const r=_gfA.apply(this,arguments);try{const q=qn(GQ[view]||'');document.querySelectorAll('#view .xlnc').forEach(e=>{e.style.display=!q||qn(e.textContent).includes(q)?'':'none'})}catch(e){}return r}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.58 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xnmc{border:1px solid rgba(127,127,127,.3);border-radius:16px;padding:14px;text-align:center;cursor:pointer;margin:8px 0 10px}
.xnmc b{display:block;font-size:22px;margin:6px 0;unicode-bidi:plaintext}.xnmc small{opacity:.75}
.xnmo{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 12px}
.xrc{max-width:340px;margin:0 auto;font-size:13px;color:#000;direction:rtl}
.xrc h2{text-align:center;margin:0 0 4px;font-size:18px}.xrcm{text-align:center;font-size:11.5px;color:#444;margin:4px 0}
.xrc table{width:100%;border-collapse:collapse;margin:10px 0;font-size:12px}
.xrc th,.xrc td{padding:5px 3px;border-bottom:1px dashed #999;text-align:right}.xrc th{border-bottom:1px solid #000}
.xrct{display:flex;justify-content:space-between;font-size:16px;font-weight:800;border-top:2px solid #000;padding-top:6px;margin-top:4px}
.xrcf{text-align:center;font-size:10px;color:#666;margin-top:12px}
`;document.head.appendChild(s)})();
var XDEVOK=false;
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')XDEVOK=false});

/* --- 1) اسم المكان: تأكيد بـ Yes أو تعديل --- */
askStore=function(rc){
  const o=[],add=s=>{s=(s||'').trim();if(s&&!o.some(x=>normAr(x)===normAr(s)))o.push(s)};
  if(rc.match)add(rc.match.name);(rc.names||[]).slice(0,5).forEach(add);
  NMO=o.slice(0,6);const top=NMO[0]||'',star=!!rc.match,raw=String(rc.raw||'').trim(),hasTxt=raw.replace(/──[^\n]*──/g,'').replace(/⚠️[^\n]*/g,'').replace(/\s+/g,'').length>10;
  const diag=XDEVOK&&raw?`<details class="gen" style="margin:0 0 8px"><summary>🛠️ اللي البرنامج قراه</summary><pre style="white-space:pre-wrap;font:inherit;font-size:11px;max-height:260px;overflow:auto;margin:6px 0">${esc(raw)}</pre></details>`:'';
  return new Promise(res=>{
    sheet(`<h2>🧾 اسم المكان</h2>${diag}
    ${!hasTxt?'<p class="warn">⚠️ البرنامج مقراش كلام واضح من الصورة، اكتب الاسم</p>':''}
    ${top?`<div class="xnmc" id="nm-card" onclick="xNmEdit()"><small>${star?(rc.phMatch?'⭐ عرفته من رقم التليفون':'⭐ متسجل عندك قبل كده'):'🔎 البرنامج قرا'}</small><b id="nm-show">${esc(top)}</b><small>دوس على الاسم عشان تعدّله</small></div>`:''}
    <div id="nm-ed" style="${top?'display:none':''}"><label>اسم المكان<input id="nm-in" list="nm-dl" autocomplete="off" value="${esc(top)}" onkeydown="if(event.key==='Enter')xNmYes()"></label></div>
    <datalist id="nm-dl">${storeCats().map(c=>`<option value="${esc(c.name)}"></option>`).join('')}</datalist>
    <div class="xlna"><button class="btn" onclick="xNmYes()">✅ Yes</button><button class="btn ghost" onclick="xNmEdit()">✏️ عدّل</button></div>
    ${NMO.length>1?`<div class="fl">أو يمكن يكون</div><div class="xnmo">${NMO.slice(1).map((s,i)=>`<button type="button" class="rch" onclick="xNmSet(${i+1})">${esc(s)}</button>`).join('')}</div>`:''}
    <button class="btn ghost" onclick="closeSheet()">إلغاء</button>`);
    NMR=res;
  });
};
function xNmEdit(){const e=$('#nm-ed'),c=$('#nm-card'),i=$('#nm-in');if(e)e.style.display='';if(c)c.style.display='none';if(i){i.focus();try{i.select()}catch(x){}}}
function xNmSet(i){const v=NMO[i];if(!v)return;const inp=$('#nm-in');if(inp)inp.value=v;xNmEdit()}
function xNmYes(){const v=(($('#nm-in')||{}).value||'').trim();if(!v)return toast('اكتب الاسم');const r=NMR;NMR=null;closeSheet();if(r)r({name:v})}

/* --- 2) القراءة: لو ضعيفة، يحسّن الصورة ويقرا تاني وياخد الأحسن --- */
function xRcScore(t){try{const r=parseReceipt(t),its=biParse(t);return(r.TC.length?3:0)+(r.date?1:0)+(r.merchant?1:0)+Math.min(3,its.length)}catch(e){return 0}}
try{CLOUD.forEach(e=>{const f=e[1];e[1]=async function(c){const t1=await f(c);try{if(!t1||xRcScore(t1)>=5)return t1;const t2=await f(prepCanvas(cloneCanvas(c)));return t2&&xRcScore(t2)>xRcScore(t1)?t2:t1}catch(x){return t1}}})}catch(e){}

/* --- 3) قراءة الأصناف تاني: الجديد بس --- */
biReread=async function(id){
  const b=S.buys.find(x=>x.id===id);if(!b)return;const raw=ocrGet(id);if(!biCloudRaw(raw))return toast('مفيش نص محفوظ للريسيت ده');
  const all=biParse(raw.replace(/^──[^\n]*──$/gm,''));if(!all.length)return say('ملقتش أصناف في الريسيت','','🧾');
  const old=biOf(b),same=(x,y)=>Math.abs((+x.v||0)-(+y.v||0))<.01&&sim(x.n,y.n)>=.6,fresh=all.filter(x=>!old.some(y=>same(x,y)));
  if(!fresh.length)return say('كل الأصناف متسجلة ✓',`الـ ${all.length} صنف اللي في الريسيت متسجلين قبل كده`,'🧾');
  const r=await biReview(fresh,r2(b.total-old.reduce((a,x)=>a+(+x.v||0),0)));
  if(r!==null&&r.length){b.items=old.concat(r);save();toast('اتضاف '+r.length+' صنف ✓')}
  buySheet(id)};

/* --- 4) طباعة الريسيت --- */
function xBuyPrint(id){const b=S.buys.find(x=>x.id===id);if(!b)return;const its=biOf(b);
  const h=`<div class="paper"><div class="xrc"><h2>${esc(b.store)}</h2><div class="xrcm">${esc(fdate(b.date))}${b.time?' · '+fmtTime(b.time):''}${b.no?' · فاتورة '+esc(b.no):''}</div>
  ${its.length?`<table><thead><tr><th>الصنف</th><th>الكمية</th><th>السعر</th><th>القيمة</th></tr></thead><tbody>${its.map(x=>`<tr><td>${esc(x.n)}</td><td dir="ltr">${x.q}</td><td dir="ltr">${num(x.p)}</td><td dir="ltr">${num(x.v)}</td></tr>`).join('')}</tbody></table>`:'<p class="xrcm">— مفيش أصناف متسجلة —</p>'}
  <div class="xrct"><span>الإجمالي</span><b dir="ltr">${num(b.total)}</b></div>
  <div class="xrcm">${esc(payLabel(b)||'')} · ${b.deliv?'🛵 دليفري':'🛍️ من المكان'}</div>
  <div class="xrcf">${esc(appName())} · اتطبع ${dmy(today())}</div></div></div>`;
  const pa=$('#printArea');pa.innerHTML=h;document.body.classList.add('printing');
  const done=()=>{document.body.classList.remove('printing');pa.innerHTML='';removeEventListener('afterprint',done)};addEventListener('afterprint',done);setTimeout(()=>window.print(),80)}
try{const _bsP=buySheet;buySheet=function(id){const r=_bsP.apply(this,arguments);try{const sh=$('#sheet');
  const e=sh.querySelector('button[onclick^="biEdit("]');if(e&&!sh.querySelector('[onclick^="xBuyPrint"]'))e.insertAdjacentHTML('beforebegin',`<button class="btn ghost" onclick="xBuyPrint('${id}')">🖨️ اطبع الريسيت</button>`);
  const rr=sh.querySelector('button[onclick^="biReread("]');if(rr)rr.textContent='🔄 اقرا الأصناف الجديدة من الريسيت';
  if(!XDEVOK)sh.querySelectorAll('details').forEach(d=>{if(/اللي البرنامج قراه/.test(d.textContent))d.remove()})}catch(e){}return r}}catch(e){}

/* --- 5) شاشة المطوّر --- */
try{if(!SETS.some(x=>x[0]==='dev'))SETS.push(['dev','🛠️','المطوّر'])}catch(e){}
try{const _vsD=vSettings;vSettings=function(){if(stab!=='dev')return _vsD.apply(this,arguments);
  return `<div class="phead"><button class="mini" onclick="stab='';render()">→</button><h3>🛠️ المطوّر</h3>${XDEVOK?'<button class="mini" onclick="XDEVOK=false;render()">🔒 اقفل</button>':''}</div>`+(XDEVOK?xDevHTML():xDevLock())}}catch(e){}
function xDevLock(){return `<div class="box" style="text-align:center"><div style="font-size:40px">🛠️</div><p class="muted">${S.settings.devPw?'اكتب باسورد المطوّر':'اعمل باسورد للمطوّر (4 حروف على الأقل)'}</p>
  <input id="dv-p" type="password" dir="ltr" onkeydown="if(event.key==='Enter')xDevIn()">${S.settings.devPw?'':'<input id="dv-p2" type="password" dir="ltr" placeholder="اكتبه تاني" style="margin-top:8px">'}
  <button class="btn" onclick="xDevIn()">🔓 ادخل</button></div>`}
async function xDevIn(){const a=($('#dv-p')||{}).value||'';
  if(!S.settings.devPw){const b=($('#dv-p2')||{}).value||'';if(a.length<4)return toast('4 حروف على الأقل');if(a!==b)return toast('الباسوردين مش زي بعض');S.settings.devPw=await hash('dev:'+a);save()}
  else if(await hash('dev:'+a)!==S.settings.devPw)return toast('الباسورد غلط');XDEVOK=true;render()}
function xDevHTML(){const kb=Math.round((localStorage.getItem(KEY)||'').length/1024),om=ocrAll(),B=S.buys.slice().sort(bSort).slice(0,40);
  return `<div class="xlns"><div><small>app.js</small><b>${esc(APP_VERSION)}</b></div><div><small>more.js</small><b>${esc(VER)}</b></div><div><small>fix.js</small><b>${esc(XVER)}</b></div></div>
  <div class="kv"><span>آخر تحديث</span><b>${esc(XVBUILD)}</b></div><div class="kv"><span>حجم البيانات</span><b>${kb} KB</b></div>
  <div class="kv"><span>المرفقات</span><b>${Object.keys(S.fmeta||{}).length} ملف</b></div><div class="kv"><span>العمليات</span><b>${S.txs.length}</b></div>
  <div class="kv"><span>قراءة الريسيت</span><b>${[vKey()?'Google Vision':'',oKey()?'OCR.space':''].filter(Boolean).join(' + ')||'الطريقة العادية'}</b></div>
  <button class="btn ghost" onclick="stab='ocr';render()">🔎 مفاتيح القراءة</button>
  <div class="fl">🧾 الريسيتات (${S.buys.length})</div>
  ${B.length?`<div class="list">${B.map(b=>`<div class="row clk" onclick="buySheet('${b.id}')"><div class="grow"><b>${esc(b.store)}</b><small>${whenTxt(b)} · ${biOf(b).length} صنف${om[b.id]?' · 📝 النص محفوظ':''}</small></div><div class="amt exp">${num(b.total)}</div></div>`).join('')}</div>`:'<p class="empty">مفيش ريسيتات</p>'}
  <div class="fl">🧰 أدوات</div>
  <button class="btn ghost" onclick="go('buy')">🛒 افتح المشتروات</button>
  <button class="btn ghost" onclick="backup()">⬇️ نزّل نسخة من البيانات</button>
  <a class="btn ghost" href="rescue.html" style="display:block;text-align:center;text-decoration:none">🚑 صفحة الإنقاذ</a>
  <button class="btn ghost danger" onclick="xDevOcrClr()">🧹 امسح نصوص القراءة المحفوظة</button>`}
async function xDevOcrClr(){if(!await dlg({title:'مسح نصوص القراءة',msg:'"اقرا الأصناف تاني" مش هتشتغل على الريسيتات القديمة بعد كده.',icon:'🧹',ok:'امسح',cancel:'لا'}))return;localStorage.removeItem(OKEY);render();toast('🧹 اتمسحت')}

/* --- 6) المرفقات: من غير "افتح الكارت"، والقلم يفتح التعديل الكامل --- */
try{const _dsD=docSheet;docSheet=function(id){const r=_dsD.apply(this,arguments);try{const sh=$('#sheet'),lk=linkOf(id);
  sh.querySelectorAll('button').forEach(b=>{if(/افتح الكارت/.test(b.textContent))b.remove()});
  if(lk){const p=sh.querySelector('.phead button[onclick^="docForm"]');if(p)p.setAttribute('onclick',lk.startsWith('c:')?`cardForm('${lk.slice(2)}')`:`renForm('${lk.slice(2)}')`)}}catch(e){}return r}}catch(e){}

/* --- 7) زرار "+ مستند" في صف الأزرار --- */
try{const _rnDc=render;render=function(){const r=_rnDc.apply(this,arguments);try{if(view==='docs'&&dtab==='my'){const v=$('#view'),b=v&&v.querySelector('.etbar button[onclick="addInFold()"]'),t=v&&v.querySelector('.tabs.ctabs');
  if(b&&t){const bar=b.parentElement;b.className='';b.style.fontWeight='800';t.insertBefore(b,t.firstChild);if(bar&&!bar.children.length)bar.remove()}}}catch(e){}return r}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.59 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xub{position:fixed;left:50%;bottom:calc(var(--navh,64px) + 12px);transform:translate(-50%,180%);z-index:3550;display:flex;align-items:center;gap:8px;padding:6px 6px 6px 14px;border-radius:30px;background:#111827;color:#fff;font-size:13px;font-weight:700;box-shadow:0 10px 26px rgba(0,0,0,.45);transition:transform .3s;white-space:nowrap}
.xub.on{transform:translate(-50%,0)}
.xub button{border:0;border-radius:20px;padding:7px 14px;font:inherit;font-weight:800;background:var(--p);color:#fff;cursor:pointer}
.xub .x{background:rgba(255,255,255,.15);padding:7px 10px}
#toast{bottom:calc(var(--navh,64px) + 70px)!important}
.xnb{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;flex-basis:100%}.xnb .mini{flex:1;min-width:64px;height:32px}
.xccrc{border:1px solid #a855f7!important;border-radius:12px;background:color-mix(in srgb,#a855f7 10%,var(--card,#fff))!important}
.xccrc .amt{color:#a855f7!important}
.xtype{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:8px 0 10px}
.xtype button{border:1px solid rgba(148,163,184,.3);border-radius:16px;padding:16px 8px;background:var(--card,#fff);color:inherit;font:inherit;font-weight:800;display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer}
.xtype button span{font-size:28px}.xtype button small{font-weight:600;color:var(--tx2,#64748b);font-size:11px}
#sheet .pt{table-layout:fixed;width:100%}#sheet .tbl{overflow-x:hidden!important}
#sheet .pt td,#sheet .pt th{padding:4px 2px!important;white-space:normal}
#sheet .pt th:first-child,#sheet .pt td:first-child{width:22px}
#sheet .pt th:last-child,#sheet .pt td:last-child{width:34px}
#sheet .pt input,#sheet .pt .xsel{min-width:0!important;width:100%;font-size:12px!important;padding:4px 6px!important;min-height:34px!important}
#sheet .pt .xsel .xl small,#sheet .pt .xsel .xic0,#sheet .pt .xsel::after{display:none}
.xccb .kv{flex-wrap:wrap}.xccb .kv>b{direction:ltr}
.xcld>summary{list-style:none;cursor:pointer}.xcld>summary::-webkit-details-marker{display:none}
.xcld[open]{border-color:var(--p)!important}
`;document.head.appendChild(s)})();

/* --- أدوات --- */
function xDW(d){return d?(XWD[new Date(d+'T12:00:00').getDay()]+' '+dmy(d)):'—'}
function xSegOn(b){b.parentNode.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b))}
xStChip=function(d){const td=today();return d<td?xCh('late','⚠️ متأخر'):d===td?xCh('tdy','🔔 اليوم'):xCh('up','⏳ منتظر')};
xOldBtn=function(){return ''};

/* ========== Undo + سلة المحذوفات ========== */
var XUND=[],XUNDOING=true,XLAST=null,XUBT=0,XIDS=null,XTRSKIP=false,XTRK='centric-trash';
var XCOLS=['txs','cats','plans','contacts','docs','cards','renew','buys','methods','cash'];
function xTrGet(){try{return JSON.parse(localStorage.getItem(XTRK)||'[]')}catch(e){return[]}}
function xTrSet(a){try{localStorage.setItem(XTRK,JSON.stringify(a.slice(-300)))}catch(e){toast('سلة المحذوفات ممتلئة')}}
function xArr(o,k){return k==='xln'||k==='xcl'?((o.settings||{})[k]||[]):(o[k]||[])}
function xArrRef(k){if(k==='xln')return XLN();if(k==='xcl')return XCL();return S[k]=S[k]||[]}
function xIdsOf(o){const m={};XCOLS.concat(['xln','xcl']).forEach(k=>{m[k]=new Set(xArr(o,k).map(x=>x&&x.id))});return m}
function xTrLbl(k,x,o){
  if(k==='txs'){const cn=((o.cats||[]).find(c=>c.id===x.cat)||{}).name;return(x.type==='tr'?'🔁 تحويل':x.type==='inc'?'💰 '+(cn||'تحصيل'):'💸 '+(cn||'مصروف'))+' · '+num(x.amount)+' · '+dmy(x.date)}
  return({cats:'📋 بند: ',plans:'🏦 أقساط: ',contacts:'📇 ',docs:'📎 ',cards:'💳 ',renew:'🪪 ',methods:'🏦 حساب: ',xcl:'👥 عميل: '}[k]||'')+
    (k==='buys'?'🧾 ريسيت '+(x.store||'')+' · '+num(x.total):k==='cash'?'🏧 سحب كاش '+num(x.amount)+' · '+dmy(x.date):k==='xln'?'🤝 سلفة '+x.who+' · '+num(x.amt):(x.name||''));
}
function xAfterSave(){
  const now=localStorage.getItem(KEY);if(now==null||now===XLAST)return;
  const prev=XLAST;XLAST=now;
  if(XUNDOING||prev==null){XIDS=xIdsOf(S);return}
  XUND.push(prev);if(XUND.length>20)XUND.shift();
  const cur=xIdsOf(S);
  if(XIDS&&!XTRSKIP){const gone=[];Object.keys(cur).forEach(k=>XIDS[k].forEach(id=>{if(id&&!cur[k].has(id))gone.push([k,id])}));
    if(gone.length){let o=null;try{o=JSON.parse(prev)}catch(e){}
      if(o){const tr=xTrGet(),at=Date.now();gone.forEach(([k,id])=>{const x=xArr(o,k).find(y=>y&&y.id===id);if(!x)return;if(k==='cats'&&/^مصاريف إنستاباي/.test(x.name||''))return;tr.push({k,o:x,at,l:xTrLbl(k,x,o)})});xTrSet(tr)}}}
  XIDS=cur;xUndoBar();
}
try{const _svX=save;save=function(){const r=_svX.apply(this,arguments);try{xAfterSave()}catch(e){}return r}}catch(e){}
function xUndoBar(){
  if($('#lock').classList.contains('on'))return;
  let b=$('#xub');if(!b){b=document.createElement('div');b.id='xub';b.className='xub';document.body.appendChild(b)}
  b.innerHTML=`<span>تم الحفظ</span><button onclick="xUndo()">↩️ Undo${XUND.length>1?' ('+XUND.length+')':''}</button><button class="x" onclick="this.parentNode.classList.remove('on')">✕</button>`;
  b.classList.add('on');clearTimeout(XUBT);XUBT=setTimeout(()=>b.classList.remove('on'),6000);
}
function xUndo(){
  const p=XUND.pop();if(!p)return toast('لا توجد خطوات للتراجع');
  XUNDOING=true;
  try{S=normalize(JSON.parse(p));localStorage.setItem(KEY,p);XLAST=p;XIDS=xIdsOf(S);
    try{AMTS=amtSnap()}catch(e){}try{TXIDS=new Set(S.txs.map(t=>t.id));TXSNAP=snapTx()}catch(e){}
    const tr=xTrGet().filter(e=>!xArr(S,e.k).some(x=>x&&e.o&&x.id===e.o.id));xTrSet(tr);
    closeSheet();try{$('#rv').classList.remove('on')}catch(e){}render();
  }finally{XUNDOING=false}
  toast('↩️ تم التراجع عن آخر خطوة');
  if(XUND.length)xUndoBar();else{const b=$('#xub');if(b)b.classList.remove('on')}
}
function xRelink(k,o){
  if(k!=='txs'||!o.src)return;const s=o.src;
  if(s.k==='r'){const c=C(s.id);if(c){c.st=c.st||{};c.st[s.p]={st:'done',txId:o.id,at:Date.now()}}}
  if(s.k==='i'){const p=plan(s.id),it=p&&p.items.find(x=>x.id===s.p);if(it&&!itTx(it))it.txId=o.id}
}
function xTrPut(e){const arr=xArrRef(e.k);if(!arr.some(x=>x&&x.id===e.o.id)){arr.push(e.o);xRelink(e.k,e.o)}}
function xTrRestore(i){const tr=xTrGet(),e=tr[i];if(!e)return;xTrPut(e);tr.splice(i,1);xTrSet(tr);save();render();toast('♻️ تم الاسترجاع')}
function xTrAll(){const tr=xTrGet();if(!tr.length)return;['methods','cats','plans','xcl','xln','txs','buys','contacts','docs','cards','renew','cash'].forEach(k=>tr.filter(e=>e.k===k).forEach(xTrPut));xTrSet([]);save();render();toast('♻️ تم استرجاع الكل')}
function xTrDel(i){const tr=xTrGet();tr.splice(i,1);xTrSet(tr);render()}
async function xTrEmpty(){if(!await ask('تفريغ سلة المحذوفات؟','سيتم حذف كل ما بها نهائيًا ولا يمكن استرجاعه.',{danger:true,icon:'🗑',ok:'Empty'}))return;xTrSet([]);gcFiles();render();toast('تم تفريغ السلة')}
gcFiles=async function(){
  if(DEMO)return;
  try{const ref=new Set();
    S.txs.forEach(t=>(t.files||[]).forEach(i=>ref.add(i)));S.docs.forEach(d=>(d.files||[]).forEach(i=>ref.add(i)));S.plans.forEach(p=>(p.files||[]).forEach(i=>ref.add(i)));
    S.cats.forEach(c=>(c.files||[]).forEach(i=>ref.add(i)));S.renew.forEach(r=>(r.files||[]).forEach(i=>ref.add(i)));S.buys.forEach(b=>{if(b.fid)ref.add(b.fid)});
    xTrGet().forEach(e=>{const o=e.o||{};(o.files||[]).forEach(i=>ref.add(i));if(o.fid)ref.add(o.fid)});
    for(const k of await FDB.keys())if(!ref.has(k))await FDB.del(k);
    Object.keys(S.fmeta).forEach(id=>{if(!ref.has(id))delete S.fmeta[id]});save();
  }catch(e){}
};
XVW.xtr=()=>{const tr=xTrGet();
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🗑 سلة المحذوفات</h3></div>`+
  (tr.length?`<div class="xlna"><button class="btn" onclick="xTrAll()">♻️ استرجاع الكل (${tr.length})</button><button class="btn ghost danger" onclick="xTrEmpty()">🗑 Empty</button></div>
  <div class="list">${tr.map((e,i)=>({e,i})).reverse().map(({e,i})=>`<div class="row"><div class="grow"><b>${esc(e.l)}</b><small>تاريخ الحذف: ${xLnTs(e.at)}</small></div><button class="mini pri" onclick="xTrRestore(${i})">♻️ استرجاع</button><button class="mini ic danger" onclick="xTrDel(${i})">✕</button></div>`).join('')}</div>`
  :'<div class="nempty"><div>🗑</div><b>السلة فارغة</b></div>');
};

/* ========== التحصيل الجزئي: يرجع للمبلغ الأصلي عند الحذف أو الإلغاء ========== */
try{const _psP=xPartialSave;xPartialSave=function(id){const n0=S.txs.length,r=_psP.apply(this,arguments);try{if(S.txs.length>n0){const t=S.txs[S.txs.length-1];if(t&&!t.partOf){t.partOf=id;save()}}}catch(e){}return r}}catch(e){}
function xPartSync(){let ch=0;S.txs.slice().forEach(t=>{if(!t.partOf||!t.pend)return;const p=S.txs.find(x=>x.id===t.partOf);if(!p||!p.pend)return;p.amount=r2(p.amount+t.amount);S.txs=S.txs.filter(x=>x!==t);ch=1});if(ch){XTRSKIP=true;try{save()}finally{XTRSKIP=false}}}
try{const _rnP2=render;render=function(){try{xPartSync()}catch(e){}return _rnP2.apply(this,arguments)}}catch(e){}

/* ========== حذف العملية يحذف كل ما يرتبط بها ========== */
try{const _dtL=delTx;delTx=async function(){
  const id=F&&F.id,t0=id&&S.txs.find(t=>t.id===id),cp=t0?{...t0}:null;const r=await _dtL.apply(this,arguments);
  try{if(cp&&!S.txs.some(t=>t.id===id)){let ch=false;
    const rel=S.txs.filter(t=>t.payFeeOf===id||t.feeOf===id);if(rel.length){S.txs=S.txs.filter(t=>!rel.includes(t));ch=true}
    S.txs.forEach(t=>{if(t.xref===id){delete t.xref;ch=true}});
    if(cp.partOf){const p=S.txs.find(t=>t.id===cp.partOf);if(p&&p.pend){p.amount=r2(p.amount+cp.amount);ch=true}}
    if(cp.src&&cp.src.k==='r'&&cp.type==='inc'){const c=C(cp.src.id);if(c&&c.st&&c.st[cp.src.p]&&c.st[cp.src.p].txId===id){delete c.st[cp.src.p];ch=true}}
    if(ch){save();render()}toast('تم الحذف · يمكنك استرجاعها من سلة المحذوفات')}}catch(e){}return r}}catch(e){}

/* ========== تأكيد التحصيل / الدفع بتاريخ ========== */
function xColSheet(id){const t=S.txs.find(x=>x.id===id);if(!t||!t.pend)return;const inc=t.type==='inc';
  sheet(`<h2>${inc?'✅ تأكيد التحصيل':'✅ تأكيد الدفع'}</h2>
  <div class="kv"><span>${esc(C(t.cat)?.name||'')}</span><b>${fmt(t.amount)}</b></div>
  <div class="kv"><span>📅 موعد السداد</span><b>${xDW(t.date)}</b></div>
  <label>${inc?'📅 تاريخ التحصيل':'📅 تاريخ الدفع'}<input id="xc-d" type="date" value="${today()}"></label>
  <div class="two"><label>الحساب<select id="xc-m">${opt(S.methods.filter(m=>m.active||m.id===t.method),t.method)}</select></label><label>الطريقة<select id="xc-v">${viaOpts(t.via)}</select></label></div>
  <button class="btn" onclick="xColSave('${id}')">✅ تأكيد</button><button class="btn ghost" onclick="closeSheet()">إلغاء</button>`)}
function xColSave(id){const t=S.txs.find(x=>x.id===id);if(!t)return;const d=$('#xc-d').value;if(!d)return toast('اختر التاريخ');if(isClosed(d))return toast('هذا الشهر مقفول');
  t.due=t.date;t.pend=false;t.date=d;t.method=$('#xc-m').value;t.via=$('#xc-v').value;save();closeSheet();render();refreshRV();toast((t.type==='inc'?'تم التحصيل ':'تم الدفع ')+fmt(t.amount))}
try{const _tdX=txDone;txDone=function(id,el){const t=S.txs.find(x=>x.id===id);if(t&&t.pend){if(el)el.checked=false;return xColSheet(id)}return _tdX.apply(this,arguments)}}catch(e){}
xQDone=function(id){xColSheet(id)};
try{const _rtX=recToggle;recToggle=function(id,k,el){const r=C(id),s=r&&stOf(occRec(r,k));if(s&&s.st==='wait'){if(el)el.checked=false;return occSheet(id,k)}return _rtX.apply(this,arguments)}}catch(e){}
try{const _osX=occSheet;occSheet=function(id,k){const r=_osX.apply(this,arguments);try{const rr=C(id),d=$('#k-d');
  if(d&&rr){d.value=today();const l=d.closest('label');if(l&&l.firstChild&&l.firstChild.nodeType===3)l.firstChild.nodeValue=rr.kind==='exp'?'📅 تاريخ الدفع':'📅 تاريخ التحصيل';
    const la=$('#k-amt')&&$('#k-amt').closest('label');if(la&&!$('#xk-due'))la.insertAdjacentHTML('beforebegin',`<div class="kv" id="xk-due"><span>📅 موعد السداد</span><b>${xDW(occDate(rr,k))}</b></div>`)}}catch(e){}return r}}catch(e){}

/* ========== التأجيل بتأكيد وتاريخ ========== */
function xPost(id){const t=S.txs.find(x=>x.id===id);if(!t)return;const nd=addMonths(t.date<today()?today():t.date,1);
  sheet(`<h2>⏭ تأجيل ${esc(C(t.cat)?.name||'')}</h2><div class="kv"><span>الموعد الحالي</span><b>${xDW(t.date)}</b></div>
  <label>📅 الموعد الجديد<input id="xp-d" type="date" value="${nd}"></label>
  <button class="btn" onclick="xPostSv('${id}')">⏭ تأجيل</button><button class="btn ghost" onclick="closeSheet()">إلغاء</button>`)}
function xPostSv(id){const t=S.txs.find(x=>x.id===id),d=($('#xp-d')||{}).value;if(!t||!d)return toast('اختر التاريخ');t.date=d;t.post=(t.post||0)+1;save();closeSheet();render();toast('تم التأجيل إلى '+xDW(d))}

/* شاشة غير محصّل: بوكسات */
pendingSheet=function(){const items=sortList(pendAll());
  const card=x=>{if(x.o){const o=x.o;return xCard({ic:'📌',title:esc(o.r.name),amt:num(o.amt),sub:'موعد السداد '+xDW(o.date),chip:xStChip(o.date),btns:xB(`occSheet('${o.r.id}',${o.k})`,'✅ تم التحصيل')+xB(`catForm('${o.r.id}')`,'⚙️ البند',1)})}
    const t=x.t;return xCard({ic:'⏳',title:esc(C(t.cat)?.name||'—')+xClTag(t),amt:num(t.amount),sub:'موعد السداد '+xDW(t.date)+(t.post?' · تم التأجيل '+t.post+' مرة':''),chip:xStChip(t.date),
      btns:xB(`xColSheet('${t.id}')`,'✅ تم التحصيل')+xB(`xPartial('${t.id}')`,'💵 جزء',1)+xB(`xPost('${t.id}')`,'⏭ تأجيل',1)})};
  sheet(`<div class="phead"><h2>💼 غير محصّل</h2><span class="badge ${items.length?'late':'done'}">${items.length||'✓'}</span></div>
  ${items.length?items.map(card).join(''):'<div class="nempty"><div>✅</div><b>تم تحصيل كل المبالغ</b></div>'}
  ${repBtn('تقرير التحصيلات',"openRep('cols',()=>RF.month=NKM)")}`)};

/* ========== شاشتا التحصيلات والمصروفات: الترتيب القديم بالبوكسات ========== */
vCol=function(){return XVOLD.col().replace('💳 تحصيل لحساب الكريديت','💜 تحصيل مقابل دفع كريديت')};
vExps=function(){return XVOLD.exps()};
delete S.settings.xoldv;
try{const _xmD=xMeta;xMeta=function(t){const a=_xmD.apply(this,arguments);try{if(a[0]&&Array.isArray(a[0]))a[0][0]='📅 '+xDW(t.date)}catch(e){}return a}}catch(e){}
try{const _frD=fixedRow;fixedRow=function(o){let h=_frD.apply(this,arguments);try{if(o.s.st==='done'&&o.s.t){const inc=o.r.kind==='inc',W=inc?'محصّل':'مدفوع';
  h=h.replace(W+' '+dmy(o.s.t.date),(inc?'تاريخ التحصيل ':'تاريخ الدفع ')+xDW(o.s.t.date)+' · موعد السداد '+dmy(o.date))}}catch(e){}return h}}catch(e){}
try{const _trC2=txRow;txRow=function(t){let h=_trC2.apply(this,arguments);try{
  h=h.replace(/onclick="postpone\('([^']+)'\)">⏭ أجّل للشهر الجاي/g,'onclick="xPost(\'$1\')">⏭ تأجيل');
  if(t&&t.ccr&&t.type==='inc')h=h.replace('<div class="ckx">','<div class="ckx xccrc">').replace('</b><small','</b><span class="xclb" style="background:#f3e8ff;color:#7e22ce">💜 تحصيل مقابل دفع كريديت</span><small')}catch(e){}return h}}catch(e){}

/* الشهر يرجع للحالي عند فتح الشاشة من جديد */
var XKM=false;
gocol=function(k){XKM=true;if(k){const[y,m]=k.split('-').map(Number);cur.y=y;cur.m=m}go('col')};
goexp=function(k){XKM=true;if(k){const[y,m]=k.split('-').map(Number);cur.y=y;cur.m=m}go('exps')};
try{const _goM=go;go=function(v){if(v!==view&&!XKM&&['col','exps','cash','trs','annual','xcw'].includes(v)){cur.y=NY;cur.m=NM}XKM=false;return _goM.apply(this,arguments)}}catch(e){}

/* ========== اختيار نوع العملية عند الإضافة ========== */
try{const _ntT=newTx;newTx=function(type,skip){
  if(skip||type==='tr')return _ntT.apply(this,[type]);
  const inc=type==='inc';F=null;
  const L=inc?[['fix','📌','ثابت','تحصيل متكرر'],['cl','👥','تحصيل عميل','مرتبط بالعميل'],['other','💵','أخرى','تحصيل لمرة واحدة'],['ccr','💜','مقابل دفع كريديت','لا يُحسب في التحصيلات']]
    :[['fix','📌','ثابت','مصروف متكرر'],['bill','🧾','فاتورة','كهرباء، غاز، مياه...'],['other','🛒','أخرى','مشتريات وغيرها'],['loan','🤝','سلفة','تسجيل سلفة جديدة']];
  sheet(`<h2>${inc?'💰 تحصيل جديد':'💸 مصروف جديد'}</h2><p class="muted">اختر نوع العملية</p>
  <div class="xtype">${L.map(([k,ic,l,s])=>`<button type="button" onclick="xNewPick('${type}','${k}')"><span>${ic}</span>${l}<small>${s}</small></button>`).join('')}</div>
  ${inc?'':'<button class="btn ghost" onclick="scanReceipt()">📷 Receipt Scan</button>'}`);
}}catch(e){}
function xNewPick(type,k){
  if(k==='loan'){closeSheet();return xLnNew()}
  newTx(type,1);if(!F)return;
  if(k==='fix')F.fix=true;if(k==='bill'){F.isBill=true;F.feeOn=false}if(k==='ccr')F.ccr=true;
  SHKEEP=1;txForm();if(k==='cl')try{xClFM(1)}catch(e){}
}
quickTx=function(id){const c=C(id);if(!c)return;newTx(c.kind,1);if(!F||F.type!==c.kind)return;F.cat=id;if(c.acct&&M(c.acct))F.method=c.acct;if(c.via)F.via=c.via;if(c.fixed)F.amount=c.amount?amtStr(c.amount):'';txForm()};
xNewBill=function(){newTx('exp',1);if(F&&F.type==='exp'){F.isBill=true;F.feeOn=false;SHKEEP=1;txForm()}};
xNewLoan=function(){xLnNew()};
xShareNew=function(k){const ids=XSHIDS;closeSheet();newTx(k,1);if(F){F.files=(F.files||[]).concat(ids);if(k==='exp')F.via='instapay';SHKEEP=1;txForm()}};
xCcMiss=function(d){const c=XCC,k=xCcCalc(c.id);closeSheet();XCCBACK={x:{...c}};newTx('exp',1);if(!F)return;F.method=c.id;F.via='card';F.amount=amtStr(d);F.date=isClosed(k.we)?today():k.we;SHKEEP=1;txForm()};

/* شاشة العملية: الإكرامية في "أخرى" فقط، وإعدادات البند الثابت، وموعد السداد */
try{const _tfV=txForm;txForm=function(){const r=_tfV.apply(this,arguments);try{xTfPost()}catch(e){}return r}}catch(e){}
function xTfPost(){
  const sz=$('#sheet .sz');if(!sz||!F)return;const o=F.id&&S.txs.find(t=>t.id===F.id),cur=F.cat&&F.cat!=='__new'&&C(F.cat);
  const tp=$('#f-tip');if(tp&&(F.fix||F.isBill||(cur&&cur.fixed))){const l=tp.closest('label');if(l)l.remove()}
  if(o&&o.src&&o.src.k==='r'&&C(o.src.id)&&!$('#xfx-b')){const xs=sz.querySelector('button.xsel[onclick="xCatOpen()"]'),a=xs&&(xs.closest('label')||xs);
    if(a)a.insertAdjacentHTML('afterend',`<button type="button" id="xfx-b" class="btn ghost" onclick="grab();XCATBACK=true;catForm('${o.src.id}')">📌 إعدادات البند الثابت (التكرار، التقسيط للغير)</button>`)}
  sz.querySelectorAll('button[onclick^="postpone("]').forEach(b=>{const m=b.getAttribute('onclick').match(/postpone\('([^']+)'\)/);if(m){b.setAttribute('onclick',`xPost('${m[1]}')`);b.textContent='⏭ تأجيل الموعد'}});
  if(o&&!o.pend&&!$('#xdue')){let due=o.due;if(!due&&o.src&&o.src.k==='r'){const c=C(o.src.id);if(c)due=occDate(c,o.src.p)}
    const d=$('#f-d'),l=d&&d.closest('label');if(l&&o.type!=='tr'){if(l.firstChild&&l.firstChild.nodeType===3)l.firstChild.nodeValue=o.type==='inc'?'📅 تاريخ التحصيل':'📅 تاريخ الدفع';
      if(due&&due!==o.date)l.parentElement.insertAdjacentHTML('beforebegin',`<div class="kv" id="xdue"><span>📅 موعد السداد</span><b>${xDW(due)}</b></div>`)}}
}

/* البند الثابت: تقسيط للغير بتاريخ انتهاء + تعديل يوم الموعد */
try{const _okE=occK;occK=function(r,key){const k=_okE.apply(this,arguments);if(k>=0&&r&&r.end&&occDate(r,k)>r.end)return -1;return k}}catch(e){}
try{const _csP=catSheet;catSheet=function(){const r=_csP.apply(this,arguments);try{const c=CF;if(!c)return r;
  if(c.kind==='inc'&&c.fixed&&!$('#cf-p3')){const ev=$('#cf-every'),l=ev&&ev.closest('label'),row=l&&l.parentElement;
    if(row)row.insertAdjacentHTML('afterend',`<label class="chk fxbox"><input type="checkbox" id="cf-p3" ${c.p3?'checked':''} onchange="grabCF();catSheet()"> 🤝 تقسيط للغير (له تاريخ انتهاء)</label>${c.p3?`<label>📅 تاريخ الانتهاء<input id="cf-end" type="date" value="${c.end||''}"></label>`:''}`)}
  const st=$('#cf-start');if(st&&st.disabled&&c.id){st.disabled=false;const l=st.closest('label');if(l)l.insertAdjacentHTML('beforeend','<small class="muted" style="display:block">يمكن تغيير يوم الموعد فقط</small>')}
}catch(e){}return r}}catch(e){}
try{const _gcP=grabCF;grabCF=function(){_gcP.apply(this,arguments);if(!CF)return;if($('#cf-p3'))CF.p3=$('#cf-p3').checked;if($('#cf-end'))CF.end=$('#cf-end').value}}catch(e){}
try{const _cvM=catSave;catSave=function(){grabCF();
  const o=CF&&CF.id&&C(CF.id);
  if(o&&o.start&&Object.keys(o.st||{}).length&&CF.start&&CF.start.slice(0,7)!==o.start.slice(0,7)){CF.start=o.start;return toast('يمكن تغيير يوم الموعد فقط داخل نفس الشهر')}
  if(CF&&CF.kind==='inc'&&CF.fixed&&CF.p3&&!CF.end)return toast('اختر تاريخ الانتهاء');
  const p3=!!(CF&&CF.p3&&CF.fixed),end=CF&&CF.end||'',id0=CF&&CF.id,n0=S.cats.length,r=_cvM.apply(this,arguments);
  try{const t=id0?C(id0):(S.cats.length>n0?S.cats[S.cats.length-1]:null);if(t&&t.kind==='inc'){if(p3){t.p3=true;t.end=end}else{delete t.p3;delete t.end}save()}}catch(e){}return r}}catch(e){}

/* ========== الريسيت: شاشة واحدة فيها الفاتورة والإكرامية ========== */
var XRC2=null;
receiptFlow=async function(rc,fid){
  rc=Object.assign(EMPTYRC(),rc||{});
  if(rc.err)toast('⚠️ تعذرت القراءة، أكمل يدويًا');
  const pick=await askStore(rc);if(!pick)return toast('تم الإلغاء');
  const n=pick.name;
  const cat=(rc.match&&normAr(rc.match.name)===normAr(n))?rc.match:(S.cats.find(c=>c.kind==='exp'&&normAr(c.name)===normAr(n))||ensureCat(n,'exp'));
  if(rc.match&&rc.match.id!==cat.id)unlearn(rc.match,rc.matchBy);learnAlias(cat,rc);cat.active=true;
  const card=rc.card,cashM=S.methods.find(m=>m.active&&m.type==='cash');let method,via;
  if(card&&M(card.acct)){method=card.acct;via='card'}else if(rc.cash&&cashM){method=cashM.id;via='cash'}else{method=cat.acct&&M(cat.acct)?cat.acct:defMethod();via=cat.via||''}
  const bill=!!cat.xbill||/(غاز|كهرباء|مياه|مياة|انترنت|إنترنت|اتصالات|vodafone|orange|petrotrade|بتروتريد|تاون\s*جاس|town\s*gas|electric|water)/i.test(String(rc.raw||'')+' '+n);
  XRC2={rc,fid,cat,method,via,card,bill,deliv:!!rc.deliv,tip:'',a:rc.total?amtStr(rc.total):'',date:(rc.date&&!isClosed(rc.date))?rc.date:today()};
  xRcSheet();
};
function xRcSheet(){const x=XRC2;if(!x)return;
  sheet(`<h2>🧾 ${esc(x.cat.name)}</h2>
  ${x.fid?`<div class="files">${fileThumb(x.fid,'view')}</div>`:''}
  <label>💰 المبلغ<input id="rc-a" class="amt-in" inputmode="decimal" dir="ltr" value="${esc(x.a)}"></label>
  <div class="xchips"><button type="button" class="xchip ${x.bill?'on':''}" onclick="xRcGrab();XRC2.bill=!XRC2.bill;SHKEEP=1;xRcSheet()">🧾 فاتورة</button></div>
  ${x.bill?'':`<label>🎁 إكرامية (اختياري)<input id="rc-t" inputmode="decimal" dir="ltr" placeholder="0" value="${esc(x.tip)}"></label>`}
  <div class="seg"><button type="button" class="${x.deliv?'':'on'}" onclick="xRcGrab();XRC2.deliv=false;SHKEEP=1;xRcSheet()">🛍️ من المكان</button><button type="button" class="${x.deliv?'on':''}" onclick="xRcGrab();XRC2.deliv=true;SHKEEP=1;xRcSheet()">🛵 توصيل</button></div>
  <div class="two"><label>الحساب<select id="rc-m">${opt(S.methods.filter(m=>m.active||m.id===x.method),x.method)}</select></label><label>الطريقة<select id="rc-v">${viaOpts(x.via)}</select></label></div>
  <label>📅 التاريخ<input id="rc-d" type="date" value="${x.date}"></label>
  <p class="muted">${(x.rc.items||[]).length?'🧾 تمت قراءة '+x.rc.items.length+' صنف، وستظهر للمراجعة بعد الحفظ':'لم تتم قراءة الأصناف، ويمكن إضافتها لاحقًا من صفحة الريسيت'}</p>
  <button class="btn" onclick="xRcSave()">✅ حفظ</button><button class="btn ghost" onclick="XRC2=null;closeSheet()">إلغاء</button>`)}
function xRcGrab(){const x=XRC2;if(!x||!$('#rc-a'))return;x.a=$('#rc-a').value;if($('#rc-t'))x.tip=$('#rc-t').value;x.method=$('#rc-m').value;x.via=$('#rc-v').value;x.date=$('#rc-d').value}
function xRcSave(){xRcGrab();const x=XRC2;if(!x)return;const a=parseNum(x.a);
  if(!(a>0))return toast('اكتب المبلغ');if(!x.date)return toast('اختر التاريخ');if(isClosed(x.date))return toast('هذا الشهر مقفول');if(!x.method)return toast('اختر الحساب');
  const old=findDup(x.cat,a,x.date,x.rc);if(old){DUPX={old,go:xRcFinish};dupSheet(old);return}xRcFinish()}
async function xRcFinish(){const x=XRC2;XRC2=null;if(!x)return;closeSheet();
  const a=parseNum(x.a),tip=x.bill?0:(parseNum(x.tip)||0),tot=r2(a+tip);
  let items=[];if((x.rc.items||[]).length){const r=await biReview(x.rc.items,a);items=r===null?x.rc.items.map(i=>({...i})):r}
  if(tip>0)items.push({n:'🎁 إكرامية',q:1,p:tip,v:tip});
  const t={id:uid(),type:'exp',amount:tot,cat:x.cat.id,method:x.method,via:x.via,date:x.date,note:'🧾'+(x.deliv?' 🛵':'')+(x.card?' •••• '+x.card.last4:''),files:x.fid?[x.fid]:[],created:Date.now()};
  if(x.bill){t.bill=true;x.cat.xbill=1}if(tip>0)t.tip=tip;S.txs.push(t);
  const b={id:uid(),date:x.date,time:x.rc.time||(x.date===today()?nowTime():''),rt:x.rc.time||'',no:x.rc.no||'',txId:t.id,catId:x.cat.id,store:x.cat.name,items,total:tot,method:x.method,via:x.via,card:x.card?x.card.last4:'',deliv:x.deliv,fid:x.fid,ph:x.rc.ph||''};
  S.buys.push(b);save();render();if(x.rc.raw)ocrSave(b.id,x.rc.raw);contactFromReceipt(x.rc,x.cat);
  banner('🧾','تم تسجيل '+fmt(tot),x.cat.name,()=>buySheet(b.id),'ok')}
/* الأصناف: لو الطريقة الأساسية لم تجد شيئًا، يقرأ كل سطر فيه اسم ومبلغ */
try{const _bpX=biParse;biParse=function(text){let r=[];try{r=_bpX.apply(this,arguments)}catch(e){}if(r&&r.length)return r;
  try{const out=[];for(const l of splitLines(text)){if(BI_STOP.test(l))break;if(BI_META.test(l)||PHK.test(l)||ADRW.test(l)||VEND.test(l)||SKIPM.test(l))continue;
    const cl=biClean(l),ns=(cl.match(/\d+(?:\.\d{1,2})?/g)||[]).map(Number).filter(x=>x>0&&x<100000),name=cl.replace(/[^A-Za-z\u0621-\u064A\s]/g,' ').replace(/\s+/g,' ').trim();
    if(name.replace(/\s/g,'').length<3||!ns.length)continue;const v=ns[ns.length-1];if(!(v>=1))continue;let q=1,p=v;
    if(ns.length>=2&&ns[0]>0&&ns[0]<100&&ns[0]!==v){q=ns[0];p=r2(v/q)}out.push({n:name,q,p,v})}return out.slice(0,40)}catch(e){return[]}}}catch(e){}

/* ========== الإشعارات: كتم، تأجيل، حذف، تذكيرات، وتنبيه الكاش ========== */
var XNKEY='centric-nctl';
function xNC(){try{return JSON.parse(localStorage.getItem(XNKEY)||'{}')}catch(e){return{}}}
function xNCset(o){localStorage.setItem(XNKEY,JSON.stringify(o))}
function xNBase(id){const p=String(id).split('-');if(['cashlow','backup','close'].includes(p[0]))return p[0];return p.length>1?p[0]+'-'+p[1]:p[0]}
function xRemNext(r){if(!r||!r.d)return null;let d=r.d;if(!r.last)return d;if((r.rep||'none')==='none')return null;let n=0;while(d<=r.last&&n++<600)d=addMonths(d,r.rep==='y'?12:1);return d}
try{const _alN=alerts;alerts=function(){let out=_alN.apply(this,arguments);try{const td=today();
  (S.settings.xrem||[]).forEach(r=>{if(r.off)return;const d=xRemNext(r);if(!d)return;const left=daysBetween(d,td);if(left>(+r.lead||0))return;
    out.push({id:'u-'+r.id+'-'+d,ic:r.ic||'⏰',lv:left<0?'late':'soon',title:left<0?r.t+' · متأخر '+(-left)+' يوم':left===0?'اليوم: '+r.t:r.t+' · بعد '+left+' يوم',body:xDW(d)+(r.n?' · '+r.n:''),go:`xRemOpen('${r.id}','${d}')`})});
  const ca=xCashAcct(),th=S.settings.cashLow==null?200:parseFloat(S.settings.cashLow);
  if(ca&&th>=0&&!DEMO){const b=xBal(ca);if(b<=th)out.unshift({id:'cashlow-'+td,ic:'🚨',lv:'late',urgent:1,title:'عاجل: رصيد الكاش منخفض',body:b<=0?'لا يوجد معك كاش':'المتبقي '+fmt(b)+' فقط',go:`go('pmv')`})}
  out=out.filter(a=>{const m=String(a.id).match(/^[fc]-(.+)-(\d+)$/);if(!m)return true;const c=C(m[1]);return !(c&&c.end&&occDate(c,+m[2])>c.end)});
  const nc=xNC();out=out.filter(a=>{if(nc['m:'+xNBase(a.id)])return false;const x=nc[a.id];if(!x)return true;if(x.del)return false;if(x.until&&x.until>td)return false;return true});
}catch(e){}return out}}catch(e){}
openNotifs=function(){
  const all=alerts(),un=all.filter(a=>!READ[a.id]),rd=all.filter(a=>READ[a.id]),nc=xNC(),td=today(),muted=Object.keys(nc).filter(k=>k.startsWith('m:')),sn=Object.entries(nc).filter(([k,v])=>v.until&&v.until>td),rem=S.settings.xrem||[];
  const card=a=>`<div class="ncard ${a.lv||'info'} ${READ[a.id]?'dim':''}" style="flex-wrap:wrap"><div class="nic">${a.ic||'🔔'}</div><div class="grow" onclick="xNGo('${a.id}')"><b>${esc(a.title)}</b><small>${esc(a.body||'')}</small></div>
    <div class="xnb"><button class="mini" onclick="xNGo('${a.id}')">فتح</button><button class="mini" onclick="xNSnooze('${a.id}')">⏰ تأجيل</button><button class="mini" onclick="xNMute('${a.id}')">🔕 كتم</button><button class="mini danger" onclick="xNDel('${a.id}')">🗑 حذف</button></div></div>`;
  sheet(`<div class="phead"><h2>🔔 الإشعارات</h2><span class="badge ${un.length?'late':'done'}">${un.length?un.length+' جديد':'✓'}</span></div>
  <button class="btn" onclick="xRemForm()">➕ تذكير جديد</button>
  ${un.length?un.map(card).join('')+`<button class="btn ghost" onclick="readAll()">✓ تعليم الكل كمقروء</button>`:'<div class="nempty"><div>✅</div><b>لا توجد إشعارات جديدة</b></div>'}
  ${rd.length?`<details class="gen"><summary>📭 المقروءة (${rd.length})</summary>${rd.map(card).join('')}</details>`:''}
  ${rem.length?`<details class="gen"><summary>⏰ التذكيرات (${rem.length})</summary><div class="list">${rem.map(r=>`<div class="row" onclick="xRemForm('${r.id}')"><div class="grow"><b>${esc(r.ic||'⏰')} ${esc(r.t)}</b><small>${xDW(xRemNext(r)||r.d)} · ${{none:'مرة واحدة',m:'شهري',y:'سنوي'}[r.rep||'none']}${r.off?' · موقوف':''}</small></div></div>`).join('')}</div></details>`:''}
  ${muted.length||sn.length?`<details class="gen"><summary>🔕 المكتومة والمؤجلة (${muted.length+sn.length})</summary><div class="list">${muted.map(k=>`<div class="row"><div class="grow"><b>${esc(nc[k].t||k)}</b><small>مكتوم</small></div><button class="mini" onclick="xNUn('${k}')">🔔 إلغاء الكتم</button></div>`).join('')}${sn.map(([k,v])=>`<div class="row"><div class="grow"><b>${esc(v.t||k)}</b><small>مؤجل حتى ${xDW(v.until)}</small></div><button class="mini" onclick="xNUn('${k}')">إلغاء التأجيل</button></div>`).join('')}</div></details>`:''}
  <div class="box"><label>🚨 تنبيه عاجل عندما يصل رصيد الكاش إلى (اتركه فارغًا للإيقاف)<input inputmode="decimal" dir="ltr" value="${S.settings.cashLow==null?200:S.settings.cashLow}" onchange="S.settings.cashLow=this.value.trim()===''?'':parseNum(this.value);save();updateBell();toast('تم الحفظ')"></label>
  <label>💜 إظهار "تحصيل مقابل دفع كريديت" في الرئيسية قبل موعد السداد بـ (يوم)<input inputmode="numeric" value="${S.settings.ccrLead==null?7:S.settings.ccrLead}" onchange="S.settings.ccrLead=parseNum(this.value)||0;save();toast('تم الحفظ')"></label></div>
  <button class="btn ghost" onclick="notifSheet()">⚙️ فحص الإشعارات</button>`)};
function xNGo(id){const a=alerts().find(x=>x.id===id);readAlert(id);closeSheet();if(a)try{new Function(a.go)()}catch(e){}}
function xNMute(id){const a=alerts().find(x=>x.id===id),nc=xNC();nc['m:'+xNBase(id)]={t:a?a.title:id};xNCset(nc);updateBell();openNotifs();toast('🔕 تم كتم الإشعار')}
function xNDel(id){const a=alerts().find(x=>x.id===id),nc=xNC();nc[id]={del:1,t:a?a.title:id};xNCset(nc);updateBell();openNotifs();toast('تم حذف الإشعار')}
function xNUn(k){const nc=xNC();delete nc[k];xNCset(nc);updateBell();openNotifs()}
function xNSnooze(id){const a=alerts().find(x=>x.id===id),t=new Date();t.setDate(t.getDate()+1);
  sheet(`<h2>⏰ تأجيل الإشعار</h2><p class="muted">${esc(a?a.title:'')}</p><label>📅 يظهر مرة أخرى في<input id="ns-d" type="date" value="${isoD(t)}"></label>
  <button class="btn" onclick="xNSnSv('${id}')">⏰ تأجيل</button><button class="btn ghost" onclick="openNotifs()">رجوع</button>`)}
function xNSnSv(id){const d=($('#ns-d')||{}).value;if(!d||d<=today())return toast('اختر تاريخًا بعد اليوم');const a=alerts().find(x=>x.id===id),nc=xNC();nc[id]={until:d,t:a?a.title:id};xNCset(nc);delete READ[id];saveRead();updateBell();openNotifs();toast('تم التأجيل إلى '+xDW(d))}
function xRemForm(id){const r=id?(S.settings.xrem||[]).find(x=>x.id===id):{t:'',d:today(),rep:'none',lead:0,n:'',ic:'⏰'};if(!r)return;
  sheet(`<h2>⏰ ${id?'تعديل تذكير':'تذكير جديد'}</h2>
  <label>العنوان<input id="rm-t" value="${esc(r.t)}" placeholder="مثال: تجديد اشتراك الإنترنت"></label>
  <div class="xemo">${['⏰','📌','💳','🏠','🚗','🩺','🎓','🎁','📄','💡','📞','🔔'].map(e=>`<button type="button" class="${e===(r.ic||'⏰')?'on':''}" onclick="xSegOn(this)">${e}</button>`).join('')}</div>
  <div class="two"><label>📅 التاريخ<input id="rm-d" type="date" value="${r.d}"></label><label>التنبيه قبلها بـ (يوم)<input id="rm-l" inputmode="numeric" value="${r.lead||0}"></label></div>
  <div class="seg" id="rm-r">${[['none','مرة واحدة'],['m','شهري'],['y','سنوي']].map(([k,l])=>`<button type="button" data-k="${k}" class="${(r.rep||'none')===k?'on':''}" onclick="xSegOn(this)">${l}</button>`).join('')}</div>
  <label>ملاحظة<input id="rm-n" value="${esc(r.n||'')}"></label>
  ${id?`<label class="chk"><input type="checkbox" id="rm-off" ${r.off?'checked':''}> ⏸ موقوف</label>`:''}
  <button class="btn" onclick="xRemSave('${id||''}')">💾 حفظ</button>${id?`<button class="btn ghost danger" onclick="xRemDel('${id}')">🗑 حذف</button>`:''}<button class="btn ghost" onclick="openNotifs()">رجوع</button>`)}
function xRemSave(id){const t=($('#rm-t').value||'').trim(),d=$('#rm-d').value;if(!t)return toast('اكتب العنوان');if(!d)return toast('اختر التاريخ');
  const L=S.settings.xrem=S.settings.xrem||[];let r=id&&L.find(x=>x.id===id);if(!r){r={id:uid()};L.push(r)}
  Object.assign(r,{t,d,ic:(document.querySelector('#sheet .xemo button.on')||{}).textContent||'⏰',lead:Math.max(0,parseNum($('#rm-l').value)||0),rep:(document.querySelector('#rm-r .on')||{}).dataset.k||'none',n:($('#rm-n').value||'').trim(),off:$('#rm-off')?$('#rm-off').checked:false});
  if(r.last&&r.last<d)delete r.last;save();updateBell();openNotifs();toast('تم الحفظ')}
function xRemDel(id){S.settings.xrem=(S.settings.xrem||[]).filter(x=>x.id!==id);save();updateBell();openNotifs()}
function xRemOpen(id,d){const r=(S.settings.xrem||[]).find(x=>x.id===id);if(!r)return;
  sheet(`<h2>${esc(r.ic||'⏰')} ${esc(r.t)}</h2><div class="kv"><span>📅 الموعد</span><b>${xDW(d)}</b></div>${r.n?`<p class="muted">${esc(r.n)}</p>`:''}
  <button class="btn" onclick="xRemDone('${id}','${d}')">✅ تم</button><button class="btn ghost" onclick="xRemForm('${id}')">✏️ تعديل</button>`)}
function xRemDone(id,d){const r=(S.settings.xrem||[]).find(x=>x.id===id);if(!r)return;r.last=d;save();updateBell();closeSheet();toast('تم')}

/* ========== المبالغ والتقارير بنفس باسورد الأرصدة ========== */
xReveal=async function(el){if(!el||!el.dataset.v)return;if(!await xBalAuth())return;el.outerHTML='<b>'+decodeURIComponent(el.dataset.v)+'</b>'};
revealAmts=async function(){if(!await xBalAuth())return;SHOWAMT=true;render();clearTimeout(amtT);amtT=setTimeout(()=>{SHOWAMT=false;if(view==='home')render()},60000)};
try{const _orX=openRV;openRV=function(){const a=arguments;if(!XPRE&&!xBalOkR()){xBalAuth().then(ok=>{if(ok)_orX.apply(null,a);else if(view==='reports'){rtab='';render()}});return}return _orX.apply(this,a)}}catch(e){}

/* ========== اسم التطبيق ثابت + المطوّر بباسورد واحد ========== */
try{const i=SETS.findIndex(x=>x[0]==='name');if(i>=0)SETS.splice(i,1)}catch(e){}
S.settings.appName=DEF_NAME;delete S.settings.devPw;
var XDEVPW='P@ssw0rd101190101190AaA';
xDevLock=function(){return `<div class="box" style="text-align:center"><div style="font-size:40px">🛠️</div><p class="muted">أدخل كلمة مرور المطوّر</p><input id="dv-p" type="password" dir="ltr" onkeydown="if(event.key==='Enter')xDevIn()"><button class="btn" onclick="xDevIn()">🔓 دخول</button></div>`};
xDevIn=async function(){const a=($('#dv-p')||{}).value||'';if(a!==XDEVPW)return toast('كلمة المرور غير صحيحة');XDEVOK=true;render()};

/* ========== الكريديت ========== */
try{const _ccZ=xCcSheet;xCcSheet=function(){const r=_ccZ.apply(this,arguments);try{const sh=$('#sheet'),g=xCcCfg(XCC.id);
  sh.querySelectorAll('.kv span').forEach(s=>{if(/اتجمع لحساب الكريديت/.test(s.textContent))s.textContent='💜 تحصيل مقابل دفع كريديت (من آخر سداد)';if(/اتسدد بعد قفل الكشف/.test(s.textContent))s.textContent='✅ تم سداده بعد إغلاق الكشف'});
  sh.querySelectorAll('.xccb p').forEach(p=>{if(/الكشف بيقفل/.test(p.textContent)&&p.childNodes[0]&&p.childNodes[0].nodeType===3)p.childNodes[0].nodeValue='الكشف يُغلق يوم '+g.cut+' ويُسدد يوم '+g.due+' '});
  const box=sh.querySelectorAll('.xccb')[1];if(box&&!$('#xcot'))box.insertAdjacentHTML('beforeend',`<button type="button" id="xcot" class="mini" style="display:block;margin-top:8px" onclick="xCcOpenTot('${XCC.id}')">🧾 إدخال إجمالي مشتريات فترة سابقة</button>`);
}catch(e){}return r}}catch(e){}
function xCcOpenTot(id){const m=M(id);if(!m)return;const g=xCcCfg(id),we=prevKey(NKM)+'-'+pad(g.cut);
  sheet(`<h2>🧾 إجمالي مشتريات ${esc(m.name)}</h2><p class="muted">لإدخال إجمالي مشتريات فترة لم تُسجل عملياتها بالتفصيل، حتى يصبح الرصيد صحيحًا</p>
  <label>💰 الإجمالي<input id="cot-a" class="amt-in" inputmode="decimal" dir="ltr" placeholder="0"></label>
  <label>📅 تاريخ إغلاق الكشف<input id="cot-d" type="date" value="${we}"></label>
  <div class="seg" id="cot-k"><button type="button" class="on" data-k="exp" onclick="xSegOn(this)">💸 يُسجل كمصروف</button><button type="button" data-k="open" onclick="xSegOn(this)">⚖️ رصيد فقط</button></div>
  <button class="btn" onclick="xCcOpenTotSv('${id}')">✅ حفظ</button><button class="btn ghost" onclick="xCcPay('${id}')">رجوع</button>`)}
function xCcOpenTotSv(id){const a=parseNum($('#cot-a').value),d=$('#cot-d').value,k=(document.querySelector('#cot-k .on')||{}).dataset.k||'exp';
  if(!(a>0))return toast('اكتب المبلغ');if(!d)return toast('اختر التاريخ');
  if(k==='open'){const m=M(id);m.open=r2((+m.open||0)-a)}
  else{if(isClosed(d))return toast('هذا الشهر مقفول');const c=ensureCat('مشتريات كريديت (إجمالي)','exp');c.active=true;S.txs.push({id:uid(),type:'exp',amount:a,cat:c.id,method:id,via:'card',date:d,note:'🧾 إجمالي مشتريات فترة',files:[],created:Date.now()})}
  save();render();xCcPay(id);toast('تم الحفظ')}
try{const _vhR=vHome;vHome=function(){let h=_vhR.apply(this,arguments);try{const td=today(),lead=S.settings.ccrLead==null?7:+S.settings.ccrLead;
  const lp=S.txs.filter(t=>t.type==='tr'&&!t.pend&&xIsCr(t.to)).map(t=>t.date).sort().pop()||'';
  const sum=r2(S.txs.filter(t=>t.ccr&&t.type==='inc'&&!t.pend&&(!lp||t.date>lp)).reduce((a,t)=>a+t.amount,0));
  if(sum>0){let best=null;xCcAccts().forEach(m=>{const g=xCcCfg(m.id);let d=NKM+'-'+pad(g.due);if(d<td)d=addMonths(d,1);const left=daysBetween(d,td);if(!best||left<best.left)best={m,d,left}});
    if(best&&best.left<=lead){const t=tileHTML({ic:'💜',label:'تحصيل مقابل دفع كريديت',val:fmt(sum),sub:'سداد '+esc(best.m.name)+' · '+xDW(best.d),cls:'soon',go:`gocol('${NKM}')`});
      h=h.includes('<div class="dash">')?h.replace('<div class="dash">','<div class="dash">'+t):h+`<div class="dash">${t}</div>`}}
  const al=alerts().find(a=>a.urgent);if(al)h=`<div class="warn" style="background:#fee2e2;color:#991b1b;font-weight:800" onclick="openNotifs()">🚨 ${esc(al.title)}${amtHidden()?'':' · '+esc(al.body)}</div>`+h;
}catch(e){}return h}}catch(e){}

/* ========== الأقساط: نظام كامل ========== */
try{const _smP=sums;sums=function(l){return _smP.call(this,Array.isArray(l)?l.filter(t=>!(t&&t.xpre)):l)}}catch(e){}
try{const _ktP=keyTx;keyTx=function(){const r=_ktP.apply(this,arguments);return Array.isArray(r)?r.filter(t=>!(t&&t.xpre)):r}}catch(e){}
try{const _rsP=xRepScope;xRepScope=function(fn){const T=S.txs;S.txs=T.filter(t=>!t.xpre);try{return _rsP.call(this,fn)}finally{S.txs=T}}}catch(e){}
try{const _psT=planStats;planStats=function(p){if(!p||!p.items||!p.items.some(i=>i.k==='mnt'))return _psT.apply(this,arguments);return _psT({...p,items:p.items.filter(i=>i.k!=='mnt')})}}catch(e){}
function xInstPre(pid,iid,quiet){const p=plan(pid),it=p&&p.items.find(x=>x.id===iid);if(!it||itTx(it))return;
  const t={id:uid(),type:'exp',amount:+it.amount||0,cat:p.catId,method:'',via:'',date:it.due,note:'✔ مدفوع سابقًا',files:[],created:Date.now(),src:{k:'i',id:pid,p:iid},xpre:1};
  S.txs.push(t);it.txId=t.id;if(!quiet){save();render();toast('تم التعليم كمدفوع سابقًا (بدون مصروف)')}}
async function xInstPreAll(pid){const p=plan(pid);if(!p)return;const l=p.items.filter(it=>!itTx(it)&&it.due&&it.due<NKM+'-01'&&it.k!=='mnt');if(!l.length)return;
  if(!await ask('تعليم كمدفوع سابقًا؟',`${l.length} قسط قبل ${MONTHS[NM-1]}، بدون تسجيل مصروف، وسيُخصم من المتبقي.`,{icon:'✔',ok:'تأكيد'}))return;
  l.forEach(it=>xInstPre(pid,it.id,1));save();render();toast('تم')}
vPlan=function(){const p=plan(instPlan);if(!p){view='inst';return vInst()}
  const st=planStats(p),td=today(),fOf=t=>{const f=t&&S.txs.find(x=>x.payFeeOf===t.id);return f?f.amount:0};
  const items=[...p.items].sort((a,b)=>(a.due||'').localeCompare(b.due||'')),main=items.filter(i=>i.k!=='mnt'),mnt=items.filter(i=>i.k==='mnt');
  const rem=r2(st.total-st.paid),end=main.map(i=>i.due).filter(Boolean).sort().pop()||'';
  let h=`<div class="phead"><button class="mini" onclick="go('inst')">→</button><h3>${esc(p.name)}</h3><button class="mini" onclick="planEdit('${p.id}')">✏️ تعديل</button></div>`;
  h+=kpis([['الإجمالي',fmt(st.total),'net'],['المدفوع',fmt(st.paid),'inc'],['المتبقي',fmt(rem),'exp']]);
  const info=[['📊 الأقساط',`${st.paidN} مدفوع من ${st.n} · المتبقي ${st.n-st.paidN}`]];
  if(end)info.push(['🏁 تاريخ الانتهاء',xDW(end)]);
  if(st.next)info.push(['⏭ القسط القادم',`${num(+st.next.amount||0)} · ${xDW(st.next.due)}`]);
  if(+p.price){info.push(['🏠 سعر الوحدة',fmt(+p.price)]);if(+p.down)info.push(['💵 المقدم',fmt(+p.down)]);info.push(['📉 المتبقي من سعر الوحدة',fmt(r2(+p.price-(+p.down||0)-st.paid))])}
  if(p.ptype==='app'&&+p.limit){info.push(['📱 حد الائتمان',fmt(+p.limit)]);info.push(['🟢 المتاح',fmt(r2(+p.limit-rem))])}
  if(p.cc)info.push(['💳 الكريديت','يُضاف إلى كشف '+esc(M(p.acct)?.name||'الكريديت')]);
  h+=`<div class="box">${info.map(([a,b])=>`<div class="kv"><span>${a}</span><b>${b}</b></div>`).join('')}</div>`;
  if(p.note)h+=`<p class="muted">📝 ${esc(p.note)}</p>`;
  if((p.files||[]).length)h+=`<div class="files">${p.files.map(id=>fileThumb(id,'view')).join('')}</div>`;
  const pre=main.filter(it=>!itTx(it)&&it.due&&it.due<NKM+'-01');
  if(pre.length)h+=`<button class="btn ghost" onclick="xInstPreAll('${p.id}')">✔ تعليم ${pre.length} قسط قبل ${MONTHS[NM-1]} كمدفوع سابقًا</button>`;
  const row=it=>{const t=itTx(it),f=fOf(t),tag=it.k==='ann'?' <span class="tag ctr">دفعة سنوية</span>':it.k==='mnt'?' <span class="tag wait">صيانة</span>':'';
    const acts=t?(t.xpre?'':`<button class="mini" onclick="editTx('${t.id}')">✏️</button>`)+`<button class="mini" onclick="unpay('${p.id}','${it.id}')">↩</button>`
      :(p.cc&&it.due>=(p.ccFrom||'')?`<button class="mini" onclick="xCcPay('${p.acct}')">💳</button>`:`<button class="mini pri" onclick="payStart('${p.id}','${it.id}')">✓ دفع</button>`)+`<button class="mini" title="مدفوع سابقًا" onclick="xInstPre('${p.id}','${it.id}')">✔</button>`;
    return `<div class="row" style="cursor:default"><div class="grow"><b>${xDW(it.due)}${tag}</b><small>${t?(t.xpre?'✔ مدفوع سابقًا':'✅ مدفوع '+dmy(t.date)+(f?' · مصاريف '+num(f):'')):it.due<td?'⚠️ متأخر':'⏳ لم يُدفع'}</small></div><div class="amt ${t?'inc':''}">${num(+it.amount||0)}</div><div class="acts">${acts}</div></div>`};
  h+=`<details class="grp" open><summary><span>📅 جدول الأقساط</span><span class="badge soon">${main.length}</span></summary><div class="list">${main.map(row).join('')}</div></details>`;
  if(mnt.length)h+=`<details class="grp"><summary><span>🛠 الصيانة (خارج الإجمالي)</span><span class="badge soon">${mnt.length}</span></summary><div class="list">${mnt.map(row).join('')}</div></details>`;
  return h};
/* شاشة إضافة الأقساط */
try{const _pfS=planForm;planForm=function(){if(PF){if(!PF.ptype)PF.ptype=PF.cc?'cc':'norm';PF.cc=PF.ptype==='cc';if(!PF.ann)PF.ann=[];if(!PF.mnt)PF.mnt=[]}
  const r=_pfS.apply(this,arguments);try{xPfPost()}catch(e){}return r}}catch(e){}
function xPfPost(){const sz=$('#sheet .sz');if(!sz||!PF)return;const t=PF.ptype,h2=sz.querySelector('h2');
  if(h2&&!$('#q-pt'))h2.insertAdjacentHTML('afterend',`<div class="seg" id="q-pt">${[['norm','🏦 عادي'],['cc','💳 كريديت'],['app','📱 أبلكيشن'],['prop','🏠 عقار']].map(([k,l])=>`<button type="button" class="${t===k?'on':''}" onclick="grabPF();PF.ptype='${k}';planForm()">${l}</button>`).join('')}</div>`);
  const cc=$('#q-cc');if(cc){const l=cc.closest('label');if(l)l.style.display='none'}
  const l1=$('#q1')&&$('#q1').closest('label');let ex='';
  if(t==='app')ex=`<label>📱 حد الائتمان<input id="q-lim" inputmode="decimal" dir="ltr" value="${esc(PF.limit||'')}" placeholder="0"></label>`;
  if(t==='prop')ex=`<div class="two"><label>🏠 سعر الوحدة<input id="q-pr" inputmode="decimal" dir="ltr" value="${esc(PF.price||'')}"></label><label>💵 المقدم<input id="q-dn" inputmode="decimal" dir="ltr" value="${esc(PF.down||'')}"></label></div>`;
  if(l1&&ex&&!$('#q-x'))l1.insertAdjacentHTML('afterend',`<div id="q-x">${ex}</div>`);
  const rowsH=(arr,key)=>arr.map((x,i)=>`<div class="two" style="align-items:flex-end"><label>التاريخ<input type="date" data-${key}d="${i}" value="${x.d||''}"></label><label>المبلغ<input inputmode="decimal" dir="ltr" data-${key}a="${i}" value="${esc(x.a||'')}"></label><button type="button" class="mini danger" style="flex:0 0 38px;height:38px" onclick="grabPF();PF.${key}.splice(${i},1);planForm()">✕</button></div>`).join('');
  let sec=`<details class="gen" ${PF.ann.length?'open':''}><summary>📆 الدفعات السنوية / الإضافية (${PF.ann.length})</summary>${rowsH(PF.ann,'ann')}<button type="button" class="mini" onclick="grabPF();PF.ann.push({id:uid(),d:'',a:''});planForm()">+ دفعة</button></details>`;
  if(t==='prop')sec+=`<details class="gen" ${PF.mnt.length?'open':''}><summary>🛠 دفعات الصيانة (خارج الإجمالي) (${PF.mnt.length})</summary>${rowsH(PF.mnt,'mnt')}<button type="button" class="mini" onclick="grabPF();PF.mnt.push({id:uid(),d:'',a:''});planForm()">+ دفعة صيانة</button></details>`;
  const xs=sz.querySelector('.box.xseg');
  if(xs&&!$('#q-gen')){const d=document.createElement('details');d.id='q-gen';d.className='gen';if(PF._g)d.open=true;d.ontoggle=()=>{PF._g=d.open};const s=document.createElement('summary');s.textContent='📅 توليد جدول الأقساط';d.appendChild(s);xs.replaceWith(d);d.appendChild(xs)}
  const h3=[...sz.querySelectorAll('h3')].find(x=>/الأقساط/.test(x.textContent));
  if(h3&&!$('#q-sec'))h3.insertAdjacentHTML('beforebegin',`<div id="q-sec">${sec}</div>`);
  if(h3&&!$('#q-sch')){const d=document.createElement('details');d.id='q-sch';d.className='gen';if(PF._open)d.open=true;d.ontoggle=()=>{PF._open=d.open};
    const s=document.createElement('summary');s.textContent='📋 '+h3.textContent;d.appendChild(s);let n=h3.nextElementSibling;h3.replaceWith(d);
    while(n&&!(n.classList&&n.classList.contains('btn'))){const nx=n.nextElementSibling;d.appendChild(n);n=nx}}
}
try{const _gpX=grabPF;grabPF=function(){_gpX.apply(this,arguments);if(!PF)return;
  if($('#q-lim'))PF.limit=$('#q-lim').value;if($('#q-pr'))PF.price=$('#q-pr').value;if($('#q-dn'))PF.down=$('#q-dn').value;
  ['ann','mnt'].forEach(k=>{(PF[k]||[]).forEach((x,i)=>{const d=document.querySelector(`#sheet [data-${k}d="${i}"]`),a=document.querySelector(`#sheet [data-${k}a="${i}"]`);if(d)x.d=d.value;if(a)x.a=a.value})})}}catch(e){}
try{const _psX=planSave;planSave=function(){grabPF();if(!PF)return _psX.apply(this,arguments);const keep=new Set();
  ['ann','mnt'].forEach(k=>(PF[k]||[]).forEach(x=>{const a=parseNum(x.a);if(!x.d||!(a>0))return;keep.add(x.id);let it=PF.items.find(i=>i.id===x.id);if(!it){it={id:x.id};PF.items.push(it)}if(!it.txId){it.due=x.d;it.amount=String(a)}it.k=k}));
  PF.items=PF.items.filter(i=>!(i.k&&!keep.has(i.id)&&!i.txId));PF.items.sort((a,b)=>(a.due||'').localeCompare(b.due||''));
  const kmap={};PF.items.forEach(i=>{if(i.k)kmap[i.id]=i.k});
  const extra={ptype:PF.ptype,limit:parseNum(PF.limit)||0,price:parseNum(PF.price)||0,down:parseNum(PF.down)||0,ann:PF.ann,mnt:PF.mnt};
  const r=_psX.apply(this,arguments);
  try{if(!$('#sheet').classList.contains('open')){const p=plan(instPlan);if(p){Object.assign(p,extra);p.items.forEach(i=>{if(kmap[i.id])i.k=kmap[i.id]});save();render()}}}catch(e){}return r}}catch(e){}
/* قراءة جدول الأقساط من صورة */
ocrStart=function(){grabPF();openScanner({title:'📷 جدول الأقساط',hint:'📄 ضع جدول الأقساط داخل الإطار',maxW:2000,onCancel:planForm,
  read:async(c,onP)=>{for(const[,fn,has]of CLOUD){if(!has())continue;try{onP(.3);const t=await fn(c);if(t&&t.trim())return t}catch(e){}}
    try{prepCanvas(c);return await ocr('ara+eng',c,{tessedit_pageseg_mode:'6',preserve_interword_spaces:'1'},onP)}catch(e){return ''}},
  onDone:async(blob,text)=>{const ids=await addFiles([new File([blob],'schedule-'+today()+'.jpg',{type:'image/jpeg'})]);PF.files=(PF.files||[]).concat(ids);
    const rows=parseSchedule(String(text||''));if(rows.length){const ex=new Set(PF.items.map(i=>i.due+'|'+(+i.amount)));rows.forEach(x=>{if(!ex.has(x.due+'|'+(+x.amount)))PF.items.push(x)});PF.items.sort((a,b)=>(a.due||'').localeCompare(b.due||''));PF._open=true}
    planForm();toast(rows.length?'تمت قراءة '+rows.length+' قسط، راجعها قبل الحفظ':'لم يتم التعرف على أقساط في الصورة')}})};
/* مصاريف إنستاباي في دفع القسط */
document.addEventListener('change',e=>{const s=e.target;if(!s||s.id!=='y-v')return;const f=$('#y-fee');if(f&&s.value==='instapay'&&!parseNum(f.value))f.value=amtStr(xFeeCalc(parseNum(($('#y-amt')||{}).value)))},true);
try{const _psI=paySheet;paySheet=function(){const r=_psI.apply(this,arguments);try{const f=$('#y-fee');if(f&&PAY&&PAY.via==='instapay'&&!parseNum(f.value))f.value=amtStr(xFeeCalc(parseNum(PAY.amount)))}catch(e){}return r}}catch(e){}
/* تقرير الأقساط بالتفصيل */
function xBInst(){const plans=RF.plan?S.plans.filter(p=>p.id===RF.plan):S.plans;if(!plans.length)return{title:'تقرير الأقساط',sub:'',body:NONE};
  let T=0,P=0,N=0,PN=0;const td=today();
  const info=plans.map(p=>{const s=planStats(p),its=p.items.filter(i=>i.k!=='mnt').map(i=>i.due).filter(Boolean).sort();T+=s.total;P+=s.paid;N+=s.n;PN+=s.paidN;return{p,s,end:its[its.length-1]||'',rem:r2(s.total-s.paid)}});
  let b=rkp([['الإجمالي',T,'net'],['المدفوع',P,'inc'],['المتبقي',r2(T-P),'exp'],['الأقساط المدفوعة',PN+' / '+N,'warn']]);
  b+=donut([{label:'المدفوع',value:P,color:'#16a34a'},{label:'المتبقي',value:r2(T-P),color:'#dc2626'}],'الإجمالي',short(T));
  b+=rsec('🏦 الأقساط',plans.length)+rtbl(['القسط','المدفوع|n','المتبقي|n'],info.map(x=>`<tr class="clk" onclick="drill(()=>{RF.plan='${x.p.id}'})">${cT(esc(x.p.name),`الإجمالي ${num(x.s.total)} · ينتهي ${x.end?dmy(x.end):'—'}${x.s.next?' · القادم '+dmy(x.s.next.due)+' ('+num(+x.s.next.amount||0)+')':''}${x.s.late?' · متأخر '+x.s.late:''}`)}${cN(num(x.s.paid),'inc',x.s.paidN+' قسط')}${cN(num(x.rem),'exp',(x.s.n-x.s.paidN)+' قسط')}</tr>`),ft('الإجمالي',1,fN(num(P)),fN(num(r2(T-P)))));
  if(plans.length===1){const p=plans[0],x=info[0];
    if(+p.price)b+=rsec('🏠 الوحدة')+rtbl(['البيان','المبلغ|n'],[`<tr>${cT('سعر الوحدة')}${cN(num(+p.price))}</tr>`,`<tr>${cT('المقدم')}${cN(num(+p.down||0))}</tr>`,`<tr>${cT('المدفوع من الأقساط')}${cN(num(x.s.paid),'inc')}</tr>`],`<tr><td class="t"><b>المتبقي من سعر الوحدة</b></td><td class="n"><b class="exp">${nm(num(r2(+p.price-(+p.down||0)-x.s.paid)))}</b></td></tr>`);
    b+=rsec('📅 الجدول',p.items.length)+rtbl(['الموعد|c','المبلغ|n','الحالة|c'],[...p.items].sort((a,c)=>(a.due||'').localeCompare(c.due||'')).map(it=>{const t=itTx(it),tg=it.k==='ann'?'دفعة سنوية':it.k==='mnt'?'صيانة':'';
      return `<tr>${cD(it.due)}${cN(num(+it.amount||0),'',tg)}${cC(t?(t.xpre?'<span class="rb ok">مدفوع سابقًا</span>':'<span class="rb ok">'+dmy(t.date)+'</span>'):it.due<td?'<span class="rb late">متأخر</span>':'<span class="rb wait">لم يُدفع</span>')}</tr>`}))}
  return{title:'تقرير الأقساط',sub:plans.length===1?plans[0].name:'كل الأقساط',body:b}}
if(window.XB0)window.XB0.inst=xBInst;

/* ========== العملاء ========== */
xClCards=function(){const q=XCLQ.trim().toLowerCase(),L=XCL().slice().sort((a,b)=>(+a.no||0)-(+b.no||0)).filter(c=>!q||[c.no,c.name,c.co,c.mob1,c.mob2,c.tel,c.addr].join(' ').toLowerCase().includes(q));
  if(!L.length)return '<p class="muted" style="text-align:center;margin:20px 0">لا يوجد عملاء</p>';
  return L.map(c=>{const it=xClItems(c.id),m=it.filter(r=>r.fixed&&!isAnn(r)).reduce((s,r)=>s+(+r.amount||0),0),pd=xClPend(c),tel=v=>v?`<a class="mini" href="tel:${esc(v)}" dir="ltr">📞 ${esc(v)}</a>`:'';
    return `<details class="xlnc xcld ${c.off?'off':''}"><summary><div class="xlnr"><b>#${esc(String(c.no||''))} · ${esc(c.name)}</b>${pd?`<span class="xchip late">⏳ ${num(pd)}</span>`:'<span class="xchip ok">✓</span>'}</div><div class="xlnr xsm"><span>${esc(c.co||'')}</span><span>${m?'📌 شهري '+num(m):''}</span></div></summary>
    <div class="xcltel">${tel(c.mob1)}${tel(c.mob2)}${tel(c.tel)}</div>
    ${it.length?`<div class="list">${it.map(r=>{const n=xClNx(r);return `<div class="row" onclick="catForm('${r.id}')"><div class="grow"><b>${esc(r.name)}</b><small>${r.fixed?everyTxt(r.every)+' · '+num(+r.amount||0):'متغير'}${n?' · القادم '+dmy(n.d):''}</small></div></div>`}).join('')}</div>`:'<p class="xnote">لا توجد بنود مرتبطة</p>'}
    <div class="xlna"><button class="btn" onclick="xClPay('${c.id}')">💵 تحصيل</button><button class="btn ghost" onclick="xClOpen('${c.id}')">📄 ملف العميل</button></div></details>`}).join('')};
function xClItemsTbl(c){const it=xClItems(c.id);if(!it.length)return NONE;
  return rtbl(['البند','المبلغ|n','القادم|c'],it.map(r=>{const n=xClNx(r);return `<tr>${cT(esc(r.name),[r.fixed?everyTxt(r.every):'متغير',r.prevAmt?'السابق '+num(r.prevAmt)+(r.incPct!=null?' ('+(r.incPct>0?'+':'')+r.incPct+'%)':''):''].filter(Boolean).join(' · '))}${cN(r.fixed?num(+r.amount||0):'—')}${n?cD(n.d):cC('—')}</tr>`}))}
xClPrTbl=xClItemsTbl;
function xBClSum2(){xLegacy('clsum');const p=xPer('clsum'),L=(XTALL||S.txs).filter(t=>t.cl&&t.type==='inc'&&t.date>=p.f&&t.date<=p.t),by={};
  L.forEach(t=>{const b=by[t.cl]=by[t.cl]||{f:0,o:0,p:0};if(t.pend)b.p+=t.amount;else if(t.clf)b.f+=t.amount;else b.o+=t.amount});
  const R=Object.entries(by).map(([id,v])=>({c:xClL(id),v})).filter(x=>x.c).sort((a,b)=>(+a.c.no||0)-(+b.c.no||0)),S3=k=>r2(R.reduce((s,x)=>s+x.v[k],0)),tf=S3('f'),to=S3('o'),tp=S3('p');
  let h=rkp([['📌 ثابت',tf,'inc'],['💵 غير ثابت',to,'net'],['⏳ لم يُحصّل',tp,'exp'],['👥 العملاء',String(R.length),'net']]);
  h+=rsec('👥 حسب العميل',String(R.length))+(R.length?rtbl(['العميل','ثابت|n','غير ثابت|n','لم يُحصّل|n'],R.map(({c,v})=>`<tr class="clk" onclick="xClRep('clst','${c.id}')">${cT('#'+esc(String(c.no))+' · '+esc(c.name),esc(c.co||''))}${cN(num(r2(v.f)),'inc')}${cN(num(r2(v.o)))}${cN(num(r2(v.p)),v.p?'exp':'')}</tr>`),
    `<tr><td class="t"><b>الإجمالي</b></td><td class="n"><b>${nm(num(tf))}</b></td><td class="n"><b>${nm(num(to))}</b></td><td class="n"><b>${nm(num(tp))}</b></td></tr>`).replace('class="rtb"','class="rtb xw5"'):NONE);
  return{title:'تقرير العملاء',sub:xRngTxt(p.f,p.t),body:h}}
function xBClSt2(){xLegacy('clst');const c=xClL(RF.xcl);if(!c)return{title:'كشف حساب عميل',sub:'',body:NONE};
  const p=xPer('clst'),L=(XTALL||S.txs).filter(t=>t.cl===c.id&&t.date>=p.f&&t.date<=p.t).sort((a,b)=>a.date.localeCompare(b.date));
  const sm=f=>r2(L.filter(f).reduce((s,t)=>s+t.amount,0)),fx=sm(t=>!t.pend&&t.clf),ot=sm(t=>!t.pend&&!t.clf),pn=sm(t=>t.pend);
  const due=xClDue(c).filter(o=>o.d>=p.f&&o.d<=p.t),dn=r2(due.reduce((s,o)=>s+o.amt,0));
  let h=rkp([['📌 ثابت',fx,'inc'],['💵 غير ثابت',ot,'net'],['⏳ لم يُحصّل',r2(pn+dn),'exp']]);
  const tb=l=>l.length?rtbl(['التاريخ|c','البند','المبلغ|n'],l.map(t=>`<tr class="clk" onclick="editTx('${t.id}')">${cD(t.date)}${cT(esc(C(t.cat)?.name||''),[t.pend?'⏳ لم يُحصّل':'✅ تم التحصيل',t.note?esc(t.note):''].filter(Boolean).join(' · '))}${cN(num(t.amount),t.pend?'exp':'inc')}</tr>`),l.length>1?ft('الإجمالي',2,fN(num(r2(l.reduce((s,t)=>s+t.amount,0))))):''):NONE;
  h+=rsec('📌 التحصيل الثابت',num(fx))+tb(L.filter(t=>t.clf));
  if(due.length)h+=rsec('⏳ مستحق من البنود الثابتة',num(dn))+rtbl(['موعد السداد|c','البند','المبلغ|n'],due.map(o=>`<tr>${cD(o.d)}${cT(esc(o.r.name),o.d<today()?'متأخر':'')}${cN(num(o.amt),'exp')}</tr>`));
  h+=rsec('💵 التحصيل غير الثابت',num(ot))+tb(L.filter(t=>!t.clf));
  h+=rsec('📌 البنود الثابتة')+xClItemsTbl(c);
  return{title:'كشف حساب · '+c.name,sub:'عميل #'+c.no+' · '+xRngTxt(p.f,p.t),body:h}}
if(REPS.clsum)REPS.clsum.b=xBClSum2;if(REPS.clst)REPS.clst.b=xBClSt2;

/* ========== شاشة سحب وإيداع الكاش ========== */
XVW.xcw=()=>{const k=ym(cur.y,cur.m),ca=xCashAcct(),rows=[];
  S.cash.filter(c=>c.date.startsWith(k+'-')).forEach(c=>rows.push({d:c.date,c:c.created||0,ic:'🏧',t:'سحب من الماكينة · '+(M(c.method)?.name||''),s:c.note||'',a:c.amount,js:`cashForm('${c.id}')`}));
  S.txs.filter(t=>t.type==='tr'&&!t.pend&&t.date.startsWith(k+'-')&&(t.xdep||t.xwho||t.to===ca||t.method===ca)).forEach(t=>rows.push({d:t.date,c:t.created||0,ic:t.xdep?'🏦':t.xwho?'🙋':'🏧',t:(t.xdep?'إيداع':t.xwho?'كاش من '+t.xwho:'سحب')+' · '+(M(t.method)?.name||'')+' ← '+(M(t.to)?.name||''),s:t.note||'',a:t.amount,js:`editTx('${t.id}')`}));
  rows.sort((a,b)=>b.d.localeCompare(a.d)||b.c-a.c);
  const out=r2(rows.filter(r=>r.ic!=='🏦').reduce((s,r)=>s+r.a,0)),inn=r2(rows.filter(r=>r.ic==='🏦').reduce((s,r)=>s+r.a,0));
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏧 سحب وإيداع كاش</h3></div>`+monthBar(true)
    +`<div class="xlna"><button class="btn" onclick="xCashSheet('m')">🏧 سحب</button><button class="btn ghost" onclick="xCashSheet('d')">🏦 إيداع</button></div>`
    +kpis([['🏧 السحب',fmt(out),'warn'],['🏦 الإيداع',fmt(inn),'inc'],['عدد الحركات',String(rows.length),'net']])
    +(rows.length?rows.map(r=>xCard({ic:r.ic,title:esc(r.t),amt:num(r.a),sub:xDW(r.d),sub2:esc(r.s.slice(0,40)),click:r.js})).join(''):'<div class="nempty"><div>🏧</div><b>لا توجد حركات في هذا الشهر</b></div>')};
XFC.xcw=['🏧','سحب وإيداع',"go('xcw')",'#eab308,#a16207',()=>0,''];
XFC.trash=['🗑','المحذوفات',"go('xtr')",'#94a3b8,#334155',()=>0,''];
try{const _rnT=render;render=function(){const r=_rnT.apply(this,arguments);try{if(view==='more'){const el=$('#view'),c=xTileFind(el,'سحب وإيداع كاش');
  if(c){c.setAttribute('onclick',"go('xcw')");if(!el.querySelector('[onclick="go(\'xtr\')"]')){const t=c.cloneNode(true);xTileSet(t,'🗑','سلة المحذوفات',"go('xtr')");(el.querySelector('.rgrid')||el).appendChild(t)}}}}catch(e){}return r}}catch(e){}

/* ========== الخروج من البرنامج: الرئيسية + البصمة ========== */
var XHID2=0;
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='hidden'){XHID2=Date.now();return}
  if(!XHID2||Date.now()-XHID2<10000){XHID2=0;return}XHID2=0;
  setTimeout(()=>{try{const sh=$('#sheet'),busy=sh&&sh.classList.contains('open')&&XDR;
    if(!busy){try{XRVBACK='';$('#rv').classList.remove('on');RVST=[];rtab=''}catch(e){}try{closeSheet()}catch(e){}if(view!=='home')go('home')}
    if(LK.pin&&!$('#lock').classList.contains('on'))showLock()}catch(e){}},60);
});

/* ========== لغة البرنامج: فصحى ========== */
(()=>{const D=[['النهارده','اليوم'],['النهاردة','اليوم'],['امبارح','أمس'],['دلوقتي','الآن'],['مفيش','لا يوجد'],['اتسجّلت','تم تسجيلها'],['اتسجّل','تم التسجيل'],['اتسجل','تم التسجيل'],['اتحفظ','تم الحفظ'],['اتحذفت','تم حذفها'],['اتحذف','تم الحذف'],['اتمسحت','تم حذفها'],['اتمسح','تم الحذف'],['اتلغى','تم الإلغاء'],['اتعدّل','تم التعديل'],['اتدفع','تم الدفع'],['اتسددت','تم سدادها'],['اتسدد','تم السداد'],['اتأجّل','تم التأجيل'],['دوس','اضغط'],['عايز','تريد'],['إزاي','كيف'],['ازاي','كيف'],['اختار','اختر'],['ضيف','أضف'],['الجاي','القادم'],['الجاية','القادمة'],['اللي فاتت','السابقة'],['اللي فات','السابق'],['الشهر ده','هذا الشهر'],['السنة دي','هذا العام'],['من غير','بدون'],['عشان','لكي'],['كمان','أيضًا'],['تمام','موافق'],['لسه مفتوح','ما زال مفتوحًا'],['لسه ما اتدفعش','لم يُدفع بعد'],['بيتدفع','يُدفع'],['بيتحصّل','يُحصّل']];
  const RX=D.map(([a,b])=>[new RegExp('(^|[^\\u0600-\\u06FF])'+a+'(?![\\u0600-\\u06FF])','g'),'$1'+b]);
  const run=()=>{const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>{const p=n.parentNode;return p&&/^(TEXTAREA|SCRIPT|STYLE)$/.test(p.nodeName)?2:1}});let n;
    while((n=w.nextNode())){const v=n.nodeValue;if(!v||!/[\u0600-\u06FF]/.test(v))continue;let x=v;for(const[r,s]of RX)x=x.replace(r,s);if(x!==v)n.nodeValue=x}};
  let q=false;new MutationObserver(()=>{if(q)return;q=true;requestAnimationFrame(()=>{q=false;try{run()}catch(e){}})}).observe(document.body,{childList:true,subtree:true,characterData:true});try{run()}catch(e){}
})();

/* تشغيل */
try{save()}catch(e){}
XLAST=localStorage.getItem(KEY);XIDS=xIdsOf(S);XUNDOING=false;
try{render()}catch(e){}
/* ========== شكل السلف على كل الشاشات ========== */
(()=>{const s=document.createElement('style');s.textContent=`
#view .list,#sheet .list{background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important;border-radius:0!important;overflow:visible!important}
#view details.grp{background:transparent!important;border:0!important;box-shadow:none!important;overflow:visible!important}
#view details.grp>summary{background:var(--card,#fff)!important;border:1px solid rgba(148,163,184,.25)!important;border-radius:14px!important;margin:0 0 10px!important;padding:12px 14px!important;font-size:15px!important}
#view details.grp[open]>summary{border-color:var(--p)!important}
#view .list>.row,#view .list>a.row,#view .list>.ckx,#view .list>details,#view details.grp>.ckx,#view details.grp .list>*,
#sheet .list>.row,#sheet .list>a.row,#sheet .list>.ckx,
#view .pcard,#view .ic2,#view .xac,#view .ncard,#sheet .ncard{
 background:var(--card,#fff)!important;border:1px solid rgba(127,127,127,.25)!important;border-radius:16px!important;
 padding:12px 14px!important;margin:0 0 10px!important;box-shadow:0 2px 10px rgba(15,23,42,.06)!important;min-height:0!important}
#view .list>details,#view details.grp .list>details,#view details.grp>.ckx{padding:4px 14px!important}
#view .list>details[open],#view details.grp>.ckx:has(details[open]),#view details.grp .list>details[open]{border-color:var(--p)!important}
#view .grow>b,#sheet .list .grow>b,#view .pcard b{font-size:15px!important;font-weight:800!important;line-height:1.4!important}
#view .amt,#sheet .list .amt{font-size:20px!important;font-weight:800!important;min-width:70px!important}
#view .grow>small,#sheet .list .grow>small{font-size:12px!important;margin-top:4px!important}
#view .list .ic,#view details.grp .ic{width:38px!important;height:38px!important;flex:0 0 38px!important;border-radius:12px!important;font-size:18px!important}
#view .ckx>input[type=checkbox]{width:22px!important;height:22px!important;flex:0 0 22px!important}
#view .acts,#view .ibar,#view .xnb{gap:8px!important}
#view .acts .mini,#view .ibar .mini,#view .row>.mini,#view .xaa .mini{height:36px!important;border-radius:12px!important;font-size:13px!important;padding:0 12px!important}
#view .xb .etbar .mini{height:38px!important;border-radius:12px!important}
#view details.grp>div[style*="padding"]{padding:0 0 10px!important}
#view details.grp>div[style*="padding"] .mini{height:42px!important;border-radius:14px!important;font-size:14px!important}
`;document.head.appendChild(s)})();
/* ========== 2.21.60 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
#view .grow>b,#sheet .list .grow>b,#view .pcard b{font-size:13.5px!important}
#view .grow>small,#sheet .list .grow>small{font-size:11.5px!important}
#view .amt,#sheet .list .amt{font-size:17px!important}
#view details.grp>summary{font-size:13.5px!important;padding:10px 12px!important}
#view details.grp>summary .gs{font-size:14px!important}
.xlnc .xlnr>b{font-size:14px!important}.xlnbig{font-size:19px!important}
.xclb{font-size:10.5px!important;padding:1px 7px!important}
.xccrc{border-color:#ea580c!important;background:color-mix(in srgb,#ea580c 9%,var(--card,#fff))!important}
.xccrc .amt{color:#ea580c!important}
.xccrc .xclb{background:#ffedd5!important;color:#c2410c!important}
.xah .xed{display:flex;gap:6px;flex:0 0 auto}
.xah .xed .mini{width:34px!important;height:34px!important;padding:0!important;border-radius:10px!important;display:flex;align-items:center;justify-content:center}
.xaa{flex-wrap:wrap}.xaa .mini{min-width:0!important;flex:1 1 0!important}
`;document.head.appendChild(s)})();

/* القلب يتشال من كل البرنامج */
(()=>{const run=()=>{const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while((n=w.nextNode())){const v=n.nodeValue;if(v&&v.indexOf('💜')>-1){const x=v.replace(/💜\s+/g,'').replace(/💜/g,'💳');if(x!==v)n.nodeValue=x}}};
  let q=false;new MutationObserver(()=>{if(q)return;q=true;requestAnimationFrame(()=>{q=false;try{run()}catch(e){}})}).observe(document.body,{childList:true,subtree:true,characterData:true});run()})();

/* اختيار نوع العملية: من غير Receipt Scan */
try{const _ntR=newTx;newTx=function(){const r=_ntR.apply(this,arguments);try{if($('#sheet .xtype')){const b=$('#sheet .sz > .btn[onclick="scanReceipt()"]');if(b)b.remove()}}catch(e){}return r}}catch(e){}

/* الحسابات: التعديل والحذف جنب الاسم */
try{const _rnA=render;render=function(){const r=_rnA.apply(this,arguments);try{if(view==='pmv')document.querySelectorAll('#view .xac').forEach(c=>{if(c.querySelector('.xed'))return;const bs=[...c.querySelectorAll('.xaa .mini.ic')];if(!bs.length)return;const d=document.createElement('div');d.className='xed';bs.forEach(b=>d.appendChild(b));const an=c.querySelector('.xan');if(an)an.after(d)})}catch(e){}return r}}catch(e){}

/* البحث في البنود: لو اخترت "ثابت" يظهر الثابت فقط */
try{const _xcoF=xCatOpen;xCatOpen=function(){if(F&&F.fix){const Cs=S.cats;S.cats=Cs.filter(c=>c.fixed||c.id===F.cat);try{return _xcoF.apply(this,arguments)}finally{S.cats=Cs}}return _xcoF.apply(this,arguments)}}catch(e){}

/* ========== مصاريف إنستاباي: في الفواتير والأقساط ودفع القسط ========== */
function xIsAppPlan(p){return !!p&&(p.ptype==='app'||(!p.ptype&&/valu|فاليو|tru|ترو|sohoula|souhoola|سهول|contact|كونتكت|aman|أمان|halan|حالا|forsa|فرصة|premium|بريميوم|mogo|موجو/i.test(p.name||'')))}
function xAddIpFee(t,fee){const c=ensureCat(XFEEN+' · '+(M(t.method)?.name||'—'),'exp');c.active=true;S.txs.push({id:uid(),type:'exp',amount:fee,cat:c.id,method:t.method,via:'instapay',date:t.date,note:'💸 مصاريف تحويل',files:[],created:Date.now(),feeOf:t.id})}
function xIpFeeBox(){
  if(!F||F.type!=='exp'||F.via!=='instapay'||$('#f-feeon')||$('#f-ifee'))return;
  const o=F.id&&S.txs.find(t=>t.id===F.id);if(o&&(o.feeOf||o.payFeeOf))return;
  if(F.ifee==null){const ft=F.id&&xFeeTx(F.id);F.ifee=ft?amtStr(ft.amount):amtStr(xFeeCalc(parseNum(F.amount)));F.ifeeMan=!!ft}
  const v=$('#f-v'),l=v&&v.closest('label'),row=l&&l.parentElement;if(!row)return;
  row.insertAdjacentHTML('afterend',`<label>💸 مصاريف إنستاباي<div class="inl"><input id="f-ifee" inputmode="decimal" dir="ltr" value="${esc(F.ifee||'')}" oninput="F.ifeeMan=1"><button type="button" class="mini" onclick="F.ifeeMan=0;$('#f-ifee').value=amtStr(xFeeCalc(parseNum(($('#f-amt')||{}).value)))">↺</button></div></label>`);
  const a=$('#f-amt');if(a)a.addEventListener('input',()=>{if(!F.ifeeMan&&$('#f-ifee'))$('#f-ifee').value=amtStr(xFeeCalc(parseNum(a.value)))});
}
try{const _tfI2=txForm;txForm=function(){const r=_tfI2.apply(this,arguments);try{
  xIpFeeBox();
  const o=F&&F.id&&S.txs.find(t=>t.id===F.id);
  /* مصاريف الدفع للأقساط بتاعة الأبلكيشنز بس */
  if(o&&o.src&&o.src.k==='i'&&!xIsAppPlan(plan(o.src.id))){const pf=$('#f-pfee');if(pf){const l=pf.closest('label');if(l)l.remove()}}
  /* موعد السداد للبند الثابت + زرار تعديله */
  if(o&&o.src&&o.src.k==='r'&&C(o.src.id)&&o.type!=='tr'){const c=C(o.src.id),due=occDate(c,o.src.p);
    if(!$('#xdue')){const d=$('#f-d'),dl=d&&d.closest('label');if(dl)dl.parentElement.insertAdjacentHTML('beforebegin',`<div class="kv" id="xdue"><span>📅 موعد السداد</span><b>${xDW(due)}</b></div>`)}
    const k=$('#xdue');if(k&&!k.querySelector('button'))k.querySelector('b').insertAdjacentHTML('beforeend',` <button type="button" class="mini" onclick="xDueEdit('${c.id}','${o.id}')">✏️</button>`)}
}catch(e){}return r}}catch(e){}
try{const _gbI2=grab;grab=function(){_gbI2.apply(this,arguments);if(F&&$('#f-ifee'))F.ifee=$('#f-ifee').value}}catch(e){}
try{const _stI2=saveTx;saveTx=async function(){
  grab();const use=!!$('#f-ifee'),fee=parseNum(F&&F.ifee),fid=F&&F.id,before=new Set(S.txs.map(t=>t.id));
  XTRSKIP=true;let r;try{r=await _stI2.apply(this,arguments)}finally{XTRSKIP=false}
  try{if(use&&!$('#sheet').classList.contains('open')){const id=fid||(S.txs.find(t=>!before.has(t.id)&&t.type==='exp'&&!t.feeOf&&!t.payFeeOf)||{}).id,t=id&&S.txs.find(x=>x.id===id);
    if(t&&t.via==='instapay'&&!t.pend&&!isClosed(t.date)){const old=xFeeTx(t.id);if(fee>0){if(old)Object.assign(old,{amount:fee,method:t.method,date:t.date});else xAddIpFee(t,fee)}else if(old)S.txs=S.txs.filter(x=>x!==old);save();render()}}}catch(e){}
  return r}}catch(e){}
/* شاشة دفع القسط */
try{const _psA=paySheet;paySheet=function(){
  const p=PAY&&plan(PAY.pid),app=xIsAppPlan(p),fee0=PAY?PAY.fee:'';if(PAY&&!app)PAY.fee='';
  const r=_psA.apply(this,arguments);try{
    const f=$('#y-fee');if(f){if(!app){const l=f.closest('label');if(l)l.remove()}else{f.value=fee0||'';f.dataset.v0=f.value;f.addEventListener('input',()=>{f.dataset.v0=f.value})}}
    const v=$('#y-v'),row=v&&v.closest('label')&&v.closest('label').parentElement;
    if(row&&!$('#y-ifl'))row.insertAdjacentHTML('afterend',`<label id="y-ifl" style="${PAY.via==='instapay'?'':'display:none'}">💸 مصاريف إنستاباي<input id="y-ifee" inputmode="decimal" dir="ltr" value="${esc(PAY.ifee||amtStr(xFeeCalc(parseNum(PAY.amount))))}" oninput="PAY.ifeeMan=1"></label>`);
    const a=$('#y-amt');if(a)a.addEventListener('input',()=>{const i=$('#y-ifee');if(i&&!PAY.ifeeMan)i.value=amtStr(xFeeCalc(parseNum(a.value)))});
  }catch(e){}return r}}catch(e){}
document.addEventListener('change',e=>{const s=e.target;if(!s||s.id!=='y-v')return;
  const f=$('#y-fee');if(f&&f.dataset.v0!=null)f.value=f.dataset.v0;
  const l=$('#y-ifl'),i=$('#y-ifee');if(l)l.style.display=s.value==='instapay'?'':'none';
  if(i&&s.value==='instapay'&&!PAY.ifeeMan)i.value=amtStr(xFeeCalc(parseNum(($('#y-amt')||{}).value)))},true);
try{const _gpI=grabPay;grabPay=function(){_gpI.apply(this,arguments);if($('#y-ifee'))PAY.ifee=$('#y-ifee').value}}catch(e){}
try{const _dpI=doPay;doPay=function(){grabPay();const pid=PAY.pid,iid=PAY.iid,via=PAY.via,ifee=parseNum(PAY.ifee);const r=_dpI.apply(this,arguments);
  try{if(via==='instapay'&&ifee>0){const p=plan(pid),it=p&&p.items.find(x=>x.id===iid),t=it&&itTx(it);if(t&&!xFeeTx(t.id)){xAddIpFee(t,ifee);save();render()}}}catch(e){}return r}}catch(e){}

/* ========== تعديل موعد السداد للبند الثابت ========== */
function xDueEdit(cid,tid){const c=C(cid);if(!c||!c.start)return;
  sheet(`<h2>📅 موعد السداد · ${esc(c.name)}</h2>
  <p class="muted">موعد السداد هو اليوم الثابت الذي يجب أن يتم فيه السداد (${esc(everyTxt(c.every))}). تغييره يُطبق على كل المرات.</p>
  <label>يوم السداد في الشهر<select id="xd-d">${Array.from({length:28},(_,i)=>i+1).map(d=>`<option value="${d}" ${+c.start.slice(8)===d?'selected':''}>${d}</option>`).join('')}</select></label>
  <button class="btn" onclick="xDueSv('${cid}','${tid}')">💾 حفظ</button><button class="btn ghost" onclick="editTx('${tid}')">رجوع</button>`)}
function xDueSv(cid,tid){const c=C(cid),d=+(($('#xd-d')||{}).value);if(!c||!d)return;c.start=c.start.slice(0,8)+pad(d);save();render();toast('تم تعديل موعد السداد إلى يوم '+d);editTx(tid)}
try{render()}catch(e){}
/* ========== 2.21.61 ========== */
/* --- Undo: يظهر بعد ما انت تعمل حاجة بس، ويختفي بعد 4 ثواني، وبيسأل مرة واحدة --- */
var XLASTTAP=0,XUCONF=false,XUPT=0;
document.addEventListener('pointerdown',()=>{XLASTTAP=Date.now()},true);
xAfterSave=function(){
  const now=localStorage.getItem(KEY);if(now==null||now===XLAST)return;
  const prev=XLAST;XLAST=now;
  if(XUNDOING||prev==null){XIDS=xIdsOf(S);return}
  const cur=xIdsOf(S);
  if(XIDS&&!XTRSKIP){const gone=[];Object.keys(cur).forEach(k=>XIDS[k].forEach(id=>{if(id&&!cur[k].has(id))gone.push([k,id])}));
    if(gone.length){let o=null;try{o=JSON.parse(prev)}catch(e){}
      if(o){const tr=xTrGet(),at=Date.now();gone.forEach(([k,id])=>{const x=xArr(o,k).find(y=>y&&y.id===id);if(!x)return;if(k==='cats'&&/^مصاريف إنستاباي/.test(x.name||''))return;tr.push({k,o:x,at,l:xTrLbl(k,x,o)})});xTrSet(tr)}}}
  XIDS=cur;
  if(Date.now()-XLASTTAP<4000){if(Date.now()-XUPT>1500){XUND.push(prev);if(XUND.length>20)XUND.shift()}XUPT=Date.now();XUCONF=false;xUndoBar()}
};
function xUbHide(){const b=$('#xub');if(b)b.classList.remove('on');XUCONF=false}
xUndoBar=function(){
  if($('#lock').classList.contains('on')||!XUND.length)return;
  let b=$('#xub');if(!b){b=document.createElement('div');b.id='xub';b.className='xub';document.body.appendChild(b)}
  b.innerHTML=`<span>تم الحفظ</span><button onclick="xUndo()">↩️ Undo${XUND.length>1?' ('+XUND.length+')':''}</button><button class="x" onclick="xUbHide()">✕</button>`;
  b.classList.add('on');clearTimeout(XUBT);XUBT=setTimeout(xUbHide,4000);
};
try{const _xu0=xUndo;xUndo=async function(){
  if(!XUND.length)return toast('لا توجد خطوات للتراجع');clearTimeout(XUBT);
  if(!XUCONF){const ok=await ask('التراجع عن آخر خطوة؟','سيتم إرجاع البيانات كما كانت قبل آخر حفظ.',{icon:'↩️',ok:'Yes',cancel:'No'});
    if(!ok){XUBT=setTimeout(xUbHide,4000);return}XUCONF=true}
  _xu0();
}}catch(e){}

/* --- الريسيت: تعديل الاسم يبحث في البنود الموجودة --- */
var XNMTOP='';
askStore=function(rc){
  const o=[],add=s=>{s=(s||'').trim();if(s&&!o.some(x=>normAr(x)===normAr(s)))o.push(s)};
  if(rc.match)add(rc.match.name);(rc.names||[]).slice(0,5).forEach(add);
  NMO=o.slice(0,6);const top=NMO[0]||'',star=!!rc.match;
  return new Promise(res=>{
    sheet(`<h2>🧾 اسم المكان أو البند</h2>
    ${top?`<div class="xnmc" id="nm-card" onclick="xNmEdit()"><small>${star?'⭐ مسجل لديك من قبل':'🔎 تمت القراءة'}</small><b>${esc(top)}</b><small>اضغط على الاسم لتعديله أو للبحث عن بند موجود</small></div>`:''}
    <div id="nm-ed" style="${top?'display:none':''}"><label>ابحث عن بند موجود أو اكتب اسمًا جديدًا<input id="nm-in" autocomplete="off" value="${esc(top)}" placeholder="مثال: بنزين" oninput="xNmFind(this.value)" onkeydown="if(event.key==='Enter')xNmYes()"></label><div id="nm-res" class="list"></div></div>
    <div class="xlna"><button class="btn" onclick="xNmYes()">✅ Yes</button><button class="btn ghost" onclick="xNmEdit()">✏️ تعديل</button></div>
    ${NMO.length>1?`<div class="fl">أو ربما يكون</div><div class="xnmo">${NMO.slice(1).map((s,i)=>`<button type="button" class="rch" onclick="xNmSet(${i+1})">${esc(s)}</button>`).join('')}</div>`:''}
    <button class="btn ghost" onclick="closeSheet()">إلغاء</button>`);
    NMR=res;XNMTOP=top;
  });
};
function xNmFind(q){const el=$('#nm-res');if(!el)return;const v=qn(q);if(!v){el.innerHTML='';return}
  const L=S.cats.filter(c=>c.kind==='exp'&&c.active!==false&&!/^مصاريف إنستاباي/.test(c.name)&&qn([c.name,...(c.alias||[])].join(' ')).includes(v)).slice(0,8);
  el.innerHTML=L.map(c=>`<div class="row" onclick="xNmPickCat('${c.id}')"><span class="ic" style="background:var(--soft)">${c.fixed?'📌':'🏷️'}</span><div class="grow"><b>${esc(c.name)}</b><small>بند موجود · اضغط للتسجيل عليه</small></div></div>`).join('')
    ||'<p class="muted" style="margin:6px 0">لا يوجد بند بهذا الاسم، وسيتم إنشاء بند جديد</p>'}
function xNmPickCat(id){const c=C(id);if(!c)return;
  /* البرنامج يحفظ الاسم اللي قراه علشان المرة الجاية يعرف إنه نفس البند */
  if(XNMTOP&&normAr(XNMTOP)!==normAr(c.name)&&normAr(XNMTOP).replace(/\s/g,'').length>=4)c.alias=[...new Set([...(c.alias||[]),XNMTOP])].slice(-8);
  $('#nm-in').value=c.name;xNmYes()}

/* --- الريسيت: يسأل قبل إضافة رقم المحل --- */
try{const _cfr=contactFromReceipt;contactFromReceipt=async function(rc,cat){
  const ph=(rc&&rc.phones)||[];if(!ph.length)return;
  const nw=ph.filter(p=>!findPhone([p]));if(!nw.length)return _cfr.apply(this,arguments);
  await new Promise(r=>setTimeout(r,700));
  const ok=await ask('إضافة رقم المحل؟',`${cat.name}\n${nw.join('\n')}\nهل تريد إضافته إلى Contacts؟`,{icon:'📇',ok:'نعم',cancel:'لا'});
  if(ok)return _cfr.apply(this,arguments);
}}catch(e){}

/* --- الريسيت: يسأل قبل تسجيل الأصناف --- */
xRcFinish=async function(){const x=XRC2;XRC2=null;if(!x)return;closeSheet();
  const a=parseNum(x.a),tip=x.bill?0:(parseNum(x.tip)||0),tot=r2(a+tip);
  let items=[];
  if((x.rc.items||[]).length){const want=await ask('الأصناف',`تمت قراءة ${x.rc.items.length} صنف من الريسيت.\nهل تريد تسجيل الأصناف؟`,{icon:'🧾',ok:'نعم',cancel:'لا'});
    if(want){const r=await biReview(x.rc.items,a);items=r===null?[]:r}}
  if(tip>0)items.push({n:'🎁 إكرامية',q:1,p:tip,v:tip});
  const t={id:uid(),type:'exp',amount:tot,cat:x.cat.id,method:x.method,via:x.via,date:x.date,note:'🧾'+(x.deliv?' 🛵':'')+(x.card?' •••• '+x.card.last4:''),files:x.fid?[x.fid]:[],created:Date.now()};
  if(x.bill){t.bill=true;x.cat.xbill=1}if(tip>0)t.tip=tip;S.txs.push(t);
  const b={id:uid(),date:x.date,time:x.rc.time||(x.date===today()?nowTime():''),rt:x.rc.time||'',no:x.rc.no||'',txId:t.id,catId:x.cat.id,store:x.cat.name,items,total:tot,method:x.method,via:x.via,card:x.card?x.card.last4:'',deliv:x.deliv,fid:x.fid,ph:x.rc.ph||''};
  S.buys.push(b);save();render();if(x.rc.raw)ocrSave(b.id,x.rc.raw);contactFromReceipt(x.rc,x.cat);
  banner('🧾','تم تسجيل '+fmt(tot),x.cat.name,()=>buySheet(b.id),'ok');
};

/* --- الأقساط: تصليح تواريخ الدفعات السنوية --- */
try{const _psY=planSave;planSave=function(){
  grabPF();document.querySelectorAll('#sheet .pt tbody tr').forEach(tr=>tr.remove());
  const r=_psY.apply(this,arguments);
  try{if($('#sheet').classList.contains('open')&&$('#q1'))planForm()}catch(e){}return r}}catch(e){}

/* --- الأقساط: "نوع القسط" قايمة فوق، وكل الأقسام مقفولة لحد ما تفتحها --- */
try{const _xpp=xPfPost;xPfPost=function(){_xpp.apply(this,arguments);try{
  const seg=$('#q-pt');if(seg)seg.outerHTML=`<label id="q-ptl">نوع القسط<select id="q-ptsel" onchange="grabPF();PF.ptype=this.value;planForm()">${[['norm','🏦 قسط عادي'],['cc','💳 قسط كريديت كارد'],['app','📱 قسط أبلكيشن'],['prop','🏠 عقار / وحدة']].map(([k,l])=>`<option value="${k}" ${PF.ptype===k?'selected':''}>${l}</option>`).join('')}</select></label>`;
  document.querySelectorAll('#q-sec details').forEach((d,i)=>{const key=i?'_om':'_oa';d.open=!!PF[key];d.ontoggle=()=>{PF[key]=d.open}});
}catch(e){}}}catch(e){}

/* --- تحصيل العميل: التكرار للمعرفة فقط --- */
try{const _tfK=txForm;txForm=function(){const r=_tfK.apply(this,arguments);try{
  const k=$('#f-clk');if(k){const cur=F&&F.cat&&F.cat!=='__new'&&C(F.cat);XCLFK=cur&&cur.fixed?(isAnn(cur)?'y':'m'):'o';
    k.outerHTML=`<div class="kv" id="f-clinf"><span>🔁 التكرار</span><b>${cur&&cur.fixed?esc(everyTxt(cur.every)):'غير ثابت'}</b></div>`}
}catch(e){}return r}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.62 ========== */
/* --- Undo: فوق الشاشة، ويختفي تمامًا --- */
(()=>{const s=document.createElement('style');s.textContent=`
.xub{top:calc(env(safe-area-inset-top) + 10px)!important;bottom:auto!important;transform:translate(-50%,-260%)!important;opacity:0!important;pointer-events:none!important;transition:transform .3s,opacity .3s!important}
.xub.on{transform:translate(-50%,0)!important;opacity:1!important;pointer-events:auto!important}
`;document.head.appendChild(s)})();

/* --- الأقساط: مقسمة حسب النوع في قوايم --- */
var XPLO={},XINO={};
function xPType(p){return p.ptype||(p.cc?'cc':xIsAppPlan(p)?'app':'norm')}
var XPTN={norm:['🏦','أقساط عادية'],cc:['💳','أقساط كريديت كارد'],app:['📱','أقساط أبلكيشن'],prop:['🏠','عقارات ووحدات']};
vInst=function(){
  const td=today();let rem=0,mo=0,late=0;
  S.plans.forEach(p=>{const s=planStats(p);rem+=s.total-s.paid;late+=s.late;p.items.forEach(it=>{if(!itTx(it)&&it.due&&it.due.startsWith(NKM)&&it.k!=='mnt')mo+=+it.amount||0})});
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏦 ${esc(L('inst'))}</h3></div><button class="btn" onclick="planNew()">➕ قسط جديد</button>`
    +kpis([['💳 المتبقي عليك',fmt(r2(rem)),'exp'],['📅 هذا الشهر',fmt(r2(mo)),'warn'],['⚠️ متأخر',String(late),'net']]);
  if(!S.plans.length)return h+'<p class="empty">لا توجد أقساط</p>';
  const card=p=>{const s=planStats(p),nx=s.next,pc=s.total?Math.min(100,Math.round(s.paid/s.total*100)):0;
    return `<div class="xlnc" onclick="instPlan='${p.id}';go('plan')"><div class="xlnr"><b>${esc(p.name)}</b><span class="xlnbig" dir="ltr">${num(r2(s.total-s.paid))}</span></div>
    <div class="xlnr xsm"><span>${s.paidN}/${s.n} قسط · المتبقي من ${num(s.total)}</span></div><div class="xbar"><i style="width:${pc}%"></i></div>
    <div class="xlnn">${nx?(s.late?xCh('late','⚠️ '+s.late+' متأخر'):nx.due===td?xCh('tdy','🔔 اليوم'):xCh('up','⏳ القادم'))+` <b>${num(+nx.amount||0)}</b> · <b>${xDW(nx.due)}</b>`:xCh('ok','✅ انتهت')}</div>
    ${nx?`<div class="xlna"><button class="btn" onclick="event.stopPropagation();${p.cc?`xCcPay('${p.acct}')`:`payStart('${p.id}','${nx.id}')`}">✓ ادفع القسط</button><button class="btn ghost" onclick="event.stopPropagation();instPlan='${p.id}';go('plan')">📄 التفاصيل</button></div>`:''}</div>`};
  Object.keys(XPTN).forEach(k=>{
    const Lp=S.plans.filter(p=>xPType(p)===k).sort((a,b)=>{const x=planStats(a).next,y=planStats(b).next;return(x?x.due:'9')<(y?y.due:'9')?-1:1});if(!Lp.length)return;
    const r=r2(Lp.reduce((a,p)=>{const s=planStats(p);return a+s.total-s.paid},0));
    h+=`<details class="grp" ${XINO[k]?'open':''} ontoggle="XINO['${k}']=this.open"><summary><span>${XPTN[k][0]} ${XPTN[k][1]}</span><span class="badge soon">${Lp.length}</span><b class="gs neg">${num(r)}</b></summary>${Lp.map(card).join('')}</details>`;
  });
  return h;
};
/* تفاصيل القسط: الجدول مقفول، وزرارين للتعديل والحذف */
try{const _vpC2=vPlan;vPlan=function(){let h=_vpC2.apply(this,arguments);
  return h.replace('<details class="grp" open>',`<details class="grp" ${XPLO[instPlan]?'open':''} ontoggle="XPLO[instPlan]=this.open">`)
    .replace('</summary><div class="list">',`</summary><div class="xlna"><button class="btn ghost" onclick="planEdit(instPlan);xInstAmt()">✏️ تعديل قيمة القسط</button><button class="btn ghost danger" onclick="planEdit(instPlan);xInstDelAll()">🗑 حذف الأقساط</button></div><div class="list">`)}}catch(e){}

/* --- حذف الأقساط من الجدول --- */
async function xInstDelAll(){
  grabPF();const reg=PF.items.filter(i=>!i.k),paid=reg.filter(i=>i.txId);if(!reg.length)return toast('لا توجد أقساط');let delPaid=false;
  if(paid.length){const r=await ask('يوجد قسط مدفوع',`يوجد ${paid.length} قسط مدفوع. هل تريد حذفها أيضًا؟\n(المصروفات المدفوعة فعلًا ستبقى مسجلة)`,{icon:'⚠️',ok:'Yes',cancel:'No',danger:true});if(r===null)return;delPaid=!!r}
  else if(!await ask('حذف الأقساط؟',`سيتم حذف ${reg.length} قسط من الجدول.`,{icon:'🗑',ok:'حذف',danger:true}))return;
  PF.items=PF.items.filter(i=>i.k||(i.txId&&!delPaid));PF._open=true;planForm();
  toast('تم الحذف من الجدول · ولّد الأقساط من جديد ثم اضغط حفظ');
}
/* بعد الحفظ: مسح علامات "مدفوع سابقًا" للأقساط المحذوفة */
try{const _psZ=planSave;planSave=function(){const r=_psZ.apply(this,arguments);try{if(!$('#sheet').classList.contains('open')){const p=plan(instPlan);if(p){const ids=new Set(p.items.map(i=>i.id)),n=S.txs.length;
  S.txs=S.txs.filter(t=>!(t.xpre&&t.src&&t.src.k==='i'&&t.src.id===p.id&&!ids.has(t.src.p)));if(S.txs.length!==n){save();render()}}}}catch(e){}return r}}catch(e){}

/* --- تعديل قيمة القسط: الكل / شهر معين / أكثر من شهر --- */
var XIAM={v:'',mode:'all',sel:{},one:''};
function xIaUn(){return PF.items.filter(i=>!i.txId&&!i.k&&i.due).sort((a,b)=>a.due.localeCompare(b.due))}
function xInstAmt(){grabPF();if(!xIaUn().length)return toast('لا توجد أقساط غير مدفوعة');XIAM={v:'',mode:'all',sel:{},one:''};xInstAmtSheet()}
function xIaGrab(){if($('#ia-v'))XIAM.v=$('#ia-v').value;if($('#ia-one'))XIAM.one=$('#ia-one').value;document.querySelectorAll('#sheet [data-ia]').forEach(c=>{XIAM.sel[c.dataset.ia]=c.checked})}
function xInstAmtSheet(){const un=xIaUn();
  sheet(`<h2>✏️ تعديل قيمة القسط</h2>
  <label>القيمة الجديدة<input id="ia-v" class="amt-in" inputmode="decimal" dir="ltr" placeholder="0" value="${esc(XIAM.v)}"></label>
  <div class="seg">${[['all','على الكل'],['one','شهر معين'],['many','أكثر من شهر']].map(([k,l])=>`<button type="button" class="${XIAM.mode===k?'on':''}" onclick="xIaGrab();XIAM.mode='${k}';xInstAmtSheet()">${l}</button>`).join('')}</div>
  ${XIAM.mode==='one'?`<label>الشهر<select id="ia-one">${un.map(i=>`<option value="${i.id}" ${XIAM.one===i.id?'selected':''}>${xDW(i.due)} · ${num(+i.amount||0)}</option>`).join('')}</select></label>`:''}
  ${XIAM.mode==='many'?`<div class="list">${un.map(i=>`<label class="row" style="cursor:pointer"><input type="checkbox" data-ia="${i.id}" ${XIAM.sel[i.id]?'checked':''} style="width:22px;height:22px;margin:0"><div class="grow"><b>${xDW(i.due)}</b><small>القيمة الحالية ${num(+i.amount||0)}</small></div></label>`).join('')}</div>`:''}
  <p class="muted">التعديل يُطبق على الأقساط غير المدفوعة فقط</p>
  <button class="btn" onclick="xInstAmtSv()">✅ تطبيق</button><button class="btn ghost" onclick="planForm()">رجوع</button>`)}
function xInstAmtSv(){xIaGrab();const v=parseNum(XIAM.v);if(!(v>0))return toast('اكتب القيمة');const un=xIaUn();let ids;
  if(XIAM.mode==='all')ids=un.map(i=>i.id);else if(XIAM.mode==='one')ids=[XIAM.one||(un[0]||{}).id];else ids=Object.keys(XIAM.sel).filter(k=>XIAM.sel[k]);
  if(!ids.length)return toast('اختر شهرًا واحدًا على الأقل');
  PF.items.forEach(i=>{if(ids.includes(i.id))i.amount=amtStr(v)});PF._open=true;planForm();toast(`تم تعديل ${ids.length} قسط · اضغط حفظ`)}
/* الزرارين جوه جدول الأقساط في شاشة التعديل */
try{const _xpq=xPfPost;xPfPost=function(){_xpq.apply(this,arguments);try{const e=document.querySelector('#q-sch .etbar');if(e&&!e.querySelector('.xiab'))e.insertAdjacentHTML('beforeend',`<button class="mini xiab" onclick="xInstAmt()">✏️ تعديل قيمة القسط</button><button class="mini danger" onclick="xInstDelAll()">🗑 حذف الأقساط</button>`)}catch(e){}}}catch(e){}

/* --- الرجوع لآخر حاجة كنت بتعدلها (خلال دقيقتين) --- */
function xCfRe(c){CF=c;catSheet()}
function xPfRe(p){PF=p;planForm()}
function xPayRe(p){PAY=p;paySheet()}
function xCcRe(c){XCC=c;xCcSheet()}
var XDRS={xTxRe:()=>{grab();return F},xCfRe:()=>{grabCF();return CF},xPfRe:()=>{grabPF();return PF},xPayRe:()=>{grabPay();return PAY},xCcRe:()=>{xCcGrab();return XCC}};
function xDrState(n,fnName,get){try{const f=window[fnName];window[fnName]=function(){const r=f.apply(this,arguments);try{const v=get();if(v&&$('#sheet').classList.contains('open'))XDR={n,a:[JSON.parse(JSON.stringify(v))]}}catch(e){}return r}}catch(e){}}
xDrState('xTxRe','txForm',()=>F);xDrState('xCfRe','catSheet',()=>CF);xDrState('xPfRe','planForm',()=>PF);xDrState('xPayRe','paySheet',()=>PAY);xDrState('xCcRe','xCcSheet',()=>XCC);
function xDrPost(n){try{const f=window[n];if(typeof f!=='function')return;window[n]=function(){const a=[...arguments],r=f.apply(this,arguments);try{if($('#sheet').classList.contains('open')){JSON.stringify(a);XDR={n,a}}}catch(e){}return r}}catch(e){}}
['editMethod','xReconBase','cashForm','xClForm','xClDet','xClPay','xClPrice','xLnNew','xLnPay','xLnEdit','xLnDefer','xLnResch','xLnEx','xRemForm','xTypeForm','xBankFee','xCashSheet','xPost','xColSheet','xPartial','xInstAmtSheet','occSheet','xCcOpenTot','cardForm','renForm','ctForm','docForm'].forEach(xDrPost);
/* لما تخرج: يحفظ آخر حاجة لمدة دقيقتين */
document.addEventListener('visibilitychange',()=>{if(document.visibilityState!=='hidden')return;try{
  const sh=$('#sheet'),open=sh&&sh.classList.contains('open');let d=null;try{d=JSON.parse(localStorage.getItem('centric-xdr')||'null')}catch(e){}d=d||{};
  if(open&&XDR&&XDRS[XDR.n]){try{XDR.a=[JSON.parse(JSON.stringify(XDRS[XDR.n]()))]}catch(e){}d.dr=XDR;d.vals=null}
  d.t=Date.now()+60000;localStorage.setItem('centric-xdr',JSON.stringify(d));
}catch(e){}});
/* البصمة: بعد ما تفتح، يرجعك للي كنت فيه */
var XLOCKDR=null;
try{const _slX=showLock;showLock=function(){try{const sh=$('#sheet');if(LK.pin&&sh&&sh.classList.contains('open')&&XDR){let dr=XDR,vals=null;
  if(XDRS[dr.n])dr={n:dr.n,a:[JSON.parse(JSON.stringify(XDRS[dr.n]()))]};
  else vals=[...sh.querySelectorAll('input,select,textarea')].map(e=>e.type==='checkbox'||e.type==='radio'?e.checked:e.type==='file'?null:e.value);
  XLOCKDR={dr,vals,t:Date.now()}}}catch(e){}return _slX.apply(this,arguments)}}catch(e){}
try{const _ulX=unlock;unlock=function(){const r=_ulX.apply(this,arguments);const x=XLOCKDR;XLOCKDR=null;
  if(x&&Date.now()-x.t<36e5)setTimeout(()=>{try{if($('#sheet').classList.contains('open'))return;const f=window[x.dr.n];if(typeof f==='function'){f.apply(null,x.dr.a);if(x.vals)setTimeout(()=>xDrFill(x.vals),80)}}catch(e){}},700);
  return r}}catch(e){}
/* المسودة القديمة (أكتر من دقيقتين) ما تفتحش */
try{const _doX=draftOpen;draftOpen=function(){const x=draftGet();if(x&&Date.now()-x.t>120000){draftClear();return}return _doX.apply(this,arguments)}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.63 ========== */
/* --- حذف الأقساط: اختيارات واضحة + الدفعات السنوية --- */
xInstDelAll=function(){
  grabPF();const reg=PF.items.filter(i=>!i.k),paid=reg.filter(i=>i.txId),annRows=(PF.ann||[]).length;
  if(!reg.length&&!annRows)return toast('لا توجد أقساط');
  sheet(`<h2>🗑 حذف الأقساط</h2>
  <div class="kv"><span>الأقساط</span><b>${reg.length}${paid.length?' · منها '+paid.length+' مدفوع':''}</b></div>
  ${annRows?`<label class="chk fxbox"><input type="checkbox" id="xd-ann"> 📆 حذف الدفعات السنوية أيضًا (${annRows})</label>`:''}
  ${paid.length?`<p class="warn">⚠️ يوجد ${paid.length} قسط مدفوع. المصروفات المدفوعة فعلًا ستبقى مسجلة.</p>
  <button class="btn dz" onclick="xInstDelGo(1)">🗑 حذف الكل بما فيها المدفوعة</button>
  <button class="btn ghost danger" onclick="xInstDelGo(0)">🗑 حذف غير المدفوعة فقط</button>`
  :`<button class="btn dz" onclick="xInstDelGo(0)">🗑 حذف</button>`}
  <button class="btn ghost" onclick="planForm()">إلغاء</button>`);
};
function xInstDelGo(all){
  const da=!!($('#xd-ann')&&$('#xd-ann').checked);
  PF.items=PF.items.filter(i=>{if(i.k==='mnt')return true;if(i.k==='ann'&&!da)return true;return !!(i.txId&&!all)});
  if(da)PF.ann=(PF.ann||[]).filter(r=>PF.items.some(i=>i.id===r.id));
  PF._open=true;planForm();toast('تم الحذف من الجدول · اضغط حفظ');
}

/* --- زرار تعديل قدام كل قسط ودفعة سنوية --- */
try{const _vpE=vPlan;vPlan=function(){let h=_vpE.apply(this,arguments);
  return h.replace(/onclick="xInstPre\('([^']+)','([^']+)'\)">✔<\/button>/g,`onclick="xInstPre('$1','$2')">✔</button><button class="mini" onclick="xItEdit('$1','$2')">✏️</button>`)}}catch(e){}
function xItEdit(pid,iid){const p=plan(pid),it=p&&p.items.find(x=>x.id===iid);if(!it)return;
  sheet(`<h2>✏️ تعديل ${it.k==='ann'?'الدفعة السنوية':it.k==='mnt'?'دفعة الصيانة':'القسط'}</h2><p class="muted">${esc(p.name)}</p>
  <label>📅 الموعد<input id="ie-d" type="date" value="${it.due||''}"></label>
  <label>💰 القيمة<input id="ie-a" class="amt-in" inputmode="decimal" dir="ltr" value="${amtStr(+it.amount||0)}"></label>
  <button class="btn" onclick="xItEditSv('${pid}','${iid}')">💾 حفظ</button>
  <button class="btn ghost danger" onclick="xItDel('${pid}','${iid}')">🗑 حذف هذا القسط</button>
  <button class="btn ghost" onclick="closeSheet()">إلغاء</button>`)}
function xItEditSv(pid,iid){const p=plan(pid),it=p&&p.items.find(x=>x.id===iid);if(!it)return;
  const d=$('#ie-d').value,a=parseNum($('#ie-a').value);if(!d)return toast('اختر الموعد');if(!(a>0))return toast('اكتب القيمة');
  it.due=d;it.amount=a;const row=(p.ann||[]).concat(p.mnt||[]).find(x=>x.id===iid);if(row){row.d=d;row.a=String(a)}
  p.items.sort((x,y)=>(x.due||'').localeCompare(y.due||''));save();closeSheet();render();toast('تم الحفظ')}
async function xItDel(pid,iid){const p=plan(pid),it=p&&p.items.find(x=>x.id===iid);if(!it)return;
  if(!await ask('حذف هذا القسط؟',xDW(it.due)+' · '+num(+it.amount||0),{danger:true,icon:'🗑',ok:'حذف'}))return;
  p.items=p.items.filter(x=>x.id!==iid);p.ann=(p.ann||[]).filter(x=>x.id!==iid);p.mnt=(p.mnt||[]).filter(x=>x.id!==iid);
  save();closeSheet();render();toast('تم الحذف')}
try{render()}catch(e){}
/* ========== 2.21.64 ========== */
/* القسط المدفوع: قيمته في الجدول = المبلغ اللي اتدفع فعلًا */
function xInstSync(){let ch=0;
  S.plans.forEach(p=>p.items.forEach(it=>{const t=it.txId&&S.txs.find(x=>x.id===it.txId);
    if(t&&!t.xpre&&Math.abs((+it.amount||0)-t.amount)>.001){it.amount=t.amount;ch=1}}));
  if(ch)save();}
try{const _rnIS=render;render=function(){try{xInstSync()}catch(e){}return _rnIS.apply(this,arguments)}}catch(e){}
try{xInstSync();render()}catch(e){}
/* ========== 2.21.65 ========== */
/* أي خروج من الشاشة:
   - الأرصدة تتقفل والباسورد يتطلب تاني
   - كل القوايم المنسدلة ترجع مقفولة */
try{const _goBA=go;go=function(v){
  if(v!==view){
    XBAUTH=0;XBALOK=false;try{XBSHOW.clear()}catch(e){}
    XINO={};XPLO={};GOPEN={};
  }
  return _goBA.apply(this,arguments)}}catch(e){}
/* ========== 2.21.66 ========== */
/* إنشاء الأقساط: الشهر المدفوع بالفعل ما يتعملش تاني، وبيتحسب من العدد */
try{const _giX=genItems;genItems=async function(){
  grabPF();const before=new Set(PF.items.map(i=>i.id));
  await _giX.apply(this,arguments);
  const paidM=new Set(PF.items.filter(i=>i.txId&&!i.k&&i.due).map(i=>i.due.slice(0,7)));
  const n0=PF.items.length;
  PF.items=PF.items.filter(i=>before.has(i.id)||!paidM.has((i.due||'').slice(0,7)));
  if(PF.items.length!==n0){planForm();toast('تم إنشاء الأقساط · تم تخطي '+(n0-PF.items.length)+' شهر مدفوع بالفعل')}
}}catch(e){}

/* "توليد" بقت "إنشاء" في كل البرنامج */
(()=>{const run=()=>{const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
  while((n=w.nextNode())){const v=n.nodeValue;if(v&&(v.indexOf('توليد')>-1||v.indexOf('اتولّد')>-1)){const x=v.replace(/اتولّد/g,'تم إنشاء').replace(/توليد/g,'إنشاء');if(x!==v)n.nodeValue=x}}};
  let q=false;new MutationObserver(()=>{if(q)return;q=true;requestAnimationFrame(()=>{q=false;try{run()}catch(e){}})}).observe(document.body,{childList:true,subtree:true,characterData:true});run()})();
/* ========== 2.21.67 ========== */
/* ✏️ للأقساط "المدفوعة سابقًا" */
try{const _vpP=vPlan;vPlan=function(){let h=_vpP.apply(this,arguments);
  return h.replace(/<div class="acts"><button class="mini" onclick="unpay\('([^']+)','([^']+)'\)">↩<\/button>/g,
    `<div class="acts"><button class="mini" onclick="xItEdit('$1','$2')">✏️</button><button class="mini" onclick="unpay('$1','$2')">↩</button>`)}}catch(e){}
/* تعديل قسط "مدفوع سابقًا": المبلغ والتاريخ يتعدلوا في الاتنين */
try{const _ies=xItEditSv;xItEditSv=function(pid,iid){const r=_ies.apply(this,arguments);try{
  const p=plan(pid),it=p&&p.items.find(x=>x.id===iid),t=it&&itTx(it);
  if(t&&t.xpre&&(t.amount!==+it.amount||t.date!==it.due)){t.amount=+it.amount;t.date=it.due;save();render()}}catch(e){}return r}}catch(e){}
/* حذف قسط "مدفوع سابقًا": العلامة تتشال معاه */
try{const _idl=xItDel;xItDel=async function(pid,iid){const p=plan(pid),it=p&&p.items.find(x=>x.id===iid),tid=it&&it.txId;
  const r=await _idl.apply(this,arguments);try{
  if(tid&&plan(pid)&&!plan(pid).items.some(x=>x.id===iid)){const t=S.txs.find(x=>x.id===tid);if(t&&t.xpre){S.txs=S.txs.filter(x=>x!==t);save();render()}}}catch(e){}return r}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.68 ========== */
/* دفع قسط قبل الشهر الحالي: يسأل مدفوع سابقًا ولا دفع فعلي */
try{const _psB=payStart;payStart=async function(pid,iid){
  const p=plan(pid),it=p&&p.items.find(x=>x.id===iid);
  if(it&&it.due&&it.due<NKM+'-01'&&!itTx(it)){
    const r=await ask('قسط قبل الشهر الحالي',`ميعاده ${xDW(it.due)}.\nهل تم دفعه قبل بدء التسجيل في البرنامج؟`,{icon:'🏦',ok:'✔ مدفوع سابقًا (بدون مصروف)',cancel:'💸 تسجيل دفع فعلي'});
    if(r===null)return;if(r)return xInstPre(pid,iid);
  }
  return _psB.apply(this,arguments)}}catch(e){}

/* تحويل قسط مدفوع فعليًا إلى "مدفوع سابقًا" (زي قسط يوليو) */
async function xToPre(pid,iid){const p=plan(pid),it=p&&p.items.find(x=>x.id===iid),t=it&&itTx(it);if(!t||t.xpre)return;
  if(!await ask('تحويله إلى مدفوع سابقًا؟',`سيتم حذف المصروف المسجل (${fmt(t.amount)} · ${dmy(t.date)}) ومصاريفه، ويبقى القسط مدفوعًا بدون تأثير على الحسابات.`,{icon:'✔',ok:'تحويل'}))return;
  S.txs=S.txs.filter(x=>x.feeOf!==t.id&&x.payFeeOf!==t.id);
  Object.assign(t,{xpre:1,method:'',via:'',date:it.due,note:'✔ مدفوع سابقًا'});
  save();render();toast('تم التحويل إلى مدفوع سابقًا')}
try{const _vpT=vPlan;vPlan=function(){let h=_vpT.apply(this,arguments);try{const p=plan(instPlan);if(p)p.items.forEach(it=>{const t=itTx(it);
  if(t&&!t.xpre&&it.due&&it.due<NKM+'-01'){const s=`onclick="unpay('${p.id}','${it.id}')">↩</button>`;h=h.replace(s,s+`<button class="mini" title="مدفوع سابقًا" onclick="xToPre('${p.id}','${it.id}')">✔</button>`)}})}catch(e){}return h}}catch(e){}

/* قفل الشهور: علامة "مدفوع سابقًا" مش حركة في الشهر */
try{const _vmX=vMonths;vMonths=function(){const T=S.txs;S.txs=T.filter(t=>!t.xpre);try{return _vmX.apply(this,arguments)}finally{S.txs=T}}}catch(e){}

/* إشعارات الموبايل اللي حالتها اتحلّت بتتمسح لوحدها */
var XNCT=0;
function xNClean(){clearTimeout(XNCT);XNCT=setTimeout(()=>{try{if(!navigator.serviceWorker)return;
  navigator.serviceWorker.ready.then(reg=>reg.getNotifications?reg.getNotifications():[]).then(ns=>{
    const al=unread(),ids=new Set(al.map(a=>a.id));
    ns.forEach(n=>{const g=n.tag||'';if(g.startsWith('test-'))return;if(g==='masrofi-sum'?!al.length:!ids.has(g))n.close()})}).catch(()=>{})}catch(e){}},1000)}
try{const _rnN=render;render=function(){const r=_rnN.apply(this,arguments);xNClean();return r}}catch(e){}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')xNClean()});
try{render()}catch(e){}
/* ========== 2.21.69 ========== */
/* keyTx في app.js معمولة const فمينفعش تتعدّل.
   فبنصفّي العمليات عند الشاشات اللي بتستخدمها بدلها */
function xHasReal(k){return S.txs.some(t=>!t.pend&&!t.xpre&&t.date.startsWith(k+'-'))}

/* الرئيسية: تنبيه "الشهر اللي فات مفتوح" بس لو فيه حركات حقيقية */
try{const _vhW=vHome;vHome=function(){let h=_vhW.apply(this,arguments);
  try{if(!xHasReal(prevKey(NKM)))h=h.replace(/<div class="warn" onclick="go\('months'\)">[^<]*<\/div>/,'')}catch(e){}return h}}catch(e){}
try{const _alC2=alerts;alerts=function(){const out=_alC2.apply(this,arguments);
  try{const pk=prevKey(NKM);if(!xHasReal(pk))return out.filter(a=>a.id!=='close-'+pk)}catch(e){}return out}}catch(e){}

/* المصروفات: من غير علامات "مدفوع سابقًا" */
try{const _veX=vExps;vExps=function(){const T=S.txs;S.txs=T.filter(t=>!t.xpre);try{return _veX.apply(this,arguments)}finally{S.txs=T}}}catch(e){}

/* التحصيلات: من غير "مدفوع سابقًا"، و"تحصيل مقابل دفع كريديت" في قسمه بس */
try{const _vcX=vCol;vCol=function(){
  const T=S.txs;S.txs=T.filter(t=>!t.xpre&&!(t.ccr&&t.type==='inc'));let h;
  try{h=_vcX.apply(this,arguments)}finally{S.txs=T}
  try{const k=ym(cur.y,cur.m),l=S.txs.filter(t=>t.ccr&&t.type==='inc'&&!t.pend&&t.date.startsWith(k+'-')).sort(byDesc);
    if(l.length)h+=grp('ccr','تحصيل مقابل دفع كريديت',l.length,r2(l.reduce((a,t)=>a+t.amount,0)),'pos',l.map(txRow).join(''))}catch(e){}
  return h}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.70 ========== */
/* كل نوع عملية له شاشة لوحده: من غير اختيارات الأنواع التانية */
var XTYL={exp:{fix:'📌 مصروف ثابت',bill:'🧾 فاتورة',other:'🛒 أخرى',loan:'🤝 سلفة',inst:'🏦 قسط'},inc:{fix:'📌 تحصيل ثابت',cl:'👥 تحصيل عميل',other:'💵 أخرى',ccr:'💳 مقابل دفع كريديت',loan:'🤝 سداد سلفة'}};
xNewPick=function(type,k){
  if(k==='loan'){closeSheet();return xLnNew()}
  newTx(type,1);if(!F)return;F.xtype=k;
  if(k==='fix')F.fix=true;if(k==='bill'){F.isBill=true;F.feeOn=false}if(k==='ccr')F.ccr=true;
  SHKEEP=1;txForm();if(k==='cl')try{xClFM(1)}catch(e){}
};
function xTxType(){
  if(!F||F.type==='tr')return '';if(F.xtype)return F.xtype;
  const o=F.id&&S.txs.find(t=>t.id===F.id),cur=F.cat&&F.cat!=='__new'&&C(F.cat);if(!o)return '';
  if(F.type==='inc'){if(o.ccr)return 'ccr';if(o.xlnp)return 'loan';if(o.cl)return 'cl';if((cur&&cur.fixed)||(o.src&&o.src.k==='r'))return 'fix';return 'other'}
  if(o.src&&o.src.k==='i')return 'inst';if(o.xlno)return 'loan';if(o.bill)return 'bill';if((cur&&cur.fixed)||(o.src&&o.src.k==='r'))return 'fix';return 'other';
}
try{const _tfT=txForm;txForm=function(){const r=_tfT.apply(this,arguments);try{
  const sz=$('#sheet .sz'),t=xTxType();if(!sz||!t)return r;F.xtype=t;
  /* شيل أزرار الأنواع */
  sz.querySelectorAll(':scope > .xchips').forEach(e=>e.remove());
  /* اسم النوع تحت العنوان */
  const h2=sz.querySelector('h2');if(h2&&!$('#xtyp'))h2.insertAdjacentHTML('afterend',`<div class="kv" id="xtyp"><span>نوع العملية</span><b>${(XTYL[F.type]||{})[t]||''}</b></div>`);
  /* Receipt Scan للفاتورة وأخرى بس */
  if(!(F.type==='exp'&&(t==='bill'||t==='other'))){const b=sz.querySelector(':scope > .btn[onclick="scanReceipt()"]');if(b)b.remove()}
  /* التحصيل: العميل يظهر في "تحصيل عميل" بس */
  if(F.type==='inc'){const cm=$('#f-clm');
    if(t==='cl'){if(cm)cm.remove();const w=$('#f-clw');if(w)w.style.display=''}
    else{const cf=sz.querySelector('.xclf');if(cf)cf.remove()}}
}catch(e){}return r}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.71 ========== */
/* --- وقت النسخ على Drive --- */
function xBkS(){return Object.assign({mode:'change',h:21,wd:5},GD.sched||{})}
function xBkLast(){return GD.last?new Date(GD.last).getTime():0}
function xBkPrev(s){const n=new Date(),d=new Date(n);d.setMinutes(0,0,0);d.setHours(s.h);
  if(s.mode==='day'){if(d>n)d.setDate(d.getDate()-1);return d.getTime()}
  if(s.mode==='week'){d.setDate(d.getDate()-((d.getDay()-s.wd+7)%7));if(d>n)d.setDate(d.getDate()-7);return d.getTime()}
  return 0}
function xBkDue(){const s=xBkS();if(s.mode==='manual')return false;if(s.mode==='change')return true;
  if(s.mode==='hour')return Date.now()-xBkLast()>=3600e3;return xBkLast()<xBkPrev(s)}
function xBkNext(){const s=xBkS();if(s.mode==='manual')return 'يدوي فقط';if(s.mode==='change')return 'بعد أي تعديل';
  const t=s.mode==='hour'?Math.max(Date.now(),xBkLast()+3600e3):xBkPrev(s)+(s.mode==='day'?864e5:7*864e5);
  return new Date(t).toLocaleString('ar-EG',{weekday:'long',day:'numeric',month:'numeric',hour:'numeric',minute:'2-digit'})}
function xBkSet(k,v){GD.sched=xBkS();GD.sched[k]=k==='mode'?v:+v;GD.auto=GD.sched.mode!=='manual';saveGD();render()}
/* النسخ التلقائي بيمشي على الوقت اللي اخترته */
try{const _duX=driveUpload;driveUpload=async function(interactive){if(!interactive&&!xBkDue())throw new Error('skip');return _duX.apply(this,arguments)}}catch(e){}
setInterval(()=>{try{
  if(DEMO||!GD.linked||!GD.cid||document.visibilityState!=='visible')return;
  const s=xBkS();if(s.mode==='change'||s.mode==='manual'||!xBkDue())return;
  if(strHash(JSON.stringify(S))===GD.hash)return;
  driveUpload(false).then(()=>{toast('☁️ تم عمل نسخة احتياطية');try{render()}catch(e){}}).catch(()=>{});
}catch(e){}},60000);

/* --- شاشة واحدة للنسخ الاحتياطي --- */
try{const i=SETS.findIndex(x=>x[0]==='drive');if(i>=0)SETS.splice(i,1)}catch(e){}
function spBkSched(){const s=xBkS(),hrs=Array.from({length:24},(_,h)=>[h,(h%12||12)+':00 '+(h<12?'ص':'م')]);
  return `<h3>⏰ وقت النسخ على Drive</h3><div class="box">
  <label>النسخ يتم<select onchange="xBkSet('mode',this.value)">${[['change','تلقائيًا بعد أي تعديل'],['hour','كل ساعة'],['day','كل يوم'],['week','كل أسبوع'],['manual','يدويًا فقط']].map(([k,l])=>`<option value="${k}" ${s.mode===k?'selected':''}>${l}</option>`).join('')}</select></label>
  ${s.mode==='week'?`<label>اليوم<select onchange="xBkSet('wd',this.value)">${XWD.map((n,i)=>`<option value="${i}" ${s.wd===i?'selected':''}>${n}</option>`).join('')}</select></label>`:''}
  ${s.mode==='day'||s.mode==='week'?`<label>الساعة<select onchange="xBkSet('h',this.value)">${hrs.map(([h,l])=>`<option value="${h}" ${s.h===h?'selected':''}>${l}</option>`).join('')}</select></label>`:''}
  <div class="kv"><span>📤 النسخة القادمة</span><b>${esc(xBkNext())}</b></div>
  <p class="muted" style="font-size:11.5px;margin:6px 0 0">النسخ يتم والبرنامج مفتوح فقط. لو البرنامج كان مقفول في الميعاد، النسخة تتعمل أول ما تفتحه.</p></div>`}
try{const _vsB=vSettings;vSettings=function(){
  if(stab==='drive')stab='data';
  if(stab!=='data')return _vsB.apply(this,arguments);
  let d='';try{d=spDrive()}catch(e){}
  d=d.replace(/<label class="chk fxbox"[^>]*><input type="checkbox"[^>]*GD\.auto[^>]*>[^<]*<\/label>/,'');
  const sch=GD.linked?spBkSched():'';
  const i=d.indexOf('<button class="btn ghost" onclick="driveNow()');
  if(i>=0)d=d.slice(0,i)+sch+d.slice(i);else d+=sch;
  return `<div class="phead"><button class="mini" onclick="stab='';render()">→</button><h3>💾 النسخ الاحتياطي</h3></div>
  <h3>☁️ Google Drive</h3>${d}<h3>📱 نسخة يدوية</h3>${spData()}`;
}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.72 ========== */
/* النسخ الاحتياطي: كل قسم قايمة مقفولة وانت اللي تفتحها */
var XBKO={},XBKSTAB='';
try{const _vsC=vSettings;vSettings=function(){
  const was=XBKSTAB;XBKSTAB=stab==='drive'?'data':stab;
  if(XBKSTAB!=='data')return _vsC.apply(this,arguments);
  stab='data';if(was!=='data')XBKO={};
  let d='';try{d=spDrive()}catch(e){}
  d=d.replace(/<label class="chk fxbox"[^>]*><input type="checkbox"[^>]*GD\.auto[^>]*>[^<]*<\/label>/,'');
  let m=spData(),loc='';const i=m.indexOf('<h3>🕒');if(i>=0){loc=m.slice(i).replace(/^<h3>[^<]*<\/h3>/,'');m=m.slice(0,i)}
  const sec=(k,t,body)=>`<details class="grp" ${XBKO[k]?'open':''} ontoggle="XBKO['${k}']=this.open"><summary><span>${t}</span></summary><div style="padding:4px 2px 10px">${body}</div></details>`;
  return `<div class="phead"><button class="mini" onclick="stab='';render()">→</button><h3>💾 النسخ الاحتياطي</h3></div>`
    +sec('dr','☁️ Google Drive',d)
    +(GD.linked?sec('sc','⏰ وقت النسخ على Drive',spBkSched().replace(/^<h3>[^<]*<\/h3>/,'')):'')
    +sec('mn','📱 نسخة يدوية',m)
    +(loc?sec('lc','🕒 نسخ تلقائية على الموبايل',loc):'');
}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.73 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xrv h4{margin:14px 0 6px;font-size:13.5px;display:flex;align-items:center;gap:6px}
.xrv .list .row small{display:block;margin-top:3px}
.xrvok{background:#dcfce7;color:#166534;border-radius:12px;padding:10px 12px;margin:8px 0;font-weight:700}
.xvseg{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:4px 0 8px}
.xvseg button{border:1px solid rgba(148,163,184,.35);border-radius:12px;padding:9px 4px;background:var(--card,#fff);color:inherit;font:inherit;font-size:12.5px;font-weight:700;cursor:pointer}
.xvseg button.on{background:var(--p);border-color:var(--p);color:#fff}
.xfxt{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;border:1px dashed color-mix(in srgb,var(--p) 45%,transparent);border-radius:12px;padding:10px 12px;margin:0 0 8px;background:transparent;color:inherit;font:inherit;font-weight:700;font-size:12.5px;cursor:pointer;text-align:start}
.xbt{display:grid;grid-template-columns:repeat(auto-fill,minmax(104px,1fr));gap:8px;margin:0 0 12px}
.xbt .tile{min-height:86px!important;border-radius:16px!important}
.xbt .tile b{font-size:12px;line-height:1.3;overflow-wrap:anywhere}
#view .phead{flex-wrap:wrap;row-gap:6px}
#view .phead h3{min-width:0}
#view .gsr input::placeholder{font-size:12.5px;opacity:.75}
#sheet .two{align-items:flex-end}
#sheet h4{margin:14px 0 6px}
#sheet .xfee .inl input{min-width:0}
#view .xlna .btn,#sheet .xlna .btn{min-height:42px}
.xaa .xrvb{flex:1 1 0!important}
`;document.head.appendChild(s)})();

/* ---------- الريسيت: الإجمالي والأصناف ---------- */
var XTOT_S=/(grand\s*total|net\s*(?:total|amount)|amount\s*due|total\s*due|to\s*pay|balance\s*due|الصافي|صافي|المطلوب|المستحق|اجمالي\s*الفاتور|الاجمالي\s*النهائي)/i;
var XTOT_N=/(total|الاجمالي|الإجمالي|اجمالي|إجمالي|المجموع|اجمالى|الاجمالى)/i;
var XTOT_P=/(paid|tender|cash\b|received|المدفوع|مدفوع|نقدا|نقدي|كاش(?![\u0621-\u064A]))/i;
var XTOT_C=/(change|الباقي|باقي|المتبقي|returned)/i;
var XTOT_T=/(قبل|vat|tax|ضريب|خصم|discount|saving|توفير|sub\s*-?\s*total)/i;
var XTOT_Q=/(qty|quantity|كمي|عدد|items|units|اصناف|أصناف)/i;
var XHEADW=/(الصنف|صنف|البيان|الكمي|كمي|السعر|سعر|القيم|قيم|item|description|qty|quantity|price|amount|total)/gi;
function xAmtNums(l){return (biClean(l).match(/\d[\d,]*(?:\.\d{1,2})?/g)||[]).map(x=>parseFloat(x.replace(/,/g,''))).filter(x=>x>0&&x<1e6)}
function xPickAmt(ns,decOnly){const d=ns.filter(x=>Math.abs(x-Math.round(x))>.001);if(d.length)return Math.max(...d);return decOnly||!ns.length?0:Math.max(...ns)}
function xTotalOf(text,items){
  const L=splitLines(text),S1=[],N1=[],P1=[],C1=[];
  L.forEach((l,i)=>{const u=normAr(l);if(XTOT_T.test(l)||XTOT_T.test(u))return;
    let lab='';
    if(XTOT_C.test(l)||XTOT_C.test(u))lab='c';
    else if(XTOT_S.test(l)||XTOT_S.test(u))lab='s';
    else if(XTOT_N.test(l)||XTOT_N.test(u))lab='n';
    else if(XTOT_P.test(l)||XTOT_P.test(u))lab='p';
    if(!lab)return;
    const q=XTOT_Q.test(l)||XTOT_Q.test(u);
    let ns=xAmtNums(l);if(!ns.length&&L[i+1]&&!/[A-Za-z\u0621-\u064A]{3,}/.test(L[i+1]))ns=xAmtNums(L[i+1]);
    const v=xPickAmt(ns,q);if(v>0)({s:S1,n:N1,p:P1,c:C1})[lab].push(r2(v))});
  const is=r2((items||[]).reduce((a,x)=>a+(+x.v||0),0)),all=S1.concat(N1,P1);
  if(is>0){const m=all.find(x=>Math.abs(x-is)<=Math.max(.05,is*.005));if(m)return m}
  if(S1.length)return S1[S1.length-1];
  if(N1.length){const c={};N1.forEach(x=>c[x]=(c[x]||0)+1);const rep=N1.filter(x=>c[x]>1);return rep.length?rep[rep.length-1]:N1[N1.length-1]}
  if(P1.length&&C1.length){const t=r2(Math.max(...P1)-Math.max(...C1));if(t>0)return t}
  if(P1.length)return Math.min(...P1);
  return is>0?is:0;
}
function xItemsOf(text){
  const L=splitLines(text),out=[];let st=0,pend='';
  for(let i=0;i<L.length;i++){if((L[i].match(XHEADW)||[]).length>=2&&!/\d{2,}/.test(L[i])){st=i+1;break}}
  if(!st){for(let i=0;i<Math.ceil(L.length*.5);i++)if(BI_META.test(L[i])||PHK.test(L[i]))st=i+1}
  const STOPW=/(sub\s*-?\s*total|vat|tax|ضريب|خصم|discount|service|خدم|رسوم|delivery|توصيل)/i;
  for(let i=st;i<L.length;i++){
    const l=L[i],u=normAr(l);
    if((l.match(XHEADW)||[]).length>=2&&!/\d/.test(l))continue;
    const ns=xAmtNums(l);
    if(XTOT_S.test(l)||XTOT_S.test(u)||XTOT_N.test(l)||XTOT_N.test(u)||XTOT_P.test(l)||XTOT_C.test(l)||STOPW.test(l)){if(out.length)break;pend='';continue}
    if(BI_META.test(l)||PHK.test(l)||ADRW.test(l)||VEND.test(l))continue;
    const name=biClean(l).replace(/[^A-Za-z\u0621-\u064A\s]/g,' ').replace(/\s+/g,' ').trim(),okN=name.replace(/\s/g,'').length>=2&&!SKIPM.test(l);
    if(!ns.length){if(okN)pend=name;continue}
    const n=(okN?name:'')||pend;if(!n)continue;pend='';
    let it=biSplit(ns);
    if(!it){const v=ns[ns.length-1];if(!(v>=.5))continue;const a=ns[0],q=ns.length>=2&&a!==v&&a>0&&a<=50&&Math.abs(a-Math.round(a))<.001?a:1;it={q,p:r2(v/q),v}}
    if(!(it.v>0)||it.v>=1e5)continue;
    out.push({n,q:it.q,p:it.p,v:it.v});
  }
  return out.slice(0,60);
}
function xRawMain(raw){return String(raw||'').split(/^──[^\n]*──$/m).map(s=>s.replace(/^⚠️[^\n]*$/gm,'').trim()).filter(Boolean)[0]||''}
try{const _prX=parseReceipt;parseReceipt=function(text){const r=_prX.apply(this,arguments);try{const t=xTotalOf(text,[]);if(t>0){r.total=t;r.TC=[t];r.rep=2}}catch(e){}return r}}catch(e){}
try{const _bpZ=biParse;biParse=function(t){let r=[];try{r=_bpZ.apply(this,arguments)}catch(e){}if(r&&r.length)return r;try{return xItemsOf(t)}catch(e){return[]}}}catch(e){}
try{const _rfX=receiptFlow;receiptFlow=async function(rc,fid){try{if(rc&&rc.raw){const main=xRawMain(rc.raw);if(main){
  const a=rc.items||[],b=xItemsOf(main),pre=xTotalOf(main,[])||rc.total,sm=l=>r2(l.reduce((x,y)=>x+(+y.v||0),0));
  const pick=!a.length?b:!b.length?a:pre?(Math.abs(sm(a)-pre)<=Math.abs(sm(b)-pre)?a:b):(a.length>=b.length?a:b);
  rc.items=pick;const t=xTotalOf(main,pick);if(t>0)rc.total=t;else if(!rc.total&&pick.length)rc.total=sm(pick)}}}catch(e){}
  return _rfX.apply(this,arguments)}}catch(e){}

/* ---------- 🎁 إكرامية لوحدها ---------- */
XTYL.exp.tip='🎁 إكرامية';
try{const _ntTp=newTx;newTx=function(type,skip){const r=_ntTp.apply(this,arguments);try{const g=$('#sheet .xtype');if(g&&!skip&&type!=='inc'&&!g.querySelector('[data-k="tip"]'))g.insertAdjacentHTML('beforeend',`<button type="button" data-k="tip" onclick="xNewPick('exp','tip')"><span>🎁</span>إكرامية<small>من غير مصروف تاني</small></button>`)}catch(e){}return r}}catch(e){}
var XSHPEND=null;
try{const _npT=xNewPick;xNewPick=function(type,k){const sh=XSHPEND;XSHPEND=null;
  if(k==='tip'){newTx('exp',1);if(F){const c=ensureCat('إكرامية','exp');c.active=true;F.xtype='tip';F.cat=c.id;F.cq=c.name;SHKEEP=1;txForm()}}
  else _npT.apply(this,arguments);
  if(sh&&F&&!F.id&&F.type===type){F.files=(F.files||[]).concat(sh);if(type==='exp'&&!F.via)F.via='instapay';SHKEEP=1;txForm()}
}}catch(e){}
try{const _xtt=xTxType;xTxType=function(){if(F&&!F.xtype&&F.type==='exp'){const c=F.cat&&C(F.cat);if(c&&c.name==='إكرامية')return 'tip'}return _xtt.apply(this,arguments)}}catch(e){}
try{const _csSh=closeSheet;closeSheet=function(){XSHPEND=null;return _csSh.apply(this,arguments)}}catch(e){}

/* ---------- 📌 مبلغ إضافي على بند ثابت ---------- */
function xTfPost2(){
  const sz=$('#sheet .sz');if(!sz||!F)return;const cur=F.cat&&F.cat!=='__new'&&C(F.cat);
  if(F.xtype==='tip'){const tp=$('#f-tip');if(tp){const l=tp.closest('label');if(l)l.remove()}const it=sz.querySelector('.xitb');if(it)it.remove()}
  if(!F.id&&cur&&cur.fixed&&F.type!=='tr'&&!$('#xvseg')){
    if(F.xvar==null)F.xvar=!!(F.xtype&&F.xtype!=='fix');
    const seg=`<div class="xvseg" id="xvseg"><button type="button" class="${F.xvar?'':'on'}" onclick="grab();F.xvar=false;SHKEEP=1;txForm()">📌 على الميعاد الثابت</button><button type="button" class="${F.xvar?'on':''}" onclick="grab();F.xvar=true;F.fix=false;SHKEEP=1;txForm()">➕ مبلغ إضافي</button></div>`;
    const msg='➕ هيتسجل مبلغ إضافي على البند، ومش هيأثر على الميعاد الثابت';
    const hint=[...sz.querySelectorAll('small.xhint')].find(s=>/ثابت/.test(s.textContent));
    if(hint){hint.insertAdjacentHTML('beforebegin',seg);if(F.xvar)hint.textContent=msg}
    else{const xs=sz.querySelector('button.xsel[onclick="xCatOpen()"]'),lab=xs&&xs.closest('label');if(lab)lab.insertAdjacentHTML('afterend',seg+(F.xvar?`<small class="muted xhint">${msg}</small>`:''))}
  }
  /* مصاريف إنستاباي المسجلة بتفضل ظاهرة */
  const fo=F.id&&xFeeTx(F.id),cb=$('#f-feeon');
  if(fo&&cb&&!cb.checked&&!F._feeT){const box=cb.closest('.xfee');if(box)box.innerHTML=`<div class="kv"><span>💸 مصاريف إنستاباي المسجلة</span><b>${fmt(fo.amount)} <button type="button" class="mini" onclick="editTx('${fo.id}')">✏️</button></b></div>`}
}
try{const _tfZ2=txForm;txForm=function(){const r=_tfZ2.apply(this,arguments);try{xTfPost2()}catch(e){}return r}}catch(e){}
try{const _stV=saveTx;saveTx=async function(){
  grab();const c=F&&!F.id&&F.xvar&&F.type!=='tr'&&F.cat&&F.cat!=='__new'&&C(F.cat);
  if(!c||!c.fixed)return _stV.apply(this,arguments);
  const before=new Set(S.txs.map(t=>t.id));F.fix=false;c.fixed=false;let r;
  try{r=await _stV.apply(this,arguments)}finally{c.fixed=true}
  try{const t=S.txs.find(x=>!before.has(x.id)&&x.cat===c.id&&!x.feeOf&&!x.payFeeOf);if(t){t.xvar=1;save();render()}}catch(e){}
  return r}}catch(e){}
function xHideVar(fn){return function(){
  const L=S.txs.filter(t=>t.xvar&&!t.src);if(!L.length)return fn.apply(this,arguments);
  const on=()=>L.forEach(t=>t.src={k:'xv'}),off=()=>L.forEach(t=>{if(t.src&&t.src.k==='xv')delete t.src});
  const sv=save;save=function(){off();try{return sv.apply(this,arguments)}finally{on()}};on();
  const done=()=>{off();save=sv};let r;
  try{r=fn.apply(this,arguments)}catch(e){done();throw e}
  if(r&&typeof r.then==='function')return r.finally(done);done();return r}}
try{autoPostFixed=xHideVar(autoPostFixed)}catch(e){}
try{xDedupe=xHideVar(xDedupe)}catch(e){}

/* ---------- مصاريف إنستاباي مش بتتمسح من غير ما تشيلها بإيدك ---------- */
document.addEventListener('change',e=>{if(F&&e.target&&e.target.id==='f-feeon')F._feeT=1},true);
document.addEventListener('input',e=>{const i=e.target&&e.target.id;if(F&&(i==='f-ifee'||i==='f-fee'))F._feeT=1},true);
try{const _stG=saveTx;saveTx=async function(){
  const fid=F&&F.id,old=fid&&xFeeTx(fid),cp=old?{...old}:null,touched=!!(F&&F._feeT);
  const r=await _stG.apply(this,arguments);
  try{if(cp&&!touched&&!$('#sheet').classList.contains('open')){const t=S.txs.find(x=>x.id===fid);
    if(t&&t.via==='instapay'&&!t.pend&&!xFeeTx(fid)&&!S.txs.some(x=>x.id===cp.id)){S.txs.push({...cp,date:t.date,method:t.method});save();render()}}}catch(e){}
  return r}}catch(e){}

/* ---------- 📒 بنود الحسابات ---------- */
var XACQ='',XACK='all',XACO={},XACP='y';
function xAccStats(){const m={},y=NY+'-';S.txs.forEach(t=>{if(!t.cat||t.pend||t.xpre||!t.date.startsWith(y))return;const x=m[t.cat]=m[t.cat]||{n:0,s:0};x.n++;x.s+=t.amount});return m}
XVW.xacc=()=>{
  const st=xAccStats(),q=XACQ.trim(),cats=S.cats.filter(c=>(XACK==='all'||c.kind===XACK)&&(c.active!==false||st[c.id])&&!/^مصاريف إنستاباي ·/.test(c.name));
  const G=[['if','💰 تحصيل · ثابت',c=>c.kind==='inc'&&c.fixed],['iv','💰 تحصيل · متغير',c=>c.kind==='inc'&&!c.fixed],['ef','💸 مصروف · ثابت',c=>c.kind==='exp'&&c.fixed],['ev','💸 مصروف · متغير',c=>c.kind==='exp'&&!c.fixed]];
  const card=c=>{const x=st[c.id]||{n:0,s:0};return `<div class="xacr" data-q="${esc(qn(c.name))}"><div class="xlnc" onclick="xAccOpen('${c.id}')"><div class="xlnr"><b>${c.fixed?'📌':c.kind==='inc'?'💵':'🏷️'} ${esc(c.name)}</b><span class="xlnbig ${c.kind==='inc'?'pos':'neg'}" dir="ltr">${num(r2(x.s))}</span></div><div class="xlnr xsm"><span>${x.n} عملية في ${NY}</span><span>${c.fixed?esc(everyTxt(c.every))+' · '+num(+c.amount||0):'متغير'}</span></div></div></div>`};
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>📒 بنود الحسابات</h3><button class="mini pri" onclick="catForm(null,XACK==='inc'?'inc':'exp')">+ بند</button></div>
  <div class="seg">${[['all','الكل'],['inc','💰 التحصيل'],['exp','💸 المصروف']].map(([k,l])=>`<button class="${XACK===k?'on':''}" onclick="XACK='${k}';render()">${l}</button>`).join('')}</div>
  <div class="gsr">${FIC}<input id="xac-q" placeholder="اسم البند" value="${esc(XACQ)}" oninput="XACQ=this.value;xAccF()"></div>
  <p class="xnote">كل بند هنا حساب لوحده. دوس عليه تشوف كل معاملاته الثابتة والمتغيرة ورصيده، وتسجّل عليه على طول.</p>`;
  G.forEach(([k,l,f])=>{const L=cats.filter(f).sort((a,b)=>a.name.localeCompare(b.name,'ar'));if(!L.length)return;
    const sum=r2(L.reduce((a,c)=>a+((st[c.id]||{}).s||0),0));
    h+=`<details class="grp" ${XACO[k]||q?'open data-xso="1"':''} ontoggle="XACO['${k}']=this.open"><summary><span>${l}</span><span class="badge soon">${L.length}</span><b class="gs ${k[0]==='i'?'pos':'neg'}">${num(sum)}</b></summary>${L.map(card).join('')}</details>`});
  setTimeout(xAccF,0);return h;
};
function xAccF(){const q=qn(XACQ);document.querySelectorAll('#view .xacr').forEach(e=>e.style.display=!q||e.dataset.q.includes(q)?'':'none');
  if(q)document.querySelectorAll('#view details.grp').forEach(d=>{if(!d.open){d.dataset.xso='1';d.open=true}})}
function xAccOpen(id,p){
  const c=C(id);if(!c)return;if(p)XACP=p;
  const rg={m:mRange(NKM),y:[NY+'-01-01',NY+'-12-31'],all:['0000','9999']}[XACP],tipAcc=c.name==='إكرامية'&&c.kind==='exp';
  const L=S.txs.filter(t=>t.cat===id&&!t.xpre&&t.date>=rg[0]&&t.date<=rg[1]).map(t=>({t,d:t.date,a:t.amount}));
  if(tipAcc)S.txs.forEach(t=>{if(+t.tip>0&&t.cat!==id&&!t.pend&&t.date>=rg[0]&&t.date<=rg[1])L.push({t,d:t.date,a:+t.tip,tip:1})});
  L.sort((a,b)=>a.d.localeCompare(b.d)||(a.t.created||0)-(b.t.created||0));
  let run=0;const rows=L.map(x=>{const t=x.t;if(!t.pend)run=r2(run+x.a);
    const tag=x.tip?'🎁 ضمن مصروف '+(C(t.cat)?.name||''):t.src&&t.src.k==='r'?'📌 ميعاد ثابت':t.src&&t.src.k==='i'?'🏦 قسط':t.xvar?'➕ مبلغ إضافي':t.pend?'⏳ لسه':'متغير';
    return `<tr class="clk" onclick="editTx('${t.id}')">${cD(x.d)}${cT(esc(M(t.method)?.name||'—'),[tag,t.note&&!/^🧾/.test(t.note)?esc(t.note):''].filter(Boolean).join(' · '))}${cN(num(x.a),t.pend?'wrn':c.kind)}${cN(t.pend?'—':num(run))}</tr>`});
  const pn=r2(L.filter(x=>x.t.pend).reduce((a,x)=>a+x.a,0)),nx=c.fixed?xClNx(c):null;
  sheet(`<h2>📒 ${esc(c.name)}</h2><p class="muted">${c.kind==='inc'?'بند تحصيل':'بند مصروف'} · ${c.fixed?'📌 ثابت · '+esc(everyTxt(c.every))+' · '+num(+c.amount||0):'متغير'}</p>
  <div class="seg">${[['m','الشهر'],['y','السنة'],['all','الكل']].map(([k,l])=>`<button class="${XACP===k?'on':''}" onclick="xAccOpen('${id}','${k}')">${l}</button>`).join('')}</div>
  <div class="xlns"><div><small>الرصيد</small><b class="${c.kind==='inc'?'pos':'neg'}">${num(run)}</b></div><div><small>العمليات</small><b>${L.length}</b></div><div><small>⏳ لسه</small><b class="neg">${num(pn)}</b></div></div>
  ${nx?`<div class="kv"><span>📅 الميعاد الجاي</span><b>${xDW(nx.d)} · ${num(nx.amt)}</b></div>`:''}
  <div class="xlna"><button class="btn" onclick="xAccAdd('${id}')">➕ تسجيل عليه</button><button class="btn ghost" onclick="catForm('${id}')">✏️ تعديل البند</button></div>
  ${rows.length?rtbl(['التاريخ|c','البيان','المبلغ|n','الرصيد|n'],rows):'<p class="empty">لا توجد معاملات في الفترة دي</p>'}`);
}
function xAccAdd(id){const c=C(id);if(!c)return;closeSheet();newTx(c.kind,1);if(!F)return;
  F.xtype=c.name==='إكرامية'?'tip':c.fixed?'fix':'other';F.cat=id;F.cq=c.name;if(c.acct&&M(c.acct))F.method=c.acct;if(c.via)F.via=c.via;
  if(c.fixed){const k=occK(c,NKM),w=k>=0&&stOf(occRec(c,k)).st==='wait';F.xvar=!w;if(w&&!parseNum(F.amount))F.amount=amtStr(occAmt(c,k))}
  SHKEEP=1;txForm()}
XFC.xacc=['📒','بنود الحسابات',"go('xacc')",'#0ea5e9,#0c4a6e',()=>0,''];
XFC.tip=['🎁','إكرامية',"xNewPick('exp','tip')",'#f472b6,#be185d',()=>0,''];

/* ---------- 📤 الشير: نفس أزرار الأنواع + بند جديد ---------- */
xShareNew=function(k){const ids=XSHIDS;closeSheet();XSHPEND=ids;newTx(k)};
try{const _sAx=xShareAsk;xShareAsk=async function(){const r=await _sAx.apply(this,arguments);try{const q=$('#shq');if(q&&!$('#shx'))q.insertAdjacentHTML('afterend','<div id="shx" style="margin-top:8px"></div>')}catch(e){}return r}}catch(e){}
try{const _shF=xShFilt;xShFilt=function(v){const r=_shF.apply(this,arguments);try{const el=$('#shx');if(!el)return r;const q=String(v||'').trim(),n=qn(q);if(!n){el.innerHTML='';return r}
  const cs=S.cats.filter(c=>c.active!==false&&!/^مصاريف إنستاباي/.test(c.name)&&qn(c.name).includes(n)).slice(0,5),ex=cs.some(c=>qn(c.name)===n);
  el.innerHTML=`<div class="list">${cs.map(c=>`<div class="row" onclick="xShTo('${c.id}')"><span class="ic" style="background:var(--soft)">${c.fixed?'📌':c.kind==='inc'?'💵':'🏷️'}</span><div class="grow"><b>${esc(c.name)}</b><small>سجّل ${c.kind==='inc'?'تحصيل':'مصروف'} جديد على البند ده</small></div></div>`).join('')}${ex?'':`<div class="row" onclick="xShNewCat('exp')"><span class="ic" style="background:var(--soft)">➕</span><div class="grow"><b>مصروف جديد على بند جديد: ${esc(q)}</b></div></div><div class="row" onclick="xShNewCat('inc')"><span class="ic" style="background:var(--soft)">➕</span><div class="grow"><b>تحصيل جديد على بند جديد: ${esc(q)}</b></div></div>`}</div>`}catch(e){}return r}}catch(e){}
function xShTo(cid){const c=C(cid);if(!c)return;const ids=XSHIDS;closeSheet();newTx(c.kind,1);if(!F)return;
  F.xtype=c.fixed?'fix':'other';F.cat=cid;F.cq=c.name;if(c.acct&&M(c.acct))F.method=c.acct;F.files=(F.files||[]).concat(ids||[]);F.via='instapay';
  if(c.fixed){const k=occK(c,NKM);F.xvar=!(k>=0&&stOf(occRec(c,k)).st==='wait')}SHKEEP=1;txForm()}
function xShNewCat(kind){const q=(($('#shq')||{}).value||'').trim(),ids=XSHIDS;if(!q)return;closeSheet();newTx(kind,1);if(!F)return;
  F.xtype='other';F.cat='__new';F.newCat=q;F.cq=q;F.files=(F.files||[]).concat(ids||[]);if(kind==='exp')F.via='instapay';SHKEEP=1;txForm()}

/* ---------- ☁️ Drive: من غير شاشة اختيار الحساب كل شوية ---------- */
driveToken=async function(interactive){
  if(gTok&&Date.now()<gExp-60000)return gTok;
  if(!interactive)throw new Error('skip');
  if(!GD.cid)throw new Error('اكتب الـ Client ID الأول');
  await loadJS('https://accounts.google.com/gsi/client');
  return new Promise((res,rej)=>{
    if(!gTC||gCID!==GD.cid){gCID=GD.cid;gTC=google.accounts.oauth2.initTokenClient({client_id:GD.cid,scope:'https://www.googleapis.com/auth/drive.file',callback:()=>{}})}
    gTC.callback=r=>{if(r.error)return rej(new Error(r.error_description||r.error));gTok=r.access_token;gExp=Date.now()+(+r.expires_in||3600)*1000;res(gTok);if(!GD.email)xDrEmail()};
    gTC.error_callback=e=>rej(new Error(e&&e.type==='popup_closed'?'اتقفلت نافذة جوجل':'جوجل رفض الطلب'));
    const o={prompt:GD.linked?'':'consent'};if(GD.email)o.hint=GD.email;gTC.requestAccessToken(o);
  });
};
async function xDrEmail(){try{const r=await fetch('https://www.googleapis.com/drive/v3/about?fields=user(emailAddress)',{headers:{Authorization:'Bearer '+gTok}});const j=await r.json(),e=j&&j.user&&j.user.emailAddress;if(e){GD.email=e;saveGD()}}catch(e){}}
function xDrNow(){toast('⏳ جاري الرفع...');driveUpload(true).then(()=>{render();toast('☁️ اترفعت ✓')}).catch(e=>say('الرفع ما نجحش',(e&&e.message)||'','⚠️'))}
try{const _spD=spDrive;spDrive=function(){const h=_spD.apply(this,arguments);return h.replace(/(<label>Google Client ID[\s\S]*?<\/label>)/,`$1<label>إيميل حساب Google<input dir="ltr" value="${esc(GD.email||'')}" placeholder="name@gmail.com" onchange="GD.email=this.value.trim();saveGD();toast('تم الحفظ')"></label>`)}}catch(e){}
try{const _vhD=vHome;vHome=function(){let h=_vhD.apply(this,arguments);try{
  if(!DEMO&&GD.linked&&GD.cid&&xBkS().mode!=='manual'&&!(gTok&&Date.now()<gExp-60000)&&xBkDue()&&strHash(JSON.stringify(S))!==GD.hash)
    h=`<div class="warn" onclick="xDrNow()">☁️ فيه تعديلات لسه ما اترفعتش على Google Drive · اضغط للرفع</div>`+h;
}catch(e){}return h}}catch(e){}

/* ---------- 🛒 المشتروات: البنود المكودة أزرار ---------- */
var XBTV=null,XBVO=false;
function xBuyCoded(key,catId){const o=(S.settings.xbt||{})[key];if(o!=null)return !!o;const c=catId&&C(catId);if(!c)return false;if(c.fixed||c.xbill)return true;
  if(!XBTV){const rc=new Set(S.buys.map(b=>b.txId));XBTV=new Set(S.txs.filter(t=>t.cat&&!rc.has(t.id)&&!t.feeOf&&!t.payFeeOf).map(t=>t.cat))}return XBTV.has(c.id)}
function xBuyTog(){const g=S.buys.find(b=>bKey(b)===BSTORE);if(!g)return;XBTV=null;const on=xBuyCoded(BSTORE,g.catId);S.settings.xbt=Object.assign({},S.settings.xbt,{[BSTORE]:on?0:1});save();render();toast(on?'اتنقل للبنود المتغيرة':'بقى زرار ✓')}
try{const _bRX=bRender;bRender=function(){
  if(BSTORE||String(bq||'').trim()||!S.buys.length)return _bRX.apply(this,arguments);
  const el=$('#b-l');if(!el)return;XBTV=null;
  const list=[...S.buys].sort(bSort),m=new Map();
  list.forEach(b=>{const k=bKey(b);let g=m.get(k);if(!g){g={k,cat:b.catId,name:(C(b.catId)||{}).name||b.store,n:0,tot:0,last:b.date};m.set(k,g)}g.n++;g.tot+=(+b.total||0)});
  BGRP=[...m.values()];
  const all=BGRP.map((g,i)=>({g,i})),T=all.filter(x=>xBuyCoded(x.g.k,x.g.cat)),V=all.filter(x=>!xBuyCoded(x.g.k,x.g.cat));
  const mt=list.filter(b=>b.date.startsWith(NKM)).reduce((a,b)=>a+(+b.total||0),0);
  const ic=g=>{const c=C(g.cat);return c&&c.xbill?'🧾':c&&c.fixed?'📌':'🏪'};
  el.innerHTML=kpis([['مشتروات '+MONTHS[NM-1],fmt(mt),'exp'],['عدد المحلات',BGRP.length,'net']])
    +(T.length?`<div class="xbt">${T.map(({g,i})=>`<button class="tile" onclick="bOpen(${i})"><span>${ic(g)}</span><b>${esc(g.name)}</b><small>${num(r2(g.tot))} · ${g.n} ريسيت</small></button>`).join('')}</div>`:'')
    +(V.length?`<details class="grp" ${XBVO?'open':''} ontoggle="XBVO=this.open"><summary><span>🛒 بنود متغيرة</span><span class="badge soon">${V.length}</span><b class="gs neg">${num(r2(V.reduce((a,x)=>a+x.g.tot,0)))}</b></summary><div class="list">${V.map(({g,i})=>`<div class="row" onclick="bOpen(${i})"><span class="ic" style="background:var(--soft)">🏪</span><div class="grow"><b>${esc(g.name)}</b><small>${g.n} ريسيت · آخر مرة ${fdate(g.last)}</small></div><div class="amt exp">${num(r2(g.tot))}</div></div>`).join('')}</div></details>`:'');
}}catch(e){}

/* ---------- 🏧 السحب والإيداع: قسمين مقفولين + بحث ---------- */
var XCWQ='',XCWO={};
XVW.xcw=()=>{
  const k=ym(cur.y,cur.m),ca=xCashAcct(),rows=[];
  S.cash.filter(c=>c.date.startsWith(k+'-')).forEach(c=>rows.push({d:c.date,c:c.created||0,ic:'🏧',t:'سحب من الماكينة · '+(M(c.method)?.name||''),s:c.note||'',a:c.amount,js:`cashForm('${c.id}')`}));
  S.txs.filter(t=>t.type==='tr'&&!t.pend&&t.date.startsWith(k+'-')&&(t.xdep||t.xwho||t.to===ca||t.method===ca)).forEach(t=>rows.push({d:t.date,c:t.created||0,ic:t.xdep?'🏦':t.xwho?'🙋':'🏧',t:(t.xdep?'إيداع':t.xwho?'كاش من '+t.xwho:'سحب')+' · '+(M(t.method)?.name||'')+' ← '+(M(t.to)?.name||''),s:t.note||'',a:t.amount,js:`editTx('${t.id}')`}));
  rows.sort((a,b)=>b.d.localeCompare(a.d)||b.c-a.c);
  const O=rows.filter(r=>r.ic!=='🏦'),I=rows.filter(r=>r.ic==='🏦'),sm=l=>r2(l.reduce((s,r)=>s+r.a,0)),q=XCWQ.trim();
  const cards=l=>l.length?l.map(r=>`<div class="xcwr" data-q="${esc(qn([r.t,r.s,r.a,num(r.a),dmy(r.d)].join(' ')))}">${xCard({ic:r.ic,title:esc(r.t),amt:num(r.a),sub:xDW(r.d),sub2:esc(r.s.slice(0,40)),click:r.js})}</div>`).join(''):'<p class="empty">لا توجد حركات</p>';
  const sec=(key,t,l,cls)=>`<details class="grp" ${XCWO[key]||q?'open data-xso="1"':''} ontoggle="XCWO['${key}']=this.open"><summary><span>${t}</span><span class="badge soon">${l.length}</span><b class="gs ${cls}">${num(sm(l))}</b></summary>${cards(l)}</details>`;
  setTimeout(xCwF,0);
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏧 سحب وإيداع كاش</h3></div>`+monthBar(true)
    +`<div class="xlna"><button class="btn" onclick="xCashSheet('m')">🏧 سحب</button><button class="btn ghost" onclick="xCashSheet('d')">🏦 إيداع</button></div>`
    +kpis([['🏧 السحب',fmt(sm(O)),'warn'],['🏦 الإيداع',fmt(sm(I)),'inc'],['عدد الحركات',String(rows.length),'net']])
    +`<div class="gsr">${FIC}<input id="xcw-q" placeholder="الحساب أو المبلغ أو الملاحظة" value="${esc(XCWQ)}" oninput="XCWQ=this.value;xCwF()"></div>`
    +sec('o','🏧 السحب',O,'neg')+sec('i','🏦 الإيداع',I,'pos');
};
function xCwF(){const q=xqn(XCWQ);document.querySelectorAll('#view .xcwr').forEach(e=>e.style.display=!q||e.dataset.q.includes(q)?'':'none');
  if(q)document.querySelectorAll('#view details.grp').forEach(d=>{if(!d.open){d.dataset.xso='1';d.open=true}})}

/* ---------- 👥 العملاء: القايمة مقفولة ---------- */
var XCLGO=false;
try{const _cvG=xClView;xClView=function(){const h=_cvG.apply(this,arguments);return h.replace('<div id="xcl-l">',`<details class="grp" id="xcl-g" ${XCLGO||XCLQ.trim()?'open':''} ontoggle="XCLGO=this.open"><summary><span>👥 قائمة العملاء</span><span class="badge soon">${XCL().length}</span></summary><div id="xcl-l">`)+'</details>'}}catch(e){}
try{const _clG=xClList;xClList=function(){const r=_clG.apply(this,arguments);const g=$('#xcl-g');if(g&&XCLQ.trim()&&!g.open){g.dataset.xso='1';g.open=true}return r}}catch(e){}

/* ---------- ⚙️ تعديل البند: الثابت مقفول، ومن غير تقسيط للغير للعميل ---------- */
function xCsPost(){
  const c=CF,sz=$('#sheet .sz');if(!c||!sz)return;
  const sel=$('#cf-cl');if(sel)sel.setAttribute('onchange','grabCF();CF.cl=this.value;catSheet()');
  if(c.cl){const p=$('#cf-p3');if(p){const l=p.closest('label');if(l)l.remove()}const e=$('#cf-end');if(e){const l=e.closest('label');if(l)l.remove()}c.p3=false;c.end=''}
  const fx=sz.querySelector('.fxin');
  if(fx&&c.fixed){
    if(c._wasFix==null)c._wasFix=!!(c.id&&C(c.id)&&C(c.id).fixed);if(c._fxo==null)c._fxo=!c._wasFix;
    const sm=[everyTxt(c.every),parseNum(c.amount)?num(parseNum(c.amount)):''].filter(Boolean).join(' · ');
    fx.insertAdjacentHTML('beforebegin',`<button type="button" class="xfxt" onclick="grabCF();CF._fxo=!CF._fxo;catSheet()"><span>⚙️ إعدادات الثابت · ${esc(sm)}</span><b>${c._fxo?'▴':'▾'}</b></button>`);
    fx.style.display=c._fxo?'':'none';
  }
}
try{const _csY=catSheet;catSheet=function(){const r=_csY.apply(this,arguments);try{xCsPost()}catch(e){}return r}}catch(e){}

/* ---------- 🔑 دفعة الاستلام ---------- */
try{const _pfH=planForm;planForm=function(){const r=_pfH.apply(this,arguments);try{if(PF&&PF.ptype==='prop'&&!$('#q-hand')){const x=$('#q-x');if(x)x.insertAdjacentHTML('beforeend',`<div class="two"><label>🔑 دفعة الاستلام<input id="q-hand" inputmode="decimal" dir="ltr" value="${esc(PF.hand||'')}" placeholder="0"></label><label>📅 ميعادها<input id="q-hd" type="date" value="${PF.handD||''}"></label></div><small class="muted" style="display:block;margin:-2px 0 8px">مش بتنزل في جدول الأقساط، وبتتحسب في حسابات الوحدة</small>`)}}catch(e){}return r}}catch(e){}
try{const _gpH=grabPF;grabPF=function(){_gpH.apply(this,arguments);if(!PF)return;if($('#q-hand'))PF.hand=$('#q-hand').value;if($('#q-hd'))PF.handD=$('#q-hd').value}}catch(e){}
try{const _psH=planSave;planSave=function(){grabPF();const h=PF?PF.hand:null,hd=PF?PF.handD:'',pt=PF&&PF.ptype;const r=_psH.apply(this,arguments);
  try{if(!$('#sheet').classList.contains('open')&&h!=null&&pt==='prop'){const p=plan(instPlan);if(p){p.hand=parseNum(h)||0;p.handD=hd||'';save();render()}}}catch(e){}return r}}catch(e){}
const xHandPaid=p=>!!((p.handTx&&S.txs.find(t=>t.id===p.handTx))||p.handPre);
try{const _vpH=vPlan;vPlan=function(){let h=_vpH.apply(this,arguments);try{
  const p=plan(instPlan);if(!p||!(+p.price||+p.hand))return h;
  const st=planStats(p),hd=+p.hand||0,hp=xHandPaid(p),rem=r2((+p.price||0)-(+p.down||0)-st.paid-(hp?hd:0));
  h=h.replace(/(<span>📉 المتبقي من سعر الوحدة<\/span><b>)[^<]*(<\/b>)/,`$1${fmt(rem)}$2`);
  let add='';
  if(hd)add+=`<div class="kv"><span>🔑 دفعة الاستلام${p.handD?' · '+xDW(p.handD):''}</span><b>${fmt(hd)} ${hp?'<span class="tag ok">مدفوعة</span>':'<span class="tag wait">لم تُدفع</span>'}</b></div>
    <div class="xlna">${hp?`<button class="btn ghost" onclick="xHandUndo('${p.id}')">↩ إلغاء الدفع</button>`:`<button class="btn" onclick="xHandPay('${p.id}')">✓ دفع دفعة الاستلام</button><button class="btn ghost" onclick="xHandPre('${p.id}')">✔ مدفوعة سابقًا</button>`}</div>`;
  if(+p.price){const sm=r2((+p.down||0)+st.total+hd),df=r2(+p.price-sm);add+=`<div class="kv"><span>🧮 المقدم + الأقساط + الاستلام</span><b>${fmt(sm)}${Math.abs(df)>.009?` <span class="tag wait">الفرق ${num(df)}</span>`:' ✓'}</b></div>`}
  if(add){if(h.includes('<div class="kv"><span>📉'))h=h.replace('<div class="kv"><span>📉',add+'<div class="kv"><span>📉');else h=h.replace('<div class="box">','<div class="box">'+add)}
}catch(e){}return h}}catch(e){}
function xHandPay(pid){const p=plan(pid);if(!p)return;
  sheet(`<h2>🔑 دفعة الاستلام · ${esc(p.name)}</h2>
  <label>المبلغ<input id="hp-a" class="amt-in" inputmode="decimal" dir="ltr" value="${amtStr(+p.hand||0)}"></label>
  <div class="two"><label>دفعت من حساب<select id="hp-m">${opt(S.methods.filter(m=>m.active),p.acct&&M(p.acct)?p.acct:defMethod())}</select></label><label>الطريقة<select id="hp-v">${viaOpts('')}</select></label></div>
  <label>📅 تاريخ الدفع<input id="hp-d" type="date" value="${today()}"></label>
  <button class="btn" onclick="xHandSv('${pid}')">✅ تأكيد</button><button class="btn ghost" onclick="closeSheet()">إلغاء</button>`)}
function xHandSv(pid){const p=plan(pid);if(!p)return;const a=parseNum($('#hp-a').value),d=$('#hp-d').value,m=$('#hp-m').value;
  if(!(a>0))return toast('اكتب المبلغ');if(!d)return toast('اختر التاريخ');if(isClosed(d))return toast('هذا الشهر مقفول');if(!m)return toast('اختر الحساب');
  const cat=C(p.catId)||ensureCat(p.name,'exp'),t={id:uid(),type:'exp',amount:a,cat:cat.id,method:m,via:$('#hp-v').value,date:d,note:'🔑 دفعة الاستلام · '+p.name,files:[],created:Date.now(),xhand:pid};
  S.txs.push(t);p.handTx=t.id;delete p.handPre;if(Math.abs(a-(+p.hand||0))>.009)p.hand=a;save();closeSheet();render();toast('✅ اتسجلت دفعة الاستلام '+fmt(a))}
function xHandPre(pid){const p=plan(pid);if(!p)return;p.handPre=1;save();render();toast('✔ اتعلّمت مدفوعة سابقًا')}
async function xHandUndo(pid){const p=plan(pid);if(!p)return;const t=p.handTx&&S.txs.find(x=>x.id===p.handTx);
  if(t&&isClosed(t.date))return toast('شهر الدفع مقفول');
  if(!await ask('إلغاء دفع دفعة الاستلام؟',t?'المصروف المسجل هيتحذف':'',{icon:'↩️',ok:'إلغاء الدفع',danger:true}))return;
  if(t)S.txs=S.txs.filter(x=>x!==t);delete p.handTx;delete p.handPre;save();render()}
try{const _xbH=window.XB0.inst;window.XB0.inst=function(){const r=_xbH.apply(this,arguments);try{const ps=RF.plan?S.plans.filter(p=>p.id===RF.plan):S.plans;
  if(ps.length===1&&+ps[0].hand){const p=ps[0],hp=xHandPaid(p);r.body+=rsec('🔑 دفعة الاستلام')+rtbl(['البيان','المبلغ|n'],[`<tr>${cT('دفعة الاستلام',p.handD?dmy(p.handD):'')}${cN(num(+p.hand),hp?'inc':'wrn',hp?'مدفوعة':'لم تُدفع')}</tr>`])}}catch(e){}return r}}catch(e){}

/* ---------- 📜 سجل تغييرات رصيد الحسابات ---------- */
var XBLK='centric-blog',XBSN=null;
function xBlogGet(){try{return JSON.parse(localStorage.getItem(XBLK)||'[]')}catch(e){return[]}}
function xBsnap(){const m={};S.txs.forEach(t=>{if(t.pend||t.xpre)return;m[t.id]=[t.type,t.method||'',t.to||'',+t.amount||0,t.cat||'',t.date,t.feeOf?1:0]});
  S.cash.forEach(c=>{m['c:'+c.id]=['cash',c.method||'','',+c.amount||0,'',c.date,0]});S.methods.forEach(x=>{m['o:'+x.id]=['open',x.id,'',+x.open||0,'','',0]});return m}
function xEff(v,a){if(!v)return 0;const[ty,me,to,am]=v;if(ty==='open')return me===a?am:0;
  if(ty==='cash'){const ca=xCashAcct();if(me===a&&a!==ca)return -am;if(a===ca&&me!==ca)return am;return 0}
  if(ty==='tr')return(to===a?am:0)-(me===a?am:0);if(me!==a)return 0;return ty==='inc'?am:ty==='exp'?-am:0}
function xBwhy(k,p,c,e){const v=c||p,nm=k.startsWith('o:')?'🏁 رصيد البداية':k.startsWith('c:')?'🏧 سحب كاش':v[0]==='tr'?'🔁 تحويل':(C(v[4])?.name||(v[6]?'مصاريف إنستاباي':'—'));
  return `${!p?'➕ اتضاف':!c?'🗑 اتحذف':'✏️ اتعدّل'}: ${nm} ${num(v[3])}${v[5]?' · '+dmy(v[5]):''} (${e>0?'+':''}${num(e)})`}
function xBlogRun(){const cur=xBsnap();if(!XBSN){XBSN=cur;return}const prev=XBSN;XBSN=cur;
  const ids=new Set([...Object.keys(prev),...Object.keys(cur)]),L=xBlogGet(),at=Date.now();let ch=false;
  S.methods.forEach(m=>{const a=m.id;let d=0;const w=[];ids.forEach(k=>{const e=r2(xEff(cur[k],a)-xEff(prev[k],a));if(Math.abs(e)<.001)return;d=r2(d+e);w.push(xBwhy(k,prev[k],cur[k],e))});
    if(Math.abs(d)>=.001){L.push({at,a,d,w:w.slice(0,6)});ch=true}});
  if(ch)localStorage.setItem(XBLK,JSON.stringify(L.slice(-400)))}
try{const _svB=save;save=function(){const r=_svB.apply(this,arguments);try{xBlogRun()}catch(e){}return r}}catch(e){}

/* ---------- 🔍 مراجعة الحساب ---------- */
function xTxLbl(t){if(!t)return '—';return(t.type==='tr'?'🔁 '+(M(t.method)?.name||'—')+' ← '+(M(t.to)?.name||'—'):(t.type==='inc'?'💰 ':'💸 ')+(C(t.cat)?.name||'—'))+' · '+num(t.amount)+' · '+dmy(t.date)}
function xRvItems(id){
  const T=S.txs,td=today(),out=[],P=x=>T.find(y=>y.id===x),push=(sec,t,why,acts)=>out.push({sec,t,why,acts:acts||[]}),byP={};
  T.forEach(f=>{if(f.feeOf)(byP[f.feeOf]=byP[f.feeOf]||[]).push(f)});
  T.forEach(f=>{if(!f.feeOf)return;const p=P(f.feeOf),on=f.method===id,pa=p&&p.method;
    if(on&&!p)return push('fee',f,'مصاريف إنستاباي لعملية اتحذفت',[['del','🗑 احذفها']]);
    if(!p)return;
    if(on&&pa!==id)push('fee',f,'المصاريف على الحساب ده، والعملية نفسها على '+(M(pa)?.name||'—'),[['mv:'+pa,'↪ انقلها لـ '+(M(pa)?.name||'—')]]);
    else if(!on&&pa===id)push('fee',f,'العملية على الحساب ده، ومصاريفها على '+(M(f.method)?.name||'—'),[['mv:'+id,'↪ انقلها للحساب ده']]);
    if(on||pa===id){
      if(p.pend)push('fee',f,'مصاريف لعملية لسه ما اتدفعتش',[['del','🗑 احذفها']]);
      if(p.via!=='instapay'&&p.type!=='tr')push('fee',f,'العملية مش إنستاباي وعليها مصاريف إنستاباي',[['del','🗑 احذفها']]);
      const ex=xFeeCalc(p.amount);if(Math.abs(ex-f.amount)>1)push('info',f,`المصاريف ${num(f.amount)} والمحسوب تقريبًا ${num(ex)} على ${num(p.amount)}`,[['amt:'+ex,'✏️ خليها '+num(ex)]]);
    }});
  Object.values(byP).forEach(l=>{if(l.length>1&&l.some(f=>f.method===id))l.slice(1).forEach(f=>push('fee',f,'مصاريف متسجلة مرتين لنفس العملية',[['del','🗑 احذف المكرر']]))});
  T.forEach(t=>{if(t.method!==id||t.pend||t.feeOf||t.payFeeOf||t.xpre||t.via!=='instapay'||t.type==='inc'||byP[t.id])return;push('nofee',t,'تحويل إنستاباي من غير مصاريف',[['fee','➕ ضيف '+num(xFeeCalc(t.amount))]])});
  T.forEach(t=>{if(t.payFeeOf&&t.method===id&&!P(t.payFeeOf))push('bad',t,'مصاريف دفع لقسط اتحذف',[['del','🗑 احذفها']])});
  T.forEach(t=>{if((t.method===id||t.to===id)&&!(t.amount>0))push('bad',t,'المبلغ غير صحيح',[['del','🗑 احذفها']])});
  T.forEach(t=>{if(t.type==='tr'&&t.method===id&&t.to===id)push('bad',t,'تحويل من الحساب لنفسه',[['del','🗑 احذفه']])});
  T.forEach(t=>{if(t.xpre&&t.method===id)push('bad',t,'قسط مدفوع سابقًا ومحسوب على الحساب',[['clr','🧹 شيله من الحساب']])});
  T.forEach(t=>{if((t.method===id||t.to===id)&&!t.pend&&t.date>td)push('info',t,'تاريخها بعد النهارده ومحسوبة في الرصيد')});
  const seen={};T.forEach(t=>{if(t.feeOf||t.payFeeOf||t.pend||!(t.method===id||t.to===id))return;const k=[t.type,t.date,r2(t.amount),t.cat||'',t.method,t.to||''].join('|');(seen[k]=seen[k]||[]).push(t)});
  Object.values(seen).forEach(l=>{if(l.length>1)l.slice(1).forEach(t=>push('dup',t,`نفس اليوم والمبلغ والبند (${l.length} مرات)`))});
  return out;
}
function xAcctReviewGo(id){if(XBALOK||Date.now()-XBAUTH<300000)return xAcctReview(id);xBalAuth().then(ok=>{if(ok)xAcctReview(id)})}
function xAcctReview(id){
  const m=M(id);if(!m)return;const it=xRvItems(id),td=today();
  const SEC=[['bad','⛔ أخطاء'],['fee','💸 مصاريف إنستاباي'],['nofee','⚠️ إنستاباي من غير مصاريف'],['dup','🔁 ممكن تكون مكررة'],['info','ℹ️ للعلم']];
  const row=x=>`<div class="row" style="cursor:default"><div class="grow"><b>${esc(xTxLbl(x.t))}</b><small>${esc(x.why)}</small><div class="xnb"><button class="mini" onclick="editTx('${x.t.id}')">📂 افتح</button>${x.acts.map(([a,l])=>`<button class="mini" onclick="xRvAct('${id}','${x.t.id}','${a}')">${l}</button>`).join('')}</div></div></div>`;
  const body=SEC.map(([k,l])=>{const L=it.filter(x=>x.sec===k);return L.length?`<h4>${l} <span class="badge late">${L.length}</span></h4><div class="list">${L.map(row).join('')}</div>`:''}).join('');
  let neg='';if(!xIsCr(id)){try{const g=xLedger(id,'1900-01-01',td,S.txs,S.cash),e=g.ev.find(e=>e.r<0);if(e)neg=`<div class="xwarn">⚠️ الرصيد نزل تحت الصفر يوم <b>${dmy(e.d)}</b> بعد «${esc(e.l)}». يعني فيه فلوس دخلت قبلها ومتسجلتش، أو حركة تاريخها غلط، أو رصيد البداية ناقص.</div>`}catch(e){}}
  const tr=xTrGet().map((e,i)=>({e,i})).filter(({e})=>e.k==='txs'&&e.o&&(e.o.method===id||e.o.to===id)&&Date.now()-e.at<45*864e5).reverse();
  const log=xBlogGet().filter(x=>x.a===id).slice(-40).reverse();
  sheet(`<h2>🔍 مراجعة ${esc(m.name)}</h2><div class="xrv">
  <div class="kv"><span>💰 الرصيد في البرنامج</span><b>${fmt(xBal(id))}</b></div>
  <div class="kv"><span>🏁 رصيد البداية</span><b>${fmt(+m.open||0)}${m.openAt?' · '+dmy(m.openAt):''}</b></div>
  ${neg}${body||'<div class="xrvok">✅ مفيش أخطاء واضحة في عمليات الحساب ده</div>'}
  ${tr.length?`<h4>🗑 اتحذف من الحساب مؤخرًا</h4><div class="list">${tr.map(({e,i})=>`<div class="row" style="cursor:default"><div class="grow"><b>${esc(e.l)}</b><small>${xLnTs(e.at)}</small></div><button class="mini" onclick="xRvRest('${id}',${i})">♻️ رجّعه</button></div>`).join('')}</div>`:''}
  <h4>📜 آخر التغييرات في رصيد الحساب</h4>
  ${log.length?`<div class="list">${log.map(x=>`<div class="row" style="cursor:default"><div class="grow"><b class="${x.d<0?'neg':'pos'}" dir="ltr" style="text-align:right">${x.d>0?'+':''}${num(x.d)}</b><small>${xLnTs(x.at)}</small>${x.w.map(w=>`<small>${esc(w)}</small>`).join('')}</div></div>`).join('')}</div>`
    :'<p class="muted">السجل بيبدأ من النسخة دي. من دلوقتي أي تغيير في رصيد الحساب هيتسجل هنا وسببه.</p>'}</div>`);
}
async function xRvAct(acct,tid,act){
  const t=S.txs.find(x=>x.id===tid);if(!t)return xAcctReview(acct);if(isClosed(t.date))return toast('الشهر ده مقفول');
  if(act==='del'){if(!await ask('حذف؟',xTxLbl(t),{danger:true,icon:'🗑',ok:'حذف'}))return;S.txs=S.txs.filter(x=>x!==t)}
  else if(act.startsWith('mv:'))t.method=act.slice(3);
  else if(act.startsWith('amt:'))t.amount=+act.slice(4);
  else if(act==='fee')xAddIpFee(t,xFeeCalc(t.amount));
  else if(act==='clr'){t.method='';t.via=''}
  save();render();xAcctReview(acct);toast('تم ✓');
}
function xRvRest(acct,i){xTrRestore(i);xAcctReview(acct)}

/* ---------- المرفقات: الصورة اللي نوعها مش معروف تظهر صورة ---------- */
try{const _ftX=fileThumb;fileThumb=function(id,ctx){const m=S.fmeta[id]||{};if(m.type&&m.type!=='application/octet-stream')return _ftX.apply(this,arguments);
  return `<div class="fth" onclick="viewFile('${id}','${ctx}')"><img data-fid="${id}" alt="" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'📎'}))"><small>${esc(m.name||'ملف')}</small></div>`}}catch(e){}

/* ---------- الأزرار في الشاشات ---------- */
try{const _rnY=render;render=function(){const r=_rnY.apply(this,arguments);try{const el=$('#view');if(!el)return r;
  if(view==='more'&&!el.querySelector('[onclick="go(\'xacc\')"]')){const b=xTileFind(el,'البنود');if(b){const c=b.cloneNode(true);xTileSet(c,'📒','بنود الحسابات',"go('xacc')");b.insertAdjacentElement('afterend',c)}}
  if(view==='pmv')el.querySelectorAll('.xac').forEach(card=>{const a=card.querySelector('[onclick^="xAcctRep("]');if(!a||card.querySelector('.xrvb'))return;const id=(a.getAttribute('onclick').match(/'([^']+)'/)||[])[1];if(id)a.insertAdjacentHTML('afterend',`<button class="mini xrvb" onclick="xAcctReviewGo('${id}')">🔍 مراجعة</button>`)});
  if(view==='buy'&&BSTORE){const ph=el.querySelector('.phead');const g=S.buys.find(b=>bKey(b)===BSTORE);if(ph&&g&&!ph.querySelector('.xbtg')){XBTV=null;ph.insertAdjacentHTML('beforeend',`<button class="mini xbtg" onclick="xBuyTog()">${xBuyCoded(BSTORE,g.catId)?'🛒 للمتغير':'📌 خليه زرار'}</button>`)}}
  const PH={buy:'المحل أو الصنف أو المبلغ',items:'اسم البند أو المبلغ',col:'الاسم أو التاريخ أو المبلغ',exps:'الاسم أو التاريخ أو المبلغ',inst:'اسم القسط أو المبلغ',annual:'الاسم أو المبلغ',cash:'الحساب أو المبلغ',trs:'الحساب أو المبلغ',pmv:'اسم الحساب'};
  if(PH[view]){const i=el.querySelector('.gsr input');if(i)i.placeholder=PH[view]}
}catch(e){}return r}}catch(e){}

/* تشغيل */
try{XBSN=xBsnap();render()}catch(e){}
/* ========== 2.21.74 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xpmn{display:flex;align-items:center;gap:10px;min-width:0}
.xpmn b{font-size:15px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.xpmc .xpmn .xlogo,.xpmc .xpmn .xic{width:34px!important;height:34px!important;flex:0 0 34px!important;border-radius:10px!important;font-size:17px!important}
.xpmc .xlnbig.wrn,#sheet .xlns b.wrn{color:#ea580c}
.xlna .btn{margin:0!important}
`;document.head.appendChild(s)})();

/* ---------- 🧾 الريسيت: الأصناف والإجمالي ---------- */
XHEADW=/(الوصف|وصف|الصنف|صنف|البيان|الكمي|كمي|السعر|سعر|القيم|قيم|item|description|desc|qty|quantity|price|amount)/gi;
function xLetters(l){return (biClean(l).match(/[A-Za-z\u0621-\u064A]/g)||[]).length}
var XCONT=/^\s*(-|–|جرام|جم(?![\u0621-\u064A])|كيلو|كجم|لتر|ملي|مل(?![\u0621-\u064A])|عبو|قطع|حب|ml\b|gm?\b|kg\b|ltr?\b|pcs?\b)/i;
xItemsOf=function(text){
  const L=splitLines(text),out=[];let st=0,buf=[],last=null,started=false;
  for(let i=0;i<L.length;i++){if((L[i].match(XHEADW)||[]).length>=2&&!/\d{2,}/.test(L[i])){st=i+1;break}}
  if(!st){for(let i=0;i<Math.ceil(L.length*.5);i++)if(BI_META.test(L[i])||PHK.test(L[i]))st=i+1}
  const STOPW=/(sub\s*-?\s*total|vat|tax|ضريب|خصم|discount|service|خدم|رسوم|delivery|توصيل)/i;
  const isTot=(l,u)=>XTOT_S.test(l)||XTOT_S.test(u)||XTOT_N.test(l)||XTOT_N.test(u)||XTOT_P.test(l)||XTOT_C.test(l)||STOPW.test(l);
  const nm=a=>a.join(' ').replace(/\s+/g,' ').replace(/^[\s\-–:]+|[\s\-–:]+$/g,'').trim();
  const add=(n,it)=>{if(!(it&&it.v>0&&it.v<1e5))return null;const x={n:n||'صنف',q:it.q,p:it.p,v:it.v};out.push(x);return x};
  const fromNums=ns=>{const it=biSplit(ns);if(it)return it;if(ns.length===1)return{q:1,p:ns[0],v:ns[0]};
    const v=Math.max(...ns),o=ns.filter(x=>x!==v);if(!o.length)return{q:1,p:v,v};const a=o[0];
    return a>0&&a<=50&&Math.abs(a-Math.round(a))<.001?{q:a,p:r2(v/a),v}:{q:1,p:v,v}};
  for(let i=st;i<L.length;i++){
    const l=L[i],u=normAr(l),ns=xAmtNums(l),lt=xLetters(l);
    if(isTot(l,u)){if(started)break;buf=[];continue}
    if(!ns.length&&(l.match(XHEADW)||[]).length&&l.trim().split(/\s+/).length<=3){buf=[];continue}
    if(BI_META.test(l)||PHK.test(l)||ADRW.test(l)||VEND.test(l)||(SKIPM.test(l)&&!ns.length))continue;
    if(lt<3&&ns.length){const x=add(nm(buf),fromNums(ns));if(x){last=x;started=true}buf=[];continue}
    const dec=biClean(l).match(/\d[\d,]*\.\d{1,2}/g);
    if(dec&&lt>=3){const nt=biClean(l).replace(/\d[\d,]*\.\d{1,2}/g,' ').replace(/(\s\d{1,2})+\s*$/,' ');const x=add(nm(buf.concat([nt])),fromNums(ns));if(x){last=x;started=true}buf=[];continue}
    if(last&&!buf.length&&XCONT.test(l)){last.n=nm([last.n,l]);continue}
    if(lt>=2)buf.push(l.trim());
  }
  if(last&&buf.length)last.n=nm([last.n,...buf]);
  return out.slice(0,60);
};
xTotalOf=function(text,items){
  const L=splitLines(text),S1=[],N1=[],P1=[],C1=[],lab=[];let DX=[];
  const kind=(l,u)=>XTOT_C.test(l)||XTOT_C.test(u)?'c':XTOT_T.test(l)||XTOT_T.test(u)?'t':XTOT_S.test(l)||XTOT_S.test(u)?'s':XTOT_N.test(l)||XTOT_N.test(u)?'n':XTOT_P.test(l)||XTOT_P.test(u)?'p':'';
  const put=(k,v)=>{if(v>0&&k!=='t')({s:S1,n:N1,p:P1,c:C1})[k].push(r2(v))};
  L.forEach((l,i)=>{const u=normAr(l),k=kind(l,u);if(!k)return;
    const q=XTOT_Q.test(l)||XTOT_Q.test(u);let v=xPickAmt(xAmtNums(l),q);
    if(!(v>0)&&!/\d+\.\d{2}/.test(l)&&L[i+1]&&xLetters(L[i+1])<3){const n2=xAmtNums(L[i+1]);if(n2.length===1)v=n2[0]}
    if(v>0)put(k,v);else lab.push({i,k})});
  if(lab.length){const g=[];let cur=[];lab.forEach(x=>{if(cur.length&&x.i-cur[cur.length-1].i>2){g.push(cur);cur=[]}cur.push(x)});if(cur.length)g.push(cur);
    const blk=g[g.length-1],end=blk[blk.length-1].i,D=[];
    for(let j=end+1;j<L.length&&D.length<blk.length+2;j++)(biClean(L[j]).match(/\d[\d,]*\.\d{2}(?!\d)/g)||[]).forEach(x=>D.push(parseFloat(x.replace(/,/g,''))));
    blk.forEach((x,n)=>put(x.k,D[n]));DX=D.filter(v=>v>0)}
  const is=r2((items||[]).reduce((a,x)=>a+(+x.v||0),0)),all=S1.concat(N1,P1,DX);
  if(is>0){const m=all.find(x=>Math.abs(x-is)<=Math.max(.05,is*.005));if(m)return m}
  if(S1.length)return S1[S1.length-1];
  if(N1.length){const c={};N1.forEach(x=>c[x]=(c[x]||0)+1);const rep=N1.filter(x=>c[x]>1);return rep.length?rep[rep.length-1]:N1[N1.length-1]}
  if(P1.length&&C1.length){const t=r2(Math.max(...P1)-Math.max(...C1));if(t>0)return t}
  if(P1.length)return Math.min(...P1);
  return is>0?is:0;
};

/* ---------- 🔐 الرصيد: باسورد كل مرة ---------- */
var XPMU=null,XPMT='all',XPMQ='';
async function xPmAuth(id){if(XBALOK||(id&&XPMU===id))return true;XBAUTH=0;const ok=await xBalAuth();XBAUTH=0;if(ok&&id)XPMU=id;return ok}
xBalOne=async function(id){
  if(XBSHOW.has(id)&&!XBALOK){XBSHOW.delete(id);clearTimeout(XBT[id]);return render()}
  if(!await xPmAuth(null))return;XBSHOW.add(id);render();clearTimeout(XBT[id]);
  XBT[id]=setTimeout(()=>{XBSHOW.delete(id);if(view==='pmv'&&!$('#sheet').classList.contains('open'))render()},20000)};
xRecon=function(id){xPmAuth(id).then(ok=>{if(ok)xReconBase(id)})};
xAcctReviewGo=function(id){xPmAuth(id).then(ok=>{if(ok)xAcctReview(id)})};
xAcctRep=async function(id){if(!await xPmAuth(id))return;closeSheet();rtab='acct';RF={...RFDEF,xp:'m',xms:[id]};RVST=[];XRVBACK='pmv';XBAUTH=Date.now();openRV()};
try{const _crP=closeRV;closeRV=function(){XBAUTH=0;XPMU=null;return _crP.apply(this,arguments)}}catch(e){}
try{const _csP=closeSheet;closeSheet=function(){XPMU=null;return _csP.apply(this,arguments)}}catch(e){}
try{const _goP=go;go=function(v){if(v!==view){XPMU=null;XBALOK=false;XBAUTH=0;try{XBSHOW.clear()}catch(e){}}return _goP.apply(this,arguments)}}catch(e){}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'){XPMU=null;XBALOK=false;XBAUTH=0;try{XBSHOW.clear()}catch(e){}}});

/* ---------- 🏦 شاشة الحسابات ---------- */
try{const i=GFV.indexOf('pmv');if(i>=0)GFV.splice(i,1)}catch(e){}
function xPmGrp(m){return m.active===false?'off':xIsCr(m.id)?'cr':m.type==='cash'?'cash':'bank'}
vPmv=function(){
  const MB=v=>XBALOK?v:'••••••',io={};
  keyTx(NKM).forEach(t=>{if(t.pend)return;if(t.type==='tr'){(io[t.to]=io[t.to]||{i:0,o:0}).i+=t.amount;(io[t.method]=io[t.method]||{i:0,o:0}).o+=t.amount}else{const x=io[t.method]=io[t.method]||{i:0,o:0};if(t.type==='inc')x.i+=t.amount;else if(t.type==='exp')x.o+=t.amount}});
  let mine=0,debt=0;S.methods.forEach(m=>{if(m.active===false)return;const b=xBal(m.id);if(xIsCr(m.id))debt+=Math.min(0,b);else mine+=b});
  const cnt=k=>S.methods.filter(m=>k==='all'?m.active!==false:xPmGrp(m)===k).length;
  if(XPMT!=='all'&&!cnt(XPMT))XPMT='all';
  const list=S.methods.filter(m=>XPMT==='all'?m.active!==false:xPmGrp(m)===XPMT);
  const card=m=>{const b=xBal(m.id),cr=xIsCr(m.id),vis=XBALOK||XBSHOW.has(m.id),x=io[m.id]||{i:0,o:0},g=cr?xCcCfg(m.id):null;
    const cls=cr?'wrn':b<0?'neg':'pos';
    const bar=cr&&g.lim>0&&vis?`<div class="xbar"><i style="width:${Math.min(100,Math.max(0,-b)/g.lim*100)}%;background:#ea580c"></i></div>`:'';
    return `<div class="xpmc" data-q="${esc(qn([m.name,m.bank,TYPES[m.type]].join(' ')))}"><div class="xlnc" onclick="xPmOpen('${m.id}')">
    <div class="xlnr"><span class="xpmn">${xMIc(m)}<b>${esc(m.name)}</b></span><span class="xlnbig ${vis?cls:''}" dir="ltr">${vis?(!cr&&b<0?'-':'')+num(Math.abs(b)):'••••••'}</span></div>
    <div class="xlnr xsm"><span>${cr?'💳 كريديت':esc(TYPES[m.type]||'')}${m.bank?' · '+esc(m.bank):''}</span><span>${cr?(b<0?'عليك':'ليك'):'الرصيد'}</span></div>${bar}
    <div class="xlnn">${xCh('ok','⬇ '+num(r2(x.i)))} ${xCh('late','⬆ '+num(r2(x.o)))} <small class="muted">${MONTHS[NM-1]}</small></div>
    <div class="xlna"><button class="btn ghost" onclick="event.stopPropagation();xBalOne('${m.id}')">${vis&&!XBALOK?'🙈 إخفاء':'👁️ الرصيد'}</button>${cr?`<button class="btn" onclick="event.stopPropagation();xCcPay('${m.id}')">💳 سدد</button>`:`<button class="btn" onclick="event.stopPropagation();xPmOpen('${m.id}')">📄 التفاصيل</button>`}</div></div></div>`};
  const tb=(k,l)=>`<button type="button" class="${XPMT===k?'on':''}" onclick="XPMT='${k}';render()">${l} (${cnt(k)})</button>`;
  setTimeout(xPmF,0);
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏦 ${esc(L('pm'))}</h3><button class="mini" onclick="${XBALOK?'XBALOK=false;render()':'xBalUnlock()'}">${XBALOK?'🙈 الكل':'👁️ الكل'}</button></div>
  <button class="btn" onclick="editMethod()">➕ حساب جديد</button>
  ${kpis([['💰 فلوسك',MB(fmt(r2(mine))),'inc'],['💳 الكريديت',MB(fmt(Math.abs(r2(debt)))),'exp'],['🏦 الحسابات',String(cnt('all')),'net']])}
  <div class="seg">${tb('all','الكل')}${cnt('bank')?tb('bank','🏦 بنوك'):''}${cnt('cash')?tb('cash','💵 كاش'):''}${cnt('cr')?tb('cr','💳 كريديت'):''}${cnt('off')?tb('off','⏸ موقوف'):''}</div>
  <div class="gsr">${FIC}<input placeholder="اسم الحساب" value="${esc(XPMQ)}" oninput="XPMQ=this.value;xPmF()"></div>
  ${list.length?list.map(card).join(''):'<p class="muted" style="text-align:center;margin:20px 0">لا يوجد</p>'}
  ${!XBALOK&&S.settings.balPw?`<button class="btn ghost" onclick="xBalForgot()">🔑 نسيت باسورد الأرصدة؟</button>`:''}`;
};
function xPmF(){const q=qn(XPMQ);document.querySelectorAll('#view .xpmc').forEach(e=>e.style.display=!q||e.dataset.q.includes(q)?'':'none')}
function xPmOpen(id){
  const m=M(id);if(!m)return;const cr=xIsCr(id),un=XBALOK||XPMU===id,b=xBal(id);let i=0,o=0;
  keyTx(NKM).forEach(t=>{if(t.pend)return;if(t.type==='tr'){if(t.to===id)i+=t.amount;if(t.method===id)o+=t.amount}else if(t.method===id){if(t.type==='inc')i+=t.amount;else if(t.type==='exp')o+=t.amount}});
  const T=S.txs.filter(t=>!t.pend&&!t.xpre&&(t.method===id||t.to===id)).sort(byDesc).slice(0,8);
  const ef=t=>t.type==='tr'?(t.to===id?t.amount:-t.amount):t.type==='inc'?t.amount:-t.amount;
  sheet(`<h2>${xMIc(m,1)} ${esc(m.name)}</h2><p class="muted">${cr?'💳 كريديت':esc(TYPES[m.type]||'')}${m.bank?' · '+esc(m.bank):''}${m.active===false?' · ⏸ موقوف':''}</p>
  <div class="xlns"><div><small>${cr?'المديونية':'الرصيد'}</small><b id="xpm-bal" class="${cr?'wrn':b<0?'neg':'pos'}" dir="ltr">${un?num(cr?Math.max(0,-b):b):'••••••'}</b></div><div><small>⬇ داخل ${MONTHS[NM-1]}</small><b class="pos">${num(r2(i))}</b></div><div><small>⬆ خارج ${MONTHS[NM-1]}</small><b class="neg">${num(r2(o))}</b></div></div>
  <div class="xlna">
   <button class="btn ${un?'ghost':''}" onclick="xPmShow('${id}')">${un?'🙈 إخفاء':'👁️ إظهار الرصيد'}</button>
   ${cr?`<button class="btn" onclick="xCcPay('${id}')">💳 سدد</button>`:`<button class="btn ghost" onclick="xRecon('${id}')">⚖️ مطابقة</button>`}
   <button class="btn ghost" onclick="xAcctRep('${id}')">📄 كشف حساب</button>
   <button class="btn ghost" onclick="xAcctReviewGo('${id}')">🔍 مراجعة</button>
   <button class="btn ghost" onclick="xPmTr('${id}')">🔁 تحويل منه</button>
   <button class="btn ghost" onclick="editMethod('${id}')">✏️ تعديل</button>
  </div>
  ${T.length?`<div class="fl">🕒 آخر الحركات</div><div class="list">${T.map(t=>{const e=ef(t);return `<div class="row clk" onclick="editTx('${t.id}')"><div class="grow"><b>${esc(t.type==='tr'?(t.to===id?'🔁 من '+(M(t.method)?.name||'—'):'🔁 لـ '+(M(t.to)?.name||'—')):(C(t.cat)?.name||'—'))}</b><small>${xDW(t.date)}${t.via?' · '+esc(viaTxt(t.via)):''}</small></div><div class="amt ${e<0?'exp':'inc'}" dir="ltr">${e<0?'-':'+'}${num(Math.abs(e))}</div></div>`}).join('')}</div>`:''}
  <button class="btn ghost danger" onclick="closeSheet();delMethod('${id}')">🗑 حذف الحساب</button>`);
}
async function xPmShow(id){
  if(XPMU===id){XPMU=null;return xPmOpen(id)}
  if(!await xPmAuth(id))return;xPmOpen(id);
  setTimeout(()=>{if(XPMU!==id)return;XPMU=null;const e=$('#xpm-bal');if(e)e.textContent='••••••'},20000);
}
function xPmTr(id){newTx('tr');if(!F)return;F.method=id;F.to=(S.methods.find(m=>m.active&&m.id!==id)||{}).id||'';SHKEEP=1;txForm()}

/* ---------- 🔍 المراجعة: مصاريف إنستاباي ---------- */
try{const _rvI=xRvItems;xRvItems=function(id){const m=M(id);
  return _rvI.apply(this,arguments).filter(x=>!(x.sec==='nofee'&&(x.t.nofee||(m&&m.noIpFee)))).map(x=>{
    if(x.sec==='nofee'){x.sec='info';x.why='تحويل إنستاباي من غير مصاريف. ضيفها بس لو موجودة في كشف البنك';x.acts=x.acts.concat([['nof','✋ مفيش مصاريف']])}return x})}}catch(e){}
try{const _rvA=xRvAct;xRvAct=async function(acct,tid,act){
  const t=S.txs.find(x=>x.id===tid);
  if(act==='nof'){if(t){t.nofee=1;save();render()}return xAcctReview(acct)}
  if(act==='fee'&&t&&!await ask('تضيف مصاريف إنستاباي؟',`${xTxLbl(t)}\n${fmt(xFeeCalc(t.amount))}\nضيفها بس لو موجودة فعلًا في كشف البنك.`,{icon:'💸',ok:'ضيفها',cancel:'لأ'}))return;
  const r=await _rvA.apply(this,arguments);
  if(act==='fee'){const f=xFeeTx(tid);if(f){f.rv=1;save()}}
  return r}}catch(e){}
function xRvTodayFees(id){const t0=new Date(today()+'T00:00').getTime();
  return S.txs.filter(t=>t.feeOf&&t.method===id&&((t.created||0)>=t0||(t.rv&&Date.now()-(t.created||0)<7*864e5))).sort((a,b)=>(b.created||0)-(a.created||0))}
try{const _arv=xAcctReview;xAcctReview=function(id){const r=_arv.apply(this,arguments);try{
  const m=M(id),box=$('#sheet .xrv');if(!m||!box)return r;const FL=xRvTodayFees(id);
  if(FL.length){const sm=r2(FL.reduce((a,t)=>a+t.amount,0)),kv=box.querySelectorAll(':scope>.kv'),at=kv[kv.length-1];
    const h=`<h4>🧾 مصاريف إنستاباي اتضافت النهارده <span class="badge late">${FL.length} · ${num(sm)}</span></h4><p class="muted" style="font-size:11.5px;margin:0 0 6px">لو ضفتها من المراجعة وطلعت مش موجودة في كشف البنك، احذفها من هنا.</p>
    <div class="list">${FL.map(f=>{const p=S.txs.find(x=>x.id===f.feeOf);return `<div class="row" style="cursor:default"><div class="grow"><b>${num(f.amount)} · ${esc(p?xTxLbl(p):'—')}</b><small>${xLnTs(f.created||Date.now())}</small></div><button class="mini danger" onclick="xRvFeeDel('${id}','${f.id}')">🗑</button></div>`}).join('')}</div>
    <button class="btn ghost danger" onclick="xRvFeeDelAll('${id}')">🗑 احذفهم كلهم (${num(sm)})</button>`;
    if(at)at.insertAdjacentHTML('afterend',h);else box.insertAdjacentHTML('afterbegin',h)}
  box.insertAdjacentHTML('beforeend',`<label class="chk fxbox" style="margin-top:12px"><input type="checkbox" ${m.noIpFee?'checked':''} onchange="M('${id}').noIpFee=this.checked;save();xAcctReview('${id}')"> 🚫 الحساب ده مش بيخصم مصاريف إنستاباي</label>`);
}catch(e){}return r}}catch(e){}
function xRvFeeGone(f){const p=S.txs.find(x=>x.id===f.feeOf);if(p)p.nofee=1;S.txs=S.txs.filter(x=>x!==f)}
async function xRvFeeDel(acct,fid){const f=S.txs.find(x=>x.id===fid);if(!f)return xAcctReview(acct);if(isClosed(f.date))return toast('الشهر ده مقفول');
  if(!await ask('حذف المصاريف دي؟',fmt(f.amount),{danger:true,icon:'🗑',ok:'حذف'}))return;xRvFeeGone(f);save();render();xAcctReview(acct);toast('تم ✓')}
async function xRvFeeDelAll(acct){const FL=xRvTodayFees(acct).filter(f=>!isClosed(f.date));if(!FL.length)return;const sm=r2(FL.reduce((a,t)=>a+t.amount,0));
  if(!await ask(`حذف ${FL.length} مصاريف؟`,`الإجمالي ${fmt(sm)}، والرصيد هيرجع زي ما كان.`,{danger:true,icon:'🗑',ok:'احذفهم'}))return;
  FL.forEach(xRvFeeGone);save();render();xAcctReview(acct);toast('اتحذفوا ✓ · رجع '+fmt(sm))}

/* حساب مش بيخصم مصاريف: المصروف الجديد من غير مصاريف */
try{const _tfN=txForm;txForm=function(){const r=_tfN.apply(this,arguments);try{
  if(F&&!F.id&&F.type!=='inc'&&!F._nf&&M(F.method)&&M(F.method).noIpFee){F._nf=1;
    const cb=$('#f-feeon');if(cb&&cb.checked){F.feeOn=false;SHKEEP=1;txForm();return r}
    const i=$('#f-ifee');if(i){i.value='0';F.ifee='0';F.ifeeMan=1}}
}catch(e){}return r}}catch(e){}

try{render()}catch(e){}
/* ========== 2.21.75 ========== */
/* التحويل بين حساباتك بإنستاباي: المصاريف بتتعلّم لوحدها */
document.addEventListener('change',e=>{try{
  const t=e.target;if(!t||!F||F.type!=='tr'||F.id)return;
  if(t.id==='f-tfeeon'){F._tfT=1;return}
  if(t.id!=='f-v')return;
  grab();
  if(t.value==='instapay'&&!F.tfeeOn&&!F._tfT){F.tfeeOn=true;F.tfee=amtStr(xFeeCalc(parseNum(F.amount)));SHKEEP=1;txForm()}
  else if(t.value!=='instapay'&&F.tfeeOn&&!F._tfT){F.tfeeOn=false;SHKEEP=1;txForm()}
}catch(err){}},true);
document.addEventListener('input',e=>{try{
  const t=e.target;if(!t||!F||F.type!=='tr')return;
  if(t.id==='f-tfee'){F._tfM=1;return}
  if(t.id==='f-amt'&&!F._tfM){const i=$('#f-tfee');if(i){i.value=amtStr(xFeeCalc(parseNum(t.value)));F.tfee=i.value}}
}catch(err){}},true);
/* ========== 2.21.76 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
[dir=ltr]>.amt,[dir=ltr] .amt{text-align:right!important;align-items:flex-end}
#view .list>.row[dir=ltr] .grow,#sheet .list>.row[dir=ltr] .grow,details.xr>summary[dir=ltr] .grow{text-align:left}
.xlnr[dir=ltr] .xlnbig{text-align:right}
#xpm-g{margin-top:4px}
`;document.head.appendChild(s)})();

/* ---------- 🏦 قايمة الحسابات مقفولة ---------- */
var XPMO=false;
var XPMTN={all:'🏦 كل الحسابات',bank:'🏦 البنوك',cash:'💵 الكاش',cr:'💳 الكريديت',off:'⏸ الموقوف'};
try{const _rnPm=render;render=function(){const r=_rnPm.apply(this,arguments);try{
  if(view!=='pmv')return r;const el=$('#view');if(!el||el.querySelector('#xpm-g'))return r;
  const cs=[...el.querySelectorAll(':scope>.xpmc')];if(!cs.length)return r;
  const d=document.createElement('details');d.className='grp';d.id='xpm-g';
  if(XPMO||XPMQ.trim()){d.dataset.xso='1';d.open=true}
  d.addEventListener('toggle',()=>{XPMO=d.open});
  d.innerHTML=`<summary><span>${XPMTN[XPMT]||XPMTN.all}</span><span class="badge soon">${cs.length}</span></summary>`;
  cs[0].before(d);cs.forEach(c=>d.appendChild(c));
}catch(e){}return r}}catch(e){}
try{const _pmF=xPmF;xPmF=function(){const r=_pmF.apply(this,arguments);const g=$('#xpm-g');if(g&&XPMQ.trim()&&!g.open){g.dataset.xso='1';g.open=true}return r}}catch(e){}

/* ---------- 🕒 آخر الحركات مقفولة ---------- */
try{const _pmO=xPmOpen;xPmOpen=function(){const r=_pmO.apply(this,arguments);try{
  const fl=[...document.querySelectorAll('#sheet .sz>.fl')].find(x=>/آخر الحركات/.test(x.textContent));if(!fl)return r;
  const ls=fl.nextElementSibling;if(!ls||!ls.classList.contains('list'))return r;
  const d=document.createElement('details');d.className='gen';
  d.innerHTML=`<summary>🕒 آخر الحركات (${ls.children.length})</summary>`;
  fl.replaceWith(d);ls.style.marginTop='8px';d.appendChild(ls);
}catch(e){}return r}}catch(e){}

/* ---------- الأسامي الإنجليزي: الاسم شمال والمبلغ يمين ---------- */
function xDirLtr(s){return dirOf(String(s||''))==='ltr'}
function xDirFix(){
  document.querySelectorAll('#view .xlnc:not([data-xd]),#sheet .xlnc:not([data-xd])').forEach(c=>{c.dataset.xd=1;
    const r=c.querySelector('.xlnr'),b=r&&r.querySelector('b');if(b&&xDirLtr(b.textContent))c.querySelectorAll('.xlnr').forEach(x=>x.setAttribute('dir','ltr'))});
  document.querySelectorAll('#view .row:not([data-xd]),#sheet .row:not([data-xd])').forEach(r=>{r.dataset.xd=1;
    const b=r.querySelector('.grow>b');if(b&&xDirLtr(b.textContent))r.setAttribute('dir','ltr')});
  document.querySelectorAll('#view details.xr>summary:not([data-xd]),#sheet details.xr>summary:not([data-xd])').forEach(s=>{s.dataset.xd=1;
    const b=s.querySelector('.grow>b');if(b&&xDirLtr(b.textContent))s.setAttribute('dir','ltr')});
  const h=document.querySelector('#sheet .sz>h2:not([data-xd])');if(h){h.dataset.xd=1;if(xDirLtr(h.textContent)){h.setAttribute('dir','ltr');h.style.textAlign='left'}}
}
(()=>{let q=false;new MutationObserver(()=>{if(q)return;q=true;requestAnimationFrame(()=>{q=false;try{xDirFix()}catch(e){}})}).observe(document.body,{childList:true,subtree:true});try{xDirFix()}catch(e){}})();

try{render()}catch(e){}
/* ========== 2.21.77 ========== */
/* اتجاه واحد لكل قايمة حسب أغلب الأسامي */
xDirFix=function(){
  const G=new Map(),add=(cont,txt,apply)=>{if(!cont)return;let g=G.get(cont);if(!g){g=[];G.set(cont,g)}g.push({l:xDirLtr(txt),apply})};
  document.querySelectorAll('#view .xlnc,#sheet .xlnc').forEach(c=>{
    const r=c.querySelector('.xlnr'),b=r&&r.querySelector('b');if(!b)return;
    add(c.closest('details.grp')||c.closest('#view,#sheet'),b.textContent,on=>c.querySelectorAll('.xlnr').forEach(x=>on?x.setAttribute('dir','ltr'):x.removeAttribute('dir')))});
  document.querySelectorAll('#view .row,#sheet .row').forEach(r=>{
    const b=r.querySelector('.grow>b');if(!b)return;
    add(r.closest('.list')||r.parentElement,b.textContent,on=>on?r.setAttribute('dir','ltr'):r.removeAttribute('dir'))});
  document.querySelectorAll('#view details.xr>summary,#sheet details.xr>summary').forEach(s=>{
    const b=s.querySelector('.grow>b');if(!b)return;
    add(s.parentElement.closest('details.grp,.list,.xb')||s.parentElement.parentElement,b.textContent,on=>on?s.setAttribute('dir','ltr'):s.removeAttribute('dir'))});
  G.forEach(g=>{const on=g.filter(x=>x.l).length*2>g.length;g.forEach(x=>x.apply(on))});
  const h=document.querySelector('#sheet .sz>h2:not([data-xd])');if(h){h.dataset.xd=1;if(xDirLtr(h.textContent)){h.setAttribute('dir','ltr');h.style.textAlign='left'}}
};
try{xDirFix()}catch(e){}
/* ========== 2.21.78 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xlna>.btn:last-child:nth-child(odd){grid-column:1/-1}
.xpmb{cursor:pointer}
.xpmb small.xht{display:block;font-size:10px!important;opacity:.75;margin-top:2px}
.xlnbig.xtap{cursor:pointer}
.xdrw{display:flex;align-items:center;gap:8px}.xdrw span{flex:1}
`;document.head.appendChild(s)})();

/* ---------- 🏦 الحسابات: الرصيد بيظهر لما تدوس عليه ---------- */
vPmv=function(){
  const MB=v=>XBALOK?v:'••••••',io={};
  keyTx(NKM).forEach(t=>{if(t.pend)return;if(t.type==='tr'){(io[t.to]=io[t.to]||{i:0,o:0}).i+=t.amount;(io[t.method]=io[t.method]||{i:0,o:0}).o+=t.amount}else{const x=io[t.method]=io[t.method]||{i:0,o:0};if(t.type==='inc')x.i+=t.amount;else if(t.type==='exp')x.o+=t.amount}});
  let mine=0,debt=0;S.methods.forEach(m=>{if(m.active===false)return;const b=xBal(m.id);if(xIsCr(m.id))debt+=Math.min(0,b);else mine+=b});
  const cnt=k=>S.methods.filter(m=>k==='all'?m.active!==false:xPmGrp(m)===k).length;
  if(XPMT!=='all'&&!cnt(XPMT))XPMT='all';
  const list=S.methods.filter(m=>XPMT==='all'?m.active!==false:xPmGrp(m)===XPMT);
  const card=m=>{const b=xBal(m.id),cr=xIsCr(m.id),vis=XBALOK||XBSHOW.has(m.id),x=io[m.id]||{i:0,o:0},g=cr?xCcCfg(m.id):null;
    const cls=cr?'wrn':b<0?'neg':'pos';
    const bar=cr&&g.lim>0&&vis?`<div class="xbar"><i style="width:${Math.min(100,Math.max(0,-b)/g.lim*100)}%;background:#ea580c"></i></div>`:'';
    return `<div class="xpmc" data-q="${esc(qn([m.name,m.bank,TYPES[m.type]].join(' ')))}"><div class="xlnc" onclick="xPmOpen('${m.id}')">
    <div class="xlnr"><span class="xpmn">${xMIc(m)}<b>${esc(m.name)}</b></span><span class="xlnbig xtap ${vis?cls:''}" dir="ltr" onclick="event.stopPropagation();${vis&&!XBALOK?'':`xBalOne('${m.id}')`}">${vis?(!cr&&b<0?'-':'')+num(Math.abs(b)):'••••••'}</span></div>
    <div class="xlnr xsm"><span>${cr?'💳 كريديت':esc(TYPES[m.type]||'')}${m.bank?' · '+esc(m.bank):''}</span><span>${vis?(cr?(b<0?'عليك':'ليك'):'الرصيد'):'👆 اضغط للإظهار'}</span></div>${bar}
    <div class="xlnn">${xCh('ok','⬇ '+num(r2(x.i)))} ${xCh('late','⬆ '+num(r2(x.o)))} <small class="muted">${MONTHS[NM-1]}</small></div>
    <div class="xlna">${vis&&!XBALOK?`<button class="btn ghost" onclick="event.stopPropagation();xBalOne('${m.id}')">🙈 إخفاء</button>`:''}${cr?`<button class="btn" onclick="event.stopPropagation();xCcPay('${m.id}')">💳 سدد</button>`:`<button class="btn" onclick="event.stopPropagation();xPmOpen('${m.id}')">📄 التفاصيل</button>`}</div></div></div>`};
  const tb=(k,l)=>`<button type="button" class="${XPMT===k?'on':''}" onclick="XPMT='${k}';render()">${l} (${cnt(k)})</button>`;
  setTimeout(xPmF,0);
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏦 ${esc(L('pm'))}</h3><button class="mini" onclick="${XBALOK?'XBALOK=false;render()':'xBalUnlock()'}">${XBALOK?'🙈 الكل':'👁️ الكل'}</button></div>
  <button class="btn" onclick="editMethod()">➕ حساب جديد</button>
  ${kpis([['💰 فلوسك',MB(fmt(r2(mine))),'inc'],['💳 الكريديت',MB(fmt(Math.abs(r2(debt)))),'exp'],['🏦 الحسابات',String(cnt('all')),'net']])}
  <div class="seg">${tb('all','الكل')}${cnt('bank')?tb('bank','🏦 بنوك'):''}${cnt('cash')?tb('cash','💵 كاش'):''}${cnt('cr')?tb('cr','💳 كريديت'):''}${cnt('off')?tb('off','⏸ موقوف'):''}</div>
  <div class="gsr">${FIC}<input placeholder="اسم الحساب" value="${esc(XPMQ)}" oninput="XPMQ=this.value;xPmF()"></div>
  ${list.length?list.map(card).join(''):'<p class="muted" style="text-align:center;margin:20px 0">لا يوجد</p>'}
  ${!XBALOK&&S.settings.balPw?`<button class="btn ghost" onclick="xBalForgot()">🔑 نسيت باسورد الأرصدة؟</button>`:''}`;
};
xPmOpen=function(id){
  const m=M(id);if(!m)return;const cr=xIsCr(id),un=XBALOK||XPMU===id,b=xBal(id);let i=0,o=0;
  keyTx(NKM).forEach(t=>{if(t.pend)return;if(t.type==='tr'){if(t.to===id)i+=t.amount;if(t.method===id)o+=t.amount}else if(t.method===id){if(t.type==='inc')i+=t.amount;else if(t.type==='exp')o+=t.amount}});
  const T=S.txs.filter(t=>!t.pend&&!t.xpre&&(t.method===id||t.to===id)).sort(byDesc).slice(0,8);
  const ef=t=>t.type==='tr'?(t.to===id?t.amount:-t.amount):t.type==='inc'?t.amount:-t.amount;
  sheet(`<h2>${xMIc(m,1)} ${esc(m.name)}</h2><p class="muted">${cr?'💳 كريديت':esc(TYPES[m.type]||'')}${m.bank?' · '+esc(m.bank):''}${m.active===false?' · ⏸ موقوف':''}</p>
  <div class="xlns"><div class="xpmb" onclick="${un?'':`xPmShow('${id}')`}"><small>${cr?'المديونية':'الرصيد'}</small><b id="xpm-bal" data-id="${id}" class="${cr?'wrn':b<0?'neg':'pos'}" dir="ltr">${un?num(cr?Math.max(0,-b):b):'••••••'}</b>${un?'':'<small class="xht">👆 اضغط للإظهار</small>'}</div><div><small>⬇ داخل ${MONTHS[NM-1]}</small><b class="pos">${num(r2(i))}</b></div><div><small>⬆ خارج ${MONTHS[NM-1]}</small><b class="neg">${num(r2(o))}</b></div></div>
  ${un&&!XBALOK?`<button class="btn ghost" onclick="xPmShow('${id}')">🙈 إخفاء الرصيد</button>`:''}
  <div class="xlna">
   ${cr?`<button class="btn" onclick="xCcPay('${id}')">💳 سدد</button>`:`<button class="btn ghost" onclick="xRecon('${id}')">⚖️ مطابقة</button>`}
   <button class="btn ghost" onclick="xAcctRep('${id}')">📄 كشف حساب</button>
   <button class="btn ghost" onclick="xAcctReviewGo('${id}')">🔍 مراجعة</button>
   <button class="btn ghost" onclick="xPmTr('${id}')">🔁 تحويل منه</button>
   <button class="btn ghost" onclick="editMethod('${id}')">✏️ تعديل</button>
  </div>
  ${T.length?`<details class="gen"><summary>🕒 آخر الحركات (${T.length})</summary><div class="list" style="margin-top:8px">${T.map(t=>{const e=ef(t);return `<div class="row clk" onclick="editTx('${t.id}')"><div class="grow"><b>${esc(t.type==='tr'?(t.to===id?'🔁 من '+(M(t.method)?.name||'—'):'🔁 لـ '+(M(t.to)?.name||'—')):(C(t.cat)?.name||'—'))}</b><small>${xDW(t.date)}${t.via?' · '+esc(viaTxt(t.via)):''}</small></div><div class="amt ${e<0?'exp':'inc'}" dir="ltr">${e<0?'-':'+'}${num(Math.abs(e))}</div></div>`}).join('')}</div></details>`:''}
  <button class="btn ghost danger" onclick="closeSheet();delMethod('${id}')">🗑 حذف الحساب</button>`);
};
var XPMHT=0;
xPmShow=async function(id){
  if(XPMU===id){XPMU=null;clearTimeout(XPMHT);return xPmOpen(id)}
  if(!await xPmAuth(id))return;xPmOpen(id);clearTimeout(XPMHT);
  XPMHT=setTimeout(()=>{if(XPMU!==id)return;XPMU=null;const e=$('#xpm-bal');if(e&&e.dataset.id===id)xPmOpen(id)},20000);
};

/* ---------- ☁️ رسالة Drive: مرة في اليوم بالكتير ---------- */
function xDrSnz(){GD.snz=Date.now();saveGD();render()}
try{const _vhE=vHome;vHome=function(){let h=_vhE.apply(this,arguments);try{
  h=h.replace(/<div class="warn" onclick="xDrNow\(\)">[\s\S]*?<\/div>/,'');
  const mode=xBkS().mode,last=GD.last?new Date(GD.last).getTime():0,age=Date.now()-last,th=mode==='week'?7*864e5:864e5;
  if(!DEMO&&GD.linked&&GD.cid&&mode!=='manual'&&!(gTok&&Date.now()<gExp-60000)&&age>=th&&(!GD.snz||Date.now()-GD.snz>=864e5)&&strHash(JSON.stringify(S))!==GD.hash){
    const d=last?Math.floor(age/864e5):0;
    h=`<div class="warn xdrw"><span onclick="xDrNow()">☁️ ${last?'آخر نسخة على Drive من '+d+' يوم':'لسه مفيش نسخة على Drive'} · اضغط للرفع</span><button class="mini" onclick="event.stopPropagation();xDrSnz()">✕</button></div>`+h}
}catch(e){}return h}}catch(e){}

try{render()}catch(e){}
/* ========== 2.21.79 ========== */
/* مصاريف إنستاباي: باينة من برا، وبتتسجل مع البنود الثابتة */
function xIpNeed(t){return !!t&&!t.pend&&!t.xpre&&!t.feeOf&&!t.payFeeOf&&!t.nofee&&t.type!=='inc'&&t.via==='instapay'&&!xFeeTx(t.id)&&!(M(t.method)&&M(t.method).noIpFee)}
function xIpTag(t){if(!t||t.pend)return '';const f=xFeeTx(t.id);if(f)return ' · 💸 مصاريف '+num(f.amount);return xIpNeed(t)?' · ⚠️ من غير مصاريف إنستاباي':''}
async function xTxFeeAdd(id){const t=S.txs.find(x=>x.id===id);if(!t)return;if(isClosed(t.date))return toast('الشهر ده مقفول');
  const v=await askIn('💸 مصاريف إنستاباي','المبلغ اللي البنك خصمه فعلًا',amtStr(xFeeCalc(t.amount)),true,'ضيف');if(v==null)return;
  const a=parseNum(v);if(!(a>0))return toast('اكتب المبلغ');xAddIpFee(t,a);delete t.nofee;save();render();toast('💸 اتضافت '+fmt(a))}
function xTxNoFee(id){const t=S.txs.find(x=>x.id===id);if(!t)return;t.nofee=1;save();render();toast('تمام · مش هسألك عليها تاني')}

/* جوه المعاملة */
try{const _tbI=txBody;txBody=function(t){let h=_tbI.apply(this,arguments);try{
  if(xIpNeed(t))h=h.replace('<div class="etbar"',`<div class="kv"><span>💸 مصاريف إنستاباي</span><b>مش متسجلة</b></div><div class="etbar" style="margin:6px 0 0"><button class="mini" onclick="xTxFeeAdd('${t.id}')">➕ ضيف ${num(xFeeCalc(t.amount))}</button><button class="mini" onclick="xTxNoFee('${t.id}')">✋ مفيش</button></div><div class="etbar"`);
}catch(e){}return h}}catch(e){}

/* من برا: في السطر اللي تحت الاسم */
try{const _frI=fixedRow;fixedRow=function(o){let h=_frI.apply(this,arguments);try{
  if(o&&o.s&&o.s.st==='done'&&o.s.t){const tg=xIpTag(o.s.t);if(tg)h=h.replace('</small>',tg+'</small>')}}catch(e){}return h}}catch(e){}
try{const _trI=txRow;txRow=function(t){let h=_trI.apply(this,arguments);try{const tg=xIpTag(t);if(tg)h=h.replace('</small>',tg+'</small>')}catch(e){}return h}}catch(e){}
try{const _xmI=xMeta;xMeta=function(t,fee){const a=_xmI.apply(this,arguments);try{if(!fee&&t&&!t.pend){const f=xFeeTx(t.id);
  if(f)a.push(xC('💸 مصاريف '+num(f.amount),'#7c3aed'));else if(xIpNeed(t))a.push(xC('⚠️ من غير مصاريف','#ea580c'))}}catch(e){}return a}}catch(e){}

/* البنود الثابتة اللي بتتدفع بإنستاباي: المصاريف بتتسجل معاها */
function xAutoFee(before){let n=0;S.txs.filter(t=>!before.has(t.id)&&t.src&&t.src.k==='r'&&t.type==='exp'&&xIpNeed(t)&&!isClosed(t.date)).forEach(t=>{xAddIpFee(t,xFeeCalc(t.amount));n++});if(n)save();return n}
try{const _apF=autoPostFixed;autoPostFixed=function(){const b=new Set(S.txs.map(t=>t.id)),r=_apF.apply(this,arguments);try{xAutoFee(b)}catch(e){}return r}}catch(e){}
try{const _ocF=occCollect;occCollect=async function(){const b=new Set(S.txs.map(t=>t.id)),r=await _ocF.apply(this,arguments);try{if(xAutoFee(b))render()}catch(e){}return r}}catch(e){}

try{render()}catch(e){}
/* ========== 2.21.80 ========== */
/* خانة مصاريف إنستاباي بتقول هي متسجلة ولا لأ */
try{const _tfS=txForm;txForm=function(){const r=_tfS.apply(this,arguments);try{
  const i=$('#f-ifee'),l=i&&i.closest('label');if(!l||l.querySelector('.xfst'))return r;
  const on=!!(F&&F.id&&xFeeTx(F.id));
  l.insertAdjacentHTML('beforeend',`<small class="xfst" style="display:block;margin-top:4px;font-weight:700;color:${on?'#16a34a':'#ea580c'}">${on?'✅ متسجلة':'⚠️ مش متسجلة لسه · هتتسجل لما تدوس سجّل'}</small>`);
}catch(e){}return r}}catch(e){}
/* ========== 2.21.81 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
body.xhome #view#view{padding-bottom:calc(var(--navh,64px) + 14px)!important}
body.xhome #view>.warn,body.xhome #view>.xlnal{padding:6px 10px!important;margin:0 0 6px!important;font-size:12px!important;border-radius:10px!important;line-height:1.5}
body.xhome .brand{margin-top:8px!important;align-items:flex-end!important}
body.xhome .brand::before{display:none}
body.xhome .brand small{display:none}
.xhdw{display:flex!important;align-items:center;gap:8px}
.xhdw>span{flex:1;min-width:0}
.xhdx{flex:0 0 auto;width:28px;height:28px;padding:0!important;border-radius:50%!important;font-size:12px!important}
`;document.head.appendChild(s)})();

/* ---------- ✕ قفل رسايل التنبيه في الرئيسية ---------- */
var XHDK='centric-hdis';
function xHdGet(){try{return JSON.parse(localStorage.getItem(XHDK)||'{}')}catch(e){return{}}}
function xHdKey(el){return (el.textContent||'').replace(/[\d.,•✕·]/g,'').replace(/\s+/g,' ').trim().slice(0,40)}
function xHdDis(btn){const el=btn.closest('.xhdw');if(!el)return;const m=xHdGet(),td=today(),o={};
  Object.keys(m).forEach(k=>{if(m[k]===td)o[k]=td});o[xHdKey(el)]=td;localStorage.setItem(XHDK,JSON.stringify(o));el.remove();toast('اتقفل لحد بكرة')}
try{const _rnHd=render;render=function(){const r=_rnHd.apply(this,arguments);try{
  if(view!=='home')return r;const el=$('#view');if(!el)return r;const m=xHdGet(),td=today();
  el.querySelectorAll(':scope>.warn,:scope>.xlnal').forEach(b=>{
    if(b.classList.contains('xdrw')||b.querySelector('.xhdx'))return;
    if(m[xHdKey(b)]===td){b.remove();return}
    const sp=document.createElement('span');while(b.firstChild)sp.appendChild(b.firstChild);
    b.appendChild(sp);b.classList.add('xhdw');
    b.insertAdjacentHTML('beforeend','<button type="button" class="mini xhdx" onclick="event.stopPropagation();xHdDis(this)">✕</button>');
  });
}catch(e){}return r}}catch(e){}

try{render()}catch(e){}
/* ========== 2.21.82 ========== */
/* قاعدة واحدة: إنستاباي = مصاريف، ما عدا الفواتير لو مش متعلّمة */
if(!S.settings.xipmig1){S.txs.forEach(t=>{delete t.nofee});S.methods.forEach(m=>{delete m.noIpFee});S.settings.xipmig1=1;save()}
function xIsBillTx(t){return !!(t&&(t.bill||(C(t.cat)&&C(t.cat).xbill)))}
xIpNeed=function(t){return !!t&&!t.pend&&!t.xpre&&!t.feeOf&&!t.payFeeOf&&!t.nofee&&t.type!=='inc'&&t.via==='instapay'&&!xIsBillTx(t)&&!xFeeTx(t.id)};
xRvFeeGone=function(f){S.txs=S.txs.filter(x=>x!==f)};

/* شاشة التسجيل: مربع واحد لمصاريف إنستاباي */
function xIpCtlOk(){if(!F||(F.type!=='exp'&&F.type!=='tr')||F.via!=='instapay')return false;const o=F.id&&S.txs.find(t=>t.id===F.id);return !(o&&(o.feeOf||o.payFeeOf))}
function xIpBill(){if(F.type!=='exp')return false;if(F.isBill)return true;const c=F.cat&&F.cat!=='__new'&&C(F.cat);return !!(c&&c.xbill)}
function xIpCtl(){
  const sz=$('#sheet .sz');if(!sz||!F||!xIpCtlOk())return;
  sz.querySelectorAll('.xfee').forEach(e=>e.remove());const fi=$('#f-ifee');if(fi){const l=fi.closest('label');if(l)l.remove()}
  const bill=xIpBill(),ft=F.id&&xFeeTx(F.id);
  if(F.ipOn==null||(F._ipB!==bill&&!F.ipT)){F.ipOn=ft?true:!bill;if(!F.ipMan)F.ipAmt=ft?amtStr(ft.amount):amtStr(xFeeCalc(parseNum(F.amount)));if(ft)F.ipMan=1}
  F._ipB=bill;
  const v=$('#f-v'),at=sz.querySelector('.xipb')||(v&&(v.closest('.two')||v.closest('label')));if(!at)return;
  at.insertAdjacentHTML('afterend',`<div class="xfee" id="xipc"><label class="chk"><input type="checkbox" id="xip-on" ${F.ipOn?'checked':''} onchange="F.ipOn=this.checked;F.ipT=1;$('#xip-b').style.display=this.checked?'':'none'"> 💸 مصاريف إنستاباي</label>
  <div id="xip-b" style="${F.ipOn?'':'display:none'}"><div class="inl"><input id="xip-a" inputmode="decimal" dir="ltr" value="${esc(F.ipAmt||'')}" oninput="F.ipAmt=this.value;F.ipMan=1"><button type="button" class="mini" onclick="F.ipMan=0;F.ipAmt=amtStr(xFeeCalc(parseNum(($('#f-amt')||{}).value)));$('#xip-a').value=F.ipAmt">↺</button></div></div>
  <small class="muted">${bill?'الفاتورة بتتدفع بمصاريفها. علّم هنا بس لو حولت الفلوس لحد بإنستاباي':'أي دفع أو تحويل بإنستاباي بيتسجل معاه مصاريفه'}</small></div>`);
  const a=$('#f-amt');if(a&&!a.dataset.xip){a.dataset.xip=1;a.addEventListener('input',()=>{if(F&&!F.ipMan){F.ipAmt=amtStr(xFeeCalc(parseNum(a.value)));const i=$('#xip-a');if(i)i.value=F.ipAmt}})}
}
try{const _tfC2=txForm;txForm=function(){const r=_tfC2.apply(this,arguments);try{xIpCtl()}catch(e){}return r}}catch(e){}
document.addEventListener('change',e=>{try{if(e.target&&e.target.id==='f-v'&&F&&F.type==='tr'&&F.id){grab();SHKEEP=1;txForm()}}catch(err){}},true);
try{const _stC2=saveTx;saveTx=async function(){
  let on=null,kind=F&&F.type;const before=new Set(S.txs.map(t=>t.id));
  try{grab();if(F&&$('#xipc')){on=!!($('#xip-on')||{}).checked;const a=parseNum(($('#xip-a')||{}).value)||0;F.ipOn=on;
    if(F.type==='exp'){F.feeOn=on&&a>0;F.fee=amtStr(a);F._feeT=1}else{F.tfeeOn=on&&a>0;F.tfee=amtStr(a)}
    const t=F.id&&S.txs.find(x=>x.id===F.id);if(t){if(on)delete t.nofee;else if(!xIsBillTx(t))t.nofee=1}}}catch(e){}
  const r=await _stC2.apply(this,arguments);
  try{if(on===false&&!$('#sheet').classList.contains('open')){const t=S.txs.find(x=>!before.has(x.id)&&x.type===kind&&x.via==='instapay'&&!x.feeOf&&!x.payFeeOf);if(t&&!xIsBillTx(t)){t.nofee=1;save()}}}catch(e){}
  return r}}catch(e){}

/* المراجعة: قسم واحد واضح */
try{const _rvJ=xRvItems;xRvItems=function(){const re=/إنستاباي من غير مصاريف/;
  return _rvJ.apply(this,arguments).filter(x=>!(re.test(x.why)&&(xIsBillTx(x.t)||x.t.nofee))).map(x=>{
    if(re.test(x.why)){x.sec='nofee';x.why='اتحولت بإنستاباي ومفيش مصاريف متسجلة عليها';x.acts=[['fee','➕ ضيف المصاريف'],['nof','✋ المصاريف محسوبة في المبلغ']]}return x})}}catch(e){}
try{const _rvB=xRvAct;xRvAct=async function(acct,tid,act){
  if(act!=='fee')return _rvB.apply(this,arguments);
  const t=S.txs.find(x=>x.id===tid);if(!t)return xAcctReview(acct);if(isClosed(t.date))return toast('الشهر ده مقفول');
  const v=await askIn('💸 مصاريف إنستاباي',xTxLbl(t)+'\nاكتب الرقم اللي في كشف البنك',amtStr(xFeeCalc(t.amount)),true,'ضيف');if(v==null)return;
  const a=parseNum(v);if(!(a>0))return toast('اكتب المبلغ');xAddIpFee(t,a);delete t.nofee;const f=xFeeTx(tid);if(f)f.rv=1;
  save();render();xAcctReview(acct);toast('💸 اتضافت '+fmt(a))}}catch(e){}
try{const _arw=xAcctReview;xAcctReview=function(){const r=_arw.apply(this,arguments);try{const box=$('#sheet .xrv');if(!box)return r;
  box.querySelectorAll('label').forEach(l=>{if(/مش بيخصم/.test(l.textContent))l.remove()});
  const h=[...box.querySelectorAll('h4')].find(x=>/إنستاباي من غير مصاريف/.test(x.textContent));
  if(h){if(h.firstChild&&h.firstChild.nodeType===3)h.firstChild.nodeValue='💸 تحويلات إنستاباي من غير مصاريف ';
    h.insertAdjacentHTML('afterend','<p class="muted" style="font-size:11.5px;margin:0 0 6px">قارن كل واحدة بكشف البنك: لو البنك خصم مصاريف دوس ➕ واكتب الرقم اللي في الكشف، ولو المبلغ اللي كاتبه فيه المصاريف أصلًا دوس ✋</p>')}
}catch(e){}return r}}catch(e){}

try{render()}catch(e){}
/* ========== 2.21.83 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
body.xhome .brand{align-items:center!important}
body.xhome #view .hero{padding:8px 10px!important;margin-bottom:8px!important}
body.xhome #view .hero .hero-t{line-height:1.6!important}
body.xhome #view .xhb{gap:6px!important;margin:6px 0 4px!important}
body.xhome #view .xbx{padding:5px 6px!important;gap:3px!important;border-radius:12px!important}
body.xhome #view .xbx>small{font-size:10.5px!important}
body.xhome #view .xbx .xv{min-height:26px!important;padding:2px 6px!important;font-size:14px!important;border-radius:9px!important}
body.xhome #view .xbx .xd{padding:3px!important;font-size:10.5px!important;border-radius:8px!important}
body.xhome #view .hero .hnet{padding:4px 10px!important;margin-top:4px!important}
body.xhome #view .hero .hnet b{font-size:13.5px!important}
body.xhome #view .dash{gap:6px!important;margin-bottom:6px!important}
body.xhome #view .dash .tile{padding:6px 8px!important;gap:2px!important;border-radius:12px!important}
body.xhome #view .dash .tile .xv{min-height:24px!important;padding:2px 6px!important;margin:3px 0 2px!important;font-size:13px!important;border-radius:8px!important}
body.xhome #view .dash .tile>small{font-size:10px!important;line-height:1.3!important}
body.xhome #view .dash .tile .xd{margin-top:2px!important;padding-top:2px!important;font-size:10px!important}
`;document.head.appendChild(s)})();
/* ========== 2.21.84 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xrv .xnb,.xck .xnb{display:grid!important;grid-template-columns:1fr 1fr;gap:6px!important}
.xrv .xnb .mini,.xck .xnb .mini{white-space:normal!important;height:auto!important;min-height:34px;padding:6px 8px!important;line-height:1.35;font-size:12px!important;min-width:0!important}
.xrv .xnb .mini:last-child:nth-child(odd),.xck .xnb .mini:last-child:nth-child(odd){grid-column:1/-1}
.xck h4{margin:14px 0 6px;font-size:13.5px}
.xck .list .row small{display:block;margin-top:3px;white-space:normal}
`;document.head.appendChild(s)})();

/* ---------- 🔍 مراجعة كل الحسابات ---------- */
function xRvAll(){
  const rows=S.methods.filter(m=>m.active!==false).map(m=>{let n=0;try{n=xRvItems(m.id).filter(x=>x.sec!=='info').length}catch(e){}
    return `<div class="row" onclick="xAcctReviewGo('${m.id}')"><span class="pmlg">${xMIc(m)}</span><div class="grow"><b>${esc(m.name)}</b><small>${n?'⚠️ '+n+' حاجة محتاجة مراجعة':'✅ مفيش مشاكل'}</small></div><span class="nchev">‹</span></div>`}).join('');
  sheet(`<h2>🔍 مراجعة الحسابات</h2>
  <p class="muted">دوس ✅ Check والبرنامج هيلف على كل الحسابات ويصلح الأخطاء لوحده، وفي الآخر هيوريك عمل إيه، وتقدر ترجّع كل حاجة بزرار واحد.</p>
  <button class="btn" onclick="xCheckAll()">✅ Check</button>
  <div class="fl">أو افتح مراجعة حساب معين</div><div class="list">${rows}</div>`);
}
var XCHKSNAP=null;
async function xCheckAll(){
  if(!await ask('✅ Check','هيلف على كل الحسابات ويصلح:\n• مصاريف إنستاباي الناقصة أو المكررة أو على حساب غلط\n• العمليات اللي فيها أخطاء واضحة\n\nوتقدر ترجّع كل حاجة بعدها بزرار واحد.',{icon:'✅',ok:'ابدأ'}))return;
  XCHKSNAP=JSON.stringify(S);
  const fix=[],look=[],P=id=>S.txs.find(x=>x.id===id),aN=id=>M(id)?.name||'—';
  const del=new Set(),seen={};
  /* مصاريف إنستاباي */
  S.txs.forEach(f=>{if(!f.feeOf||isClosed(f.date))return;const p=P(f.feeOf);
    const why=!p?'مصاريف لعملية اتحذفت':p.pend?'مصاريف لعملية لسه ما اتدفعتش':(p.via!=='instapay'&&p.type!=='tr')?'مصاريف إنستاباي على عملية مش إنستاباي':seen[f.feeOf]?'مصاريف متسجلة مرتين':'';
    if(why){del.add(f.id);fix.push({a:f.method,t:'🗑 '+why+' · '+num(f.amount)+(p?' · '+xTxLbl(p):'')});return}
    seen[f.feeOf]=1;
    if(f.method!==p.method){fix.push({a:p.method,t:'↪ مصاريف '+num(f.amount)+' اتنقلت من '+aN(f.method)+' · '+xTxLbl(p)});f.method=p.method}});
  S.txs.forEach(t=>{if(isClosed(t.date)||del.has(t.id))return;
    if(t.payFeeOf&&!P(t.payFeeOf)){del.add(t.id);fix.push({a:t.method,t:'🗑 مصاريف دفع لقسط اتحذف · '+num(t.amount)})}
    else if(!(t.amount>0)){del.add(t.id);fix.push({a:t.method,t:'🗑 عملية مبلغها غلط · '+xTxLbl(t)})}
    else if(t.type==='tr'&&t.method&&t.method===t.to){del.add(t.id);fix.push({a:t.method,t:'🗑 تحويل من الحساب لنفسه · '+num(t.amount)})}
    else if(t.xpre&&t.method){fix.push({a:t.method,t:'🧹 قسط مدفوع سابقًا اتشال من الحساب · '+num(t.amount)});t.method='';t.via=''}});
  S.txs=S.txs.filter(t=>!del.has(t.id));
  /* إنستاباي من غير مصاريف */
  let addSum=0;
  S.txs.slice().forEach(t=>{if(isClosed(t.date)||!xIpNeed(t))return;const a=xFeeCalc(t.amount);if(!(a>0))return;
    xAddIpFee(t,a);const f=xFeeTx(t.id);if(f){f.rv=1;f.chk=1}addSum=r2(addSum+a);fix.push({a:t.method,t:'➕ مصاريف إنستاباي '+num(a)+' · '+xTxLbl(t),id:t.id})});
  /* اللي محتاج تبص عليه */
  const td=today(),dp={};
  S.txs.forEach(t=>{if(t.feeOf||t.payFeeOf||t.pend)return;
    const k=[t.type,t.date,r2(t.amount),t.cat||'',t.method,t.to||''].join('|');(dp[k]=dp[k]||[]).push(t);
    if(t.date>td)look.push({a:t.method,t:'📅 تاريخها بعد النهارده · '+xTxLbl(t),id:t.id})});
  Object.values(dp).forEach(l=>{if(l.length>1)l.slice(1).forEach(t=>look.push({a:t.method,t:'🔁 ممكن تكون مكررة · '+xTxLbl(t),id:t.id}))});
  S.methods.forEach(m=>{if(xIsCr(m.id))return;try{const g=xLedger(m.id,'1900-01-01',td,S.txs,S.cash),e=g.ev.find(e=>e.r<0);if(e)look.push({a:m.id,t:'⚠️ الرصيد نزل تحت الصفر يوم '+dmy(e.d)+' بعد «'+e.l+'»'})}catch(e){}});
  save();render();
  const grp=(L,ac)=>{const by={};L.forEach(x=>(by[x.a]=by[x.a]||[]).push(x));return Object.entries(by).map(([a,l])=>`<h4>${esc(aN(a))} <span class="badge soon">${l.length}</span></h4><div class="list">${l.map(x=>`<div class="row" style="cursor:default"><div class="grow"><small style="font-size:12.5px">${esc(x.t)}</small>${ac&&x.id?`<div class="xnb"><button class="mini" onclick="editTx('${x.id}')">📂 افتح</button></div>`:''}</div></div>`).join('')}</div>`).join('')};
  sheet(`<h2>✅ نتيجة الـ Check</h2><div class="xck">
  <div class="xlns"><div><small>اتصلح</small><b class="pos">${fix.length}</b></div><div><small>مصاريف اتضافت</small><b>${num(addSum)}</b></div><div><small>محتاج تبص</small><b class="${look.length?'neg':''}">${look.length}</b></div></div>
  ${fix.length?'<div class="fl">🛠 اللي اتصلح</div>'+grp(fix,0):'<div class="xrvok">✅ مفيش أخطاء تتصلح</div>'}
  ${look.length?'<div class="fl">👀 محتاج تبص عليه بنفسك</div>'+grp(look,1):''}
  <p class="muted" style="margin-top:12px">آخر خطوة: اعمل ⚖️ مطابقة لكل حساب مع رصيد البنك. لو طلع فرق بعد ما المصاريف اتضافت، دوس ↩️ رجّع، أو افتح مراجعة الحساب ودوس ✋ على العملية اللي المصاريف بتاعتها جوه المبلغ.</p>
  ${fix.length?'<button class="btn ghost danger" onclick="xCheckUndo()">↩️ رجّع كل اللي اتعمل</button>':''}</div>`);
}
async function xCheckUndo(){
  if(!XCHKSNAP)return toast('مفيش حاجة ترجع');
  if(!await ask('ترجّع كل اللي اتعمل؟','كل تصليحات الـ Check هتترجع زي ما كانت.',{icon:'↩️',ok:'رجّع',danger:true}))return;
  XTRSKIP=true;try{S=normalize(JSON.parse(XCHKSNAP));save()}finally{XTRSKIP=false}
  XCHKSNAP=null;closeSheet();render();toast('↩️ رجع كل حاجة زي ما كانت');
}
/* زرار المراجعة فوق في شاشة الحسابات */
try{const _rnRv=render;render=function(){const r=_rnRv.apply(this,arguments);try{
  if(view!=='pmv')return r;const ph=$('#view .phead');if(!ph||ph.querySelector('.xrva'))return r;
  const h=ph.querySelector('h3');if(h)h.insertAdjacentHTML('afterend','<button class="mini xrva" onclick="xRvAll()">🔍 مراجعة</button>');
}catch(e){}return r}}catch(e){}
XFC.check=['✅','Check','xRvAll()','#22c55e,#166534',()=>0,''];

try{render()}catch(e){}
/* ========== 2.21.85 ========== */
/* الرئيسية: بوكس الشركة ثابت تحت، ورقم الإصدار ظاهر */
(()=>{const s=document.createElement('style');s.textContent=`
body.xhome #view{display:flex!important;flex-direction:column}
body.xhome #view>.brand{margin-top:auto!important;padding-top:10px}
body.xhome .brand small{display:block!important;font-size:10px!important;line-height:1.5!important;opacity:.8}
`;document.head.appendChild(s)})();
function xHomeFit(){try{
  const v=$('#view');if(!v)return;
  if(view!=='home'){v.style.minHeight='';return}
  const z=parseFloat(getComputedStyle(document.querySelector('main')).zoom)||1;
  const top=v.getBoundingClientRect().top+window.scrollY;
  v.style.minHeight=Math.max(0,(innerHeight-top)/z)+'px';
  const sm=v.querySelector('.brand small');
  if(sm&&!sm.dataset.x2){sm.dataset.x2=1;sm.innerHTML=sm.innerHTML.replace(/ · (?=[^·]*$)/,'<br>')}
}catch(e){}}
try{const _rnFit=render;render=function(){const r=_rnFit.apply(this,arguments);xHomeFit();return r}}catch(e){}
addEventListener('resize',()=>setTimeout(xHomeFit,50));
try{render()}catch(e){}
/* ========== 2.21.86 ========== */
/* زرار Check باين في كل مكان */
try{const _rnCk=render;render=function(){const r=_rnCk.apply(this,arguments);try{
  if(view!=='pmv')return r;const v=$('#view');if(!v||v.querySelector('.xckb'))return r;
  const b=v.querySelector(':scope>.btn[onclick="editMethod()"]');
  if(b)b.insertAdjacentHTML('afterend','<button class="btn ghost xckb" onclick="xRvAll()">✅ Check · مراجعة كل الحسابات</button>');
}catch(e){}return r}}catch(e){}
try{const _pmO2=xPmOpen;xPmOpen=function(){const r=_pmO2.apply(this,arguments);try{
  document.querySelectorAll('#sheet button[onclick^="xAcctReviewGo("]').forEach(b=>b.setAttribute('onclick','xRvAll()'));
}catch(e){}return r}}catch(e){}
try{const _arC=xAcctReview;xAcctReview=function(){const r=_arC.apply(this,arguments);try{
  const box=$('#sheet .xrv');if(box&&!box.querySelector('.xckb'))box.insertAdjacentHTML('afterbegin','<button class="btn xckb" onclick="xCheckAll()">✅ Check · صلّح كل الحسابات</button>');
}catch(e){}return r}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.88 ========== */
/* الألوان: الحالة بس هي اللي ملونة */
(()=>{const s=document.createElement('style');s.textContent=`
#view .xc2.xcc:has(.xlogo),#view .xc2.xcc:has(.xic){background:rgba(148,163,184,.12)!important;border-color:rgba(148,163,184,.28)!important;color:var(--tx)!important}
`;document.head.appendChild(s)})();

/* الأقساط في المصروفات بتفتح زي الثابت */
function xInstIdx(p,it){const L=p.items.filter(i=>i.k!=='mnt'&&i.due).sort((a,b)=>a.due.localeCompare(b.due));const i=L.findIndex(x=>x.id===it.id);return i<0?'—':(i+1)+' من '+L.length}
function xInstRowsX(){
  const g=document.querySelector('#view details.grp[ontoggle*="\'ei\'"]');if(!g)return;
  g.querySelectorAll(':scope>.ckx>.row').forEach(r=>{
    const oc=r.getAttribute('onclick')||'';let m,body='';
    if((m=oc.match(/payStart\('([^']+)','([^']+)'\)/))){
      const p=plan(m[1]),it=p&&p.items.find(x=>x.id===m[2]);if(!p||!it)return;const ac=p.acct&&M(p.acct);
      body=`<div class="kv xbig"><span>💰 المبلغ</span><b>${fmt(+it.amount||0)}</b></div>
      <div class="kv"><span>📅 ميعاد القسط</span><b>${xDW(it.due)}</b></div>
      <div class="kv"><span>🏦 القسط</span><b>${esc(p.name)}</b></div>
      <div class="kv"><span>🔢 رقم القسط</span><b>${xInstIdx(p,it)}</b></div>
      ${ac?`<div class="kv"><span>🏦 بيتدفع من</span><b>${xMIc(ac,1)} ${esc(ac.name)}</b></div>`:''}
      <div class="etbar" style="margin:8px 0 0"><button class="mini pri" onclick="${p.cc?`xCcPay('${p.acct}')`:`payStart('${p.id}','${it.id}')`}">✓ دفع</button><button class="mini" onclick="instPlan='${p.id}';go('plan')">📄 كل الأقساط</button></div>`;
    }else if((m=oc.match(/editTx\('([^']+)'\)/))){
      const t=S.txs.find(x=>x.id===m[1]);if(!t)return;const p=t.src&&t.src.k==='i'&&plan(t.src.id),it=p&&p.items.find(x=>x.id===t.src.p);
      body=txBody(t);
      const ex=(p?`<div class="kv"><span>🏦 القسط</span><b>${esc(p.name)}</b></div>`:'')+(it?`<div class="kv"><span>📅 ميعاد القسط</span><b>${xDW(it.due)}</b></div><div class="kv"><span>🔢 رقم القسط</span><b>${xInstIdx(p,it)}</b></div>`:'');
      body=body.replace('<div class="etbar"',ex+'<div class="etbar"');
      if(p)body=body.replace(`onclick="editTx('${t.id}')">✏️ تعديل</button>`,`$&<button class="mini" onclick="instPlan='${p.id}';go('plan')">📄 كل الأقساط</button>`);
    }else return;
    const d=document.createElement('details');d.className='xr';
    d.innerHTML=`<summary>${r.innerHTML}</summary><div class="xb">${body}</div>`;
    r.replaceWith(d);
  });
}
try{const _rnIx=render;render=function(){const r=_rnIx.apply(this,arguments);try{if(view==='exps')xInstRowsX()}catch(e){}return r}}catch(e){}

/* اتجاه واحد لكل قسم كامل */
xDirFix=function(){
  const G=new Map(),add=(cont,txt,apply)=>{if(!cont)return;let g=G.get(cont);if(!g){g=[];G.set(cont,g)}g.push({l:xDirLtr(txt),apply})};
  const box=el=>el.closest('details.grp')||el.closest('.list')||el.parentElement;
  document.querySelectorAll('#view .xlnc,#sheet .xlnc').forEach(c=>{
    const r=c.querySelector('.xlnr'),b=r&&r.querySelector('b');if(!b)return;
    add(c.closest('details.grp')||c.closest('#view,#sheet'),b.textContent,on=>c.querySelectorAll('.xlnr').forEach(x=>on?x.setAttribute('dir','ltr'):x.removeAttribute('dir')))});
  document.querySelectorAll('#view .row,#sheet .row').forEach(r=>{
    const b=r.querySelector('.grow>b');if(!b)return;
    add(box(r),b.textContent,on=>on?r.setAttribute('dir','ltr'):r.removeAttribute('dir'))});
  document.querySelectorAll('#view details.xr>summary,#sheet details.xr>summary').forEach(s=>{
    const b=s.querySelector('.grow>b');if(!b)return;
    add(box(s.parentElement.parentElement),b.textContent,on=>on?s.setAttribute('dir','ltr'):s.removeAttribute('dir'))});
  G.forEach(g=>{const on=g.filter(x=>x.l).length*2>g.length;g.forEach(x=>x.apply(on))});
  const h=document.querySelector('#sheet .sz>h2:not([data-xd])');if(h){h.dataset.xd=1;if(xDirLtr(h.textContent)){h.setAttribute('dir','ltr');h.style.textAlign='left'}}
};

/* لما تفتح معاملة، اللي قبلها تتقفل */
document.addEventListener('click',e=>{try{
  const s=e.target.closest&&e.target.closest('#view details.xr>summary');if(!s||e.target.closest('input,button,a'))return;
  const d=s.parentElement;if(d.open)return;
  document.querySelectorAll('#view details.xr[open]').forEach(o=>{if(o!==d&&!o.contains(d))o.open=false});
}catch(err){}},true);

try{render()}catch(e){}
/* ========== 2.21.89 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.xrvS{margin:10px 0 0!important}
.xrvS>summary{display:flex;align-items:center;gap:8px;font-weight:800;font-size:13.5px;cursor:pointer;list-style:none}
.xrvS>summary::-webkit-details-marker{display:none}
.xrvS>summary::after{content:'▾';margin-inline-start:auto;opacity:.6}
.xrvS[open]>summary::after{content:'▴'}
.xrvS[open]>summary{margin-bottom:6px}
.xrvI{padding:10px 0;border-top:1px dashed rgba(148,163,184,.3)}
.xrvI .grow b{display:block;font-size:13.5px}
.xrvI small{display:block;font-size:11.5px;opacity:.85;margin-top:2px}
.xrvI .xwhy{color:#ea580c;font-weight:700;opacity:1;margin-top:4px}
.xrvI .xnb{margin-top:8px}
.xckB>div{cursor:pointer}
.xlns b[dir=ltr]{font-size:15px}
`;document.head.appendChild(s)})();

/* لما تشيل مصاريف بإيدك، البرنامج يفتكر إن التحويل ملوش مصاريف */
xRvFeeGone=function(f){const p=S.txs.find(x=>x.id===f.feeOf);if(p)p.nofee=1;S.txs=S.txs.filter(x=>x!==f)};
function xRvTxT(t){const nm=t.type==='tr'?'🔁 '+(M(t.method)?.name||'—')+' ← '+(M(t.to)?.name||'—'):(C(t.cat)?.name||'—');return `<b>${esc(nm)}</b><small>${t.type==='tr'?'تحويل · ':''}${num(t.amount)} ج.م · ${xDW(t.date)}</small>`}
function xRvSec(t,n,body,cls,id){return `<details class="gen xrvS"${id?` id="${id}"`:''}><summary>${t} <span class="badge ${cls||'soon'}">${n}</span></summary>${body}</details>`}

/* ---------- 🔍 مراجعة الحساب ---------- */
xAcctReview=function(id){
  const m=M(id);if(!m)return;const it=xRvItems(id),td=today(),FL=xRvTodayFees(id);
  const SEC=[['bad','⛔ أخطاء','late'],['fee','💸 مشاكل في مصاريف إنستاباي','late'],['nofee','💸 تحويلات إنستاباي من غير مصاريف','wait'],['dup','🔁 ممكن تكون مكررة','wait'],['info','ℹ️ ملاحظات','soon']];
  const issue=x=>`<div class="xrvI"><div class="grow">${xRvTxT(x.t)}<small class="xwhy">${esc(x.why)}</small></div><div class="xnb"><button class="mini" onclick="editTx('${x.t.id}')">📂 افتح</button>${x.acts.map(([a,l])=>`<button class="mini" onclick="xRvAct('${id}','${x.t.id}','${a}')">${l}</button>`).join('')}</div></div>`;
  let neg='';if(!xIsCr(id)){try{const g=xLedger(id,'1900-01-01',td,S.txs,S.cash),e=g.ev.find(e=>e.r<0);if(e)neg=`<div class="xwarn">⚠️ الرصيد نزل تحت الصفر يوم <b>${xDW(e.d)}</b> بعد «${esc(e.l)}».<br>يعني فيه فلوس دخلت قبلها ومتسجلتش، أو حركة تاريخها غلط، أو رصيد البداية ناقص.</div>`}catch(e){}}
  const n=it.filter(x=>x.sec!=='info').length;
  let h=`<h2>🔍 مراجعة ${esc(m.name)}</h2><div class="xrv">
  <button class="btn xckb" onclick="xCheckAll()">✅ Check · صلّح كل الحسابات</button>
  <div class="xlns"><div><small>الرصيد في البرنامج</small><b dir="ltr">${num(xBal(id))}</b></div><div><small>رصيد البداية</small><b dir="ltr">${num(+m.open||0)}</b>${m.openAt?`<small>${dmy(m.openAt)}</small>`:''}</div><div><small>محتاج تبص</small><b class="${n?'neg':'pos'}">${n}</b></div></div>
  ${neg}${!it.length&&!FL.length?'<div class="xrvok">✅ مفيش أخطاء في عمليات الحساب ده</div>':''}`;
  if(FL.length){const sm=r2(FL.reduce((a,t)=>a+t.amount,0));
    h+=xRvSec('💸 مصاريف إنستاباي اتضافت النهارده',FL.length+' · '+num(sm),`<p class="muted" style="font-size:11.5px;margin:0 0 4px">لو البنك مخصمش واحدة منهم، دوس 🗑 شيلها.</p>${FL.map(f=>{const p=S.txs.find(x=>x.id===f.feeOf);return `<div class="xckr"><div class="grow">${p?xRvTxT(p):'<b>—</b>'}</div><span class="xcka">مصاريف ${num(f.amount)}</span><button class="mini" onclick="xRvFeeDel('${id}','${f.id}')">🗑 شيلها</button></div>`}).join('')}<button class="btn ghost danger" onclick="xRvFeeDelAll('${id}')">🗑 شيل الكل (${num(sm)})</button>`,'late')}
  SEC.forEach(([k,t,c])=>{const L=it.filter(x=>x.sec===k);if(!L.length)return;
    h+=xRvSec(t,L.length,(k==='nofee'?'<p class="muted" style="font-size:11.5px;margin:0 0 4px">قارن كل واحدة بكشف البنك: لو البنك خصم مصاريف دوس ➕، ولو المبلغ فيه المصاريف أصلًا دوس ✋</p>':'')+L.map(issue).join(''),c)});
  const tr=xTrGet().map((e,i)=>({e,i})).filter(({e})=>e.k==='txs'&&e.o&&(e.o.method===id||e.o.to===id)&&Date.now()-e.at<45*864e5).reverse();
  if(tr.length)h+=xRvSec('🗑 اتحذف من الحساب مؤخرًا',tr.length,tr.map(({e,i})=>`<div class="xckr"><div class="grow"><b>${esc(e.l)}</b><small>اتحذف ${xLnTs(e.at)}</small></div><button class="mini" onclick="xRvRest('${id}',${i})">♻️ رجّعه</button></div>`).join(''));
  const log=xBlogGet().filter(x=>x.a===id).slice(-40).reverse();
  h+=xRvSec('📜 آخر التغييرات في الرصيد',log.length,log.length?log.map(x=>`<div class="xrvI"><div class="grow"><b class="${x.d<0?'neg':'pos'}" dir="ltr" style="text-align:right">${x.d>0?'+':''}${num(x.d)}</b><small>${xLnTs(x.at)}</small>${x.w.map(w=>`<small>${esc(w)}</small>`).join('')}</div></div>`).join(''):'<p class="muted">السجل بيبدأ من 2.21.73. أي تغيير في رصيد الحساب هيتسجل هنا وسببه.</p>');
  sheet(h+'</div>');
};

/* ---------- ✅ نتيجة الـ Check ---------- */
function xCkGo(k){const d=$('#xck-'+k);if(!d)return toast('مفيش');d.open=true;setTimeout(()=>{try{d.scrollIntoView({block:'start',behavior:'smooth'})}catch(e){}},60)}
xCheckShow=function(){
  const R=XCHK;if(!R)return toast('لسه معملتش Check');
  const add=R.add.map(x=>({...x,p:S.txs.find(t=>t.id===x.pid),f:xFeeTx(x.pid)})).filter(x=>x.p&&x.f);
  const sumA=r2(add.reduce((s,x)=>s+x.f.amount,0)),aN=id=>M(id)?.name||'—';
  const parts=[];
  if(add.length)parts.push(`ضفت مصاريف إنستاباي على <b>${add.length}</b> تحويل كانوا من غير مصاريف، والإجمالي <b>${fmt(sumA)}</b>.`);
  if(R.fix.length)parts.push(`وصلّحت <b>${R.fix.length}</b> غلطة.`);
  if(R.look.length)parts.push(`وفيه <b>${R.look.length}</b> حاجة محتاج تبص عليها بنفسك.`);
  let h=`<h2>✅ نتيجة الـ Check</h2><div class="xck">
  <div class="xlns xckB"><div onclick="xCkGo('fix')"><small>اتصلح</small><b class="pos">${R.fix.length}</b></div><div onclick="xCkGo('add')"><small>مصاريف اتضافت</small><b>${num(sumA)}</b></div><div onclick="xCkGo('look')"><small>محتاج تبص</small><b class="${R.look.length?'neg':''}">${R.look.length}</b></div></div>
  <div class="xckS">${parts.length?parts.join(' '):'كل حاجة مظبوطة ✓'}<br><small class="muted">${xLnTs(R.at)} · دوس على أي مربع فوق عشان تشوف تفاصيله</small></div>`;
  if(add.length){const ac=[...new Set(add.map(x=>x.a))];
    h+=xRvSec('💸 المصاريف اللي اتضافت',add.length+' · '+num(sumA),'<p class="muted" style="font-size:11.5px;margin:0 0 4px">لو البنك مخصمش واحدة منهم، دوس ✋ شيلها.</p>'+ac.map(a=>{const m=M(a),L=add.filter(x=>x.a===a),s=r2(L.reduce((t,x)=>t+x.f.amount,0));
      return `<div class="xlnc" style="cursor:default"><div class="xlnr"><span class="xpmn">${m?xMIc(m):''}<b>${esc(aN(a))}</b></span><span class="xlnbig neg" dir="ltr">-${num(s)}</span></div>
      ${L.map(x=>`<div class="xckr"><div class="grow">${xRvTxT(x.p)}</div><span class="xcka">مصاريف ${num(x.f.amount)}</span><button class="mini" onclick="xChkRm('${x.pid}')">✋ شيلها</button></div>`).join('')}</div>`}).join(''),'late','xck-add')}
  if(R.fix.length)h+=xRvSec('🛠 اللي اتصلح',R.fix.length,R.fix.map(x=>`<div class="xrvI"><div class="grow"><b>${esc(aN(x.a))}</b><small>${esc(x.t)}</small></div></div>`).join(''),'done','xck-fix');
  if(R.look.length){const ac=[...new Set(R.look.map(x=>x.a))];
    h+=xRvSec('👀 محتاج تبص عليه',R.look.length,ac.map(a=>{const m=M(a),L=R.look.filter(x=>x.a===a);
      return `<div class="xlnc" style="cursor:default"><div class="xlnr"><span class="xpmn">${m?xMIc(m):''}<b>${esc(aN(a))}</b></span></div>${L.map(x=>{const t=x.id&&S.txs.find(y=>y.id===x.id);
        if(x.k==='neg')return `<div class="xrvI"><small class="xwhy">⚠️ الرصيد نزل تحت الصفر يوم ${xDW(x.d)}</small><small>يعني فيه فلوس دخلت الحساب ده قبل اليوم ده ومتسجلتش، أو رصيد البداية أقل من الحقيقي. اعمل مطابقة بالرصيد الحقيقي، أو افتح كشف الحساب وشوف الحركات اللي قبل اليوم ده.</small><div class="xnb"><button class="mini" onclick="closeSheet();xRecon('${a}')">⚖️ مطابقة</button><button class="mini" onclick="xAcctRep('${a}')">📄 كشف الحساب</button></div></div>`;
        if(!t)return '';
        return `<div class="xrvI"><div class="grow">${xRvTxT(t)}<small class="xwhy">${x.k==='dup'?'متسجلة مرتين بنفس اليوم والمبلغ. لو مكررة غلط افتحها واحذفها':'تاريخها بعد النهارده'}</small></div><div class="xnb"><button class="mini" onclick="editTx('${t.id}')">📂 افتح</button></div></div>`}).join('')}</div>`}).join(''),'late','xck-look')}
  if(add.length)h+=`<div class="xckG"><b>إزاي تعرف المصاريف صح ولا لأ؟</b><br>1️⃣ افتح كشف البنك.<br>2️⃣ دوّر على كل تحويل بنفس اليوم.<br>3️⃣ لو تحته سطر مصاريف ← سيبها.<br>4️⃣ لو مفيش، أو المبلغ فيه المصاريف أصلًا ← ✋ شيلها.<br>5️⃣ في الآخر اعمل ⚖️ مطابقة مع رصيد البنك.</div>`;
  if(XCHKSNAP)h+=`<button class="btn ghost danger" onclick="xCheckUndo()">↩️ رجّع كل اللي الـ Check عمله</button>`;
  sheet(h+'</div>');
};
/* ========== 2.21.90 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
.btn.xckb,.btn.ghost.xckb{background:linear-gradient(135deg,#22c55e,#15803d)!important;color:#fff!important;border:0!important;box-shadow:0 8px 20px rgba(22,163,74,.3)!important}
`;document.head.appendChild(s)})();

/* ---------- العمليات اللي قبل تاريخ رصيد البداية محسوبة خلاص ---------- */
function xBeforeOpen(t){const m=M(t.method);return !!(m&&m.openAt&&t.date<=m.openAt)}
xIpNeed=function(t){return !!t&&!t.pend&&!t.xpre&&!t.feeOf&&!t.payFeeOf&&!t.nofee&&t.type!=='inc'&&t.via==='instapay'&&!xIsBillTx(t)&&!xFeeTx(t.id)&&!xBeforeOpen(t)};
try{const _rvO=xRvItems;xRvItems=function(){return _rvO.apply(this,arguments).filter(x=>!(x.sec==='nofee'&&xBeforeOpen(x.t)))}}catch(e){}
/* تصليح مرة واحدة: شيل المصاريف اللي اتضافت تاني على عمليات قبل رصيد البداية */
if(!S.settings.xopfix1){try{
  const bad=S.txs.filter(f=>{if(!f.feeOf||!(f.chk||f.rv))return false;const p=S.txs.find(x=>x.id===f.feeOf);return p&&xBeforeOpen(p)&&!isClosed(f.date)});
  const sum=r2(bad.reduce((a,f)=>a+f.amount,0));
  if(bad.length){bad.forEach(f=>{const p=S.txs.find(x=>x.id===f.feeOf);if(p)p.nofee=1});const ids=new Set(bad.map(f=>f.id));S.txs=S.txs.filter(t=>!ids.has(t.id))}
  S.settings.xopfix1=1;save();
  if(bad.length)setTimeout(()=>say('اتصلح ✓',`شلت ${bad.length} مصاريف إنستاباي بإجمالي ${fmt(sum)}.\nكانت على تحويلات قبل تاريخ رصيد البداية، يعني كانت محسوبة أصلًا جوه رصيد البداية واتخصمت مرتين.`,'✅'),1500);
}catch(e){}}

/* ---------- 🏦 قايمة الحسابات مقفولة كل مرة ---------- */
try{const _goX=go;go=function(v){if(v==='pmv'&&view!=='pmv'){XPMO=false;XPMQ=''}return _goX.apply(this,arguments)}}catch(e){}

/* ---------- 👀 الحسابات اللي محتاج تبص عليها ---------- */
function xNeedList(){
  const td=today();
  const rows=S.methods.filter(m=>m.active!==false).map(m=>{let it=[],neg=null;try{it=xRvItems(m.id).filter(x=>x.sec!=='info')}catch(e){}
    if(!xIsCr(m.id)){try{const g=xLedger(m.id,'1900-01-01',td,S.txs,S.cash);neg=g.ev.find(e=>e.r<0)}catch(e){}}return{m,it,neg}}).filter(x=>x.it.length||x.neg);
  sheet(`<h2>👀 الحسابات اللي محتاج تبص عليها</h2>${rows.length?rows.map(x=>`<div class="xlnc" onclick="xAcctReviewGo('${x.m.id}')">
  <div class="xlnr"><span class="xpmn">${xMIc(x.m)}<b>${esc(x.m.name)}</b></span><span class="badge late">${x.it.length+(x.neg?1:0)}</span></div>
  ${x.neg?`<div class="xckh">⚠️ الرصيد نزل تحت الصفر يوم ${xDW(x.neg.d)}. يعني فيه فلوس دخلت قبل اليوم ده ومتسجلتش، أو رصيد البداية ناقص.</div>`:''}
  ${x.it.length?`<div class="xckh">🔎 ${x.it.length} عملية فيها مشكلة</div>`:''}
  <div class="xlna"><button class="btn" onclick="event.stopPropagation();xAcctReviewGo('${x.m.id}')">🔍 افتح المراجعة</button>${x.neg?`<button class="btn ghost" onclick="event.stopPropagation();closeSheet();xRecon('${x.m.id}')">⚖️ مطابقة</button>`:''}</div></div>`).join(''):'<div class="xrvok">✅ كل الحسابات مظبوطة</div>'}`);
}
document.addEventListener('click',e=>{try{
  const b=e.target.closest&&e.target.closest('#sheet .xlns>div');if(!b)return;
  const s=b.querySelector('small');if(!s||!/محتاج تبص/.test(s.textContent))return;
  e.stopPropagation();e.preventDefault();xNeedList();
}catch(err){}},true);
XFC.check=['✅','Check','xRvAll()','#22c55e,#166534',()=>0,''];

try{render()}catch(e){}
/* ========== 2.21.91 ========== */
/* الألوان: كل مستوى بشكل مختلف */
(()=>{const s=document.createElement('style');s.textContent=`
body #view details.grp>summary{background:var(--card)!important;border:1px solid rgba(148,163,184,.25)!important;border-inline-start:6px solid var(--p)!important;color:var(--tx)!important;box-shadow:0 2px 8px rgba(0,0,0,.12)!important}
body #view details.grp[open]>summary{background:var(--p)!important;border-color:var(--p)!important;color:#fff!important}
body #view details.grp[open]>summary .gs,body #view details.grp[open]>summary .gs *{color:#fff!important}
body #view details.grp[open]>summary .badge{background:#fff!important;color:var(--p)!important}
body #view details.grp[open]>summary::after{color:#fff;opacity:.9}
body #view details.grp .ckx,body #view details.grp .list>*,body #view .list>.row,body #view .list>details{background:var(--card)!important;border:1px solid rgba(148,163,184,.22)!important;box-shadow:none!important}
body #view details.grp .ckx:has(>details[open]),body #view details.grp .list>details[open],body #view .list>details[open]{border:2px solid #3b82f6!important;box-shadow:0 0 0 3px rgba(59,130,246,.18)!important;background:var(--card)!important}
body #view details.xr:not(.xgr)>.xb{background:rgba(148,163,184,.07)!important;border:1px solid rgba(148,163,184,.2)!important}
body #view details.xr:not(.xgr)>.xb>.kv{background:rgba(148,163,184,.09)!important;border-color:rgba(148,163,184,.2)!important}
body #view details.xr:not(.xgr)>.xb>.kv.xbig>b{color:var(--tx)!important}
`;document.head.appendChild(s)})();

/* لما تقفل قسم، اللي جواه يتقفل */
document.addEventListener('toggle',e=>{try{
  const d=e.target;if(!d||d.tagName!=='DETAILS'||d.open||!d.classList.contains('grp')||!d.closest('#view'))return;
  d.querySelectorAll('details[open]').forEach(x=>{x.open=false});
}catch(err){}},true);

/* أي دوسة على حاجة تانية، تقفل المعاملة المفتوحة */
document.addEventListener('click',e=>{try{
  const t=e.target;if(!t||!t.closest||!t.closest('#view,nav,header'))return;
  document.querySelectorAll('#view details.xr[open]').forEach(o=>{if(!o.contains(t))o.open=false});
}catch(err){}},true);
/* ========== 2.21.92 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
body #view details.grp .ckx:has(>details[open]),body #view details.grp .list>details[open],body #view .list>details[open]{box-shadow:none!important}
`;document.head.appendChild(s)})();

/* سطر مصاريف إنستاباي دايمًا في أي دفع أو تحويل بإنستاباي */
try{const _tbS=txBody;txBody=function(t){let h=_tbS.apply(this,arguments);try{
  if(!t||t.feeOf||t.payFeeOf||t.type==='inc'||t.via!=='instapay'||t.pend||xFeeTx(t.id)||/مصاريف إنستاباي/.test(h))return h;
  const bo=xBeforeOpen(t),why=bo?'محسوبة في رصيد البداية':xIsBillTx(t)?'فاتورة · من غير مصاريف':t.nofee?'مفيش · المصاريف جوه المبلغ':'مش متسجلة';
  const btn=bo?'':`<div class="etbar" style="margin:6px 0 0"><button class="mini" onclick="xTxFeeAdd('${t.id}')">➕ ضيف مصاريف</button></div>`;
  h=h.replace('<div class="etbar"',`<div class="kv"><span>💸 مصاريف إنستاباي</span><b>${why}</b></div>${btn}<div class="etbar"`);
}catch(e){}return h}}catch(e){}

/* الأقساط من برا: مصاريف إنستاباي جنب الحساب والطريقة */
try{const _irF=xInstRowsX;xInstRowsX=function(){const r=_irF.apply(this,arguments);try{
  document.querySelectorAll('#view details.grp[ontoggle*="\'ei\'"] .ckx>details.xr').forEach(d=>{
    if(d.dataset.xf)return;d.dataset.xf=1;
    const b=d.querySelector('.xb [onclick^="editTx("]'),m=b&&b.getAttribute('onclick').match(/editTx\('([^']+)'\)/);if(!m)return;
    const f=xFeeTx(m[1]);if(!f)return;
    const sm=d.querySelector('summary .grow>small');if(!sm)return;
    const chip=`<span class="xc2 xcc" style="--cc:#7c3aed">💸 مصاريف ${num(f.amount)}</span>`;
    if(sm.classList.contains('xcs'))sm.insertAdjacentHTML('beforeend',chip);else sm.insertAdjacentHTML('beforeend',' · 💸 مصاريف '+num(f.amount));
  });
}catch(e){}return r}}catch(e){}

try{render()}catch(e){}
/* ========== 2.21.93 ========== */
(()=>{const s=document.createElement('style');s.textContent=`
body #view .rgrid{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:6px!important}
body #view .rbtn{padding:8px 2px!important;font-size:10.5px!important;line-height:1.25!important;gap:3px!important;border-radius:12px!important;min-height:64px!important;overflow-wrap:anywhere}
body #view .rbtn span{font-size:19px!important;margin:0!important}
body #view .rbtn .xrb{top:3px;left:3px;min-width:17px;height:17px;font-size:10px}
body #view>h3:first-child,body #view>.phead:first-child{margin-top:2px!important}
body.xhome #view{display:block!important}
body #view>.brand{margin-top:10px!important}
.brand small{display:block!important;font-size:10px!important;line-height:1.5!important;opacity:.8}
`;document.head.appendChild(s)})();

/* بوكس الشركة ينزل لآخر الشاشة من غير سكرول، في كل الشاشات */
xHomeFit=function(){try{
  const v=$('#view');if(!v)return;v.style.minHeight='';
  const b=v.querySelector(':scope>.brand');if(!b)return;b.style.removeProperty('margin-top');
  const sm=b.querySelector('small');if(sm&&!sm.dataset.x2){sm.dataset.x2=1;sm.innerHTML=sm.innerHTML.replace(/ · (?=[^·]*$)/,'<br>')}
  const z=parseFloat(getComputedStyle(document.querySelector('main')).zoom)||1;
  const r=v.getBoundingClientRect(),gap=innerHeight-(r.top+window.scrollY)-r.height;
  if(gap>1)b.style.setProperty('margin-top',(parseFloat(getComputedStyle(b).marginTop)+gap/z)+'px','important');
}catch(e){}};
try{const _rnFt=render;render=function(){const r=_rnFt.apply(this,arguments);setTimeout(xHomeFit,300);return r}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.94 ========== */
/* رصيد البداية ثابت: أي تغيير في عملية قبل تاريخه بيظبط رصيد البداية، والرصيد مبيتغيرش */
function xAnchorFix(){
  if(!XBSN)return;const cur=xBsnap(),prev=XBSN,ids=new Set([...Object.keys(prev),...Object.keys(cur)]);
  S.methods.forEach(m=>{if(!m.openAt)return;const a=m.id,oa=m.openAt;let d=0;
    ids.forEach(k=>{if(k.startsWith('o:'))return;const p=prev[k],c=cur[k];
      const ep=p&&p[5]&&p[5]<oa?xEff(p,a):0,ec=c&&c[5]&&c[5]<oa?xEff(c,a):0;
      if(Math.abs(ec-ep)>.0001)d+=ec-ep});
    if(Math.abs(d)>.0001)m.open=r2((+m.open||0)-d)});
}
try{const _svA=save;save=function(){try{xAnchorFix()}catch(e){}return _svA.apply(this,arguments)}}catch(e){}
/* أي استرجاع للبيانات يبدأ حساب جديد من غير تظبيط */
try{const _xuA=xUndo;xUndo=async function(){const r=await _xuA.apply(this,arguments);try{XBSN=xBsnap()}catch(e){}return r}}catch(e){}
try{const _cuA=xCheckUndo;xCheckUndo=async function(){const s=XBSN;XBSN=null;const r=await _cuA.apply(this,arguments);if(!XBSN)XBSN=s&&S?xBsnap():null;return r}}catch(e){}
try{const _abA=applyBackup;applyBackup=async function(){XBSN=null;const r=await _abA.apply(this,arguments);try{XBSN=xBsnap()}catch(e){}return r}}catch(e){}

/* شيل الكلام اللي ملوش لازمة: كل تحويل إنستاباي يتعامل عادي حتى لو قديم */
xBeforeOpen=function(){return false};

/* رجّع مصاريف إنستاباي للتحويلات القديمة بالمبلغ، من غير ما الرصيد يتغير */
if(!S.settings.xanchor1){try{
  let n=0;
  S.txs.slice().forEach(t=>{
    const m=M(t.method);if(!m||!m.openAt||t.date>=m.openAt)return;
    if(t.pend||t.xpre||t.feeOf||t.payFeeOf||t.type==='inc'||t.via!=='instapay'||xIsBillTx(t)||xFeeTx(t.id)||isClosed(t.date))return;
    delete t.nofee;xAddIpFee(t,xFeeCalc(t.amount));n++;
  });
  S.settings.xanchor1=1;save();
  if(n)setTimeout(()=>{render();toast('💸 رجعت مصاريف إنستاباي لـ '+n+' تحويل · الرصيد زي ما هو')},1200);
}catch(e){}}

try{render()}catch(e){}
/* ========== 2.21.95 ========== */
/* بعد "عرض كل العمليات" يرجعك للعملية اللي كنت فاتحها */
try{const _fcX=xFocusClear;xFocusClear=function(){
  const it=document.querySelector('#view.xfocus details.grp.xon .xon');
  const r=_fcX.apply(this,arguments);
  if(it&&it.isConnected)requestAnimationFrame(()=>requestAnimationFrame(()=>{try{if(it.isConnected)it.scrollIntoView({block:'center',behavior:'auto'})}catch(e){}}));
  return r}}catch(e){}
/* ========== 2.21.97 ========== */
/* 🔍 لاقي سبب الفرق مع البنك وصلّحه */
var XGAP=null;
function xEffTx(o,a){const v=+o.amount||0;if(o.type==='tr')return r2((o.to===a?v:0)-(o.method===a?v:0));if(o.method!==a)return 0;return o.type==='inc'?v:o.type==='exp'?-v:0}
async function xGapFind(id){
  const m=M(id);if(!m)return;let bank=$('#rc-v')?xReconVal(id):null;
  if(bank==null){const v=await askIn('🔍 لاقي سبب الفرق','اكتب الرصيد اللي في أبلكيشن البنك دلوقتي','',true,'دوّر');if(v==null)return;bank=parseNum(v);if(isNaN(bank))return toast('اكتب الرصيد');if(xIsCr(id))bank=-Math.abs(bank)}
  const cur=xBal(id),gap=r2(cur-bank),oa=m.openAt||'';
  if(Math.abs(gap)<.01)return say('✅ مظبوط','رصيد البرنامج مطابق للبنك بالظبط','✅');
  const cand=[];
  S.txs.forEach(t=>{if(t.method!==id||t.pend||t.xpre||t.feeOf||t.payFeeOf||t.type==='inc'||t.via!=='instapay'||xFeeTx(t.id)||(oa&&t.date<oa))return;
    const a=xFeeCalc(t.amount);if(a>0)cand.push({e:-a,t:'💸 مصاريف إنستاباي ناقصة ('+num(a)+') · '+xTxLbl(t),f:()=>{delete t.nofee;xAddIpFee(t,a)}})});
  xTrGet().forEach(e=>{const o=e.o;if(e.k!=='txs'||!o||o.pend||o.xpre||(oa&&o.date<oa))return;const ef=xEffTx(o,id);if(Math.abs(ef)<.001)return;
    cand.push({e:ef,t:'♻️ اتحذفت وترجع ('+(ef>0?'+':'')+num(ef)+') · '+e.l,f:()=>{xTrPut(e);xTrSet(xTrGet().filter(x=>!(x.at===e.at&&x.o&&x.o.id===o.id)))}})});
  const C=cand.slice(0,18),target=-gap;let best=null;
  for(let mk=1;mk<(1<<C.length);mk++){let s=0,n=0;for(let i=0;i<C.length;i++)if(mk&(1<<i)){s+=C[i].e;n++}if(Math.abs(s-target)<.011&&(!best||n<best.n))best={mk,n}}
  const pick=best?C.filter((x,i)=>best.mk&(1<<i)):null;XGAP={id,gap,pick};
  const dir=gap>0?'أكتر':'أقل';
  if(pick){
    sheet(`<h2>🔍 لقيت سبب الفرق</h2><div class="xck"><div class="xckS">رصيد ${esc(m.name)} في البرنامج ${dir} من البنك بـ <b>${fmt(Math.abs(gap))}</b>، والسبب:</div>
    <div class="list">${pick.map(x=>`<div class="row" style="cursor:default"><div class="grow"><small style="font-size:12.5px">${esc(x.t)}</small></div></div>`).join('')}</div>
    <button class="btn xckb" onclick="xGapFix()">✅ صلّحه</button></div>`);
  }else{
    sheet(`<h2>🔍 سبب الفرق</h2><div class="xck"><div class="xckS">رصيد ${esc(m.name)} في البرنامج ${dir} من البنك بـ <b>${fmt(Math.abs(gap))}</b>.<br>دورت في كل عمليات الحساب ومالقيتش حاجة جوه البرنامج تعمل الفرق ده.</div>
    <div class="xckG"><b>يبقى البنك ${gap>0?'خصم':'زوّد'} حاجة مش متسجلة عندك</b>، غالبًا ${gap>0?'رسوم رسايل أو رسوم حساب أو كارت':'فوايد أو استرداد'}.${oa?' هتلاقيها في كشف البنك من '+dmy(oa)+'.':''}</div>
    <button class="btn xckb" onclick="xGapRec()">✅ سجّلها ${gap>0?'مصاريف بنك':'تحصيل من البنك'} (${num(Math.abs(gap))})</button></div>`);
  }
}
function xGapFix(){const g=XGAP;if(!g||!g.pick)return;g.pick.forEach(x=>{try{x.f()}catch(e){}});XGAP=null;save();closeSheet();render();say('✅ اتصلح','الرصيد بقى مطابق للبنك','✅')}
function xGapRec(){const g=XGAP;if(!g)return;const d=today();if(isClosed(d))return toast('الشهر الحالي مقفول');
  const out=g.gap>0,c=ensureCat(out?(xIsCr(g.id)?'مصاريف الكريديت':'مصاريف البنك'):'إضافات من البنك',out?'exp':'inc');c.active=true;
  S.txs.push({id:uid(),type:out?'exp':'inc',amount:Math.abs(g.gap),cat:c.id,method:g.id,via:'bankop',date:d,note:'🏦 لقيتها المطابقة مع البنك',files:[],created:Date.now(),adj:true});
  XGAP=null;save();closeSheet();render();say('✅ اتسجلت','الرصيد بقى مطابق للبنك','✅')}
try{const _rbG=xReconBase;xReconBase=function(id){const r=_rbG.apply(this,arguments);try{
  const d=$('#rc-d');if(d&&!document.querySelector('#sheet .xgapb'))d.insertAdjacentHTML('afterend',`<button class="btn xckb xgapb" onclick="xGapFind('${id}')">🔍 لاقي سبب الفرق وصلّحه</button>`);
}catch(e){}return r}}catch(e){}
/* ========== 2.21.98 ========== */
/* لاقي سبب الفرق: بيدوّر كمان في السحب الكاش وتحويلات إنستاباي القديمة */
var XNOANCH=false;
try{const _afN=xAnchorFix;xAnchorFix=function(){if(XNOANCH)return;return _afN.apply(this,arguments)}}catch(e){}
function xCashConv(c,a){
  const ca=xCashAcct();if(!ca||!S.cash.includes(c))return;
  const mm=(c.note||'').match(/من\s+([^\d·]+)/),who=mm?mm[1].trim().slice(0,30):'صديق';
  const t={id:uid(),type:'tr',amount:c.amount,method:c.method,to:ca,cat:'',via:'instapay',date:c.date,note:'🙋 كاش من '+who+(c.note?' · '+c.note:''),files:[],created:c.created||Date.now(),xwho:who};
  S.cash=S.cash.filter(x=>x!==c);S.txs.push(t);if(a>0)xAddIpFee(t,a);
}
xGapFind=async function(id){
  const m=M(id);if(!m)return;let bank=$('#rc-v')?xReconVal(id):null;
  if(bank==null){const v=await askIn('🔍 لاقي سبب الفرق','اكتب الرصيد اللي في أبلكيشن البنك دلوقتي','',true,'دوّر');if(v==null)return;bank=parseNum(v);if(isNaN(bank))return toast('اكتب الرصيد');if(xIsCr(id))bank=-Math.abs(bank)}
  const cur=xBal(id),gap=r2(cur-bank),oa=m.openAt||'';
  if(Math.abs(gap)<.01)return say('✅ مظبوط','رصيد البرنامج مطابق للبنك بالظبط','✅');
  const cand=[],ipOk=t=>t.method===id&&!t.pend&&!t.xpre&&!t.feeOf&&!t.payFeeOf&&t.type!=='inc'&&t.via==='instapay'&&!xFeeTx(t.id)&&!isClosed(t.date);
  S.cash.forEach(c=>{if(c.method!==id||isClosed(c.date))return;const a=xFeeCalc(c.amount);if(a>0)cand.push({e:-a,na:1,t:`🙋 سحب الكاش ${num(c.amount)} يوم ${dmy(c.date)} كان تحويل إنستاباي لشخص · مصاريفه ${num(a)}`,f:()=>xCashConv(c,a)})});
  S.txs.forEach(t=>{if(!ipOk(t))return;const a=xFeeCalc(t.amount);if(a>0)cand.push({e:-a,na:oa&&t.date<oa?1:0,t:`💸 مصاريف إنستاباي ناقصة (${num(a)}) · ${xTxLbl(t)}`,f:()=>{delete t.nofee;xAddIpFee(t,a)}})});
  xTrGet().forEach(e=>{const o=e.o;if(e.k!=='txs'||!o||o.pend||o.xpre||(oa&&o.date<oa))return;const ef=xEffTx(o,id);if(Math.abs(ef)<.001)return;
    cand.push({e:ef,t:`♻️ اتحذفت وترجع (${ef>0?'+':''}${num(ef)}) · ${e.l}`,f:()=>{xTrPut(e);xTrSet(xTrGet().filter(x=>!(x.at===e.at&&x.o&&x.o.id===o.id)))}})});
  const C=cand.slice(0,18),target=-gap;let best=null;
  for(let mk=1;mk<(1<<C.length);mk++){let s=0,n=0;for(let i=0;i<C.length;i++)if(mk&(1<<i)){s+=C[i].e;n++}if(Math.abs(s-target)<.011&&(!best||n<best.n))best={mk,n}}
  const pick=best?C.filter((x,i)=>best.mk&(1<<i)):null;XGAP={id,gap,pick};
  const dir=gap>0?'أكتر':'أقل';
  if(pick)sheet(`<h2>🔍 لقيت سبب الفرق</h2><div class="xck"><div class="xckS">رصيد ${esc(m.name)} في البرنامج ${dir} من البنك بـ <b>${fmt(Math.abs(gap))}</b>، والسبب:</div>
    <div class="list">${pick.map(x=>`<div class="row" style="cursor:default"><div class="grow"><small style="font-size:12.5px">${esc(x.t)}</small></div></div>`).join('')}</div>
    <button class="btn xckb" onclick="xGapFix()">✅ صلّحه</button></div>`);
  else sheet(`<h2>🔍 سبب الفرق</h2><div class="xck"><div class="xckS">رصيد ${esc(m.name)} في البرنامج ${dir} من البنك بـ <b>${fmt(Math.abs(gap))}</b>.<br>دورت في كل عمليات الحساب والسحب الكاش ومالقيتش حاجة جوه البرنامج تعمل الفرق ده بالظبط.</div>
    <div class="xckG"><b>يبقى البنك ${gap>0?'خصم':'زوّد'} حاجة مش متسجلة عندك</b>، غالبًا ${gap>0?'رسوم رسايل أو رسوم حساب أو كارت':'فوايد أو استرداد'}.${oa?' هتلاقيها في كشف البنك من '+dmy(oa)+'.':''}</div>
    <button class="btn xckb" onclick="xGapRec()">✅ سجّلها ${gap>0?'مصاريف بنك':'تحصيل من البنك'} (${num(Math.abs(gap))})</button></div>`);
};
xGapFix=function(){const g=XGAP;if(!g||!g.pick)return;g.pick.forEach(x=>{try{x.f()}catch(e){}});
  XNOANCH=g.pick.some(x=>x.na);try{save()}finally{XNOANCH=false}
  XGAP=null;closeSheet();render();say('✅ اتصلح','الرصيد بقى مطابق للبنك','✅')};
/* ========== 2.21.99 ========== */
/* لو لاقي الفرق مالقاش: تختار السحب الكاش اللي كان تحويل لشخص وتكتب مصاريفه */
try{const _gfC=xGapFind;xGapFind=async function(id){const r=await _gfC.apply(this,arguments);try{
  const g=XGAP;if(!g||g.pick||g.id!==id||g.gap<=0)return r;
  const L=S.cash.filter(c=>c.method===id&&!isClosed(c.date)).sort((a,b)=>b.date.localeCompare(a.date));if(!L.length)return r;
  const b=document.querySelector('#sheet .xck .btn.xckb');if(!b)return r;
  b.insertAdjacentHTML('beforebegin',`<div class="fl">🙋 لو فيه سحب كاش كان تحويل إنستاباي لشخص، علّم عليه واكتب مصاريفه زي ما هي في كشف البنك</div>
  <div class="list" id="xgc">${L.map(c=>`<div class="xckr"><input type="checkbox" data-c="${c.id}" onchange="xGcSum()" style="width:22px;height:22px;flex:0 0 22px;margin:0"><div class="grow"><b>سحب ${num(c.amount)} ج.م</b><small>${xDW(c.date)}${c.note?' · '+esc(c.note):''}</small></div><input data-f="${c.id}" inputmode="decimal" dir="ltr" value="${amtStr(xFeeCalc(c.amount))}" oninput="xGcSum()" style="width:70px;flex:0 0 70px;margin:0;text-align:center"></div>`).join('')}</div>
  <div id="xgc-s" class="xckS" style="margin-top:8px"></div>
  <button class="btn xckb" id="xgc-b" onclick="xGcApply()" disabled>✅ حوّلهم وسجّل المصاريف</button>
  <div class="fl" style="margin-top:14px">أو لو الفرق مش من السحب الكاش</div>`);
  xGcSum();
}catch(e){}return r}}catch(e){}
function xGcSel(){return [...document.querySelectorAll('#xgc input[data-c]:checked')].map(i=>({c:S.cash.find(x=>x.id===i.dataset.c),f:parseNum((document.querySelector(`#xgc input[data-f="${i.dataset.c}"]`)||{}).value)||0})).filter(x=>x.c)}
function xGcSum(){const g=XGAP,el=$('#xgc-s'),b=$('#xgc-b');if(!g||!el)return;const L=xGcSel(),s=r2(L.reduce((a,x)=>a+x.f,0)),rem=r2(g.gap-s);
  el.innerHTML=L.length?`المصاريف اللي علّمت عليها: <b>${fmt(s)}</b><br>الفرق مع البنك: <b>${fmt(g.gap)}</b><br>${Math.abs(rem)<.01?'✅ <b>مطابق بالظبط</b>':`فاضل: <b>${fmt(rem)}</b>`}`:'علّم على السحب اللي كان تحويل لشخص';
  if(b)b.disabled=!L.length}
function xGcApply(){
  const g=XGAP;if(!g)return;const L=xGcSel();if(!L.length)return toast('علّم على سحب واحد على الأقل');
  const s=r2(L.reduce((a,x)=>a+x.f,0));L.forEach(x=>xCashConv(x.c,x.f));
  XNOANCH=true;try{save()}finally{XNOANCH=false}render();
  const rem=r2(g.gap-s);
  if(Math.abs(rem)<.01){XGAP=null;closeSheet();return say('✅ اتصلح','السحب اتحول لتحويل من البنك للكاش + مصاريف إنستاباي، والرصيد بقى مطابق للبنك','✅')}
  XGAP={id:g.id,gap:rem,pick:null};
  sheet(`<h2>✅ اتحولوا</h2><div class="xck"><div class="xckS">السحب اتحول لتحويل من البنك للكاش + مصاريف إنستاباي ${fmt(s)}.<br>${rem>0?'البرنامج لسه أكتر من البنك بـ':'البرنامج بقى أقل من البنك بـ'} <b>${fmt(Math.abs(rem))}</b>.</div>
  <button class="btn xckb" onclick="xGapRec()">✅ سجّل الباقي ${rem>0?'مصاريف بنك':'تحصيل من البنك'} (${num(Math.abs(rem))})</button>
  <button class="btn ghost" onclick="closeSheet()">سيبه دلوقتي</button></div>`);
}
/* ========== 2.21.100 ========== */
/* 🏧 سحب وإيداع كاش: الكاش من شخص باين إنه تحويل + مصاريف إنستاباي */
XVW.xcw=()=>{
  const k=ym(cur.y,cur.m),ca=xCashAcct(),A=[],P=[],D=[],q=XCWQ.trim();let fees=0;
  const wrap=(arr,o)=>arr.push({d:o.d,c:o.c||0,a:o.a,h:`<div class="xcwr" data-q="${esc(qn(o.q+' '+o.a+' '+num(o.a)+' '+dmy(o.d)))}">${o.h}</div>`});
  S.cash.filter(c=>c.date.startsWith(k+'-')).forEach(c=>{const fr=M(c.method)?.name||'—';
    wrap(A,{d:c.date,c:c.created,a:c.amount,q:fr+' '+(c.note||''),h:xCard({ic:'🏧',title:'سحب من الماكينة · '+esc(fr),amt:num(c.amount),sub:xDW(c.date),sub2:esc((c.note||'').slice(0,40)),click:`cashForm('${c.id}')`})})});
  S.txs.filter(t=>t.type==='tr'&&!t.pend&&t.date.startsWith(k+'-')&&(t.xdep||t.xwho||t.to===ca||t.method===ca)).forEach(t=>{
    const fr=M(t.method)?.name||'—',to=M(t.to)?.name||'—',f=xFeeTx(t.id);
    if(t.xdep){wrap(D,{d:t.date,c:t.created,a:t.amount,q:fr+' '+to+' '+(t.xwho||'')+' '+(t.note||''),h:xCard({ic:'🏦',title:'إيداع'+(t.xwho?' من '+esc(t.xwho):''),amt:num(t.amount),sub:xDW(t.date),chip:xCh('','🔁 من '+esc(fr)+' إلى '+esc(to)),click:`editTx('${t.id}')`})});return}
    if(f)fees=r2(fees+f.amount);
    const chips=[xCh('','🔁 من '+esc(fr)+' لـ '+esc(to)),t.via?xCh('',esc(viaTxt(t.via))):'',f?xCh('late','💸 مصاريف إنستاباي '+num(f.amount)):''].join(' ');
    const note=(t.note||'').replace(/^🙋[^·]*·?\s*/,'').slice(0,40);
    wrap(t.xwho?P:A,{d:t.date,c:t.created,a:t.amount,q:fr+' '+to+' '+(t.xwho||'')+' '+(t.note||''),h:xCard({ic:t.xwho?'🙋':'🔁',title:t.xwho?'كاش من '+esc(t.xwho):'تحويل للكاش',amt:num(t.amount),sub:xDW(t.date),sub2:esc(note),chip:chips,click:`editTx('${t.id}')`})});
  });
  [A,P,D].forEach(l=>l.sort((a,b)=>b.d.localeCompare(a.d)||b.c-a.c));
  const sm=l=>r2(l.reduce((s,x)=>s+x.a,0));
  const sec=(key,t,l,cls,top)=>`<details class="grp" ${XCWO[key]||q?'open data-xso="1"':''} ontoggle="XCWO['${key}']=this.open"><summary><span>${t}</span><span class="badge soon">${l.length}</span><b class="gs ${cls}">${num(sm(l))}</b></summary>${top||''}${l.length?l.map(x=>x.h).join(''):'<p class="empty">لا توجد حركات</p>'}</details>`;
  setTimeout(xCwF,0);
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🏧 سحب وإيداع كاش</h3></div>`+monthBar(true)
    +`<div class="xlna" style="grid-template-columns:repeat(3,1fr)"><button class="btn" onclick="xCashSheet('m')">🏧 سحب</button><button class="btn" onclick="xCashSheet('p')">🙋 من شخص</button><button class="btn ghost" onclick="xCashSheet('d')">🏦 إيداع</button></div>`
    +kpis([['🏧 الماكينة',fmt(sm(A)),'warn'],['🙋 من أشخاص',fmt(sm(P)),'net'],['🏦 الإيداع',fmt(sm(D)),'inc']])
    +`<div class="gsr">${FIC}<input id="xcw-q" placeholder="الاسم أو الحساب أو المبلغ" value="${esc(XCWQ)}" oninput="XCWQ=this.value;xCwF()"></div>`
    +sec('m','🏧 سحب من الماكينة',A,'neg')
    +sec('p','🙋 كاش من شخص · تحويل إنستاباي',P,'neg',fees?`<p class="muted" style="margin:0 4px 8px;font-size:12px">💸 مصاريف إنستاباي على التحويلات دي: <b>${fmt(fees)}</b></p>`:'')
    +sec('i','🏦 الإيداع',D,'pos');
};
try{render()}catch(e){}
/* ========== 2.21.101 ========== */
/* كاش من شخص: لو الفرق كان متسجل "مصاريف بنك" من المطابقة، يتشال ويتحط مكانه مصاريف التحويل */
xCashToPerson=async function(id){
  const c=S.cash.find(x=>x.id===id);if(!c)return;const ca=xCashAcct(),bank=M(c.method);
  if(!ca)return toast('مفيش حساب كاش');if(!bank)return toast('الحساب مش موجود');if(isClosed(c.date))return toast('الشهر ده مقفول');
  const g=(c.note||'').match(/من\s+([^\d·]+)/);
  const w=await askIn('أخدت الكاش من مين؟','',g?g[1].trim().slice(0,30):'',false,'التالي');if(w==null)return;
  const fv=await askIn('💸 مصاريف إنستاباي','اكتب الرقم اللي في كشف البنك على تحويل '+fmt(c.amount),amtStr(xFeeCalc(c.amount)),true,'التالي');if(fv==null)return;
  const fee=parseNum(fv)||0,who=(w||'').trim()||'صديق';
  const adj=S.txs.filter(t=>t.adj&&t.type==='exp'&&t.method===c.method&&!isClosed(t.date)).sort((a,b)=>b.date.localeCompare(a.date));
  const avail=r2(adj.reduce((s,t)=>s+t.amount,0));let take=0;
  if(fee>0&&avail>0){const u=Math.min(fee,avail);
    const ok=await ask('المصاريف دي متسجلة قبل كده؟',`فيه ${fmt(avail)} متسجلة "مصاريف بنك" من المطابقة.\nأشيل منها ${fmt(u)} وأحط مصاريف التحويل ده بدالها؟\nالرصيد هيفضل زي ما هو.`,{icon:'💸',ok:'أيوه',cancel:'لأ'});
    if(ok===null)return;if(ok)take=u}
  const t={id:uid(),type:'tr',amount:c.amount,method:c.method,to:ca,cat:'',via:'instapay',date:c.date,note:'🙋 كاش من '+who+(c.note?' · '+c.note:''),files:[],created:c.created||Date.now(),xwho:who};
  S.cash=S.cash.filter(x=>x!==c);S.txs.push(t);if(fee>0)xAddIpFee(t,fee);
  if(take>0){let rest=take;adj.forEach(a=>{if(rest<=.001)return;const u=Math.min(a.amount,rest);a.amount=r2(a.amount-u);rest=r2(rest-u);if(a.amount<=.001)S.txs=S.txs.filter(x=>x!==a)})}
  XNOANCH=take>0;try{save()}finally{XNOANCH=false}
  closeSheet();render();toast('🔁 بقت تحويل من '+bank.name+' للكاش'+(fee>0?' · مصاريف '+fmt(fee):''));
};
try{const _cfQ=cashForm;cashForm=function(id){const r=_cfQ.apply(this,arguments);try{
  if(!id||!S.cash.find(x=>x.id===id))return r;const b=document.querySelector('#sheet .sz .btn[onclick^="cashSave("]');
  if(b&&!document.querySelector('#sheet .xc2p'))b.insertAdjacentHTML('afterend',`<button class="btn ghost xc2p" onclick="xCashToPerson('${id}')">🙋 دي كانت كاش من شخص وحولتله إنستاباي</button>`);
}catch(e){}return r}}catch(e){}

/* شاشة السحب والإيداع: الأقسام مقفولة كل مرة تدخلها */
try{const _goW=go;go=function(v){if(v==='xcw'&&view!=='xcw'){XCWO={};XCWQ=''}return _goW.apply(this,arguments)}}catch(e){}
try{render()}catch(e){}
/* ========== 2.21.102 ========== */
/* ---------- 💰 قراءة المبلغ من إيصال إنستاباي في الشير ---------- */
var XSHAMT=null,XLNSH=null;
function xIpParse(text){
  const L=splitLines(text||'');let amt=0,name='';
  for(const l of L){if(/(EGP|جنيه|ج\.?\s?م|\bLE\b)/i.test(l)&&!/(fee|fees|رسوم|مصاريف|balance|رصيد)/i.test(l)){const n=xAmtNums(l);if(n.length){amt=Math.max(...n);break}}}
  if(!amt)for(let i=0;i<L.length;i++){if(/(amount|المبلغ|القيمة)/i.test(L[i])&&!/(fee|رسوم)/i.test(L[i])){let n=xAmtNums(L[i]);if(!n.length&&L[i+1])n=xAmtNums(L[i+1]);if(n.length){amt=n[0];break}}}
  if(!amt){const d=L.flatMap(l=>/(fee|رسوم|مصاريف|ref|رقم|balance|رصيد)/i.test(l)?[]:(biClean(l).match(/\d[\d,]*\.\d{2}(?!\d)/g)||[]).map(x=>parseFloat(x.replace(/,/g,''))));if(d.length)amt=Math.max(...d)}
  for(let i=0;i<L.length;i++){const m=L[i].match(/^(?:to|sent to|receiver|beneficiary|إلى|الى|المستلم|المستفيد|المرسل إليه)\s*[:：]?\s*(.*)$/i);
    if(m){let n=(m[1]||'').trim();if(!n&&L[i+1])n=L[i+1].trim();n=n.replace(/[\d@*].*$/,'').trim().slice(0,40);if(n.replace(/\s/g,'').length>=2){name=n;break}}}
  return{amt:r2(amt||0),name};
}
async function xShOcr(ids){
  const my={ids:ids||[],amt:0,name:'',done:false,used:false};XSHAMT=my;
  try{const id=my.ids.find(i=>{const t=(S.fmeta[i]||{}).type||'';return !t||t.startsWith('image/')||t==='application/octet-stream'});if(!id)return;
    const r=await FDB.get(id);if(!r||!r.blob)return;const c=await fileToCanvas(r.blob);let txt='';
    for(const[,fn,has]of CLOUD){if(!has())continue;try{txt=await fn(c);if(txt&&txt.trim())break}catch(e){}}
    if(!txt||!txt.trim()){try{txt=await ocr('ara+eng',prepCanvas(cloneCanvas(c)),{tessedit_pageseg_mode:'6',preserve_interword_spaces:'1'})}catch(e){}}
    const p=xIpParse(txt);my.amt=p.amt;my.name=p.name;
  }catch(e){}finally{my.done=true;if(XSHAMT===my)xShFill()}
}
function xShFill(){
  const s=XSHAMT;if(!s||!s.done||!s.amt||s.used)return;const key=s.ids[0];
  if($('#ln-a')&&XLNSH&&XLNSH.includes(key)){const a=$('#ln-a');if(!parseNum(a.value)){a.value=amtStr(s.amt);a.dispatchEvent(new Event('input',{bubbles:true}))}
    const w=$('#ln-w');if(w&&!w.value&&s.name){w.value=s.name;xLnWho()}s.used=true;return toast('💰 قريت المبلغ من الإيصال: '+fmt(s.amt))}
  if(F&&!F.id&&(F.files||[]).includes(key)&&$('#f-amt')&&!parseNum(F.amount)){
    F.amount=amtStr(s.amt);const a=$('#f-amt');a.value=F.amount;a.dispatchEvent(new Event('input',{bubbles:true}));s.used=true;
    if(s.name&&!F.cat){const c=S.cats.find(x=>x.kind===F.type&&normAr(x.name)===normAr(s.name));if(c){F.cat=c.id;F.cq=c.name;SHKEEP=1;txForm()}}
    toast('💰 قريت المبلغ من الإيصال: '+fmt(s.amt));
  }
}
try{const _saO=xShareAsk;xShareAsk=async function(ids){try{xShOcr(ids)}catch(e){}return _saO.apply(this,arguments)}}catch(e){}
try{const _npS=xNewPick;xNewPick=function(type,k){
  const sh=XSHPEND;if(k==='loan')F=null;
  const r=_npS.apply(this,arguments);
  try{if(k==='loan'&&sh){XLNSH=sh;const v=$('#ln-v');if(v){v.value='instapay';v.dispatchEvent(new Event('change',{bubbles:true}))}}xShFill()}catch(e){}
  return r}}catch(e){}
try{const _stQ=xShTo;xShTo=function(){const r=_stQ.apply(this,arguments);try{xShFill()}catch(e){}return r}}catch(e){}
try{const _snQ=xShNewCat;xShNewCat=function(){const r=_snQ.apply(this,arguments);try{xShFill()}catch(e){}return r}}catch(e){}
try{const _csL=closeSheet;closeSheet=function(){XLNSH=null;return _csL.apply(this,arguments)}}catch(e){}

/* ---------- 🤝 شاشة السلفة ---------- */
function xLnPost(){
  const sz=$('#sheet .sz'),w=$('#ln-w');if(!sz||!w)return;
  const wl=w.closest('label');if(wl&&wl.firstChild&&wl.firstChild.nodeType===3)wl.firstChild.nodeValue='👤 الاسم';
  const dl=$('#ln-wl');if(dl){const names=[...new Set(S.cats.filter(c=>c.kind==='exp'&&c.active!==false&&!/^مصاريف/.test(c.name)).map(c=>c.name).concat(XLN().map(l=>l.who)))];dl.innerHTML=names.map(n=>`<option value="${esc(n)}">`).join('')}
  if(wl&&!$('#ln-wx'))wl.insertAdjacentHTML('afterend','<div id="ln-wx" class="xckh" style="margin:-2px 0 8px;line-height:2"></div>');
  w.addEventListener('input',xLnWho);
  sz.querySelectorAll('.fl').forEach(f=>{if(/هيرجعها/.test(f.textContent))f.textContent='طريقة السداد'});
  const o1=$('#ln-1'),l1=o1&&o1.closest('label');if(l1&&l1.firstChild&&l1.firstChild.nodeType===3)l1.firstChild.nodeValue='📅 موعد سداد السلفة';
  const m=$('#ln-m'),row=m&&m.closest('.two');
  if(row&&!$('#ln-v'))row.insertAdjacentHTML('afterend',`<label>الطريقة<select id="ln-v" onchange="xLnFee()">${viaOpts('')}</select></label><div id="ln-fee"></div>`);
  const a=$('#ln-a');if(a)a.addEventListener('input',()=>{const f=$('#ln-fe');if(f&&!f.dataset.man)f.value=amtStr(xFeeCalc(parseNum(a.value)))});
  xLnFee();xLnWho();
}
function xLnFee(){const v=($('#ln-v')||{}).value,b=$('#ln-fee');if(!b)return;if(v!=='instapay'){b.innerHTML='';return}if($('#ln-fe'))return;
  b.innerHTML=`<label>💸 مصاريف إنستاباي<input id="ln-fe" inputmode="decimal" dir="ltr" value="${amtStr(xFeeCalc(parseNum(($('#ln-a')||{}).value)))}" oninput="this.dataset.man=1"></label>`}
function xLnWho(){const w=$('#ln-w'),x=$('#ln-wx');if(!w||!x)return;const v=w.value.trim();if(!v){x.innerHTML='';return}
  const ex=S.cats.find(c=>c.kind==='exp'&&normAr(c.name)===normAr(v));
  if(ex){x.innerHTML='✅ موجود في البنود · السلفة هتتسجل على بند «'+esc(ex.name)+'»';return}
  const L=S.cats.filter(c=>c.kind==='exp'&&c.active!==false&&qn(c.name).includes(qn(v))).slice(0,4);
  x.innerHTML=(L.length?'يمكن تقصد: '+L.map(c=>`<button type="button" class="mini" onclick="$('#ln-w').value=this.textContent;xLnWho()">${esc(c.name)}</button>`).join(' ')+'<br>':'')
    +`⚠️ الاسم ده مش متكود في البنود <button type="button" class="mini" onclick="xLnCode()">➕ كوّده بند</button>`}
function xLnCode(){const v=(($('#ln-w')||{}).value||'').trim();if(!v)return toast('اكتب الاسم');const c=ensureCat(v,'exp');c.active=true;save();xLnWho();toast('✅ اتكوّد بند «'+v+'»')}
try{const _lnN=xLnNew;xLnNew=function(){const r=_lnN.apply(this,arguments);try{xLnPost()}catch(e){}return r}}catch(e){}
try{const _lsV=xLnSave;xLnSave=function(){
  const via=($('#ln-v')||{}).value||'',fee=via==='instapay'?(parseNum(($('#ln-fe')||{}).value)||0):0,w=(($('#ln-w')||{}).value||'').trim(),files=XLNSH?[...XLNSH]:[],n0=XLN().length;
  const r=_lsV.apply(this,arguments);
  try{if(XLN().length>n0){const l=XLN()[XLN().length-1];let t=l.tx&&S.txs.find(x=>x.id===l.tx);if(!t)t=xLnOutTx(l);
    t.via=via;l.via=via;if(files.length)t.files=(t.files||[]).concat(files);
    const c=S.cats.find(x=>x.kind==='exp'&&normAr(x.name)===normAr(w));if(c){t.cat=c.id;l.cat=c.id}
    if(fee>0)xAddIpFee(t,fee);save();render()}}catch(e){}
  return r}}catch(e){}
/* ========== 2.21.103 · 👤 حسابات الأشخاص ========== */
var XPPK=[['owe','🔴 عليه'],['paid','🟢 رجّع'],['gift','🎁 صرفت عليه']],XPPKN={owe:'🔴 عليه',paid:'🟢 رجّع',gift:'🎁 صرفت عليه'},XPPE=null,XPPV={per:'m',m:''};
function XPP(){S.settings.xpp=S.settings.xpp||[];return S.settings.xpp}
function xPpTd(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function xPpD(d){return (d||'').split('-').reverse().join('/')}
function xPpNm(t){try{return txName(t)}catch(e){return (C(t.cat)||{}).name||t.note||''}}
function xPpMatch(t,p,L){
  if(!t||t.del||t.pend||(t.date||'')>xPpTd())return null;
  if(t.pp)return t.pp===p.id?(t.ppk||(t.type==='inc'?'paid':'owe')):null;
  if(t.feeOf||t.payFeeOf||(t.ppx||[]).includes(p.id))return null;
  const nm=normAr(p.name);
  if(t.xlno){const l=L.find(l=>l.tx===t.id);if(l&&normAr(l.who||'')===nm)return 'owe'}
  if(t.xlnp){const l=L.find(l=>l.id===t.xlnp||l.id===t.xlno);if(l&&normAr(l.who||'')===nm)return 'paid'}
  const k=(p.cats||{})[t.cat];if(k&&(t.type==='exp'||t.type==='inc'))return t.type==='inc'?'paid':k;
  return null}
function xPpRows(p){const L=typeof XLN==='function'?XLN():[],o=[];S.txs.forEach(t=>{const k=xPpMatch(t,p,L);if(k)o.push({t,k})});return o.sort((a,b)=>(a.t.date||'').localeCompare(b.t.date||''))}
function xPpSum(R){const s={owe:0,paid:0,gift:0};R.forEach(r=>s[r.k]+=Math.abs(+r.t.amount||0));s.bal=r2(s.owe-s.paid);return s}
function xPpOfTx(t){const L=typeof XLN==='function'?XLN():[];for(const p of XPP()){const k=xPpMatch(t,p,L);if(k)return{p,k}}return null}
function xPpBal(b){return b>0?`<b style="color:#e8833a">عليه ${fmt(b)}</b>`:b<0?`<b style="color:#2bb673">ليه ${fmt(-b)}</b>`:'<b>خالص ✅</b>'}

/* ---------- القايمة ---------- */
function xPpList(){const P=XPP();let tot=0;
  const cards=P.map(p=>{const s=xPpSum(xPpRows(p));tot+=s.bal;
    return `<div class="card xppc" onclick="xPpOpen('${p.id}')"><div class="xpprw"><b>👤 ${esc(p.name)}</b>${xPpBal(s.bal)}</div><div class="xckh">رجّع ${fmt(s.paid)} · صرفت عليه ${fmt(s.gift)}</div></div>`}).join('');
  sheet(`<h3>👤 حسابات الأشخاص</h3>
    ${P.length?`<div class="card xpptot">ليك عند الكل: ${xPpBal(tot)}</div>`:`<div class="card xckh">ضيف شخص (أختك، مراتك...) وكل حاجة تخصه هتتجمع في كشف واحد: السلف، والأقساط اللي بتدفعها عنه، واللي بيرجّعه، واللي بتصرفه عليه.</div>`}
    ${cards}<button class="btn" onclick="xPpEdit()">➕ شخص جديد</button>`)}

/* ---------- الكشف ---------- */
function xPpOpen(id,per){const p=XPP().find(x=>x.id===id);if(!p)return xPpList();
  if(per)XPPV.per=per;if(!XPPV.m)XPPV.m=xPpTd().slice(0,7);
  const R=xPpRows(p),all=xPpSum(R);let from='',to='9999',lbl='الكل';
  if(XPPV.per==='m'){from=XPPV.m+'-01';to=XPPV.m+'-31';lbl=XPPV.m.split('-').reverse().join('/')}
  else if(XPPV.per==='y'){from=XPPV.m.slice(0,4)+'-01-01';to=XPPV.m.slice(0,4)+'-12-31';lbl=XPPV.m.slice(0,4)}
  const pre=xPpSum(R.filter(r=>(r.t.date||'')<from)),IN=R.filter(r=>(r.t.date||'')>=from&&(r.t.date||'')<=to),ps=xPpSum(IN);
  let run=pre.bal;
  const rows=IN.map(r=>{const a=Math.abs(+r.t.amount||0);if(r.k==='owe')run+=a;if(r.k==='paid')run-=a;
    const col=r.k==='owe'?'#e8833a':r.k==='paid'?'#2bb673':'#8a94a6';
    return `<details class="xppr"><summary><span class="xppd">${xPpD(r.t.date)}</span><span class="xppn">${esc(xPpNm(r.t))}<small>${esc((C(r.t.cat)||{}).name||'')} · ${XPPKN[r.k]}</small></span><span style="color:${col}"><b>${r.k==='paid'?'−':''}${fmt(a)}</b><small>${r.k==='gift'?'—':fmt(r2(run))}</small></span></summary>
      <div class="xppb">${XPPK.map(([v,l])=>`<button class="mini${r.k===v?' xppon':''}" onclick="xPpSet('${r.t.id}','${p.id}','${v}')">${l}</button>`).join('')}<button class="mini" onclick="xPpSet('${r.t.id}','${p.id}','x')">✕ شيلها</button></div></details>`}).join('');
  const sg=[['m','شهر'],['y','سنة'],['a','الكل']].map(([v,l])=>`<button class="mini${XPPV.per===v?' xppon':''}" onclick="xPpOpen('${p.id}','${v}')">${l}</button>`).join('');
  sheet(`<h3>👤 ${esc(p.name)}</h3>
    <div class="xppk"><div class="card">دلوقتي<br>${xPpBal(all.bal)}</div><div class="card">رجّع<br><b style="color:#2bb673">${fmt(all.paid)}</b></div><div class="card">صرفت عليه<br><b>${fmt(all.gift)}</b></div></div>
    <div class="xpprw">${sg}${XPPV.per!=='a'?`<span><button class="mini" onclick="xPpMv('${p.id}',-1)">→</button> <b>${lbl}</b> <button class="mini" onclick="xPpMv('${p.id}',1)">←</button></span>`:''}</div>
    <div class="xckh">في الفترة: 🔴 ${fmt(ps.owe)} · 🟢 ${fmt(ps.paid)} · 🎁 ${fmt(ps.gift)}</div>
    ${XPPV.per!=='a'?`<div class="xppr xpppre"><span>الرصيد قبل الفترة</span><b>${fmt(pre.bal)}</b></div>`:''}
    ${rows||'<div class="xckh" style="padding:12px 0">مفيش حركات في الفترة دي</div>'}
    <div class="xppr xpppre"><span>الرصيد في آخر الفترة</span><b>${fmt(r2(run))}</b></div>
    <div class="xppg"><button class="btn" onclick="xPpNew('${p.id}','exp','owe')">🔴 سجّل عليه</button><button class="btn" onclick="xPpNew('${p.id}','inc','paid')">🟢 رجّع</button>
    <button class="btn" onclick="xPpNew('${p.id}','exp','gift')">🎁 صرفت عليه</button><button class="btn" onclick="xPpLoan('${p.id}')">🤝 سلفة</button>
    <button class="btn" onclick="xPpPrint('${p.id}')">🖨️ طباعة</button><button class="btn" onclick="xPpShare('${p.id}')">📤 شير</button>
    <button class="btn" onclick="xPpEdit('${p.id}')">✏️ تعديل</button><button class="btn" onclick="xPpList()">👥 كل الأشخاص</button></div>`)}
function xPpMv(id,d){if(XPPV.per==='y'){XPPV.m=(+XPPV.m.slice(0,4)+d)+XPPV.m.slice(4)}else{let[y,m]=XPPV.m.split('-').map(Number);m+=d;if(m<1){m=12;y--}if(m>12){m=1;y++}XPPV.m=y+'-'+String(m).padStart(2,'0')}xPpOpen(id)}
function xPpSet(tid,pid,k){const t=S.txs.find(x=>x.id===tid);if(!t)return;
  if(k==='x'){if(t.pp===pid){delete t.pp;delete t.ppk}t.ppx=[...new Set((t.ppx||[]).concat(pid))]}else{t.pp=pid;t.ppk=k}
  save();xPpOpen(pid)}
function xPpNew(pid,type,k){try{closeSheet()}catch(e){}newTx(type);setTimeout(()=>{if(F&&!F.id){F.pp=pid;F.ppk=k;SHKEEP=1;txForm()}},50)}
function xPpLoan(pid){const p=XPP().find(x=>x.id===pid);try{closeSheet()}catch(e){}xLnNew();setTimeout(()=>{const w=$('#ln-w');if(w&&p){w.value=p.name;xLnWho()}},50)}
function xPpText(p){const R=xPpRows(p),s=xPpSum(R);
  return `كشف حساب: ${p.name}\n`+R.map(r=>`${xPpD(r.t.date)} · ${xPpNm(r.t)} · ${XPPKN[r.k]} ${fmt(Math.abs(+r.t.amount||0))}`).join('\n')
    +`\n————\nعليه: ${fmt(s.owe)} · رجّع: ${fmt(s.paid)}\nالباقي: ${fmt(s.bal)}`}
function xPpShare(pid){const p=XPP().find(x=>x.id===pid);if(!p)return;const tx=xPpText(p);
  if(navigator.share)navigator.share({title:'كشف '+p.name,text:tx}).catch(()=>{});else{navigator.clipboard&&navigator.clipboard.writeText(tx);toast('📋 اتنسخ الكشف')}}
function xPpPrint(pid){const p=XPP().find(x=>x.id===pid);if(!p)return;const R=xPpRows(p),s=xPpSum(R);let run=0;
  const tr=R.map(r=>{const a=Math.abs(+r.t.amount||0);if(r.k==='owe')run+=a;if(r.k==='paid')run-=a;
    return `<tr><td>${xPpD(r.t.date)}</td><td>${esc(xPpNm(r.t))}</td><td>${r.k==='owe'?fmt(a):''}</td><td>${r.k==='paid'?fmt(a):''}</td><td>${r.k==='gift'?fmt(a):''}</td><td>${fmt(r2(run))}</td></tr>`}).join('');
  const w=window.open('','_blank');if(!w)return toast('افتح النوافذ المنبثقة للطباعة');
  w.document.write(`<html dir="rtl"><head><meta charset="utf-8"><title>كشف ${esc(p.name)}</title><style>body{font-family:sans-serif;padding:16px}table{border-collapse:collapse;width:100%;font-size:13px}td,th{border:1px solid #999;padding:5px;text-align:center}th{background:#eee}</style></head><body>
    <h2>كشف حساب: ${esc(p.name)}</h2><p>بتاريخ ${xPpD(xPpTd())}</p>
    <table><tr><th>التاريخ</th><th>البيان</th><th>عليه</th><th>رجّع</th><th>صرفت عليه</th><th>الرصيد</th></tr>${tr}
    <tr><th colspan="2">الإجمالي</th><th>${fmt(s.owe)}</th><th>${fmt(s.paid)}</th><th>${fmt(s.gift)}</th><th>${fmt(s.bal)}</th></tr></table>
    <p style="color:#777">Centric · DeTech Solutions</p><script>setTimeout(()=>print(),300)<\/script></body></html>`);w.document.close()}

/* ---------- إضافة وتعديل ---------- */
function xPpEdit(id){const p=id?XPP().find(x=>x.id===id):null;XPPE=p?JSON.parse(JSON.stringify(p)):{id:'',name:'',ph:'',cats:{}};xPpEditR()}
function xPpEditR(q){const e=XPPE;q=q||'';
  const cs=S.cats.filter(c=>(c.kind==='exp'||c.kind==='inc')&&c.active!==false&&(!q||qn(c.name).includes(qn(q))||e.cats[c.id]))
    .sort((a,b)=>(e.cats[b.id]?1:0)-(e.cats[a.id]?1:0)||a.name.localeCompare(b.name,'ar')).slice(0,q?40:25);
  sheet(`<h3>${e.id?'✏️ تعديل':'➕ شخص جديد'}</h3>
    <label>👤 الاسم<input id="pp-n" value="${esc(e.name)}" oninput="XPPE.name=this.value"></label>
    <label>📞 الرقم<input id="pp-h" dir="ltr" inputmode="tel" value="${esc(e.ph||'')}" oninput="XPPE.ph=this.value"></label>
    <div class="fl">🔗 البنود اللي تخصه</div><div class="xckh">أي عملية على البند ده هتظهر في كشفه. التحصيل دايمًا "🟢 رجّع"، والمصروف تختار نوعه.</div>
    <input id="pp-q" placeholder="🔍 دوّر على بند" value="${esc(q)}" oninput="xPpEditR(this.value);setTimeout(()=>{const i=$('#pp-q');i.focus();i.setSelectionRange(i.value.length,i.value.length)},0)">
    ${cs.map(c=>{const on=!!e.cats[c.id];return `<div class="xppcat${on?' xppcon':''}"><label><input type="checkbox" ${on?'checked':''} onchange="xPpCat('${c.id}',this.checked)"> ${c.kind==='inc'?'💰':'💸'} ${esc(c.name)}</label>
      ${on&&c.kind==='exp'?`<span>${['owe','gift'].map(k=>`<button class="mini${e.cats[c.id]===k?' xppon':''}" onclick="XPPE.cats['${c.id}']='${k}';xPpEditR($('#pp-q').value)">${XPPKN[k]}</button>`).join('')}</span>`:on?'<span class="xckh">🟢 رجّع</span>':''}</div>`}).join('')}
    <button class="btn" onclick="xPpSave()">✅ حفظ</button>${e.id?`<button class="btn" style="background:#c0392b" onclick="xPpDel('${e.id}')">🗑 حذف الشخص</button>`:''}`)}
function xPpCat(cid,on){const c=C(cid);if(on)XPPE.cats[cid]=c&&c.kind==='inc'?'paid':'owe';else delete XPPE.cats[cid];xPpEditR(($('#pp-q')||{}).value||'')}
function xPpSave(){const e=XPPE,n=(e.name||'').trim();if(!n)return toast('اكتب الاسم');
  if(XPP().some(p=>p.id!==e.id&&normAr(p.name)===normAr(n)))return toast('الاسم ده موجود');
  e.name=n;if(!Object.keys(e.cats).length){const c=S.cats.find(c=>c.kind==='exp'&&normAr(c.name)===normAr(n));if(c)e.cats[c.id]='owe'}
  if(!e.id){e.id='pp'+Date.now().toString(36);XPP().push(e)}else{const i=XPP().findIndex(p=>p.id===e.id);XPP()[i]=e}
  save();toast('✅ اتحفظ');xPpOpen(e.id)}
function xPpDel(id){if(!confirm('تحذف الشخص ده؟ العمليات نفسها مش هتتمسح.'))return;
  S.settings.xpp=XPP().filter(p=>p.id!==id);S.txs.forEach(t=>{if(t.pp===id){delete t.pp;delete t.ppk}if(t.ppx)t.ppx=t.ppx.filter(x=>x!==id)});save();xPpList()}

/* ---------- 👤 على حساب في شاشة التسجيل ---------- */
function xPpForm(){const sz=$('#sheet .sz');if(!sz||!F||!(F.type==='exp'||F.type==='inc')||$('#f-pp')||!$('#f-amt'))return;const P=XPP();if(!P.length)return;
  if(F.pp===undefined&&F.id){const t=S.txs.find(x=>x.id===F.id);if(t&&t.pp){F.pp=t.pp;F.ppk=t.ppk||''}}
  const bs=[...sz.querySelectorAll('button.btn')],b=bs[bs.length-1];if(!b)return;
  b.insertAdjacentHTML('beforebegin',`<div class="xppf"><label>👤 على حساب<select id="f-pp" onchange="F.pp=this.value;F.ppk='';xPpFormK()"><option value="">— مش على حد —</option>${P.map(p=>`<option value="${p.id}"${F.pp===p.id?' selected':''}>${esc(p.name)}</option>`).join('')}</select></label><div id="f-ppk"></div></div>`);xPpFormK()}
function xPpFormK(){const b=$('#f-ppk');if(!b)return;if(!F.pp){b.innerHTML='';return}
  if(F.type==='inc'){F.ppk='paid';b.innerHTML='<div class="xckh">🟢 هيتسجل إنه رجّع</div>';return}
  if(!F.ppk||F.ppk==='paid')F.ppk='owe';
  b.innerHTML='<div class="xpprw">'+['owe','gift'].map(k=>`<button type="button" class="mini${F.ppk===k?' xppon':''}" onclick="F.ppk='${k}';xPpFormK()">${XPPKN[k]}</button>`).join('')+'</div>'}
try{const _tfP=txForm;txForm=function(){const r=_tfP.apply(this,arguments);try{xPpForm()}catch(e){}return r}}catch(e){}
try{const _stP=saveTx;saveTx=function(){
  const pp=F?F.pp:undefined,ppk=F?F.ppk:'',fid=F?F.id:null,ids=new Set(S.txs.map(t=>t.id));
  const r=_stP.apply(this,arguments);
  const ap=()=>{try{if(pp===undefined)return;const L=fid?S.txs.filter(t=>t.id===fid):S.txs.filter(t=>!ids.has(t.id)&&!t.feeOf&&!t.payFeeOf);
    L.forEach(t=>{if(pp){t.pp=pp;t.ppk=ppk||(t.type==='inc'?'paid':'owe')}else{delete t.pp;delete t.ppk}});if(L.length)save()}catch(e){}};
  if(r&&typeof r.then==='function')r.then(ap);else ap();return r}}catch(e){}
try{const _tbP=txBody;txBody=function(t){let r=_tbP.apply(this,arguments);
  try{if(typeof r==='string'&&t&&XPP().length){const m=xPpOfTx(t);if(m)r+=`<div class="xppl" onclick="event.stopPropagation();xPpOpen('${m.p.id}')">👤 على حساب ${esc(m.p.name)} · ${XPPKN[m.k]}</div>`}}catch(e){}return r}}catch(e){}

/* ---------- زرار الدخول ---------- */
function xPpTile(){if($('#xpp-tile'))return;
  const e=[...document.querySelectorAll('button,.tile,[onclick]')].find(x=>/بنود الحسابات/.test(x.textContent)&&x.textContent.trim().length<40&&!x.closest('#sheet'));if(!e)return;
  const n=e.cloneNode(true);n.id='xpp-tile';n.setAttribute('onclick','xPpList()');
  n.innerHTML=n.innerHTML.replace(/📒/g,'👤').replace(/بنود الحسابات/g,'حسابات الأشخاص');e.after(n)}
try{const _rnP=render;render=function(){const r=_rnP.apply(this,arguments);try{xPpTile()}catch(e){}return r}}catch(e){}

(function(){const s=document.createElement('style');s.textContent=`
.xppc{cursor:pointer}.xpprw{display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap;margin:6px 0}
.xpptot{text-align:center;font-size:15px}.xppk{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}.xppk .card{text-align:center;font-size:12px;padding:8px 4px}
.xppr{border-bottom:1px solid rgba(128,128,128,.2)}.xppr summary{display:flex;gap:8px;align-items:center;padding:8px 2px;list-style:none;cursor:pointer}
.xppr summary::-webkit-details-marker{display:none}.xppd{font-size:11px;opacity:.7;min-width:62px}.xppn{flex:1;display:flex;flex-direction:column}
.xppr small{display:block;font-size:10px;opacity:.7}.xppr summary>span:last-child{text-align:left;min-width:80px}
.xppr[open] summary{outline:1px solid #3b82f6;border-radius:8px}.xppb{display:flex;gap:4px;flex-wrap:wrap;padding:6px 0 10px}
.xpppre{display:flex;justify-content:space-between;padding:8px 2px;font-size:13px;opacity:.85}
.xppg{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px}.xppg .btn{margin:0}
.xppon{background:#0f9d8a!important;color:#fff!important}.xppcat{display:flex;justify-content:space-between;align-items:center;gap:6px;padding:6px 4px;border-bottom:1px solid rgba(128,128,128,.15)}
.xppcon{background:rgba(15,157,138,.08)}.xppl{margin-top:6px;padding:6px 8px;border-radius:8px;background:rgba(59,130,246,.1);font-size:12px;cursor:pointer}
`;document.head.appendChild(s)})();
/* ========== 2.21.104 · 🧹 توحيد البنود ========== */
var XCGEN=['سوبر ماركت','سوبرماركت','هايبر ماركت','هايبرماركت','هايبر','ماركت','ميني ماركت','supermarket','hypermarket','market','mart','hyper','محل','محلات','شركة','شركه','مخبز','مخابز','صيدلية','صيدليه','صيدليات','pharmacy','بنزينة','بنزينه','محطة','محطه','مطعم','مطاعم','restaurant','كافيه','كافيتريا','cafe','store','shop','stores','ltd','co'],XMG=[];
function xNrm(s){return String(s||'').toLowerCase().replace(/[إأآا]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').replace(/[\u064B-\u0652\u0640]/g,'').replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim()}
function xCore(s){const full=xNrm(s);let x=' '+full+' ';
  XCGEN.map(xNrm).sort((a,b)=>b.length-a.length).forEach(g=>{x=x.split(' '+g+' ').join(' ')});
  x=x.trim().split(' ').filter(Boolean).map(w=>w.replace(/^ال(?=..)/,'')).join(' ');
  return x||full.split(' ').map(w=>w.replace(/^ال(?=..)/,'')).join(' ')}
function xSim(a,b){a=a.replace(/\s/g,'');b=b.replace(/\s/g,'');if(!a||!b)return 0;if(a===b)return 1;
  if(a.length>=3&&b.length>=3&&(a.includes(b)||b.includes(a)))return .9;
  const bg=s=>{const m={};for(let i=0;i<s.length-1;i++){const k=s.substr(i,2);m[k]=(m[k]||0)+1}return m};
  const A=bg(a),B=bg(b);let n=0,t=0;for(const k in A){t+=A[k];if(B[k])n+=Math.min(A[k],B[k])}for(const k in B)t+=B[k];return t?2*n/t:0}
function xCNames(c){return [c.name].concat(c.al||[])}
function xSimC(a,b){let m=0;xCNames(a).forEach(x=>xCNames(b).forEach(y=>{m=Math.max(m,xSim(xCore(x),xCore(y)))}));return m}
function xCatFind(name,kind,skip){const k=xCore(name);let best=null;
  S.cats.forEach(c=>{if(c.id===skip||c.active===false||c.mrg||(kind&&c.kind!==kind))return;
    const s=Math.max(...xCNames(c).map(n=>xSim(k,xCore(n))));if(!best||s>best.s)best={c,s}});return best}
function xCatAlias(c,n){if(!c||!n)return;n=String(n).trim();if(!n||normAr(n)===normAr(c.name))return;c.al=c.al||[];if(!c.al.some(a=>normAr(a)===normAr(n)))c.al.push(n)}

/* ---------- منع التشعب ---------- */
try{const _ecU=ensureCat;ensureCat=function(name,kind){
  try{if(name&&!S.cats.some(c=>c.kind===kind&&normAr(c.name)===normAr(name))){const m=xCatFind(name,kind);if(m&&m.s>=1){xCatAlias(m.c,name);if(m.c.active===false)m.c.active=true;return m.c}}}catch(e){}
  return _ecU.apply(this,arguments)}}catch(e){}
try{const _csU=catSave;catSave=function(){const ids=new Set(S.cats.map(c=>c.id));const r=_csU.apply(this,arguments);
  const ck=()=>{try{const n=S.cats.find(c=>!ids.has(c.id));if(!n)return;const m=xCatFind(n.name,n.kind,n.id);if(!m||m.s<.8)return;
    if(!confirm('البند «'+n.name+'» شبه «'+m.c.name+'» الموجود.\nتسجّل على «'+m.c.name+'» وتدمجهم في بند واحد؟')){n.nodup=(n.nodup||[]).concat(m.c.id);save();return}
    xMgSnap();xCatMerge(n.id,m.c.id);if(F&&F.cat===n.id){F.cat=m.c.id;F.cq=m.c.name}save();toast('🔗 اتدمج في «'+m.c.name+'»');
    if(F&&$('#f-amt')){SHKEEP=1;txForm()}else render()}catch(e){}};
  if(r&&typeof r.then==='function')r.then(()=>setTimeout(ck,120));else setTimeout(ck,120);return r}}catch(e){}

/* ---------- الدمج ---------- */
function xCatMerge(from,to){if(from===to)return;const f=C(from),t=C(to);if(!f||!t||f.id!==from)return;
  const rep=o=>{if(o&&typeof o==='object'&&o.cat===from)o.cat=to};
  Object.keys(S).forEach(k=>{const v=S[k];if(Array.isArray(v)&&k!=='cats')v.forEach(o=>{rep(o);if(o&&Array.isArray(o.items))o.items.forEach(rep)})});
  XPP().forEach(p=>{if(p.cats&&p.cats[from]){if(!p.cats[to])p.cats[to]=p.cats[from];delete p.cats[from]}});
  if(Array.isArray(S.settings.xbt))S.settings.xbt=[...new Set(S.settings.xbt.map(x=>x===from?to:x))];
  xCNames(f).forEach(n=>xCatAlias(t,n));if(!t.cl&&f.cl)t.cl=f.cl;if(!t.xbill&&f.xbill)t.xbill=f.xbill;
  f.active=false;f.mrg=to;t.active=true}
function xMgSnap(){const o={at:Date.now(),cats:JSON.parse(JSON.stringify(S.cats)),f:[],pp:JSON.parse(JSON.stringify(XPP())),xbt:Array.isArray(S.settings.xbt)?[...S.settings.xbt]:null};
  Object.keys(S).forEach(k=>{const v=S[k];if(!Array.isArray(v)||k==='cats')return;v.forEach((x,i)=>{if(!x||typeof x!=='object')return;const key=x.id!==undefined?['id',x.id]:['i',i];
    if(x.cat!==undefined)o.f.push([k,key,-1,x.cat]);if(Array.isArray(x.items))x.items.forEach((y,j)=>{if(y&&y.cat!==undefined)o.f.push([k,key,j,y.cat])})})});
  try{localStorage.setItem('centric-mrgbk',JSON.stringify(o))}catch(e){toast('⚠️ مقدرتش أحفظ نسخة للرجوع')}}
function xMgUndo(){let o=null;try{o=JSON.parse(localStorage.getItem('centric-mrgbk')||'null')}catch(e){}if(!o)return toast('مفيش دمج أرجّعه');
  if(!confirm('ترجّع البنود زي ما كانت قبل آخر دمج؟'))return;
  const ids=new Set(o.cats.map(c=>c.id)),extra=S.cats.filter(c=>!ids.has(c.id));S.cats.length=0;o.cats.concat(extra).forEach(c=>S.cats.push(c));
  o.f.forEach(([k,key,j,cat])=>{const a=S[k];if(!Array.isArray(a))return;let x=key[0]==='id'?a.find(e=>e&&e.id===key[1]):a[key[1]];if(x&&j>=0)x=(x.items||[])[j];if(x)x.cat=cat});
  S.settings.xpp=o.pp;if(o.xbt)S.settings.xbt=o.xbt;localStorage.removeItem('centric-mrgbk');save();render();toast('↩️ رجعت زي ما كانت');xMgOpen()}

/* ---------- شاشة التوحيد ---------- */
function xCatGroups(){const L=S.cats.filter(c=>(c.kind==='exp'||c.kind==='inc')&&c.active!==false&&!c.mrg),par={};
  const f=x=>{if(par[x]===undefined)par[x]=x;if(par[x]!==x)par[x]=f(par[x]);return par[x]};
  for(let i=0;i<L.length;i++)for(let j=i+1;j<L.length;j++){const a=L[i],b=L[j];if(a.kind!==b.kind)continue;
    if((a.nodup||[]).includes(b.id)||(b.nodup||[]).includes(a.id))continue;if(xSimC(a,b)>=.8)par[f(a.id)]=f(b.id)}
  const g={};L.forEach(c=>{const r=f(c.id);(g[r]=g[r]||[]).push(c)});return Object.values(g).filter(x=>x.length>1)}
function xMgOpen(){const G=xCatGroups(),cnt={};S.txs.forEach(t=>{cnt[t.cat]=(cnt[t.cat]||0)+1});
  XMG=G.map(g=>({ids:g.map(c=>c.id),to:g.slice().sort((a,b)=>(cnt[b.id]||0)-(cnt[a.id]||0))[0].id}));
  const act=S.cats.filter(c=>(c.kind==='exp'||c.kind==='inc')&&c.active!==false&&!c.mrg).sort((a,b)=>a.name.localeCompare(b.name,'ar'));
  const opt=act.map(c=>`<option value="${c.id}">${c.kind==='inc'?'💰':'💸'} ${esc(c.name)}</option>`).join('');
  const hasBk=!!localStorage.getItem('centric-mrgbk');
  sheet(`<h3>🧹 توحيد البنود</h3>
    <div class="xckh">البنود اللي اسمها شبه بعض (سوبر ماركت المهر = ماركت المهر). اختار البند الأساسي، والباقي عملياته هتتنقل عليه واسمه هيتحفظ كاسم تاني.</div>
    ${XMG.length?`<button class="btn" onclick="xMgAll()">🔗 ادمج الكل (${XMG.length})</button>`:'<div class="card" style="text-align:center">✅ مفيش بنود شبه بعض</div>'}
    ${XMG.map((g,i)=>`<div class="card xmgc">${g.ids.map(id=>{const c=C(id);return `<label class="xmgr"><input type="radio" name="mg${i}" ${g.to===id?'checked':''} onchange="XMG[${i}].to='${id}'">
      <span><b>${esc(c.name)}</b>${(c.al||[]).length?`<small>أسماء تانية: ${esc(c.al.join('، '))}</small>`:''}</span><span class="xckh">${cnt[id]||0} عملية</span></label>`}).join('')}
      <div class="xpprw"><button class="mini xppon" onclick="xMgDo(${i})">🔗 ادمج</button><button class="mini" onclick="xMgNo(${i})">✋ مش نفس الحاجة</button></div></div>`).join('')}
    <details class="card"><summary><b>🔗 دمج يدوي</b></summary><div class="xckh">للبنود اللي البرنامج ماعرفهاش (زي كارفور و Carrefour)</div>
      <label>البند ده<select id="mg-a">${opt}</select></label><label>يتدمج في<select id="mg-b">${opt}</select></label>
      <button class="btn" onclick="xMgMan()">🔗 ادمج</button></details>
    ${hasBk?'<button class="btn" style="background:#6b7280" onclick="xMgUndo()">↩️ رجّع آخر دمج</button>':''}`)}
function xMgDo(i,quiet){const g=XMG[i];if(!g)return;if(!quiet)xMgSnap();g.ids.filter(id=>id!==g.to).forEach(id=>xCatMerge(id,g.to));
  if(!quiet){save();render();toast('🔗 اتدمجوا في «'+C(g.to).name+'»');xMgOpen()}}
function xMgAll(){if(!confirm('تدمج كل المجموعات ('+XMG.length+')؟ تقدر ترجّعها بـ ↩️ رجّع آخر دمج.'))return;xMgSnap();XMG.forEach((g,i)=>xMgDo(i,true));save();render();toast('🔗 اتدمج الكل');xMgOpen()}
function xMgNo(i){const g=XMG[i];if(!g)return;g.ids.forEach(a=>{const c=C(a);c.nodup=[...new Set((c.nodup||[]).concat(g.ids.filter(b=>b!==a)))]});save();xMgOpen()}
function xMgMan(){const a=$('#mg-a').value,b=$('#mg-b').value;if(!a||!b||a===b)return toast('اختار بندين مختلفين');
  const A=C(a),B=C(b);if(A.kind!==B.kind)return toast('مينفعش تدمج تحصيل في مصروف');
  if(!confirm('تنقل كل عمليات «'+A.name+'» على «'+B.name+'»؟'))return;xMgSnap();xCatMerge(a,b);save();render();toast('🔗 اتدمج');xMgOpen()}

/* ---------- زرار الدخول + تنبيه ---------- */
function xMgTile(){if($('#xmg-tile'))return;
  const e=[...document.querySelectorAll('button,.tile,[onclick]')].find(x=>/بنود الحسابات/.test(x.textContent)&&x.textContent.trim().length<40&&!x.closest('#sheet')&&x.id!=='xpp-tile');if(!e)return;
  const n=e.cloneNode(true);n.id='xmg-tile';n.setAttribute('onclick','xMgOpen()');
  n.innerHTML=n.innerHTML.replace(/📒/g,'🧹').replace(/بنود الحسابات/g,'توحيد البنود');($('#xpp-tile')||e).after(n)}
try{const _rnM=render;render=function(){const r=_rnM.apply(this,arguments);try{xMgTile()}catch(e){}return r}}catch(e){}
setTimeout(()=>{try{const d=new Date().toDateString();if(localStorage.getItem('centric-mghint')===d)return;const n=xCatGroups().length;
  if(n){localStorage.setItem('centric-mghint',d);toast('🧹 فيه '+n+' بنود شبه بعض · افتح توحيد البنود')}}catch(e){}},4000);
(function(){const s=document.createElement('style');s.textContent=`.xmgc{padding:8px}.xmgr{display:flex;align-items:center;gap:8px;padding:6px 2px;border-bottom:1px solid rgba(128,128,128,.15)}
.xmgr span:nth-child(2){flex:1;display:flex;flex-direction:column}.xmgr small{font-size:10px;opacity:.7}`;document.head.appendChild(s)})();
/* ========== 2.21.105 · 🔁 التحويل مع السحب والإيداع ========== */
function xTrType(){const t=S.txs.find(x=>x.to&&x.method&&x.type!=='exp'&&x.type!=='inc');return t?t.type:'tr'}
function xIsCashM(id){const m=(id&&M(id))||{};return m.type==='cash'||m.kind==='cash'||id==='cash'||/كاش|cash|نقد/i.test(m.name||'')}
function xTrList(){const tt=xTrType();return S.txs.filter(t=>t.type===tt&&t.to&&!t.del&&!t.feeOf&&!xIsCashM(t.method)&&!xIsCashM(t.to)).sort((a,b)=>(b.date||'').localeCompare(a.date||''))}
function xTrFee(t){return S.txs.filter(x=>x.feeOf===t.id&&!x.del).reduce((s,x)=>s+Math.abs(+x.amount||0),0)}
function xTrNew(){try{closeSheet()}catch(e){}try{newTx(xTrType())}catch(e){toast('افتح التحويل من ➕ عملية جديدة')}}
function xTrSec(){const L=xTrList(),mk=xPpTd().slice(0,7),ML=L.filter(t=>(t.date||'').startsWith(mk));
  const mTot=ML.reduce((s,t)=>s+Math.abs(+t.amount||0),0),mFee=ML.reduce((s,t)=>s+xTrFee(t),0);
  const rows=L.map(t=>{const f=xTrFee(t),fm=(M(t.method)||{}).name||'',to=(M(t.to)||{}).name||'';
    return `<details class="xr xtrr" data-q="${esc((fm+' '+to+' '+(t.note||'')+' '+t.amount).toLowerCase())}"><summary><span class="xppd">${xPpD(t.date)}</span><span class="xppn">${esc(fm)} ← ${esc(to)}${t.note?`<small>${esc(t.note)}</small>`:''}</span><span><b>${fmt(Math.abs(+t.amount||0))}</b>${f?`<small>💸 ${fmt(f)}</small>`:''}</span></summary><div class="xtrb">${(()=>{try{return txBody(t)}catch(e){return ''}})()}</div></details>`}).join('');
  return `<details class="grp xtrg"><summary>🔁 تحويلات بين حساباتك <span class="xckh">(${L.length})</span></summary>
    <button class="btn" onclick="xTrNew()">➕ تحويل جديد</button>
    <div class="xppk"><div class="card">الشهر ده<br><b>${ML.length}</b> تحويل</div><div class="card">الإجمالي<br><b>${fmt(mTot)}</b></div><div class="card">💸 مصاريف<br><b>${fmt(r2(mFee))}</b></div></div>
    <input class="xtrq" placeholder="🔍 دوّر بالحساب أو المبلغ" oninput="const q=this.value.trim().toLowerCase();this.closest('.xtrg').querySelectorAll('.xtrr').forEach(r=>r.style.display=!q||r.dataset.q.includes(q)?'':'none')">
    ${rows||'<div class="xckh" style="padding:10px 0">مفيش تحويلات لسه</div>'}</details>`}
try{const _xcwT=XVW.xcw;XVW.xcw=function(){let h=_xcwT.apply(this,arguments);try{if(typeof h==='string')h+=xTrSec()}catch(e){}return h}}catch(e){}
function xTrTiles(){
  document.querySelectorAll('button,.tile,[onclick]').forEach(x=>{if(x.closest('#sheet')||x.closest('.xtrg'))return;const tx=x.textContent.replace(/\s+/g,' ').trim();
    if(/السحب والإيداع/.test(tx)&&!/التحويل/.test(tx)&&tx.length<40){const w=document.createTreeWalker(x,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode())n.nodeValue=n.nodeValue.replace('السحب والإيداع','السحب والإيداع والتحويل')}
    else if(/^🔁?\s*(ال)?تحويل(ات)?(\s+بين\s+(ال)?حسابات(ك)?)?$/.test(tx)&&x.children.length<4)x.style.display='none'})}
try{const _rnT=render;render=function(){const r=_rnT.apply(this,arguments);try{xTrTiles()}catch(e){}return r}}catch(e){}
(function(){const s=document.createElement('style');s.textContent=`.xtrr summary{display:flex;gap:8px;align-items:center;padding:8px 2px;list-style:none;cursor:pointer}.xtrr summary::-webkit-details-marker{display:none}
.xtrr summary>span:last-child{text-align:left;min-width:80px;display:flex;flex-direction:column}.xtrr small{font-size:10px;opacity:.7}.xtrq{margin:6px 0}.xtrb{padding:6px 0}`;document.head.appendChild(s)})();
/* ========== 2.21.106 · تنضيف الكلام + مقارنة أدق ========== */
xSim=function(a,b){a=a.replace(/\s/g,'');b=b.replace(/\s/g,'');if(!a||!b)return 0;if(a===b)return 1;
  const s=a.length<b.length?a:b,l=a.length<b.length?b:a;if(s.length>=3&&l.includes(s))return s.length/l.length;
  const bg=x=>{const m={};for(let i=0;i<x.length-1;i++){const k=x.substr(i,2);m[k]=(m[k]||0)+1}return m};
  const A=bg(a),B=bg(b);let n=0,t=0;for(const k in A){t+=A[k];if(B[k])n+=Math.min(A[k],B[k])}for(const k in B)t+=B[k];return t?2*n/t:0};
function xSzClean(){const sz=$('#sheet .sz');if(!sz)return;
  [...sz.children].forEach(e=>{if(e.matches&&e.matches('.xckh,.card.xckh'))e.remove()});
  sz.querySelectorAll('details .xckh').forEach(e=>{if(/ماعرفهاش/.test(e.textContent))e.remove()})}
try{const _mgC=xMgOpen;xMgOpen=function(){const r=_mgC.apply(this,arguments);try{xSzClean();
  const b=[...$('#sheet .sz').querySelectorAll('button.btn')].find(x=>/ادمج الكل/.test(x.textContent));if(b)b.textContent=b.textContent.replace('ادمج الكل','ادمج الحسابات الشبيهة')}catch(e){}return r}}catch(e){}
try{const _ppC=xPpList;xPpList=function(){const r=_ppC.apply(this,arguments);try{xSzClean()}catch(e){}return r}}catch(e){}
try{const _peC=xPpEditR;xPpEditR=function(){const r=_peC.apply(this,arguments);try{xSzClean()}catch(e){}return r}}catch(e){}
function xCwName(){document.querySelectorAll('button,.tile,[onclick]').forEach(x=>{if(x.closest('#sheet'))return;const tx=x.textContent.replace(/\s+/g,' ').trim();
  if(/سحب و\s*إيداع كاش/.test(tx)&&tx.length<40){const w=document.createTreeWalker(x,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode())n.nodeValue=n.nodeValue.replace(/سحب و(\s*)إيداع كاش/,'سحب و$1إيداع وتحويل')}})}
try{const _rnN=render;render=function(){const r=_rnN.apply(this,arguments);try{xCwName()}catch(e){}return r}}catch(e){}
/* ========== 2.21.107 · أكتر من رقم + البحث من غير ما الكيبورد يختفي ========== */
function xPpKHtml(c){const k=XPPE.cats[c.id];if(!k)return '';if(c.kind==='inc')return '<span class="xckh">🟢 رجّع</span>';
  return ['owe','gift'].map(v=>`<button type="button" class="mini${k===v?' xppon':''}" onclick="xPpKSet('${c.id}','${v}')">${XPPKN[v]}</button>`).join('')}
function xPpCRow(c){const on=!!XPPE.cats[c.id];
  return `<div class="xppcat${on?' xppcon':''}" id="pp-r-${c.id}" data-q="${esc(xCNames(c).map(xNrm).join(' '))}"><label><input type="checkbox" ${on?'checked':''} onchange="xPpCat('${c.id}',this.checked)"> ${c.kind==='inc'?'💰':'💸'} ${esc(c.name)}</label><span id="pp-k-${c.id}">${xPpKHtml(c)}</span></div>`}
function xPpPhRows(){const P=XPPE.phs;return P.map((p,i)=>`<div class="xppph"><input dir="ltr" inputmode="tel" value="${esc(p)}" oninput="XPPE.phs[${i}]=this.value">${P.length>1?`<button type="button" class="mini" onclick="xPpPhDel(${i})">✕</button>`:''}</div>`).join('')}
function xPpPhAdd(){XPPE.phs.push('');$('#pp-phs').innerHTML=xPpPhRows();const L=$('#pp-phs').querySelectorAll('input');L[L.length-1].focus()}
function xPpPhDel(i){XPPE.phs.splice(i,1);if(!XPPE.phs.length)XPPE.phs=[''];$('#pp-phs').innerHTML=xPpPhRows()}
function xPpQ(q){const n=xNrm(q||'');let shown=0;
  document.querySelectorAll('#pp-cl .xppcat').forEach(r=>{const on=r.classList.contains('xppcon');let v=on||(n?r.dataset.q.includes(n):shown<20);if(v&&!on)shown++;r.style.display=v?'':'none'})}
xPpEditR=function(){const e=XPPE;if(!Array.isArray(e.phs)||!e.phs.length)e.phs=e.ph?[e.ph]:[''];
  const cs=S.cats.filter(c=>(c.kind==='exp'||c.kind==='inc')&&c.active!==false&&!c.mrg).sort((a,b)=>(e.cats[b.id]?1:0)-(e.cats[a.id]?1:0)||a.name.localeCompare(b.name,'ar'));
  sheet(`<h3>${e.id?'✏️ تعديل':'➕ شخص جديد'}</h3>
    <label>👤 الاسم<input id="pp-n" value="${esc(e.name)}" oninput="XPPE.name=this.value"></label>
    <div class="fl">📞 الرقم</div><div id="pp-phs">${xPpPhRows()}</div><button type="button" class="mini" onclick="xPpPhAdd()">➕ رقم تاني</button>
    <div class="fl">🔗 البنود اللي تخصه</div><input id="pp-q" placeholder="🔍 دوّر على بند" oninput="xPpQ(this.value)">
    <div id="pp-cl">${cs.map(xPpCRow).join('')}</div>
    <button class="btn" onclick="xPpSave()">✅ حفظ</button>${e.id?`<button class="btn" style="background:#c0392b" onclick="xPpDel('${e.id}')">🗑 حذف الشخص</button>`:''}`);
  xPpQ('')};
xPpCat=function(cid,on){const c=C(cid);if(on)XPPE.cats[cid]=c&&c.kind==='inc'?'paid':'owe';else delete XPPE.cats[cid];
  const r=$('#pp-r-'+cid);if(r)r.classList.toggle('xppcon',on);const k=$('#pp-k-'+cid);if(k)k.innerHTML=xPpKHtml(c)};
function xPpKSet(cid,k){XPPE.cats[cid]=k;const s=$('#pp-k-'+cid);if(s)s.innerHTML=xPpKHtml(C(cid))}
try{const _psP=xPpSave;xPpSave=function(){try{if(XPPE){XPPE.phs=(XPPE.phs||[]).map(x=>String(x||'').trim()).filter(Boolean);XPPE.ph=XPPE.phs[0]||''}}catch(e){}return _psP.apply(this,arguments)}}catch(e){}
(function(){const s=document.createElement('style');s.textContent=`.xppph{display:flex;gap:6px;align-items:center;margin-bottom:6px}.xppph input{flex:1;margin:0}`;document.head.appendChild(s)})();
/* ========== 2.21.108 · شكل حسابات الأشخاص ========== */
xPpList=function(){const P=XPP();let tot=0;
  const rows=P.map(p=>{const s=xPpSum(xPpRows(p));tot+=s.bal;
    return `<div class="xppli"><span class="xppnm"><b>👤 ${esc(p.name)}</b><small>${xPpBal(s.bal)}</small></span><button class="mini" onclick="xPpOpen('${p.id}')">📄 العمليات</button></div>`}).join('');
  sheet(`<div class="xpph"><h3>👤 حسابات الأشخاص</h3><button class="mini" onclick="xPpEdit()">➕ شخص</button></div>
    ${P.length?`<details class="grp xppgrp"><summary><span>👥 الأشخاص (${P.length})</span>${xPpBal(tot)}</summary>${rows}</details>`:''}`)};
xPpOpen=function(id,per){const p=XPP().find(x=>x.id===id);if(!p)return xPpList();
  if(per)XPPV.per=per;if(!XPPV.m)XPPV.m=xPpTd().slice(0,7);
  const R=xPpRows(p);let from='',to='9999',lbl='';
  if(XPPV.per==='m'){from=XPPV.m+'-01';to=XPPV.m+'-31';lbl=XPPV.m.split('-').reverse().join('/')}
  else if(XPPV.per==='y'){from=XPPV.m.slice(0,4)+'-01-01';to=XPPV.m.slice(0,4)+'-12-31';lbl=XPPV.m.slice(0,4)}
  const pre=xPpSum(R.filter(r=>(r.t.date||'')<from)),IN=R.filter(r=>(r.t.date||'')>=from&&(r.t.date||'')<=to),ps=xPpSum(IN),end=r2(pre.bal+ps.bal);
  const rows=IN.map(r=>{const a=Math.abs(+r.t.amount||0),cn=(C(r.t.cat)||{}).name||'',ti=r.t.note||xPpNm(r.t);
    const col=r.k==='owe'?'#e8833a':r.k==='paid'?'#2bb673':'#8a94a6',d=XPPV.per==='m'?xPpD(r.t.date).slice(0,5):xPpD(r.t.date);
    return `<details class="xppr"><summary><span class="xppd">${d}</span><span class="xppn">${esc(ti)}<small>${cn&&normAr(cn)!==normAr(ti)?esc(cn)+' · ':''}${XPPKN[r.k]}</small></span><b style="color:${col}">${r.k==='paid'?'−':''}${fmt(a)}</b></summary>
      <div class="xppb">${XPPK.map(([v,l])=>`<button class="mini${r.k===v?' xppon':''}" onclick="xPpSet('${r.t.id}','${p.id}','${v}')">${l}</button>`).join('')}<button class="mini" onclick="xPpSet('${r.t.id}','${p.id}','x')">✕ شيلها</button></div></details>`}).join('');
  const sg=[['m','شهر'],['y','سنة'],['a','الكل']].map(([v,l])=>`<button class="mini${XPPV.per===v?' xppon':''}" onclick="xPpOpen('${p.id}','${v}')">${l}</button>`).join('');
  sheet(`<div class="xpph"><h3>👤 ${esc(p.name)}</h3><span class="xppic"><button class="mini" onclick="xPpEdit('${p.id}')">✏️</button><button class="mini" onclick="xPpPrint('${p.id}')">🖨️</button><button class="mini" onclick="xPpShare('${p.id}')">📤</button></span></div>
    <div class="xppper">${sg}</div>
    ${XPPV.per!=='a'?`<div class="xppnav"><button class="mini" onclick="xPpMv('${p.id}',-1)">→</button><b>${lbl}</b><button class="mini" onclick="xPpMv('${p.id}',1)">←</button></div>`:''}
    ${pre.bal?`<div class="xpppre"><span>الرصيد قبل الفترة</span><b>${fmt(pre.bal)}</b></div>`:''}
    ${rows||'<div class="xckh" style="padding:14px 0;text-align:center">مفيش عمليات</div>'}
    <div class="card xppsum"><div><span>🔴 عليه</span><b>${fmt(ps.owe)}</b></div><div><span>🟢 رجّع</span><b>${fmt(ps.paid)}</b></div><div><span>🎁 صرفت عليه</span><b>${fmt(ps.gift)}</b></div>
      <div class="xppbal"><span>الرصيد</span>${xPpBal(end)}</div></div>
    <button class="btn" onclick="xPpAdd('${p.id}')">➕ عملية</button>`)};
function xPpAdd(id){const p=XPP().find(x=>x.id===id);if(!p)return;
  sheet(`<h3>➕ عملية · ${esc(p.name)}</h3><div class="xppg">
    <button class="btn" onclick="xPpNew('${id}','exp','owe')">🔴 عليه</button><button class="btn" onclick="xPpNew('${id}','inc','paid')">🟢 رجّع</button>
    <button class="btn" onclick="xPpNew('${id}','exp','gift')">🎁 صرفت عليه</button><button class="btn" onclick="xPpLoan('${id}')">🤝 سلفة</button></div>`)}
(function(){const s=document.createElement('style');s.textContent=`
.xpph{display:flex;justify-content:space-between;align-items:center;gap:8px}.xpph h3{margin:0}.xppic{display:flex;gap:4px}
.xppgrp>summary{display:flex;justify-content:space-between;align-items:center}.xppli{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:10px 4px;border-bottom:1px solid rgba(128,128,128,.15)}
.xppnm{display:flex;flex-direction:column;gap:2px}.xppnm small{font-size:12px}
.xppper{display:flex;justify-content:center;gap:6px;margin:10px 0 4px}.xppnav{display:flex;justify-content:center;align-items:center;gap:14px;margin:4px 0 8px}
.xppr summary>b{min-width:70px;text-align:left}
.xppsum{margin-top:12px;padding:10px 12px}.xppsum>div{display:flex;justify-content:space-between;padding:4px 0;font-size:13px}
.xppsum .xppbal{border-top:1px solid rgba(128,128,128,.3);margin-top:6px;padding-top:8px;font-size:16px}`;document.head.appendChild(s)})();
/* ========== 2.21.109 · حركات الشخص من غير أنواع ========== */
XPPK=[];XPPKN={owe:'💸 مصروف',paid:'💰 تحصيل',gift:'💸 مصروف'};
xPpMatch=function(t,p,L){
  if(!t||t.del||t.pend||(t.date||'')>xPpTd()||!(t.type==='exp'||t.type==='inc'))return null;
  const k=t.type==='inc'?'paid':'owe';
  if(t.pp)return t.pp===p.id?k:null;
  if(t.feeOf||t.payFeeOf||(t.ppx||[]).includes(p.id))return null;
  const nm=normAr(p.name);
  if(t.xlno){const l=L.find(l=>l.tx===t.id);if(l&&normAr(l.who||'')===nm)return k}
  if(t.xlnp){const l=L.find(l=>l.id===t.xlnp||l.id===t.xlno);if(l&&normAr(l.who||'')===nm)return k}
  return (p.cats||{})[t.cat]?k:null};
xPpBal=function(b){return `<b>${fmt(b)}</b>`};
xPpKHtml=function(){return ''};
xPpFormK=function(){const b=$('#f-ppk');if(b)b.innerHTML='';if(F&&F.pp)F.ppk=F.type==='inc'?'paid':'owe'};
xPpAdd=function(id){const p=XPP().find(x=>x.id===id);if(!p)return;
  sheet(`<h3>➕ عملية · ${esc(p.name)}</h3><div class="xppg">
    <button class="btn" onclick="xPpNew('${id}','exp','owe')">💸 مصروف</button><button class="btn" onclick="xPpNew('${id}','inc','paid')">💰 تحصيل</button>
    <button class="btn" onclick="xPpLoan('${id}')">🤝 سلفة</button></div>`)};
try{const _poK=xPpOpen;xPpOpen=function(){const r=_poK.apply(this,arguments);try{const s=$('#sheet .xppsum');if(s)[...s.children].forEach(d=>{const t=d.textContent;
  if(/صرفت عليه/.test(t))d.remove();else if(/عليه/.test(t)&&!d.classList.contains('xppbal'))d.firstElementChild.textContent='💸 مصروفات';else if(/رجّع/.test(t))d.firstElementChild.textContent='💰 تحصيلات'})}catch(e){}return r}}catch(e){}
xPpText=function(p){const R=xPpRows(p),s=xPpSum(R);
  return `كشف حساب: ${p.name}\n`+R.map(r=>`${xPpD(r.t.date)} · ${r.t.note||xPpNm(r.t)} · ${XPPKN[r.k]} ${fmt(Math.abs(+r.t.amount||0))}`).join('\n')
    +`\n————\nمصروفات: ${fmt(s.owe)} · تحصيلات: ${fmt(s.paid)}\nالرصيد: ${fmt(s.bal)}`};
xPpPrint=function(pid){const p=XPP().find(x=>x.id===pid);if(!p)return;const R=xPpRows(p),s=xPpSum(R);let run=0;
  const tr=R.map(r=>{const a=Math.abs(+r.t.amount||0);run+=r.k==='paid'?-a:a;
    return `<tr><td>${xPpD(r.t.date)}</td><td>${esc(r.t.note||xPpNm(r.t))}</td><td>${r.k==='owe'?fmt(a):''}</td><td>${r.k==='paid'?fmt(a):''}</td><td>${fmt(r2(run))}</td></tr>`}).join('');
  const w=window.open('','_blank');if(!w)return toast('افتح النوافذ المنبثقة للطباعة');
  w.document.write(`<html dir="rtl"><head><meta charset="utf-8"><title>كشف ${esc(p.name)}</title><style>body{font-family:sans-serif;padding:16px}table{border-collapse:collapse;width:100%;font-size:13px}td,th{border:1px solid #999;padding:5px;text-align:center}th{background:#eee}</style></head><body>
    <h2>كشف حساب: ${esc(p.name)}</h2><p>بتاريخ ${xPpD(xPpTd())}</p>
    <table><tr><th>التاريخ</th><th>البيان</th><th>مصروف</th><th>تحصيل</th><th>الرصيد</th></tr>${tr}
    <tr><th colspan="2">الإجمالي</th><th>${fmt(s.owe)}</th><th>${fmt(s.paid)}</th><th>${fmt(s.bal)}</th></tr></table>
    <p style="color:#777">Centric · DeTech Solutions</p><script>setTimeout(()=>print(),300)<\/script></body></html>`);w.document.close()};
/* ========== 2.21.110 · على حساب صح + بوكس الدفع + الشكل ========== */
function xPpAutoOf(){if(!F)return '';
  if(F.id){const t=S.txs.find(x=>x.id===F.id);if(t&&!t.pp){const L=typeof XLN==='function'?XLN():[];for(const p of XPP()){
    const sv=t.ppx;t.ppx=[];const k=xPpMatch(t,p,L);t.ppx=sv;if(k)return p.id}}}
  if(F.cat){const p=XPP().find(p=>(p.cats||{})[F.cat]);if(p)return p.id}
  return ''}
xPpForm=function(){const sz=$('#sheet .sz');if(!sz||!F||!(F.type==='exp'||F.type==='inc')||$('#f-pp')||!$('#f-amt'))return;const P=XPP();if(!P.length)return;
  if(!F.ppMan){const t=F.id&&S.txs.find(x=>x.id===F.id);F.ppAuto=xPpAutoOf();
    if(t&&t.pp)F.pp=t.pp;else if(t&&F.ppAuto&&(t.ppx||[]).includes(F.ppAuto))F.pp='';else F.pp=F.ppAuto||(F.id?'':undefined)}
  const bs=[...sz.querySelectorAll('button.btn')],sv=bs.find(b=>/سجّل|سجل|حفظ/.test(b.textContent))||bs[0];if(!sv)return;
  sv.insertAdjacentHTML('beforebegin',`<div class="xppf"><label>👤 على حساب<select id="f-pp" onchange="F.pp=this.value;F.ppMan=1">
    <option value="">— مش على حد —</option>${P.map(p=>`<option value="${p.id}"${F.pp===p.id?' selected':''}>${esc(p.name)}${F.ppAuto===p.id?' (من البند)':''}</option>`).join('')}</select></label></div>`)};
try{const _stA=saveTx;saveTx=function(){
  const man=F&&F.ppMan,pp=F?F.pp:undefined,au=F?F.ppAuto:'',fid=F?F.id:null,ids=new Set(S.txs.map(t=>t.id));
  const r=_stA.apply(this,arguments);
  const ap=()=>{try{const L=fid?S.txs.filter(t=>t.id===fid):S.txs.filter(t=>!ids.has(t.id)&&!t.feeOf&&!t.payFeeOf);let ch=0;
    L.forEach(t=>{if(!man){if(au&&t.pp===au){delete t.pp;delete t.ppk;ch=1}return}
      if(pp===''&&au){t.ppx=[...new Set((t.ppx||[]).concat(au))];ch=1}
      if(pp&&t.ppx&&t.ppx.includes(pp)){t.ppx=t.ppx.filter(x=>x!==pp);ch=1}});
    if(ch)save()}catch(e){}};
  if(r&&typeof r.then==='function')r.then(ap);else ap();return r}}catch(e){}

/* ---------- 💳 بوكس الدفع ---------- */
var XIPOPEN=false;
function xSmall(sz,re,need){let b=null;sz.querySelectorAll('div,label').forEach(d=>{if(!re.test(d.textContent)||!d.querySelector(need||'input,select'))return;if(!b||d.textContent.length<b.textContent.length)b=d});return b}
function xTxLay(){const sz=$('#sheet .sz'),a=$('#f-amt');if(!sz||!a||!F||!(F.type==='exp'||F.type==='inc')||$('#xpay'))return;
  const ok=e=>e&&e!==sz&&!e.contains(sz.querySelector('button.btn'))&&!e.querySelector('#xpay');
  const box=document.createElement('div');box.id='xpay';box.className='xpay';
  box.innerHTML=`<div class="xpayh">${F.type==='inc'?'💰 التحصيل':'💳 الدفع'}</div>`;
  const al=a.closest('label')||a.parentElement;if(ok(al)&&!al.contains(sz.querySelector('select'))){al.classList.add('xamt');box.appendChild(al)}
  const vs=[...sz.querySelectorAll('select')].find(s=>[...s.options].some(o=>o.value==='instapay'));
  if(vs){let row=vs.parentElement;while(row&&row!==sz&&row.querySelectorAll('select').length<2)row=row.parentElement;
    if(row===sz||!ok(row)||row.textContent.length>400||row.contains(a))row=vs.closest('label');if(ok(row))box.appendChild(row)}
  const fe=xSmall(sz,/مصاريف إنستاباي/,'input[type=checkbox]');if(ok(fe)&&!box.contains(fe)){fe.classList.add('xfee');box.appendChild(fe)}
  [...sz.querySelectorAll('div,small,p')].forEach(e=>{if(!e.children.length&&/^أي دفع أو تحويل بإنستاباي/.test(e.textContent.trim()))e.remove()});
  const ip=xSmall(sz,/حو?ّ?لت على/);if(ok(ip)&&!box.contains(ip)){const d=document.createElement('details');d.className='xipd';d.open=XIPOPEN;
    d.innerHTML='<summary>⚡ بيانات إنستاباي</summary>';d.appendChild(ip);d.addEventListener('toggle',()=>{XIPOPEN=d.open});box.appendChild(d)}
  if(box.children.length<2)return;
  const h=sz.querySelector(':scope > h3, :scope > .ttl');if(h)h.after(box);else sz.prepend(box)}
try{const _tfL=txForm;txForm=function(){const r=_tfL.apply(this,arguments);try{xTxLay()}catch(e){}return r}}catch(e){}

(function(){const s=document.createElement('style');s.textContent=`
.xpay{border-radius:18px;padding:12px 12px 6px;margin:4px 0 14px;background:linear-gradient(160deg,rgba(255,255,255,.08),rgba(255,255,255,.02));border:1px solid rgba(255,255,255,.1);box-shadow:0 8px 24px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,255,255,.07)}
.xpayh{font-weight:700;font-size:14px;margin-bottom:10px;color:#2dd4bf}
.xpay .xamt{display:flex!important;align-items:center;justify-content:space-between;gap:12px;font-weight:600}
.xpay .xamt input{width:55%!important;max-width:55%;font-size:20px!important;font-weight:700;text-align:center;padding:8px 10px!important;margin:0!important}
.xpay .xfee{margin:6px 0}.xpay label{margin-bottom:8px}
.xipd{border-radius:14px;border:1px dashed rgba(45,212,191,.35);padding:8px 10px;margin:6px 0 8px;background:rgba(45,212,191,.04)}
.xipd>summary{cursor:pointer;font-weight:600;font-size:13px;list-style:none}.xipd>summary::-webkit-details-marker{display:none}
.xipd>summary::after{content:' ▾';opacity:.6}.xipd[open]>summary{margin-bottom:8px}
#sheet .sz input,#sheet .sz select,#sheet .sz textarea,#sheet .sz .xsel{border-radius:14px}
.card{border-radius:18px;background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.02));border:1px solid rgba(255,255,255,.08);box-shadow:0 6px 18px rgba(0,0,0,.22),inset 0 1px 0 rgba(255,255,255,.05)}
.xppf{margin:10px 0}`;document.head.appendChild(s)})();
/* نهاية fix.js */