const orb = document.getElementById('orbWrap');
const visual = document.querySelector('.visual');
if (orb && visual && window.matchMedia('(pointer:fine)').matches) {
  visual.addEventListener('pointermove', (event) => {
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    orb.style.transform = `translate(${x * 22}px, ${y * 22}px) rotateX(${-y * 12}deg) rotateY(${x * 14}deg)`;
  });
  visual.addEventListener('pointerleave', () => {
    orb.style.transform = '';
  });
}
const menu = document.querySelector('.menu');
if (menu) menu.addEventListener('click', () => {
  const nav = document.querySelector('.nav nav');
  const opened = nav.style.display === 'flex';
  nav.style.display = opened ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '65px';
  nav.style.right = '6%';
  nav.style.padding = '18px';
  nav.style.borderRadius = '16px';
  nav.style.background = '#fff9';
  nav.style.backdropFilter = 'blur(15px)';
  nav.style.flexDirection = 'column';
  nav.style.gap = '18px';
});
