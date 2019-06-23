import React from 'react';
// import { useSpring, animated } from 'react-spring';

// import './style.css';

function Enter() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="60"
      height="60"
    >
      <path
        d="M684.135 688.008l-28.88-28.88 28.88-28.88 28.88 28.88z"
      />

      <path
        fill="none"
        stroke="#438CC4"
        stroke-miterlimit="10"
        d="M30.001 58.75L1.251 30l28.75-28.75L58.752 30z"
        stroke-width="1"
      />

      <defs>
        <path
          id="a"
          d="M0 0h60v60H0z"
        />
      </defs>

      <clipPath id="b">
        <use href="#a" overflow="visible"/>
      </clipPath>

      <path
        transform="rotate(-135 30 30)"
        clipPath="url(#b)"
        fill="#438CC4"
        d="M9.671 9.671h40.658V50.33H9.671z"
      />
    </svg>
  )
}

export default Enter;
