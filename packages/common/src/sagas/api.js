import { call, putResolve, race, select } from 'redux-saga/effects';
import * as actions from '../actions';
import * as apiConstants from '../constants/api';
import * as fileKeys from '../constants/files';
import { getItemFromStore, setItemToStore } from '../lib/storage';
import getApiDateDaysAgo from '../lib/time/getApiDateDaysAgo';
import getApiDateToday from '../lib/time/getApiDateToday';
import { changeImageUrlWithCached } from './cache';
import * as selectors from './selectors';

export function* loadNextLaunches(action) {
  const { launchType } = action;

  // initially load from store
  let launches = yield call(getItemFromStore, launchType);
  launches = JSON.parse(launches);
  launches = yield call(changeImageUrlWithCached, launches);
  yield putResolve(actions.setLaunchesAction(launches, launchType));

  if (launchType === fileKeys.FILE_NEXT_LAUNCHES) {
    launches = yield call(fetchReturnNextLaunches, action);
  } else if (launchType === fileKeys.FILE_PREV_LAUNCHES) {
    const enddate = getApiDateToday();
    yield putResolve(actions.setPrevEnddateAction(enddate));
    launches = yield call(fetchReturnPrevLaunches, { ...action, enddate });
  }

  // persist for later offline loading
  if (Array.isArray(launches) && launches.length > 0) {
    yield call(setItemToStore, launchType, JSON.stringify(launches));
  } else {
    // TODO: review
    launches = yield call(getItemFromStore, launchType);
    launches = JSON.parse(launches);
  }

  launches = yield call(changeImageUrlWithCached, launches);

  yield putResolve(actions.setLaunchesAction(launches, launchType));

  return {};
}

function* fetchReturnNextLaunches(action) {
  const next = action.next || apiConstants.DEFAULT_PARAM_NEXT;
  const offset = action.offset || apiConstants.DEFAULT_PARAM_OFFSET;
  const fields = action.fields || apiConstants.DEFAULT_PARAM_FIELDS;
  const mode = action.mode || apiConstants.DEFAULT_PARAM_MODE;
  let launches = [];

  // fetch the initial sequence
  try {
    const res = yield fetch(
      `${apiConstants.URI_NEXT_LAUNCHES}?next=${next}&offset=${offset}&mode=${mode}`,
    );

    const data = yield res.json();

    if (data && data.launches) {
      return data.launches;
    }
  } catch (e) {
    //TODO: error handling
    // console.error(e)
    // yield put(setNextLaunchesFailAction());
  }

  return launches;
}

function* fetchReturnPrevLaunches(action) {
  let { enddate } = action;

  if (!enddate) {
    enddate = yield select(selectors.getPrevEnddate);
  }

  const limit = apiConstants.DEFAULT_PARAM_PREV_LIMIT;
  const mode = action.mode || apiConstants.DEFAULT_PARAM_MODE;
  let prevLaunches = [];

  let startdate = yield call(getApiDateDaysAgo, enddate);

  yield putResolve(actions.setPrevEnddateAction(startdate));

  if (!startdate || !enddate) {
    return;
  }

  // fetch the initial sequence
  try {
    const res = yield fetch(
      `${apiConstants.URI_PREV_LAUNCHES}?startdate=${startdate}&enddate=${enddate}&limit=${limit}&sort=desc&mode=${mode}`,
    );

    const data = yield res.json();

    if (data && data.launches) {
      return data.launches;
    }
  } catch (e) {
    //TODO: error handling
    // console.error(e);
    // yield put(setNextLaunchesFailAction());
  }

  yield putResolve(actions.setPrevEnddateAction(startdate));

  return prevLaunches;
}

export function* endReached(action) {
  const { launchType } = action;

  let launches = [];

  if (launchType === fileKeys.FILE_NEXT_LAUNCHES) {
    const offset = yield select(selectors.getCurrentLaunchesLength);
    launches = yield call(fetchReturnNextLaunches, { offset });
  } else if (launchType === fileKeys.FILE_PREV_LAUNCHES) {
    const enddate = yield select(state => state.api.enddate);
    launches = yield call(fetchReturnPrevLaunches, { enddate });
  }

  if (Array.isArray(launches) && launches.length > 0) {
    launches = yield call(changeImageUrlWithCached, launches);

    yield putResolve(actions.concatLaunchesAction(launches, launchType));
  }
}

export function* refresh(action) {
  const { launchType } = action;

  yield putResolve(actions.setLaunchesAction([], launchType));
  yield putResolve(actions.setPrevEnddateAction(''));

  // yield call(delay, REFRESH_DELAY_MS)

  yield call(loadNextLaunches, { launchType });
}
