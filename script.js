const mobileButton = document.querySelector('.mobile-menu');
const nav = document.querySelector('.main-nav');

mobileButton?.addEventListener('click', () => {
  nav.classList.toggle('mobile-open');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('mobile-open'));
});

document.querySelector('.subscribe-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  const input = event.currentTarget.querySelector('input');
  button.innerHTML = '已订阅 ✓';
  button.style.background = '#61b993';
  input.value = '';
  input.placeholder = '感谢订阅，下一封见';
});

document.querySelectorAll('.bookmark').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('saved');
    button.textContent = button.classList.contains('saved') ? '♥' : '♡';
    button.style.color = button.classList.contains('saved') ? '#ff786e' : '';
  });
});

const style = document.createElement('style');
style.textContent = `@media (max-width:820px){.main-nav.mobile-open{display:flex;position:absolute;left:20px;right:20px;top:67px;padding:18px;flex-wrap:wrap;gap:15px;background:#e9eef4;border-radius:18px;box-shadow:14px 14px 28px rgba(164,176,194,.48),-12px -12px 24px rgba(255,255,255,.92)}.main-nav.mobile-open a{font-size:12px}.main-nav.mobile-open a.active:after{bottom:-5px}}`;
document.head.appendChild(style);
