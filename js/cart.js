	//  CART STATE........Sample Outlook
const cartItems = {
	1: { name: 'Instant Rice Porridge with Tiger Nut', unitPrice: 15, qty: 2, active: true },
	2: { name: 'CashMint Twist (Cashew Apple Infusion)', unitPrice: 20, qty: 3, active: true },
	3: { name: 'High Fruit Fibre Porridge', unitPrice: 23, qty: 1, active: true },
};
let discount = 0;

function changeQty(id, delta) {
	const item = cartItems[id];
	if (!item) return;
	const newQty = item.qty + delta;
	if (newQty < 1) {
		removeItem(id);
		return;
	}
	item.qty = newQty;
	document.getElementById('qty' + id).textContent = newQty;
	document.getElementById('price' + id).textContent = 'GHS ' + (item.unitPrice * newQty);
	recalculate();
}

function removeItem(id) {
	const el = document.getElementById('cartItem' + id);
	if (el) {
		el.style.transition = 'opacity 0.3s, transform 0.3s';
		el.style.opacity = '0';
		el.style.transform = 'translateX(-20px)';
		setTimeout(() => { el.remove(); }, 300);
	}
	cartItems[id].active = false;
	setTimeout(recalculate, 350);
	showToast('Item removed', 'Removed from your cart.');
}

function saveForLater(id) {
	removeItem(id);
	showToast('Saved for later', cartItems[id]?.name || 'Item saved for later.');
}

function clearCart() {
	[1, 2, 3].forEach(id => {
		if (cartItems[id] && cartItems[id].active) removeItem(id);
	});
}

function recalculate() {
	let subtotal = 0;
	let totalQty = 0;
	Object.values(cartItems).forEach(item => {
		if (item.active) {
			subtotal += item.unitPrice * item.qty;
			totalQty += item.qty;
		}
	});
	const total = subtotal - discount;
	document.getElementById('subtotalVal').textContent = 'GHS ' + subtotal;
	document.getElementById('discountVal').textContent = discount > 0 ? '— GHS ' + discount : '— GHS 0';
	document.getElementById('totalVal').textContent = 'GHS ' + Math.max(0, total);
	document.getElementById('itemCountText').textContent = totalQty + ' item' + (totalQty !== 1 ? 's' : '');
	document.getElementById('cartItemCountLabel').textContent = '( ' + totalQty + ' Item' + (totalQty !== 1 ? 's' : '') + ' )';
	const cartCountBadge = document.getElementById('cartCount');
	if (cartCountBadge) {
		cartCountBadge.textContent = totalQty;
		cartCountBadge.style.display = totalQty > 0 ? 'inline-flex' : 'none';
	}
	const pct = Math.min(100, (subtotal / 300) * 100);
	document.getElementById('shippingProgressBar').style.width = pct + '%';
	const remaining = Math.max(0, 300 - subtotal);
	document.getElementById('amountToFreeShipping').textContent = remaining > 0 ? 'GHS ' + remaining : '';
	document.querySelector('.shipping-progress-box p').innerHTML = remaining > 0
		? `You're <strong>GHS ${remaining}</strong> away from <strong>Free Shipping!</strong>`
		: `<strong style="color:var(--green-deep)">Hurray You've unlocked Free Shipping!</strong>`;
}

function applyCoupon() {
	const code = document.getElementById('couponInput').value.trim().toUpperCase();
	const codes = { 'ZEEFRESH10': 11, 'NEWCUSTOMER': 20, 'MOMO5': 5 };
	if (codes[code]) {
		discount = codes[code];
		recalculate();
		showToast('Coupon applied!', code + ' — GHS ' + codes[code] + ' off your order.');
		document.getElementById('couponInput').style.borderColor = 'var(--green-mid)';
	} else {
		showToast('Invalid code', 'That coupon code was not recognised.');
		document.getElementById('couponInput').style.borderColor = 'var(--orange)';
		setTimeout(() => { document.getElementById('couponInput').style.borderColor = ''; }, 2000);
	}
}

function fillCoupon(code) {
	document.getElementById('couponInput').value = code;
}

function moveToCart() {
	showToast('Moved to cart!', 'Instant Rice Porridge with Mango added.');
	document.querySelector('.saved-section').style.opacity = '0.5';
	document.querySelector('.saved-section').style.pointerEvents = 'none';
}

function handleCheckout() {
	const btn = document.querySelector('.btn-checkout');
	btn.innerHTML = '<i class="bi bi-arrow-repeat spin"></i> Redirecting…';
	btn.disabled = true;
	setTimeout(() => {
		btn.innerHTML = '<i class="bi bi-lock-fill"></i> Proceed to Checkout <i class="bi bi-arrow-right"></i>';
		btn.disabled = false;
		showToast('Checkout coming soon', 'Payment flow will be available shortly.');
	}, 1800);
}

function showToast(title, msg) {
	document.getElementById('toastTitle').textContent = title;
	document.getElementById('toastMsg').textContent = msg;
	const t = document.getElementById('cartToast');
	t.classList.add('show');
	clearTimeout(t._timer);
	t._timer = setTimeout(() => t.classList.remove('show'), 3200);
}

// RECOMMENDED PRODUCTS 
const recommended = [
	{ name: 'Instant Rice Porridge with Mango', category: 'Foods & Refreshments', price: 'GHS 15', img: './images/rice_porridge_mango 300g.jpg' },
	{ name: 'Instant Rice Porridge with Cashew Nuts', category: 'Foods & Refreshments', price: 'GHS 16', img: './images/rice_porridge_cashew 300g.jpg' },
	{ name: 'Instant Rice Porridge with Carrot', category: 'Foods & Refreshments', price: 'GHS 16', img: './images/fibre_porridge_mango 250g.jpg' },
	{ name: 'CashMint Twist 300ml', category: 'Foods & Refreshments', price: 'GHS 35', img: './images/cashmint_twist 300ml.jpg' },
];

function renderRecommended() {
	document.getElementById('recommendedGrid').innerHTML = recommended.map((p, i) => `
		<div class="col-6 col-md-3 reveal reveal-delay-${i + 1}">
			<div class="rec-card">
				<div class="rec-card-img"><img src="${p.img}" alt="${p.name}" loading="lazy" /></div>
				<div class="rec-card-body">
					<div class="rec-card-category">${p.category}</div>
					<div class="rec-card-name">${p.name}</div>
					<div class="rec-card-footer">
						<div class="rec-card-price">${p.price}</div>
						<button class="btn-rec-add" onclick="showToast('Added to cart!','${p.name}')">
							<i class="bi bi-bag-plus"></i> Add
						</button>
					</div>
				</div>
			</div>
		</div>
	`).join('');
	observeReveal();
}

function observeReveal() {
	const els = document.querySelectorAll('.reveal:not(.visible)');
	const obs = new IntersectionObserver(entries => {
		entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
	}, { threshold: 0.1 });
	els.forEach(el => obs.observe(el));
}

const style = document.createElement('style');
style.textContent = `@keyframes spin { to { transform: rotate(360deg); } } .spin { display: inline-block; animation: spin 0.8s linear infinite; }`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
	const navbar = document.querySelector('.navbar');
	const header = document.querySelector('.cart-header');
	const updateNavbar = () => {
		if (!navbar) return;
		navbar.classList.toggle('scrolled', window.scrollY > (header ? header.offsetHeight * 0.3 : 40));
	};

	updateNavbar();
	window.addEventListener('scroll', updateNavbar, { passive: true });

	recalculate();
	renderRecommended();
	observeReveal();
});
