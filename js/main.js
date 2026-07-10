/* Shared UI: navbar scroll, reveal animations, back-to-top */
(function () {
  'use strict';

  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const heroEl = document.querySelector('.page-hero, .cart-header, .hero');
    const onScroll = () => {
      const threshold = heroEl ? heroEl.offsetHeight * 0.4 : 40;
      navbar.classList.toggle('scrolled', window.scrollY > threshold);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  const revealEls = document.querySelectorAll('.reveal:not(.visible)');
  if (revealEls.length) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => obs.observe(el));
  }

  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
  }
})();
