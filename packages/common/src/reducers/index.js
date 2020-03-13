import { combineReducers } from 'redux';

import { appLoading } from './ui';
import { app, nav, settingsReducer } from './app';
import { api } from './api';
import { searchReducer } from './search';

export const rootReducer = combineReducers({
  ui: combineReducers({
    appLoading,
  }),
  settings: settingsReducer,
  app,
  nav,
  api,
  search: searchReducer,
});
