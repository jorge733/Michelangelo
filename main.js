(() => {
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('menu-principal');
  const navToggle = document.querySelector('.nav-toggle');
  const subToggles = document.querySelectorAll('.sub-toggle');

  // Sombra del header al hacer scroll
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menú móvil
  const setNavOpen = (open) => {
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.querySelector('.visually-hidden').textContent = open ? 'Cerrar menú' : 'Abrir menú';
    nav.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  navToggle.addEventListener('click', () => setNavOpen(navToggle.getAttribute('aria-expanded') !== 'true'));

  // Submenús (clic / teclado, sin depender de hover)
  const closeSubs = (except) => subToggles.forEach((t) => {
    if (t !== except) t.setAttribute('aria-expanded', 'false');
  });
  subToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      closeSubs(toggle);
      toggle.setAttribute('aria-expanded', String(!open));
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-sub')) closeSubs();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    closeSubs();
    if (nav.classList.contains('is-open')) { setNavOpen(false); navToggle.focus(); }
  });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setNavOpen(false)));

  // Año del footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Aparición suave de secciones
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const items = document.querySelectorAll('.section-head, .card, .pillar, .quote, .split-copy, .cta');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -60px 0px' });
    items.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
  }
})();
