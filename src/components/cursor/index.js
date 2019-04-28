import React, { useEffect, useRef } from 'react';
import useCursor from '../../store/hooks/cursor';

import './style.css';

const Cursor = () => {
  const cursorEl = useRef();

  const [cursorSelectors, cursorActions] = useCursor();

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
      className={`Cursor ${cursorSelectors.isHighlighted ? 'highlight' : ''}`}
      style={{
        display: cursorSelectors.isShown ? 'inherit' : 'none',
        left: cursorSelectors.position[0],
        top: cursorSelectors.position[1],
      }}
    />
  );
}

export default Cursor;
