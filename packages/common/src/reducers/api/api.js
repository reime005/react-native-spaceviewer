import * as types from '../../actions/api/reducerActions';

import initialState from './initialState';

export const api = (state, action) => {
  let nextState = state || initialState;

  switch (action.type) {
    case types.CONCAT_LAUNCHES: {
      nextState = {
        ...nextState,
        isLoading: false,
        [action.launchType]: nextState[action.launchType].concat(
          action.launches,
        ),
      };
      break;
    }
    case types.SET_LAUNCHES: {
      nextState = {
        ...nextState,
        isLoading: false,
        [action.launchType]: action.launches,
      };
      break;
    }
    case types.SET_PREV_ENDDATE: {
      nextState = {
        ...nextState,
        enddate: action.enddate,
      };
      break;
    }
    case types.LOAD_NEXT_LAUNCHES_FAIL: {
      nextState = {
        ...nextState,
        isLoading: false,
      };
      break;
    }
  }

  return nextState;
};

export default api;
