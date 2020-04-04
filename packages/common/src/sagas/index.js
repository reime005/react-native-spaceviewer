import { takeEvery, takeLatest, all } from 'redux-saga/effects';

import {
  LOAD_APP_RESOURCES,
  LOAD_NEXT_LAUNCHES,
  LIST_END_REACHED,
  LIST_REFRESH,
  OPEN_FIRST_MAP_LOCATION,
  OPEN_URL,
  SETTINGS_SAVE_VALUE,
  SETTINGS_REHYDRATE,
  SEARCH_ON_CHANGE_TEXT,
  SEARCH_CLEAR,
  SEARCH_END_REACHED,
} from '../actions';

import { endReached, refresh, loadNextLaunches } from './api';

import { openFirstMapLocation, openURL, shareData } from './app';
import { saveValue, rehydrateSettings } from './settings';
import { searchOnChangeText, searchClear, searchEndReached } from './search';
import { SHARE_DATA } from '../actions/app/share';

export const rootSaga = function* rootSaga() {
  yield all([
    takeEvery(LOAD_NEXT_LAUNCHES, loadNextLaunches),
    takeLatest(LIST_END_REACHED, endReached),
    takeLatest(LIST_REFRESH, refresh),
    takeLatest(OPEN_FIRST_MAP_LOCATION, openFirstMapLocation),
    takeLatest(OPEN_URL, openURL),
    takeLatest(SETTINGS_SAVE_VALUE, saveValue),
    takeLatest(SETTINGS_REHYDRATE, rehydrateSettings),
    takeLatest(SEARCH_ON_CHANGE_TEXT, searchOnChangeText),
    takeEvery(SEARCH_CLEAR, searchClear),
    takeLatest(SEARCH_END_REACHED, searchEndReached),
    takeEvery(SHARE_DATA, shareData),
  ]);
};
