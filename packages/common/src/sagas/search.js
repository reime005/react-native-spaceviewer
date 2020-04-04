import { call, put, select, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as selectors from './selectors';
import * as apiConstants from '../constants/api';
import {
  searchSetClearAction,
  searchSetResultAction,
  searchSetTextAction,
  searchConcatResultAction,
} from '../actions';
import { changeImageUrlWithCached } from './cache';

export function* searchOnChangeText(action) {
  const { searchText } = action;

  yield put(searchSetTextAction(searchText));

  let launches = yield call(fetchSearchData, searchText);

  if (Array.isArray(launches)) {
    launches = yield call(changeImageUrlWithCached, launches);
    yield put(searchSetResultAction(launches));
  }
}

export function* searchClear() {
  yield put(searchSetClearAction());
}

export function* searchEndReached() {
  const searchText = yield select(selectors.getSearchText);
  const offset = yield select(selectors.getSearchResultLength);

  if (typeof searchText === 'string') {
    let launches = yield call(fetchSearchData, searchText, offset);
    launches = yield call(changeImageUrlWithCached, launches);

    yield put(searchConcatResultAction(launches));
  }
}

function* fetchSearchData(name = '', offset = 0) {
  const mode = apiConstants.DEFAULT_PARAM_MODE;

  try {
    const res = yield fetch(
      `${apiConstants.URI_SEARCH_LAUNCHES}?name=${name}&offset=${offset}&sort=desc&limit=20&mode=${mode}`,
    );

    const data = yield res.json();

    if (data && data.launches) {
      return data.launches;
    }
  } catch (e) {
    //TODO: error handling
    console.log(e);
  }

  return [];
}
