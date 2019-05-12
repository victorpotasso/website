import React from 'react';
import { useTrail, animated } from 'react-spring';

import useWelcome from './../../store/hooks/welcome';

import './style.css';

const Home = ({ location, history }) => {
  const onClick = () => history.push('/posts');

  const [{
    greeting,
    firstName,
    lastName,
    email,
    role,
    paragraphs,
  }] = useWelcome();

  const items = [
    <h3 className="greeting color-dark-grayish-blue">{greeting}</h3>,
    <h1 className="name"><span className="color-lime-green">{firstName}</span> <b className="color-blue" data-cursor-action="highlight">{lastName}</b></h1>,
    <p><b className="color-soft-yellow">{role}</b> {paragraphs[0]}</p>,
    <p>{paragraphs[1]}</p>,
    <a className="btn-link" data-cursor-action="highlight" href={`mailto:${email}`}>{email}</a>,
    <p onClick={onClick} data-cursor-action="highlight">see posts</p>,
  ]

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 100 },
  });

  return (
    <div className="Home">
      <div className="wrapper">
        {trail.map(({ x, opacity }, index) => (
          <animated.div
            key={`p-${index}`}
            style={{
              opacity,
              transform: x.interpolate(x => `translateX(${x}px)`),
            }}
          >
            {items[index]}
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
