// Catalog based on the client's photographed printed catalog. Prices are demo placeholders.
const sources=[
 ['90253','01-90253.jpg','המיתוג והכריכה'],['90252','02-90252.jpg','לחם מרקן'],['90251','03-90251.jpg','מארזי מאפים'],
 ['90250','04-90250.jpg','מאפים מתוקים'],['90249','05-90249.jpg','מאפים מלוחים'],['90248','06-90248.jpg','חלת לב'],
 ['90247','07-90247.jpg','חלת כלה'],['90246','08-90246.jpg','חלות'],['90245','09-90245.jpg','חלת פרח'],
 ['90244','10-90244.jpg','פוקצ׳ה'],['90243','01-90243.jpg','בסיסי פיצה'],['90242','02-90242.jpg','לחמי טוסט'],
 ['90241','03-90241.jpg','מחמצות'],['90240','04-90240.jpg','באגטים'],['90239','05-90239.jpg','פרעצל'],
 ['90238','06-90238.jpg','בייגלים'],['90236','07-90236.jpg','ג׳בטה'],['90235','08-90235.jpg','לחמניות סנדוויץ׳'],
 ['90234','09-90234.jpg','לחמניות המבורגר'],['90233','10-90233.jpg','לחמניות מתוקות'],
 ['90232','01-90232.jpg','לוסי וקשר'],['90229','02-90229.jpg','לחמניות']
];
const categories=[
 ['all','הכול','✦'],['challah','חלות מיוחדות','🍞'],['bread','לחמים ומחמצות','🥖'],['rolls','לחמניות','🥯'],
 ['baguette','באגטים וג׳בטות','🥖'],['bagel','בייגל ופרעצל','🥨'],['sweet','מאפים מתוקים','🥐'],
 ['savory','מאפים מלוחים','🥟'],['pizza','פיצה ופוקצ׳ה','🍕'],['toast','טוסט וכוסמין','🍞'],['boxes','מארזים','📦']
];
const catalog=[];
function add(cat,source,base,rows){rows.forEach((r,i)=>{const [name,detail,price,variant='']=r;catalog.push({id:`KD-${String(catalog.length+1).padStart(3,'0')}`,cat,source,name,detail,price,variant,emoji:categories.find(c=>c[0]===cat)?.[2]||'🥖'})})}
add('bread','90252',0,[['לחם מרקן','לחם מיוחד, קטן או גדול — יש לאמת את איות השם',34,'קטן/גדול']]);
add('boxes','90251',0,[['מארז לחמים ולחמניות','מארז לדוגמה ממבחר המפעל',59,'מארז']]);
add('sweet','90250',0,[['קרואסון חמאה (פרווה)','קרואסון מעוצב, לפי הקטלוג',12],['קרואסון גדול','מאפה בצק עלים',15],['מיני מאפים ממולאים','מגוון צורות ומילויים לבירור',29,'מארז']]);
add('savory','90249',0,[['בורקס מעורב','מבחר צורות ומילויים',28,'מארז'],['מאפה תפוח אדמה','מאפה מגולגל או ממולא',10]]);
add('challah','90248',0,[['חלת לב','חלה חגיגית בעיצוב לב',65,'בהזמנה'],['חלת לב מעוצבת','גרסה מעוטרת לבחירה',84,'בהזמנה']]);
add('challah','90247',0,[['חלת כלה 60 ס״מ','חלה קלועה ארוכה לאירוע',89,'60 ס״מ'],['חלת כלה 80 ס״מ','חלה קלועה ארוכה לאירוע',119,'80 ס״מ']]);
add('challah','90246',0,[['חלת הבית','חלה קלועה זהובה',23],['חלת ביס','חלה קטנה אישית',7],['חלה רגילה','חלה קלועה מסורתית',20],['חלה מתוקה','חלה קלועה ורכה',25]]);
add('challah','90245',0,[['חלת פרח 7 כדורים','חלה עגולה מעוצבת',39,'7 כדורים'],['חלת פרח 10 כדורים','חלה עגולה מעוצבת',49,'10 כדורים'],['חלת פרח 12 כדורים','חלה עגולה מעוצבת',59,'12 כדורים'],['חלת פרח 40 כדורים','חלה גדולה לאירוע',149,'40 כדורים']]);
add('pizza','90244',0,[['פוקצ׳ה','פוקצ׳ה מאורכת בציפוי קל',18]]);
add('pizza','90243',0,[['בסיס לפיצה 19 ס״מ','בצק לפיצה, מחורר מראש',9,'19 ס״מ'],['בסיס לפיצה 24 ס״מ','בצק לפיצה, מחורר מראש',12,'24 ס״מ'],['בסיס לפיצה 28 ס״מ','בצק לפיצה, מחורר מראש',15,'28 ס״מ'],['בסיס לפיצה 35 ס״מ','בצק לפיצה, מחורר מראש',20,'35 ס״מ']]);
add('toast','90242',0,[['טוסט לבן 1200 גרם','כיכר מלבנית פרוסה',34,'1.2 ק״ג'],['טוסט לבן 1800 גרם','כיכר מלבנית פרוסה',44,'1.8 ק״ג'],['טוסט מלא 1200 גרם','לחם מלא פרוס',38,'1.2 ק״ג'],['טוסט מלא 1800 גרם','לחם מלא פרוס',50,'1.8 ק״ג'],['לחם כוסמין 600 גרם','לחם כוסמין פרוס',29,'600 גרם']]);
add('bread','90241',0,[['לחם מחמצת','כיכר אפויה עם קרום פריך',32],['מחמצת דגנים','לחם מחמצת עם דגנים',35],['מחמצת בצל','לחם מחמצת בטעם בצל',36],['מחמצת אגוזים','לחם מחמצת עם אגוזים',39],['מחמצת זיתים','לחם מחמצת עם זיתים',37]]);
add('baguette','90240',0,[['חצי באגט','באגט חצי בגודל נוח',8],['חצי באגט כפרי','באגט בגוון כפרי',10],['קרטון חצי באגט חצי אפוי','מארז סיטונאי כמופיע בקטלוג',480,'140 יחידות']]);
add('bagel','90239',0,[['מקל פרעצל','מקל ארוך וקלוע',9],['פרעצל קלאסי','צורת קשר, מאפה זהוב',12],['ביס פרעצל','מאפה אישי קטן',7],['נקניק פרעצל','מאפה פרעצל למילוי',11]]);
add('bagel','90238',0,[['בייגל ירושלמי','בייגל אובלי עם שומשום',10],['בייגל טוסט','בייגל עגול מוזהב',12],['בייגל אמריקאי','טבעת רכה',11],['פיתה טוסט','מאפה פיתה עגול',10]]);
add('baguette','90236',0,[['ג׳בטה','לחמנייה מלבנית',10],['ג׳בטה כפרית','ג׳בטה עם דגנים',12],['ג׳בטה תבנית','ג׳בטה מלבנית ומוארכת',12],['חצי ג׳בטה','חצי גודל',7],['ביס ג׳בטה','יחידת מיני',5]]);
add('rolls','90235',0,[['לחמניית סנדוויץ׳ 30 גרם','לחמנייה קטנה',5,'30 גרם'],['לחמניית סנדוויץ׳ 50 גרם','לחמנייה אישית',6,'50 גרם'],['לחמנייה חלקה 50 גרם','ללא ציפוי',6,'50 גרם']]);
add('rolls','90234',0,[['לחמניית המבורגר 70 גרם','לחמנייה עם שומשום',6,'70 גרם'],['לחמניית המבורגר 100 גרם','לחמנייה עם שומשום',8,'100 גרם'],['לחמניית המבורגר 130 גרם','לחמנייה גדולה עם שומשום',10,'130 גרם']]);
add('challah','90233',0,[['שמינייה מתוקה','מאפה קלוע בצורת שמינייה',8],['שמינייה תבנית','שמינייה בתבנית',9],['חלות תבנית','חלה קלועה בתבנית',23],['חלה מזונות','מאפה מתוק, לברר פרטי מוצר',25]]);
add('rolls','90232',0,[['לוסי','לחמנייה מאורכת עם שומשום',9],['לוסי כפרי','לחמנייה מאורכת כפרית',11],['שמינייה','לחמנייה קלועה',7],['קשר כפרי','לחמנייה קטנה בצורת קשר',7]]);
add('rolls','90229',0,[['קבניק שומשום','לחמנייה מאורכת עם שומשום',9],['קבניק','לחמנייה מאורכת חלקה',8],['קבניק כפרי','לחמנייה מאורכת עם דגנים',10],['קשר','לחמנייה קלועה עגולה',7]]);
// Image sheets consist of sixteen individually framed studio-image tiles.
// Mapping preserves the distinct product family and its visible shape.
const imageTiles={
 '90252':[1,[1]],'90251':[3,[15]],'90250':[3,[1,0,2]],
 '90249':[3,[7,4]],'90248':[0,[4,5]],'90247':[0,[6,7]],
 '90246':[0,[0,1,3,2]],'90245':[0,[8,9,10,11]],'90244':[3,[8]],
 '90243':[3,[9,10,11,12]],'90242':[1,[2,2,3,3,4]],
 '90241':[0,[12,13,14,15,15]],'90240':[1,[5,6,7]],
 '90239':[2,[1,0,2,3]],'90238':[1,[13,15,14,15]],
 '90236':[1,[8,9,10,11,12]],'90235':[2,[4,6,5]],
 '90234':[2,[7,8,9]],'90233':[2,[15,15,15,15]],
 '90232':[2,[13,11,15,12]],'90229':[2,[10,5,11,12]]
};
function productPhoto(p){const [sheet,tiles]=imageTiles[p.source]||[0,[0]];const peers=catalog.filter(x=>x.source===p.source);const i=peers.findIndex(x=>x.id===p.id);const tile=tiles[Math.min(i,tiles.length-1)];const col=tile%4,row=Math.floor(tile/4);return {sheet,position:(col*100/3)+'% '+(row*100/3)+'%'}}
const state={category:'all',search:'',mode:'retail',cart:new Map()};
const $=id=>document.getElementById(id);
const findSource=id=>sources.find(s=>s[0]===id);
const sourceUrl=id=>'./catalog/'+findSource(id)[1];
const categoryName=id=>categories.find(c=>c[0]===id)?.[1]||id;
const price=p=>state.mode==='wholesale'?Math.max(1,Math.round(p.price*.78)):p.price;
const shekel=n=>'₪'+n.toLocaleString('he-IL');
function setCategory(id){state.category=id;$('categorySelect').value=id;renderFilters();renderProducts();document.querySelector('#catalog').scrollIntoView({behavior:'smooth',block:'start'})}
function renderCollections(){const entries=[['challah','חלות חגיגיות','לחגים, אירועים ושבת'],['bread','לחמים מיוחדים','מחמצות ודגנים'],['rolls','לחמניות','לסנדוויץ׳ והמבורגר'],['baguette','באגטים וג׳בטות','בגדלים שונים'],['sweet','מאפים מתוקים','קרואסונים ומאפים']];$('collectionGrid').innerHTML=entries.map(([id,title,sub])=>`<button class="collection" data-cat="${id}"><span class="emoji">${categories.find(c=>c[0]===id)[2]}</span><span><b>${title}</b><small>${sub}</small></span></button>`).join('');document.querySelectorAll('.collection').forEach(el=>el.addEventListener('click',()=>setCategory(el.dataset.cat)))}
function renderFilters(){$('categoryPills').innerHTML=categories.map(([id,name])=>`<button class="pill ${state.category===id?'active':''}" data-cat="${id}">${name}</button>`).join('');document.querySelectorAll('.pill').forEach(el=>el.addEventListener('click',()=>setCategory(el.dataset.cat)))}
function renderProducts(){let q=state.search.trim().toLocaleLowerCase('he');let filtered=catalog.filter(p=>(state.category==='all'||p.cat===state.category)&&(!q||[p.name,p.detail,p.variant,categoryName(p.cat)].join(' ').toLocaleLowerCase('he').includes(q)));$('resultCount').textContent=filtered.length+' מוצרים להצגה מתוך '+catalog.length;$('emptyState').hidden=filtered.length>0;$('productGrid').innerHTML=filtered.map(p=>{const photo=productPhoto(p);return `<article class="product"><button class="product-photo" data-source="${p.source}" aria-label="צפה בדף המקור של ${p.name}"><span class="product-shot" style="background-image:url('./catalog-products-${photo.sheet}.png');background-position:${photo.position}"></span><span class="photo-badge">${categoryName(p.cat)}</span><span class="photo-hint">דף מקור ↗</span></button><div class="product-details"><h3>${p.name}</h3><p>${p.detail}</p><div class="product-meta"><span>${p.id}</span>${p.variant?`<span>${p.variant}</span>`:''}</div><div class="product-bottom"><div class="price"><b>${shekel(price(p))}</b><small>${state.mode==='wholesale'?'מחיר עסקי לדוגמה':'מחיר לדוגמה'}</small></div><button class="add" data-id="${p.id}">הוספה +</button></div></div></article>`}).join('');document.querySelectorAll('.product-photo').forEach(el=>el.addEventListener('click',()=>openLightbox(el.dataset.source)));document.querySelectorAll('.add').forEach(el=>el.addEventListener('click',()=>addToCart(el.dataset.id)))}
function setMode(mode){state.mode=mode;document.querySelectorAll('.mode-switch button').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));renderProducts();renderCart()}
function addToCart(id){state.cart.set(id,(state.cart.get(id)||0)+1);updateBadge();$('cartOpen').animate([{transform:'scale(1)'},{transform:'scale(1.08)'},{transform:'scale(1)'}],{duration:220})}
function updateBadge(){$('cartCount').textContent=[...state.cart.values()].reduce((a,b)=>a+b,0)}
function renderCart(){let rows=[...state.cart.entries()];$('drawerMode').textContent=state.mode==='wholesale'?'מסלול עסקי — מחירים להמחשה':'מסלול פרטי — מחירים להמחשה';$('totalLabel').textContent=state.mode==='wholesale'?'סה״כ לדוגמה, לפני הצעת מחיר':'סה״כ לדוגמה';$('cartItems').innerHTML=rows.length?rows.map(([id,qty])=>{const p=catalog.find(x=>x.id===id);return `<div class="cart-row"><div><b>${p.name}</b><small>${p.variant||categoryName(p.cat)}</small></div><div class="qty"><button data-id="${id}" data-delta="-1">−</button><span>${qty}</span><button data-id="${id}" data-delta="1">+</button></div><b>${shekel(price(p)*qty)}</b></div>`}).join(''):'<p style="text-align:center;color:#8a978d;padding:65px 0">הסל שלכם מחכה למשהו טעים 🥖</p>';$('cartTotal').textContent=shekel(rows.reduce((total,[id,qty])=>total+price(catalog.find(x=>x.id===id))*qty,0));document.querySelectorAll('.qty button').forEach(b=>b.addEventListener('click',()=>{let n=(state.cart.get(b.dataset.id)||0)+Number(b.dataset.delta);if(n<=0)state.cart.delete(b.dataset.id);else state.cart.set(b.dataset.id,n);updateBadge();renderCart()}))}
function showCart(){$('cartOverlay').classList.add('open');$('cartOverlay').setAttribute('aria-hidden','false');document.body.classList.add('dialog-open');renderCart()}
function closeCart(){$('cartOverlay').classList.remove('open');$('cartOverlay').setAttribute('aria-hidden','true');document.body.classList.remove('dialog-open')}
function openLightbox(source){const s=findSource(source);$('lightboxImg').src=sourceUrl(source);$('lightboxImg').classList.toggle('rotated',!['90253','90232','90229','90234'].includes(source));$('lightboxCaption').textContent='צילום מקור: '+s[2]+' · '+s[0];$('lightbox').classList.add('open');$('lightbox').setAttribute('aria-hidden','false');document.body.classList.add('dialog-open')}
function closeLightbox(){$('lightbox').classList.remove('open');$('lightbox').setAttribute('aria-hidden','true');document.body.classList.remove('dialog-open')}
function renderSource(){const original=[...sources];$('sourceGallery').innerHTML=original.map(s=>`<button class="source-thumb" data-source="${s[0]}"><img src="./catalog/${s[1]}" loading="lazy" alt="דף מקור ${s[2]}"><span>${s[2]}</span></button>`).join('');document.querySelectorAll('.source-thumb').forEach(el=>el.addEventListener('click',()=>openLightbox(el.dataset.source)))}
async function copyOrder(){const rows=[...state.cart.entries()];if(!rows.length){$('copyStatus').textContent='הסל ריק';return}const lines=rows.map(([id,qty])=>{let p=catalog.find(x=>x.id===id);return `• ${p.name} ${p.variant?'('+p.variant+')':''} × ${qty} — ${shekel(price(p)*qty)} (להמחשה)`});const value=['כל דגן — סיכום '+(state.mode==='wholesale'?'בקשה עסקית':'בקשה פרטית'),...lines,'סה״כ לדוגמה: '+$('cartTotal').textContent,'המחירים אינם רשמיים; נדרש אישור המאפייה.'].join('\n');try{await navigator.clipboard.writeText(value);$('copyStatus').textContent='הסיכום הועתק בהצלחה ✓'}catch(e){$('copyStatus').textContent='העתקה חסומה בדפדפן — אפשר לצלם את הסל.'}}
function init(){const select=$('categorySelect');select.innerHTML=categories.map(([id,name])=>`<option value="${id}">${name}</option>`).join('');renderCollections();renderFilters();renderProducts();renderSource();updateBadge();document.querySelectorAll('.mode-switch button').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));$('productSearch').addEventListener('input',e=>{state.search=e.target.value;renderProducts()});select.addEventListener('change',e=>setCategory(e.target.value));$('resetFilters').addEventListener('click',()=>{state.search='';$('productSearch').value='';setCategory('all')});$('searchTrigger').addEventListener('click',()=>{document.querySelector('#catalog').scrollIntoView({behavior:'smooth'});setTimeout(()=>$('productSearch').focus(),350)});$('switchWholesale').addEventListener('click',()=>{setMode('wholesale');document.querySelector('#catalog').scrollIntoView({behavior:'smooth'})});$('cartOpen').addEventListener('click',showCart);$('cartClose').addEventListener('click',closeCart);$('cartOverlay').addEventListener('click',e=>{if(e.target===$('cartOverlay'))closeCart()});$('lightboxClose').addEventListener('click',closeLightbox);$('lightbox').addEventListener('click',e=>{if(e.target===$('lightbox'))closeLightbox()});$('copyOrder').addEventListener('click',copyOrder);$('clearCart').addEventListener('click',()=>{state.cart.clear();updateBadge();renderCart()});window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeCart();closeLightbox()}})}
init();
