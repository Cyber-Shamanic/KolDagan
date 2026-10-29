/* DaganForge 0.3.0: static roadmap and developer credits, no dependencies */
(() => {
  const builder=document.getElementById('builderDialog');
  document.getElementById('builderOpen').addEventListener('click',()=>builder.showModal());
  document.getElementById('builderClose').addEventListener('click',()=>builder.close());
  builder.addEventListener('click',event=>{if(event.target===builder)builder.close()});
  const root=document.getElementById('roadmapList');
  const STORAGE='kol-dagan-roadmap-selected';
  let selected=[];
  try{selected=JSON.parse(localStorage.getItem(STORAGE)||'[]')}catch{}
  let items=[],filter='all';
  const fallback='# קטלוג ומוצרים\n- [x] תצוגת קטלוג ומוצרים\n- [ ] אישור פרטי המוצרים\n# מסחר ושירות\n- [x] עיצוב מותאם לנייד\n- [ ] הזמנות ותשלום מאושרים';
  const escape=s=>s.replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&quot;'}[ch]));
  function parse(md){
    let section='שדרוגים';const tasks=[];
    md.split(/\r?\n/).forEach(line=>{
      if(/^##?\s+/.test(line)){section=line.replace(/^#+\s+/,'');return;}
      const match=line.match(/^\s*-\s*\[([ xX])\]\s+(.+)/);
      if(match)tasks.push({id:tasks.length,section,text:match[2],done:match[1].toLowerCase()==='x'});
    });return tasks;
  }
  function render(){
    const done=items.filter(i=>i.done).length;
    document.getElementById('roadmapDone').textContent=done;
    document.getElementById('roadmapNext').textContent=items.length-done;
    document.getElementById('roadmapProgress').textContent=(items.length?Math.round(done*100/items.length):0)+'%';
    document.getElementById('roadmapProgressBar').style.width=(items.length?done*100/items.length:0)+'%';
    const visible=items.filter(i=>filter==='all'||(filter==='done'?i.done:!i.done));
    const sections=[...new Set(visible.map(i=>i.section))];
    root.innerHTML=sections.map(section=>`<article class="roadmap-group"><h3>${escape(section)}</h3><div>${visible.filter(i=>i.section===section).map(i=>`<label class="roadmap-task ${i.done?'done':''}"><input type="checkbox" ${i.done||selected.includes(i.text)?'checked':''} ${i.done?'disabled':''} data-roadmap-id="${i.id}"><span>${escape(i.text)}</span><small>${i.done?'בוצע':'לבחירה'}</small></label>`).join('')}</div></article>`).join('');
  }
  root.addEventListener('change',e=>{
    const checkbox=e.target.closest('[data-roadmap-id]');if(!checkbox)return;
    const item=items.find(i=>i.id===Number(checkbox.dataset.roadmapId));if(!item||item.done)return;
    if(checkbox.checked)selected.push(item.text);else selected=selected.filter(x=>x!==item.text);
    try{localStorage.setItem(STORAGE,JSON.stringify([...new Set(selected)]))}catch{}
  });
  document.querySelectorAll('[data-roadmap-filter]').forEach(button=>button.addEventListener('click',()=>{
    filter=button.dataset.roadmapFilter;
    document.querySelectorAll('[data-roadmap-filter]').forEach(b=>b.classList.toggle('active',b===button));
    render();
  }));
  document.getElementById('roadmapCopy').addEventListener('click',()=>{
    const text=items.filter(i=>!i.done).map(i=>`☐ [${i.section}] ${i.text}`).join('\n');
    navigator.clipboard?.writeText(text).then(()=>{document.getElementById('roadmapCopy').textContent='✓ הועתק!';setTimeout(()=>document.getElementById('roadmapCopy').textContent='העתקת משימות להמשך',2200)});
  });
  fetch('./TODO.md').then(r=>r.ok?r.text():Promise.reject()).then(md=>{items=parse(md);render()}).catch(()=>{items=parse(fallback);render()});
})();
