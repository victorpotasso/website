import { useQueue } from 'https://unpkg.com/@jsdevs-sp/queue-hook@0.0.7/lib/index.js';

async function boot() {
  const manifest = await import('./manifest.js');
  const { loadQueueByItem } = useQueue('preload', manifest.default);

  loadQueueByItem(({ item, progress, position, total }) => {
    console.log(`${position}/${total} - ${item.label}`);

    if (position == total) console.log('complete');
  });
}

document.addEventListener('DOMContentLoaded', boot);
