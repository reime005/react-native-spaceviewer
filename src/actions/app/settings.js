export const SETTINGS_SAVE_VALUE = 'SETTINGS_SAVE_VALUE';
export const SETTINGS_REHYDRATE = 'SETTINGS_REHYDRATE';
export const SETTINGS_SET_VALUE = 'SETTINGS_SET_VALUE';

export function settingsSetValueAction(key, value) {
  return {
    type: SETTINGS_SET_VALUE,
    key,
    value,
  };
}

export function settingsSaveValueSagaAction(key, value) {
  return {
    type: SETTINGS_SAVE_VALUE,
    key,
    value,
  };
}

export function settingsRehydrateSagaAction() {
  return {
    type: SETTINGS_REHYDRATE,
  };
}
