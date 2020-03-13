export const SEARCH_SET_TEXT = 'SEARCH_SET_TEXT';
export const SEARCH_SET_RESULT = 'SEARCH_SET_RESULT';
export const SEARCH_CONCAT_RESULT = 'SEARCH_CONCAT_RESULT';
export const SEARCH_SET_CLEAR = 'SEARCH_SET_CLEAR';

export function searchSetTextAction(searchText) {
  return {
    type: SEARCH_SET_TEXT,
    searchText,
  };
}

export function searchSetResultAction(searchResult) {
  return {
    type: SEARCH_SET_RESULT,
    searchResult,
  };
}

export function searchConcatResultAction(searchResult) {
  return {
    type: SEARCH_CONCAT_RESULT,
    searchResult,
  };
}

export function searchSetClearAction() {
  return {
    type: SEARCH_SET_CLEAR,
  };
}
