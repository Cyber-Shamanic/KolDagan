/* כל דגן 0.2.0 — independent, dependency-free enhancement layer */
(() => {
  const STORAGE = 'kol-dagan-v2';
  const safeRead = () => { try { return JSON.parse(localStorage.getItem(STORAGE) || '{}'); } catch { return {}; } };
  const saved = safeRead();
  const favorites = new Set(Array.isArray(saved.favorites) ? saved.favorites : []);
  let favoriteOnly = false;
  const persist = () => { try { localStorage.setItem(STORAGE, JSON.stringify({favorites:[...favorites],cart:[...state.cart],mode:state.mode})); } catch {} };
  const toast = message => { const el = document.getElementById('siteToast'); el.textContent = message; el.classList.add('show'); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove('show'), 2800); };

  const originalRenderProducts = renderProducts;
  renderProducts = function () {
    originalRenderProducts();
    document.querySelectorAll('.product').forEach(card => {
      const id = card.querySelector('.add')?.dataset.id;
      if (!id) return;
      card.dataset.productId = id;
      const heading = card.querySelector('h3');
      const heart = document.createElement('button');
      heart.type = 'button'; heart.className = 'favorite-button';
      heart.dataset.favoriteId = id;
      heart.setAttribute('aria-label', favorites.has(id) ? 'הסר ממועדפים' : 'הוסף למועדפים');
      heart.setAttribute('aria-pressed', String(favorites.has(id)));
      heart.textContent = favorites.has(id) ? '♥' : '♡';
      heading.appendChild(heart);
    });
    arrangeProducts();
  };
  function arrangeProducts() {
    const grid = document.getElementById('productGrid');
    const cards = [...grid.children];
    const sort = document.getElementById('sortSelect').value;
    cards.sort((a,b) => {
      const pa=catalog.find(p=>p.id===a.dataset.productId), pb=catalog.find(p=>p.id===b.dataset.productId);
      if (sort==='priceAsc') return price(pa)-price(pb);
      if (sort==='priceDesc') return price(pb)-price(pa);
      if (sort==='name') return pa.name.localeCompare(pb.name,'he');
      return catalog.indexOf(pa)-catalog.indexOf(pb);
    }).forEach(card => { card.hidden = favoriteOnly && !favorites.has(card.dataset.productId); grid.appendChild(card); });
    const visible = cards.filter(card => !card.hidden).length;
    document.getElementById('resultCount').textContent = `${visible} מוצרים להצגה מתוך ${catalog.length}`;
    document.getElementById('emptyState').hidden = visible>0;
  }
  document.getElementById('sortSelect').addEventListener('change', arrangeProducts);
  document.getElementById('favoriteFilter').addEventListener('click', event => {
    favoriteOnly=!favoriteOnly;
    event.currentTarget.setAttribute('aria-pressed', String(favoriteOnly));
    event.currentTarget.textContent=favoriteOnly?'♥ כל המועדפים':'♡ רק מועדפים';
    arrangeProducts();
  });
  document.addEventListener('click', event => {
    const heart=event.target.closest('[data-favorite-id]');
    if (heart) {
      const id=heart.dataset.favoriteId;
      if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
      heart.textContent=favorites.has(id)?'♥':'♡';
      heart.setAttribute('aria-pressed', String(favorites.has(id)));
      heart.setAttribute('aria-label',favorites.has(id)?'הסר ממועדפים':'הוסף למועדפים');
      persist(); arrangeProducts();
      toast(favorites.has(id)?'נשמר במועדפים ♥':'הוסר מהמועדפים');
    }
    const code=event.target.closest('[data-code]')?.dataset.code;
    if(code){navigator.clipboard?.writeText(code).then(()=>toast('הקוד הועתק: '+code)).catch(()=>toast('קוד לדוגמה: '+code));}
    if(event.target.closest('.add,.qty button,#clearCart,.mode-switch button,#switchWholesale')) setTimeout(persist,0);
  });
  if (Array.isArray(saved.cart)) saved.cart.forEach(([id,qty]) => {if(catalog.some(p=>p.id===id)&&Number.isInteger(qty)&&qty>0&&qty<10000) state.cart.set(id,qty);});
  if (saved.mode==='wholesale') setMode('wholesale');
  updateBadge();renderProducts();
  window.addEventListener('pagehide',persist);

  const versionDialog=document.getElementById('versionDialog');
  document.getElementById('versionOpen').addEventListener('click',()=>versionDialog.showModal());
  document.getElementById('versionClose').addEventListener('click',()=>versionDialog.close());
  versionDialog.addEventListener('click',event=>{if(event.target===versionDialog)versionDialog.close();});
  const fallback='## 0.2.0 — 29.10.2026\n- 🎁 קופונים ומבצעים לדוגמה\n- ♥ מועדפים ושמירת סל במכשיר\n- ↕ מיון קטלוג, שאלות נפוצות ושיפור נגישות\n\n## 0.1.0 — 28.10.2026\n- 📚 68 מוצרים ו־22 תמונות קטלוג מקוריות\n- 🎨 שילוב העיצובים 1+8+4';
  function renderMarkdown(markdown){
    const esc=x=>x.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    return markdown.split('\n').map(line=>{let t=esc(line.trim());if(t.startsWith('## '))return `<h3>${t.slice(3)}</h3>`;if(t.startsWith('- '))return `<p class="log-item">${t.slice(2)}</p>`;return t?`<p>${t}</p>`:'';}).join('');
  }
  fetch('./CHANGELOG.md').then(r=>r.ok?r.text():Promise.reject()).then(md=>document.getElementById('changelogContent').innerHTML=renderMarkdown(md)).catch(()=>document.getElementById('changelogContent').innerHTML=renderMarkdown(fallback));
})();
