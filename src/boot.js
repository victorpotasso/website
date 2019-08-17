import React from 'react';
import ReactDOM from 'react-dom';

import Store from './store';
import Logo from './components/logo';
import Cursor from './components/cursor';

import routes from './routes';
import fetchInitialState from './initialState';

try {
  async function boot() {
    if (module.hot) module.hot.accept();

    const initialState = await fetchInitialState();

    ReactDOM.render(
      <Store.Provider initialState={initialState}>
        <Logo />
        <Cursor />
        {routes()}
      </Store.Provider>,
      document.querySelector('#yield')
    );
  }
  boot();
} catch (error) {
  console.log(error)
}