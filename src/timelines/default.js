import { TimelineMax as Timeline, Power1 } from 'gsap';

export const start = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  timeline
    .from(node, 0.3, { delay, autoAlpha: 0, ease: Power1.easeIn });
  return timeline;
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });
  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  return timeline;
}