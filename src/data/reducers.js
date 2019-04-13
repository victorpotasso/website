import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
// import { reducer as formReducer } from 'redux-form';

import appReducers from './app/reducers';

export default combineReducers({
  routing,
  app: appReducers,
});
