import { TimelineMax as Timeline, Power1 } from 'gsap';

export const start = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const wrapper = node.querySelector('.wrapper');
  const texts = wrapper.children;

  timeline
    .from(node, 0, { autoAlpha: 0, delay })
    .staggerFrom(texts, 0.375, { autoAlpha: 0, y: '-5%', ease: Power1.easeOut }, 0.125);

  return timeline;
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });
  const wrapper = node.querySelector('.wrapper');
  const texts = wrapper.children;

  timeline
    .staggerTo(texts, 0.375, { autoAlpha: 0, y: '5%', ease: Power1.easeOut }, 0.125);

  return timeline;
}