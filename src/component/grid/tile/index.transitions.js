const transitions = {
  alpha: {
    enter: {
      from: {
        autoAlpha: 0,
        y: 100,
      },
      to: {
        autoAlpha: 1,
        y: 0,
      },
    },
    leave: {
      from: {
        autoAlpha: 1,
        y: 0,
      },
      to: {
        autoAlpha: 0,
        y: 100,
      },
    },
  },
  scale: {
    enter: {
      from: {
        scale: 0,
      },
      to: {
        ease: Cubic.easeOut,
        scale: 1,
      },
    },
    leave: {
      from: {
        scale: 1,
      },
      to: {
        scale: 0,
      },
    },
  },
};

export default transitions;
