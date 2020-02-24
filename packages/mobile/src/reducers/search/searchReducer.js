import {
  SEARCH_SET_CLEAR,
  SEARCH_SET_TEXT,
  SEARCH_SET_RESULT,
  SEARCH_CONCAT_RESULT,
} from '../../actions';

const INITIAL_STATE = {
  searchText: '',
  searchResult: [],
};

export const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_SET_CLEAR: {
      return INITIAL_STATE;
    }
    case SEARCH_SET_TEXT: {
      return {
        ...state,
        searchText: action.searchText,
        loading: true,
      };
    }
    case SEARCH_CONCAT_RESULT: {
      return {
        ...state,
        loading: false,
        searchResult: state.searchResult.concat(action.searchResult),
      };
    }
    case SEARCH_SET_RESULT: {
      return {
        ...state,
        loading: false,
        searchResult: action.searchResult,
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
