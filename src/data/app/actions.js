import { push } from 'react-router-redux';

import * as types from './types';
import { setTimeout } from 'timers';

export const loading = (isLoading = true) => ({
  type: types.APP__LOADING,
  isLoading,
});

export const navigationStatus = payload => ({
  type: types.APP__NAVIGATION_STATUS,
  payload,
});

export const navigateTo = (pathname, timeout = 2000) => (dispatch) => {
  dispatch(navigationStatus({
    timeout,
    entered: false,
    leaving: true,
  }));

  setTimeout(() => {
    dispatch(navigationStatus({
      timeout,
      entered: false,
      leaving: false,
      leaved: true,
    }));
    dispatch(push(pathname));
  }, timeout);
}
