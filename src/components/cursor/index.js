import React, { useState, useEffect, useRef } from 'react';

import './style.css';

const Cursor = () => {
  const cursorEl = useRef();
  const [isShown, setIsShown] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const onMouseMove = ({ target, clientX, clientY }) => {
    const x = clientX - (cursorEl.current.clientWidth >> 1);
    const y = clientY - (cursorEl.current.clientHeight >> 1);

    setPosition([x, y]);
    setIsShown(true);
    setIsHighlighted(!!target.dataset.cursorAction);
  }

  return (
    <span
      ref={cursorEl}
      className={`Cursor ${isHighlighted ? 'highlight' : ''}`}
      style={{
        display: isShown ? 'inherit' : 'none',
        left: position[0],
        top: position[1],
      }}
    />
  );
}

export default Cursor;
