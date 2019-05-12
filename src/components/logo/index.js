import React from 'react';
import { useSpring, animated } from 'react-spring';

import history from './../../routes/history';

import './style.css';

const Logo = () => {
  const { opacity } = useSpring({
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    from: {
      opacity: 0,
    },
  });

  return (
    <animated.div style={{ opacity }}>
      <svg
        className="Logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 250 250"
        data-cursor-action="highlight"
        onClick={() => history.push('/')}
      >
        <path className="letter-v" d="M74.4 137.8l46.1 45.8V65" />
        <path className="letter-p" d="M133.5 183V64.3l46.1 45.8" />
        <path className="outline" transform="rotate(45.001 125.71 124.048)" d="M37.8 36.2h175.8V212H37.8z" />
      </svg>
    </animated.div>
  );
}

export default Logo;
