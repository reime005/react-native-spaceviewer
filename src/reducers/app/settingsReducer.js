import { SETTINGS_SET_VALUE } from '../../actions';
import { setItemToStore } from '../../lib/storage';
import * as settingsKeys from '../../constants/settings';

const INITIAL_STATE = {};

export const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETTINGS_SET_VALUE: {
      return { ...state, [action.key]: action.value };
    }
    default:
      return state;
  }
};

export default settingsReducer;
