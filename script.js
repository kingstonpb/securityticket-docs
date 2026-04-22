const links = [...document.querySelectorAll('nav a')];
const sections = links
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const activate = () => {
  const y = window.scrollY + 120;
  let current = sections[0]?.id;
  for (const section of sections) {
    if (section.offsetTop <= y) current = section.id;
  }
  for (const link of links) {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  }
};

window.addEventListener('scroll', activate);
activate();
