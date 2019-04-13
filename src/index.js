import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './config/Redux';
import routes from './config/routes';

import requireReducers from './data/reducers';

import './config/stylesheets/application.css';

if (module.hot) {
  module.hot.accept();
  module.hot.accept('./data/reducers', () => {
    const nextRootReducer = requireReducers;
    store.replaceReducer(nextRootReducer);
  });
}

ReactDOM.render(
  <Provider store={store}>
    {routes(store)}
  </Provider>,
  document.querySelector('#yield')
);