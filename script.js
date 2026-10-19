const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  siteNav.classList.toggle('is-open', !isOpen);
});

siteNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    siteNav.classList.remove('is-open');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#inquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const body = [
    'New Selotuin trade inquiry',
    '',
    `Name: ${form.get('name')}`,
    `Email: ${form.get('email')}`,
    `Interested in: ${form.get('interest')}`,
    '',
    `Plans: ${form.get('message')}`,
  ].join('\n');
  const whatsappNumber = '32497358388';
  document.querySelector('#form-status').textContent = 'WhatsApp will open with your inquiry ready. Review it and tap Send.';
  window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(body)}`;
});
