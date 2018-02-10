import * as types from './types';

const initialState = {
  isLoading: false,
  navigationStatus: {},
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.APP__LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      }
    }
    case types.APP__NAVIGATION_STATUS: {
      return {
        ...state,
        navigationStatus: action.payload,
      }
    }

    default: { return state };
  }
}
