const menu = document.querySelector('.menu');

menu?.addEventListener('click', () => {
  const isExpanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', `${!isExpanded}`);
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header-background");
  const offset = window.scrollY * 0.3;
  header.style.backgroundPositionY = `-${offset}px`;
});