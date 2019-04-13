import { useQueue } from 'https://unpkg.com/@jsdevs-sp/queue-hook@0.0.7/lib/index.js';
// import { TweenMax } from 'https://unpkg.com/gsap@2.1.2/index.js';
// import TweenMax from 'https://unpkg.com/gsap@2.1.2/TweenMax.js';

async function boot() {
  const manifest = await import('./manifest.js');
  const { loadQueueByItem } = useQueue('preload', manifest.default);

  loadQueueByItem(({ item, progress, position, total }) => {
    console.log(`${position}/${total} - ${item.label}`);

    if (position == total) console.log('complete');
  });

  window.addEventListener('resize', onResize);
  onResize();

  function onResize() {
    const vw = window.innerWidth * 0.01;
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}

document.addEventListener('DOMContentLoaded', boot);
