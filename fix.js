/* ========== Centric · fix.js · 2.21.0 ========== */
/* بيتحمّل بعد more.js. لو حصلت مشكلة: شيل سطره من index.html والبرنامج يرجع زي ما كان */
                                        const XVER='2.21.39',XVBUILD='16/10/2026 - 11:30 م';
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
/* نهاية fix.js */