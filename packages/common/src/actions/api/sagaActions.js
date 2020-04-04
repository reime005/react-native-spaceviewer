export const LOAD_NEXT_LAUNCHES = 'LOAD_NEXT_LAUNCHES';
export const LIST_END_REACHED = 'LIST_END_REACHED';
export const LIST_REFRESH = 'LIST_REFRESH';
export const OPEN_FIRST_MAP_LOCATION = 'OPEN_FIRST_MAP_LOCATION';
export const OPEN_URL = 'OPEN_URL';

export function loadNextLaunchesSagaAction(
  launchType,
  next,
  offset,
  mode,
  fields,
) {
  return {
    type: LOAD_NEXT_LAUNCHES,
    launchType,
    next,
    offset,
    mode,
    fields,
  };
}

export function listEndReachedSagaAction(launchType) {
  return {
    type: LIST_END_REACHED,
    launchType,
  };
}

export function listRefreshSagaAction(launchType) {
  return {
    type: LIST_REFRESH,
    launchType,
  };
}

export function openFirstMapLocationSagaAction(pads) {
  return {
    type: OPEN_FIRST_MAP_LOCATION,
    pads,
  };
}

export function openURLSagaAction(url) {
  return {
    type: OPEN_URL,
    url,
  };
}
