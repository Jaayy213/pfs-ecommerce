
//  DATA
const PRODUCTS = [
	// Foods & Drinks
	{
		id:1, cat:'food', name:'Instant Rice Porridge Only',
		catLabel:'Foods & Drinks', badge:'Best Seller', badgeClass:'badge-hot',
		rating:5, reviews:128, avail:'in_stock', tags:['instant','breakfast','porridge'],
		variants:[{label:'100g',price:13,priceStr:'GHS 13',img:'./images/rice_porridge_mango 250g.jpg'},
							{label:'500g',price:57,priceStr:'GHS 57',img:'./images/rice_porridge_mango 300g.jpg'}]
	},
	{
		id:2, cat:'food', name:'Instant Rice Porridge with Creamer',
		catLabel:'Foods & Drinks', badge:'Popular', badgeClass:'badge-sale',
		rating:5, reviews:94, avail:'in_stock', tags:['instant','creamer','breakfast'],
		variants:[{label:'100g',price:13,priceStr:'GHS 13',img:'./images/rice_porridge_mango 300g.jpg'},
							{label:'500g',price:57,priceStr:'GHS 57',img:'./images/fibre_porridge_mango 250g.jpg'}]
	},
	{
		id:3, cat:'food', name:'Instant Rice Porridge with Cashew Nuts',
		catLabel:'Foods & Drinks', badge:null,
		rating:5, reviews:104, avail:'in_stock', tags:['cashew','breakfast','porridge'],
		variants:[{label:'100g',price:16,priceStr:'GHS 16',img:'./images/rice_porridge_cashew 300g.jpg'},
							{label:'500g',price:72,priceStr:'GHS 72',img:'./images/rice_porridge_cashew_apple 300g.jpg'}]
	},
	{
		id:4, cat:'food', name:'Instant Rice Porridge with Tiger Nut',
		catLabel:'Foods & Drinks', badge:'Premium Mix', badgeClass:'badge-new',
		rating:5, reviews:112, avail:'in_stock', tags:['tigernut','premium','breakfast'],
		variants:[{label:'100g',price:15,priceStr:'GHS 15',img:'./images/rice_porridge_tigernut 300g.jpg'},
							{label:'500g',price:67,priceStr:'GHS 67',img:'./images/rice_porridge_tigernut 300g.jpg'}]
	},
	{
		id:5, cat:'food', name:'Instant Rice Porridge with Carrot',
		catLabel:'Foods & Drinks', badge:null,
		rating:4, reviews:88, avail:'in_stock', tags:['carrot','vegetable','breakfast'],
		variants:[{label:'100g',price:16,priceStr:'GHS 16',img:'./images/fibre_porridge_mango 250g.jpg'},
							{label:'500g',price:72,priceStr:'GHS 72',img:'./images/rice_porridge_mango 300g.jpg'}]
	},
	{
		id:6, cat:'food', name:'Instant Rice Porridge with Mango',
		catLabel:'Foods & Drinks', badge:'Fruit Track', badgeClass:'badge-new',
		rating:5, reviews:96, avail:'in_stock', tags:['mango','fruit','breakfast'],
		variants:[{label:'100g',price:15,priceStr:'GHS 15',img:'./images/rice_porridge_mango 300g.jpg'},
							{label:'500g',price:67,priceStr:'GHS 67',img:'./images/fibre_porridge_mango 250g.jpg'}]
	},
	{
		id:7, cat:'food', name:'High Fruit Fibre Porridge',
		catLabel:'Foods & Drinks', badge:'High Fibre', badgeClass:'badge-sale',
		rating:5, reviews:142, avail:'in_stock', tags:['fibre','fruit','premium'],
		variants:[{label:'100g',price:23,priceStr:'GHS 23',img:'./images/fibre_porridge_mango 250g.jpg'},
							{label:'500g',price:107,priceStr:'GHS 107',img:'./images/rice_porridge_mango 300g.jpg'}]
	},
	{
		id:8, cat:'food', name:'CashMint Twist (Cashew Apple Infusion)',
		catLabel:'Foods & Drinks', badge:'New Drink', badgeClass:'badge-new',
		rating:5, reviews:67, avail:'in_stock', tags:['drink','cashew','mint','new'],
		variants:[{label:'150ml Can',price:20,priceStr:'GHS 20',img:'./images/cashmint_twist-150ml.jpg'},
							{label:'300ml Can',price:35,priceStr:'GHS 35',img:'./images/cashmint_twist 300ml.jpg'}]
	},
	// Dehydrators
	{
		id:9, cat:'dehydrator', name:'10-Tray Commercial Dehydrator',
		catLabel:'Commercial Dehydrators', badge:'Pre-Order', badgeClass:'badge-preorder',
		rating:5, reviews:22, avail:'preorder', tags:['dehydrator','commercial','10tray'],
		variants:[{label:'10 Trays',price:3218,priceStr:'GHS 3,218',img:'./images/tray-dehydrator3.jpg'}]
	},
	{
		id:10, cat:'dehydrator', name:'12-Tray Commercial Dehydrator',
		catLabel:'Commercial Dehydrators', badge:'Pre-Order', badgeClass:'badge-preorder',
		rating:5, reviews:18, avail:'preorder', tags:['dehydrator','commercial','12tray'],
		variants:[{label:'12 Trays',price:3580,priceStr:'GHS 3,580',img:'./images/tray-dehydrator3.jpg'}]
	},
	{
		id:11, cat:'dehydrator', name:'20-Tray Commercial Dehydrator',
		catLabel:'Commercial Dehydrators', badge:'Pre-Order', badgeClass:'badge-preorder',
		rating:5, reviews:14, avail:'preorder', tags:['dehydrator','commercial','20tray'],
		variants:[{label:'20 Trays',price:4100,priceStr:'GHS 4,100',img:'./images/tray_dehydrator2.jpg'}]
	},
	{
		id:12, cat:'dehydrator', name:'80-Tray Commercial Dehydrator',
		catLabel:'Commercial Dehydrators', badge:'Most Powerful', badgeClass:'badge-hot',
		rating:5, reviews:9, avail:'preorder', tags:['dehydrator','industrial','80tray'],
		variants:[{label:'80 Trays',price:5500,priceStr:'GHS 5,500',img:'./images/tray_dehydrator2.jpg'}]
	},
	{
		id:13, cat:'dehydrator', name:'96-Tray Industrial Dehydrator',
		catLabel:'Commercial Dehydrators', badge:'Industrial', badgeClass:'badge-preorder',
		rating:5, reviews:6, avail:'preorder', tags:['dehydrator','industrial','96tray'],
		variants:[{label:'96 Trays',price:5950,priceStr:'GHS 5,950',img:'./images/tray-dehydrator3.jpg'}]
	},
	// Slicers
	{
		id:14, cat:'slicer', name:'Manual Precision Food Slicer',
		catLabel:'Slicers & Cutters', badge:null,
		rating:4, reviews:31, avail:'in_stock', tags:['slicer','manual','cutter'],
		variants:[{label:'Standard',price:1375,priceStr:'GHS 1,375',img:'./images/slicer.jpg'}]
	},
	{
		id:15, cat:'slicer', name:'Automatic High-Speed Food Slicer',
		catLabel:'Slicers & Cutters', badge:'Best Value', badgeClass:'badge-sale',
		rating:5, reviews:27, avail:'in_stock', tags:['slicer','automatic','high-speed'],
		variants:[{label:'Standard',price:2100,priceStr:'GHS 2,100',img:'./images/slicer.jpg'}]
	},
	// Sealing & Milling
	{
		id:16, cat:'machinery', name:'Pneumatic Continuous Band Sealer',
		catLabel:'Sealing & Milling', badge:'Available', badgeClass:'badge-sale',
		rating:5, reviews:19, avail:'in_stock', tags:['sealer','packaging','milling'],
		variants:[{label:'Standard',price:1800,priceStr:'GHS 1,800',img:'./images/sealing.jpg'}]
	},
];

// STATE
let activeCategory = 'all';
let activeView     = 'grid';
let minRating      = 0;
let cartCount      = 0;
let selectedVariants = {};
PRODUCTS.forEach(p => { selectedVariants[p.id] = 0; });

// Tag cloud
const allTags = [...new Set(PRODUCTS.flatMap(p => p.tags))];
let activeTags = new Set();

// FILTERS & SORT
function setCategory(btn, cat) {
	document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
	btn.classList.add('active');
	activeCategory = cat;
	renderGrid();
}

function setView(v) {
	activeView = v;
	const grid = document.getElementById('productGrid');
	document.getElementById('gridViewBtn').classList.toggle('active', v==='grid');
	document.getElementById('listViewBtn').classList.toggle('active', v==='list');
	if (v === 'list') {
		grid.classList.add('list-view');
		grid.classList.remove('two-col');
	} else {
		grid.classList.remove('list-view', 'two-col');
	}
}

function setRating(min) {
	minRating = min;
	document.querySelectorAll('.rating-row').forEach(r => {
		r.classList.toggle('active', parseInt(r.dataset.min||0) === min);
	});
	renderGrid();
}
function resetRating() { setRating(0); }

function updatePriceLabel(v) {
	document.getElementById('priceLabel').textContent = 'Up to GHS ' + Number(v).toLocaleString();
}
function resetPrice() { document.getElementById('priceRange').value = 6000; updatePriceLabel(6000); renderGrid(); }
function resetAvail() { document.querySelectorAll('.avail-check').forEach(c => c.checked = false); renderGrid(); }

function syncPrice2(v) {
	document.getElementById('priceLabel2').textContent = 'Up to GHS ' + Number(v).toLocaleString();
	document.getElementById('priceRange').value = v;
	updatePriceLabel(v);
	renderGrid();
}

function toggleTag(tag) {
	activeTags.has(tag) ? activeTags.delete(tag) : activeTags.add(tag);
	renderTagCloud();
	renderGrid();
}
function renderTagCloud() {
	document.getElementById('tagCloud').innerHTML = allTags.map(t =>
		`<span onclick="toggleTag('${t}')" style="
			display:inline-block;padding:0.2rem 0.65rem;border-radius:50px;cursor:pointer;
			font-size:0.73rem;font-weight:600;border:1px solid;transition:all 0.2s;
			${activeTags.has(t)
				? 'background:var(--green-deep);color:#fff;border-color:var(--green-deep)'
				: 'background:rgba(27,107,42,0.06);color:var(--green-deep);border-color:rgba(27,107,42,0.2)'}
		">${t}</span>`
	).join('');
}

function getFilteredProducts() {
	const maxPrice = parseInt(document.getElementById('priceRange')?.value || 6000);
	const search   = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
	const availChecked = [...document.querySelectorAll('.avail-check:checked')].map(c => c.value);
	const sortVal  = document.getElementById('sortSelect').value;

	let list = PRODUCTS.filter(p => {
		if (activeCategory !== 'all' && p.cat !== activeCategory) return false;
		if (availChecked.length && !availChecked.includes(p.avail)) return false;
		const minVariantPrice = Math.min(...p.variants.map(v => v.price));
		if (minVariantPrice > maxPrice) return false;
		if (p.rating < minRating) return false;
		if (activeTags.size && ![...activeTags].some(t => p.tags.includes(t))) return false;
		if (search) {
			const haystack = [p.name, p.catLabel, ...p.tags].join(' ').toLowerCase();
			if (!haystack.includes(search)) return false;
		}
		return true;
	});

	if (sortVal === 'price-asc')   list.sort((a,b) => a.variants[0].price - b.variants[0].price);
	if (sortVal === 'price-desc')  list.sort((a,b) => b.variants[0].price - a.variants[0].price);
	if (sortVal === 'rating')      list.sort((a,b) => b.rating - a.rating || b.reviews - a.reviews);
	if (sortVal === 'newest')      list.sort((a,b) => b.id - a.id);

	return list;
}

// RENDER
function starsHTML(rating) {
	let s = '';
	for (let i=1;i<=5;i++) s += `<i class="bi bi-star-fill${i>rating?' empty':''}"></i>`;
	return s;
}

function variantPills(product) {
	if (product.variants.length <= 1) return '';
	const vi = selectedVariants[product.id] || 0;
	return `<div class="prod-variants">${
		product.variants.map((v,i) =>
			`<button class="v-pill${i===vi?' sel':''}" onclick="selectVariant(${product.id},${i},event)">${v.label}</button>`
		).join('')
	}</div>`;
}

function selectVariant(pid, vi, e) {
	e && e.stopPropagation();
	selectedVariants[pid] = vi;
	const card = document.querySelector(`[data-pid="${pid}"]`);
	if (!card) return;
	const p = PRODUCTS.find(x => x.id === pid);
	const v = p.variants[vi];
	card.querySelectorAll('.v-pill').forEach((btn,i) => btn.classList.toggle('sel', i===vi));
	const img = card.querySelector('.prod-img-area img');
	img.style.opacity = '0'; img.style.transform = 'scale(1.04)';
	setTimeout(() => { img.src = v.img; img.style.opacity='1'; img.style.transform=''; }, 200);
	card.querySelector('.prod-price').textContent = v.priceStr;
}

function addToCart(pid, e) {
	e && e.stopPropagation();
	const p = PRODUCTS.find(x => x.id === pid);
	const v = p.variants[selectedVariants[pid]||0];
	cartCount++;
	const cartBadge = document.getElementById('cartCount');
	if (cartBadge) {
		cartBadge.textContent = cartCount;
		cartBadge.style.display = 'inline-flex';
	}
	const btn = document.querySelector(`[data-pid="${pid}"] .btn-add`);
	if (btn) {
		btn.classList.add('loading');
		btn.innerHTML = '<i class="bi bi-check2"></i> Added';
		setTimeout(() => {
			btn.classList.remove('loading');
			btn.innerHTML = '<i class="bi bi-bag-plus"></i> Add';
		}, 1400);
	}
	showToast('success', 'Added to cart!', `${p.name} — ${v.label}`);
}

function renderGrid() {
	const filtered = getFilteredProducts();
	const grid     = document.getElementById('productGrid');
	const countEl  = document.getElementById('resultsCount');

	countEl.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${PRODUCTS.length}</strong> products`;
	updateTabCounts(filtered);
	renderActiveFilters();

	if (!filtered.length) {
		grid.innerHTML = `
			<div class="empty-state">
				<div class="empty-icon"><i class="bi bi-search"></i></div>
				<h4>No products found</h4>
				<p>Try adjusting your filters or search term to find what you're looking for.</p>
				<button class="btn-reset" onclick="resetAll()">Clear All Filters</button>
			</div>`;
		return;
	}

	let html = '';
	let bannerInserted = false;

	filtered.forEach((p, idx) => {
		if (idx === 5 && activeCategory === 'all' && !bannerInserted && activeView !== 'list') {
			bannerInserted = true;
			html += `
				<div class="featured-banner">
					<div class="featured-banner-text">
						<h3>Pre-Order Our <span>Industrial Dehydrators</span></h3>
						<p>10 to 96 tray configurations — engineered for consistent commercial output across Ghana.</p>
					</div>
					<div class="featured-banner-cta">
						<a href="#" class="btn-banner-cta" onclick="setCategory(document.querySelector('[data-cat=dehydrator]'),'dehydrator');return false">
							<i class="bi bi-gear"></i> View Dehydrators
						</a>
					</div>
				</div>`;
		}

		const vi = selectedVariants[p.id] || 0;
		const v  = p.variants[vi];

		html += `
			<div class="prod-card reveal" data-pid="${p.id}">
				<div class="prod-img-area">
					<img src="${v.img}" alt="${p.name}" loading="lazy" style="transition:opacity 0.2s,transform 0.2s" />
					<div class="prod-badges">
						${p.badge ? `<span class="prod-badge ${p.badgeClass||''}">${p.badge}</span>` : ''}
						${p.avail==='preorder' ? '<span class="prod-badge badge-preorder">Pre-Order</span>' : ''}
					</div>
					<button class="prod-wish" onclick="this.classList.toggle('active');event.stopPropagation()" title="Save">
						<i class="bi bi-heart-fill"></i>
					</button>
					<div class="prod-quick-add">
						<button class="btn-quick-add" onclick="addToCart(${p.id},event)">
							<i class="bi bi-bag-plus"></i> Quick Add
						</button>
					</div>
				</div>
				<div class="prod-body">
					<div class="prod-category">${p.catLabel}</div>
					<div class="prod-name">${p.name}</div>
					<div class="prod-stars">
						<div class="star-set">${starsHTML(p.rating)}</div>
						<span class="review-count">(${p.reviews})</span>
					</div>
					${variantPills(p)}
					<div class="prod-footer">
						<div class="prod-price-wrap">
							<div class="prod-price">${v.priceStr}</div>
							${p.cat !== 'food' ? `<div class="prod-price-old">${v.priceStr.replace(/\d+/, n => Math.round(n*1.12))}</div>` : ''}
						</div>
						<button class="btn-add" onclick="addToCart(${p.id},event)">
							<i class="bi bi-bag-plus"></i> Add
						</button>
					</div>
				</div>
			</div>`;
	});

	grid.innerHTML = html;

	if (activeView === 'list') grid.classList.add('list-view');

	observeReveal();
}

function updateTabCounts(filtered) {
	const cats = ['all','food','dehydrator','slicer','machinery'];
	cats.forEach(cat => {
		const el = document.getElementById('cnt-' + cat);
		if (!el) return;
		if (cat === 'all') el.textContent = filtered.length;
		else el.textContent = filtered.filter(p => p.cat === cat).length;
	});
}

function renderActiveFilters() {
	const chips = [];
	if (activeCategory !== 'all') {
		const labels = {food:'Foods & Drinks',dehydrator:'Dehydrators',slicer:'Slicers',machinery:'Sealing & Milling'};
		chips.push({label: labels[activeCategory], clear: ()=>{ setCategory(document.querySelector('[data-cat=all]'),'all'); }});
	}
	if (minRating > 0) chips.push({label:`${minRating}+ Stars`, clear: resetRating});
	const price = parseInt(document.getElementById('priceRange')?.value||6000);
	if (price < 6000) chips.push({label:`Up to GHS ${price.toLocaleString()}`, clear: resetPrice});
	const search = document.getElementById('searchInput')?.value||'';
	if (search.trim()) chips.push({label:`"${search.trim()}"`, clear:()=>{ document.getElementById('searchInput').value=''; renderGrid(); }});
	activeTags.forEach(t => chips.push({label:`#${t}`, clear:()=>toggleTag(t)}));

	const wrap = document.getElementById('activeFilters');
	if (!chips.length) { wrap.innerHTML=''; return; }
	wrap.innerHTML = chips.map((c) =>
		`<span class="filter-chip">${c.label}<button onclick="(${c.clear.toString()})()"><i class="bi bi-x"></i></button></span>`
	).join('') + `<button class="clear-filters-link" onclick="resetAll()">Clear all</button>`;
}

function resetAll() {
	activeCategory = 'all';
	minRating      = 0;
	activeTags.clear();
	if (document.getElementById('searchInput')) document.getElementById('searchInput').value = '';
	if (document.getElementById('priceRange')) { document.getElementById('priceRange').value = 6000; updatePriceLabel(6000); }
	document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.dataset.cat==='all'));
	document.querySelectorAll('.avail-check').forEach(c => c.checked = false);
	resetRating();
	renderTagCloud();
	renderGrid();
}

// TOAST
function showToast(type, title, sub) {
	const wrap = document.getElementById('toastWrap');
	const t = document.createElement('div');
	t.className = `toast-item ${type}`;
	t.innerHTML = `
		<i class="t-icon bi ${type==='success'?'bi-bag-check-fill':'bi-info-circle-fill'}"></i>
		<div><div class="t-title">${title}</div><div class="t-sub">${sub||''}</div></div>`;
	wrap.appendChild(t);
	requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
	setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 450); }, 3000);
}

// FILTER DRAWER
function openFilterDrawer()  { document.getElementById('filterDrawer').classList.add('open'); document.getElementById('filterOverlay').classList.add('open'); }
function closeFilterDrawer() { document.getElementById('filterDrawer').classList.remove('open'); document.getElementById('filterOverlay').classList.remove('open'); }

// REVEAL
function observeReveal() {
	const obs = new IntersectionObserver(entries => {
		entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
	}, { threshold: 0.08 });
	document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
	const navbar = document.querySelector('.navbar');
	const hero = document.querySelector('.page-hero');
	const updateNavbar = () => {
		if (!navbar) return;
		navbar.classList.toggle('scrolled', window.scrollY > (hero ? hero.offsetHeight * 0.55 : 40));
	};

	updateNavbar();
	window.addEventListener('scroll', updateNavbar, { passive: true });

	renderTagCloud();
	renderGrid();
	observeReveal();
});
