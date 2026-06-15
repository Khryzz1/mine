// ── Nav toggle ──────────────────────────────────────────────
const nav = document.querySelector('.nav-links');
const toggle = document.querySelector('.menu-toggle');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
}

document.addEventListener('click', (e) => {
  if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
    toggle.classList.remove('open');
  }
});

// ── Year ────────────────────────────────────────────────────
document.querySelectorAll('.year, #year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// ── Scroll fade-in ──────────────────────────────────────────
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
}

// ── Header darken on scroll ─────────────────────────────────
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.background = window.scrollY > 40
      ? 'rgba(13,15,14,0.98)'
      : 'rgba(13,15,14,0.92)';
  }, { passive: true });
}

// ── Accordion ───────────────────────────────────────────────
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    document.querySelectorAll('.accordion-btn').forEach(b => {
      b.classList.remove('open');
      if (b.nextElementSibling) b.nextElementSibling.classList.remove('open');
    });
    if (!isOpen) {
      btn.classList.add('open');
      body.classList.add('open');
    }
  });
});
