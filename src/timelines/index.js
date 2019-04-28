import * as homeTL from './home';
import * as defaultTL from './default';

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.75;
  let timeline;

  switch (pathname) {
    case '/':
      timeline = homeTL.start(node, delay);
      break;
  
    default:
      timeline = defaultTL.start(node, delay);
      break;
  }

  timeline.play();
}

export const exit = (pathname, node) => {
  let timeline;
  switch (pathname) {
    case '/':
      timeline = homeTL.exit(node);
      break;

    default:
      timeline = defaultTL.exit(node);
      break;
  }

  timeline.play();
}
