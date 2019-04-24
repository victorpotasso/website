import React from 'react';
import ReactDOM from 'react-dom';

import Logo from './components/logo';
import Cursor from './components/cursor';
import Home from './views/home';
import './boot.css';

if (module.hot) {
  module.hot.accept();
  // module.hot.accept('./data/reducers', () => {
  //   const nextRootReducer = requireReducers;
  //   store.replaceReducer(nextRootReducer);
  // });
}

const App = ({ children }) => <div>{ children }</div>

ReactDOM.render(
  <>
    <Logo />
    <Cursor />
    <Home />
  </>,
  document.querySelector('#yield')
);