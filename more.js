/* ========== Centric · more.js ========== */
(()=>{const s=document.createElement('style');s.textContent=`#scan .sframe:not(.card){top:8%!important;bottom:15%!important;left:3%!important;right:3%!important;width:auto!important;height:auto!important;transform:none!important;margin:0!important}
.phw{position:relative;display:inline-block}.phw .phx{position:absolute;top:4px;left:4px;padding:2px 8px}`;document.head.appendChild(s)})();

/* ========== الرسوم ========== */
function niceMax(m){const p=Math.pow(10,Math.floor(Math.log10(m)));return Math.ceil(m/p*2)/2*p}
function svgChart(labels,series,type,o={}){
  const W=640,H=280,pl=52,pr=12,pt=30,pb=38,n=labels.length,id=o.id||'c';
  const max=Math.max(1,...series.flatMap(s=>s.values)),top=niceMax(max),cw=(W-pl-pr)/n,ih=H-pt-pb,base=H-pb;
  const y=v=>pt+ih*(1-v/top),xc=i=>pl+cw*(n-1-i)+cw/2,showV=n*series.length<=14;
  let defs='',g='';
  series.forEach((s,si)=>defs+=`<linearGradient id="${id}g${si}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${s.color}" stop-opacity="1"/><stop offset="1" stop-color="${s.color}" stop-opacity=".6"/></linearGradient>`);
  if(o.hi!=null&&o.hi>=0)g+=`<rect x="${xc(o.hi)-cw/2+3}" y="${pt-22}" width="${cw-6}" height="${ih+22}" rx="10" fill="#94a3b8" fill-opacity=".13"/>`;
  for(let i=0;i<=4;i++){const v=top*i/4,yy=y(v);g+=`<line x1="${pl}" x2="${W-pr}" y1="${yy}" y2="${yy}" stroke="#94a3b8" stroke-opacity="${i?.25:.55}" ${i?'stroke-dasharray="4 5"':''}/><text x="${pl-8}" y="${yy+4}" font-size="12" text-anchor="end" fill="#94a3b8">${short(v)}</text>`}
  const gap=Math.min(6,cw*.06),bw=Math.min(34,(cw*.76-gap*(series.length-1))/series.length),tw=bw*series.length+gap*(series.length-1);
  series.forEach((s,si)=>s.values.forEach((v,i)=>{
    const bx=xc(i)-tw/2+si*(bw+gap),hh=v?Math.max(3,base-y(v)):0;
    if(hh)g+=`<rect x="${bx}" y="${base-hh}" width="${bw}" height="${hh}" rx="${Math.min(7,bw/2)}" fill="url(#${id}g${si})"/>`;
    if(showV&&v)g+=`<text x="${bx+bw/2}" y="${base-hh-6}" font-size="${series.length>1?11:12}" font-weight="700" text-anchor="middle" fill="${s.color}">${short(v)}</text>`;
  }));
  labels.forEach((l,i)=>g+=`<text x="${xc(i)}" y="${H-12}" font-size="12" text-anchor="middle" fill="${i===o.hi?'currentColor':'#94a3b8'}" font-weight="${i===o.hi?700:400}">${esc(l)}</text>`);
  return `<svg viewBox="0 0 ${W} ${H}" class="svgc"><defs>${defs}</defs>${g}</svg>`;
}
function catItems(list,kind){
  const g={};list.filter(t=>t.type===kind&&!t.pend).forEach(t=>g[t.cat]=(g[t.cat]||0)+t.amount);
  const e=Object.entries(g).sort((a,b)=>b[1]-a[1]);
  const top=e.slice(0,7).map(([id,v],i)=>({id,label:C(id)?.name||'—',value:v,color:PAL[i]}));
  const rest=e.slice(7).reduce((a,x)=>a+x[1],0);if(rest)top.push({label:'أخرى',value:rest,color:'#94a3b8'});
  return top;
}
function ring(v,frac,color,label){
  const R=42,Cc=2*Math.PI*R,len=Math.max(0,Math.min(1,frac))*Cc;
  return `<div class="rg"><svg viewBox="0 0 110 110"><circle cx="55" cy="55" r="${R}" fill="none" stroke="#e5e7eb" stroke-width="12"/>${len>0?`<circle cx="55" cy="55" r="${R}" fill="none" stroke="${color}" stroke-width="12" stroke-linecap="round" stroke-dasharray="${len} ${Cc}" transform="rotate(-90 55 55)"/>`:''}<text x="55" y="61" text-anchor="middle" font-size="18" font-weight="800" fill="${color}">${short(Math.abs(v))}</text></svg><b>${esc(label)}</b><small>${v<0?'-':''}${num(Math.abs(v))}</small></div>`;
}
function rings(s){const base=Math.max(s.inc,s.exp,1);return `<div class="rings">${ring(s.inc,s.inc/base,'#16a34a',L('inc'))}${ring(s.exp,s.exp/base,'#dc2626',L('exp'))}${ring(s.net,Math.abs(s.net)/base,s.net<0?'#dc2626':'#2563eb',L('net'))}</div>`}

/* ========== التقارير: الاختيارات ========== */
function monthSel(){
  const ks=[];for(let i=0;i<36;i++){const d=new Date(NY,NM-1-i,1);ks.push(ym(d.getFullYear(),d.getMonth()+1))}
  return `<label>الشهر<select onchange="RF.month=this.value">${ks.map(k=>`<option value="${k}" ${k===RF.month?'selected':''}>${mName(k)}</option>`).join('')}</select></label>`;
}
function yearsList(){const ys=new Set([NY,NY-1,NY-2]);S.txs.forEach(t=>ys.add(+t.date.slice(0,4)));S.cash.forEach(c=>ys.add(+c.date.slice(0,4)));return [...ys].sort((a,b)=>b-a)}
const yearSel=()=>`<label>السنة<select onchange="RF.year=+this.value">${yearsList().map(y=>`<option value="${y}" ${y===RF.year?'selected':''}>${y}</option>`).join('')}</select></label>`;
function catOpts(sel,type){
  const g=(k,lab)=>`<optgroup label="${esc(lab)}">${S.cats.filter(c=>c.kind===k).map(c=>`<option value="${c.id}" ${c.id===sel?'selected':''}>${esc(c.name)}</option>`).join('')}</optgroup>`;
  return (type==='exp'?'':g('inc',L('inc')))+(type==='inc'?'':g('exp',L('exp')));
}
function fStmt(){
  if(RF.period==='custom'&&!RF.from){RF.from=NKM+'-01';RF.to=today()}
  return `<div class="seg">${[['all','الكل'],['inc',L('inc')],['exp',L('exp')]].map(([k,l])=>`<button class="${RF.type===k?'on '+k:''}" onclick="RF.type='${k}';RF.cat='';render()">${esc(l)}</button>`).join('')}</div>
  <div class="two"><label>البند<select onchange="RF.cat=this.value"><option value="">كل البنود</option>${catOpts(RF.cat,RF.type)}</select></label>
  <label>الحساب<select onchange="RF.method=this.value"><option value="">الكل</option>${opt(S.methods,RF.method)}</select></label></div>
  <label>الفترة<select onchange="RF.period=this.value;render()">${PERIODS.map(([k,l])=>`<option value="${k}" ${RF.period===k?'selected':''}>${l}</option>`).join('')}</select></label>
  ${RF.period==='custom'?`<div class="two"><label>من<input type="date" value="${RF.from}" onchange="RF.from=this.value"></label><label>إلى<input type="date" value="${RF.to}" onchange="RF.to=this.value"></label></div>`:''}`;
}
function fCmp(){
  return `<label>البند<select onchange="RF.ccat=this.value"><option value="ALL_EXP" ${RF.ccat==='ALL_EXP'?'selected':''}>كل ${esc(L('exp'))}</option><option value="ALL_INC" ${RF.ccat==='ALL_INC'?'selected':''}>كل ${esc(L('inc'))}</option>${catOpts(RF.ccat)}</select></label>
  <label>الفترة<select onchange="RF.crange=this.value">${[['3','آخر 3 شهور'],['6','آخر 6 شهور'],['12','آخر 12 شهر']].concat(yearsList().map(y=>['y:'+y,'سنة '+y])).map(([v,l])=>`<option value="${v}" ${RF.crange===v?'selected':''}>${l}</option>`).join('')}</select></label>`;
}
const fInst=()=>`<label>البند<select onchange="RF.plan=this.value"><option value="">كل الأقساط</option>${opt(S.plans,RF.plan)}</select></label>`;
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
function paper(title,sub,body){
  return `<div class="ph"><div><div class="ph-app" dir="ltr">${esc(appName())}</div><div class="ph-t">${esc(title)}</div><div class="ph-s">${esc(sub)}</div></div><div class="ph-d">تاريخ الإصدار<br><b>${dmy(today())}</b></div></div>${body}
  <div class="pf"><b dir="ltr">${DEV.name}</b> · <span dir="ltr">${DEV.company}</span><br><span dir="ltr">${DEV.phones.join(' - ')}</span></div>`;
}
const dS=(from,to,cat,type,method)=>`dOps('${from}','${to}','${cat||''}','${type||''}','${method||''}')`;
function dOps(from,to,cat,type,method){drill(()=>{rtab='ops';RF.period='custom';RF.from=from;RF.to=to;RF.cat=cat||'';RF.type=type||(cat?(C(cat)?.kind||'all'):'all');RF.method=method||''})}
function dMonth(k){drill(()=>{rtab='month';RF.month=k})}
function stmtRows(){
  const[from,to]=periodRange();
  return{from,to,rows:S.txs.filter(t=>!t.pend&&t.type!=='tr'&&t.date>=from&&t.date<=to&&(RF.type==='all'||t.type===RF.type)&&(!RF.cat||t.cat===RF.cat)&&(!RF.method||t.method===RF.method)).sort(byAsc)};
}
function stmtSub(from,to){return [RF.period==='all'?'كل الفترات':`${dmy(from)} - ${dmy(to)}`,RF.type==='all'?'':RF.type==='exp'?L('exp'):L('inc'),RF.cat?C(RF.cat)?.name:'',RF.method?M(RF.method)?.name:''].filter(Boolean).join(' · ')}
const subOf=arr=>sm(arr.filter(Boolean).map(esc).join(' · '));
function catTable(list,kind,click,noPct){
  const g={};list.filter(t=>t.type===kind&&!t.pend).forEach(t=>{g[t.cat]=g[t.cat]||{n:0,v:0};g[t.cat].n++;g[t.cat].v+=t.amount});
  const e=Object.entries(g).sort((a,b)=>b[1].v-a[1].v),tot=e.reduce((a,x)=>a+x[1].v,0),n=e.reduce((a,x)=>a+x[1].n,0);
  if(!e.length)return '<p class="pnote">لا يوجد</p>';
  const row=([id,x])=>`<tr class="${click?'clk':''}" ${click?`onclick="${click(id)}"`:''}><td class="wrap"><b>${esc(C(id)?.name||'—')}</b></td><td>${x.n}</td><td class="${kind}"><b>${num(x.v)}</b></td>${noPct?'':`<td>${pbar(x.v/tot*100,'#16a34a')}</td>`}</tr>`;
  return noPct?tbl(['البند','العدد','الإجمالي'],e.map(row),`<tr><td>الإجمالي</td><td>${n}</td><td>${num(tot)}</td></tr>`)
    :tbl(['البند','العدد','الإجمالي','النسبة'],e.map(row),`<tr><td>الإجمالي</td><td>${n}</td><td>${num(tot)}</td><td>100%</td></tr>`);
}
function netTable(s){
  return tbl(['البيان','المبلغ'],[`<tr><td><b>${esc(L('inc'))}</b></td><td class="inc"><b>${num(s.inc)}</b></td></tr>`,`<tr><td><b>${esc(L('exp'))}</b></td><td class="exp"><b>- ${num(s.exp)}</b></td></tr>`],
    `<tr><td>${esc(L('net'))}</td><td><span class="${s.net<0?'exp':'inc'}">${netTxt(s.net)}</span></td></tr>`);
}
function bStmt(){
  const{from,to,rows}=stmtRows(),s=sums(rows);
  let b=kpis([[L('inc'),fmt(s.inc),'inc'],[L('exp'),fmt(s.exp),'exp'],[L('net'),netTxt(s.net),netCls(s.net)],['عدد العمليات',rows.length]]);
  if(RF.type!=='exp')b+=sec('💰 '+esc(L('inc')))+catTable(rows,'inc',id=>dS(from,to,id));
  if(RF.type!=='inc')b+=sec('💸 '+esc(L('exp')))+catTable(rows,'exp',id=>dS(from,to,id),true);
  if(RF.type==='all')b+=sec('🧮 '+esc(L('net')))+netTable(s);
  const g={};rows.forEach(t=>{g[t.cat]=g[t.cat]||{n:0,v:0,type:t.type};g[t.cat].n++;g[t.cat].v+=t.amount});
  return{title:'كشف حساب حسب البند',sub:stmtSub(from,to),body:b,csv:{head:['البند','النوع','عدد العمليات','الإجمالي'],rows:Object.entries(g).map(([id,x])=>[C(id)?.name||'',x.type==='exp'?L('expOne'):L('incOne'),x.n,x.v])}};
}
function bOps(){
  const{from,to,rows}=stmtRows(),s=sums(rows),wf=rows.filter(t=>(t.files||[]).length).length;
  const inc=rows.filter(t=>t.type==='inc'),exp=rows.filter(t=>t.type==='exp');
  const row=t=>`<tr class="clk" onclick="editTx('${t.id}')"><td>${dmy2(t.date)}</td><td class="wrap"><b>${esc(C(t.cat)?.name||'—')}</b>${isAnnualTx(t)?' <span class="tag ctr">سنوي</span>':''}${subOf([M(t.method)?.name,viaTxt(t.via),t.note])}</td><td class="${t.type}"><b>${num(t.amount)}</b></td><td>${(t.files||[]).length?'📎'+t.files.length:''}</td></tr>`;
  const head=['التاريخ','البند','المبلغ','📎'];
  let b=kpis([[L('inc'),fmt(s.inc),'inc'],[L('exp'),fmt(s.exp),'exp'],[L('net'),netTxt(s.net),netCls(s.net)],['عدد العمليات',rows.length],['بمرفقات',wf,'warn']]);
  if(RF.type!=='exp')b+=sec('💰 '+esc(L('inc')))+(inc.length?tbl(head,inc.map(row),`<tr><td colspan="2">إجمالي ${esc(L('inc'))}</td><td colspan="2"><span class="inc">${num(s.inc)}</span></td></tr>`):'<p class="pnote">لا يوجد</p>');
  if(RF.type!=='inc')b+=sec('💸 '+esc(L('exp')))+(exp.length?tbl(head,exp.map(row),`<tr><td colspan="2">إجمالي ${esc(L('exp'))}</td><td colspan="2"><span class="exp">${num(s.exp)}</span></td></tr>`):'<p class="pnote">لا يوجد</p>');
  if(RF.type==='all')b+=sec('🧮 '+esc(L('net')))+netTable(s);
  return{title:'تفاصيل العمليات',sub:stmtSub(from,to),body:b,csv:{head:['التاريخ','النوع','البند','الحساب','الطريقة','المبلغ','ملاحظات'],rows:inc.concat(exp).map(t=>[dmy(t.date),t.type==='exp'?L('expOne'):L('incOne'),C(t.cat)?.name||'',M(t.method)?.name||'',viaTxt(t.via),t.type==='exp'?-t.amount:t.amount,t.note||''])}};
}
function bMonth(){
  const k=RF.month,list=keyTx(k),s=sums(list),[f,t]=mRange(k),cl=cashOf(k),trs=list.filter(x=>x.type==='tr');
  let b=kpis([[L('inc'),fmt(s.inc),'inc'],[L('exp'),fmt(s.exp),'exp'],[L('net'),netTxt(s.net),netCls(s.net)],['عدد العمليات',list.filter(x=>x.type!=='tr').length],['الحالة',S.closed[k]?'🔒 اتقفل':'🔓 مفتوح','warn']]);
  b+=rings(s);
  b+=sec(`💰 ${esc(L('inc'))}`)+catTable(list,'inc',id=>dS(f,t,id));
  b+=sec(`💸 ${esc(L('exp'))}`)+catTable(list,'exp',id=>dS(f,t,id),true);
  b+=sec('🧮 '+esc(L('net')))+netTable(s);
  const pm=pmStats(list).filter(x=>x.i||x.o);
  if(pm.length)b+=sec(esc(L('pm')))+tbl(['الحساب','العدد','قبضت','صرفت'],pm.map(x=>`<tr class="clk" onclick="${dS(f,t,'','',x.m.id)}"><td class="wrap"><b>${esc(x.m.name)}</b></td><td>${x.n}</td><td class="inc">${num(x.i)}</td><td class="exp">${num(x.o)}</td></tr>`));
  if(trs.length)b+=sec('🔁 التحويلات')+tbl(['التاريخ','التحويل','المبلغ'],trs.sort(byAsc).map(x=>`<tr class="clk" onclick="editTx('${x.id}')"><td>${fd(x.date)}</td><td class="wrap"><b>من ${esc(M(x.method)?.name||'—')} إلى ${esc(M(x.to)?.name||'—')}</b>${subOf([viaTxt(x.via),x.note])}</td><td><b>${num(x.amount)}</b></td></tr>`));
  const top=list.filter(x=>x.type==='exp').sort((a,c)=>c.amount-a.amount).slice(0,5);
  if(top.length)b+=sec(`أكبر ${esc(L('exp'))}`)+tbl(['التاريخ','البند','المبلغ'],top.map(x=>`<tr class="clk" onclick="editTx('${x.id}')"><td>${fd(x.date)}</td><td class="wrap"><b>${esc(C(x.cat)?.name||'—')}</b>${subOf([x.note])}</td><td class="exp"><b>${num(x.amount)}</b></td></tr>`));
  if(cl.length)b+=sec(`🏧 ${esc(L('cash'))}`)+tbl(['التاريخ','سحبت من','المبلغ'],cl.sort((a,c)=>a.date.localeCompare(c.date)).map(c=>`<tr><td>${fd(c.date)}</td><td class="wrap"><b>${esc(M(c.method)?.name||'—')}</b>${subOf([c.note])}</td><td><b>${num(c.amount)}</b></td></tr>`),`<tr><td colspan="2">الإجمالي</td><td>${num(cl.reduce((a,c)=>a+c.amount,0))}</td></tr>`);
  return{title:'تقرير شهري',sub:mName(k),body:b};
}
function bYear(){
  const y=RF.year,ks=MONTHS.map((n,i)=>ym(y,i+1)),data=ks.map(k=>sums(keyTx(k))),yl=S.txs.filter(t=>!t.pend&&t.date.startsWith(y+'-')),s=sums(yl);
  const act=data.filter(d=>d.inc||d.exp).length||1;
  let b=kpis([[L('inc'),fmt(s.inc),'inc'],[L('exp'),fmt(s.exp),'exp'],[L('net'),netTxt(s.net),netCls(s.net)],['متوسط المصروف الشهري',fmt(s.exp/act),'warn']]);
  b+=rings(s);
  b+=sec('شهر بشهر')+`<div class="pchart">${svgChart(ks.map(k=>String(+k.slice(5))),[{name:L('inc'),color:'#16a34a',values:data.map(d=>d.inc)},{name:L('exp'),color:'#dc2626',values:data.map(d=>d.exp)}],'bars',{id:'ry'})}</div>`;
  b+=tbl(['الشهر',esc(L('inc')),esc(L('exp')),esc(L('net')),''],data.map((d,i)=>`<tr class="clk" onclick="dMonth('${ks[i]}')"><td><b>${MONTHS[i]}</b></td><td class="inc">${num(d.inc)}</td><td class="exp">${num(d.exp)}</td><td class="${d.net<0?'exp':'inc'}"><b>${d.net<0?'-'+num(-d.net):num(d.net)}</b></td><td>${S.closed[ks[i]]?'🔒':'🔓'}</td></tr>`),
    `<tr><td>الإجمالي</td><td>${num(s.inc)}</td><td>${num(s.exp)}</td><td>${s.net<0?'-'+num(-s.net):num(s.net)}</td><td></td></tr>`);
  b+=sec(`💰 ${esc(L('inc'))}`)+catTable(yl,'inc',id=>dS(y+'-01-01',y+'-12-31',id))+sec(`💸 ${esc(L('exp'))}`)+catTable(yl,'exp',id=>dS(y+'-01-01',y+'-12-31',id),true);
  return{title:'تقرير سنوي',sub:'سنة '+y,body:b};
}
function bCmp(){
  let ks=[];
  if(RF.crange.startsWith('y:')){const y=+RF.crange.slice(2);for(let i=1;i<=12;i++)ks.push(ym(y,i))}
  else{const n=+RF.crange;for(let i=n-1;i>=0;i--){const d=new Date(NY,NM-1-i,1);ks.push(ym(d.getFullYear(),d.getMonth()+1))}}
  const cc=RF.ccat,kind=cc==='ALL_INC'?'inc':cc==='ALL_EXP'?'exp':(C(cc)?.kind||'exp');
  const name=cc==='ALL_EXP'?'كل '+L('exp'):cc==='ALL_INC'?'كل '+L('inc'):(C(cc)?.name||'—');
  const match=t=>cc==='ALL_EXP'?t.type==='exp':cc==='ALL_INC'?t.type==='inc':t.cat===cc;
  const vals=ks.map(k=>keyTx(k).filter(match).reduce((a,t)=>a+t.amount,0));
  const tot=vals.reduce((a,b)=>a+b,0),avg=tot/ks.length,mxv=Math.max(...vals);
  const mx=vals.indexOf(mxv),nz=vals.filter(v=>v>0),mn=nz.length?vals.indexOf(Math.min(...nz)):-1;
  const color=kind==='exp'?'#dc2626':'#16a34a',isAll=cc.startsWith('ALL_');
  let ups=0;
  const rows=ks.map((k,i)=>{
    const v=vals[i],pv=i?vals[i-1]:null,d=pv==null?null:v-pv,pc=pv?d/pv*100:null;
    let st='—';
    if(d!=null&&d!==0){const up=d>0;if(up)ups++;const bad=kind==='exp'?up:!up;st=`<span class="${bad?'exp':'inc'}"><b>${up?'🔺 زيادة':'🔻 نقص'}</b></span>`}
    const dc=d==null?'—':`<span class="${(kind==='exp'?d>0:d<0)?'exp':'inc'}">${d>0?'+':''}${num(d)}</span>`;
    const [f,t]=mRange(k);
    return `<tr class="clk ${i===mx&&v>0?'hl':''}" onclick="${dS(f,t,isAll?'':cc,kind)}"><td><b>${MONTHS[+k.slice(5)-1]}</b>${sm(k.slice(0,4))}</td><td><b>${num(v)}</b></td><td>${dc}${pc==null?'':sm((pc>0?'+':'')+Math.round(pc)+'%')}</td><td>${st}</td></tr>`;
  });
  let b=kpis([['الإجمالي',fmt(tot),kind],['المتوسط الشهري',fmt(avg),'net'],['أعلى شهر',vals[mx]?`${MONTHS[+ks[mx].slice(5)-1]} · ${num(vals[mx])}`:'—','warn'],['أقل شهر',mn>=0?`${MONTHS[+ks[mn].slice(5)-1]} · ${num(vals[mn])}`:'—'],['شهور زادت',ups]]);
  b+=sec('الرسم البياني')+`<div class="pchart">${svgChart(ks.map(k=>ks.length<=6?MONTHS[+k.slice(5)-1]:mShort(k)),[{name,color,values:vals}],'bars',{id:'rc',hi:mx})}</div>`;
  b+=sec('شهر بشهر')+tbl(['الشهر','المبلغ','التغيير','الحالة'],rows,`<tr><td>الإجمالي</td><td>${num(tot)}</td><td colspan="2">المتوسط ${num(avg)}</td></tr>`);
  return{title:'مقارنة: '+name,sub:`${mName(ks[0])} - ${mName(ks[ks.length-1])}`,body:b,
    csv:{head:['الشهر','المبلغ','الفرق','التغيير %'],rows:ks.map((k,i)=>{const pv=i?vals[i-1]:null;return[mName(k),vals[i],pv==null?'':vals[i]-pv,pv?Math.round((vals[i]-pv)/pv*100):'']})}};
}
function bCols(){
  const k=RF.month,dl=dueList(k,'m','inc'),linked=new Set(dl.filter(o=>o.s.st==='done').map(o=>o.s.t.id)),others=keyTx(k).filter(t=>t.type==='inc'&&!linked.has(t.id));
  const ptx=S.txs.filter(t=>t.type==='inc'&&t.pend&&t.date.startsWith(k+'-')),pt=ptx.reduce((a,t)=>a+t.amount,0);
  let exp=0,rem=0;dl.forEach(o=>{exp+=o.amt;if(o.s.st==='wait')rem+=o.amt});
  let b=kpis([['المحصّل',fmt(sums(keyTx(k)).inc),'inc'],['المتوقع',fmt(exp+pt),'net'],['المتبقي',fmt(rem+pt),'exp']]);
  b+=sec('📌 ثابت')+(dl.length?tbl(['البند','الميعاد','المتوقع','اتحصّل','الحالة'],dl.map(o=>`<tr class="${o.s.st==='done'?'clk':''}" ${o.s.st==='done'?`onclick="editTx('${o.s.t.id}')"`:''}><td class="wrap"><b>${esc(o.r.name)}</b>${subOf([everyTxt(o.r.every),o.s.st==='done'?M(o.s.t.method)?.name:''])}</td><td>${fd(o.date)}</td><td>${num(o.amt)}</td><td class="inc">${o.s.st==='done'?num(o.s.t.amount):'—'}</td><td>${stTag(o.s,o.date)}</td></tr>`)):'<p class="pnote">لا يوجد</p>');
  if(ptx.length)b+=sec('⏳ غير محصّل')+tbl(['الميعاد','البند','المبلغ'],ptx.sort(byAsc).map(x=>`<tr class="clk" onclick="editTx('${x.id}')"><td>${fd(x.date)}</td><td class="wrap"><b>${esc(C(x.cat)?.name||'—')}</b>${subOf([x.post?'اتأجّل '+x.post+' مرة':'',x.note])}</td><td><b>${num(x.amount)}</b></td></tr>`),`<tr><td colspan="2">الإجمالي</td><td>${num(pt)}</td></tr>`);
  b+=sec('✅ باقي التحصيلات')+(others.length?tbl(['التاريخ','البند','المبلغ'],others.sort(byAsc).map(x=>`<tr class="clk" onclick="editTx('${x.id}')"><td>${fd(x.date)}</td><td class="wrap"><b>${esc(C(x.cat)?.name||'—')}</b>${isAnnualTx(x)?' <span class="tag ctr">سنوي</span>':''}${subOf([M(x.method)?.name,viaTxt(x.via),x.note])}</td><td class="inc"><b>${num(x.amount)}</b></td></tr>`)):'<p class="pnote">لا يوجد</p>');
  return{title:'تقرير التحصيلات',sub:mName(k),body:b};
}
function bContracts(){
  const cs=FX().filter(isAnn);
  if(!cs.length)return{title:'تقرير '+L('contracts'),sub:'',body:'<p class="pnote">لا يوجد</p>'};
  let tot=0,col=0;cs.forEach(r=>{if(r.active!==false)tot+=occAmt(r,nextOcc(r));Object.values(r.st||{}).forEach(rec=>{const s=stOf(rec);if(s.st==='done')col+=s.t.amount})});
  let b=kpis([['عدد البنود',cs.length,'net'],['قيمة المرات الجاية',fmt(tot),'warn'],['إجمالي اللي اتسجّل',fmt(col),'inc']]);
  b+=sec('الملخص')+tbl(['البند','الجاي','المبلغ','آخر مرة'],cs.map(r=>{const k=nextOcc(r),last=lastDone(r);return `<tr><td class="wrap"><b>${esc(r.name)}</b>${subOf([r.kind==='inc'?L('incOne'):L('expOne'),everyTxt(r.every),r.pct?'+'+r.pct+'%':''])}</td><td>${dmy2(occDate(r,k))}</td><td><b>${num(occAmt(r,k))}</b></td><td>${last?num(last.amount)+sm(dmy2(last.date)):'—'}</td></tr>`}));
  cs.forEach(r=>{
    const nk=nextOcc(r),rows=[];
    for(let k=0;k<=nk;k++){const s=stOf(occRec(r,k)),d=occDate(r,k);rows.push(`<tr class="${s.st==='done'?'clk':''}" ${s.st==='done'?`onclick="editTx('${s.t.id}')"`:''}><td>${dmy2(d)}</td><td>${num(occAmt(r,k))}</td><td class="inc">${s.st==='done'?num(s.t.amount)+sm(dmy2(s.t.date)):'—'}</td><td>${stTag(s,d)}</td></tr>`)}
    b+=sec('📄 '+esc(r.name))+tbl(['الميعاد','المتوقع','الفعلي','الحالة'],rows);
  });
  return{title:'تقرير '+L('contracts'),sub:'',body:b};
}
function bInst(){
  const plans=RF.plan?S.plans.filter(p=>p.id===RF.plan):S.plans;
  if(!plans.length)return{title:'تقرير الأقساط',sub:'',body:'<p class="pnote">لا يوجد أقساط</p>'};
  let T=0,P=0,LT=0;plans.forEach(p=>{const s=planStats(p);T+=s.total;P+=s.paid;LT+=s.late});
  let b=kpis([['الإجمالي',fmt(T),'net'],['المدفوع',fmt(P),'inc'],['الباقي',fmt(T-P),'exp'],['أقساط متأخرة',LT,'warn']]);
  if(plans.length>1)b+=sec('ملخص')+tbl(['البند','الأقساط','المدفوع','الباقي','الجاي'],plans.map(p=>{const s=planStats(p);return `<tr><td class="wrap"><b>${esc(p.name)}</b></td><td>${s.paidN}/${s.n}</td><td class="inc">${num(s.paid)}</td><td class="exp">${num(s.total-s.paid)}</td><td>${s.next?dmy2(s.next.due):'—'}</td></tr>`}));
  plans.forEach(p=>{
    b+=sec('🏦 '+esc(p.name))+tbl(['الميعاد','المبلغ','الحالة'],[...p.items].sort((a,c)=>(a.due||'').localeCompare(c.due||'')).map(it=>{const t=itTx(it);return `<tr class="${t?'clk':''}" ${t?`onclick="editTx('${t.id}')"`:''}><td>${dmy2(it.due)}</td><td><b>${num(+it.amount||0)}</b></td><td>${t?'<span class="tag ok">مدفوع</span>'+sm(dmy2(t.date)+((t.files||[]).length?' · 📎':'')):stTag({st:'wait'},it.due)}</td></tr>`}));
  });
  return{title:'تقرير الأقساط',sub:RF.plan?plans[0].name:'كل الأقساط',body:b};
}
function bPm(){
  const k=RF.month,list=keyTx(k),rows=pmStats(list).filter(x=>x.i||x.o),s=sums(list),[f,t]=mRange(k);
  let b=kpis([[L('inc'),fmt(s.inc),'inc'],[L('exp'),fmt(s.exp),'exp']]);
  b+=sec(esc(L('pm')))+(rows.length?tbl(['الحساب','العدد','قبضت','صرفت'],rows.map(x=>`<tr class="clk" onclick="${dS(f,t,'','',x.m.id)}"><td class="wrap"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${x.m.color}"></span> <b>${esc(x.m.name)}</b></td><td>${x.n}</td><td class="inc">${num(x.i)}</td><td class="exp">${num(x.o)}</td></tr>`)):'<p class="pnote">لا يوجد</p>');
  return{title:'تقرير '+L('pm'),sub:mName(k),body:b};
}
function bCash(){
  const y=RF.year,yl=S.cash.filter(c=>c.date.startsWith(y+'-')).sort((a,b)=>a.date.localeCompare(b.date)),tot=yl.reduce((a,c)=>a+c.amount,0);
  const ms=MONTHS.map((n,i)=>[n,cashOf(ym(y,i+1))]),act=ms.filter(x=>x[1].length).length||1;
  let b=kpis([['إجمالي المسحوب',fmt(tot),'warn'],['متوسط الشهر',fmt(tot/act),'net'],['عدد المرات',yl.length]]);
  b+=sec('شهر بشهر')+tbl(['الشهر','العدد','المسحوب'],ms.filter(x=>x[1].length).map(([n,l])=>`<tr><td><b>${n}</b></td><td>${l.length}</td><td><b>${num(l.reduce((a,c)=>a+c.amount,0))}</b></td></tr>`),`<tr><td>الإجمالي</td><td>${yl.length}</td><td>${num(tot)}</td></tr>`);
  const g={};yl.forEach(c=>{g[c.method]=(g[c.method]||0)+c.amount});
  if(Object.keys(g).length)b+=sec('حسب الحساب')+tbl(['سحبت من','المسحوب'],Object.entries(g).sort((a,c)=>c[1]-a[1]).map(([id,v])=>`<tr><td class="wrap"><b>${esc(M(id)?.name||'—')}</b></td><td><b>${num(v)}</b></td></tr>`));
  b+=sec('التفاصيل')+(yl.length?tbl(['التاريخ','سحبت من','المبلغ'],yl.map(c=>`<tr><td>${dmy2(c.date)}</td><td class="wrap"><b>${esc(M(c.method)?.name||'—')}</b>${subOf([c.note])}</td><td><b>${num(c.amount)}</b></td></tr>`)):'<p class="pnote">لا يوجد</p>');
  return{title:'تقرير '+L('cash'),sub:'سنة '+y,body:b,csv:{head:['التاريخ','سحبت من','المبلغ','ملاحظة'],rows:yl.map(c=>[dmy(c.date),M(c.method)?.name||'',c.amount,c.note||''])}};
}
const REPS={
  stmt:{ic:'🧾',t:'كشف حساب حسب البند',f:fStmt,b:bStmt},
  ops:{ic:'📋',t:'تفاصيل العمليات',f:fStmt,b:bOps},
  month:{ic:'📅',t:'تقرير شهري',f:monthSel,b:bMonth},
  year:{ic:'📆',t:'تقرير سنوي',f:yearSel,b:bYear},
  cmp:{ic:'📈',t:'مقارنة البنود',f:fCmp,b:bCmp},
  cols:{ic:'💰',t:'تقرير التحصيلات',f:monthSel,b:bCols},
  contracts:{ic:'📄',t:'تقرير التحصيلات السنوية',f:()=>'',b:bContracts},
  inst:{ic:'🏦',t:'تقرير الأقساط',f:fInst,b:bInst},
  pmr:{ic:'💳',t:'تقرير الحسابات',f:monthSel,b:bPm},
  cash:{ic:'🏧',t:'السحب الكاش',f:yearSel,b:bCash}
};
function vReports(){
  if(!rtab||!REPS[rtab])return `<h3>📊 ${esc(L('reports'))}</h3><div class="rgrid">${Object.entries(REPS).map(([k,r])=>`<button class="rbtn" onclick="rtab='${k}';RF={...RFDEF};render();scrollTo(0,0)"><span>${r.ic}</span>${r.t}</button>`).join('')}</div>`;
  const Rp=REPS[rtab];
  return `<div class="phead"><button class="mini" onclick="rtab='';render()">→</button><h3>${Rp.ic} ${Rp.t}</h3></div><div class="box">${Rp.f()}<button class="btn" onclick="openRV()">📄 عرض التقرير</button></div>`;
}
function openRV(keep){
  const Rp=REPS[rtab];if(!Rp)return;
  if(!keep)RVST=[];
  const r=Rp.b();RVCSV=r.csv||null;
  $('#rvt').textContent=r.title;$('#rvdoc').innerHTML=paper(r.title,r.sub,r.body);
  $('#rvcsv').style.display=RVCSV?'':'none';
  $('#rv').classList.add('on');if(!keep||keep==='nav')$('#rvbody').scrollTop=0;
}
function drill(set){RVST.push({rtab,RF:JSON.parse(JSON.stringify(RF))});set();openRV('nav')}
function rvBack(){const p=RVST.pop();if(!p)return closeRV();rtab=p.rtab;RF=p.RF;openRV('nav')}
function refreshRV(){if($('#rv').classList.contains('on'))openRV(true)}
function closeRV(){$('#rv').classList.remove('on');RVST=[];if(view==='reports')render()}
function printReport(){
  const pa=$('#printArea');pa.innerHTML=`<div class="paper">${$('#rvdoc').innerHTML}</div>`;
  document.body.classList.add('printing');
  const done=()=>{document.body.classList.remove('printing');pa.innerHTML='';removeEventListener('afterprint',done)};
  addEventListener('afterprint',done);setTimeout(()=>window.print(),80);
}
function shareReport(){
  const t=$('#rvt').textContent,cs=getComputedStyle(document.documentElement),p=cs.getPropertyValue('--p'),ff=cs.getPropertyValue('--ff'),fk=S.settings.font,fl=FONTS[fk]&&FONTS[fk][2]?`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${FONTS[fk][2]}&display=swap">`:'';
  const html=`<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(t)}</title>${fl}<style>${$('style').textContent}:root{--p:${p};--ff:${ff};--z:1}body{background:#eef1f4;padding:12px;overflow:auto}</style></head><body><div class="paper">${$('#rvdoc').innerHTML.replace(/ onclick="[^"]*"/g,'')}</div></body></html>`;
  shareOrDl([new File([html],`${t}-${today()}.html`,{type:'text/html'})]);
}
function exportCSV(){
  if(!RVCSV)return;const q=v=>`"${String(v??'').replace(/"/g,'""')}"`;
  const lines=[RVCSV.head.map(q).join(',')].concat(RVCSV.rows.map(r=>r.map(q).join(',')));
  shareOrDl([new File(['\ufeff'+lines.join('\r\n')],`${$('#rvt').textContent}-${today()}.csv`,{type:'text/csv'})]);
}

/* ========== الإعدادات ========== */
const SETS=[['name','✏️','اسم التطبيق'],['theme','🎨','الثيم'],['font','🔠','الخط وحجمه'],['home','🏠','الشاشة الرئيسية'],['labels','🔤','المسميات'],['notif','🔔','الإشعارات والصوت'],['sec','🔒','الأمان والخصوصية'],['drive','☁️','نسخ تلقائي على Drive'],['data','💾','النسخ الاحتياطي'],['demo','🧪','نسخة تجريبية'],['about','ℹ️','عن التطبيق']];
function vSettings(){
  const sp=SETS.find(x=>x[0]===stab);
  if(!sp)return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>⚙️ ${esc(L('settings'))}</h3></div><div class="rgrid">${SETS.map(([k,ic,l])=>`<button class="rbtn" onclick="stab='${k}';render();scrollTo(0,0)"><span>${ic}</span>${l}</button>`).join('')}</div>`;
  return `<div class="phead"><button class="mini" onclick="stab='';render()">→</button><h3>${sp[1]} ${sp[2]}</h3></div>`+({name:spName,theme:spTheme,font:spFont,home:spHome,labels:spLabels,notif:spNotif,sec:spSec,drive:spDrive,data:spData,demo:spDemo,about:spAbout})[stab]();
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
  <div class="row" style="cursor:default"><span class="ic" style="overflow:hidden">${LOGO()}</span><div class="grow"><b dir="ltr" style="text-align:right">${esc(appName())}</b><small>الإصدار ${APP_VERSION} · ${APP_BUILD}</small></div></div>
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
  d.cards=[{id:uid(),name:'البنك الأهلي VISA',kind:'debit',net:'visa',last4:'4821',acct:ahly,color:'#0f766e',docId:''}];
  d.renew=[{id:uid(),name:'رخصة العربية',type:'car',num:'أ ب ج 1234',exp:isoD(new Date(Date.now()+20*864e5)),lead:30,note:'',files:[]}];
  const ft=tx('exp',fish,349.7,td,cash,{via:'cash',note:'🧾'});
  if(ft)d.buys=[{id:uid(),date:td,time:'20:12',txId:ft.id,catId:fish.id,store:'أسماك النحاس',items:[{n:'بلطي',q:1.37,p:160,t:219.2},{n:'بوري',q:.45,p:290,t:130.5}],total:349.7,method:cash,via:'cash',card:'',deliv:false,fid:''}];
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

/* ========== الكاميرا: بتصوّر لوحدها أول ما الموبايل يثبت ========== */
async function fileToCanvas(f){
  const u=URL.createObjectURL(f);
  try{const img=await new Promise((r,j)=>{const i=new Image();i.onload=()=>r(i);i.onerror=j;i.src=u});
    const sc=Math.min(1,2200/Math.max(img.width,img.height)),c=document.createElement('canvas');c.width=Math.round(img.width*sc);c.height=Math.round(img.height*sc);c.getContext('2d').drawImage(img,0,0,c.width,c.height);return c}
  finally{URL.revokeObjectURL(u)}
}
let SCAN=null;
async function openScanner(o){
  closeSheet();if(SCAN)SCAN.close();
  const ov=document.createElement('div');ov.id='scan';
  ov.innerHTML=`<video playsinline muted autoplay></video><div class="sframe ${o.card?'card':''}"></div>
  <div class="stop"><button class="mini" data-a="x">✕</button><b>${esc(o.title)}</b><button class="mini" data-a="t" style="visibility:hidden">🔦</button></div>
  <div class="sbot"><div class="sst">⏳ بيفتح الكاميرا...</div><div class="sbtns"><button class="mini" data-a="g">🖼️ من الصور</button><button class="mini pri" data-a="c">📸 صوّر</button></div></div>`;
  document.body.appendChild(ov);
  const btn=a=>ov.querySelector(`[data-a="${a}"]`),stEl=ov.querySelector('.sst'),v=ov.querySelector('video'),fr=ov.querySelector('.sframe');
  let stream=null,alive=true,taken=false,prev=null,still=0,maxSh=0,torch=false;const t0=Date.now();
  const st=t=>{stEl.textContent=t};
  const stopCam=()=>{try{stream&&stream.getTracks().forEach(t=>t.stop())}catch(e){}stream=null};
  const close=()=>{if(!alive)return;alive=false;SCAN=null;stopCam();ov.remove();if(o.onCancel&&!taken)o.onCancel()};
  SCAN={close};btn('x').onclick=close;
  /* بيقص بالظبط اللي جوه الإطار على الشاشة */
  const grabFrame=()=>{
    const vw=v.videoWidth,vh=v.videoHeight,r=v.getBoundingClientRect(),f=fr.getBoundingClientRect();
    const sc=Math.max(r.width/vw,r.height/vh),ox=(r.width-vw*sc)/2,oy=(r.height-vh*sc)/2;
    let sx=(f.left-r.left-ox)/sc,sy=(f.top-r.top-oy)/sc,sw=f.width/sc,sh=f.height/sc;
    const mx=sw*.04,my=sh*.04;sx=Math.max(0,sx-mx);sy=Math.max(0,sy-my);sw=Math.min(vw-sx,sw+2*mx);sh=Math.min(vh-sy,sh+2*my);
    const c=document.createElement('canvas');c.width=Math.round(sw);c.height=Math.round(sh);
    const x=c.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(v,sx,sy,sw,sh,0,0,c.width,c.height);return c;
  };
  const run=async(c,file)=>{
    if(taken)return;taken=true;stopCam();st('✓ اتصوّرت');
    const blob=file||await new Promise(r=>c.toBlob(r,'image/jpeg',.9));
    close();o.onDone(blob);
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
/* بيصوّر وبيحفظ الصورة ويرجّع رقمها */
function snapPhoto(o,cb){
  openScanner({title:o.title,hint:o.hint,card:!!o.card,onCancel:o.onCancel,
    onDone:async blob=>{const ids=await addFiles([new File([blob],(o.name||'photo')+'-'+today()+'.jpg',{type:'image/jpeg'})]);cb(ids[0])}});
}
const photosBox=(files,rm)=>(files||[]).length?`<div class="files">${files.map((f,i)=>`<div class="phw">${fileThumb(f,'view')}<button type="button" class="mini danger phx" onclick="${rm}(${i})">✕</button></div>`).join('')}</div>`:'';

/* ========== الريسيت: صورة + بيانات بإيدك ========== */
function normPhone(x){
  let p=latD(x).replace(/\D/g,'');
  if(p.startsWith('0020'))p='0'+p.slice(4);
  else if(p.startsWith('20')&&p.length===12)p='0'+p.slice(2);
  if(p.length===10&&p.startsWith('1'))p='0'+p;
  return p.length>=5?p:'';
}
let RCF=null;
function scanReceipt(){
  snapPhoto({title:'Receipt Scan',hint:'📄 خلي الريسيت كله جوه الإطار وثبّت',name:'receipt'},fid=>{
    RCF={fid,store:'',amount:'',date:today(),time:nowTime(),method:defMethod(),deliv:false};rcSheet();
  });
}
function rcSheet(){
  const r=RCF,meths=S.methods.filter(m=>m.active||m.id===r.method);
  sheet(`<h2>🧾 ريسيت جديد</h2>
  <div class="files">${fileThumb(r.fid,'view')}</div>
  <label>المكان<input id="rc-s" list="rc-l" value="${esc(r.store)}" placeholder="اسم المحل" oninput="rcPick(this.value)"><datalist id="rc-l">${S.cats.filter(c=>c.kind==='exp'&&c.active!==false).map(c=>`<option value="${esc(c.name)}">`).join('')}</datalist></label>
  <label>المبلغ<input id="rc-a" inputmode="decimal" value="${esc(r.amount)}" placeholder="0.00"></label>
  <div class="two"><label>التاريخ<input id="rc-d" type="date" value="${r.date}"></label><label>الوقت<input id="rc-h" type="time" value="${r.time||''}"></label></div>
  <label>اتدفعت من<select id="rc-m">${opt(meths,r.method)}</select></label>
  <div class="seg">${[[0,'🛍️ من المكان'],[1,'🛵 دليفري']].map(([v,l])=>`<button type="button" class="${+!!r.deliv===v?'on':''}" onclick="rcGrab();RCF.deliv=${!!v};rcSheet()">${l}</button>`).join('')}</div>
  <button class="btn" onclick="rcSave()">حفظ</button>`);
}
/* لو اخترت مكان متسجل قبل كده، بيختار الحساب بتاعه لوحده */
function rcPick(v){const c=S.cats.find(x=>x.kind==='exp'&&normAr(x.name)===normAr(v));if(c&&c.acct&&M(c.acct)){const s=$('#rc-m');if(s)s.value=c.acct}}
function rcGrab(){if(!$('#rc-s'))return;RCF.store=$('#rc-s').value;RCF.amount=$('#rc-a').value;RCF.date=$('#rc-d').value;RCF.time=$('#rc-h').value;RCF.method=$('#rc-m').value}
function rcSave(){
  rcGrab();const n=RCF.store.trim(),a=parseNum(RCF.amount);
  if(!n)return toast('اكتب اسم المكان');
  if(!(a>0))return toast('اكتب المبلغ');
  if(!RCF.date)return toast('اختار التاريخ');
  if(isClosed(RCF.date))return toast('الشهر ده مقفول');
  if(!RCF.method)return toast('ضيف حساب الأول');
  const cat=S.cats.find(c=>c.kind==='exp'&&normAr(c.name)===normAr(n))||ensureCat(n,'exp');cat.active=true;
  const m=M(RCF.method),via=m&&m.type==='cash'?'cash':(cat.via||'');
  const t={id:uid(),type:'exp',amount:a,cat:cat.id,method:RCF.method,via,date:RCF.date,note:'🧾'+(RCF.deliv?' 🛵':''),files:[RCF.fid],created:Date.now()};
  S.txs.push(t);
  S.buys.push({id:uid(),date:RCF.date,time:RCF.time||'',txId:t.id,catId:cat.id,store:cat.name,items:[],total:a,method:RCF.method,via,card:'',deliv:RCF.deliv,fid:RCF.fid});
  RCF=null;save();closeSheet();render();toast('اتسجّل ✓');
}

/* ========== Contacts ========== */
const waNum=p=>/^01[0125]\d{8}$/.test(p)?'2'+p:'';
function findPhone(list,except){for(const c of S.contacts){if(c.id===except)continue;for(const p of c.phones||[])if(list.includes(p))return{c,p}}return null}
function mapURL(c){if(c.loc&&/^https?:/i.test(c.loc))return c.loc;const q=c.loc||c.address;return q?'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q):''}
const dupTxt=f=>`متسجل باسم "${f.c.name}"${f.c.catId&&C(f.c.catId)?` · ${C(f.c.catId).name}`:''}`;
function vContacts(){
  const list=S.contacts.filter(c=>ctab==='all'||c.kind===ctab).sort((a,b)=>a.name.localeCompare(b.name,'ar'));
  let h=`<div class="phead"><h3>📇 ${esc(L('contacts'))}</h3><button class="mini pri" onclick="ctForm(null,ctab!=='all'?{kind:ctab}:null)">+ إضافة</button></div>
  <div class="tabs ctabs">${[['all','الكل']].concat(Object.entries(CTK).map(([k,v])=>[k,v[0]+' '+v[1]])).map(([k,l])=>`<button class="${ctab===k?'on':''}" onclick="ctab='${k}';render()">${l}</button>`).join('')}</div>
  <input id="ct-q" placeholder="🔍 اسم أو رقم..." oninput="ctFilter(this.value)">`;
  if(!list.length)return h+`<div class="nempty"><div>📇</div><b>لا يوجد</b></div>`;
  return h+`<div class="list" style="margin-top:8px">${list.map(c=>{const k=CTK[c.kind]||CTK.other,p=(c.phones||[])[0]||'',wa=waNum(p),mu=mapURL(c);
    return `<div class="row ctr" data-q="${esc(normAr(c.name+' '+(c.spec||'')+' '+(c.address||''))+' '+(c.phones||[]).join(' '))}" onclick="ctView('${c.id}')"><span class="ic" style="background:var(--soft)">${k[0]}</span><div class="grow"><b>${esc(c.name)}</b><small>${[c.spec,p].filter(Boolean).map(esc).join(' · ')}</small></div>
    <div class="cta">${p?`<a class="cbt" href="tel:${p}" onclick="event.stopPropagation()">📞</a>`:''}${wa?`<a class="cbt wa" href="https://wa.me/${wa}" target="_blank" onclick="event.stopPropagation()">💬</a>`:''}${mu?`<a class="cbt" href="${esc(mu)}" target="_blank" onclick="event.stopPropagation()">📍</a>`:''}</div></div>`}).join('')}</div>`;
}
function ctFilter(q){q=normAr(latD(q));document.querySelectorAll('.ctr').forEach(r=>r.style.display=!q||r.dataset.q.includes(q)?'':'none')}
function ctView(id){
  const c=S.contacts.find(x=>x.id===id);if(!c)return;const k=CTK[c.kind]||CTK.other,mu=mapURL(c),nb=S.buys.filter(b=>c.catId&&b.catId===c.catId).length;
  sheet(`<div class="phead"><h2>${k[0]} ${esc(c.name)}</h2><button class="mini" onclick="ctForm('${id}')">✏️</button></div>
  ${c.spec?`<p class="muted">${esc(c.spec)}</p>`:''}
  ${(c.phones||[]).map(p=>{const wa=waNum(p);return `<div class="phl"><b dir="ltr" style="text-align:right">${p}</b><a class="cbt" href="tel:${p}">📞</a>${wa?`<a class="cbt wa" href="https://wa.me/${wa}" target="_blank">💬</a>`:''}</div>`}).join('')}
  ${c.address?`<div class="kv"><span>العنوان</span><b>${esc(c.address)}</b></div>`:''}
  ${c.catId&&C(c.catId)?`<div class="kv"><span>البند</span><b>${esc(C(c.catId).name)}</b></div>`:''}
  ${mu?`<a class="btn" href="${esc(mu)}" target="_blank">📍 الخريطة</a>`:''}
  ${nb?`<button class="btn ghost" onclick="bq='${esc(C(c.catId).name)}';closeSheet();go('buy')">🛒 المشتروات (${nb})</button>`:''}`);
}
function ctForm(id,pre){
  const c=id?S.contacts.find(x=>x.id===id):{name:'',kind:'shop',spec:'',phones:[''],address:'',loc:'',catId:''};
  CTF={...c,phones:[...(c.phones&&c.phones.length?c.phones:[''])],...(pre||{})};ctSheet();
}
function ctSheet(){
  const c=CTF;
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
async function ctDel(id){if(!await ask('حذف؟','',{danger:true,icon:'🗑',ok:'حذف'}))return;S.contacts=S.contacts.filter(x=>x.id!==id);save();closeSheet();render()}

/* ========== المشتروات ========== */
const payLabel=b=>b.card?`💳 •••• ${b.card}`:[M(b.method)?.name,viaTxt(b.via)].filter((x,i,a)=>x&&a.indexOf(x)===i).join(' · ');
const whenTxt=b=>fdate(b.date)+(b.time?' · '+fmtTime(b.time):'');
const buyRow=b=>`<div class="row" onclick="buySheet('${b.id}')"><span class="ic" style="background:var(--soft)">${b.deliv?'🛵':'🛍️'}</span><div class="grow"><b>${esc(b.store)}</b><small>${whenTxt(b)}${b.items.length?' · '+b.items.length+' صنف':''} · ${esc(payLabel(b))}</small></div><div class="amt exp">${num(b.total)}</div></div>`;
function vBuy(){
  setTimeout(bRender);
  return `<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>🛒 ${esc(L('buy'))}</h3><button class="mini pri" onclick="scanReceipt()">📷 Receipt Scan</button></div>
  <div class="inl"><input id="b-q" placeholder="🔍 صنف أو محل..." value="${esc(bq)}" oninput="bq=this.value;bRender()">${bq?`<button class="mini" onclick="bq='';render()">✕</button>`:''}</div><div id="b-l" style="margin-top:8px"></div>`;
}
function bRender(){
  const el=$('#b-l');if(!el)return;const q=normAr(bq),list=[...S.buys].sort((a,b)=>(b.date+(b.time||'')).localeCompare(a.date+(a.time||'')));
  if(q){
    const inv=list.filter(b=>normAr(b.store).includes(q)),hits=[];
    list.forEach(b=>b.items.forEach(it=>{if(normAr(it.n).includes(q))hits.push({b,it})}));
    let h='';
    if(inv.length)h+=`<div class="list">${inv.map(buyRow).join('')}</div>`;
    if(hits.length)h+=`<h3>الأصناف</h3>`+tbl(['الصنف','التاريخ','الكمية','السعر','الإجمالي'],hits.map(({b,it})=>`<tr class="clk" onclick="buySheet('${b.id}')"><td class="wrap"><b>${esc(it.n)}</b>${sm(esc(b.store))}</td><td>${dmy2(b.date)}</td><td>${num(it.q)}</td><td>${num(it.p)}</td><td><b>${num(it.t)}</b></td></tr>`));
    el.innerHTML=h||'<p class="empty">لا يوجد</p>';return;
  }
  if(!list.length){el.innerHTML='<div class="nempty"><div>🛒</div><b>لا يوجد مشتروات</b></div>';return}
  const mt=list.filter(b=>b.date.startsWith(NKM)).reduce((a,b)=>a+b.total,0);
  el.innerHTML=kpis([['مشتروات '+MONTHS[NM-1],fmt(mt),'exp'],['عدد الفواتير',list.length,'net']])+`<div class="list">${list.map(buyRow).join('')}</div>`;
}
function buySheet(id){
  const b=S.buys.find(x=>x.id===id);if(!b)return;const t=S.txs.find(x=>x.id===b.txId);
  sheet(`<div class="phead"><h2>🛒 ${esc(b.store)}</h2><button class="mini" onclick="buyEdit('${id}')">✏️</button></div>
  ${b.fid?`<div class="files">${fileThumb(b.fid,'view')}</div>`:''}
  <div class="kv"><span>التاريخ</span><b>${whenTxt(b)}</b></div>
  <div class="kv"><span>المبلغ</span><b class="neg">${fmt(b.total)}</b></div>
  <div class="kv"><span>اتدفعت بـ</span><b>${esc(payLabel(b))||'—'}</b></div>
  <div class="kv"><span>الاستلام</span><b>${b.deliv?'🛵 دليفري':'🛍️ من المكان'}</b></div>
  ${b.items.length?`<h3>الأصناف (${b.items.length})</h3>`+tbl(['الصنف','الكمية','السعر','الإجمالي'],b.items.map(i=>`<tr><td class="wrap"><b>${esc(i.n)}</b></td><td>${num(i.q)}</td><td>${num(i.p)}</td><td><b>${num(i.t)}</b></td></tr>`)):''}
  ${t?`<button class="btn ghost" onclick="editTx('${t.id}')">🧾 المصروف</button>`:''}
  <button class="btn ghost danger" onclick="buyDel('${id}')">🗑 حذف الفاتورة</button>`);
}
function buyEdit(id){const b=S.buys.find(x=>x.id===id);BF=JSON.parse(JSON.stringify(b));bfSheet()}
function bfSheet(){
  const b=BF;
  sheet(`<h2>🛒 تعديل الفاتورة</h2>
  ${b.fid?`<div class="files">${fileThumb(b.fid,'view')}</div>`:''}
  <div class="two"><label>المحل<input id="bf-s" value="${esc(b.store)}"></label><label>التاريخ<input id="bf-d" type="date" value="${b.date}"></label></div>
  <div class="two"><label>الوقت<input id="bf-h" type="time" value="${b.time||''}"></label><label>المبلغ<input id="bf-t" inputmode="decimal" value="${amtStr(b.total)}" oninput="bfSum()"></label></div>
  <div class="seg">${[[0,'🛍️ من المكان'],[1,'🛵 دليفري']].map(([v,l])=>`<button type="button" class="${+!!b.deliv===v?'on':''}" onclick="bfGrab();BF.deliv=${!!v};bfSheet()">${l}</button>`).join('')}</div>
  ${b.items.length?`<div class="bi hd"><span>الصنف</span><span>الكمية</span><span>السعر</span><span>الإجمالي</span><span></span></div>
  ${b.items.map((i,k)=>`<div class="bi" data-bi="${k}"><input data-f="n" value="${esc(i.n)}"><input data-f="q" inputmode="decimal" value="${i.q}" oninput="bfCalc(this)"><input data-f="p" inputmode="decimal" value="${amtStr(i.p)}" oninput="bfCalc(this)"><input data-f="t" inputmode="decimal" value="${amtStr(i.t)}" oninput="bfSum()"><button type="button" class="mini danger" onclick="bfGrab();BF.items.splice(${k},1);bfSheet()">✕</button></div>`).join('')}
  <div class="bsum" id="bf-sum"></div>`:''}
  <button type="button" class="mini" onclick="bfGrab();BF.items.push({n:'',q:1,p:0,t:0});bfSheet()">+ صنف</button>
  <button class="btn" onclick="bfSave()">حفظ</button>`);
  bfSum();
}
function bfCalc(el){const r=el.closest('.bi'),q=parseNum(r.querySelector('[data-f=q]').value),p=parseNum(r.querySelector('[data-f=p]').value);if(q>0&&p>=0)r.querySelector('[data-f=t]').value=amtStr(r2(q*p));bfSum()}
function bfSum(){
  const e=$('#bf-sum');if(!e)return;
  const s=r2([...document.querySelectorAll('#sheet .bi[data-bi]')].reduce((a,r)=>a+(parseNum(r.querySelector('[data-f=t]').value)||0),0)),tot=parseNum($('#bf-t').value)||0;
  e.className='bsum '+(Math.abs(s-tot)<=.05?'ok':'bad');e.innerHTML=`<span>مجموع الأصناف</span><b>${num(s)} / ${num(tot)}</b>`;
}
function bfGrab(){
  if(!$('#bf-s'))return;BF.store=$('#bf-s').value;BF.date=$('#bf-d').value;BF.time=$('#bf-h').value;BF.total=parseNum($('#bf-t').value)||0;
  BF.items=[...document.querySelectorAll('#sheet .bi[data-bi]')].map(r=>({n:r.querySelector('[data-f=n]').value.trim(),q:parseNum(r.querySelector('[data-f=q]').value)||1,p:parseNum(r.querySelector('[data-f=p]').value)||0,t:parseNum(r.querySelector('[data-f=t]').value)||0}));
}
function bfSave(){
  bfGrab();if(!BF.store.trim())return toast('اكتب اسم المحل');if(!BF.date)return toast('اختار التاريخ');
  if(!(BF.total>0))return toast('اكتب المبلغ');
  BF.items=BF.items.filter(i=>i.n);
  const b=S.buys.find(x=>x.id===BF.id);if(!b)return;Object.assign(b,BF,{store:BF.store.trim()});
  const t=S.txs.find(x=>x.id===b.txId);
  if(t&&!isClosed(t.date)&&!isClosed(b.date)){t.amount=b.total;t.date=b.date}
  save();render();buySheet(b.id);toast('اتحفظ ✓');
}
async function buyDel(id){if(!await ask('حذف الفاتورة؟','المصروف هيفضل متسجل',{danger:true,icon:'🗑',ok:'حذف'}))return;S.buys=S.buys.filter(x=>x.id!==id);save();closeSheet();render()}

/* ========== الكروت البنكية ========== */
/* صور الكارت بتتحفظ كمان في المرفقات، في ملف باسم الكارت */
const cardFiles=c=>{const d=c&&c.docId&&doc(c.docId);return d?[...d.files]:[]};
function scanCard(){snapPhoto({title:'صوّر الكارت',hint:'💳 حط الكارت جوه الإطار وثبّت',card:true,name:'card'},fid=>{cardForm(null,{files:[fid]});toast('اكتب بيانات الكارت')})}
function vWallet(){
  const h=`<div class="phead"><button class="mini" onclick="go('more')">→</button><h3>💳 ${esc(L('wallet'))}</h3></div>`+tabsHTML([['cards','💳 الكروت البنكية'],['ren','🪪 كروت شخصية']],wtab,'wtab');
  return h+(wtab==='ren'?wRen():wCards());
}
function wCards(){
  const h=`<div class="etbar"><button class="mini pri" onclick="scanCard()">📷 صوّر كارت</button><button class="mini" onclick="cardForm()">+ إضافة</button></div>`;
  if(!S.cards.length)return h+`<div class="nempty"><div>💳</div><b>لا يوجد كروت</b></div>`;
  return h+S.cards.map(c=>{const n=cardFiles(c).length;return `<div class="ccard" style="--cc:${c.color||'#1e3a8a'}" onclick="cardForm('${c.id}')"><div class="cc-t"><b>${esc(c.name)}</b><span>${c.kind==='credit'?'Credit':'Debit'}${n?' · 📷'+n:''}</span></div><div class="cc-n" dir="ltr">•••• •••• •••• ${esc(c.last4)}</div><div class="cc-b"><span>${esc(M(c.acct)?.name||'—')}</span><b dir="ltr">${NETS[c.net]||''}</b></div></div>`}).join('');
}
function cardForm(id,pre){
  const c=id?S.cards.find(x=>x.id===id):{name:'',kind:'debit',net:'visa',last4:'',acct:'',color:'#1e3a8a'};
  CRF={...c,files:cardFiles(c),...(pre||{})};crSheet();
}
function crSheet(){
  const c=CRF,meths=S.methods.filter(m=>m.active||m.id===c.acct);
  sheet(`<h2>💳 ${c.id?'تعديل كارت':'كارت جديد'}</h2>
  ${photosBox(c.files,'crRm')}
  <div class="two"><button type="button" class="btn ghost" onclick="crSnap()">📷 ${c.files.length?'صورة كمان':'صوّر الكارت'}</button>${c.files.length?`<button type="button" class="btn ghost" onclick="shareFiles(CRF.files)">📤 إرسال</button>`:''}</div>
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
  let d=c.docId&&doc(c.docId);
  if(CRF.files.length&&!d){d={id:uid(),files:[]};S.docs.push(d);c.docId=d.id}
  if(d){d.name='💳 '+name+' •••• '+l4;d.note='كارت بنكي';d.files=[...CRF.files];d.upd=Date.now()}
  save();closeSheet();render();toast('اتحفظ ✓');
}
async function crDel(id){
  if(!await ask('حذف الكارت؟','صوره هتتمسح كمان',{danger:true,icon:'🗑',ok:'حذف'}))return;
  const c=S.cards.find(x=>x.id===id);if(c&&c.docId)S.docs=S.docs.filter(d=>d.id!==c.docId);
  S.cards=S.cards.filter(x=>x.id!==id);save();closeSheet();render();
}

/* ========== الكروت الشخصية ========== */
function scanId(){snapPhoto({title:'صوّر الكارت',hint:'🪪 حط الكارت جوه الإطار وثبّت',card:true,name:'card'},fid=>{renForm(null,{files:[fid]});toast('اختار النوع واكتب تاريخ الانتهاء')})}
function wRen(){
  const list=[...S.renew].sort((a,b)=>(a.exp||'9').localeCompare(b.exp||'9')),td=today();
  const h=`<div class="box" style="margin-bottom:10px"><label>التنبيه قبل الانتهاء بـ (يوم)<div class="inl"><input id="rl-all" type="text" inputmode="numeric" value="${leadR()}"><button class="mini pri" onclick="renLeadAll()">طبّق على الكل</button></div></label></div>
  <div class="etbar"><button class="mini pri" onclick="scanId()">📷 صوّر كارت</button><button class="mini" onclick="renForm()">+ إضافة</button></div>`;
  if(!list.length)return h+`<div class="nempty"><div>🪪</div><b>لا يوجد</b></div>`;
  return h+`<div class="list">${list.map(r=>{
    const t=REN[r.type]||REN.other,left=r.exp?daysBetween(r.exp,td):null,ld=+r.lead||leadR(),f0=(r.files||[])[0],isImg=f0&&((S.fmeta[f0]||{}).type||'').startsWith('image/');
    const bd=left==null?'<span class="badge rej">—</span>':left<0?`<span class="badge late">منتهي</span>`:left<=ld?`<span class="badge wait">باقي ${left} يوم</span>`:`<span class="badge done">ساري</span>`;
    return `<div class="row" onclick="renForm('${r.id}')">${isImg?`<span class="ic" style="overflow:hidden;border-radius:8px"><img data-fid="${f0}" style="width:100%;height:100%;object-fit:cover" alt=""></span>`:`<span class="ic" style="background:var(--soft)">${t[0]}</span>`}<div class="grow"><b>${esc(r.name)}</b><small>${r.exp?'ينتهي '+fdate(r.exp):''}${r.num?' · '+esc(r.num):''}</small></div>${bd}</div>`}).join('')}</div>`;
}
function renLeadAll(){const n=Math.max(1,parseNum($('#rl-all').value)||30);S.settings.leadR=n;S.renew.forEach(r=>r.lead=n);save();render();toast('تم ✓')}
function renForm(id,pre){
  const r=id?S.renew.find(x=>x.id===id):{name:REN.id[1],type:'id',num:'',exp:'',lead:leadR(),note:'',files:[]};
  RNF={...r,files:[...(r.files||[])],...(pre||{})};renSheet();
}
function renSheet(){
  const r=RNF;
  sheet(`<h2>🪪 ${r.id?'كارت شخصي':'إضافة كارت'}</h2>
  ${photosBox(r.files,'rnRm')}
  <div class="two"><button type="button" class="btn ghost" onclick="rnSnap()">📷 ${r.files.length?'صورة كمان':'صوّر الكارت'}</button>${r.files.length?`<button type="button" class="btn ghost" onclick="shareFiles(RNF.files)">📤 إرسال</button>`:''}</div>
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
function rnGrab(){if(!$('#rn-n'))return;RNF.type=$('#rn-t').value;RNF.name=$('#rn-n').value;RNF.exp=$('#rn-e').value;RNF.lead=$('#rn-l').value;RNF.num=$('#rn-u').value;RNF.note=$('#rn-o').value}
function renType(v){const old=RNF.name;rnGrab();if(!old.trim()||Object.values(REN).some(x=>x[1]===old))RNF.name=REN[v][1];RNF.type=v;renSheet()}
function renSave(){
  rnGrab();const name=RNF.name.trim();if(!name)return toast('اكتب الاسم');if(!RNF.exp)return toast('اختار تاريخ الانتهاء');
  let r=RNF.id?S.renew.find(x=>x.id===RNF.id):null;if(!r){r={id:uid()};S.renew.push(r)}
  Object.assign(r,{name,type:RNF.type,exp:RNF.exp,lead:Math.max(1,parseNum(RNF.lead)||leadR()),num:(RNF.num||'').trim(),note:(RNF.note||'').trim(),files:RNF.files});
  save();closeSheet();render();toast('اتحفظ ✓');
}
function renRenew(){rnGrab();RNF.exp=addMonths(RNF.exp||today(),12);renSheet();toast('+ سنة')}
async function renDel(id){if(!await ask('حذف؟','',{danger:true,icon:'🗑',ok:'حذف'}))return;S.renew=S.renew.filter(x=>x.id!==id);save();closeSheet();render()}

/* ========== المرفقات ========== */
const doc=id=>S.docs.find(x=>x.id===id);
function vDocs(){
  let h=`<div class="phead"><h3>📎 ${esc(L('docs'))}</h3></div>`+tabsHTML([['my','مستنداتي'],['tx','مرفقات العمليات']],dtab,'dtab');
  if(dtab==='my'){
    h+=`<div class="etbar"><button class="mini pri" onclick="docForm()">+ إضافة</button></div>`;
    h+=S.docs.length?`<div class="list">${[...S.docs].sort((a,b)=>(b.upd||0)-(a.upd||0)).map(d=>`<div class="row" onclick="docSheet('${d.id}')"><span class="ic" style="background:var(--soft)">📁</span><div class="grow"><b>${esc(d.name)}</b><small>${d.files.length} ملف${d.upd?' · '+new Date(d.upd).toLocaleDateString('ar-EG'):''}${d.note?' · '+esc(d.note):''}</small></div></div>`).join('')}</div>`:'<p class="empty">لا يوجد</p>';
  }else h+=opsTable(S.txs.filter(t=>(t.files||[]).length));
  return h;
}
function docForm(id){
  const d=id?doc(id):{name:'',note:''};
  sheet(`<h2>${id?'تعديل':'إضافة'}</h2><label>الاسم<input id="d1" value="${esc(d.name)}"></label><label>ملاحظات<input id="d2" value="${esc(d.note||'')}"></label><button class="btn" onclick="docSave('${id||''}')">حفظ</button>`);
}
function docSave(id){
  const name=$('#d1').value.trim();if(!name)return toast('اكتب الاسم');
  let d=id?doc(id):null;if(!d){d={id:uid(),files:[]};S.docs.push(d)}
  d.name=name;d.note=$('#d2').value.trim();d.upd=Date.now();save();render();docSheet(d.id);
}
function docSheet(id){
  curDoc=id;const d=doc(id);if(!d)return closeSheet();
  sheet(`<div class="phead"><h2>📁 ${esc(d.name)}</h2><button class="mini" onclick="docForm('${id}')">✏️</button></div>${d.note?`<p class="muted">${esc(d.note)}</p>`:''}
  ${filesBox(d.files,'doc')}
  ${d.files.length?`<button class="btn ghost" onclick="shareFiles(doc('${id}').files)">📤 مشاركة الكل</button>`:''}
  <button class="btn ghost danger" onclick="docDel('${id}')">🗑 حذف</button>`);
}
async function docDel(id){if(!await ask('حذف؟','',{danger:true,icon:'🗑',ok:'حذف'}))return;S.docs=S.docs.filter(x=>x.id!==id);S.cards.forEach(c=>{if(c.docId===id)c.docId=''});save();closeSheet();render()}

/* ========== تشغيل ========== */
S.contacts.forEach(c=>{if(c.note)c.note=''});
applyTheme();applyFont();applyName();autoPostFixed();save();render();gcFiles();
if(LK.pin)showLock();else inAppAlerts();
if(!DEMO&&GD.linked)loadJS('https://accounts.google.com/gsi/client').catch(()=>{});
if(navigator.storage&&navigator.storage.persist)navigator.storage.persist().catch(()=>{});
if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').then(()=>setTimeout(pushAlerts,1500)).catch(()=>{}));
let hiddenAt=0;
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='hidden'){hiddenAt=Date.now();if(SHOWAMT){SHOWAMT=false;clearTimeout(amtT);if(view==='home')render()}return}
  if(LK.pin&&hiddenAt&&(Date.now()-hiddenAt)/60000>=(LK.after??1))showLock();
  if(autoPostFixed())render();
  updateBell();pushAlerts();inAppAlerts();
});
/* نهاية more.js */