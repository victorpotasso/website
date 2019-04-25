import React from 'react';
import ReactDOM from 'react-dom';

import Store from './store/index';
import Logo from './components/logo';
import Cursor from './components/cursor';
import Home from './views/home';
import './boot.css';

if (module.hot) module.hot.accept();

const initialState = {
  version: 1,
  cursor: {
    isShown: false,
    isHighlighted: false,
    position: [0, 0]
  }
}

const App = ({ children }) => <div>{ children }</div>

ReactDOM.render(
  <Store.Provider initialState={initialState}>
    <Logo />
    <Cursor />
    <Home />
  </Store.Provider>,
  document.querySelector('#yield')
);