import React, { useEffect, useRef } from 'react';
import useCursor from '../../store/hooks/cursor';

import './style.css';

const Cursor = () => {
  console.log('Components::Cursor');
  const cursorEl = useRef();

  const [cursorSelector, cursorActions] = useCursor();

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const onMouseMove = ({ target, clientX, clientY }) => {
    const x = clientX - (cursorEl.current.clientWidth >> 1);
    const y = clientY - (cursorEl.current.clientHeight >> 1);

    cursorActions.setPosition([x, y]);
    cursorActions.setIsShown(true);
    cursorActions.setIsHighlighted(!!target.dataset.cursorAction);
  }

  return (
    <span
      onMouseMove={onMouseMove}
      ref={cursorEl}
      className={`Cursor ${cursorSelector.isHighlighted ? 'highlight' : ''}`}
      style={{
        display: cursorSelector.isShown ? 'inherit' : 'none',
        left: cursorSelector.position[0],
        top: cursorSelector.position[1],
      }}
    />
  );
}

export default Cursor;
