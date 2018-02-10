import * as types from './types';
import * as actions from './actions';
import * as selectors from './selectors';

const middlewares = store => next => (action) => {
  const { dispatch, getState } = store;

  switch (action.type) {
    case '@@router/LOCATION_CHANGE': {
      next(actions.navigationStatus({
        entered: true,
        leaving: false,
        leaved: false,
      }));
      break;
    }
    default: { next(action); }
  }
};

export default middlewares;
