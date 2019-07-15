export const SEARCH_ON_CHANGE_TEXT = 'SEARCH_ON_CHANGE_TEXT';
export const SEARCH_CLEAR = 'SEARCH_CLEAR';
export const SEARCH_END_REACHED = 'SEARCH_END_REACHED';

export function searchOnChangeTextSagaAction(searchText) {
  return {
    type: SEARCH_ON_CHANGE_TEXT,
    searchText,
  };
}

export function searchClearSagaAction() {
  return {
    type: SEARCH_CLEAR,
  };
}

export function searchEndReachedSagaAction() {
  return {
    type: SEARCH_END_REACHED,
  };
}
