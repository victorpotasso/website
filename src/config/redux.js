import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import reducers from './../data/reducers';
import history from './routes/history';

const routerHistoryMiddleware = routerMiddleware(history);

export const middlewares = [
  thunk,
  routerHistoryMiddleware,
];

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares),
);
