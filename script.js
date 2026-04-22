const toggle = document.querySelector('.mobile-nav-toggle');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section[id], main header[id]');

if (toggle && sidebar) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    sidebar.classList.toggle('open');
    toggle.textContent = expanded ? 'Menu' : 'Close menu';
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 980 && sidebar && toggle) {
      sidebar.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute('id');
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  });
}, {
  rootMargin: '-25% 0px -60% 0px',
  threshold: 0.1,
});

sections.forEach(section => observer.observe(section));
