// ---- footer year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- mobile nav toggle ----
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('menu-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---- skill meters: set target width from data-level, fill once when visible ----
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const meters = document.querySelectorAll('.meter');
meters.forEach(meter => {
  const level = meter.dataset.level || '0';
  meter.style.setProperty('--target-width', level + '%');
});

if (reduceMotion) {
  meters.forEach(meter => meter.classList.add('is-visible'));
} else if ('IntersectionObserver' in window) {
  const meterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        meterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  meters.forEach(meter => meterObserver.observe(meter));
} else {
  meters.forEach(meter => meter.classList.add('is-visible'));
}

// ---- active nav link on scroll ----
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[data-nav]');

if ('IntersectionObserver' in window && sections.length) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.opacity = a.getAttribute('href') === `#${id}` ? '1' : '';
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(section => navObserver.observe(section));
}
