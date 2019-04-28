import React from 'react';
import useWelcome from './../../store/hooks/welcome';

import './style.css';

const Home = ({ location, history }) => {
  // console.log('Views::Home', location);
  const onClick = () => history.push('/posts');

  const [{
    greeting,
    firstName,
    lastName,
    email,
    role,
    paragraphs,
  }] = useWelcome();

  return (
    <div className="Home">
      <div className="wrapper">
        <h3 className="greeting color-dark-grayish-blue">{greeting}</h3>
        <h1 className="name"><span className="color-lime-green">{firstName}</span> <b className="color-blue" data-cursor-action="highlight">{lastName}</b></h1>
        <p><b className="color-soft-yellow">{role}</b> {paragraphs[0]}</p>
        <p>{paragraphs[1]}</p>
        <a className="btn-link" data-cursor-action="highlight" href={`mailto:${email}`}>{email}</a>
        <p onClick={onClick}>see posts</p>
      </div>
    </div>
  );
}

export default Home;
