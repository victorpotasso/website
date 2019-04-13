import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import history from './../config/routes/history';

import appMiddlewares from './app/middlewares';

const routerHistoryMiddleware = routerMiddleware(history);

const middlewares = [
  thunk,
  routerHistoryMiddleware,
  appMiddlewares,
];

export default middlewares;