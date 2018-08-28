import { call, put, race, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
    LOAD_APP_RESOURCES_STARTED,
    LOAD_APP_RESOURCES_SUCCESS,
    LOAD_APP_RESOURCES_ERROR,
    loadNextLaunchesSagaAction,
    settingsRehydrateSagaAction,
} from '../actions';

import { storageKeys } from '../constants/keys';
import { loadResourcesAsync } from '../lib/caching';
import { getItemFromStore } from '../lib/storage';
import { FILE_NEXT_LAUNCHES, FILE_PREV_LAUNCHES } from '../constants/files';
import { rehydrateSettings } from './settings';
import { loadNextLaunches } from './api';

/**
 * App Loading Saga
 */
export const handleAppLoading = function* handleAppLoading({ assets, fonts }) {
    yield put({ type: LOAD_APP_RESOURCES_STARTED });

    try {
        const { res, timeout } = yield race({
            res: all({
                // timeout: call(delay, 2000), //TODO: may remove this...
                static: call(loadResourcesAsync, assets, fonts),
                settingsLoaded: call(rehydrateSettings),
                nextLoaded: call(loadNextLaunches, { launchType: FILE_NEXT_LAUNCHES }),
                prevLoaded: call(loadNextLaunches, { launchType: FILE_PREV_LAUNCHES })
            }),
            timeout: call(delay, 7000),
        });
        //TODO: async loading
        
        if(res) {
            yield put({ 
                type: LOAD_APP_RESOURCES_SUCCESS, 
                // authToken: res.authToken,
                // appState: JSON.parse(res.appState),
            });
        } else {
            // if timeout, throw an error to catch block
            throw new Error('Time out');
        }        
    } catch (error) {
        yield put({ type: LOAD_APP_RESOURCES_ERROR, error });
    }
}