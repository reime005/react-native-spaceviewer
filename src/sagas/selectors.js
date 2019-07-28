import { FILE_NEXT_LAUNCHES } from '../constants/files';

export const getCurrentLaunchesLength = state =>
  state.api[FILE_NEXT_LAUNCHES].length;
export const getPrevEnddate = state => state.api.enddate;

export const getSearchText = state => state.search.searchText;
export const getSearchResultLength = state => state.search.searchResult.length;
