import { call, put } from 'redux-saga/effects';

import { settingsSetValueAction } from '../actions';
import * as settingsKeys from '../constants/settings';
import { setItemToStore, getItemFromStore } from '../lib/storage';
import { defaultSettingForKey } from '../lib/storage/defaultSettingForKey';

export function* saveValue(action) {
  const { key, value } = action;

  if (!key || !value) {
    return;
  }

  try {
    const response = yield call(setItemToStore, key, value);
    yield put(settingsSetValueAction(key, value));
  } catch (error) {
    console.log(error);
  }
}

export function* rehydrateSettings() {
  const keys = Object.values(settingsKeys);
  let value = {};

  for (let i = 0; i < keys.length; i++) {
    try {
      const key = keys[i];
      value = yield call(getItemFromStore, key);

      if (!value) {
        value = yield call(defaultSettingForKey, key);
        yield call(saveValue, { key, value });
        // return;
      }
      yield put(settingsSetValueAction(key, value));
    } catch (error) {
      console.log(error);
    }
  }

  return {};
}
