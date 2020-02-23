export const LOAD_NEXT_LAUNCHES_FAIL = 'LOAD_NEXT_LAUNCHES_FAIL';
export const SET_LAUNCHES = 'SET_LAUNCHES';
export const CONCAT_LAUNCHES = 'CONCAT_LAUNCHES';
export const SET_PREV_LAUNCHES = 'SET_PREV_LAUNCHES';
export const CONCAT_PREV_LAUNCHES = 'CONCAT_PREV_LAUNCHES';

export const SET_PREV_ENDDATE = 'SET_PREV_ENDDATE';

export function setLaunchesAction(launches, launchType) {
  return {
    type: SET_LAUNCHES,
    launches,
    launchType,
  };
}

export function setPrevEnddateAction(enddate) {
  return {
    type: SET_PREV_ENDDATE,
    enddate,
  };
}

export function concatLaunchesAction(launches, launchType) {
  return {
    type: CONCAT_LAUNCHES,
    launches,
    launchType,
  };
}

export function setNextLaunchesFailAction() {
  return {
    type: LOAD_NEXT_LAUNCHES_FAIL,
  };
}
