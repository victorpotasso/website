import React, { useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

import './style.css';

function Cursor() {
  const defaultColor = getComputedStyle(document.documentElement).getPropertyValue('--color-lightest-dark-gray');
  const hoverColor = getComputedStyle(document.documentElement).getPropertyValue('--color-medium-dark-gray');

  const [hasAction, setHasAction] = useState(false);

  const [{ xys }, setProp] = useSpring(() => ({
    config: config.gentle,
    xys: [0, 0, 1],
  }));

  const onMouseMove = ({ target, clientX, clientY }) => {
    const hasAction = !!target.dataset.cursorAction;
    setHasAction(hasAction);
    setProp({ xys: [
      clientX,
      clientY,
      /IFRAME/.test(target.nodeName) ? 0 : hasAction ? 6 : 1
    ]});
  }

  const onMouseLeave = ({ target, clientX, clientY }) => {
    console.log('onMouseLeave')
    setProp({ xys: [
      clientX,
      clientY,
      0
    ]});
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
    };
  }, []);

  return (
    <animated.div
      className="Cursor"
      style={{
        zIndex: hasAction ? -1 : 999,
        transform: xys.interpolate((x, y, s) => `translate(calc(${x}px - 50%), calc(${y}px - 50%)) scale(${s})`),
        backgroundColor: hasAction ? hoverColor : defaultColor,
      }}
    />
  );
}

export default Cursor;
