import React from 'react';

import './style.css';

const Home = () => (
  <div className="Home">
    <div className="wrapper" style={{ opacity: 0 }}>
      <h3 className="greeting color-dark-grayish-blue">Hey! I'm</h3>
      <h1 className="name"><span className="color-lime-green">Victor</span> <b className="color-blue" data-cursor-action="highlight">Potasso</b></h1>
      <p><b className="color-soft-yellow">Front End Developer</b> born and raised in Sao Paulo, Brazil and living in <b className="color-pink">Auckland</b>, New Zealand.</p>
      <p>Passionate about Interactive Develpment and UX, I've been working <b className="color-dark-red">since 2008</b>.</p>
      <a className="btn-link" data-cursor-action="highlight" href="mailto:victorpotasso@gmail.com">victorpotasso@gmail.com</a>
    </div>
  </div>
);

export default Home;
