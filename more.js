/* ========== Centric · more.js ========== */
/* رقم الإصدار: بيتغير مع كل تحديث للملف ده */
const VER='2.20.0',VBUILD='13/10/2026 - 09:00 م';
try{brand=function(){return `<div class="brand"><div class="pill"><b dir="ltr">${DEV.name}</b><span class="co" dir="ltr">${DEV.company}</span><span>${DEV.phones.map(p=>`<a href="tel:${p}" dir="ltr">${p}</a>`).join(' - ')}</span></div><small><span dir="ltr">${esc(appName())}</span> · الإصدار ${VER} · ${VBUILD}</small></div>`}}catch(e){}
/* المرفقات: كاميرا + الصور + ملف في كل مكان */
try{filesBox=function(ids,ctx){return `<div class="files">${(ids||[]).map(id=>fileThumb(id,ctx)).join('')}<button type="button" class="fadd" onclick="attach('${ctx}',true)">📷<small>كاميرا</small></button><button type="button" class="fadd" onclick="attachGal('${ctx}')">🖼️<small>الصور</small></button><button type="button" class="fadd" onclick="attach('${ctx}',false)">📎<small>ملف</small></button></div>`}}catch(e){}
function attachGal(ctx){pickAny('image/*',ids=>{if(ids.length&&ATT[ctx]&&ATT[ctx].add)ATT[ctx].add(ids)})}
/* علامة الفلتر (قمع) */
const FIC='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg>';
(()=>{const s=document.createElement('style');s.textContent=`#scan .frz{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#000;display:none}
#scan .frz[style*="block"]~.sframe{display:none}
#scan .sframe:not(.card){top:8%!important;bottom:15%!important;left:3%!important;right:3%!important;width:auto!important;height:auto!important;transform:none!important;margin:0!important}
.phw{position:relative;display:inline-block}.phw .phx{position:absolute;top:4px;left:4px;padding:2px 8px}
.three{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}.three .btn{margin:0;padding-left:4px;padding-right:4px}
.bir{position:relative;border:1px solid var(--line,#e5e7eb);border-radius:12px;padding:8px 8px 2px;margin-bottom:8px}
.bir .three label{margin:0}.bir .three b{display:block;padding:10px 4px}.bir .bix{position:absolute;top:8px;left:8px;padding:2px 8px}
.bir>input{width:calc(100% - 44px)}
.ctact{display:flex;gap:6px;flex:0 0 auto}
.ctsend{display:block;margin:8px auto 4px;font-size:22px;padding:6px 18px}
.exh{display:flex;align-items:center;gap:8px}.exh b{margin-inline-start:auto}
#sheet .seg button[onclick="setTxType('tr')"],button[onclick="newTx('tr')"]{display:none!important}
nav .fab{position:fixed!important;left:50%!important;right:auto!important;top:auto!important;bottom:calc(var(--navh,64px) + 12px)!important;transform:translateX(-50%)!important;margin:0!important;width:60px!important;height:60px!important;flex:none!important;z-index:61!important;box-shadow:0 10px 24px rgba(0,0,0,.35)!important}
#view{padding-bottom:84px}
#fabm{position:fixed;left:50%;bottom:calc(var(--navh,64px) + 84px);transform:translateX(-50%);display:flex;gap:10px;padding:8px;border-radius:20px;background:var(--card,#fff);box-shadow:0 12px 32px rgba(0,0,0,.28);z-index:90;animation:fabin .18s ease-out}
@keyframes fabin{from{opacity:0;transform:translateX(-50%) translateY(24px) scale(.6)}to{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}}
#fabm button{border:0;border-radius:14px;padding:10px 18px;min-width:96px;font:inherit;font-weight:700;color:#fff;display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer}
#fabm button span{font-size:24px;line-height:1}
#fabm .inc{background:#16a34a}#fabm .exp{background:#dc2626}
.cres{margin:-4px 0 10px;max-height:280px;overflow:auto}
.cpick{display:block;margin:-6px 0 10px;color:#16a34a;font-weight:700}
.gsr{display:flex;align-items:center;gap:8px;background:var(--card,#fff);border:1px solid var(--line,rgba(148,163,184,.35));border-radius:14px;padding:2px 12px;margin:8px 0 10px}
.gsr svg{opacity:.7;flex:0 0 auto}
.gsr input{flex:1;min-width:0;border:0!important;background:transparent!important;box-shadow:none!important;margin:0!important;padding:10px 0!important;color:inherit;outline:none}
.gsr button{border:0;background:var(--soft,#eef2f6);border-radius:10px;padding:6px 10px;color:inherit;font:inherit;font-size:12px;cursor:pointer;white-space:nowrap}
.gsr button.on{background:var(--p);color:#fff}
.tiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;margin:10px 0}
.tile{min-height:88px;border-radius:16px;border:1px solid var(--line,rgba(148,163,184,.35));background:var(--card,#fff);color:inherit;font:inherit;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:8px 4px;cursor:pointer;text-align:center}
.tile span{font-size:24px;line-height:1.1}.tile b{font-size:12px;line-height:1.3}.tile small{font-size:10.5px;opacity:.7}
.tile.on{background:var(--p);border-color:var(--p);color:#fff;box-shadow:0 6px 16px rgba(0,0,0,.18)}
.ychips{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;margin:4px 0 6px}
.ychips button{border:1px solid var(--line,rgba(148,163,184,.35));background:var(--card,#fff);color:inherit;border-radius:20px;padding:5px 14px;font:inherit;font-size:12.5px;white-space:nowrap;cursor:pointer}
.ychips button.on{background:var(--p);border-color:var(--p);color:#fff;font-weight:700}
.agh{display:flex;align-items:center;gap:8px;margin:16px 0 6px;font-weight:800;font-size:14px}
.agh small{margin-inline-start:auto;opacity:.7;font-weight:600;font-size:12px}
.ainfo{margin:4px 0 10px}.ainfo input{opacity:.9}
.dlg{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:3000;display:flex;align-items:center;justify-content:center;padding:16px;animation:dlgf .15s ease-out}
@keyframes dlgf{from{opacity:0}to{opacity:1}}
.dbx{position:relative;width:min(100%,380px);max-height:85vh;overflow:auto;background:var(--card,#fff);border-radius:20px;padding:26px 18px 16px;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,.3);animation:dlgi .18s ease-out}
@keyframes dlgi{from{transform:scale(.92);opacity:0}to{transform:none;opacity:1}}
.dx{position:absolute;top:10px;left:10px;width:32px;height:32px;border-radius:50%;border:0;background:var(--soft,#eef2f6);color:inherit;font-size:14px;cursor:pointer}
.dic{font-size:38px;line-height:1;margin-bottom:6px}
.dbx h3{margin:4px 0 6px;font-size:17px}
.dbx p{margin:0 0 12px;color:#64748b;font-size:13.5px;white-space:pre-line;unicode-bidi:plaintext}
.din{width:100%;margin:4px 0 12px;text-align:center;font-size:17px}
.dbt{display:grid;gap:8px}.dbt .btn{margin:0}
#rvt:empty{display:none}
.nm{direction:ltr;unicode-bidi:isolate;display:inline-block}
.rtb{margin:0 0 14px;border:1px solid rgba(148,163,184,.35);border-radius:12px;overflow-x:auto}
.rtb table{width:100%;border-collapse:collapse;font-size:12.5px}
.rtb th{background:var(--p);color:#fff;font-weight:700;font-size:11.5px;padding:10px;white-space:nowrap;border:0;unicode-bidi:isolate}
.rtb th.t{text-align:right}
.rtb th.n,.rtb td.n{text-align:left;white-space:nowrap}
.rtb th.c,.rtb td.c{text-align:center;white-space:nowrap}
.rtb td{padding:9px 10px;border-top:1px solid rgba(148,163,184,.22);vertical-align:middle;unicode-bidi:isolate}
.rtb td b,.rtb td small{unicode-bidi:isolate}
.rtb td small{display:block;font-size:10.5px;color:#94a3b8;font-weight:400;margin-top:2px}
.rtb td.n small{text-align:left}
.rtb tbody tr:nth-child(even) td{background:rgba(148,163,184,.08)}
.rtb tfoot td{font-weight:800;background:rgba(148,163,184,.14)}
.rtb tr.clk{cursor:pointer}.rtb tr.clk:active td{background:rgba(148,163,184,.22)}
.rtb .inc{color:#16a34a}.rtb .exp{color:#dc2626}.rtb .wrn{color:#ea580c}
.rb{display:inline-block;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;background:#f1f5f9;color:#475569}
.rb.ok{background:#dcfce7;color:#15803d}.rb.wait{background:#ffedd5;color:#c2410c}.rb.late{background:#fee2e2;color:#b91c1c}
.rp{direction:rtl;color:#0f172a;font-size:13px;line-height:1.5}
.rp .rh{background:var(--p);background:linear-gradient(135deg,var(--p),color-mix(in srgb,var(--p) 65%,#000));color:#fff;border-radius:16px;padding:16px 16px 14px;display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:14px;box-shadow:0 6px 18px rgba(15,23,42,.12)}
.rp .rh .ap{font-size:11px;opacity:.85;font-weight:600}
.rp .rh .tt{font-size:19px;font-weight:800;margin:2px 0 4px}
.rp .rh .st{font-size:12px;opacity:.92}
.rp .rh .dt{font-size:10.5px;text-align:center;background:rgba(255,255,255,.16);border-radius:10px;padding:6px 10px;white-space:nowrap}
.rp .rh .dt b{display:block;font-size:13px;margin-top:2px}
.rp .rk{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:8px;margin:0 0 14px}
.rp .rk>div{background:#fff;border:1px solid #e5e9f0;border-top:4px solid var(--kc);border-radius:12px;padding:10px 12px;box-shadow:0 1px 3px rgba(15,23,42,.05)}
.rp .rk span{display:block;font-size:11px;color:#64748b;font-weight:600}
.rp .rk b{display:block;font-size:16px;font-weight:800;color:var(--kc);margin-top:4px;white-space:nowrap}
.rp .rk b .nm{color:var(--kc)}
.rp .rk .cu{font-style:normal;font-size:11px;font-weight:700;opacity:.85}
.rp .rs{display:flex;align-items:center;gap:8px;margin:20px 0 8px;font-weight:800;font-size:14.5px;color:#0f172a}
.rp .rs::before{content:'';width:4px;height:18px;border-radius:4px;background:var(--p);flex:0 0 4px}
.rp .rs em{font-style:normal;margin-inline-start:auto;font-size:11.5px;font-weight:700;background:#f1f5f9;color:#334155;border-radius:20px;padding:3px 10px}
.rp .rs2{display:flex;align-items:center;gap:8px;margin:12px 0 6px;font-weight:700;font-size:13px;color:#334155;padding:7px 12px;background:#f1f5f9;border-radius:10px}
.rp .rs2 em{font-style:normal;margin-inline-start:auto;font-size:12px;font-weight:800}
.rp .rc{display:flex;align-items:center;gap:14px;flex-wrap:wrap;background:#fff;border:1px solid #e5e9f0;border-radius:14px;padding:12px;margin:0 0 12px;box-shadow:0 1px 3px rgba(15,23,42,.05)}
.rp .rc svg{width:130px;height:130px;flex:0 0 130px;margin:auto}
.rp .lg{flex:1;min-width:160px}
.rp .lr{display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px dashed #e5e9f0;font-size:12px}
.rp .lr:last-child{border-bottom:0}
.rp .lr i{width:10px;height:10px;border-radius:3px;flex:0 0 10px}
.rp .lr span{flex:1;font-weight:600;text-align:right}
.rp .lr em{font-style:normal;color:#334155}
.rp .lr b{min-width:40px;text-align:left;color:#64748b;font-size:11.5px}
.rp .rtb{background:#fff;border:1px solid #e5e9f0;border-radius:14px;box-shadow:0 1px 3px rgba(15,23,42,.05)}
.rp .rtb td{border-top:1px solid #eef2f6;color:#0f172a}
.rp .rtb tbody tr:nth-child(even) td{background:#f8fafc}
.rp .rtb tfoot td{background:#f1f5f9;border-top:2px solid var(--p)}
.rp .rf{margin-top:22px;padding-top:10px;border-top:1px solid #e5e9f0;text-align:center;font-size:11px;color:#64748b}
.rp .pnote{text-align:center;color:#94a3b8;padding:14px;background:#f8fafc;border-radius:12px;margin:0 0 12px}
.rfl{background:#fff;border:1px solid #e5e9f0;border-radius:14px;padding:10px 12px;margin:0 0 14px;box-shadow:0 1px 3px rgba(15,23,42,.05)}
.rft{display:flex;align-items:center;gap:8px;width:100%;border:0;background:transparent;font:inherit;color:#0f172a;cursor:pointer;padding:2px 0}
.rft span{display:flex;align-items:center;gap:6px;font-weight:800;font-size:13px;white-space:nowrap}
.rft em{flex:1;min-width:0;font-style:normal;font-size:11.5px;color:#64748b;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.rft b{color:#64748b;font-size:11px}
.rfb{margin-top:10px;padding-top:10px;border-top:1px solid #eef2f6}
.rfl .rfg{margin-bottom:12px}.rfl .rfg:last-child{margin-bottom:0}
.rfl .rfg>small{display:block;font-size:11px;color:#64748b;font-weight:700;margin-bottom:6px}
.rfl .rchs{display:flex;gap:6px;flex-wrap:wrap;max-height:150px;overflow:auto}
.rfl input{background:#f8fafc!important;color:#0f172a!important;border:1px solid #e2e8f0!important}
.rfq{width:100%;margin:0 0 8px!important;font-size:13px!important;padding:8px 10px!important;border-radius:10px!important}
.rch{border:1px solid #e2e8f0;background:#f8fafc;color:#334155;border-radius:20px;padding:5px 12px;font:inherit;font-size:12px;cursor:pointer;white-space:nowrap;display:inline-flex;align-items:center;gap:6px}
.rch bdi{unicode-bidi:isolate}
.rch.on{background:var(--p);border-color:var(--p);color:#fff;font-weight:700}
.rch .dot{display:inline-block;width:7px;height:7px;border-radius:50%;flex:0 0 7px}
.rch.on .dot{background:#fff!important}
.rfs{display:flex;align-items:center;justify-content:space-between;gap:8px}
.rfs button{width:42px;height:36px;border-radius:10px;border:1px solid #e2e8f0;background:#f8fafc;font-size:16px;cursor:pointer;color:#334155}
.rfs b{font-size:15px;color:#0f172a}
.rfd{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px}
.rfd.one{grid-template-columns:1fr}
.rfd label{font-size:11px;color:#64748b;margin:0}.rfd input{width:100%;margin-top:3px}
@media print{.noprint{display:none!important}}
#pwv{position:fixed;inset:0;z-index:2000;display:flex;flex-direction:column}
#pwv .pwh{display:flex;align-items:center;gap:10px;padding:12px 14px;padding-top:calc(12px + env(safe-area-inset-top));background:var(--p);background:linear-gradient(135deg,var(--p),color-mix(in srgb,var(--p) 65%,#000));color:#fff;box-shadow:0 4px 14px rgba(0,0,0,.15)}
#pwv .pwt{flex:1}#pwv .pwt b{display:block;font-size:17px}#pwv .pwt small{opacity:.85;font-size:11.5px}
#pwv .pwi{width:38px;height:38px;border-radius:12px;border:0;background:rgba(255,255,255,.18);color:#fff;font-size:17px;cursor:pointer;flex:0 0 auto;display:flex;align-items:center;justify-content:center;text-decoration:none}
#pwv .pwi.s{background:var(--soft,#eef2f6);color:inherit;width:36px;height:36px;font-size:15px}
#pwv .pwb{flex:1;overflow:auto;padding:14px;padding-bottom:40px}
#pwv .pwc{background:var(--card,#fff);border-radius:16px;padding:16px;margin-bottom:12px;box-shadow:0 2px 10px rgba(15,23,42,.06)}
#pwv label{display:block}
#pwv textarea{display:block;width:100%;box-sizing:border-box;min-height:84px;margin-top:6px;padding:10px 12px;border-radius:12px;border:1px solid var(--line,rgba(148,163,184,.4));background:transparent;color:inherit;font:inherit;resize:vertical}
#pwv .pwhero{text-align:center}#pwv .pwbig{font-size:52px;line-height:1.2}
#pwv .pwhero input{width:100%;margin:10px 0;text-align:center;font-size:17px}
#pwv .pwsr input{width:100%;margin:0 0 10px}
#pwv .pwr{display:flex;align-items:center;gap:10px;background:var(--card,#fff);border-radius:14px;padding:12px;margin-bottom:8px;box-shadow:0 1px 4px rgba(15,23,42,.06);cursor:pointer}
#pwv .pwav{width:42px;height:42px;border-radius:12px;color:#fff;font-weight:800;font-size:18px;display:flex;align-items:center;justify-content:center;flex:0 0 42px}
#pwv .pwav.big{width:56px;height:56px;font-size:24px;flex-basis:56px;border-radius:16px}
#pwv .pwr b{display:block;unicode-bidi:plaintext;text-align:start}#pwv .pwr small{color:#94a3b8;display:block;unicode-bidi:plaintext;text-align:start}
#pwv .pwchips{display:flex;gap:6px;overflow-x:auto;padding-bottom:8px;margin-bottom:6px}
#pwv .pwchips.wrap{flex-wrap:wrap;overflow:visible}
#pwv .pwchips button{white-space:nowrap;border:1px solid var(--line,#e2e8f0);background:var(--card,#fff);color:inherit;border-radius:20px;padding:6px 12px;font:inherit;font-size:12.5px;cursor:pointer}
#pwv .pwchips button.on{background:var(--p);color:#fff;border-color:var(--p);font-weight:700}
#pwv .pwf{display:flex;align-items:center;gap:8px;padding:12px 0;border-bottom:1px solid var(--line,#eef2f6)}
#pwv .pwf span{font-size:11.5px;color:#94a3b8;display:block;margin-bottom:2px}
#pwv .pwf b{display:block;font-size:15px;word-break:break-all;unicode-bidi:plaintext;text-align:start}
#pwv .mono{font-family:ui-monospace,Menlo,Consolas,monospace;letter-spacing:.5px}
#pwv .pwst{height:6px;border-radius:6px;background:#e2e8f0;overflow:hidden;margin:8px 0 3px}
#pwv .pwst i{display:block;height:100%;border-radius:6px;transition:width .2s}
#pwv .pwact{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}
#pwv .pwact .btn{margin:0;padding-left:4px;padding-right:4px}
#pwv .pwvh{display:flex;align-items:center;gap:12px;margin-bottom:6px}
.sec small{font-weight:400;color:#94a3b8;font-size:12px;margin-inline-start:6px}
input[dir=auto],textarea[dir=auto]{unicode-bidi:plaintext;text-align:start}
b,strong,small,h2,h3,.muted,.kv b,td{unicode-bidi:plaintext}`;document.head.appendChild(s)})();
/* اتجاه الكتابة: العربي من اليمين والإنجليزي من الشمال */
(()=>{
  const fix=()=>document.querySelectorAll('input:not([dir]),textarea:not([dir])').forEach(el=>{const t=(el.getAttribute('type')||'text').toLowerCase();if(el.tagName==='TEXTAREA'||['text','search','email','url'].includes(t))el.setAttribute('dir','auto')});
  let q=false;new MutationObserver(()=>{if(q)return;q=true;requestAnimationFrame(()=>{q=false;fix()})}).observe(document.documentElement,{childList:true,subtree:true});fix();
})();

/* ========== الرسايل: كلها فيها ✕ للقفل ========== */
/* الرسالة بتتقفل بـ ✕ أو بزرار الإلغاء بس.
   لما تدوس ✕ بترجع null، يعني العملية اتلغت ومحدش اختار حاجة */
function dlg(o){
  return new Promise(res=>{
    const ov=document.createElement('div');ov.className='dlg';
    const inType=o.pw?'type="password" dir="ltr" autocomplete="current-password"':o.num?'inputmode="decimal" dir="ltr"':'dir="auto"';
    ov.innerHTML=`<div class="dbx"><button type="button" class="dx" aria-label="close">✕</button>${o.icon?`<div class="dic">${o.icon}</div>`:''}<h3>${esc(o.title||'')}</h3>${o.msg?`<p>${esc(o.msg)}</p>`:''}${o.input?`<input class="din" ${inType} value="${esc(o.val||'')}">`:''}<div class="dbt"><button type="button" class="btn ${o.danger?'danger':''}" data-r="ok">${esc(o.ok||'تمام')}</button>${o.cancel?`<button type="button" class="btn ghost" data-r="no">${esc(o.cancel)}</button>`:''}</div></div>`;
    document.body.appendChild(ov);
    const inp=ov.querySelector('.din');
    const kd=e=>{if(e.key==='Escape'){e.stopPropagation();done(null)}else if(e.key==='Enter'&&inp){e.preventDefault();done(inp.value)}};
    const done=v=>{if(!ov.isConnected)return;ov.remove();document.removeEventListener('keydown',kd,true);res(v)};
    document.addEventListener('keydown',kd,true);
    ov.querySelector('.dx').onclick=()=>done(null);
    ov.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>done(b.dataset.r==='ok'?(inp?inp.value:true):(inp?null:false)));
    if(inp)setTimeout(()=>{inp.focus();inp.select()},60);
  });
}
/* أي رسالة فيها حاجة زيادة (زي خانة كتابة) بتتعرض بالطريقة القديمة بتاعة app.js */
const ASK0=typeof ask==='function'?ask:null;
try{ask=function(title,msg,o){o=o||{};if(ASK0&&Object.keys(o).some(k=>!['icon','ok','cancel','danger'].includes(k)))return ASK0.apply(this,arguments);return dlg({title,msg,icon:o.icon||'❓',ok:o.ok||'تمام',cancel:o.cancel===undefined?'إلغاء':o.cancel,danger:o.danger})}}catch(e){}
try{say=function(title,msg,icon){return dlg({title,msg,icon:icon||'ℹ️',ok:'تمام'}).then(()=>{})}}catch(e){}
/* خانة كتابة (المبلغ وأسماء الزراير): ليها رسالتها لوحدها ومبتعتمدش على أي حاجة تانية */
const askIn=(title,msg,val,num,ok)=>dlg({title,msg,icon:num?'💰':'✏️',input:true,val,num,ok:ok||'حفظ',cancel:'إلغاء'});

/* ========== أدوات عامة ========== */
const plainT=s=>String(s??'').replace(/<[^>]*>/g,'').replace(/&[#\w]+;/g,' ');
/* للبحث: بيشيل الفواصل من الأرقام وبيحوّل العربي، عشان 13500 تلاقي 13,500 */
const qn=s=>normAr(latD(String(s??''))).toLowerCase().replace(/,/g,'').trim();
/* البند السنوي */
const isA=c=>{try{return !!isAnn(c)}catch(e){return (+c.every||1)>=12}};

/* ========== التقارير: أدوات ========== */
/* كل خانة كلام: اتجاهها حسب أول حرف (إنجليزي شمال، عربي يمين). الأرقام دايماً من الشمال */
const dirOf=s=>{const m=plainT(s).match(/[A-Za-z\u0590-\u08FF]/);return m&&/[A-Za-z]/.test(m[0])?'ltr':'rtl'};
const alOf=d=>d==='ltr'?'left':'right';
const nm=v=>`<span class="nm" dir="ltr">${v}</span>`;
const nmIn=v=>String(v??'').replace(/-?\d[\d,]*(?:\.\d+)?%?/g,m=>nm(m));
function rtbl(head,rows,foot){return `<div class="rtb"><table><thead><tr>${head.map(h=>{const[l,c]=String(h).split('|');return `<th class="${c||'t'}">${l}</th>`}).join('')}</tr></thead><tbody>${rows.join('')}</tbody>${foot?`<tfoot>${foot}</tfoot>`:''}</table></div>`}
const cT=(b,s)=>{const d=dirOf(b),a=alOf(d);return `<td class="t" dir="${d}" style="text-align:${a}"><b>${b}</b>${s?`<small dir="${dirOf(s)}" style="text-align:${a}">${s}</small>`:''}</td>`};
const cN=(v,cls,s)=>`<td class="n"><b class="${cls||''}">${nm(v)}</b>${s?`<small dir="${dirOf(s)}">${s}</small>`:''}</td>`;
const cC=h=>`<td class="c">${h}</td>`;
/* التاريخ في الجداول: بالسنة كاملة (13/10/2026) */
const cD=d=>`<td class="c">${d?nm(dmy(d)):'—'}</td>`;
const fN=v=>`<td class="n">${nm(v)}</td>`,fC=v=>`<td class="c">${nm(v)}</td>`,fE='<td></td>';
const ft=(label,span,...cells)=>`<tr><td class="t" colspan="${span}">${label}</td>${cells.join('')}</tr>`;
const KC={inc:'#16a34a',exp:'#dc2626',net:'var(--p)',warn:'#ea580c'};
/* العملة (ج.م) بتتاخد من إعدادات التطبيق */
let CURC=null;const curL=()=>{if(CURC==null){try{CURC=plainT(fmt(1)).replace(/[\d.,\s\-+\u0660-\u0669\u066B\u066C]/g,'')}catch(e){CURC=''}}return CURC||'ج.م'};
const money=v=>`${nm(sgn(v))} <i class="cu">${esc(curL())}</i>`;
/* كروت الأرقام: المبلغ والعملة في سطر واحد. الرقم بيتكتب كرقم، والكلام بيتكتب زي ما هو */
const rkp=a=>`<div class="rk">${a.map(([l,v,c])=>`<div style="--kc:${KC[c]||'var(--p)'}"><span>${esc(l)}</span><b>${typeof v==='number'?money(v):nmIn(esc(v))}</b></div>`).join('')}</div>`;
const rsec=(t,em)=>`<div class="rs"><span>${t}</span>${em!=null&&em!==''?`<em>${nmIn(em)}</em>`:''}</div>`;
/* الحالة: محصّل / غير محصّل / متأخر */
const stB=(s,d,kind)=>s.st==='done'?`<span class="rb ok">${kind==='exp'?'مدفوع':'محصّل'}</span>`:s.st==='skip'?'<span class="rb">اتلغى</span>':s.st==='wait'?(d<today()?'<span class="rb late">متأخر</span>':`<span class="rb wait">${kind==='exp'?'غير مدفوع':'غير محصّل'}</span>`):'<span class="rb">—</span>';

/* ========== الرسوم ========== */
function catItems(list,kind){
  const g={};list.filter(t=>t.type===kind&&!t.pend).forEach(t=>g[t.cat]=(g[t.cat]||0)+t.amount);
  const e=Object.entries(g).sort((a,b)=>b[1]-a[1]);
  const top=e.slice(0,7).map(([id,v],i)=>({id,label:C(id)?.name||'—',value:v,color:PAL[i]}));
  const rest=e.slice(7).reduce((a,x)=>a+x[1],0);if(rest)top.push({label:'أخرى',value:rest,color:'#94a3b8'});
  return top;
}
/* الرسم البياني الدائري: الدايرة وجنبها قايمة فيها كل بند ومبلغه ونسبته */
const DPAL=['#0f766e','#2563eb','#db2777','#ea580c','#7c3aed','#ca8a04','#0891b2','#16a34a','#dc2626','#64748b','#9333ea','#0d9488'];
function donut(items,label,valText){
  items=items.filter(x=>x.value>0);
  if(!items.some(x=>x.color))items.sort((a,b)=>b.value-a.value);
  if(items.length>7){const rest=items.slice(6).reduce((a,x)=>a+x.value,0);items=items.slice(0,6).concat({label:'أخرى',value:rest,color:'#94a3b8'})}
  const tot=items.reduce((a,x)=>a+x.value,0);if(!(tot>0))return '';
  items.forEach((x,i)=>{if(!x.color)x.color=DPAL[i%DPAL.length]});
  const cx=90,cy=90,R=82,r=54,P=(a,rad)=>(cx+rad*Math.cos(a)).toFixed(2)+' '+(cy+rad*Math.sin(a)).toFixed(2);
  let a0=-Math.PI/2,g='';
  items.forEach(x=>{
    const f=x.value/tot;
    if(f>.9999){g+=`<circle cx="${cx}" cy="${cy}" r="${(R+r)/2}" fill="none" stroke="${x.color}" stroke-width="${R-r}"/>`;return}
    const a1=a0+f*2*Math.PI,lg=f>.5?1:0;
    g+=`<path d="M${P(a0,R)}A${R} ${R} 0 ${lg} 1 ${P(a1,R)}L${P(a1,r)}A${r} ${r} 0 ${lg} 0 ${P(a0,r)}Z" fill="${x.color}" stroke="#fff" stroke-width="2"/>`;a0=a1;
  });
  return `<div class="rc"><svg viewBox="0 0 180 180">${g}<text x="90" y="92" text-anchor="middle" font-size="22" font-weight="800" fill="#0f172a" style="direction:ltr">${esc(valText!=null?valText:short(tot))}</text><text x="90" y="112" text-anchor="middle" font-size="11" fill="#64748b">${esc(label||'الإجمالي')}</text></svg>
  <div class="lg">${items.map(x=>`<div class="lr"><i style="background:${x.color}"></i><span><bdi>${esc(x.label)}</bdi></span><em>${nm(num(x.value))}</em><b>${nm(Math.round(x.value/tot*100)+'%')}</b></div>`).join('')}</div></div>`;
}
const ioPie=s=>donut([{label:L('inc'),value:s.inc,color:'#16a34a'},{label:L('exp'),value:s.exp,color:'#dc2626'}],L('net'),(s.net<0?'-':'')+short(Math.abs(s.net)));

/* ========== التقارير: الفلتر جوه التقرير ========== */
/* الفلتر مقفول، وفوقه سطر بيقولك اختيارك الحالي. تدوس عليه يفتح.
   كل اختيار بيحدّث التقرير على طول، ومبيظهرش في الطباعة والمشاركة */
var RFOPEN=false;
const rvUp=()=>openRV(true);
const chip=(on,lbl,click,cls)=>`<button type="button" class="rch ${on?'on':''}" onclick="${click}">${cls?`<span class="dot" style="background:${cls==='i'?'#16a34a':'#dc2626'}"></span>`:''}<bdi>${lbl}</bdi></button>`;
const rfBox=(sum,...g)=>`<div class="rfl noprint"><button type="button" class="rft" onclick="RFOPEN=!RFOPEN;rvUp()"><span>${FIC} فلتر</span><em><bdi>${esc(sum||'')}</bdi></em><b>${RFOPEN?'▲':'▼'}</b></button>${RFOPEN?`<div class="rfb">${g.join('')}</div>`:''}</div>`;
const rfStep=h=>`<div class="rfl noprint">${h}</div>`;
const rfG=(lbl,chips,extra,search)=>`<div class="rfg"><small>${lbl}</small>${search?`<input class="rfq" placeholder="🔍 دوّر على بند..." oninput="rfFilt(this)">`:''}<div class="rchs">${chips}</div>${extra||''}</div>`;
function rfFilt(el){const q=qn(el.value);el.parentElement.querySelectorAll('.rch').forEach(c=>c.style.display=!q||qn(c.textContent).includes(q)?'':'none')}
const rfDates=(a,b,type)=>`<div class="rfd"><label>من<input type="${type}" value="${RF[a]||''}" onchange="RF.${a}=this.value;rvUp()"></label><label>إلى<input type="${type}" value="${RF[b]||''}" onchange="RF.${b}=this.value;rvUp()"></label></div>`;
function rfMonth(d){RF.month=addMonths(RF.month+'-01',d).slice(0,7);rvUp()}
function rfYear(d){RF.year=(+RF.year||NY)+d;rvUp()}
/* المقارنة بشهور محددة: تضيف أي شهر أو تشيله */
function rfAddM(v){if(!v)return;RF.cms=[...new Set([...(RF.cms||[]),v])].sort();rvUp()}
function rfDelM(k){RF.cms=(RF.cms||[]).filter(x=>x!==k);rvUp()}
const monthSel=()=>rfStep(`<div class="rfs"><button type="button" onclick="rfMonth(-1)">→</button><b>${esc(mName(RF.month))}</b><button type="button" onclick="rfMonth(1)">←</button></div>`);
const yearSel=()=>rfStep(`<div class="rfs"><button type="button" onclick="rfYear(-1)">→</button><b>سنة ${nm(RF.year)}</b><button type="button" onclick="rfYear(1)">←</button></div>`);
function yearsList(){const ys=new Set([NY,NY-1,NY-2]);S.txs.forEach(t=>ys.add(+t.date.slice(0,4)));S.cash.forEach(c=>ys.add(+c.date.slice(0,4)));return [...ys].sort((a,b)=>b-a)}
function catOpts(sel,type){
  const g=(k,lab)=>`<optgroup label="${esc(lab)}">${S.cats.filter(c=>c.kind===k).map(c=>`<option value="${c.id}" ${c.id===sel?'selected':''}>${esc(c.name)}</option>`).join('')}</optgroup>`;
  return (type==='exp'?'':g('inc',L('inc')))+(type==='inc'?'':g('exp',L('exp')));
}
const perLbl=()=>(PERIODS.find(p=>p[0]===RF.period)||['',''])[1];
function fStmt(){
  if(RF.period==='custom'&&!RF.from){RF.from=NKM+'-01';RF.to=today()}
  const cats=S.cats.filter(c=>RF.type==='all'||c.kind===RF.type);
  const sum=[RF.type==='all'?'':RF.type==='exp'?L('exp'):L('inc'),RF.cat?C(RF.cat)?.name:'كل البنود',RF.method?M(RF.method)?.name:'',perLbl()].filter(Boolean).join(' · ');
  return rfBox(sum,
    rfG('النوع',[['all','الكل'],['inc',L('inc')],['exp',L('exp')]].map(([k,l])=>chip(RF.type===k,esc(l),`RF.type='${k}';RF.cat='';rvUp()`)).join('')),
    rfG('البند',chip(!RF.cat,'كل البنود',`RF.cat='';rvUp()`)+cats.map(c=>chip(RF.cat===c.id,esc(c.name),`RF.cat='${c.id}';rvUp()`,c.kind==='inc'?'i':'e')).join(''),'',true),
    rfG('الحساب',chip(!RF.method,'الكل',`RF.method='';rvUp()`)+S.methods.map(m=>chip(RF.method===m.id,esc(m.name),`RF.method='${m.id}';rvUp()`)).join('')),
    rfG('الفترة',PERIODS.map(([k,l])=>chip(RF.period===k,l,`RF.period='${k}';rvUp()`)).join(''),RF.period==='custom'?rfDates('from','to','date'):'')
  );
}
const CMPR=()=>[['3','آخر 3 شهور'],['6','آخر 6 شهور'],['12','آخر 12 شهر']].concat(yearsList().map(y=>['y:'+y,'سنة '+y])).concat([['c','📅 من شهر لشهر'],['p','🔀 شهور محددة']]);
function fCmp(){
  if(RF.crange==='c'){RF.cf=RF.cf||prevKey(NKM);RF.ct=RF.ct||NKM}
  if(RF.crange==='p'&&!(RF.cms&&RF.cms.length))RF.cms=[prevKey(NKM),NKM];
  const it=c=>chip(RF.ccat===c.id,esc(c.name),`RF.ccat='${c.id}';rvUp()`,c.kind==='inc'?'i':'e');
  const extra=RF.crange==='c'?rfDates('cf','ct','month')
    :RF.crange==='p'?`<div class="rchs" style="margin-top:8px">${(RF.cms||[]).slice().sort().map(k=>chip(true,esc(mName(k))+' ✕',`rfDelM('${k}')`)).join('')}</div><div class="rfd one"><label>➕ ضيف شهر<input type="month" onchange="rfAddM(this.value)"></label></div>`:'';
  const nmc=RF.ccat==='ALL_EXP'?'كل '+L('exp'):RF.ccat==='ALL_INC'?'كل '+L('inc'):(C(RF.ccat)?.name||'');
  const sum=[nmc,(CMPR().find(x=>x[0]===RF.crange)||['',''])[1]].filter(Boolean).join(' · ');
  return rfBox(sum,
    rfG('البند',chip(RF.ccat==='ALL_EXP','كل '+esc(L('exp')),`RF.ccat='ALL_EXP';rvUp()`,'e')+chip(RF.ccat==='ALL_INC','كل '+esc(L('inc')),`RF.ccat='ALL_INC';rvUp()`,'i')+S.cats.filter(c=>c.kind==='exp').map(it).join('')+S.cats.filter(c=>c.kind==='inc').map(it).join(''),'',true),
    rfG('الفترة',CMPR().map(([v,l])=>chip(RF.crange===v,l,`RF.crange='${v}';rvUp()`)).join(''),extra)
  );
}
const fInst=()=>rfBox(RF.plan?(S.plans.find(p=>p.id===RF.plan)||{}).name:'كل الأقساط',rfG('القسط',chip(!RF.plan,'كل الأقساط',`RF.plan='';rvUp()`)+S.plans.map(p=>chip(RF.plan===p.id,esc(p.name),`RF.plan='${p.id}';rvUp()`)).join('')));
function periodRange(){
  const p=RF.period;
  if(p==='m')return mRange(NKM);
  if(p==='pm')return mRange(prevKey(NKM));
  if(p==='y')return[NY+'-01-01',NY+'-12-31'];
  if(p==='py')return[(NY-1)+'-01-01',(NY-1)+'-12-31'];
  if(p==='all')return['2000-01-01','2100-12-31'];
  return[RF.from||NKM+'-01',RF.to||today()];
}

/* ========== التقارير: البناء ========== */
const NONE='<p class="pnote">لا يوجد</p>';
const sgn=n=>n<0?'-'+num(-n):num(n);
function paper(title,sub,body,fl){
  const subH=esc(sub||'').split(' · ').filter(Boolean).map(p=>`<bdi>${p.replace(/\d{1,2}\/\d{1,2}\/\d{2,4}/g,m=>nm(m))}</bdi>`).join(' · ');
  return `<div class="rp"><div class="rh"><div><div class="ap"><bdi>${esc(appName())}</bdi></div><div class="tt">${esc(title)}</div><div class="st">${subH}</div></div><div class="dt">تاريخ التقرير<b>${nm(dmy(today()))}</b></div></div>${fl||''}${body}
  <div class="rf"><bdi>${DEV.name}</bdi> · <bdi>${DEV.company}</bdi><br>${nm(DEV.phones.join(' - '))}</div></div>`;
}
const dS=(from,to,cat,type,method)=>`dOps('${from}','${to}','${cat||''}','${type||''}','${method||''}')`;
function dOps(from,to,cat,type,method){drill(()=>{rtab='ops';RF.period='custom';RF.from=from;RF.to=to;RF.cat=cat||'';RF.type=type||(cat?(C(cat)?.kind||'all'):'all');RF.method=method||''})}
function dMonth(k){drill(()=>{rtab='month';RF.month=k})}
function stmtRows(){
  const[from,to]=periodRange();
  return{from,to,rows:S.txs.filter(t=>!t.pend&&t.type!=='tr'&&t.date>=from&&t.date<=to&&(RF.type==='all'||t.type===RF.type)&&(!RF.cat||t.cat===RF.cat)&&(!RF.method||t.method===RF.method)).sort(byAsc)};
}
function stmtSub(from,to){return [RF.period==='all'?'كل الفترات':`من ${dmy(from)} إلى ${dmy(to)}`,RF.type==='all'?'':RF.type==='exp'?L('exp'):L('inc'),RF.cat?C(RF.cat)?.name:'',RF.method?M(RF.method)?.name:''].filter(Boolean).join(' · ')}
const kpAll=s=>rkp([[L('inc'),s.inc,'inc'],[L('exp'),s.exp,'exp'],[L('net'),s.net,s.net<0?'exp':'inc']]);
const kp3=(s,n)=>RF.type==='inc'?rkp([[L('inc'),s.inc,'inc'],['عدد العمليات',String(n),'net']]):RF.type==='exp'?rkp([[L('exp'),s.exp,'exp'],['عدد العمليات',String(n),'net']]):kpAll(s);
/* البنود: الدايرة، وجدول فيه البند وعدد العمليات والمبلغ والنسبة */
function catTable(list,kind,click,nopie){
  const g={};list.filter(t=>t.type===kind&&!t.pend).forEach(t=>{g[t.cat]=g[t.cat]||{n:0,v:0};g[t.cat].n++;g[t.cat].v+=t.amount});
  const e=Object.entries(g).sort((a,b)=>b[1].v-a[1].v),tot=e.reduce((a,x)=>a+x[1].v,0),n=e.reduce((a,x)=>a+x[1].n,0);
  if(!e.length)return NONE;
  const pie=!nopie&&e.length>1?donut(e.map(([id,x])=>({label:C(id)?.name||'—',value:x.v})),kind==='inc'?L('inc'):L('exp')):'';
  return pie+rtbl(['البند','العمليات|c','المبلغ|n','النسبة|n'],e.map(([id,x])=>`<tr class="${click?'clk':''}" ${click?`onclick="${click(id)}"`:''}>${cT(esc(C(id)?.name||'—'))}${cC(nm(x.n))}${cN(num(x.v),kind)}${cN(Math.round(x.v/tot*100)+'%')}</tr>`),
    e.length>1?ft('الإجمالي',1,fC(n),fN(num(tot)),fN('100%')):'');
}
function bStmt(){
  const{from,to,rows}=stmtRows(),s=sums(rows);
  let b=kp3(s,rows.length);
  if(RF.type!=='exp')b+=rsec('💰 '+esc(L('inc')),num(s.inc))+catTable(rows,'inc',id=>dS(from,to,id));
  if(RF.type!=='inc')b+=rsec('💸 '+esc(L('exp')),num(s.exp))+catTable(rows,'exp',id=>dS(from,to,id));
  const g={};rows.forEach(t=>{g[t.cat]=g[t.cat]||{n:0,v:0,type:t.type};g[t.cat].n++;g[t.cat].v+=t.amount});
  return{title:'كشف حساب حسب البند',sub:stmtSub(from,to),body:b,csv:{head:['البند','النوع','عدد العمليات','الإجمالي'],rows:Object.entries(g).map(([id,x])=>[C(id)?.name||'',x.type==='exp'?L('expOne'):L('incOne'),x.n,x.v])}};
}
function bOps(){
  const{from,to,rows}=stmtRows(),s=sums(rows);
  const inc=rows.filter(t=>t.type==='inc'),exp=rows.filter(t=>t.type==='exp');
  const row=t=>`<tr class="clk" onclick="editTx('${t.id}')">${cD(t.date)}${cT(esc(C(t.cat)?.name||'—'),[M(t.method)?.name,viaTxt(t.via)].filter(Boolean).map(esc).join(' · ')+((t.files||[]).length?' · 📎':''))}${cN(num(t.amount),t.type)}</tr>`;
  const part=(l,v)=>l.length?rtbl(['التاريخ|c','البند','المبلغ|n'],l.map(row),l.length>1?ft('الإجمالي',2,fN(num(v))):''):NONE;
  let b=kp3(s,rows.length);
  b+=RF.type==='all'?ioPie(s):donut(catItems(rows,RF.type).map(x=>({label:x.label,value:x.value})),RF.type==='inc'?L('inc'):L('exp'));
  if(RF.type!=='exp')b+=rsec('💰 '+esc(L('inc')),inc.length+' عملية')+part(inc,s.inc);
  if(RF.type!=='inc')b+=rsec('💸 '+esc(L('exp')),exp.length+' عملية')+part(exp,s.exp);
  return{title:'تفاصيل العمليات',sub:stmtSub(from,to),body:b,csv:{head:['التاريخ','النوع','البند','الحساب','الطريقة','المبلغ','ملاحظات'],rows:inc.concat(exp).map(t=>[dmy(t.date),t.type==='exp'?L('expOne'):L('incOne'),C(t.cat)?.name||'',M(t.method)?.name||'',viaTxt(t.via),t.type==='exp'?-t.amount:t.amount,t.note||''])}};
}
function pmTable(list,f,t){
  const pm=pmStats(list).filter(x=>x.i||x.o);if(!pm.length)return NONE;
  return rtbl(['الحساب','العمليات|c','قبضت|n','صرفت|n'],pm.map(x=>`<tr class="clk" onclick="${dS(f,t,'','',x.m.id)}">${cT(esc(x.m.name))}${cC(nm(x.n))}${cN(x.i?num(x.i):'—','inc')}${cN(x.o?num(x.o):'—','exp')}</tr>`));
}
/* التقرير الشهري:
   التحصيلات: ثابت شهري ← غير ثابت ← سنوي ← إجمالي التحصيلات
   المصروفات: ثابت ← متغير ← إجمالي المصروفات
   وفي الآخر: إجمالي التحصيلات ناقص إجمالي المصروفات = الناتج */
const INCG={fix:['📌 ثابت شهري','ثابت شهري','#0f766e'],var:['💵 غير ثابت','غير ثابت','#ca8a04'],ann:['📄 سنوي','سنوي','#2563eb']};
const EXPG={fix:['📌 مصروف ثابت','مصروف ثابت','#dc2626'],var:['🛒 مصروف متغير','مصروف متغير','#ea580c']};
const incGrp=t=>{const c=C(t.cat);return c&&c.fixed?(isA(c)?'ann':'fix'):'var'};
const expGrp=t=>{const c=C(t.cat);return c&&c.fixed?'fix':'var'};
const gsum=l=>l.reduce((a,y)=>a+y.amount,0);
function grpBlock(list,kind,G,fn,click){
  const gs=Object.keys(G).map(g=>({g,l:list.filter(x=>x.type===kind&&!x.pend&&fn(x)===g)})),used=gs.filter(x=>x.l.length);
  let b='';
  if(used.length>1)b+=donut(used.map(x=>({label:G[x.g][1],value:gsum(x.l),color:G[x.g][2]})),kind==='inc'?L('inc'):L('exp'));
  if(!used.length)b+=NONE;
  used.forEach(x=>{b+=`<div class="rs2">${G[x.g][0]}<em>${nm(num(gsum(x.l)))}</em></div>`+catTable(x.l,kind,click,true)});
  const tot=gs.reduce((a,x)=>a+gsum(x.l),0);
  b+=`<div class="rs2">🧾 إجمالي ${esc(kind==='inc'?L('inc'):L('exp'))}</div>`+rtbl(['البيان','المبلغ|n'],gs.map(x=>`<tr>${cT(G[x.g][1])}${cN(num(gsum(x.l)),kind)}</tr>`),ft('الإجمالي',1,fN(num(tot))));
  return b;
}
function bMonth(){
  const k=RF.month,list=keyTx(k),s=sums(list),[f,t]=mRange(k),cl=cashOf(k).sort((a,c)=>a.date.localeCompare(c.date)),ct=cl.reduce((a,c)=>a+c.amount,0);
  const ti=list.filter(x=>x.type==='inc'&&!x.pend).reduce((a,x)=>a+x.amount,0),te=list.filter(x=>x.type==='exp'&&!x.pend).reduce((a,x)=>a+x.amount,0),net=ti-te;
  let b=kpAll(s)+ioPie(s);
  b+=rsec('💰 '+esc(L('inc')),num(ti))+grpBlock(list,'inc',INCG,incGrp,id=>dS(f,t,id));
  b+=rsec('💸 '+esc(L('exp')),num(te))+grpBlock(list,'exp',EXPG,expGrp,id=>dS(f,t,id));
  b+=rsec('🧮 الناتج')+rtbl(['البيان','المبلغ|n'],[`<tr>${cT('إجمالي '+esc(L('inc')))}${cN(num(ti),'inc')}</tr>`,`<tr>${cT('إجمالي '+esc(L('exp')))}${cN('-'+num(te),'exp')}</tr>`],
    `<tr><td class="t">${esc(L('net'))}</td><td class="n"><b class="${net<0?'exp':'inc'}">${nm(sgn(net))}</b></td></tr>`);
  if(pmStats(list).some(x=>x.i||x.o))b+=rsec('🏦 '+esc(L('pm')))+pmTable(list,f,t);
  if(cl.length)b+=rsec('🏧 '+esc(L('cash')),num(ct))+rtbl(['التاريخ|c','الحساب','المبلغ|n'],cl.map(c=>`<tr>${cD(c.date)}${cT(esc(M(c.method)?.name||'—'),esc(c.note||''))}${cN(num(c.amount))}</tr>`),cl.length>1?ft('الإجمالي',2,fN(num(ct))):'');
  return{title:'تقرير شهري',sub:mName(k)+(S.closed[k]?' · 🔒 مقفول':''),body:b};
}
function bYear(){
  const y=RF.year,ks=MONTHS.map((n,i)=>ym(y,i+1)),data=ks.map(k=>sums(keyTx(k))),yl=S.txs.filter(t=>!t.pend&&t.date.startsWith(y+'-')),s=sums(yl);
  let b=kpAll(s)+ioPie(s);
  const rows=data.map((d,i)=>[d,i]).filter(([d])=>d.inc||d.exp).map(([d,i])=>`<tr class="clk" onclick="dMonth('${ks[i]}')">${cT(MONTHS[i])}${cN(num(d.inc),'inc')}${cN(num(d.exp),'exp')}${cN(sgn(d.net),d.net<0?'exp':'inc')}</tr>`);
  b+=rsec('📅 شهر بشهر')+(rows.length?rtbl(['الشهر',esc(L('inc'))+'|n',esc(L('exp'))+'|n',esc(L('net'))+'|n'],rows,rows.length>1?ft('الإجمالي',1,fN(num(s.inc)),fN(num(s.exp)),fN(sgn(s.net))):''):NONE);
  b+=rsec('💰 '+esc(L('inc')),num(s.inc))+catTable(yl,'inc',id=>dS(y+'-01-01',y+'-12-31',id));
  b+=rsec('💸 '+esc(L('exp')),num(s.exp))+catTable(yl,'exp',id=>dS(y+'-01-01',y+'-12-31',id));
  return{title:'تقرير سنوي',sub:'سنة '+y,body:b};
}
function bCmp(){
  let ks=[];
  if(RF.crange==='p'){ks=[...new Set(RF.cms||[])].sort()}
  else if(RF.crange==='c'){
    let a=RF.cf||prevKey(NKM),z=RF.ct||NKM;if(a>z)[a,z]=[z,a];
    let k=a,n=0;while(k<=z&&n<36){ks.push(k);k=addMonths(k+'-01',1).slice(0,7);n++}
  }else if(RF.crange.startsWith('y:')){const y=+RF.crange.slice(2);for(let i=1;i<=12;i++)ks.push(ym(y,i))}
  else{const n=+RF.crange||6;for(let i=n-1;i>=0;i--){const d=new Date(NY,NM-1-i,1);ks.push(ym(d.getFullYear(),d.getMonth()+1))}}
  if(!ks.length)ks=[NKM];
  const cc=RF.ccat,kind=cc==='ALL_INC'?'inc':cc==='ALL_EXP'?'exp':(C(cc)?.kind||'exp');
  const name=cc==='ALL_EXP'?'كل '+L('exp'):cc==='ALL_INC'?'كل '+L('inc'):(C(cc)?.name||'—');
  const match=t=>cc==='ALL_EXP'?t.type==='exp':cc==='ALL_INC'?t.type==='inc':t.cat===cc;
  const vals=ks.map(k=>keyTx(k).filter(match).reduce((a,t)=>a+t.amount,0));
  const tot=vals.reduce((a,b)=>a+b,0),avg=tot/ks.length,mx=vals.indexOf(Math.max(...vals)),isAll=cc.startsWith('ALL_');
  const rows=ks.map((k,i)=>{
    const v=vals[i],pv=i?vals[i-1]:null,d=pv==null?null:v-pv,pc=pv?d/pv*100:null,[f,t]=mRange(k);
    const ch=d?cN(`${d>0?'▲':'▼'} ${num(Math.abs(d))}`,(kind==='exp'?d>0:d<0)?'exp':'inc',pc!=null?Math.abs(Math.round(pc))+'%':''):cN('—');
    return `<tr class="clk" onclick="${dS(f,t,isAll?'':cc,kind)}">${cT(MONTHS[+k.slice(5)-1],k.slice(0,4))}${cN(num(v),kind)}${ch}</tr>`;
  });
  let b=rkp([['الإجمالي',tot,kind],['المتوسط الشهري',Math.round(avg*100)/100,'net'],['أعلى شهر',vals[mx]?`${MONTHS[+ks[mx].slice(5)-1]} · ${num(vals[mx])}`:'—','warn']]);
  b+=donut(ks.map((k,i)=>({label:mName(k),value:vals[i]})),name);
  b+=rsec('📅 شهر بشهر')+rtbl(['الشهر','المبلغ|n','التغيير|n'],rows,ft('الإجمالي',1,fN(num(tot)),fE));
  const sub=RF.crange==='p'?ks.map(mName).join(' · '):`${mName(ks[0])} - ${mName(ks[ks.length-1])}`;
  return{title:'مقارنة: '+name,sub,body:b,
    csv:{head:['الشهر','المبلغ','الفرق','التغيير %'],rows:ks.map((k,i)=>{const pv=i?vals[i-1]:null;return[mName(k),vals[i],pv==null?'':vals[i]-pv,pv?Math.round((vals[i]-pv)/pv*100):'']})}};
}
function bCols(){
  const k=RF.month,dl=dueList(k,'m','inc'),linked=new Set(dl.filter(o=>o.s.st==='done').map(o=>o.s.t.id)),others=keyTx(k).filter(t=>t.type==='inc'&&!linked.has(t.id));
  const ptx=S.txs.filter(t=>t.type==='inc'&&t.pend&&t.date.startsWith(k+'-')),pt=ptx.reduce((a,t)=>a+t.amount,0);
  let exp=0,rem=0;dl.forEach(o=>{exp+=o.amt;if(o.s.st==='wait')rem+=o.amt});
  const got=sums(keyTx(k)).inc;
  let b=rkp([['محصّل',got,'inc'],['المتوقع',exp+pt,'net'],['غير محصّل',rem+pt,'warn']]);
  b+=donut([{label:'محصّل',value:got,color:'#16a34a'},{label:'غير محصّل',value:rem+pt,color:'#ea580c'}],'محصّل',short(got));
  if(dl.length)b+=rsec('📌 ثابت',dl.length+' بند')+rtbl(['البند','الميعاد|c','المبلغ|n','الحالة|c'],dl.map(o=>{const done=o.s.st==='done';return `<tr class="${done?'clk':''}" ${done?`onclick="editTx('${o.s.t.id}')"`:''}>${cT(esc(o.r.name),everyTxt(o.r.every))}${cD(o.date)}${cN(num(done?o.s.t.amount:o.amt),done?'inc':'')}${cC(stB(o.s,o.date))}</tr>`}));
  if(ptx.length)b+=rsec('⏳ غير محصّل',num(pt))+rtbl(['البند','الميعاد|c','المبلغ|n'],ptx.sort(byAsc).map(x=>`<tr class="clk" onclick="editTx('${x.id}')">${cT(esc(C(x.cat)?.name||'—'),[x.post?'اتأجّل '+x.post+' مرة':'',x.note].filter(Boolean).map(esc).join(' · '))}${cD(x.date)}${cN(num(x.amount),'wrn')}</tr>`),ptx.length>1?ft('الإجمالي',2,fN(num(pt))):'');
  if(others.length)b+=rsec('✅ تحصيلات تانية',others.length+' عملية')+rtbl(['البند','التاريخ|c','المبلغ|n'],others.sort(byAsc).map(x=>`<tr class="clk" onclick="editTx('${x.id}')">${cT(esc(C(x.cat)?.name||'—'),esc(M(x.method)?.name||''))}${cD(x.date)}${cN(num(x.amount),'inc')}</tr>`));
  if(!dl.length&&!ptx.length&&!others.length)b+=NONE;
  return{title:'تقرير التحصيلات',sub:mName(k),body:b};
}
/* التحصيلات السنوية: مواعيد سنة معيّنة بس. التاريخ هو تاريخ التجديد اللي انت حاطه، وبيزيد سنة كل سنة */
function annualOcc(y){
  const out=[];
  FX().filter(isAnn).forEach(r=>{for(let k=0;k<300;k++){const d=occDate(r,k),yy=+d.slice(0,4);if(yy>y)break;if(yy<y)continue;const s=stOf(occRec(r,k));if(r.active===false&&s.st==='wait')continue;out.push({r,k,d,amt:occAmt(r,k),s})}});
  return out.sort((a,b)=>a.d.localeCompare(b.d));
}
const annSub=r=>[r.kind==='exp'?L('expOne'):'',everyTxt(r.every),r.pct?'زيادة '+r.pct+'%':''].filter(Boolean).map(esc).join(' · ');
function bContracts(){
  const y=RF.year,oc=annualOcc(y);
  if(!oc.length)return{title:'التحصيلات السنوية',sub:'سنة '+y,body:NONE};
  let ex=0,got=0,rem=0;oc.forEach(o=>{ex+=o.amt;if(o.s.st==='done')got+=o.s.t.amount;else if(o.s.st==='wait')rem+=o.amt});
  let b=rkp([['المتوقع',ex,'net'],['محصّل',got,'inc'],['غير محصّل',rem,'warn']]);
  b+=donut([{label:'محصّل',value:got,color:'#16a34a'},{label:'غير محصّل',value:rem,color:'#ea580c'}],'المتوقع',short(ex));
  b+=rsec('📄 مواعيد سنة '+y,oc.length+' ميعاد')+rtbl(['البند','تاريخ التجديد|c','المبلغ|n','الحالة|c'],oc.map(o=>{const done=o.s.st==='done';return `<tr class="${done?'clk':''}" ${done?`onclick="editTx('${o.s.t.id}')"`:''}>${cT(esc(o.r.name),annSub(o.r))}${cD(o.d)}${cN(num(done?o.s.t.amount:o.amt),done?'inc':'')}${cC(stB(o.s,o.d,o.r.kind))}</tr>`}),
    oc.length>1?ft('الإجمالي',2,fN(num(got+rem)),fE):'');
  return{title:'التحصيلات السنوية',sub:'سنة '+y,body:b};
}
/* التحصيلات السنوية للسنة الجاية: المتوقع، والسنة اللي فاتت كانت كام وتاريخ تجديدها، ونسبة الزيادة */
function bContractsNext(){
  const y=NY+1,oc=annualOcc(y);
  if(!oc.length)return{title:'التحصيلات السنوية السنة القادمة',sub:'سنة '+y,body:NONE};
  const ex=oc.reduce((a,o)=>a+o.amt,0);
  const rows=oc.map(o=>{const pk=o.k-1,pd=pk>=0?occDate(o.r,pk):null,pv=pk>=0?(occActual(o.r,pk)??occAmt(o.r,pk)):null;return{...o,pd,pv}});
  const pt=rows.reduce((a,o)=>a+(o.pv||0),0);
  let b=rkp([['عدد البنود',String(new Set(oc.map(o=>o.r.id)).size),'net'],['المتوقع',ex,'warn'],['السنة اللي فاتت',pt,'net']]);
  b+=donut(oc.map(o=>({label:o.r.name,value:o.amt})),'المتوقع',short(ex));
  b+=rsec('🗓️ مواعيد سنة '+y,oc.length+' ميعاد')+rtbl(['البند','تاريخ التجديد|c','المتوقع|n','السنة اللي فاتت|n','الزيادة|n'],rows.map(o=>{
    const d=o.pv!=null?o.amt-o.pv:null,pc=o.pv?Math.round(d/o.pv*1000)/10:null;
    return `<tr>${cT(esc(o.r.name),annSub(o.r))}${cD(o.d)}${cN(num(o.amt),'wrn')}${o.pv!=null?cN(num(o.pv),'',o.pd?'تجديد '+nm(dmy(o.pd)):''):cN('—')}${pc!=null?cN((d>=0?'▲ ':'▼ ')+Math.abs(pc)+'%',d>=0?'inc':'exp',nm((d>=0?'+':'-')+num(Math.abs(d)))):cN('—')}</tr>`}),
    oc.length>1?ft('الإجمالي',2,fN(num(ex)),fN(num(pt)),fE):'');
  return{title:'التحصيلات السنوية السنة القادمة',sub:'سنة '+y,body:b};
}
/* الأقساط: لو أكتر من قسط بيظهر ملخص، ولما تدوس على قسط تفتح تفاصيله */
function bInst(){
  const plans=RF.plan?S.plans.filter(p=>p.id===RF.plan):S.plans;
  if(!plans.length)return{title:'تقرير الأقساط',sub:'',body:'<p class="pnote">لا يوجد أقساط</p>'};
  let T=0,P=0;plans.forEach(p=>{const s=planStats(p);T+=s.total;P+=s.paid});
  let b=rkp([['الإجمالي',T,'net'],['المدفوع',P,'inc'],['الباقي',T-P,'exp']]);
  b+=donut([{label:'المدفوع',value:P,color:'#16a34a'},{label:'الباقي',value:T-P,color:'#dc2626'}],'الإجمالي',short(T));
  if(plans.length>1){
    b+=rsec('🏦 الأقساط',plans.length)+rtbl(['القسط','المدفوع|c','الباقي|n','الجاي|c'],plans.map(p=>{const s=planStats(p);return `<tr class="clk" onclick="drill(()=>{RF.plan='${p.id}'})">${cT(esc(p.name),s.late?s.late+' متأخر':'')}${cC(nm(s.paidN+'/'+s.n))}${cN(num(s.total-s.paid),'exp')}${s.next?cD(s.next.due):cC('✓')}</tr>`}),
      ft('الإجمالي',2,fN(num(T-P)),fE));
  }else{
    const p=plans[0];
    b+=rsec('📅 المواعيد',p.items.length+' قسط')+rtbl(['الميعاد|c','المبلغ|n','اتدفع|c','الحالة|c'],[...p.items].sort((a,c)=>(a.due||'').localeCompare(c.due||'')).map(it=>{const t=itTx(it);return `<tr class="${t?'clk':''}" ${t?`onclick="editTx('${t.id}')"`:''}>${cD(it.due)}${cN(num(+it.amount||0))}${t?cC(nm(dmy(t.date))+((t.files||[]).length?' 📎':'')):cC('—')}${cC(t?'<span class="rb ok">مدفوع</span>':stB({st:'wait'},it.due,'exp'))}</tr>`}),
      `<tr><td class="c">الإجمالي</td>${fN(num(T))}${fE}${fE}</tr>`);
  }
  return{title:'تقرير الأقساط',sub:plans.length===1?plans[0].name:'كل الأقساط',body:b};
}
function bPm(){
  const k=RF.month,list=keyTx(k),s=sums(list),[f,t]=mRange(k);
  const pie=donut(pmStats(list).filter(x=>x.o).map(x=>({label:x.m.name,value:x.o})),L('exp'));
  return{title:'تقرير '+L('pm'),sub:mName(k),body:rkp([[L('inc'),s.inc,'inc'],[L('exp'),s.exp,'exp']])+pie+rsec('🏦 '+esc(L('pm')))+pmTable(list,f,t)};
}
function bCash(){
  const y=RF.year,yl=S.cash.filter(c=>c.date.startsWith(y+'-')).sort((a,b)=>a.date.localeCompare(b.date)),tot=yl.reduce((a,c)=>a+c.amount,0);
  const ms=MONTHS.map((n,i)=>[n,cashOf(ym(y,i+1))]).filter(x=>x[1].length),act=ms.length||1;
  const g={};yl.forEach(c=>{g[c.method]=(g[c.method]||0)+c.amount});
  let b=rkp([['المسحوب',tot,'warn'],['متوسط الشهر',Math.round(tot/act*100)/100,'net'],['عدد المرات',String(yl.length),'net']]);
  b+=donut(Object.entries(g).map(([id,v])=>({label:M(id)?.name||'—',value:v})),'المسحوب');
  if(ms.length>1)b+=rsec('📅 شهر بشهر')+rtbl(['الشهر','المرات|c','المسحوب|n'],ms.map(([n,l])=>`<tr>${cT(n)}${cC(nm(l.length))}${cN(num(l.reduce((a,c)=>a+c.amount,0)))}</tr>`));
  b+=rsec('🏧 التفاصيل',num(tot))+(yl.length?rtbl(['التاريخ|c','الحساب','المبلغ|n'],yl.map(c=>`<tr>${cD(c.date)}${cT(esc(M(c.method)?.name||'—'),esc(c.note||''))}${cN(num(c.amount))}</tr>`),yl.length>1?ft('الإجمالي',2,fN(num(tot))):''):NONE);
  return{title:'تقرير '+L('cash'),sub:'سنة '+y,body:b,csv:{head:['التاريخ','سحبت من','المبلغ','ملاحظة'],rows:yl.map(c=>[dmy(c.date),M(c.method)?.name||'',c.amount,c.note||''])}};
}
const REPS={
  stmt:{ic:'🧾',t:'كشف حساب حسب البند',f:fStmt,b:bStmt},
  ops:{ic:'📋',t:'تفاصيل العمليات',f:fStmt,b:bOps},
  month:{ic:'📅',t:'تقرير شهري',f:monthSel,b:bMonth},
  year:{ic:'📆',t:'تقرير سنوي',f:yearSel,b:bYear},
  cmp:{ic:'📈',t:'مقارنة البنود',f:fCmp,b:bCmp},
  cols:{ic:'💰',t:'تقرير التحصيلات',f:monthSel,b:bCols},
  contracts:{ic:'📄',t:'التحصيلات السنوية',f:yearSel,b:bContracts},
  cnext:{ic:'🗓️',t:'التحصيلات السنوية السنة القادمة',f:()=>'',b:bContractsNext},
  inst:{ic:'🏦',t:'تقرير الأقساط',f:fInst,b:bInst},
  pmr:{ic:'💳',t:'تقرير الحسابات',f:monthSel,b:bPm},
  cash:{ic:'🏧',t:'السحب الكاش',f:yearSel,b:bCash}
};
/* صفحة التقارير: لما تدوس على تقرير بيفتح على طول، والاختيارات جواه */
function vReports(){
  if(rtab&&REPS[rtab]&&!$('#rv').classList.contains('on'))setTimeout(()=>{if(rtab&&REPS[rtab])openRV()},0);
  return `<h3>📊 ${esc(L('reports'))}</h3><div class="rgrid">${Object.entries(REPS).map(([k,r])=>`<button class="rbtn" onclick="rtab='${k}';RF={...RFDEF};openRV()"><span>${r.ic}</span>${r.t}</button>`).join('')}</div>`;
}
var RVTITLE='';
function openRV(keep){
  const Rp=REPS[rtab];if(!Rp)return;
  if(!keep){RVST=[];RFOPEN=false}
  const fl=Rp.f?Rp.f():'';
  const r=Rp.b();RVCSV=r.csv||null;RVTITLE=r.title;
  $('#rvt').textContent='';$('#rvdoc').innerHTML=paper(r.title,r.sub,r.body,fl);
  $('#rvcsv').style.display=RVCSV?'':'none';
  $('#rv').classList.add('on');if(!keep||keep==='nav')$('#rvbody').scrollTop=0;
}
function drill(set){RVST.push({rtab,RF:JSON.parse(JSON.stringify(RF))});set();openRV('nav')}
function rvBack(){const p=RVST.pop();if(!p)return closeRV();rtab=p.rtab;RF=p.RF;openRV('nav')}
function refreshRV(){if($('#rv').classList.contains('on'))openRV(true)}
function closeRV(){$('#rv').classList.remove('on');RVST=[];rtab='';if(view==='reports')render()}
/* الطباعة والمشاركة: من غير الفلتر */
function rvClean(){const d=$('#rvdoc').cloneNode(true);d.querySelectorAll('.noprint').forEach(e=>e.remove());return d.innerHTML}
function printReport(){
  const pa=$('#printArea');pa.innerHTML=`<div class="paper">${rvClean()}</div>`;
  document.body.classList.add('printing');
  const done=()=>{document.body.classList.remove('printing');pa.innerHTML='';removeEventListener('afterprint',done)};
  addEventListener('afterprint',done);setTimeout(()=>window.print(),80);
}
function shareReport(){
  const t=RVTITLE||'تقرير',cs=getComputedStyle(document.documentElement),p=cs.getPropertyValue('--p'),ff=cs.getPropertyValue('--ff'),fk=S.settings.font,fl=FONTS[fk]&&FONTS[fk][2]?`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${FONTS[fk][2]}&display=swap">`:'';
  const css=[...document.querySelectorAll('style')].map(s=>s.textContent).join('\n');
  const html=`<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(t)}</title>${fl}<style>${css}:root{--p:${p};--ff:${ff};--z:1}body{background:#eef1f4;padding:12px;overflow:auto}</style></head><body><div class="paper">${rvClean().replace(/ onclick="[^"]*"/g,'')}</div></body></html>`;
  shareOrDl([new File([html],`${t}-${today()}.html`,{type:'text/html'})]);
}
function exportCSV(){
  if(!RVCSV)return;const q=v=>`"${String(v??'').replace(/"/g,'""')}"`;
  const lines=[RVCSV.head.map(q).join(',')].concat(RVCSV.rows.map(r=>r.map(q).join(',')));
  shareOrDl([new File(['\ufeff'+lines.join('\r\n')],`${RVTITLE||'تقرير'}-${today()}.csv`,{type:'text/csv'})]);
}

/* ========== البنود: أزرار لكل نوع + فلتر + جداول ========== */
/* التحصيلات: ثابت شهري / سنوي / غير ثابت — المصروفات: ثابت / متغير */
var ITAB={k:'inc',g:'all',q:'',off:false};
const IG={inc:{fix:['📌','ثابت شهري'],ann:['📄','سنوي'],var:['💵','غير ثابت']},exp:{fix:['📌','ثابت'],var:['🛒','متغير']}};
const catGrp=c=>c.fixed?(c.kind==='inc'&&isA(c)?'ann':'fix'):'var';
function vItems2(){
  const k=ITAB.k,G=IG[k],cats=S.cats.filter(c=>c.kind===k&&(ITAB.off||c.active!==false));
  if(ITAB.g!=='all'&&!G[ITAB.g])ITAB.g='all';
  const cnt=g=>cats.filter(c=>catGrp(c)===g).length,off=S.cats.filter(c=>c.kind===k&&c.active===false).length;
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>📋 ${esc(L('items'))}</h3><button class="mini pri" onclick="itNew()">+ بند</button></div>
  <div class="seg">${[['inc','💰 '+L('inc')],['exp','💸 '+L('exp')]].map(([v,l])=>`<button class="${k===v?'on '+v:''}" onclick="ITAB.k='${v}';ITAB.g='all';render()">${esc(l)}</button>`).join('')}</div>
  <div class="tiles">${[['all','🗂️','الكل',cats.length]].concat(Object.entries(G).map(([g,[ic,l]])=>[g,ic,l,cnt(g)])).map(([g,ic,l,n])=>`<button class="tile ${ITAB.g===g?'on':''}" onclick="ITAB.g='${g}';render()"><span>${ic}</span><b>${esc(l)}</b><small>${n} بند</small></button>`).join('')}</div>
  <div class="gsr">${FIC}<input placeholder="فلتر: اسم البند أو المبلغ..." value="${esc(ITAB.q)}" oninput="ITAB.q=this.value;itList()">${off?`<button type="button" class="${ITAB.off?'on':''}" onclick="ITAB.off=!ITAB.off;render()">⏸ الموقوف (${off})</button>`:''}</div>
  <div id="it-l">${itRows()}</div>`;
}
function itRows(){
  const k=ITAB.k,G=IG[k],q=qn(ITAB.q);
  const base=S.cats.filter(c=>c.kind===k&&(ITAB.off||c.active!==false)&&(!q||qn([c.name,c.amount||'',num(+c.amount||0),c.prevAmt||'',...(c.alias||[])].join(' ')).includes(q)));
  const gs=(ITAB.g==='all'?Object.keys(G):[ITAB.g]).map(g=>({g,l:base.filter(c=>catGrp(c)===g).sort((a,b)=>a.name.localeCompare(b.name,'ar'))})).filter(x=>x.l.length);
  if(!gs.length)return '<p class="empty">لا يوجد</p>';
  const yr=id=>{const l=S.txs.filter(t=>t.cat===id&&!t.pend&&t.date.startsWith(NY+'-'));return[l.length,l.reduce((a,t)=>a+t.amount,0)]};
  return gs.map(({g,l})=>{
    const fx=g!=='var';
    const rows=l.map(c=>{
      const sub=[fx?everyTxt(c.every):'',c.active===false?'⏸ موقوف':''].filter(Boolean).map(esc).join(' · ');
      if(fx){
        const pc=c.prevAmt&&c.incPct!=null?c.incPct:null,good=pc!=null&&(k==='inc'?pc>=0:pc<0);
        return `<tr class="clk" onclick="catForm('${c.id}')">${cT(esc(c.name),sub)}${cN(c.amount?num(+c.amount):'—',k)}${cN(c.prevAmt?num(c.prevAmt):'—','',c.amtAt?nm(dmy(c.amtAt)):'')}${cN(pc!=null?(pc>=0?'▲ ':'▼ ')+Math.abs(pc)+'%':'—',pc!=null?(good?'inc':'exp'):'')}</tr>`;
      }
      const[n,s]=yr(c.id);
      return `<tr class="clk" onclick="catForm('${c.id}')">${cT(esc(c.name),sub)}${cC(nm(n))}${cN(num(s),k)}</tr>`;
    });
    return `<div class="agh"><span>${G[g][0]} ${esc(G[g][1])}</span><small>${l.length} بند</small></div>`+rtbl(fx?['البند','المبلغ|n','السابق|n','الزيادة|n']:['البند',`عمليات ${NY}|c`,`إجمالي ${NY}|n`],rows);
  }).join('');
}
function itList(){const el=$('#it-l');if(el)el.innerHTML=itRows()}
function itNew(){const g=ITAB.g;catForm(null,ITAB.k,g==='fix'||g==='ann'?{fixed:true}:undefined)}

/* ========== المبلغ السابق ونسبة الزيادة للبنود الثابتة ========== */
/* لما تغيّر مبلغ بند ثابت، القديم بيتحفظ في "المبلغ السابق" ونسبة الزيادة بتتحسب لوحدها */
var AMTS=null;
const amtSnap=()=>{const m={};S.cats.forEach(c=>{if(c.fixed)m[c.id]=+c.amount||0});return m};
function amtWatch(){
  const now=amtSnap();if(!AMTS){AMTS=now;return}
  Object.keys(now).forEach(id=>{const o=AMTS[id],n=now[id];if(o>0&&n>0&&Math.abs(n-o)>.001){const c=C(id);if(c){c.prevAmt=o;c.incPct=Math.round((n-o)/o*1000)/10;c.amtAt=today()}}});
  AMTS=now;
}
/* في شاشة تعديل البند الثابت: خانة "المبلغ السابق" وخانة "نسبة الزيادة" بتتحدث وانت بتكتب */
function catInfo(id){
  const c=id&&C(id),sh=$('#sheet');if(!c||!c.fixed||!sh||sh.querySelector('.ainfo'))return;
  const box=document.createElement('div');box.className='ainfo';
  const pv0=c.prevAmt?amtStr(c.prevAmt):'',pc0=c.prevAmt&&c.incPct!=null?c.incPct+'%':'';
  box.innerHTML=`<div class="two"><label>المبلغ السابق<input class="ai-v" value="${pv0}" readonly dir="ltr" placeholder="—"></label><label>نسبة الزيادة<input class="ai-p" value="${pc0}" readonly dir="ltr" placeholder="—"></label></div>`;
  const inp=[...sh.querySelectorAll('input')].find(i=>+c.amount>0&&parseNum(i.value)===+c.amount);
  if(inp){
    let a=inp.closest('label')||inp;if(a.parentElement&&a.parentElement.classList.contains('two'))a=a.parentElement;a.after(box);
    inp.addEventListener('input',()=>{const n=parseNum(inp.value),o=+c.amount,v=box.querySelector('.ai-v'),p=box.querySelector('.ai-p');
      if(n>0&&o>0&&Math.abs(n-o)>.001){v.value=amtStr(o);p.value=(Math.round((n-o)/o*1000)/10)+'%'}else{v.value=pv0;p.value=pc0}});
  }else{const b=sh.querySelector('.btn');if(b)b.before(box)}
}
try{const _cf=catForm;catForm=function(id){const r=_cf.apply(this,arguments);setTimeout(()=>{try{catInfo(id)}catch(e){}},0);return r}}catch(e){}

/* ========== فلتر في باقي الشاشات ========== */
/* خانة فلتر فوق القايمة: تكتب أي حاجة (اسم، مبلغ، تاريخ) فيفضل ظاهر اللي فيه الكلام ده بس */
var GQ={};
const GFV=['col','exps','pmv','inst','annual','cash'];
function gfInject(){
  if(!GFV.includes(view))return;const v=$('#view');if(!v||v.querySelector('.gsr'))return;
  const box=document.createElement('div');box.className='gsr';
  box.innerHTML=`${FIC}<input placeholder="فلتر: اسم، مبلغ، تاريخ..." value="${esc(GQ[view]||'')}" oninput="GQ[view]=this.value;gfApply()">${GQ[view]?`<button type="button" onclick="GQ[view]='';render()">✕</button>`:''}`;
  const ph=v.querySelector('.phead');if(ph)ph.after(box);else v.prepend(box);
  gfApply();
}
function gfApply(){const q=qn(GQ[view]||'');document.querySelectorAll('#view .row').forEach(r=>{r.style.display=!q||qn(r.textContent).includes(q)?'':'none'})}
try{const _rd2=render;render=function(){const r=_rd2.apply(this,arguments);try{if(view==='items'){const v=$('#view');if(v)v.innerHTML=vItems2()}gfInject()}catch(e){}return r}}catch(e){}

/* ========== الباسوردات: خزنة متشفرة ========== */
/* كل الباسوردات بتتحفظ متشفرة (AES-256) بالباسورد الرئيسي. الخزنة بتتقفل أول ما تخرج منها */
const PWCAT={bank:['🏦','بنوك'],mail:['📧','إيميل'],social:['💬','سوشيال'],work:['💼','شغل'],wifi:['📶','واي فاي'],web:['🌐','مواقع'],other:['🔑','أخرى']};
const PWCOL=['#0f766e','#2563eb','#db2777','#ea580c','#7c3aed','#ca8a04','#0891b2','#16a34a','#dc2626','#475569'];
var PWV={key:null,items:null,q:'',cat:'all',mode:'list',cur:null,f:null,show:false,pv:false};
const pwTe=new TextEncoder(),pwTd=new TextDecoder();
const pwB64=u=>{const a=new Uint8Array(u);let s='';for(let i=0;i<a.length;i++)s+=String.fromCharCode(a[i]);return btoa(s)};
const pwUnB64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
async function pwKey(pass,salt){const k=await crypto.subtle.importKey('raw',pwTe.encode(pass),'PBKDF2',false,['deriveKey']);return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:200000,hash:'SHA-256'},k,{name:'AES-GCM',length:256},false,['encrypt','decrypt'])}
async function pwEnc(key,items){const iv=crypto.getRandomValues(new Uint8Array(12));const ct=await crypto.subtle.encrypt({name:'AES-GCM',iv},key,pwTe.encode(JSON.stringify(items)));return{iv:pwB64(iv),ct:pwB64(ct)}}
async function pwDec(key,v){const pt=await crypto.subtle.decrypt({name:'AES-GCM',iv:pwUnB64(v.iv)},key,pwUnB64(v.ct));return JSON.parse(pwTd.decode(pt))}
async function pwSeal(){const e=await pwEnc(PWV.key,PWV.items);Object.assign(S.settings.vault,e,{n:PWV.items.length,up:Date.now()});save()}
/* بيتأكد إن الباسورد الرئيسي صح */
async function pwCheck(pass){try{await pwDec(await pwKey(pass,pwUnB64(S.settings.vault.salt)),S.settings.vault);return true}catch(e){return false}}
function pwScreen(){
  if(!(window.crypto&&crypto.subtle))return say('مش متاح','المتصفح ده مش بيدعم التشفير','⚠️');
  let ov=$('#pwv');if(!ov){ov=document.createElement('div');ov.id='pwv';document.body.appendChild(ov)}
  const cs=getComputedStyle(document.body),bg=cs.backgroundColor;
  ov.style.background=bg&&bg!=='rgba(0, 0, 0, 0)'&&bg!=='transparent'?bg:'#f4f6f9';ov.style.color=cs.color;
  PWV.mode='list';pwRender();
}
function pwClose(){pwLock(true);const ov=$('#pwv');if(ov)ov.remove()}
function pwLock(silent){PWV.key=null;PWV.items=null;PWV.mode='list';PWV.f=null;PWV.cur=null;PWV.show=false;PWV.pv=false;PWV.q='';if(!silent)pwRender()}
function pwGo(m,id){
  PWV.mode=m;PWV.show=false;
  if(m==='view')PWV.cur=id;
  if(m==='edit'){const x=id?PWV.items.find(i=>i.id===id):null;PWV.cur=id||null;PWV.f=x?{...x}:{id:'',t:'',c:'other',u:'',p:'',url:'',n:''};PWV.pv=false}
  pwRender();const b=document.querySelector('#pwv .pwb');if(b)b.scrollTop=0;
}
function pwRender(){
  const ov=$('#pwv');if(!ov)return;
  const V=S.settings.vault,open=!!PWV.items;
  const back=open&&PWV.mode!=='list'?(PWV.mode==='edit'&&PWV.cur?`pwGo('view','${PWV.cur}')`:`pwGo('list')`):'pwClose()';
  const st=open?`${PWV.items.length} حساب · مفتوحة 🔓`:V?'مقفولة 🔒':'جديدة';
  const hdr=`<div class="pwh"><button class="pwi" onclick="${back}">→</button><div class="pwt"><b>🔐 الباسوردات</b><small>${st}</small></div>${open?`<button class="pwi" title="الإعدادات" onclick="pwGo('set')">⋮</button><button class="pwi" title="اقفل" onclick="pwLock()">🔒</button>`:''}</div>`;
  let b='';
  if(!V)b=pwSetupHTML();
  else if(!open)b=pwUnlockHTML();
  else b=PWV.mode==='view'?pwViewHTML():PWV.mode==='edit'?pwEditHTML():PWV.mode==='set'?pwSetHTML():pwListHTML();
  ov.innerHTML=hdr+`<div class="pwb">${b}</div>`;
  const f=ov.querySelector('[data-focus]');if(f)setTimeout(()=>f.focus(),80);
}
const pwSetupHTML=()=>`<div class="pwc pwhero"><div class="pwbig">🔐</div><h3>خزنة الباسوردات</h3><p class="muted">كل الباسوردات بتتحفظ <b>متشفرة</b> على الموبايل ده، وبتتفتح بباسورد رئيسي انت بس اللي تعرفه.</p></div>
  <div class="pwc"><label>الباسورد الرئيسي<input id="pw-m1" type="password" autocomplete="new-password" dir="ltr" data-focus></label>
  <label>اكتبه تاني<input id="pw-m2" type="password" autocomplete="new-password" dir="ltr" onkeydown="if(event.key==='Enter')pwCreate()"></label>
  <p class="warn">⚠️ لو نسيت الباسورد الرئيسي مش هتقدر تفتح الخزنة تاني. اكتبه في مكان أمين.</p>
  <button class="btn" onclick="pwCreate()">🔐 اعمل الخزنة</button></div>`;
const pwUnlockHTML=()=>`<div class="pwc pwhero"><div class="pwbig">🔒</div><h3>الخزنة مقفولة</h3><p class="muted">اكتب الباسورد الرئيسي عشان تفتحها</p>
  <input id="pw-m" type="password" dir="ltr" autocomplete="current-password" data-focus onkeydown="if(event.key==='Enter')pwUnlock()">
  <button class="btn" onclick="pwUnlock()">🔓 افتح</button></div>`;
async function pwCreate(){
  const a=$('#pw-m1').value,b=$('#pw-m2').value;
  if(a.length<6)return toast('الباسورد الرئيسي 6 حروف على الأقل');
  if(a!==b)return toast('الباسوردين مش زي بعض');
  toast('⏳ ...');
  const salt=crypto.getRandomValues(new Uint8Array(16));
  PWV.key=await pwKey(a,salt);PWV.items=[];S.settings.vault={v:1,salt:pwB64(salt)};
  await pwSeal();toast('الخزنة جاهزة ✓');pwGo('list');
}
async function pwUnlock(){
  const el=$('#pw-m'),v=el?el.value:'';if(!v)return toast('اكتب الباسورد');
  toast('⏳ ...');
  try{const V=S.settings.vault,key=await pwKey(v,pwUnB64(V.salt));PWV.items=await pwDec(key,V);PWV.key=key;pwGo('list')}
  catch(e){toast('الباسورد غلط');if(el){el.value='';el.focus()}}
}
const pwAv=(x,big)=>{let h=0;for(const c of (x.t||'?'))h=(h*31+c.charCodeAt(0))>>>0;const ch=[...(x.t||'?').trim()][0]||'?';return `<span class="pwav${big?' big':''}" style="background:${PWCOL[h%PWCOL.length]}">${esc(ch.toUpperCase())}</span>`};
function pwListHTML(){
  const its=PWV.items,cnt=k=>its.filter(x=>x.c===k).length,cats=Object.keys(PWCAT).filter(k=>cnt(k));
  if(PWV.cat!=='all'&&!cnt(PWV.cat))PWV.cat='all';
  return `${its.length?`<div class="pwsr"><input id="pw-q" placeholder="🔍 دوّر بالاسم أو اليوزر أو الموقع..." value="${esc(PWV.q)}" oninput="PWV.q=this.value;pwListOnly()"></div>`:''}
  ${cats.length>1?`<div class="pwchips">${[['all','🗂️ الكل',its.length]].concat(cats.map(k=>[k,PWCAT[k][0]+' '+PWCAT[k][1],cnt(k)])).map(([k,l,n])=>`<button class="${PWV.cat===k?'on':''}" onclick="PWV.cat='${k}';pwRender()">${l} ${n}</button>`).join('')}</div>`:''}
  <button class="btn" onclick="pwGo('edit')">➕ إضافة حساب</button>
  <div id="pw-list" style="margin-top:10px">${pwRows()}</div>`;
}
function pwRows(){
  if(!PWV.items.length)return `<div class="pwc pwhero"><div class="pwbig">🗝️</div><b>لسه مفيش حسابات</b><p class="muted">دوس ➕ إضافة حساب عشان تسجل أول باسورد</p></div>`;
  const q=qn(PWV.q||'');
  const l=PWV.items.filter(x=>(PWV.cat==='all'||x.c===PWV.cat)&&(!q||qn([x.t,x.u,x.url,x.n].join(' ')).includes(q))).sort((a,b)=>(a.t||'').localeCompare(b.t||'','ar'));
  if(!l.length)return '<p class="empty">مفيش نتايج</p>';
  return l.map(x=>`<div class="pwr" onclick="pwGo('view','${x.id}')">${pwAv(x)}<div class="grow"><b>${esc(x.t)}</b><small>${esc(x.u||(PWCAT[x.c]||PWCAT.other)[1])}</small></div><button class="pwi s" title="Share Pass" onclick="event.stopPropagation();pwShare('${x.id}')">🔗</button><button class="pwi s" title="انسخ الباسورد" onclick="event.stopPropagation();pwCopy('${x.id}','p')">🔑</button></div>`).join('');
}
function pwListOnly(){const el=$('#pw-list');if(el)el.innerHTML=pwRows()}
function pwCopy(id,f){
  const x=PWV.items&&PWV.items.find(i=>i.id===id);if(!x)return;const v=x[f]||'';if(!v)return toast('فاضي');
  if(!navigator.clipboard)return toast('مش قادر أنسخ');
  navigator.clipboard.writeText(v).then(()=>toast(f==='p'?'🔑 اتنسخ الباسورد ✓':'👤 اتنسخ اليوزر ✓')).catch(()=>toast('مش قادر أنسخ'));
}
function pwStrength(p){
  p=p||'';let s=0;
  if(p.length>=8)s++;if(p.length>=12)s++;if(/[a-z]/.test(p)&&/[A-Z]/.test(p))s++;if(/\d/.test(p))s++;if(/[^A-Za-z0-9]/.test(p))s++;
  if(p.length<6)s=Math.min(s,1);
  const L=[['ضعيف جداً','#dc2626'],['ضعيف','#ea580c'],['متوسط','#ca8a04'],['كويس','#65a30d'],['قوي','#16a34a'],['قوي جداً','#15803d']];
  return{l:L[s][0],c:L[s][1],w:Math.max(8,s/5*100)};
}
function pwStr(){const st=pwStrength(PWV.f.p),b=$('#pf-sb'),l=$('#pf-sl');if(b){b.style.width=st.w+'%';b.style.background=st.c}if(l){l.textContent=PWV.f.p?st.l:'';l.style.color=st.c}}
function pwViewHTML(){
  const x=PWV.items.find(i=>i.id===PWV.cur);if(!x){PWV.mode='list';return pwListHTML()}
  const cat=PWCAT[x.c]||PWCAT.other,st=pwStrength(x.p),url=x.url&&!/^https?:\/\//i.test(x.url)?'https://'+x.url:x.url,wifi=x.c==='wifi';
  const row=(lbl,val,btns,cls)=>`<div class="pwf"><div class="grow"><span>${lbl}</span><b class="${cls||''}">${val}</b></div>${btns||''}</div>`;
  return `<div class="pwc"><div class="pwvh">${pwAv(x,1)}<div class="grow"><h3 style="margin:0;unicode-bidi:plaintext;text-align:start">${esc(x.t)}</h3><small class="muted">${cat[0]} ${cat[1]}</small></div></div>
  ${x.u?row(wifi?'📶 اسم الشبكة':'👤 اسم المستخدم / الإيميل',esc(x.u),`<button class="pwi s" onclick="pwCopy('${x.id}','u')">📋</button>`):''}
  ${row('🔑 الباسورد',PWV.show?esc(x.p):'••••••••••',`<button class="pwi s" onclick="PWV.show=!PWV.show;pwRender()">${PWV.show?'🙈':'👁️'}</button><button class="pwi s" onclick="pwCopy('${x.id}','p')">📋</button>`,'mono')}
  <div class="pwst"><i style="width:${st.w}%;background:${st.c}"></i></div><small style="color:${st.c};font-weight:700">قوة الباسورد: ${st.l}</small>
  ${x.url?row('🌐 الموقع',esc(x.url),`<a class="pwi s" href="${esc(url)}" target="_blank" rel="noopener">↗️</a>`):''}
  ${x.n?row('📝 ملاحظات',esc(x.n).replace(/\n/g,'<br>')):''}
  <small class="muted" style="display:block;margin-top:10px">آخر تعديل: ${x.up?new Date(x.up).toLocaleString('ar-EG'):'—'}</small></div>
  <div class="pwact"><button class="btn" onclick="pwGo('edit','${x.id}')">✏️ تعديل</button><button class="btn ghost" onclick="pwShare('${x.id}')">🔗 Share Pass</button><button class="btn ghost danger" onclick="pwDel('${x.id}')">🗑 حذف</button></div>`;
}
function pwEditHTML(){
  const f=PWV.f,st=pwStrength(f.p),wifi=f.c==='wifi';
  return `<div class="pwc"><h3 style="margin-top:0">${f.id?'✏️ تعديل الحساب':'➕ حساب جديد'}</h3>
  <label>اسم الحساب<input id="pf-t" value="${esc(f.t)}" placeholder="مثلاً: Gmail، البنك الأهلي، واي فاي البيت" oninput="PWV.f.t=this.value" ${f.id?'':'data-focus'}></label>
  <div class="fl">النوع</div><div class="pwchips wrap">${Object.entries(PWCAT).map(([k,[ic,l]])=>`<button type="button" class="${f.c===k?'on':''}" onclick="PWV.f.c='${k}';pwRender()">${ic} ${l}</button>`).join('')}</div>
  <label>${wifi?'اسم الشبكة':'اسم المستخدم / الإيميل'}<input id="pf-u" dir="ltr" autocomplete="off" value="${esc(f.u)}" oninput="PWV.f.u=this.value"></label>
  <label>الباسورد<div class="inl"><input id="pf-p" class="mono" type="${PWV.pv?'text':'password'}" dir="ltr" autocomplete="new-password" value="${esc(f.p)}" oninput="PWV.f.p=this.value;pwStr()"><button type="button" class="mini" onclick="PWV.pv=!PWV.pv;pwRender()">${PWV.pv?'🙈':'👁️'}</button></div></label>
  <div class="pwst"><i id="pf-sb" style="width:${f.p?st.w:0}%;background:${st.c}"></i></div><small id="pf-sl" style="color:${st.c};font-weight:700">${f.p?st.l:''}</small>
  <label style="margin-top:10px">الموقع<input id="pf-url" dir="ltr" value="${esc(f.url)}" placeholder="example.com" oninput="PWV.f.url=this.value"></label>
  <label>ملاحظات<textarea id="pf-n" rows="3" oninput="PWV.f.n=this.value">${esc(f.n)}</textarea></label>
  <button class="btn" onclick="pwSave()">💾 حفظ</button>
  <button class="btn ghost" onclick="${f.id?`pwGo('view','${f.id}')`:`pwGo('list')`}">إلغاء</button></div>`;
}
async function pwSave(){
  const f=PWV.f;f.t=(f.t||'').trim();
  if(!f.t)return toast('اكتب اسم الحساب');if(!f.p)return toast('اكتب الباسورد');
  const now=Date.now(),v={t:f.t,c:f.c||'other',u:(f.u||'').trim(),p:f.p,url:(f.url||'').trim(),n:(f.n||'').trim(),up:now};
  let x=f.id&&PWV.items.find(i=>i.id===f.id);
  if(x)Object.assign(x,v);else{x={id:uid(),at:now,...v};PWV.items.push(x)}
  try{await pwSeal()}catch(e){return say('ما اتحفظش',String((e&&e.message)||e),'⚠️')}
  toast('اتحفظ ✓');pwGo('view',x.id);
}
async function pwDel(id){
  const x=PWV.items.find(i=>i.id===id);if(!x)return;
  if(!await ask('حذف الحساب؟',x.t,{danger:true,icon:'🗑',ok:'حذف'}))return;
  PWV.items=PWV.items.filter(i=>i.id!==id);await pwSeal();toast('اتحذف');pwGo('list');
}
/* Share Pass: لازم تكتب الباسورد الرئيسي الأول */
async function pwShare(id){
  const x=PWV.items&&PWV.items.find(i=>i.id===id);if(!x)return;
  const m=await dlg({title:'Share Pass',msg:`اكتب الباسورد الرئيسي عشان تشارك «${x.t}»`,icon:'🔐',input:true,pw:true,ok:'تأكيد',cancel:'إلغاء'});
  if(m==null||m==='')return;
  toast('⏳ ...');
  if(!await pwCheck(m))return toast('❌ الباسورد الرئيسي غلط');
  const wifi=x.c==='wifi';
  const t=[`🔐 ${x.t}`,x.u?(wifi?`📶 الشبكة: ${x.u}`:`👤 ${x.u}`):'',`🔑 ${wifi?'الباسورد: ':''}${x.p}`,x.url?`🌐 ${x.url}`:''].filter(Boolean).join('\n');
  if(navigator.share){try{await navigator.share({text:t});return}catch(e){if(e&&e.name==='AbortError')return}}
  if(navigator.clipboard){try{await navigator.clipboard.writeText(t);return say('اتنسخ ✓','الصق الرسالة في الواتساب أو أي مكان تبعته منه','📋')}catch(e){}}
  window.open('https://wa.me/?text='+encodeURIComponent(t),'_blank');
}
const pwSetHTML=()=>`<div class="pwc"><h3 style="margin-top:0">🔑 غيّر الباسورد الرئيسي</h3>
  <label>الباسورد الحالي<input id="ps-o" type="password" dir="ltr" autocomplete="current-password"></label>
  <label>الباسورد الجديد<input id="ps-n1" type="password" dir="ltr" autocomplete="new-password"></label>
  <label>اكتبه تاني<input id="ps-n2" type="password" dir="ltr" autocomplete="new-password"></label>
  <button class="btn" onclick="pwChange()">تغيير</button></div>
  <div class="pwc"><h3 style="margin-top:0">🛡️ الأمان</h3><p class="muted">الخزنة بتتقفل لوحدها أول ما تخرج منها أو تقفل الموبايل. الباسوردات متشفرة كمان جوه النسخة الاحتياطية.</p>
  <button class="btn ghost danger" onclick="pwWipe()">🗑 امسح الخزنة كلها</button></div>`;
async function pwChange(){
  const o=$('#ps-o').value,n1=$('#ps-n1').value,n2=$('#ps-n2').value;
  if(n1.length<6)return toast('الباسورد الجديد 6 حروف على الأقل');
  if(n1!==n2)return toast('الباسوردين الجداد مش زي بعض');
  toast('⏳ ...');
  if(!await pwCheck(o))return toast('الباسورد الحالي غلط');
  const salt=crypto.getRandomValues(new Uint8Array(16));
  PWV.key=await pwKey(n1,salt);S.settings.vault.salt=pwB64(salt);await pwSeal();
  toast('اتغير الباسورد الرئيسي ✓');pwGo('list');
}
async function pwWipe(){
  if(!await ask('امسح الخزنة كلها؟','كل الباسوردات هتتمسح ومش هترجع تاني',{danger:true,icon:'🗑',ok:'امسح'}))return;
  delete S.settings.vault;save();pwLock(true);pwRender();toast('اتمسحت');
}
/* الخزنة بتتقفل وتختفي أول ما تخرج من التطبيق */
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&$('#pwv'))pwClose()});

/* ========== الإعدادات ========== */
const SETS=[['name','✏️','اسم التطبيق'],['theme','🎨','الثيم'],['font','🔠','الخط وحجمه'],['home','🏠','الشاشة الرئيسية'],['labels','🔤','المسميات'],['notif','🔔','الإشعارات والصوت'],['sec','🔒','الأمان والخصوصية'],['ocr','🔎','قراءة الريسيت'],['drive','☁️','نسخ تلقائي على Drive'],['data','💾','النسخ الاحتياطي'],['demo','🧪','نسخة تجريبية'],['about','ℹ️','عن التطبيق']];
function vSettings(){
  const sp=SETS.find(x=>x[0]===stab);
  if(!sp)return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>⚙️ ${esc(L('settings'))}</h3></div><div class="rgrid">${SETS.map(([k,ic,l])=>`<button class="rbtn" onclick="stab='${k}';render();scrollTo(0,0)"><span>${ic}</span>${l}</button>`).join('')}</div>`;
  return `<div class="phead"><button class="mini" onclick="stab='';render()">→</button><h3>${sp[1]} ${sp[2]}</h3></div>`+({name:spName,theme:spTheme,font:spFont,home:spHome,labels:spLabels,notif:spNotif,sec:spSec,ocr:spOcr,drive:spDrive,data:spData,demo:spDemo,about:spAbout})[stab]();
}
const spName=()=>`<div class="box"><label>اسم التطبيق<input id="s-name" value="${esc(appName())}"></label><button class="btn" onclick="setName()">حفظ</button></div>`;
const spTheme=()=>`<div class="themes">${Object.entries(THEMES).map(([k,t])=>`<button class="th ${(S.settings.theme||'teal')===k?'on':''}" style="--c:${t.p}" onclick="setTheme('${k}')"><i></i>${t.n}</button>`).join('')}</div>`;
function spFont(){
  Object.keys(FONTS).forEach(loadFont);
  const cf=FONTS[S.settings.font]?S.settings.font:'cairo',cz=+S.settings.fsz||1.07;
  return `<h3>نوع الخط</h3><div class="fonts">${Object.entries(FONTS).map(([k,f])=>`<button class="fnt ${cf===k?'on':''}" style="font-family:${f[1]?f[1]+',':''}system-ui" onclick="setFont('${k}')">التحصيلات 49,170<small>${f[0]}</small></button>`).join('')}</div>
  <h3>حجم الخط</h3><div class="seg">${SIZES.map(([v,l])=>`<button class="${Math.abs(cz-v)<.001?'on':''}" onclick="setFsz(${v})">${l}</button>`).join('')}</div>`;
}
const modeSeg=(cur,fn)=>`<div class="sseg">${MODES.map(([v,l])=>`<button class="${cur===v?'on':''}" onclick="${fn}'${v}')">${l}</button>`).join('')}</div>`;
function spHome(){
  const pins=S.settings.pins||[];
  let h=`<div class="list">${HW.map(([k,l])=>`<div class="row" style="cursor:default;flex-wrap:wrap"><div class="grow"><b>${l}</b></div>${modeSeg(hmode(k),`setHW('${k}',`)}</div>`).join('')}</div>`;
  h+=`<h3>📌 مثبت على الرئيسية<button class="mini pri" onclick="homePinForm()">+ تثبيت</button></h3>`;
  h+=pins.length?`<div class="list">${pins.map((p,i)=>`<div class="row" style="cursor:default;flex-wrap:wrap"><div class="grow"><b>${esc(pinName(p)||'(محذوف)')}</b><small>${pinType(p)}</small></div>${modeSeg(p.mode,`setPin(${i},`)}<button class="mini danger" onclick="delPin(${i})">🗑</button></div>`).join('')}</div>`:'<p class="empty">لا يوجد</p>';
  return h;
}
function spLabels(){
  return `<div class="list">${Object.keys(LDEF).map(k=>`<div class="row" style="cursor:default"><div class="grow"><small>${LDEF[k]}</small><input data-lk="${k}" value="${esc(L(k))}"></div></div>`).join('')}</div>
  <div class="two"><button class="btn" onclick="saveLabels()">حفظ</button><button class="btn ghost" onclick="resetLabels()">رجّع الأصلي</button></div>`;
}
function sndBox(){
  const cur=S.settings.snd||'ding';
  return `<h3>🔊 صوت التنبيه</h3><div class="list">${Object.entries(SOUNDS).map(([k,s])=>`<div class="row" onclick="setSnd('${k}')"><span class="ic" style="background:var(--soft)">${cur===k?'🔘':'⚪'}</span><div class="grow"><b>${s.n}</b></div>${s.s.length?`<button class="mini" onclick="event.stopPropagation();playSound('${k}')">▶️</button>`:''}</div>`).join('')}</div>
  <label>علو الصوت<input type="range" min="0.1" max="1" step="0.1" value="${S.settings.svol??.7}" onchange="S.settings.svol=+this.value;save();playSound()"></label>
  <details class="gen"><summary>📱 صوت إشعارات الموبايل</summary><ol>
  <li>إعدادات الموبايل ← التطبيقات ← Centric ← الإشعارات.</li>
  <li>لو مش موجود: Chrome ← الإشعارات ← اسم الموقع.</li>
  <li>اختار الصوت من نغمات الموبايل.</li></ol></details>`;
}
function spNotif(){
  return `<div class="box"><label>تنبيه البنود السنوية قبلها بـ (يوم)<input type="text" inputmode="numeric" value="${leadA()}" onchange="S.settings.leadA=Math.max(1,parseNum(this.value)||15);save();toast('اتحفظ ✓')"></label>
  <label>تنبيه ${esc(L('inst'))} قبلها بـ (يوم)<input type="text" inputmode="numeric" value="${leadI()}" onchange="S.settings.lead=Math.max(1,parseNum(this.value)||10);save();toast('اتحفظ ✓')"></label></div>
  <button class="btn" onclick="notifSheet()">🔔 فحص الإشعارات</button>
  <button class="btn ghost" onclick="READ={};localStorage.removeItem(RKEY);render();toast('تم ✓')">↺ رجّع كل التنبيهات</button>`+sndBox();
}
function spSec(){
  let h=`<h3>🙈 إخفاء المبالغ</h3><label class="chk fxbox"><input type="checkbox" ${S.settings.mask!==false?'checked':''} onchange="S.settings.mask=this.checked;SHOWAMT=false;save();toast('اتحفظ ✓')"> اخفي المبالغ في الرئيسية</label>`;
  if(DEMO)return h;
  h+='<h3>🔑 الرقم السري</h3><div class="list">';
  h+=LK.pin?`<div class="row" onclick="pinForm()"><div class="grow"><b>🔑 تغيير الرقم السري</b></div>${actBadge(true)}</div><div class="row" onclick="pinOffForm()"><div class="grow"><b class="neg">إلغاء الرقم السري</b></div></div>`
    :`<div class="row" onclick="pinForm()"><div class="grow"><b>🔒 تفعيل الرقم السري</b></div>${actBadge(false)}</div>`;
  h+='</div>';
  if(LK.pin){
    h+=`<h3>👆 البصمة</h3><div class="list">${LK.bio?`<div class="row"><div class="grow"><b>👆 الدخول بالبصمة</b></div>${actBadge(true)}<button class="mini danger" onclick="LK.bio=null;saveLK();render()">إلغاء</button></div>`:`<div class="row" onclick="bioEnable()"><div class="grow"><b>👆 تفعيل البصمة</b></div>${actBadge(false)}</div>`}</div>
    <h3>القفل التلقائي</h3><select onchange="LK.after=+this.value;saveLK();toast('اتحفظ ✓')">${[[0,'فوراً'],[1,'بعد دقيقة'],[5,'بعد 5 دقايق'],[15,'بعد ربع ساعة']].map(([v,l])=>`<option value="${v}" ${(LK.after??1)===v?'selected':''}>${l}</option>`).join('')}</select>
    <button class="btn ghost" onclick="showLock()">🔒 اقفل دلوقتي</button>`;
  }
  return h;
}
/* قراءة الريسيت: المفاتيح بتتحفظ على الموبايل ده بس، مش في النسخة الاحتياطية */
function spOcr(){
  const vk=vKey(),ok=oKey(),on=[vk?'Google Vision':'',ok?'OCR.space':''].filter(Boolean).join(' + ');
  return `${on?`<div class="ncard ok" style="cursor:default"><div class="nic">🔎</div><div class="grow"><b>القراءة شغالة بـ ${on} ✓</b><small>لو حصلت مشكلة، بيرجع للطريقة العادية لوحده.</small></div></div>`
    :`<div class="ncard soon" style="cursor:default"><div class="nic">🔎</div><div class="grow"><b>القراءة دلوقتي بالطريقة العادية</b><small>حط مفتاح OCR.space (مجاني ومن غير كارت) عشان القراءة تبقى أدق بكتير.</small></div></div>`}
  <h3>OCR.space · مجاني</h3>
  <label>OCR.space API Key<input id="o-key" dir="ltr" value="${esc(ok)}" placeholder="K8..."></label>
  <button class="btn" onclick="kSave('o')">حفظ</button>
  ${ok?`<button class="btn ghost" onclick="kTest('o')">🧪 جرّب المفتاح</button><button class="btn ghost danger" onclick="kDel('o')">شيل المفتاح</button>`:''}
  <details class="gen" style="margin-top:8px"><summary>📖 إزاي أجيب المفتاح</summary><ol>
  <li>افتح <b dir="ltr">ocr.space/ocrapi</b> ودوس <b dir="ltr">Register for free API key</b>.</li>
  <li>اكتب إيميلك، والمفتاح هيوصلك على الإيميل.</li>
  <li>انسخه هنا، دوس <b>حفظ</b>، وبعدين <b>🧪 جرّب المفتاح</b>.</li></ol></details>
  <h3>Google Vision · محتاج كارت</h3>
  <label>Google Vision API Key<input id="v-key" dir="ltr" value="${esc(vk)}" placeholder="AIza..."></label>
  <button class="btn" onclick="kSave('v')">حفظ</button>
  ${vk?`<button class="btn ghost" onclick="kTest('v')">🧪 جرّب المفتاح</button><button class="btn ghost danger" onclick="kDel('v')">شيل المفتاح</button>`:''}
  <details class="gen" style="margin-top:8px"><summary>📖 إزاي أجيب المفتاح</summary><ol>
  <li>افتح <b dir="ltr">console.cloud.google.com</b> واختار مشروعك.</li>
  <li><b>Billing</b> ← اربط حساب فوترة (كارت). أول 1000 صورة في الشهر مجاناً.</li>
  <li><b>APIs &amp; Services ← Library</b> ← <b dir="ltr">Cloud Vision API</b> ← <b>Enable</b>.</li>
  <li><b>Credentials ← Create Credentials ← API key</b>.</li>
  <li>افتح المفتاح:<br>• <b>Application restrictions</b> ← <b>Websites</b> ← <b dir="ltr">https://ahmed-fawzydl.github.io/*</b><br>• <b>API restrictions</b> ← <b dir="ltr">Cloud Vision API</b> بس ← <b>Save</b></li>
  <li>انسخ المفتاح هنا ← <b>حفظ</b> ← <b>🧪 جرّب المفتاح</b>.</li></ol></details>`;
}
function kSave(w){const v=(($('#'+w+'-key')||{}).value||'').trim(),k=w==='v'?VKEY:OKEY2;if(v)localStorage.setItem(k,v);else localStorage.removeItem(k);render();toast('اتحفظ ✓')}
async function kDel(w){if(!await ask('شيل المفتاح؟','',{icon:'🔎',ok:'شيله'}))return;localStorage.removeItem(w==='v'?VKEY:OKEY2);render()}
async function kTest(w){
  const c=document.createElement('canvas');c.width=520;c.height=140;const x=c.getContext('2d');
  x.fillStyle='#fff';x.fillRect(0,0,520,140);x.fillStyle='#000';x.font='bold 54px sans-serif';x.fillText('Centric 2026',30,90);
  try{toast('⏳ بيجرّب...');const t=await(w==='v'?visionText(c):ospaceText(c));say(t&&t.trim()?'المفتاح شغال ✓':'المفتاح رد بس مقراش حاجة',t?'اتقرا: '+t.trim():'','🔎')}
  catch(e){say('المفتاح مش شغال',String((e&&e.message)||e),'⚠️')}
}
function spData(){
  const lb=localStorage.getItem(BKEY);
  return `<div class="ncard ${lb?'ok':'soon'}" style="cursor:default"><div class="nic">💾</div><div class="grow"><b>${lb?'آخر نسخة: '+lb:'لسه معملتش نسخة احتياطية'}</b></div></div>
  <button class="btn" onclick="driveBackup()">📤 مشاركة نسخة</button>
  <button class="btn ghost" onclick="backup()">⬇️ تنزيل نسخة</button>
  <button class="btn ghost" onclick="$('#restoreFile').click()">⬆️ استرجاع نسخة</button>
  <h3>منطقة خطر</h3><button class="btn ghost danger" onclick="resetAll()">🗑 مسح كل البيانات</button>`;
}
function spAbout(){
  return `<div class="list">
  <div class="row" style="cursor:default"><span class="ic" style="overflow:hidden">${LOGO()}</span><div class="grow"><b dir="ltr" style="text-align:right">${esc(appName())}</b><small>الإصدار ${VER} · ${VBUILD}</small></div></div>
  <div class="row" style="cursor:default"><span class="ic" style="background:var(--soft)">👨‍💻</span><div class="grow"><b dir="ltr" style="text-align:right">${DEV.name}</b><small dir="ltr" style="text-align:right">${DEV.company}</small></div></div>
  ${DEV.phones.map(p=>`<a class="row" href="tel:${p}"><span class="ic" style="background:#dcfce7">📞</span><div class="grow"><b dir="ltr" style="text-align:right">${p}</b></div></a>`).join('')}</div>`;
}
function setName(){S.settings.appName=$('#s-name').value.trim()||DEF_NAME;save();applyName();render();toast('اتحفظ ✓')}
function setTheme(k){S.settings.theme=k;save();applyTheme();render()}
function setFont(k){S.settings.font=k;save();applyFont();render()}
function setFsz(v){S.settings.fsz=v;save();applyFont();render()}
function setHW(k,m){S.settings.hw=Object.assign({},S.settings.hw,{[k]:m});save();render()}
function setPin(i,m){S.settings.pins[i].mode=m;save();render()}
function delPin(i){S.settings.pins.splice(i,1);save();render()}
function homePinForm(){
  const grpP=(lab,items)=>items.length?`<div class="pg"><h3>${esc(lab)}</h3><div class="list">${items.map(([type,ref,ic,name])=>`<div class="row pkr" data-q="${esc(name)}" onclick="homePinAdd('${type}','${ref}')"><span class="ic" style="background:var(--soft)">${ic}</span><div class="grow"><b>${esc(name)}</b></div><span class="mini pri">+ تثبيت</span></div>`).join('')}</div></div>`:'';
  sheet(`<h2>📌 تثبيت على الرئيسية</h2>
  <div class="seg">${MODES.slice(0,2).map(([v])=>`<button class="${PINMODE===v?'on':''}" onclick="PINMODE='${v}';this.parentNode.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b===this))">${v==='show'?'👁️ يظهر دايماً':'⚡ تلقائي'}</button>`).join('')}</div>
  <input id="pn-q" placeholder="🔍 بحث..." oninput="pinFilter(this.value)">
  ${grpP('📊 التقارير',Object.entries(REPS).map(([k,r])=>['rep',k,r.ic,r.t]))}
  ${grpP('🏦 '+L('pm'),S.methods.map(m=>['pm',m.id,'🏦',m.name]))}
  ${grpP('💰 بنود التحصيل',S.cats.filter(c=>c.kind==='inc').map(c=>['cat',c.id,c.fixed?'📌':'💵',c.name]))}
  ${grpP('💸 بنود المصروفات',S.cats.filter(c=>c.kind==='exp').map(c=>['cat',c.id,c.fixed?'📌':'🏷️',c.name]))}
  ${grpP('🏦 '+L('inst'),S.plans.map(p=>['plan',p.id,'🏦',p.name]))}`);
}
function pinFilter(q){
  q=q.trim();
  document.querySelectorAll('#sheet .pkr').forEach(r=>r.style.display=!q||r.dataset.q.includes(q)?'':'none');
  document.querySelectorAll('#sheet .pg').forEach(g=>g.style.display=[...g.querySelectorAll('.pkr')].some(r=>r.style.display!=='none')?'':'none');
}
function homePinAdd(type,ref){
  if((S.settings.pins||[]).some(p=>p.type===type&&p.ref===ref))return toast('متثبت قبل كده');
  S.settings.pins=(S.settings.pins||[]).concat({id:uid(),type,ref,mode:PINMODE});
  save();closeSheet();render();toast('اتثبّت ✓');
}
function saveLabels(){
  const o={};document.querySelectorAll('[data-lk]').forEach(i=>{const v=i.value.trim();if(v&&v!==LDEF[i.dataset.lk])o[i.dataset.lk]=v});
  S.settings.labels=o;save();render();toast('اتحفظ ✓');
}
function resetLabels(){S.settings.labels={};save();render();toast('تم ✓')}

/* ========== النسخة التجريبية ========== */
function demoData(){
  const d=defaults();d.methods=[];d.cats=[];d.settings={theme:'blue',font:'cairo',fsz:1.07};
  const td=today(),day=(o,dd)=>addMonths(NKM+'-'+pad(dd),o);
  const acc=(name,type,color)=>{const m={id:uid(),name,type,bank:'',color,active:true};d.methods.push(m);return m.id};
  const cash=acc('كاش','cash','#16a34a'),ahly=acc('البنك الأهلي','bank','#0f766e'),misr=acc('بنك مصر','bank','#2563eb');
  const cat=(name,kind,x)=>{const c={id:uid(),name,kind,active:true,files:[],amt:{},st:{},every:1,pct:0,...(x||{})};d.cats.push(c);return c};
  const tx=(type,c,amount,date,method,x)=>{if(date>td)return null;const t={id:uid(),type,amount,cat:c?c.id:undefined,method,via:'',date,note:'',files:[],created:Date.now(),...(x||{})};d.txs.push(t);return t};
  const sal=cat('الراتب','inc',{fixed:true,amount:25000,start:day(-2,1),acct:ahly,via:'transfer'});
  const rent=cat('إيجار الشقة','inc',{fixed:true,amount:6000,start:day(-2,5),acct:misr,via:'instapay'});
  const frl=cat('شغل إضافي','inc');
  cat('الإيجار','exp',{fixed:true,amount:5000,start:day(-2,3),acct:cash,via:'cash',autoFrom:day(-2,1)});
  const food=cat('أكل وشرب','exp'),fuel=cat('مواصلات وبنزين','exp'),fish=cat('أسماك النحاس','exp');
  const R=(a,b,s)=>a+Math.round(Math.random()*((b-a)/s))*s;
  for(let o=-2;o<=0;o++){
    const k=o+2,add=(c,dd,acct,via)=>{const t=tx(c.kind,c,c.amount,day(o,dd),acct,{via,src:{k:'r',id:c.id,p:k}});if(t)c.st[k]={st:'done',txId:t.id,at:Date.now()}};
    add(sal,1,ahly,'transfer');if(o<0)add(rent,5,misr,'instapay');
    for(let i=0;i<6;i++)tx('exp',food,R(100,900,50)+.5,day(o,2+i*4),cash);
    for(let i=0;i<3;i++)tx('exp',fuel,R(300,500,50),day(o,4+i*8),ahly,{via:'card'});
  }
  tx('inc',frl,3500,day(-1,22),cash,{via:'cash'});
  d.cards=[{id:uid(),name:'البنك الأهلي VISA',kind:'debit',net:'visa',last4:'4821',acct:ahly,color:'#0f766e'}];
  d.renew=[{id:uid(),name:'رخصة العربية',type:'car',num:'أ ب ج 1234',exp:isoD(new Date(Date.now()+20*864e5)),lead:30,note:'',files:[]}];
  const ft=tx('exp',fish,349.7,td,cash,{via:'cash',note:'🧾'});
  if(ft)d.buys=[{id:uid(),date:td,time:'20:12',rt:'20:12',no:'',txId:ft.id,catId:fish.id,store:'أسماك النحاس',items:[{n:'بلطي',q:1.37,p:160,v:219.2},{n:'بوري',q:.45,p:290,v:130.5}],total:349.7,method:cash,via:'cash',card:'',deliv:false,fid:''}];
  d.contacts=[{id:uid(),name:'أسماك النحاس',kind:'shop',spec:'سمك',phones:['01030292676'],address:'24 علي أمين بجوار الأحمدي للسيارات',loc:'',catId:fish.id,at:Date.now()},{id:uid(),name:'مطعم الشبراوي',kind:'rest',spec:'',phones:['01000000001'],address:'',loc:'',catId:'',at:Date.now()}];
  return d;
}
function spDemo(){
  return DEMO?`<div class="ncard soon" style="cursor:default"><div class="nic">🧪</div><div class="grow"><b>انت في النسخة التجريبية</b></div></div>
    <button class="btn" onclick="exitDemo()">↩️ ارجع لنسختي</button>
    <button class="btn ghost" onclick="resetDemo()">🔄 من الأول</button>`
  :`<div class="ncard" style="cursor:default"><div class="nic">🧪</div><div class="grow"><b>نسخة بأرقام وهمية</b><small>منفصلة تماماً عن بياناتك.</small></div></div>
    <button class="btn" onclick="enterDemo()">🧪 ادخل النسخة التجريبية</button>`;
}
async function enterDemo(){
  if(!await ask('الدخول للنسخة التجريبية؟','',{icon:'🧪',ok:'ادخل'}))return;
  localStorage.setItem(DKEY,JSON.stringify(demoData()));
  localStorage.setItem(MKEY,'demo');location.reload();
}
function exitDemo(){localStorage.removeItem(MKEY);location.reload()}
async function resetDemo(){if(!await ask('من الأول؟','',{icon:'🔄',ok:'تمام'}))return;localStorage.setItem(DKEY,JSON.stringify(demoData()));location.reload()}

/* ========== Google Drive ========== */
const GFILE='Fawzy Folio - نسخة احتياطية.json';
let gTok=null,gExp=0,gTC=null,gCID=null;
async function driveToken(interactive){
  if(gTok&&Date.now()<gExp-60000)return gTok;
  if(!GD.cid)throw new Error('اكتب الـ Client ID الأول');
  await loadJS('https://accounts.google.com/gsi/client');
  return new Promise((res,rej)=>{
    if(!gTC||gCID!==GD.cid){gCID=GD.cid;gTC=google.accounts.oauth2.initTokenClient({client_id:GD.cid,scope:'https://www.googleapis.com/auth/drive.file',callback:()=>{}})}
    gTC.callback=r=>{if(r.error)return rej(new Error(r.error_description||r.error));gTok=r.access_token;gExp=Date.now()+(+r.expires_in||3600)*1000;res(gTok)};
    gTC.error_callback=e=>rej(new Error(e&&e.type==='popup_closed'?'اتقفلت نافذة جوجل':'جوجل رفض الطلب'));
    gTC.requestAccessToken({prompt:interactive?'consent':''});
  });
}
async function driveFind(tok){
  const q=encodeURIComponent(`name='${GFILE}' and trashed=false`);
  const r=await fetch(`https://www.googleapis.com/drive/v3/files?q=${q}&orderBy=modifiedTime desc&fields=files(id,modifiedTime)`,{headers:{Authorization:'Bearer '+tok}});
  const j=await r.json();return (j.files&&j.files[0])||null;
}
async function driveUpload(interactive){
  if(DEMO)throw new Error('مش متاح في النسخة التجريبية');
  const tok=await driveToken(interactive),blob=await backupBlob(true);
  if(!GD.fileId){const f=await driveFind(tok);if(f)GD.fileId=f.id}
  let res;
  if(GD.fileId){
    res=await fetch(`https://www.googleapis.com/upload/drive/v3/files/${GD.fileId}?uploadType=media`,{method:'PATCH',headers:{Authorization:'Bearer '+tok,'Content-Type':'application/json'},body:blob});
    if(res.status===404)GD.fileId=null;else if(!res.ok)throw new Error('الرفع فشل ('+res.status+')');
  }
  if(!GD.fileId){
    const fd=new FormData();fd.append('metadata',new Blob([JSON.stringify({name:GFILE,mimeType:'application/json'})],{type:'application/json'}));fd.append('file',blob);
    res=await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id',{method:'POST',headers:{Authorization:'Bearer '+tok},body:fd});
    const j=await res.json();if(!res.ok)throw new Error((j.error&&j.error.message)||'الرفع فشل');GD.fileId=j.id;
  }
  GD.last=new Date().toISOString();GD.hash=strHash(JSON.stringify(S));saveGD();localStorage.setItem(BKEY,today());
}
async function driveLink(){
  const v=$('#g-cid')&&$('#g-cid').value.trim();if(v)GD.cid=v;
  if(!GD.cid)return toast('اكتب الـ Client ID الأول');
  saveGD();
  try{toast('⏳ جاري الربط...');await driveToken(true);GD.linked=true;if(GD.auto==null)GD.auto=true;saveGD();await driveUpload(false);render();say('اتربط Google Drive ✓','','☁️')}
  catch(e){say('الربط ما نجحش',e.message||'','⚠️')}
}
async function driveNow(){try{toast('⏳ جاري الرفع...');await driveUpload(true);render();toast('☁️ اترفعت ✓')}catch(e){say('الرفع ما نجحش',e.message||'','⚠️')}}
async function driveRestore(){
  try{
    toast('⏳ جاري البحث...');
    const tok=await driveToken(true),f=GD.fileId?{id:GD.fileId}:await driveFind(tok);
    if(!f)return say('لا يوجد نسخة','','☁️');
    const r=await fetch(`https://www.googleapis.com/drive/v3/files/${f.id}?alt=media`,{headers:{Authorization:'Bearer '+tok}});
    if(!r.ok)throw new Error('مش قادر أنزّل النسخة');
    GD.fileId=f.id;saveGD();await applyBackup(await r.text());
  }catch(e){say('الاسترجاع ما نجحش',e.message||'','⚠️')}
}
async function driveUnlink(){if(!await ask('فك ربط Google Drive؟','',{icon:'☁️',ok:'فك الربط'}))return;GD={cid:GD.cid};gTok=null;saveGD();render()}
function spDrive(){
  if(DEMO)return '<p class="empty">مش متاح في النسخة التجريبية</p>';
  const st=GD.linked?`<div class="ncard ok" style="cursor:default"><div class="nic">☁️</div><div class="grow"><b>مربوط ✓</b><small>${GD.last?'آخر نسخة: '+new Date(GD.last).toLocaleString('ar-EG'):''}</small></div></div>`
    :`<div class="ncard soon" style="cursor:default"><div class="nic">☁️</div><div class="grow"><b>مش مربوط</b></div></div>`;
  return st+`<label>Google Client ID<input id="g-cid" dir="ltr" value="${esc(GD.cid||'')}" placeholder="xxxx.apps.googleusercontent.com"></label>
  <button class="btn" onclick="driveLink()">🔗 ${GD.linked?'إعادة الربط':'ربط Google Drive'}</button>
  ${GD.linked?`<label class="chk fxbox" style="margin-top:10px"><input type="checkbox" ${GD.auto!==false?'checked':''} onchange="GD.auto=this.checked;saveGD();toast('اتحفظ ✓')"> 🔄 نسخ تلقائي</label>
  <button class="btn ghost" onclick="driveNow()">⬆️ ارفع نسخة دلوقتي</button>
  <button class="btn ghost" onclick="driveRestore()">⬇️ استرجاع آخر نسخة</button>
  <button class="btn ghost danger" onclick="driveUnlink()">فك الربط</button>`:''}
  <details class="gen" style="margin-top:12px"><summary>📖 الـ Client ID</summary><ol>
  <li><b dir="ltr">console.cloud.google.com</b> ← <b>New Project</b>.</li>
  <li><b>APIs &amp; Services ← Library</b> ← <b dir="ltr">Google Drive API</b> ← <b>Enable</b>.</li>
  <li><b>OAuth consent screen</b> ← <b>External</b>، وضيف إيميلك في <b>Test users</b>.</li>
  <li><b>Credentials ← Create Credentials ← OAuth client ID</b> ← <b>Web application</b>.</li>
  <li><b>Authorized JavaScript origins</b>: <b dir="ltr">https://ahmed-fawzydl.github.io</b></li>
  <li>انسخ الـ <b>Client ID</b> هنا ودوس <b>ربط</b>.</li></ol></details>`;
}
let gTick=0;
document.addEventListener('pointerdown',()=>{
  if(DEMO||!GD.linked||GD.auto===false||!GD.cid)return;
  const n=Date.now();if(n-gTick<3*60000)return;gTick=n;
  if(GD.last&&n-new Date(GD.last)<20*60000)return;
  if(strHash(JSON.stringify(S))===GD.hash)return;
  driveUpload(false).then(()=>toast('☁️ اتعملت نسخة ✓')).catch(()=>{});
},true);

/* ========== القراءة (OCR) ========== */
/* القراءة من النت: Google Vision أو OCR.space، ولو مفيش مفتاح أو فشلوا: الطريقة العادية */
const VKEY='centric-vkey',OKEY2='centric-okey';
const vKey=()=>localStorage.getItem(VKEY)||'';
const oKey=()=>localStorage.getItem(OKEY2)||'';
function scaleCanvas(c,mx){const sc=Math.min(1,mx/Math.max(c.width,c.height));if(sc>=1)return c;const n=document.createElement('canvas');n.width=Math.round(c.width*sc);n.height=Math.round(c.height*sc);const x=n.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(c,0,0,n.width,n.height);return n}
async function fetchT(url,opt,ms,slow){
  const ctl=new AbortController(),tm=setTimeout(()=>ctl.abort(),ms);
  try{return await fetch(url,{...opt,signal:ctl.signal})}
  catch(e){if(e&&e.name==='AbortError')throw new Error(slow);throw new Error('مفيش نت أو السيرفر مش بيرد')}
  finally{clearTimeout(tm)}
}
async function visionText(c){
  const k=vKey();if(!k)return null;
  const b64=scaleCanvas(c,2000).toDataURL('image/jpeg',.88).split(',')[1];
  const r=await fetchT('https://vision.googleapis.com/v1/images:annotate?key='+encodeURIComponent(k),{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({requests:[{image:{content:b64},features:[{type:'DOCUMENT_TEXT_DETECTION'}],imageContext:{languageHints:['ar','en']}}]})},25000,'جوجل اتأخر في الرد');
  const j=await r.json().catch(()=>({}));
  if(!r.ok||j.error)throw new Error((j.error&&j.error.message)||('HTTP '+r.status));
  const x=j.responses&&j.responses[0];if(x&&x.error)throw new Error(x.error.message);
  return (x&&((x.fullTextAnnotation&&x.fullTextAnnotation.text)||(x.textAnnotations&&x.textAnnotations[0]&&x.textAnnotations[0].description)))||'';
}
/* OCR.space: Engine 3 (الأدق، وبيعرف العربي والإنجليزي لوحده). الصورة لازم تبقى أقل من 1 ميجا */
async function ospaceText(c){
  const k=oKey();if(!k)return null;
  let mx=1600,q=.82,b64='';
  for(let i=0;i<7;i++){b64=scaleCanvas(c,mx).toDataURL('image/jpeg',q);if(b64.length*.75<900000)break;mx=Math.round(mx*.85);q=Math.max(.55,q-.06)}
  const fd=new FormData();
  fd.append('apikey',k);fd.append('base64Image',b64);fd.append('OCREngine','3');
  fd.append('isTable','true');fd.append('scale','true');fd.append('detectOrientation','true');
  const r=await fetchT('https://api.ocr.space/parse/image',{method:'POST',body:fd},50000,'OCR.space اتأخر في الرد');
  const raw=await r.text();let j=null;try{j=JSON.parse(raw)}catch(e){}
  if(!j||typeof j!=='object')throw new Error((raw||('HTTP '+r.status)).slice(0,160));
  const em=m=>Array.isArray(m)?m.filter(Boolean).join(' · '):String(m||'');
  if(j.IsErroredOnProcessing||!r.ok)throw new Error(em(j.ErrorMessage)||em(j.ErrorDetails)||('HTTP '+r.status));
  const t=(j.ParsedResults||[]).map(p=>p.ParsedText||'').join('\n');
  /* Engine 3 ساعات بيرجّع الجداول بشكل Markdown: نشيل الخطوط ونسيب الكلام */
  return t.replace(/^\s*\|?[\s:|-]*-{3,}[\s:|-]*$/gm,'').replace(/\|/g,' ').replace(/^#+\s*/gm,'').replace(/[ \t]+/g,' ');
}
const CLOUD=[['Google Vision',visionText,vKey],['OCR.space',ospaceText,oKey]];
const OCRW={};let OCRP=null;
function getOcr(lang){
  if(!OCRW[lang])OCRW[lang]=(async()=>{await loadJS(TESS);return await Tesseract.createWorker(lang,1,{logger:m=>{if(m.status==='recognizing text'&&OCRP)OCRP(m.progress)}})})().catch(e=>{delete OCRW[lang];throw e});
  return OCRW[lang];
}
async function ocr(lang,src,params,onP){
  const w=await getOcr(lang);
  await w.setParameters({tessedit_pageseg_mode:'3',tessedit_char_whitelist:'',preserve_interword_spaces:'0',...(params||{})});
  OCRP=onP||null;
  try{return((await w.recognize(src)).data.text)||''}finally{OCRP=null}
}
function prepCanvas(c,o){
  o=o||{};
  const W=c.width,H=c.height,n=W*H,x=c.getContext('2d',{willReadFrequently:true}),im=x.getImageData(0,0,W,H),d=im.data,g=new Uint8ClampedArray(n);
  for(let i=0,j=0;j<n;i+=4,j++)g[j]=(d[i]*.299+d[i+1]*.587+d[i+2]*.114)|0;
  if(o.bin){
    const W1=W+1,I=new Uint32Array(W1*(H+1));
    for(let y=0;y<H;y++){let rs=0;for(let xx=0;xx<W;xx++){rs+=g[y*W+xx];I[(y+1)*W1+xx+1]=I[y*W1+xx+1]+rs}}
    const r=Math.max(10,Math.round(Math.min(W,H)/20));
    for(let y=0;y<H;y++){const y0=Math.max(0,y-r),y1=Math.min(H,y+r+1);for(let xx=0;xx<W;xx++){const x0=Math.max(0,xx-r),x1=Math.min(W,xx+r+1),s=I[y1*W1+x1]-I[y0*W1+x1]-I[y1*W1+x0]+I[y0*W1+x0],m=s/((x1-x0)*(y1-y0)),j=y*W+xx;g[j]=g[j]<m*.86?0:255}}
  }else{
    const h2=new Uint32Array(256);for(let j=0;j<n;j++)h2[g[j]]++;
    let lo=0,hi=255,acc=0;
    for(let t=0;t<256;t++){acc+=h2[t];if(acc>=n*.02){lo=t;break}}acc=0;
    for(let t=255;t>=0;t--){acc+=h2[t];if(acc>=n*.02){hi=t;break}}
    const k=255/Math.max(1,hi-lo);for(let j=0;j<n;j++)g[j]=(g[j]-lo)*k;
  }
  for(let i=0,j=0;j<n;i+=4,j++)d[i]=d[i+1]=d[i+2]=g[j];
  x.putImageData(im,0,0);return c;
}
const cloneCanvas=c=>{const n=document.createElement('canvas');n.width=c.width;n.height=c.height;n.getContext('2d').drawImage(c,0,0);return n};
const cropTop=(c,f)=>{const n=document.createElement('canvas');n.width=c.width;n.height=Math.round(c.height*f);n.getContext('2d').drawImage(c,0,0);return n};

/* ========== الكاميرا والصور والملفات ========== */
async function fileToCanvas(f){
  const u=URL.createObjectURL(f);
  try{const img=await new Promise((r,j)=>{const i=new Image();i.onload=()=>r(i);i.onerror=j;i.src=u});
    const sc=Math.min(1,2200/Math.max(img.width,img.height)),c=document.createElement('canvas');c.width=Math.round(img.width*sc);c.height=Math.round(img.height*sc);c.getContext('2d').drawImage(img,0,0,c.width,c.height);return c}
  finally{URL.revokeObjectURL(u)}
}
let SCAN=null;
async function openScanner(o){
  KEEPF=true;closeSheet();KEEPF=false;if(SCAN)SCAN.close();
  const ov=document.createElement('div');ov.id='scan';
  ov.innerHTML=`<video playsinline muted autoplay></video><img class="frz" alt=""><div class="sframe ${o.card?'card':''}"></div>
  <div class="stop"><button class="mini" data-a="x">✕</button><b>${esc(o.title)}</b><button class="mini" data-a="t" style="visibility:hidden">🔦</button></div>
  <div class="sbot"><div class="sst">⏳ بيفتح الكاميرا...</div><div class="sbtns"><button class="mini" data-a="g">🖼️ من الصور</button><button class="mini pri" data-a="c">📸 صوّر</button></div></div>`;
  document.body.appendChild(ov);
  const btn=a=>ov.querySelector(`[data-a="${a}"]`),stEl=ov.querySelector('.sst'),v=ov.querySelector('video'),fr=ov.querySelector('.sframe'),img=ov.querySelector('.frz');
  let stream=null,alive=true,taken=false,prev=null,still=0,maxSh=0,torch=false;const t0=Date.now();
  const st=t=>{stEl.textContent=t};
  const stopCam=()=>{try{stream&&stream.getTracks().forEach(t=>t.stop())}catch(e){}stream=null};
  const close=()=>{if(!alive)return;alive=false;SCAN=null;stopCam();ov.remove();if(o.onCancel&&!taken)o.onCancel()};
  SCAN={close};btn('x').onclick=close;
  if(o.read&&!vKey()&&!oKey())getOcr(o.lang||'ara+eng').catch(()=>{});
  const grabFrame=()=>{
    const vw=v.videoWidth,vh=v.videoHeight,r=v.getBoundingClientRect(),f=fr.getBoundingClientRect();
    const sc=Math.max(r.width/vw,r.height/vh),ox=(r.width-vw*sc)/2,oy=(r.height-vh*sc)/2;
    let sx=(f.left-r.left-ox)/sc,sy=(f.top-r.top-oy)/sc,sw=f.width/sc,sh=f.height/sc;
    const mx=sw*.04,my=sh*.04;sx=Math.max(0,sx-mx);sy=Math.max(0,sy-my);sw=Math.min(vw-sx,sw+2*mx);sh=Math.min(vh-sy,sh+2*my);
    const k=o.read?Math.min(2,(o.maxW||1600)/sw):1,c=document.createElement('canvas');c.width=Math.round(sw*k);c.height=Math.round(sh*k);
    const x=c.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(v,sx,sy,sw,sh,0,0,c.width,c.height);return c;
  };
  const run=async(c,file)=>{
    if(taken)return;taken=true;stopCam();
    if(!c&&file)c=await fileToCanvas(file);
    const blob=file||await new Promise(r=>c.toBlob(r,'image/jpeg',.9));
    if(!o.read){close();o.onDone(blob);return}
    img.src=c.toDataURL('image/jpeg',.8);img.style.display='block';ov.querySelector('.sbtns').style.display='none';st('⏳ بيقرا...');
    let res=null;
    try{res=await o.read(c,p=>{if(alive)st(`⏳ بيقرا ${Math.round(p*100)}%`)})}catch(e){res=null}
    if(!alive)return;close();o.onDone(blob,res);
  };
  btn('g').onclick=()=>{const i=document.createElement('input');i.type='file';i.accept='image/*';document.body.appendChild(i);i.onchange=()=>{const f=i.files[0];i.remove();if(f)run(null,f)};i.click()};
  btn('c').onclick=()=>{if(v.videoWidth&&!taken)run(grabFrame())};
  try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'},width:{ideal:2560},height:{ideal:1440}},audio:false})}
  catch(e){st('📷 اسمح بالكاميرا، أو اختار صورة');return}
  if(!alive){stopCam();return}
  v.srcObject=stream;try{await v.play()}catch(e){}
  try{const tr=stream.getVideoTracks()[0],cp=tr.getCapabilities?tr.getCapabilities():{};
    if(cp.focusMode&&cp.focusMode.includes('continuous'))tr.applyConstraints({advanced:[{focusMode:'continuous'}]}).catch(()=>{});
    if(cp.torch){btn('t').style.visibility='';btn('t').onclick=()=>{torch=!torch;tr.applyConstraints({advanced:[{torch}]}).catch(()=>{})}}}catch(e){}
  st(o.hint);
  const mc=document.createElement('canvas');mc.width=mc.height=64;const mxc=mc.getContext('2d',{willReadFrequently:true});
  const measure=()=>{
    mxc.drawImage(v,0,0,64,64);const d=mxc.getImageData(0,0,64,64).data,g=new Float32Array(4096);let sum=0,diff=0,shp=0;
    for(let i=0;i<4096;i++){g[i]=(d[i*4]+d[i*4+1]+d[i*4+2])/3;sum+=g[i];if(prev)diff+=Math.abs(g[i]-prev[i])}
    for(let y=1;y<63;y++)for(let x=1;x<63;x++){const i=y*64+x;shp+=Math.abs(g[i]-g[i-1])+Math.abs(g[i]-g[i-64])}
    const r=prev?diff/4096:99;prev=g;return{r,b:sum/4096,sh:shp/3844};
  };
  const loop=()=>{
    if(!alive||taken)return;
    if(v.videoWidth){
      const m=measure();maxSh=Math.max(maxSh*.995,m.sh);
      if(m.r<6&&m.b>20&&m.sh>=maxSh*.7&&Date.now()-t0>1200)still++;else still=0;
      st(still?'✋ ثبّت الموبايل...':o.hint);
      if(still>=5){run(grabFrame());return}
    }
    setTimeout(loop,250);
  };
  loop();
}
function snapPhoto(o,cb){
  openScanner({title:o.title,hint:o.hint,card:!!o.card,onCancel:o.onCancel,
    onDone:async blob=>{const ids=await addFiles([new File([blob],(o.name||'photo')+'-'+today()+'.jpg',{type:'image/jpeg'})]);cb(ids[0])}});
}
/* اختيار صور أو ملفات من الموبايل (اسمها pickAny عشان متتعارضش مع pickFiles اللي في app.js) */
function pickAny(accept,cb){
  const i=document.createElement('input');i.type='file';i.accept=accept;i.multiple=true;i.style.display='none';document.body.appendChild(i);
  i.onchange=async()=>{const fs=[...i.files];i.remove();if(!fs.length)return;const ids=await addFiles(fs);cb(ids)};
  i.click();
}
const pickGallery=cb=>pickAny('image/*',cb);
const photosBox=(files,rm)=>(files||[]).length?`<div class="files">${files.map((f,i)=>`<div class="phw">${fileThumb(f,'view')}<button type="button" class="mini danger phx" onclick="${rm}(${i})">✕</button></div>`).join('')}</div>`:'';
const photoBtns=(snap,gal,files,share)=>`<div class="${files.length?'three':'two'}"><button type="button" class="btn ghost" onclick="${snap}()">📷 صوّر</button><button type="button" class="btn ghost" onclick="${gal}()">🖼️ من الصور</button>${files.length?`<button type="button" class="btn ghost" onclick="${share}">📤 إرسال</button>`:''}</div>`;

/* ========== الريسيت: بيقرا المكان والمبلغ والأرقام والعنوان ========== */
function normPhone(x){
  let p=latD(x).replace(/\D/g,'');
  if(p.startsWith('0020'))p='0'+p.slice(4);
  else if(p.startsWith('20')&&p.length===12)p='0'+p.slice(2);
  if(p.length===10&&p.startsWith('1'))p='0'+p;
  return p.length>=5?p:'';
}
const BIDI=/[\u200e\u200f\u202a-\u202e\u2066-\u2069]/g;
/* الأرقام العربي (٠١٢) والفارسي (۰۱۲) بتتحول لأرقام عادية */
const arD=s=>String(s||'').replace(BIDI,'').replace(/[\u0660-\u0669]/g,d=>d.charCodeAt(0)-0x0660).replace(/[\u06F0-\u06F9]/g,d=>d.charCodeAt(0)-0x06F0).replace(/\u066B/g,'.').replace(/\u066C/g,',');
const fixDec=s=>s.replace(/(\d),(\d{2})(?!\d)/g,'$1.$2');
const splitLines=t=>fixDec(latD(arD(t))).split(/\n+/).map(s=>s.trim()).filter(Boolean);
function sim(a,b){
  const n=s=>normAr(String(s)).toLowerCase().replace(/[\s\u0640]+/g,'');a=n(a);b=n(b);
  if(!a||!b)return 0;if(a===b)return 1;if(a.length<2||b.length<2)return 0;
  const bg=s=>{const m=new Map();for(let i=0;i<s.length-1;i++){const k=s.slice(i,i+2);m.set(k,(m.get(k)||0)+1)}return m};
  const A=bg(a),B=bg(b);let c=0;A.forEach((v,k)=>{c+=Math.min(v,B.get(k)||0)});
  return 2*c/((a.length-1)+(b.length-1));
}
/* سطور عامة بتتطبع على ريسيتات محلات كتير، مش اسم المحل */
const SKIPM=/(tel|phone|mob|fax|www|http|@|vat|tax|invoice|receipt|cashier|date|time|welcome|cash|sales|order|table|thank|visit|delivery|take\s*away|copy|shopping|فاتور|ايصال|إيصال|قسيم|مرتجع|سند|تليفون|هاتف|موبايل|ضريب|سجل|تاريخ|الوقت|كاشير|رقم|عنوان|شارع|اهلا|أهلا|مرحبا|مبيعات|كاش|نقد|البون|الوردي|المستند|العميل|البائع|صنف|كمية|سعر|قيمة|الاجمال|الإجمال|المطلوب|مدفوع|المدفوع|الباقي|الصافي|المتبقي|بجوار|شكر|زيار|نتمن|طلب|طاول|ترابيز|تيك|دليفري|ديليفري|توصيل|نسخ|(?:^|\s)بيع(?:\s|$))/i;
const ADRW=/(شارع|ش\.|عمار[ةه]|بجوار|امام|أمام|خلف|ميدان|طريق|الدور|برج|شطر|الشطر|بلوك|مجاور|منطق|مدين[ةه]|street|road)/i;
const ADDR=/(شارع|ش\.|عمار|برج|بجوار|امام|أمام|خلف|ميدان|طريق|مدينه|مدينة|الدور|مول|شطر|street|st\.|road|mall)/i;
const VEND=/(برم|الحلول|حلول|متطور|powered|software|developed|تصميم|نظام|system)/i;
const isAr=t=>/[\u0621-\u064A]/.test(t);
/* المرشحين لاسم المحل: السطور الملخبطة (زي الشعار) بتتجاهل ومبتتحسبش */
function merchantCands(lines){
  const out=[];
  for(const ln of lines.slice(0,40)){
    if(out.length>=6)break;
    const l=fixDec(latD(arD(ln)));
    if(SKIPM.test(l)||ADRW.test(l)||VEND.test(l)||/\d/.test(l))continue;
    const ws=l.replace(/[^A-Za-z\u0621-\u064A\s&']/g,' ').split(/\s+/).filter(Boolean);
    let gd=ws.filter(w=>w.replace(/\u0640/g,'').length>=3&&!/^(.)\1/.test(w));
    const arN=gd.filter(isAr).length,enN=gd.length-arN;
    if(arN&&enN)gd=gd.filter(w=>isAr(w)===(arN>=enN));
    const bad=ws.length-gd.length,letters=gd.join('').replace(/\u0640/g,'').length;
    if(!gd.length||letters<5||bad*2>gd.length+1)continue;
    const s=gd.join(' ').slice(0,40),ar=isAr(s);
    if(!ar&&gd.some(w=>/[a-z]/.test(w)&&/[A-Z]/.test(w.slice(1))))continue;
    const k=out.length;
    out.push({s,sc:Math.min(letters,24)*2-bad*4-k*3+(ar?12:0)-(gd.length>5?12:0)});
  }
  return out;
}
function rankMerchants(cs){
  const cl=[];
  cs.forEach(c=>{const g=cl.find(g=>sim(g.top.s,c.s)>=.7);if(g){g.n++;if(c.sc>g.top.sc)g.top=c}else cl.push({top:c,n:1})});
  cl.forEach(g=>g.v=g.top.sc+Math.min(g.n-1,3)*6);
  return cl.sort((a,b)=>b.v-a.v).map(g=>g.top.s);
}
const pickMerchant=cs=>rankMerchants(cs)[0]||'';
/* المحلات اللي اشتريت منها قبل كده بس */
function storeCats(){
  const ids=new Set();S.buys.forEach(b=>b.catId&&ids.add(b.catId));S.contacts.forEach(c=>c.catId&&ids.add(c.catId));
  return S.cats.filter(c=>c.kind==='exp'&&(ids.has(c.id)||(c.alias||[]).length));
}
/* بيدور على محل معروف في الريسيت كله، وبيرجّع الاسم اللي لقاه بيه */
function knownStore(lines){
  const known=[];
  storeCats().forEach(c=>[c.name,...(c.alias||[])].forEach(n=>{const k=normAr(n).replace(/\s+/g,'');if(k.length>=4)known.push({n,k,c})}));
  if(!known.length)return null;
  const flat=normAr(lines.join(' ')).replace(/\s+/g,'');
  let best=null,bl=0;
  known.forEach(x=>{if(flat.includes(x.k)&&x.k.length>bl){bl=x.k.length;best=x}});
  if(best)return{c:best.c,n:best.n};
  let bs=0;
  for(const l of lines){
    if(/\d{3,}/.test(l)||l.length<4)continue;const ws=l.split(/\s+/);
    for(const x of known){
      const nw=x.n.trim().split(/\s+/).length;let s=sim(l,x.n);
      for(let w=Math.max(1,nw-1);w<=nw+1;w++)for(let i=0;i+w<=ws.length;i++)s=Math.max(s,sim(ws.slice(i,i+w).join(' '),x.n));
      if(s>bs){bs=s;best=x}
    }
  }
  return bs>=.62&&best?{c:best.c,n:best.n}:null;
}
/* بيحدد اسم المحل: من رقم التليفون الأول، وبعدين من الأسماء المعروفة */
function lookStore(r,lines,extra){
  r.names=rankMerchants(r.cands.concat(extra||[]));r.merchant=r.names[0]||'';
  r.match=null;r.matchBy='';r.phMatch=false;
  const byPh=r.phones.length?findPhone(r.phones):null,bc=byPh&&byPh.c.catId?C(byPh.c.catId):null;
  if(bc&&bc.kind==='exp'){r.match=bc;r.phMatch=true;return r}
  const ks=knownStore(lines);if(ks){r.match=ks.c;r.matchBy=ks.n}
  return r;
}
function fixAddr(s){
  let w=s.split(/\s+/).filter(Boolean);
  for(let i=1;i<w.length;i++){const m=w[i].match(/^([يى])((?:ال|لل)[\u0621-\u064A]{2,})$/);if(m&&/[\u0621-\u064A]{2,}$/.test(w[i-1])){w[i-1]+=m[1];w[i]=m[2]}}
  w=w.reduce((o,x)=>{if(/^[يى]$/.test(x)&&o.length&&/[\u0621-\u064A]$/.test(o[o.length-1]))o[o.length-1]+=x;else o.push(x);return o},[]);
  w=w.flatMap(x=>{const m=x.match(/^([\u0621-\u064A]{3,})(ال[\u0621-\u064A]{3,})$/);return m?[m[1],m[2]]:[x]});
  return w.join(' ');
}
/* الأرقام */
const PH=/(?<![\d.])(?:\+?20|0020)?0?1[0125]\d{8}(?![\d.])|(?<![\d.])0[2-9]\d{7,8}(?![\d.])|(?<![\d.])1[69]\d{3}(?![\d.])/g;
const MOB=/(?<!\d)(?:\+?20|0020)?0?1[0125]\d{8}(?!\d)/g;
const NOPH=/(ضريب|سجل|tax|vat|رقم\s*ال(?:فاتور|مستند|طلب)|invoice|receipt\s*no|order\s*no|بون)/i;
/* سطر فيه كلمة تليفون (ت: / ت؛ / تليفون / هاتف / tel ...) */
const PHK=/(?:^|[^\u0621-\u064A])ت\s*[:.؛،]|[:.؛،]\s*ت(?![\u0621-\u064A])|تليفون|تلفون|هاتف|موبايل|محمول|جوال|واتس|whats|tel|mob|phone|call|hotline|ساخن/i;
const digFix=s=>s.replace(/[Oo](?=\d)|(?<=\d)[Oo]/g,'0');
function phonesOf(lines){
  const per=lines.map(l=>{
    if(VEND.test(l)||NOPH.test(l))return[];
    const kw=PHK.test(l);
    let f=digFix(l);
    if(kw)f=f.replace(/(?<=[\d\s:\-]|^)[.·•](?=\d)/g,'0');
    let ps=(f.match(PH)||[]).filter(p=>kw||p.replace(/\D/g,'').length>5);
    if(!ps.length)ps=f.replace(/(\d) (?=\d)/g,'$1').match(MOB)||[];
    return ps.map(normPhone).filter(Boolean);
  });
  const lastI=per.reduce((a,p,i)=>p.length?i:a,-1);
  if(lastI>=0&&lastI===lines.length-1&&per[lastI].length===1&&per.slice(0,lastI).some(p=>p.length))per[lastI]=[];
  const out=[];
  per.flat().forEach(p=>{if(!out.includes(p))out.push(p)});
  return out;
}
function mergePh(a,b){
  const near=(x,y)=>x.length===y.length&&[...x].filter((ch,i)=>ch!==y[i]).length<=1;
  const cl=[];
  [...a.map(p=>[p,1.1]),...b.map(p=>[p,1])].forEach(([p,w])=>{const g=cl.find(g=>g.ps.some(q=>near(q.p,p)));if(g){const q=g.ps.find(q=>q.p===p);if(q)q.w+=w;else g.ps.push({p,w})}else cl.push({ps:[{p,w}]})});
  return cl.map(g=>g.ps.sort((x,y)=>y.w-x.w)[0].p);
}
function parseReceipt(text){
  const lines=splitLines(text),T=lines.join('\n');
  const nums=s=>(s.match(/\d[\d,]*(?:\.\d{1,2})?/g)||[]).map(x=>parseFloat(x.replace(/,/g,''))).filter(x=>x>0&&x<1e6);
  const TOT=/(grand\s*total|total|net\s*amount|amount\s*due|to\s*pay|الاجمالي|اجمالي|المجموع|الصافي|صافي|المطلوب|المستحق|مدفوع|paid)/i;
  const NOT=/(sub\s*-?\s*total|قبل|vat|tax|ضريب|خصم|discount|qty|عدد|change|الباقي|المتبقي|units|items)/i;
  const TC=[];
  lines.forEach((l,i)=>{const u=l.replace(/ى/g,'ي').replace(/[أإآ]/g,'ا');if(!TOT.test(u)||NOT.test(u))return;let n=nums(l);if(!n.length&&lines[i+1])n=nums(lines[i+1]);if(n.length)TC.push(Math.round(Math.max(...n)*100)/100)});
  let total=0,rep=0;
  if(TC.length){const cnt={};TC.forEach(v=>cnt[v]=(cnt[v]||0)+1);const k=Object.keys(cnt).sort((a,b)=>cnt[b]-cnt[a]||b-a)[0];total=+k;rep=cnt[k]}
  else{const m=lines.flatMap(l=>/\d\.\d{2}\b/.test(l)?nums(l):[]).filter(x=>x<100000);if(m.length)total=Math.max(...m)}
  let date=null;
  for(const l of lines){
    let m=l.match(/(20\d{2})\s*[\/\-.]\s*(\d{1,2})\s*[\/\-.]\s*(\d{1,2})/),d=null;
    if(m)d=`${m[1]}-${pad(+m[2])}-${pad(+m[3])}`;
    else if((m=l.match(/\b(\d{1,2})\s*[\/\-.]\s*(\d{1,2})\s*[\/\-.]\s*(\d{2,4})\b/))){let y=+m[3];if(y<100)y+=2000;d=`${y}-${pad(+m[2])}-${pad(+m[1])}`}
    if(d){const[,mo,dd]=d.split('-').map(Number);if(mo>=1&&mo<=12&&dd>=1&&dd<=31&&d<=today()&&daysBetween(today(),d)<=90){date=d;break}}
  }
  let time='';
  const tl=lines.find(l=>/(الوقت|time)/i.test(l));
  let tm=tl&&tl.match(/(?<![\d.\/])([01]?\d|2[0-3])\s*[:.;،]\s*([0-5]\d)(?![\d\/])/);
  if(!tm)for(const l of lines){const m=l.match(/(?<![\d.\/])([01]?\d|2[0-3])\s*:\s*([0-5]\d)(?![\d\/])/);if(m){tm=m;break}}
  if(tm){const src=tl&&tl.includes(tm[0])?tl:T;let h=+tm[1];if(/(pm|مساء)/i.test(src)&&h<12)h+=12;if(/(am|صباح)/i.test(src)&&h===12)h=0;time=pad(h)+':'+tm[2]}
  let no='';const nm2=T.match(/(?:رقم\s*الفاتور[ةه]|فاتور[ةه]\s*رقم|invoice\s*(?:no|#)|receipt\s*(?:no|#)|bill\s*(?:no|#)|order\s*(?:no|#)|المستند|البون)\s*[:#.\-]?\s*([A-Za-z]{0,3}\d{2,10})/i);if(nm2)no=nm2[1].toUpperCase();
  const cands=merchantCands(lines);
  const l4=new Set([...T.matchAll(/[*xX•#]{2,}[\s*xX•#-]*(\d{4})(?!\d)/g)].map(m=>m[1]).concat([...T.matchAll(/(?:card|visa|master|meeza|ending|بطاق|كارت|فيزا)[^\n]{0,30}?(\d{4})(?!\d)/gi)].map(m=>m[1])));
  const card=S.cards.find(c=>l4.has(c.last4))||null;
  const cash=!card&&/(cash|كاش|نقد)/i.test(T);
  const phones=phonesOf(lines);
  const al=lines.find(l=>ADDR.test(l)&&!VEND.test(l));
  let address='';
  if(al)address=fixAddr(al.replace(/(?:\+?20|0020)?0?1[0125]\d{8}/g,'').replace(/\s+/g,' ').trim().replace(/^(?:[^\s\d]\s+)+/,'').replace(/(?:\s+[^\s\d])+$/,'')).slice(0,90);
  const deliv=/(delivery|دليفري|ديليفري|توصيل)/i.test(T);
  const rest=/(restaurant|cafe|café|مطعم|كافيه|كافيتريا|مشويات|بيتزا|pizza|burger|برجر)/i.test(T);
  return{total,TC,rep,date,time,no,merchant:pickMerchant(cands),names:[],cands,match:null,matchBy:'',phMatch:false,phForced:false,card,cash,phones,address,deliv,rest,items:[]};
}
/* ========== الأصناف: الاسم والكمية والسعر والقيمة ========== */
/* كل الأسماء هنا بتبدأ بـ bi عشان متتعارضش مع أي اسم في app.js */
const bi2=x=>Math.round(x*100)/100;
/* كلمات سطر العناوين (صنف / كمية / سعر / قيمة) */
const BI_HEAD=/(صنف|كمي|سعر|قيم|item|qty|quantity|price|amount|description|البيان)/gi;
const BI_META=/(تاريخ|الوقت|date|time|البون|المستند|الوردي|كاشير|البائع|العميل|cashier|invoice|فاتور)/i;
const BI_STOP=/(الاجمال|الإجمال|اجمالي|إجمالي|المطلوب|المجموع|الصافي|total|no\.?\s*of)/i;
/* بيشيل الوقت والتاريخ والأرقام الطويلة (تليفونات) قبل ما يدوّر على أرقام الصنف */
const biClean=l=>l.replace(/\d{1,2}\s*:\s*\d{2}(?:\s*:\s*\d{2})?/g,' ').replace(/\d{1,4}\s*[\/\-]\s*\d{1,2}\s*[\/\-]\s*\d{1,4}/g,' ').replace(/\d{7,}/g,' ');
/* لازم 3 أرقام، وواحد منهم = حاصل ضرب التانيين (الكمية × السعر = القيمة).
   الترتيب مش فارق، والكمية هي الرقم اللي فيه كسر (زي 1.37 كيلو) */
function biSplit(nums){
  const ok=(q,p,v)=>q>0&&p>0&&v>0&&Math.abs(q*p-v)<=Math.max(.02,v*.006);
  const dec=n=>Math.abs(n-Math.round(n))>.001;
  const t=nums.slice(-4);let best=null;
  for(let i=0;i<t.length;i++)for(let j=i+1;j<t.length;j++)for(let k=0;k<t.length;k++){
    if(k===i||k===j)continue;
    const a=t[i],b=t[j],c=t[k];if(!ok(a,b,c))continue;
    const q=dec(a)&&!dec(b)?a:dec(b)&&!dec(a)?b:Math.min(a,b),p=q===a?b:a;
    const sc=(c>=Math.max(a,b)?2:0)+(k===t.length-1||k===0?1:0);
    if(!best||sc>best.sc)best={q,p,v:c,sc};
  }
  return best?{q:best.q,p:best.p,v:best.v}:null;
}
/* بيقرا الأصناف بـ 3 طرق، وبياخد اللي يطلع منها نتيجة:
   1) كل صنف في سطر   2) كل رقم في سطر لوحده   3) الأعمدة جاية ورا بعض (كميات، أسعار، قيم) */
function biParse(text){
  const lines=splitLines(text);
  let st=-1;
  for(let i=0;i<lines.length&&st<0;i++){
    const acc=new Set();
    for(let j=i;j<Math.min(lines.length,i+4);j++){
      if(/\d/.test(lines[j]))break;
      (normAr(lines[j]).match(BI_HEAD)||[]).forEach(x=>acc.add(x.toLowerCase()));
      if(acc.size>=2){st=j;break}
    }
  }
  const tok=[];
  for(let i=st+1;i<lines.length;i++){
    const l=lines[i];
    if(BI_STOP.test(l))break;
    if(BI_META.test(l)||PHK.test(l)||ADRW.test(l)||VEND.test(l))continue;
    const cl=biClean(l);
    tok.push({nums:(cl.match(/\d+(?:\.\d+)?/g)||[]).map(Number).filter(x=>x>0),name:cl.replace(/[^A-Za-z\u0621-\u064A\s]/g,' ').replace(/\s+/g,' ').trim(),skip:SKIPM.test(l)});
  }
  const okName=t=>t.name.replace(/\s/g,'').length>=2&&!t.skip;
  const rows=[];let pend='';
  tok.forEach(t=>{
    if(!t.nums.length){pend=okName(t)?t.name:'';return}
    const it=biSplit(t.nums);if(!it){pend='';return}
    rows.push({n:(okName(t)?t.name:'')||pend||'صنف',q:it.q,p:it.p,v:it.v});pend='';
  });
  if(rows.length)return rows.slice(0,60);
  const names=tok.filter(okName).map(t=>t.name),stream=tok.flatMap(t=>t.nums);
  const named=a=>a.map((it,k)=>({n:names[k]||'صنف',...it}));
  let cols=[];
  if(stream.length>=3&&stream.length%3===0){
    const n=stream.length/3;
    for(let i=0;i<n;i++){const it=biSplit([stream[i],stream[n+i],stream[2*n+i]]);if(!it){cols=[];break}cols.push(it)}
  }
  const win=[];
  for(let i=0;i+2<stream.length;){const it=biSplit(stream.slice(i,i+3));if(it){win.push(it);i+=3}else i++}
  const best=cols.length>=win.length?cols:win;
  return named(best).slice(0,60);
}
function mergeRc(a,b){
  const sc=r=>(r.TC.length?3:0)+(r.merchant?2:0)+(r.time?1:0)+(r.date?1:0)+Math.min(2,r.phones.length);
  const[A,B]=sc(b)>sc(a)?[b,a]:[a,b];
  ['time','date','address','card','no'].forEach(k=>{if(!A[k])A[k]=B[k]});
  A.cands=a.cands.concat(b.cands);
  A.cash=A.cash||B.cash;A.deliv=A.deliv||B.deliv;A.rest=A.rest||B.rest;
  A.phones=mergePh(A.phones,B.phones);
  const cnt={};[...a.TC,...b.TC].forEach(v=>cnt[v]=(cnt[v]||0)+1);
  const ks=Object.keys(cnt);if(ks.length)A.total=+ks.sort((x,y)=>cnt[y]-cnt[x]||y-x)[0];
  else if(!A.total)A.total=B.total;
  return A;
}
/* بصمة صغيرة للصورة: نفس الصورة = نفس البصمة تقريباً */
function dHash(c){
  const t=document.createElement('canvas');t.width=9;t.height=8;const x=t.getContext('2d',{willReadFrequently:true});
  x.drawImage(c,0,0,9,8);const d=x.getImageData(0,0,9,8).data;let s='';
  for(let y=0;y<8;y++){let v=0;for(let i=0;i<8;i++){const a=(y*9+i)*4,g1=d[a]+d[a+1]+d[a+2],g2=d[a+4]+d[a+5]+d[a+6];v=(v<<1)|(g1>g2?1:0)}s+=v.toString(16).padStart(2,'0')}
  return s;
}
function hamm(a,b){if(!a||!b||a.length!==b.length)return 99;let n=0;for(let i=0;i<a.length;i+=2){let v=parseInt(a.substr(i,2),16)^parseInt(b.substr(i,2),16);while(v){n+=v&1;v>>=1}}return n}
const EMPTYRC=()=>({total:0,TC:[],rep:0,date:null,time:'',no:'',merchant:'',names:[],cands:[],match:null,matchBy:'',phMatch:false,phForced:false,card:null,cash:false,phones:[],address:'',deliv:false,rest:false,ph:'',raw:'',verr:'',items:[]});
/* القراءة: من النت لو فيه مفتاح، ولو مفيش أو فشل: الطريقة العادية */
function scanReceipt(){
  openScanner({title:'Receipt Scan',hint:'📄 خلي الريسيت كله جوه الإطار وثبّت',maxW:1800,
    read:async(c,onP)=>{
      const ph=dHash(c),errs=[];
      for(const[name,fn,has]of CLOUD){
        if(!has())continue;
        try{
          onP(.3);
          const tv=await fn(c);
          if(tv&&tv.replace(/\s+/g,'').length>10){
            const r=lookStore(parseReceipt(tv),splitLines(tv));
            try{r.items=biParse(tv)}catch(e){r.items=[]}
            r.ph=ph;r.raw='── '+name+' ──\n'+tv.trim();return r;
          }
          errs.push(name+': مرجعش كلام من الصورة');
        }catch(e){errs.push(name+': '+String((e&&e.message)||e))}
      }
      const verr=errs.join(' · ');
      try{
        const orig=cloneCanvas(c),base=cloneCanvas(c),head=cropTop(c,.5);prepCanvas(c);
        const P={tessedit_pageseg_mode:'6',preserve_interword_spaces:'1'};
        const t1=await ocr('ara+eng',c,P,p=>onP(p*.4));
        prepCanvas(head);
        const tH=await ocr('ara+eng',head,P,p=>onP(.4+p*.15));
        let r=parseReceipt(t1);
        const texts=[t1,tH],lbl=['── الريسيت كله ──','── الجزء اللي فوق ──'];
        if(r.rep<2){
          prepCanvas(base,{bin:true});
          const t2=await ocr('ara+eng',base,{tessedit_pageseg_mode:'4',preserve_interword_spaces:'1'},p=>onP(.55+p*.2));
          texts.push(t2);lbl.push('── قراءة تانية ──');r=mergeRc(r,parseReceipt(t2));
        }
        const rh=parseReceipt(tH);
        r.phones=mergePh(r.phones,rh.phones);if(!r.address)r.address=rh.address;
        const extra=merchantCands(splitLines(tH)).map(x=>({...x,sc:x.sc+8}));
        lookStore(r,texts.flatMap(t=>splitLines(t)),extra);
        if(!r.names.length&&!r.match){
          prepCanvas(orig);
          const t3=await ocr('ara+eng',orig,{tessedit_pageseg_mode:'3',preserve_interword_spaces:'1'},p=>onP(.75+p*.25));
          texts.push(t3);lbl.push('── قراءة تلقائية ──');r=mergeRc(r,parseReceipt(t3));
          lookStore(r,texts.flatMap(t=>splitLines(t)),extra);
        }
        r.ph=ph;r.verr=verr;r.items=[];
        r.raw=(verr?'⚠️ '+verr+'\n\n':'')+texts.map((t,i)=>lbl[i]+'\n'+String(t||'').trim()).join('\n\n');
        return r;
      }catch(e){const m=String((e&&e.message)||e);return{...EMPTYRC(),err:m,raw:'⚠️ '+(verr?verr+' · ':'')+m,verr}}
    },
    onDone:async(blob,rc)=>{const ids=await addFiles([new File([blob],'receipt-'+today()+'.jpg',{type:'image/jpeg'})]);receiptFlow(rc,ids[0])}});
}

/* اختيار اسم المكان: كذا اختيار تدوس عليه، أو تكتب، و"🔍 اللي البرنامج قراه" تحت العنوان */
let NMR=null,NMO=[];
function askStore(rc){
  const o=[],add=s=>{s=(s||'').trim();if(s&&!o.some(x=>normAr(x)===normAr(s)))o.push(s)};
  if(rc.match)add(rc.match.name);(rc.names||[]).slice(0,4).forEach(add);
  NMO=o.slice(0,5);const star=!!rc.match,raw=String(rc.raw||'').trim(),hasTxt=raw.replace(/──[^\n]*──/g,'').replace(/⚠️[^\n]*/g,'').replace(/\s+/g,'').length>10;
  const diag=hasTxt?`<details class="gen" style="margin:0 0 8px"><summary>🔍 اللي البرنامج قراه</summary><pre style="white-space:pre-wrap;font:inherit;font-size:11px;max-height:260px;overflow:auto;margin:6px 0">${esc(raw)}</pre></details>`
    :`<p class="warn">⚠️ البرنامج مقراش أي كلام من الصورة${rc.err||rc.verr?'<br><small>'+esc([rc.verr,rc.err].filter(Boolean).join(' · '))+'</small>':''}</p>`;
  return new Promise(res=>{
    sheet(`<h2>🧾 اسم المكان؟</h2>
    ${diag}
    ${NMO.length?`<p class="muted">دوس على الاسم الصح</p><div class="list">${NMO.map((s,i)=>`<div class="row" onclick="nmPick(${i})"><span class="ic" style="background:var(--soft)">${star&&!i?'⭐':'🏪'}</span><div class="grow"><b>${esc(s)}</b>${star&&!i?`<small>${rc.phMatch?'عرفته من رقم التليفون':'متسجل عندك قبل كده'}</small>`:''}</div></div>`).join('')}</div>`:''}
    <label>${NMO.length?'مش موجود؟ اكتب الاسم':'اكتب اسم المكان'}<input id="nm-in" list="nm-dl" autocomplete="off" onkeydown="if(event.key==='Enter')nmPick(-1)"></label>
    <datalist id="nm-dl">${storeCats().map(c=>`<option value="${esc(c.name)}"></option>`).join('')}</datalist>
    <button class="btn" onclick="nmPick(-1)">تمام</button>
    <button class="btn ghost" onclick="closeSheet()">إلغاء</button>`);
    NMR=res;
  });
}
function nmPick(i){
  const v=i>=0?NMO[i]:(($('#nm-in')||{}).value||'').trim();
  if(!v)return toast('اكتب الاسم');
  const r=NMR;NMR=null;closeSheet();if(r)r({name:v});
}
/* بيحفظ القراءة الغلط كاسم بديل، بس لو شبه اسم المحل ومش سطر عام */
function learnAlias(cat,rc){
  const top=(rc.names||[])[0];if(!top)return;
  const k=normAr(top),kk=k.replace(/\s+/g,'');
  if(kk.length<6||k===normAr(cat.name)||sim(top,cat.name)<.3)return;
  if((S.settings.genA||[]).includes(k))return;
  if(S.cats.some(c=>c.id!==cat.id&&[c.name,...(c.alias||[])].some(n=>normAr(n)===k)))return;
  const m=ocrAll();if(S.buys.some(b=>b.catId!==cat.id&&m[b.id]&&normAr(m[b.id]).replace(/\s+/g,'').includes(kk)))return;
  cat.alias=[...new Set([...(cat.alias||[]),top])].slice(-8);
}
/* لو اقترح محل غلط واخترت غيره، بيمسح الاسم البديل اللي لخبطه */
function unlearn(c,n){
  if(!c||!n||normAr(n)===normAr(c.name))return;
  const k=normAr(n);
  c.alias=(c.alias||[]).filter(a=>normAr(a)!==k);
  S.settings.genA=[...new Set([...(S.settings.genA||[]),k])].slice(-50);
}

/* الريسيت المكرر */
const toMin=t=>{const m=(t||'').match(/^(\d{1,2}):(\d{2})/);return m?+m[1]*60+ +m[2]:null};
let DUPX=null;
function findDup(cat,a,date,rc){
  const tB=toMin(rc.time);let best=null,bs=0;
  S.buys.forEach(b=>{
    const h=hamm(b.ph,rc.ph),amt=Math.abs((+b.total||0)-a)<.01,no=!!(rc.no&&b.no&&b.no===rc.no);
    const dd=b.date?Math.abs(daysBetween(b.date,date)):99,tA=toMin(b.rt);
    const store=b.catId===cat.id||sim(b.store,cat.name)>=.6;
    const tm=tA!=null&&tB!=null&&Math.abs(tA-tB)<=10,far=tA!=null&&tB!=null&&!tm;
    let s=0;
    if(h<=3&&(amt||dd<=7))s=10;
    else if(amt&&dd<=1&&!far&&(store||tm||h<=12))s=5+(store?1:0)+(tm?1:0);
    else if(no&&store&&dd<=3)s=4;
    if(s>bs){bs=s;best=b}
  });
  return best;
}
async function receiptFlow(rc,fid){
  rc=Object.assign(EMPTYRC(),rc||{});
  if(rc.err)toast('⚠️ القراءة ما نجحتش، كمّل يدوي');
  else if(rc.verr)toast('⚠️ '+rc.verr+' · اتقرا بالطريقة العادية');
  const pick=await askStore(rc);
  if(!pick)return toast('اتلغى');
  const n=pick.name;
  const cat=(rc.match&&normAr(rc.match.name)===normAr(n))?rc.match:(S.cats.find(c=>c.kind==='exp'&&normAr(c.name)===normAr(n))||ensureCat(n,'exp'));
  if(rc.match&&rc.match.id!==cat.id)unlearn(rc.match,rc.matchBy);
  learnAlias(cat,rc);cat.active=true;
  const card=rc.card,cashM=S.methods.find(m=>m.active&&m.type==='cash');
  let method,via,payTxt;
  if(card&&M(card.acct)){method=card.acct;via='card';payTxt=`💳 ${card.name} •••• ${card.last4}`}
  else if(rc.cash&&cashM){method=cashM.id;via='cash';payTxt='💵 كاش'}
  else{method=cat.acct&&M(cat.acct)?cat.acct:defMethod();via=cat.via||'';payTxt=M(method)?.name||''}
  /* المبلغ: خانة بتكتب فيها الرقم، وزرار حفظ */
  const a=parseNum(await askIn('المبلغ',`${cat.name}${payTxt?'\n'+payTxt:''}`,rc.total?amtStr(rc.total):'',true,'حفظ'));
  if(!(a>0))return toast('اتلغى');
  let date=rc.date||today();if(isClosed(date))date=today();
  if(isClosed(date))return toast('الشهر الحالي مقفول');
  if(!method)return toast('ضيف حساب الأول');
  const x={rc,fid,cat,method,via,card,a,date};
  const old=findDup(cat,a,date,rc);
  if(old){DUPX={old,go:()=>finishReceipt(x)};dupSheet(old);return}
  finishReceipt(x);
}
function dupSheet(b){
  sheet(`<h2>🧾 الريسيت ده شكله متسجل قبل كده</h2>
  ${b.fid?`<div class="files">${fileThumb(b.fid,'view')}</div>`:''}
  <div class="kv"><span>المحل</span><b>${esc(b.store)}</b></div>
  <div class="kv"><span>التاريخ</span><b>${whenTxt(b)}</b></div>
  <div class="kv"><span>المبلغ</span><b class="neg">${fmt(b.total)}</b></div>
  <button class="btn" onclick="dupEdit()">✏️ عدّل الموجود</button>
  <button class="btn ghost" onclick="dupReplace()">🔄 احذف القديم وسجّل الجديد</button>
  <button class="btn ghost" onclick="dupNew()">➕ لأ، دي فاتورة جديدة</button>
  <button class="btn ghost" onclick="DUPX=null;closeSheet()">إلغاء</button>`);
}
function dupEdit(){if(!DUPX)return;const id=DUPX.old.id;DUPX=null;buyEdit(id)}
function dupNew(){if(!DUPX)return;const go=DUPX.go;DUPX=null;closeSheet();go()}
function dupReplace(){
  if(!DUPX)return;const b=DUPX.old,t=S.txs.find(x=>x.id===b.txId);
  if(t&&isClosed(t.date))return toast('شهر الريسيت القديم مقفول');
  SKIPDEL=true;
  if(t)S.txs=S.txs.filter(x=>x.id!==t.id);
  S.buys=S.buys.filter(x=>x.id!==b.id);
  const go=DUPX.go;DUPX=null;closeSheet();save();go();
}
async function finishReceipt(x){
  const{rc,fid,cat,method,via,card,a,date}=x;
  const pk=await ask('الاستلام',rc.deliv?'🛵 الريسيت فيه توصيل':'',{icon:'🛍️',ok:'🛍️ من المكان',cancel:'🛵 دليفري'});
  if(pk===null)return toast('اتلغى');
  const deliv=!pk;
  let items=[];
  if((rc.items||[]).length){const r=await biReview(rc.items,a);items=r===null?rc.items.map(i=>({...i})):r}
  const t={id:uid(),type:'exp',amount:a,cat:cat.id,method,via,date,note:'🧾'+(deliv?' 🛵':'')+(card?' •••• '+card.last4:''),files:fid?[fid]:[],created:Date.now()};
  S.txs.push(t);
  const b={id:uid(),date,time:rc.time||(date===today()?nowTime():''),rt:rc.time||'',no:rc.no||'',txId:t.id,catId:cat.id,store:cat.name,items,total:a,method,via,card:card?card.last4:'',deliv,fid,ph:rc.ph||''};
  S.buys.push(b);save();render();
  if(rc.raw)ocrSave(b.id,rc.raw);
  contactFromReceipt(rc,cat);
  banner('🧾',`اتسجّل ${fmt(a)}`,cat.name,()=>buySheet(b.id),'ok');
}
/* شاشة مراجعة الأصناف: تعدّل أو تمسح أو تضيف، والمجموع بيتقارن بإجمالي الريسيت */
var BIT=[],BITT=0,BITR=null;
function biReview(items,total){
  BIT=(items||[]).map(x=>({...x}));BITT=+total||0;
  return new Promise(res=>{
    sheet(`<h2>🧾 الأصناف</h2>
    <p class="muted">راجع الأصناف، وعدّل أي حاجة اتقرت غلط</p>
    <div id="bi-rows"></div>
    <button type="button" class="mini" onclick="biAdd()">+ صنف</button>
    <div id="bi-sum" class="kv" style="margin-top:10px"></div>
    <button class="btn" onclick="biDone(true)">حفظ الأصناف</button>
    <button class="btn ghost" onclick="biDone(false)">من غير أصناف</button>`);
    BITR=res;biRows();
  });
}
function biRows(){
  const el=$('#bi-rows');if(!el)return;
  el.innerHTML=BIT.length?BIT.map((x,i)=>`<div class="bir"><input data-i="${i}" data-f="n" value="${esc(x.n)}" placeholder="اسم الصنف" oninput="biUpd(this)"><button type="button" class="mini danger bix" onclick="biDel(${i})">✕</button>
    <div class="three"><label>الكمية<input data-i="${i}" data-f="q" inputmode="decimal" dir="ltr" value="${x.q}" oninput="biUpd(this)"></label><label>السعر<input data-i="${i}" data-f="p" inputmode="decimal" dir="ltr" value="${x.p}" oninput="biUpd(this)"></label><label>القيمة<b data-v="${i}">${num(x.v)}</b></label></div></div>`).join(''):'<p class="empty">مفيش أصناف</p>';
  biSum();
}
function biUpd(el){
  const i=+el.dataset.i,f=el.dataset.f,x=BIT[i];if(!x)return;
  if(f==='n')x.n=el.value;
  else{x[f]=parseNum(el.value)||0;x.v=bi2(x.q*x.p);const b=document.querySelector(`#sheet [data-v="${i}"]`);if(b)b.textContent=num(x.v)}
  biSum();
}
function biSum(){
  const el=$('#bi-sum');if(!el)return;
  const s=bi2(BIT.reduce((a,x)=>a+(+x.v||0),0)),ok=!BITT||Math.abs(s-BITT)<=.05;
  el.innerHTML=`<span>مجموع الأصناف</span><b style="color:${ok?'#16a34a':'#dc2626'}">${num(s)}${ok?' ✓':` · الريسيت ${num(BITT)}`}</b>`;
}
function biDel(i){BIT.splice(i,1);biRows()}
function biAdd(){BIT.push({n:'',q:1,p:0,v:0});biRows()}
function biDone(keep){
  const r=BITR;BITR=null;
  const out=keep?BIT.filter(x=>(x.n||'').trim()&&x.v>0).map(x=>({n:x.n.trim(),q:x.q,p:x.p,v:x.v})):[];
  closeSheet();if(r)r(out);
}
/* سعر الصنف آخر مرة اشتريته */
function biHist(x,b){
  const key=o=>o.date+(o.time||''),kb=key(b);let best=null;
  S.buys.forEach(o=>{if(o.id===b.id||key(o)>kb)return;(o.items||[]).forEach(y=>{if(y&&y.n&&sim(y.n,x.n)>=.75&&(!best||key(o)>best.k))best={k:key(o),p:y.p}})});
  if(!best||!best.p)return'';
  const d=bi2(x.p-best.p);
  return sm(d?`آخر مرة ${num(best.p)} · ${d>0?'🔺':'🔻'} ${num(Math.abs(d))}`:'نفس سعر آخر مرة');
}
async function biEdit(id){
  const b=S.buys.find(x=>x.id===id);if(!b)return;
  const r=await biReview(b.items||[],b.total);
  if(r!==null){b.items=r;save();toast('اتحفظ ✓')}
  buySheet(id);
}
/* بيقرا الأصناف تاني من النص المحفوظ، من غير تصوير ومن غير ما يصرف من القراءات */
const biCloudRaw=raw=>/^(?:⚠️[^\n]*\n+)?── (?:OCR\.space|Google Vision) ──/.test(raw||'');
async function biReread(id){
  const b=S.buys.find(x=>x.id===id);if(!b)return;
  const raw=ocrGet(id);if(!biCloudRaw(raw))return toast('مفيش نص محفوظ للريسيت ده');
  const its=biParse(raw.replace(/^──[^\n]*──$/gm,''));
  if(!its.length)return say('ملقتش أصناف في النص','افتح 🔍 اللي البرنامج قراه ← 📋 انسخ، وابعت النص للمطوّر','🧾');
  const r=await biReview(its,b.total);
  if(r!==null){b.items=r;save();toast('اتحفظ ✓')}
  buySheet(id);
}
/* أرقام المحل: بيقولك لو الرقم متسجل وباسم مين، وبيضيف الأرقام الجديدة، وبيسجّل المحل لو مش موجود */
async function contactFromReceipt(rc,cat){
  await new Promise(r=>setTimeout(r,700));
  const phones=rc.phones||[];
  let mine=S.contacts.find(c=>c.catId===cat.id)||S.contacts.find(c=>normAr(c.name)===normAr(cat.name));
  if(!mine&&phones.length){const f=findPhone(phones);if(f)mine=f.c}
  if(!phones.length){
    if(mine&&!mine.catId){mine.catId=cat.id;save()}
    if(!mine||!(mine.phones||[]).length)askAddPhone(cat,rc,mine?mine.id:null);
    return;
  }
  const known=[],added=[];
  phones.forEach(p=>{
    const f=findPhone([p]);
    if(f)known.push(`📞 ${p}\nمتسجل قبل كده باسم: ${f.c.name}`);
    else added.push(p);
  });
  const isNew=!mine;
  if(mine){
    if(added.length)mine.phones=[...(mine.phones||[]),...added];
    if(!mine.address&&rc.address)mine.address=rc.address;
    if(!mine.catId)mine.catId=cat.id;
  }else{
    mine={id:uid(),name:cat.name,kind:rc.rest?'rest':'shop',spec:'',phones:added,address:rc.address||'',loc:'',catId:cat.id,at:Date.now()};
    S.contacts.push(mine);
  }
  save();
  const title=isNew?'الرقم مش متسجل، واتسجل في Contacts ✓':added.length?'اتضاف رقم جديد للمحل ✓':'الرقم متسجل قبل كده ✓';
  const body=[
    isNew?`🏪 ${mine.name}`:'',
    ...added.map(p=>`➕ ${p}${isNew?'':' (رقم جديد)'}`),
    ...known,
    isNew&&rc.address?'📍 '+rc.address:''
  ].filter(Boolean).join('\n\n');
  say(title,body,'📇');
}
/* لو ملقاش رقم، بيسألك تضيفه بإيدك (مرة واحدة لكل محل) */
async function askAddPhone(cat,rc,id){
  const np=S.settings.noPh||[];if(np.includes(cat.id))return;
  const r=await ask('ملقتش رقم المحل في الريسيت',`تحب تضيف رقم ${cat.name} في Contacts بإيدك؟`,{icon:'📇',ok:'➕ ضيف الرقم',cancel:'لأ'});
  if(r===null)return;
  if(!r){S.settings.noPh=[...np,cat.id];save();return}
  if(id)ctForm(id);else ctForm(null,{name:cat.name,catId:cat.id,address:rc.address||'',kind:rc.rest?'rest':'shop'});
}
/* النص اللي اتقرا من الريسيت (عشان نراجعه لو حاجة طلعت غلط) */
const OKEY='centric-ocr';
const ocrAll=()=>{try{return JSON.parse(localStorage.getItem(OKEY)||'{}')}catch(e){return{}}};
function ocrSave(id,t){try{const m=ocrAll();m[id]=String(t).slice(0,10000);const ks=Object.keys(m);while(ks.length>20)delete m[ks.shift()];localStorage.setItem(OKEY,JSON.stringify(m))}catch(e){}}
const ocrGet=id=>ocrAll()[id]||'';
function ocrDel(ids){try{const m=ocrAll();ids.forEach(id=>delete m[id]);localStorage.setItem(OKEY,JSON.stringify(m))}catch(e){}}
function ocrCopy(id){const t=ocrGet(id);if(!navigator.clipboard)return toast('مش قادر أنسخ');navigator.clipboard.writeText(t).then(()=>toast('اتنسخ ✓')).catch(()=>toast('مش قادر أنسخ'))}

/* ========== Contacts ========== */
const waNum=p=>/^01[0125]\d{8}$/.test(p)?'2'+p:'';
function findPhone(list,except){for(const c of S.contacts){if(c.id===except)continue;for(const p of c.phones||[])if(list.includes(p))return{c,p}}return null}
function mapURL(c){if(c.loc&&/^https?:/i.test(c.loc))return c.loc;const q=c.loc||c.address;return q?'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q):''}
const dupTxt=f=>`متسجل باسم "${f.c.name}"${f.c.catId&&C(f.c.catId)?` · ${C(f.c.catId).name}`:''}`;
/* إرسال بيانات جهة الاتصال لأي حد على واتساب */
const waShare=t=>'https://wa.me/?text='+encodeURIComponent(t);
function ctShareTxt(c){const mu=mapURL(c);return[c.name+(c.spec?' · '+c.spec:''),...(c.phones||[]).map(p=>'📞 '+p),c.address?'📍 '+c.address:'',mu?'🗺️ '+mu:''].filter(Boolean).join('\n')}
function ctShareMore(id){const c=S.contacts.find(x=>x.id===id);if(!c)return;const t=ctShareTxt(c);if(navigator.share)navigator.share({text:t}).catch(()=>{});else if(navigator.clipboard)navigator.clipboard.writeText(t).then(()=>toast('اتنسخ ✓')).catch(()=>{})}
function vContacts(){
  const list=S.contacts.filter(c=>ctab==='all'||c.kind===ctab).sort((a,b)=>a.name.localeCompare(b.name,'ar'));
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>📇 ${esc(L('contacts'))}</h3><button class="mini pri" onclick="ctForm(null,ctab!=='all'?{kind:ctab}:null)">+ إضافة</button></div>
  <div class="tabs ctabs">${[['all','الكل']].concat(Object.entries(CTK).map(([k,v])=>[k,v[0]+' '+v[1]])).map(([k,l])=>`<button class="${ctab===k?'on':''}" onclick="ctab='${k}';render()">${l}</button>`).join('')}</div>
  <div class="gsr">${FIC}<input id="ct-q" placeholder="فلتر: اسم، رقم، عنوان..." oninput="ctFilter(this.value)"></div>`;
  if(!list.length)return h+`<div class="nempty"><div>📇</div><b>لا يوجد</b></div>`;
  return h+`<div class="list" style="margin-top:8px">${list.map(c=>{const k=CTK[c.kind]||CTK.other,p=(c.phones||[])[0]||'',wa=waNum(p),mu=mapURL(c);
    return `<div class="row ctr" data-q="${esc(normAr(c.name+' '+(c.spec||'')+' '+(c.address||''))+' '+(c.phones||[]).join(' '))}" onclick="ctView('${c.id}')"><span class="ic" style="background:var(--soft)">${k[0]}</span><div class="grow"><b>${esc(c.name)}</b><small>${[c.spec,p].filter(Boolean).map(esc).join(' · ')}</small></div>
    <div class="cta">${p?`<a class="cbt" href="tel:${p}" onclick="event.stopPropagation()">📞</a>`:''}${wa?`<a class="cbt wa" href="https://wa.me/${wa}" target="_blank" onclick="event.stopPropagation()">${waIc('💬')}</a>`:''}${mu?`<a class="cbt" href="${esc(mu)}" target="_blank" onclick="event.stopPropagation()">📍</a>`:''}</div></div>`}).join('')}</div>`;
}
function ctFilter(q){q=normAr(latD(q));document.querySelectorAll('.ctr').forEach(r=>r.style.display=!q||r.dataset.q.includes(q)?'':'none')}
/* صفحة جهة الاتصال من جوا: تعديل وحذف فوق، والاتصال والواتساب والخريطة جنب الرقم */
function ctView(id){
  const c=S.contacts.find(x=>x.id===id);if(!c)return;const k=CTK[c.kind]||CTK.other,mu=mapURL(c),nb=S.buys.filter(b=>c.catId&&b.catId===c.catId).length,ph=c.phones||[];
  const mapBtn=mu?`<a class="cbt" href="${esc(mu)}" target="_blank">📍</a>`:'';
  sheet(`<div class="phead"><h2>${k[0]} ${esc(c.name)}</h2><div class="ctact"><button class="mini" onclick="ctForm('${id}')">✏️</button><button class="mini danger" onclick="ctDel('${id}')">🗑</button></div></div>
  ${c.spec?`<p class="muted">${esc(c.spec)}</p>`:''}
  ${ph.map((p,i)=>{const wa=waNum(p);return `<div class="phl"><b dir="ltr" style="text-align:right">${p}</b><a class="cbt" href="tel:${p}">📞</a>${wa?`<a class="cbt wa" href="https://wa.me/${wa}" target="_blank">${waIc('💬')}</a>`:''}${i===0?mapBtn:''}</div>`}).join('')}
  ${!ph.length&&mu?`<div class="phl"><b>الموقع</b>${mapBtn}</div>`:''}
  ${c.address?`<div class="kv"><span>العنوان</span><b>${esc(c.address)}</b></div>`:''}
  ${c.catId&&C(c.catId)?`<div class="kv"><span>البند</span><b>${esc(C(c.catId).name)}</b></div>`:''}
  ${ph.length?`<a class="btn wab" href="${waShare(ctShareTxt(c))}" target="_blank" dir="ltr">${waIc('💬')} Share Contact</a>
  <button class="mini ctsend" onclick="ctShareMore('${id}')" aria-label="Share">📤</button>`:''}
  ${nb?`<button class="btn ghost" onclick="BSTORE='${c.catId}';bq='';closeSheet();go('buy')">🛒 المشتروات (${nb})</button>`:''}`);
}
function ctForm(id,pre){
  const c=id?S.contacts.find(x=>x.id===id):{name:'',kind:'shop',spec:'',phones:[''],address:'',loc:'',catId:''};
  CTF={...c,phones:[...(c.phones&&c.phones.length?c.phones:[''])],...(pre||{})};ctSheet();
}
function ctSheet(){
  const c=CTF;NEXTF='ct';
  sheet(`<h2>📇 ${c.id?'تعديل':'إضافة'}</h2>
  <label>الاسم<input id="ct-n" value="${esc(c.name)}"></label>
  <div class="two"><label>النوع<select id="ct-k">${Object.entries(CTK).map(([k,v])=>`<option value="${k}" ${c.kind===k?'selected':''}>${v[0]} ${v[1]}</option>`).join('')}</select></label><label>الوصف<input id="ct-s" value="${esc(c.spec||'')}" placeholder="سباك، سوبر ماركت..."></label></div>
  <div class="fl">الأرقام</div>${c.phones.map((p,i)=>`<div class="inl" style="margin-bottom:2px"><input data-ph="${i}" type="tel" dir="ltr" value="${esc(p)}" placeholder="01xxxxxxxxx" oninput="ctDup(this)"><button type="button" class="mini danger" onclick="ctGrab();CTF.phones.splice(${i},1);if(!CTF.phones.length)CTF.phones=[''];ctSheet()">✕</button></div><small class="neg" data-dw="${i}" style="display:block;margin-bottom:6px"></small>`).join('')}
  <button type="button" class="mini" onclick="ctGrab();CTF.phones.push('');ctSheet()">+ رقم</button>
  <label>العنوان<input id="ct-a" value="${esc(c.address||'')}"></label>
  <label>اللوكيشن<div class="inl"><input id="ct-l" dir="ltr" value="${esc(c.loc||'')}" placeholder="https://maps.app.goo.gl/..."><button type="button" class="mini" onclick="ctHere()">📍 مكاني</button></div></label>
  <label>البند<select id="ct-c"><option value="">—</option>${catOpts(c.catId)}</select></label>
  <button class="btn" onclick="ctSave()">حفظ</button>
  ${c.id?`<button class="btn ghost danger" onclick="ctDel('${c.id}')">🗑 حذف</button>`:''}`);
  document.querySelectorAll('#sheet [data-ph]').forEach(ctDup);
}
function ctDup(el){const p=normPhone(el.value),w=document.querySelector(`#sheet [data-dw="${el.dataset.ph}"]`);if(!w)return;const f=p?findPhone([p],CTF.id):null;w.textContent=f?'⚠️ '+dupTxt(f):''}
function ctGrab(){
  if(!$('#ct-n'))return;
  CTF.name=$('#ct-n').value;CTF.kind=$('#ct-k').value;CTF.spec=$('#ct-s').value;CTF.address=$('#ct-a').value;CTF.loc=$('#ct-l').value;CTF.catId=$('#ct-c').value;
  CTF.phones=[...document.querySelectorAll('#sheet [data-ph]')].map(i=>i.value);
}
function ctHere(){
  if(!navigator.geolocation)return toast('تحديد الموقع مش متاح');
  toast('⏳ ...');
  navigator.geolocation.getCurrentPosition(p=>{ctGrab();CTF.loc=p.coords.latitude.toFixed(6)+','+p.coords.longitude.toFixed(6);ctSheet();toast('تم ✓')},
    ()=>toast('اسمح للبرنامج بالموقع'),{enableHighAccuracy:true,timeout:15000});
}
async function ctSave(){
  ctGrab();const name=CTF.name.trim();if(!name)return toast('اكتب الاسم');
  const phones=[...new Set(CTF.phones.map(normPhone).filter(Boolean))];
  for(const p of phones){const f=findPhone([p],CTF.id);if(f&&!await ask(`${p}`,dupTxt(f),{icon:'📇',ok:'احفظ برضه',cancel:'رجوع'}))return}
  let c=CTF.id?S.contacts.find(x=>x.id===CTF.id):null;if(!c){c={id:uid(),at:Date.now()};S.contacts.push(c)}
  Object.assign(c,{name,kind:CTF.kind,spec:CTF.spec.trim(),phones,address:CTF.address.trim(),loc:CTF.loc.trim(),catId:CTF.catId,note:''});
  save();closeSheet();render();toast('اتحفظ ✓');
}
async function ctDel(id){const c=S.contacts.find(x=>x.id===id);if(!await ask('حذف؟',c?c.name:'',{danger:true,icon:'🗑',ok:'حذف'}))return;S.contacts=S.contacts.filter(x=>x.id!==id);save();closeSheet();render()}

/* ========== المشتروات: مقسمة بالمحلات ========== */
const payLabel=b=>b.card?`💳 •••• ${b.card}`:[M(b.method)?.name,viaTxt(b.via)].filter((x,i,a)=>x&&a.indexOf(x)===i).join(' · ');
const whenTxt=b=>fdate(b.date)+(b.time?' · '+fmtTime(b.time):'');
const biOf=b=>(b.items||[]).filter(x=>x&&typeof x==='object'&&x.n);
const bKey=b=>b.catId||('n:'+normAr(b.store||''));
const bSort=(a,b)=>(b.date+(b.time||'')).localeCompare(a.date+(a.time||''));
var BSTORE='',BGRP=[];
const buyRow=b=>`<div class="row" onclick="buySheet('${b.id}')"><span class="ic" style="background:var(--soft)">${b.deliv?'🛵':'🛍️'}</span><div class="grow"><b>${esc(b.store)}</b><small>${whenTxt(b)} · ${esc(payLabel(b))}${biOf(b).length?' · 🧾 '+biOf(b).length+' صنف':''}</small></div><div class="amt exp">${num(b.total)}</div></div>`;
function vBuy(){
  setTimeout(bRender);
  if(BSTORE){
    const l=S.buys.filter(b=>bKey(b)===BSTORE);
    if(l.length){const nm0=(C(l[0].catId)||{}).name||l[0].store;
      return `<div class="phead"><button class="mini" onclick="BSTORE='';render();scrollTo(0,0)">→</button><h3>🏪 ${esc(nm0)}</h3><button class="mini pri" onclick="scanReceipt()">📷</button></div><div id="b-l"></div>`}
    BSTORE='';
  }
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🛒 ${esc(L('buy'))}</h3><button class="mini pri" onclick="scanReceipt()">📷 Receipt Scan</button></div>
  <div class="gsr">${FIC}<input id="b-q" placeholder="فلتر: اسم المحل أو الصنف..." value="${esc(bq)}" oninput="bq=this.value;bRender()">${bq?`<button type="button" onclick="bq='';render()">✕</button>`:''}</div><div id="b-l" style="margin-top:8px"></div>`;
}
function bOpen(i){const g=BGRP[i];if(!g)return;BSTORE=g.k;render();scrollTo(0,0)}
function bRender(){
  const el=$('#b-l');if(!el)return;
  const list=[...S.buys].sort(bSort);
  if(BSTORE){
    const l=list.filter(b=>bKey(b)===BSTORE),tot=l.reduce((a,b)=>a+(+b.total||0),0);
    el.innerHTML=kpis([['الإجمالي',fmt(tot),'exp'],['عدد الريسيتات',l.length,'net']])+`<div class="list">${l.map(buyRow).join('')}</div>`;
    return;
  }
  const q=normAr(bq);
  if(q){const inv=list.filter(b=>normAr(b.store).includes(q)||biOf(b).some(x=>normAr(x.n).includes(q)));el.innerHTML=inv.length?`<div class="list">${inv.map(buyRow).join('')}</div>`:'<p class="empty">لا يوجد</p>';return}
  if(!list.length){el.innerHTML='<div class="nempty"><div>🛒</div><b>لا يوجد مشتروات</b></div>';return}
  const m=new Map();
  list.forEach(b=>{const k=bKey(b);let g=m.get(k);if(!g){g={k,name:(C(b.catId)||{}).name||b.store,n:0,tot:0,last:b.date};m.set(k,g)}g.n++;g.tot+=(+b.total||0)});
  BGRP=[...m.values()];
  const mt=list.filter(b=>b.date.startsWith(NKM)).reduce((a,b)=>a+(+b.total||0),0);
  el.innerHTML=kpis([['مشتروات '+MONTHS[NM-1],fmt(mt),'exp'],['عدد المحلات',BGRP.length,'net']])
    +`<div class="list">${BGRP.map((g,i)=>`<div class="row" onclick="bOpen(${i})"><span class="ic" style="background:var(--soft)">🏪</span><div class="grow"><b>${esc(g.name)}</b><small>${g.n} ريسيت · آخر مرة ${fdate(g.last)}</small></div><div class="amt exp">${num(g.tot)}</div></div>`).join('')}</div>`;
}
function buySheet(id){
  const b=S.buys.find(x=>x.id===id);if(!b)return;const t=S.txs.find(x=>x.id===b.txId),raw=ocrGet(id),its=biOf(b);
  const isum=bi2(its.reduce((a,x)=>a+(+x.v||0),0)),iok=Math.abs(isum-b.total)<=.05;
  sheet(`<div class="phead"><h2>🛒 ${esc(b.store)}</h2><button class="mini" onclick="buyEdit('${id}')">✏️</button></div>
  ${b.fid?`<div class="files">${fileThumb(b.fid,'view')}</div>`:''}
  <div class="kv"><span>التاريخ</span><b>${whenTxt(b)}</b></div>
  <div class="kv"><span>المبلغ</span><b class="neg">${fmt(b.total)}</b></div>
  <div class="kv"><span>اتدفعت بـ</span><b>${esc(payLabel(b))||'—'}</b></div>
  <div class="kv"><span>الاستلام</span><b>${b.deliv?'🛵 دليفري':'🛍️ من المكان'}</b></div>
  ${its.length?`<h3>🧾 الأصناف</h3>${rtbl(['الصنف','الكمية|n','السعر|n','القيمة|n'],its.map(x=>{const d=dirOf(x.n);return `<tr><td class="t" dir="${d}" style="text-align:${alOf(d)}"><b>${esc(x.n)}</b>${biHist(x,b)}</td>${cN(x.q)}${cN(num(x.p))}${cN(num(x.v))}</tr>`}),ft('المجموع',3,`<td class="n"><span style="color:${iok?'#16a34a':'#dc2626'}">${nm(num(isum))}${iok?' ✓':''}</span></td>`))}`:''}
  <button class="btn ghost" onclick="biEdit('${id}')">🧾 ${its.length?'عدّل الأصناف':'ضيف الأصناف'}</button>
  ${biCloudRaw(raw)?`<button class="btn ghost" onclick="biReread('${id}')">🔄 اقرا الأصناف تاني من الريسيت</button>`:''}
  ${b.fid?`<button class="btn ghost" onclick="shareFiles(['${b.fid}'])">📤 ابعت صورة الريسيت</button>`:''}
  ${t?`<button class="btn ghost" onclick="editTx('${t.id}')">🧾 المصروف</button>`:''}
  ${raw?`<details class="gen"><summary>🔍 اللي البرنامج قراه من الريسيت</summary><pre style="white-space:pre-wrap;font:inherit;font-size:11px;max-height:260px;overflow:auto;margin:6px 0">${esc(raw)}</pre><button class="mini" onclick="ocrCopy('${id}')">📋 انسخ</button></details>`:''}
  <button class="btn ghost danger" onclick="buyDel('${id}')">🗑 حذف الفاتورة</button>`);
}
function buyEdit(id){const b=S.buys.find(x=>x.id===id);if(!b)return;BF=JSON.parse(JSON.stringify(b));bfSheet()}
function bfSheet(){
  const b=BF;NEXTF='bf';
  sheet(`<h2>🛒 تعديل الفاتورة</h2>
  ${b.fid?`<div class="files">${fileThumb(b.fid,'view')}</div>`:''}
  <div class="two"><label>المحل<input id="bf-s" value="${esc(b.store)}"></label><label>التاريخ<input id="bf-d" type="date" value="${b.date}"></label></div>
  <div class="two"><label>الوقت<input id="bf-h" type="time" value="${b.time||''}"></label><label>المبلغ<input id="bf-t" inputmode="decimal" value="${amtStr(b.total)}"></label></div>
  <div class="seg">${[[0,'🛍️ من المكان'],[1,'🛵 دليفري']].map(([v,l])=>`<button type="button" class="${+!!b.deliv===v?'on':''}" onclick="bfGrab();BF.deliv=${!!v};bfSheet()">${l}</button>`).join('')}</div>
  <button class="btn" onclick="bfSave()">حفظ</button>`);
}
function bfGrab(){if(!$('#bf-s'))return;BF.store=$('#bf-s').value;BF.date=$('#bf-d').value;BF.time=$('#bf-h').value;BF.total=parseNum($('#bf-t').value)||0}
function bfSave(){
  bfGrab();if(!BF.store.trim())return toast('اكتب اسم المحل');if(!BF.date)return toast('اختار التاريخ');
  if(!(BF.total>0))return toast('اكتب المبلغ');
  const b=S.buys.find(x=>x.id===BF.id);if(!b)return;Object.assign(b,BF,{store:BF.store.trim(),items:BF.items||b.items||[]});
  const t=S.txs.find(x=>x.id===b.txId);
  if(t&&!isClosed(t.date)&&!isClosed(b.date)){t.amount=b.total;t.date=b.date}
  save();render();buySheet(b.id);toast('اتحفظ ✓');
}
async function buyDel(id){if(!await ask('حذف الفاتورة؟','المصروف هيفضل متسجل',{danger:true,icon:'🗑',ok:'حذف'}))return;S.buys=S.buys.filter(x=>x.id!==id);ocrDel([id]);save();closeSheet();render()}

/* ========== زراير المرفقات ========== */
const SYSF=[{id:'bank',name:'💳 كروت بنكية'},{id:'personal',name:'🪪 كروت شخصية'}],GENF={id:'gen',name:'📂 عام'},ALLF={id:'all',name:'🗂️ الكل'};
const folders=()=>SYSF.concat(S.settings.dfold||[],[GENF]);
const isSysF=id=>id==='gen'||id==='all'||SYSF.some(f=>f.id===id);
const foldOf=d=>{const f=(S.settings.dmap||{})[d.id];return f&&folders().some(x=>x.id===f)?f:'gen'};
const foldName=id=>(folders().find(f=>f.id===id)||GENF).name;
function setFold(docId,f){S.settings.dmap=Object.assign({},S.settings.dmap,{[docId]:f})}
function foldAdd(n){const id=uid();S.settings.dfold=[...(S.settings.dfold||[]),{id,name:'📁 '+n.replace(/^📁\s*/,'')}];return id}
const LNK=()=>S.settings.links||(S.settings.links={});
const linkedDoc=k=>{const id=LNK()[k];return id?doc(id):null};
const linkOf=docId=>Object.keys(LNK()).find(k=>LNK()[k]===docId);
function syncDoc(k,fold,name,files,note){
  let d=linkedDoc(k);
  if(!files.length){if(d)S.docs=S.docs.filter(x=>x.id!==d.id);delete LNK()[k];return}
  if(!d){d={id:uid(),files:[]};S.docs.push(d);LNK()[k]=d.id;setFold(d.id,fold)}
  d.name=name;d.note=note;d.files=[...files];d.upd=Date.now();
}
function unlinkDoc(k){const d=linkedDoc(k);if(d)S.docs=S.docs.filter(x=>x.id!==d.id);delete LNK()[k]}
const renDocName=r=>'🪪 '+r.name+(r.num?' · '+r.num:'');

/* ========== الكروت: البنكية والشخصية + فلتر ========== */
var WQ='';
function wFilt(){const q=qn(WQ);document.querySelectorAll('#view [data-wq]').forEach(e=>e.style.display=!q||e.dataset.wq.includes(q)?'':'none')}
const cardFiles=c=>{if(!c||!c.id)return[];const d=linkedDoc('c:'+c.id)||(c.docId&&doc(c.docId));return d?[...d.files]:[]};
function scanCard(){snapPhoto({title:'صوّر الكارت',hint:'💳 حط الكارت جوه الإطار وثبّت',card:true,name:'card'},fid=>{cardForm(null,{files:[fid]});toast('اكتب بيانات الكارت')})}
function cardGal(){pickGallery(ids=>{cardForm(null,{files:ids});toast('اكتب بيانات الكارت')})}
function vWallet(){
  const h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>💳 ${esc(L('wallet'))}</h3></div>`+tabsHTML([['cards','💳 الكروت البنكية'],['ren','🪪 كروت شخصية']],wtab,'wtab')
    +`<div class="gsr">${FIC}<input placeholder="فلتر: اسم الكارت، آخر 4 أرقام، الحساب..." value="${esc(WQ)}" oninput="WQ=this.value;wFilt()"></div>`;
  setTimeout(wFilt);
  return h+(wtab==='ren'?wRen():wCards());
}
function wCards(){
  const h=`<div class="etbar"><button class="mini pri" onclick="scanCard()">📷 صوّر</button><button class="mini" onclick="cardGal()">🖼️ من الصور</button><button class="mini" onclick="cardForm()">+ إضافة</button></div>`;
  if(!S.cards.length)return h+`<div class="nempty"><div>💳</div><b>لا يوجد كروت</b></div>`;
  return h+S.cards.map(c=>{const n=cardFiles(c).length;return `<div class="ccard" data-wq="${esc(qn([c.name,c.last4,M(c.acct)?.name,NETS[c.net],c.kind==='credit'?'credit':'debit'].join(' ')))}" style="--cc:${c.color||'#1e3a8a'}" onclick="cardForm('${c.id}')"><div class="cc-t"><b>${esc(c.name)}</b><span>${c.kind==='credit'?'Credit':'Debit'}${n?' · 📷'+n:''}</span></div><div class="cc-n" dir="ltr">•••• •••• •••• ${esc(c.last4)}</div><div class="cc-b"><span>${esc(M(c.acct)?.name||'—')}</span><b dir="ltr">${NETS[c.net]||''}</b></div></div>`}).join('');
}
function cardForm(id,pre){
  const c=id?S.cards.find(x=>x.id===id):{name:'',kind:'debit',net:'visa',last4:'',acct:'',color:'#1e3a8a'};
  CRF={...c,files:cardFiles(c),...(pre||{})};crSheet();
}
function crSheet(){
  const c=CRF,meths=S.methods.filter(m=>m.active||m.id===c.acct);NEXTF='card';
  sheet(`<h2>💳 ${c.id?'تعديل كارت':'كارت جديد'}</h2>
  ${photosBox(c.files,'crRm')}
  ${photoBtns('crSnap','crGal',c.files,'shareFiles(CRF.files)')}
  <label>اسم الكارت<input id="cr-n" value="${esc(c.name)}" placeholder="البنك الأهلي VISA"></label>
  <div class="seg">${[['debit','Debit'],['credit','Credit']].map(([k,l])=>`<button type="button" class="${c.kind===k?'on':''}" onclick="crGrab();CRF.kind='${k}';crSheet()">${l}</button>`).join('')}</div>
  <div class="two"><label>آخر 4 أرقام<input id="cr-l" inputmode="numeric" maxlength="4" dir="ltr" value="${esc(c.last4)}" placeholder="1234"></label><label>النوع<select id="cr-t">${Object.entries(NETS).map(([k,l])=>`<option value="${k}" ${c.net===k?'selected':''}>${l}</option>`).join('')}</select></label></div>
  <label>بيتخصم من حساب<select id="cr-a"><option value="">➕ حساب جديد باسم الكارت</option>${opt(meths,c.acct)}</select></label>
  <div class="fl">اللون</div><div class="colors">${['#1e3a8a','#0f766e','#7c3aed','#be185d','#b45309','#334155','#111827'].map(x=>`<button type="button" class="sw ${x===c.color?'on':''}" style="background:${x}" onclick="crGrab();CRF.color='${x}';crSheet()"></button>`).join('')}</div>
  <button class="btn" onclick="crSave()">حفظ</button>
  ${c.id?`<button class="btn ghost danger" onclick="crDel('${c.id}')">🗑 حذف الكارت</button>`:''}`);
}
function crRm(i){crGrab();CRF.files.splice(i,1);crSheet()}
function crSnap(){crGrab();snapPhoto({title:'صوّر الكارت',hint:'💳 حط الكارت جوه الإطار وثبّت',card:true,name:'card',onCancel:crSheet},fid=>{CRF.files.push(fid);crSheet()})}
function crGal(){crGrab();pickGallery(ids=>{CRF.files.push(...ids);crSheet()})}
function crGrab(){if(!$('#cr-n'))return;CRF.name=$('#cr-n').value;CRF.last4=$('#cr-l').value;CRF.net=$('#cr-t').value;CRF.acct=$('#cr-a').value}
function crSave(){
  crGrab();const name=CRF.name.trim(),l4=latD(CRF.last4).replace(/\D/g,'');
  if(!name)return toast('اكتب اسم الكارت');
  if(!/^\d{4}$/.test(l4))return toast('اكتب آخر 4 أرقام');
  if(S.cards.some(x=>x.last4===l4&&x.id!==CRF.id))return toast('فيه كارت بنفس الأرقام');
  let acct=CRF.acct;
  if(!acct||!M(acct)){const m={id:uid(),name,type:'card',bank:'•••• '+l4,color:CRF.color,active:true};S.methods.push(m);acct=m.id}
  let c=CRF.id?S.cards.find(x=>x.id===CRF.id):null;if(!c){c={id:uid()};S.cards.push(c)}
  Object.assign(c,{name,kind:CRF.kind,net:CRF.net,last4:l4,acct,color:CRF.color});
  syncDoc('c:'+c.id,'bank','💳 '+name+' •••• '+l4,CRF.files,'كارت بنكي');
  save();closeSheet();render();toast('اتحفظ ✓');
}
async function crDel(id){
  if(!await ask('حذف الكارت؟','صوره هتتمسح كمان',{danger:true,icon:'🗑',ok:'حذف'}))return;
  unlinkDoc('c:'+id);
  S.cards=S.cards.filter(x=>x.id!==id);save();closeSheet();render();
}

/* ========== الكروت الشخصية ========== */
function scanId(){snapPhoto({title:'صوّر الكارت',hint:'🪪 حط الكارت جوه الإطار وثبّت',card:true,name:'card'},fid=>{renForm(null,{files:[fid]});toast('اختار النوع واكتب تاريخ الانتهاء')})}
function idGal(){pickGallery(ids=>{renForm(null,{files:ids});toast('اختار النوع واكتب تاريخ الانتهاء')})}
function wRen(){
  const list=[...S.renew].sort((a,b)=>(a.exp||'9').localeCompare(b.exp||'9')),td=today();
  const h=`<div class="box" style="margin-bottom:10px"><label>التنبيه قبل الانتهاء بـ (يوم)<div class="inl"><input id="rl-all" type="text" inputmode="numeric" value="${leadR()}"><button class="mini pri" onclick="renLeadAll()">طبّق على الكل</button></div></label></div>
  <div class="etbar"><button class="mini pri" onclick="scanId()">📷 صوّر</button><button class="mini" onclick="idGal()">🖼️ من الصور</button><button class="mini" onclick="renForm()">+ إضافة</button></div>`;
  if(!list.length)return h+`<div class="nempty"><div>🪪</div><b>لا يوجد</b></div>`;
  return h+`<div class="list">${list.map(r=>{
    const t=REN[r.type]||REN.other,left=r.exp?daysBetween(r.exp,td):null,ld=+r.lead||leadR(),f0=(r.files||[])[0],isImg=f0&&((S.fmeta[f0]||{}).type||'').startsWith('image/');
    const bd=left==null?'<span class="badge rej">—</span>':left<0?`<span class="badge late">منتهي</span>`:left<=ld?`<span class="badge wait">باقي ${left} يوم</span>`:`<span class="badge done">ساري</span>`;
    return `<div class="row" data-wq="${esc(qn([r.name,r.num,t[1],r.exp?dmy(r.exp):''].join(' ')))}" onclick="renForm('${r.id}')">${isImg?`<span class="ic" style="overflow:hidden;border-radius:8px"><img data-fid="${f0}" style="width:100%;height:100%;object-fit:cover" alt=""></span>`:`<span class="ic" style="background:var(--soft)">${t[0]}</span>`}<div class="grow"><b>${esc(r.name)}</b><small>${r.exp?'ينتهي '+fdate(r.exp):''}${r.num?' · '+esc(r.num):''}</small></div>${bd}</div>`}).join('')}</div>`;
}
function renLeadAll(){const n=Math.max(1,parseNum($('#rl-all').value)||30);S.settings.leadR=n;S.renew.forEach(r=>r.lead=n);save();render();toast('تم ✓')}
function renForm(id,pre){
  const r=id?S.renew.find(x=>x.id===id):{name:REN.id[1],type:'id',num:'',exp:'',lead:leadR(),note:'',files:[]};
  const d=id&&linkedDoc('r:'+id);
  RNF={...r,files:d?[...d.files]:[...(r.files||[])],...(pre||{})};renSheet();
}
function renSheet(){
  const r=RNF;NEXTF='ren';
  sheet(`<h2>🪪 ${r.id?'كارت شخصي':'إضافة كارت'}</h2>
  ${photosBox(r.files,'rnRm')}
  ${photoBtns('rnSnap','rnGal',r.files,'shareFiles(RNF.files)')}
  <label>النوع<select id="rn-t" onchange="renType(this.value)">${Object.entries(REN).map(([k,v])=>`<option value="${k}" ${r.type===k?'selected':''}>${v[0]} ${v[1]}</option>`).join('')}</select></label>
  <label>الاسم<input id="rn-n" value="${esc(r.name)}"></label>
  <div class="two"><label>تاريخ الانتهاء<input id="rn-e" type="date" value="${r.exp||''}"></label><label>التنبيه قبلها بـ (يوم)<input id="rn-l" type="text" inputmode="numeric" value="${esc(r.lead||leadR())}"></label></div>
  <label>الرقم<input id="rn-u" value="${esc(r.num||'')}"></label>
  <input type="hidden" id="rn-o" value="${esc(r.note||'')}">
  <button class="btn" onclick="renSave()">حفظ</button>
  ${r.id?`<button class="btn ghost" onclick="renRenew()">🔄 جددته</button><button class="btn ghost danger" onclick="renDel('${r.id}')">🗑 حذف</button>`:''}`);
}
function rnRm(i){rnGrab();RNF.files.splice(i,1);renSheet()}
function rnSnap(){rnGrab();snapPhoto({title:'صوّر الكارت',hint:'🪪 حط الكارت جوه الإطار وثبّت',card:true,name:'card',onCancel:renSheet},fid=>{RNF.files.push(fid);renSheet()})}
function rnGal(){rnGrab();pickGallery(ids=>{RNF.files.push(...ids);renSheet()})}
function rnGrab(){if(!$('#rn-n'))return;RNF.type=$('#rn-t').value;RNF.name=$('#rn-n').value;RNF.exp=$('#rn-e').value;RNF.lead=$('#rn-l').value;RNF.num=$('#rn-u').value;RNF.note=$('#rn-o').value}
function renType(v){const old=RNF.name;rnGrab();if(!old.trim()||Object.values(REN).some(x=>x[1]===old))RNF.name=REN[v][1];RNF.type=v;renSheet()}
function renSave(){
  rnGrab();const name=RNF.name.trim();if(!name)return toast('اكتب الاسم');if(!RNF.exp)return toast('اختار تاريخ الانتهاء');
  let r=RNF.id?S.renew.find(x=>x.id===RNF.id):null;if(!r){r={id:uid()};S.renew.push(r)}
  Object.assign(r,{name,type:RNF.type,exp:RNF.exp,lead:Math.max(1,parseNum(RNF.lead)||leadR()),num:(RNF.num||'').trim(),note:(RNF.note||'').trim(),files:[...RNF.files]});
  syncDoc('r:'+r.id,'personal',renDocName(r),r.files,'كارت شخصي');
  save();closeSheet();render();toast('اتحفظ ✓');
}
function renRenew(){rnGrab();RNF.exp=addMonths(RNF.exp||today(),12);renSheet();toast('+ سنة')}
async function renDel(id){if(!await ask('حذف؟','صوره هتتمسح كمان',{danger:true,icon:'🗑',ok:'حذف'}))return;unlinkDoc('r:'+id);S.renew=S.renew.filter(x=>x.id!==id);save();closeSheet();render()}

/* ========== المرفقات ========== */
const doc=id=>S.docs.find(x=>x.id===id);
var DFOLD='all',DQ='',DTX={g:'all',y:'all',q:''};
function vDocs(){
  let h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>📎 ${esc(L('docs'))}</h3></div>`+tabsHTML([['my','مستنداتي'],['tx','مرفقات العمليات']],dtab,'dtab');
  if(dtab!=='my')return h+vDocsTx();
  const fs=[ALLF].concat(folders());if(!fs.some(f=>f.id===DFOLD))DFOLD='all';
  const cnt=id=>id==='all'?S.docs.length:S.docs.filter(d=>foldOf(d)===id).length;
  h+=`<div class="tabs ctabs">${fs.map(f=>`<button class="${DFOLD===f.id?'on':''}" onclick="DFOLD='${f.id}';render()">${esc(f.name)}${cnt(f.id)?' ('+cnt(f.id)+')':''}</button>`).join('')}<button onclick="foldNew()">➕ زرار جديد</button></div>`;
  const addLbl=DFOLD==='bank'?'+ كارت بنكي':DFOLD==='personal'?'+ كارت شخصي':'+ مستند';
  h+=`<div class="etbar"><button class="mini pri" onclick="addInFold()">${addLbl}</button>${isSysF(DFOLD)?'':`<button class="mini" onclick="foldRen('${DFOLD}')">✏️ اسم الزرار</button><button class="mini danger" onclick="foldDel('${DFOLD}')">🗑 الزرار</button>`}</div>`;
  h+=`<div class="gsr">${FIC}<input placeholder="فلتر: اسم المستند، ملاحظة، زرار..." value="${esc(DQ)}" oninput="DQ=this.value;dqFilt()"></div>`;
  const list=S.docs.filter(d=>DFOLD==='all'||foldOf(d)===DFOLD).sort((a,b)=>(b.upd||0)-(a.upd||0));
  h+=list.length?`<div class="list">${list.map(d=>`<div class="row dqr" data-q="${esc(qn([d.name,d.note,foldName(foldOf(d)),d.upd?new Date(d.upd).toLocaleDateString('en-GB'):''].join(' ')))}" onclick="docSheet('${d.id}')"><span class="ic" style="background:var(--soft)">📁</span><div class="grow"><b>${esc(d.name)}</b><small>${[DFOLD==='all'?foldName(foldOf(d)):'',d.files.length+' ملف',d.upd?new Date(d.upd).toLocaleDateString('ar-EG'):'',d.note].filter(Boolean).map(esc).join(' · ')}</small></div></div>`).join('')}</div>`:'<p class="empty">لا يوجد</p>';
  setTimeout(dqFilt);
  return h;
}
function dqFilt(){const q=qn(DQ);document.querySelectorAll('#view .dqr').forEach(r=>r.style.display=!q||r.dataset.q.includes(q)?'':'none')}
/* مرفقات العمليات: أزرار لكل نوع، وفلتر بالسنة، وكل بند في جدول لوحده */
const ATG={ifix:['📌','تحصيلات ثابتة'],iann:['📄','تحصيلات سنوية'],ivar:['💵','تحصيلات غير ثابتة'],efix:['📌','مصروفات ثابتة'],evar:['🛒','مصروفات متغيرة']};
const txGrp=t=>{const c=C(t.cat);if(t.type==='inc')return c&&c.fixed?(isA(c)?'iann':'ifix'):'ivar';return c&&c.fixed?'efix':'evar'};
const attTx=()=>S.txs.filter(t=>(t.files||[]).length&&t.type!=='tr');
function vDocsTx(){
  const all=attTx(),ys=[...new Set(all.map(t=>t.date.slice(0,4)))].sort().reverse();
  if(DTX.y!=='all'&&!ys.includes(DTX.y))DTX.y='all';
  const inY=all.filter(t=>DTX.y==='all'||t.date.startsWith(DTX.y));
  const tiles=[['all','🗂️','الكل',inY.length]].concat(Object.entries(ATG).map(([k,[ic,l]])=>[k,ic,l,inY.filter(t=>txGrp(t)===k).length]));
  return `<div class="tiles">${tiles.map(([k,ic,l,n])=>`<button class="tile ${DTX.g===k?'on':''}" onclick="DTX.g='${k}';render()"><span>${ic}</span><b>${esc(l)}</b><small>${n} عملية</small></button>`).join('')}</div>
  ${ys.length>1?`<div class="ychips">${[['all','كل السنين']].concat(ys.map(y=>[y,y])).map(([v,l])=>`<button class="${DTX.y===v?'on':''}" onclick="DTX.y='${v}';render()">${l}</button>`).join('')}</div>`:''}
  <div class="gsr">${FIC}<input placeholder="فلتر: البند، المبلغ، التاريخ، الملاحظة..." value="${esc(DTX.q)}" oninput="DTX.q=this.value;dtxList()"></div>
  <div id="dtx-l">${dtxHTML()}</div>`;
}
function dtxHTML(){
  const q=qn(DTX.q);
  const l=attTx().filter(t=>(DTX.y==='all'||t.date.startsWith(DTX.y))&&(DTX.g==='all'||txGrp(t)===DTX.g)&&(!q||qn([C(t.cat)?.name,t.note,dmy(t.date),t.amount,num(t.amount),M(t.method)?.name,ATG[txGrp(t)][1]].join(' ')).includes(q))).sort(byDesc);
  if(!l.length)return '<p class="empty">لا يوجد</p>';
  const m=new Map();l.forEach(t=>{const k=t.cat||'—';if(!m.has(k))m.set(k,[]);m.get(k).push(t)});
  return [...m.entries()].sort((a,b)=>(C(a[0])?.name||'').localeCompare(C(b[0])?.name||'','ar')).map(([id,ts])=>{
    const c=C(id),sum=ts.reduce((a,t)=>a+t.amount,0),kind=ts[0].type;
    return `<div class="agh"><span>${ATG[txGrp(ts[0])][0]} <bdi>${esc(c?.name||'—')}</bdi></span><small>${ts.length} عملية · ${nm(num(sum))}</small></div>`+
      rtbl(['التاريخ|c','المبلغ|n','الملفات|c'],ts.map(t=>`<tr class="clk" onclick="editTx('${t.id}')">${cD(t.date)}${cN(num(t.amount),kind,t.note&&!/^🧾/.test(t.note)?esc(t.note):'')}${cC('📎 '+nm((t.files||[]).length))}</tr>`));
  }).join('');
}
function dtxList(){const el=$('#dtx-l');if(el)el.innerHTML=dtxHTML()}
/* الإضافة حسب الزرار: الكروت بتفتح شاشتها، والباقي بيفتح إضافة مستند */
function addInFold(){if(DFOLD==='bank')return cardForm();if(DFOLD==='personal')return renForm();docForm()}
async function foldNew(){const n=((await askIn('اسم الزرار الجديد','مثلاً: الشقة، العربية',''))||'').trim();if(!n)return;DFOLD=foldAdd(n);save();render();toast('اتعمل ✓')}
async function foldRen(id){const f=(S.settings.dfold||[]).find(x=>x.id===id);if(!f)return;const n=((await askIn('اسم الزرار','',f.name.replace(/^📁\s*/,'')))||'').trim();if(!n)return;f.name='📁 '+n;save();render()}
async function foldDel(id){
  const f=(S.settings.dfold||[]).find(x=>x.id===id);if(!f)return;
  if(!await ask(`حذف زرار ${f.name}؟`,'المستندات اللي فيه هتتنقل لـ عام',{danger:true,icon:'🗑',ok:'حذف'}))return;
  S.docs.forEach(d=>{if(foldOf(d)===id)setFold(d.id,'gen')});
  S.settings.dfold=(S.settings.dfold||[]).filter(x=>x.id!==id);DFOLD='gen';save();render();
}
const foldSel=(cur,nf)=>`<label>الزرار<select id="d3" onchange="$('#d4w').style.display=this.value==='__new'?'':'none'">${folders().map(f=>`<option value="${f.id}" ${f.id===cur?'selected':''}>${esc(f.name)}</option>`).join('')}<option value="__new" ${cur==='__new'?'selected':''}>➕ زرار جديد</option></select></label>
  <label id="d4w" style="display:${cur==='__new'?'':'none'}">اسم الزرار الجديد<input id="d4" value="${esc(nf||'')}" placeholder="مثلاً: الشقة"></label>`;
/* إضافة / تعديل مستند بالصور والملفات */
let DOCF=null;
function docForm(id,pre){
  const d=id?doc(id):{name:'',note:'',files:[]};
  DOCF={id:id||'',name:d.name||'',note:d.note||'',files:[...(d.files||[])],fold:id?foldOf(d):(DFOLD==='all'?'gen':DFOLD),nf:'',...(pre||{})};dfSheet();
}
function dfSheet(){
  const d=DOCF;NEXTF='doc';
  sheet(`<h2>📄 ${d.id?'تعديل مستند':'إضافة مستند'}</h2>
  ${photosBox(d.files,'dfRm')}
  <div class="three"><button type="button" class="btn ghost" onclick="dfSnap()">📷 صوّر</button><button type="button" class="btn ghost" onclick="dfGal()">🖼️ من الصور</button><button type="button" class="btn ghost" onclick="dfFile()">📄 ملف</button></div>
  <label>الاسم<input id="d1" value="${esc(d.name)}" placeholder="مثلاً: عقد الشقة، شهادة الميلاد"></label>
  <label>ملاحظات<input id="d2" value="${esc(d.note)}"></label>
  ${foldSel(d.fold,d.nf)}
  ${d.files.length?`<button type="button" class="btn ghost" onclick="shareFiles(DOCF.files)">📤 إرسال</button>`:''}
  <button class="btn" onclick="dfSave()">حفظ</button>`);
}
function dfGrab(){if(!$('#d1'))return;DOCF.name=$('#d1').value;DOCF.note=$('#d2').value;DOCF.fold=$('#d3').value;DOCF.nf=$('#d4')?$('#d4').value:''}
function dfRm(i){dfGrab();DOCF.files.splice(i,1);dfSheet()}
function dfSnap(){dfGrab();snapPhoto({title:'صوّر المستند',hint:'📄 حط الورقة كلها جوه الإطار وثبّت',name:'doc',onCancel:dfSheet},fid=>{DOCF.files.push(fid);dfSheet()})}
function dfGal(){dfGrab();pickGallery(ids=>{DOCF.files.push(...ids);dfSheet()})}
function dfFile(){dfGrab();pickAny('*/*',ids=>{DOCF.files.push(...ids);dfSheet()})}
function dfSave(){
  dfGrab();
  if(!DOCF.files.length&&!DOCF.name.trim())return toast('ضيف صورة أو ملف');
  let f=DOCF.fold;
  if(f==='__new'){const n=(DOCF.nf||'').trim();if(!n)return toast('اكتب اسم الزرار');f=foldAdd(n)}
  let d=DOCF.id?doc(DOCF.id):null;if(!d){d={id:uid(),files:[]};S.docs.push(d)}
  d.name=DOCF.name.trim()||('مستند · '+dmy(today()));d.note=DOCF.note.trim();d.files=[...DOCF.files];d.upd=Date.now();
  setFold(d.id,f);DFOLD=f;
  /* لو المستند مربوط بكارت شخصي، صوره بتتحدث هناك كمان */
  const lk=linkOf(d.id);if(lk&&lk.startsWith('r:')){const r=S.renew.find(x=>x.id===lk.slice(2));if(r)r.files=[...d.files]}
  save();render();docSheet(d.id);toast('اتحفظ ✓');
}
function docSheet(id){
  curDoc=id;const d=doc(id);if(!d)return closeSheet();
  const lk=linkOf(id);
  sheet(`<div class="phead"><h2>📁 ${esc(d.name)}</h2><button class="mini" onclick="docForm('${id}')">✏️</button></div>${d.note?`<p class="muted">${esc(d.note)}</p>`:''}
  <p class="muted">${esc(foldName(foldOf(d)))}</p>
  ${filesBox(d.files,'doc')}
  ${d.files.length?`<button class="btn ghost" onclick="shareFiles(doc('${id}').files)">📤 مشاركة الكل</button>`:''}
  ${lk?`<button class="btn ghost" onclick="${lk.startsWith('c:')?`cardForm('${lk.slice(2)}')`:`renForm('${lk.slice(2)}')`}">🔗 افتح الكارت</button>`:''}
  <button class="btn ghost" onclick="docMove('${id}')">📂 نقل لزرار تاني</button>
  <button class="btn ghost danger" onclick="docDel('${id}')">🗑 حذف</button>`);
}
function docMove(id){
  const d=doc(id);if(!d)return;const cur=foldOf(d);
  sheet(`<h2>📂 نقل "${esc(d.name)}"</h2>
  <div class="list">${folders().map(f=>`<div class="row" onclick="docMoveTo('${id}','${f.id}')"><span class="ic" style="background:var(--soft)">${f.id===cur?'🔘':'⚪'}</span><div class="grow"><b>${esc(f.name)}</b></div></div>`).join('')}
  <div class="row" onclick="docMoveNew('${id}')"><span class="ic" style="background:var(--soft)">➕</span><div class="grow"><b>زرار جديد</b></div></div></div>`);
}
function docMoveTo(id,f){setFold(id,f);DFOLD=f;save();render();docSheet(id);toast('اتنقل ✓')}
async function docMoveNew(id){const n=((await askIn('اسم الزرار الجديد','',''))||'').trim();if(!n)return docMove(id);docMoveTo(id,foldAdd(n))}
async function docDel(id){
  if(!await ask('حذف؟','',{danger:true,icon:'🗑',ok:'حذف'}))return;
  S.docs=S.docs.filter(x=>x.id!==id);
  const lk=linkOf(id);if(lk)delete LNK()[lk];
  S.cards.forEach(c=>{if(c.docId===id)c.docId=''});
  if(S.settings.dmap)delete S.settings.dmap[id];
  save();closeSheet();render();
}

/* ========== لما مصروف يتمسح: كل حاجة تخصه بتتمسح (الريسيت والأصناف والصور والنص)، ورقم المحل بيفضل ========== */
var SKIPDEL=false,TXSNAP=null,TXIDS=null;
const snapTx=()=>{const m={};S.txs.forEach(t=>{if((t.files||[]).length)m[t.id]=1});return m};
let CLEANING=false;
function txWatch(){
  if(CLEANING)return;
  const ids=new Set(S.txs.map(t=>t.id));
  if(!TXIDS){TXIDS=ids;TXSNAP=snapTx();return}
  const gone=[...TXIDS].filter(id=>!ids.has(id));
  TXIDS=ids;const hadFiles=gone.some(id=>TXSNAP&&TXSNAP[id]);TXSNAP=snapTx();
  if(SKIPDEL){SKIPDEL=false;return}
  if(!gone.length)return;
  const g=new Set(gone),bs=S.buys.filter(b=>b.txId&&g.has(b.txId));
  if(!bs.length&&!hadFiles)return;
  CLEANING=true;
  try{
    if(bs.length){S.buys=S.buys.filter(b=>!(b.txId&&g.has(b.txId)));ocrDel(bs.map(b=>b.id));save()}
  }finally{CLEANING=false}
  setTimeout(()=>{
    if(!draftGet())try{gcFiles()}catch(e){}
    render();
    toast(bs.length?'🗑 اتمسح المصروف والريسيت والأصناف · رقم المحل فاضل في Contacts':'🗑 اتمسح المصروف ومرفقاته');
  },300);
}
/* قبل أي حفظ: بيسجّل المبلغ السابق لو مبلغ بند ثابت اتغير. وبعد الحفظ: بيراقب المصروفات اللي اتمسحت */
try{const _sv=save;save=function(){try{amtWatch()}catch(e){}const r=_sv.apply(this,arguments);try{txWatch()}catch(e){}return r}}catch(e){}

/* ========== حفظ الشغل اللي مكملتوش (مكالمة / قفل / التطبيق اتقفل) ========== */
const DRK='centric-draft';
var FORM=null,NEXTF=null,KEEPF=false,LOCKING=false;
const FORMS={
  ren:{g:()=>{rnGrab();return RNF},o:d=>{RNF=d;renSheet()}},
  card:{g:()=>{crGrab();return CRF},o:d=>{CRF=d;crSheet()}},
  ct:{g:()=>{ctGrab();return CTF},o:d=>{CTF=d;ctSheet()}},
  bf:{g:()=>{bfGrab();return BF},o:d=>{BF=d;bfSheet()}},
  doc:{g:()=>{dfGrab();return DOCF},o:d=>{DOCF=d;dfSheet()}}
};
function draftSave(){if(!FORM||!FORMS[FORM])return;try{localStorage.setItem(DRK,JSON.stringify({k:FORM,d:FORMS[FORM].g(),t:Date.now()}))}catch(e){}}
function draftClear(){localStorage.removeItem(DRK)}
function draftGet(){try{const x=JSON.parse(localStorage.getItem(DRK)||'null');if(x&&FORMS[x.k]&&Date.now()-x.t<6*3600e3)return x}catch(e){}return null}
function draftOpen(msg){const x=draftGet();if(!x)return;try{FORMS[x.k].o(x.d);if(msg)toast('📝 كمّل اللي كنت بتعمله')}catch(e){draftClear()}}
let drT=null;
['input','change'].forEach(ev=>document.addEventListener(ev,e=>{if(FORM&&e.target.closest&&e.target.closest('#sheet')){clearTimeout(drT);drT=setTimeout(draftSave,400)}},true));
try{const _s=sheet;sheet=function(){FORM=NEXTF;NEXTF=null;if(!FORM&&!KEEPF&&!LOCKING)draftClear();const r=_s.apply(this,arguments);if(FORM)setTimeout(draftSave,0);return r}}catch(e){}
try{const _c=closeSheet;closeSheet=function(){if(!KEEPF&&!LOCKING){FORM=null;draftClear()}return _c.apply(this,arguments)}}catch(e){}
function waitUnlock(){
  const cx=innerWidth/2,cy=innerHeight/2;let root=document.elementFromPoint(cx,cy);
  while(root&&root.parentElement&&root.parentElement!==document.body)root=root.parentElement;
  const sh=document.getElementById('sheet'),sc=document.getElementById('scan');
  const ok=root&&root!==document.body&&getComputedStyle(root).position==='fixed'&&!(sh&&(root===sh||root.contains(sh)||sh.contains(root)))&&root!==sc;
  const done=()=>{LOCKING=false;draftOpen()};
  if(!ok)return done();
  const t0=Date.now();
  const chk=()=>{const e=document.elementFromPoint(cx,cy);if(root.isConnected&&e&&root.contains(e)&&getComputedStyle(root).display!=='none'&&Date.now()-t0<36e5)return setTimeout(chk,400);done()};
  chk();
}
try{const _l=showLock;showLock=function(){draftSave();LOCKING=true;const r=_l.apply(this,arguments);setTimeout(waitUnlock,350);return r}}catch(e){}

/* ========== واتساب ========== */
const waIc=fb=>`<i class="wai"></i><span class="wat">${fb}</span>`;
(()=>{
  const s=document.createElement('style');
  s.textContent=`.wai{display:none;width:20px;height:20px;flex:0 0 20px;background-position:center;background-size:contain;background-repeat:no-repeat;vertical-align:middle}
.cbt .wai{width:22px;height:22px}.btn .wai,.mini .wai{margin-inline-end:4px}
a.btn.wab{display:flex;align-items:center;justify-content:center;gap:6px}`;
  document.head.appendChild(s);
  /* بيدوّر على ملف اللوجو، وأول ما يلاقيه يظهر بداله 💬 */
  const on=u=>{const t=document.createElement('style');t.textContent=`.wai{display:inline-block!important;background-image:url("${u}")!important}.wat{display:none!important}`;document.head.appendChild(t)};
  const tryU=l=>{if(!l.length)return;const im=new Image();im.onload=()=>on(im.src);im.onerror=()=>tryU(l.slice(1));im.src=l[0]};
  tryU(['wa.png','wa.svg','WA.png','wa.PNG','wa.jpg','whatsapp.png']);
  /* أي زرار إرسال (كروت، مستندات، تقارير، ريسيت) يظهر جنبه لوجو واتساب */
  const deco=()=>document.querySelectorAll('button[onclick*="shareFiles("],button[onclick*="shareReport("]').forEach(b=>{if(b.dataset.wa)return;b.dataset.wa='1';if(b.innerHTML.includes('📤'))b.innerHTML=b.innerHTML.replace('📤',waIc('📤'))});
  let q=false;new MutationObserver(()=>{if(q)return;q=true;requestAnimationFrame(()=>{q=false;deco()})}).observe(document.body,{childList:true,subtree:true});deco();
})();

/* ========== الشريط اللي تحت + زرار ➕ + صفحة المزيد ========== */
/* الدوال دي بتحل مكان اللي في app.js بنفس الاسم */
function navHTML(){
  const v=NAVOF[view],on=!v||v==='contacts'||v==='docs'?'more':v;
  const b=(k,ic,l,click)=>`<button class="${on===k?'on':''}" onclick="${click||`go('${k}')`}"><span>${ic}</span>${esc(l)}</button>`;
  return b('home','🏠',L('home'))+b('col','💰',L('col'))+b('exps','💸',L('exps'))
    +b('reports','📊',L('reports'),"rtab='';go('reports')")+b('more','☰',L('more'))
    +`<button class="fab" onclick="fabMenu()" aria-label="+">+</button>`;
}
/* زرار ➕ عايم فوق الشريط: بيتحسب ارتفاع الشريط كل مرة الشاشة تترسم */
function fixNav(){const n=document.querySelector('nav');if(n&&n.offsetHeight)document.documentElement.style.setProperty('--navh',n.offsetHeight+'px')}
addEventListener('resize',fixNav);
try{const _rd=render;render=function(){const r=_rd.apply(this,arguments);try{fixNav()}catch(e){}return r}}catch(e){}
/* الـ popup الصغير اللي بيطلع من زرار ➕: تحصيل ولا مصروف */
function fabMenu(){
  if(document.getElementById('fabm'))return fabClose();
  const m=document.createElement('div');m.id='fabm';
  m.innerHTML=`<button class="inc" onclick="fabGo('inc')"><span>💰</span>${esc(L('incOne'))}</button><button class="exp" onclick="fabGo('exp')"><span>💸</span>${esc(L('expOne'))}</button>`;
  document.body.appendChild(m);
  setTimeout(()=>document.addEventListener('pointerdown',fabOut,true),0);
}
function fabOut(e){const m=document.getElementById('fabm');if(!m||m.contains(e.target)||(e.target.closest&&e.target.closest('.fab')))return;fabClose()}
function fabClose(){const m=document.getElementById('fabm');if(m)m.remove();document.removeEventListener('pointerdown',fabOut,true)}
function fabGo(k){fabClose();newTx(k)}
/* صفحة المزيد: Contacts والمرفقات والباسوردات جنب الإعدادات */
function vMore(){
  const B=[['items','📋',L('items')],['pmv','🏦',L('pm')],['inst','🏦',L('inst')],['buy','🛒',L('buy')],['wallet','💳',L('wallet')],['annual','📆',L('contracts')],['cash','🏧',L('cash')],['months','🔒','قفل الشهور'],['contacts','📇',L('contacts')],['docs','📎',L('docs')],['pw','🔐','الباسوردات'],['settings','⚙️',L('settings')]];
  return `<h3>☰ ${esc(L('more'))}</h3><div class="rgrid">${B.map(([v,ic,l])=>`<button class="rbtn" onclick="${v==='pw'?'pwScreen()':(v==='settings'?"stab='';":'')+`go('${v}')`}"><span>${ic}</span>${esc(l)}</button>`).join('')}</div>`;
}

/* ========== إضافة / تعديل تحصيل أو مصروف ========== */
/* البند في التحصيل والمصروف: خانة بحث بالاسم أو المحل أو رقم الموبايل.
   في التحصيل: لو كتبت اسم جديد وفيه بند شبهه، البرنامج بيسألك */
function txForm(){
  const orig=F.id&&S.txs.find(t=>t.id===F.id),locked=orig&&!orig.pend&&isClosed(orig.date),inc=F.type==='inc',tr=F.type==='tr',pend=inc&&F.pend;
  const canFlip=inc&&F.id&&!(orig&&orig.src),cur=F.cat&&C(F.cat);
  if(F.cq==null||(!F.cq&&cur))F.cq=cur?cur.name:'';
  const meths=S.methods.filter(m=>m.active||m.id===F.method||m.id===F.to);
  const addAcct=`<button type="button" class="mini" title="حساب جديد" onclick="grab();TXBACK=true;editMethod()">+</button>`;
  const ttl=F.id?(tr?'✏️ تعديل التحويل':inc?'✏️ تعديل التحصيل':'✏️ تعديل المصروف'):(inc?'💰 تحصيل جديد':'💸 مصروف جديد');
  const catBox=`<label>البند<input id="f-cq" autocomplete="off" value="${esc(F.cq)}" placeholder="🔍 اسم البند أو المحل أو رقم الموبايل" oninput="catSearch(this.value)" onfocus="catSearch(this.value,1)" ${orig&&orig.src?'disabled':''}></label><div id="f-cres"></div>
    ${cur?`<small class="cpick">✓ ${esc(cur.name)}</small>`:F.cat==='__new'?`<small class="cpick">➕ بند جديد: ${esc(F.newCat||'')}</small>`:''}`;
  const stBox=canFlip?`<div class="kv"><span>الحالة</span><b>${pend?'⏳ غير محصّل':'✅ محصّل'}</b></div>
    ${F._st?`<div class="two"><button type="button" class="btn ${pend?'ghost':''}" onclick="txSetSt(0)">✅ محصّل</button><button type="button" class="btn ${pend?'':'ghost'}" onclick="txSetSt(1)">⏳ غير محصّل</button></div>`
    :`<button type="button" class="btn ghost" onclick="grab();F._st=1;SHKEEP=1;txForm()">🔄 تغيير الحالة</button>`}`:'';
  sheet(`<h2>${ttl}</h2>
  ${locked?'<p class="warn">🔒 الشهر ده مقفول</p>':''}
  ${!F.id&&F.type==='exp'?'<button class="btn ghost" onclick="scanReceipt()">📷 Receipt Scan</button>':''}
  ${stBox}
  <input id="f-amt" class="amt-in" type="text" inputmode="decimal" placeholder="0" value="${esc(F.amount)}">
  ${tr?`<label>من حساب<div class="inl"><select id="f-m">${opt(meths,F.method)}</select>${addAcct}</div></label>
    <label>إلى حساب<div class="inl"><select id="f-to">${opt(meths,F.to)}</select>${addAcct}</div></label>
    <label>الطريقة<select id="f-v">${viaOpts(F.via)}</select></label>`
  :`${catBox}
    <div class="two"><label>${!F.id&&inc?'الحساب':pend?'هيتحصّل على حساب':inc?'استلمت في حساب':'دفعت من حساب'}<div class="inl"><select id="f-m">${opt(meths,F.method)}</select>${addAcct}</div></label>
    <label>الطريقة<select id="f-v">${viaOpts(F.via)}</select></label></div>`}
  <div class="two"><label>${F.id&&pend?'الميعاد المتوقع':'التاريخ'}<input id="f-d" type="date" value="${F.date}"></label><label>ملاحظة<input id="f-n" type="text" value="${esc(F.note)}"></label></div>
  <div class="fl">المرفقات</div>${filesBox(F.files,'tx')}
  <button class="btn" onclick="saveTx()" ${locked?'disabled':''}>سجّل</button>
  ${F.id&&pend?`<button class="btn ghost" onclick="postpone('${F.id}');closeSheet()">⏭ أجّل للشهر الجاي</button>`:''}
  ${F.id&&!locked?'<button class="btn ghost danger" onclick="delTx()">حذف العملية</button>':''}`);
}
/* تغيير حالة التحصيل: زرار "تغيير الحالة" بيظهر اختيارين، والحالي ملوّن */
function txSetSt(p){
  grab();F._st=0;
  if(!!p!==!!F.pend){
    if(p){F.pend=true;if(F.due){F.date=F.due;delete F.due}}
    else{F.pend=false;F.due=F.date;F.date=today()}
    toast('اتغيرت الحالة · دوس سجّل عشان تتحفظ');
  }
  SHKEEP=1;txForm();
}
/* بحث البنود (تحصيل أو مصروف): الاسم، الأسماء التانية، اسم المحل في Contacts، الوصف، رقم الموبايل.
   في التحصيل: مبيظهرش حاجة غير لما تكتب. في المصروف: أول ما تدوس بيظهر آخر البنود اللي استخدمتها */
function catSearch(q,focus){
  F.cq=q;
  const kind=F.type==='inc'?'inc':'exp',cur=F.cat&&C(F.cat);
  if(!focus&&!(cur&&normAr(cur.name)===normAr(q))){F.cat='';F.newCat='';const p=document.querySelector('#sheet .cpick');if(p)p.remove()}
  const el=$('#f-cres');if(!el)return;
  const nq=normAr(latD(q)),dq=latD(q).replace(/\D/g,'');
  let list=[];
  if(nq||dq.length>=3){
    S.cats.filter(c=>c.kind===kind&&c.active!==false).forEach(c=>{
      const cts=S.contacts.filter(x=>x.catId===c.id);
      const hay=normAr([c.name,...(c.alias||[]),...cts.map(x=>x.name+' '+(x.spec||''))].join(' '));
      const ph=dq.length>=3?cts.flatMap(x=>x.phones||[]).find(p=>p.includes(dq)):null;
      if((nq&&hay.includes(nq))||ph)list.push({c,ph,sc:normAr(c.name).startsWith(nq)?2:1});
    });
    list.sort((a,b)=>b.sc-a.sc);list=list.slice(0,8);
  }else if(kind==='exp'){
    const seen=[];[...S.txs].filter(t=>t.type==='exp'&&t.cat).sort(byDesc).forEach(t=>{if(seen.length<6&&!seen.includes(t.cat)&&C(t.cat))seen.push(t.cat)});
    list=seen.map(id=>({c:C(id)}));
  }
  const qt=q.trim(),exact=list.some(x=>normAr(x.c.name)===nq),showNew=qt&&!exact&&!/^[\d\s+]+$/.test(qt);
  el.innerHTML=list.length||showNew?`<div class="list cres">${list.map(x=>`<div class="row" onclick="catPick('${x.c.id}')"><span class="ic" style="background:var(--soft)">${x.c.fixed?'📌':kind==='inc'?'💵':'🏷️'}</span><div class="grow"><b>${esc(x.c.name)}</b>${x.ph?`<small dir="ltr" style="text-align:right">📞 ${x.ph}</small>`:x.c.fixed?'<small>ثابت</small>':''}</div></div>`).join('')}${showNew?`<div class="row" onclick="catPick('__new')"><span class="ic" style="background:var(--soft)">➕</span><div class="grow"><b>بند جديد: ${esc(qt)}</b></div></div>`:''}</div>`:'';
}
function catPick(id){
  grab();
  if(id==='__new'){F.cat='__new';F.newCat=(F.cq||'').trim()}
  else{const c=C(id);if(!c)return;F.cat=id;F.cq=c.name;F.newCat='';
    if(c.fixed&&!parseNum(F.amount))F.amount=c.amount?amtStr(c.amount):'';
    if(c.acct&&M(c.acct))F.method=c.acct;if(c.via)F.via=c.via}
  SHKEEP=1;txForm();
}
/* بيدوّر على بند اسمه شبه اللي اتكتب */
function findIncCat(name,kind){
  const k=normAr(name).replace(/\s+/g,'');let best=null,bs=0;
  S.cats.filter(c=>c.kind===(kind||'inc')).forEach(c=>{
    const ck=normAr(c.name).replace(/\s+/g,'');let s=ck===k?1:sim(c.name,name);
    if(k.length>=3&&ck.length>=3&&(ck.includes(k)||k.includes(ck)))s=Math.max(s,.8);
    if(s>bs){bs=s;best=c}
  });
  return bs>=.6?best:null;
}
async function saveTx(){
  grab();const amount=parseNum(F.amount);
  if(!(amount>0))return toast('اكتب مبلغ صحيح');
  if(!F.date)return toast('اختار التاريخ');
  if(!F.method)return toast('اختار الحساب');
  let cid=null,newName='';
  if(F.type==='tr'){if(!F.to||F.to===F.method)return toast('اختار حسابين مختلفين')}
  else{
    const kind=F.type,cc=F.cat&&F.cat!=='__new'&&C(F.cat);
    if(cc&&cc.kind===kind)cid=cc.id;
    else{
      const name=(F.cat==='__new'?F.newCat:F.cq||'').trim();
      if(!name)return toast(kind==='inc'?'اكتب اسم البند':'اختار البند');
      const ex=S.cats.find(c=>c.kind===kind&&normAr(c.name)===normAr(name));
      if(ex&&F.cat!=='__new')cid=ex.id;
      else if(kind==='inc'){
        /* التحصيل: لو فيه بند اسمه شبهه بيسألك */
        const m=findIncCat(name,'inc');
        if(m){
          const use=await ask('خلي بالك ⚠️',`فيه بند متسجل قبل كده اسمه «${m.name}».\nتسجّل على البند ده، ولا تعمل بند جديد باسم «${name}»؟`,{icon:'⚠️',ok:'سجّل عليه',cancel:'➕ بند جديد'});
          if(use===null)return;
          if(use)cid=m.id;
          else if(normAr(m.name)===normAr(name))return toast('فيه بند بنفس الاسم بالظبط، غيّر الاسم شوية');
          else newName=name;
        }else newName=name;
      }else{
        if(ex)cid=ex.id;
        else if(F.cat==='__new')newName=name;
        else{if(!await ask('بند جديد؟',`مفيش بند اسمه «${name}».\nتعمل بند جديد بالاسم ده؟`,{icon:'➕',ok:'اعمل بند جديد',cancel:'رجوع'}))return;newName=name}
      }
    }
  }
  /* تحصيل جديد: بيسأل محصّل ولا غير محصّل، ولو قفلت الرسالة بـ ✕ مبيسجلش */
  if(F.type==='inc'&&!F.id){
    const done=await ask('الحالة',`${cid?C(cid).name:newName} · ${fmt(amount)}`,{icon:'💰',ok:'✅ محصّل',cancel:'⏳ غير محصّل'});
    if(done===null)return;
    F.pend=!done;
  }
  const pend=F.type==='inc'&&!!F.pend;
  if(!pend&&isClosed(F.date))return toast(`شهر ${mName(F.date.slice(0,7))} مقفول`);
  if(newName){const c=ensureCat(newName,F.type);c.active=true;cid=c.id}
  const t={id:F.id||uid(),type:F.type,amount,method:F.method,via:F.via||'',date:F.date,note:(F.note||'').trim(),files:F.files||[],created:F.created||Date.now()};
  if(pend)t.pend=true;if(F.post)t.post=F.post;if(F.due&&!pend)t.due=F.due;
  if(F.type==='tr')t.to=F.to;else t.cat=cid;
  if(F.src&&F.type!=='tr')t.src=F.src;
  const i=S.txs.findIndex(x=>x.id===t.id);if(i>=0)S.txs[i]=t;else S.txs.push(t);
  const bb=S.buys.find(b=>b.txId===t.id);if(bb){bb.total=t.amount;bb.date=t.date}
  save();closeSheet();render();refreshRV();
  toast(pend?`⏳ غير محصّل · ${fmt(amount)}`:F.type==='inc'?`✅ محصّل · ${fmt(amount)}`:'اتسجّل ✓');
}

/* ========== شاشة المصروفات: كل مصروف سطر لوحده، ولما تدوس عليه يفتح على طول ========== */
function vExps(){
  const k=ym(cur.y,cur.m),list=keyTx(k).filter(t=>t.type==='exp'),tot=list.reduce((a,t)=>a+t.amount,0);
  const dl=dueList(k,'','exp'),linked=new Set(dl.filter(o=>o.s.st==='done').map(o=>o.s.t.id));
  const others=list.filter(t=>!linked.has(t.id)),ptx=pendTx('exp',k);
  const fixSum=dl.reduce((a,o)=>a+(o.s.st==='done'?o.s.t.amount:o.s.st==='skip'?0:o.amt),0);
  const oSum=others.reduce((a,t)=>a+t.amount,0),rcpt=new Set(S.buys.map(b=>b.txId));
  let h=`<div class="phead"><h3>💸 ${esc(L('exp'))}</h3><button class="mini" onclick="scanReceipt()">📷 Receipt Scan</button><button class="mini pri" onclick="newTx('exp')">+ ${esc(L('expOne'))}</button></div>`+monthBar()
    +kpis([['اتصرف',fmt(tot),'exp'],['ثابت',fmt(fixSum),'warn'],['عدد العمليات',list.length,'net']])+sortBar();
  const fl=sortList(dl.map(o=>({h:fixedRow(o),a:o.s.t?o.s.t.amount:o.amt,d:o.date,n:o.r.name})));
  h+=grp('ef','📌 ثابت',fl.length,fixSum,'neg',fl.map(x=>x.h).join('')+`<div style="padding:8px 12px"><button class="mini pri" onclick="catForm(null,'exp',{fixed:true})">+ مصروف ثابت</button></div>`);
  if(ptx.length)h+=grp('ep','⏳ لسه ما اتدفعش',ptx.length,ptx.reduce((a,t)=>a+t.amount,0),'neg',ptx.map(txRow).join(''));
  const rows=sortList(others.map(t=>({t,a:t.amount,d:t.date+String(t.created||0).padStart(15,'0'),n:C(t.cat)?.name||''})),true);
  h+=`<h3 class="exh">💸 المصروفات <span class="badge ${rows.length?'soon':'rej'}">${rows.length}</span><b class="neg">${num(oSum)}</b></h3>`;
  h+=rows.length?`<div class="list">${rows.map(({t})=>{const r=rcpt.has(t.id),nf=(t.files||[]).length;
    const sub=[fd(t.date),M(t.method)?.name,viaTxt(t.via),t.note&&!/^🧾/.test(t.note)?t.note:''].filter(Boolean).map(esc).join(' · ')+(nf&&!r?' · 📎':'');
    return `<div class="row" onclick="editTx('${t.id}')"><span class="ic" style="background:var(--soft)">${r?'🧾':'💸'}</span><div class="grow"><b>${esc(C(t.cat)?.name||'—')}</b><small>${sub}</small></div><div class="amt exp">${num(t.amount)}</div></div>`}).join('')}</div>`
    :'<p class="empty">لا يوجد مصروفات الشهر ده</p>';
  return h;
}

/* لو قفلت شاشة "اسم المكان" أو "الأصناف" من برّه */
try{const _c3=closeSheet;closeSheet=function(){const r=_c3.apply(this,arguments);if(NMR){const f=NMR;NMR=null;f(null)}if(BITR){const f=BITR;BITR=null;f(null)}return r}}catch(e){}
/* تنضيف الأسماء البديلة الغلط اللي كانت بتلخبط اسم المحل */
S.cats.forEach(c=>{if(c.alias)c.alias=c.alias.filter(a=>normAr(a).replace(/\s+/g,'').length>=6&&sim(a,c.name)>=.3&&!SKIPM.test(a))});
delete S.settings.vph;

/* ========== تشغيل ========== */
S.contacts.forEach(c=>{if(c.note)c.note=''});
/* أي أصناف قديمة بشكل غلط بتتشال */
S.buys.forEach(b=>{if(!Array.isArray(b.items))b.items=[];else b.items=b.items.filter(x=>x&&typeof x==='object'&&typeof x.n==='string'&&x.n)});
/* أي ريسيت المصروف بتاعه اتمسح قبل كده بيتشال هو كمان */
(()=>{const ids=new Set(S.txs.map(t=>t.id)),orph=S.buys.filter(b=>b.txId&&!ids.has(b.txId));if(orph.length){S.buys=S.buys.filter(b=>!orph.includes(b));ocrDel(orph.map(b=>b.id))}})();
S.cards.forEach(c=>{if(c.docId&&doc(c.docId)&&!LNK()['c:'+c.id]){LNK()['c:'+c.id]=c.docId;setFold(c.docId,'bank')}});
S.renew.forEach(r=>{if((r.files||[]).length&&!linkedDoc('r:'+r.id))syncDoc('r:'+r.id,'personal',renDocName(r),r.files,'كارت شخصي')});
AMTS=amtSnap();
applyTheme();applyFont();applyName();autoPostFixed();save();render();
TXIDS=new Set(S.txs.map(t=>t.id));TXSNAP=snapTx();
if(!draftGet())gcFiles();
if(LK.pin)showLock();else{inAppAlerts();setTimeout(()=>draftOpen(true),300)}
if(!DEMO&&GD.linked)loadJS('https://accounts.google.com/gsi/client').catch(()=>{});
if(navigator.storage&&navigator.storage.persist)navigator.storage.persist().catch(()=>{});
if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').then(()=>setTimeout(pushAlerts,1500)).catch(()=>{}));
let hiddenAt=0;
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='hidden'){draftSave();hiddenAt=Date.now();if(SHOWAMT){SHOWAMT=false;clearTimeout(amtT);if(view==='home')render()}return}
  if(LK.pin&&hiddenAt&&(Date.now()-hiddenAt)/60000>=(LK.after??1))showLock();
  if(autoPostFixed())render();
  updateBell();pushAlerts();inAppAlerts();
});
/* نهاية more.js */