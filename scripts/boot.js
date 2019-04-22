// import { TweenMax } from 'https://unpkg.com/gsap@2.1.2/index.js';
// import TweenMax from 'https://unpkg.com/gsap@2.1.2/TweenMax.js';
import { useQueue } from 'https://unpkg.com/@jsdevs-sp/queue-hook@0.0.7/lib/index.js';
import { viewport } from './utils/device.js';

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
    const { width, height } = viewport();
    document.documentElement.style.setProperty('--vw', `${width}px`);
    document.documentElement.style.setProperty('--vh', `${height}px`);
  }
}

document.addEventListener('DOMContentLoaded', boot);
