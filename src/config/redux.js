import { createStore, applyMiddleware } from 'redux';

import reducers from './../data/reducers';
import middlewares from './../data/middlewares';

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares),
);
