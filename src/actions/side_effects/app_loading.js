const pfx = 'side_effects/app_loading/';

/* ========= Actions ========= */

export const LOAD_APP_RESOURCES = pfx + 'LOAD_APP_RESOURCES';
export const LOAD_APP_RESOURCES_STARTED = pfx + 'LOAD_APP_RESOURCES_STARTED';
export const LOAD_APP_RESOURCES_SUCCESS = pfx + 'LOAD_APP_RESOURCES_SUCCESS';
export const LOAD_APP_RESOURCES_ERROR = pfx + 'LOAD_APP_RESOURCES_ERROR';

/* ========= Action Creators ========= */

/**
 * Load Static resources e.g. images and fonts into the cached.
 * Prefetch remote resources (e.g. languages, app version info etc.).
 * Get stored auth token from local storageKeys (if any).
 * @param {Array} assets - A list of required assets, eg. [ require('./images/some.png') ]
 * @param {Object} fonts - A list of required fonts, eg. [ 'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf') ]
 */
export const loadAppResources = (assets=[], fonts={}) => ({
    type: LOAD_APP_RESOURCES,
    assets,
    fonts
});

export default {
    LOAD_APP_RESOURCES,
    LOAD_APP_RESOURCES_STARTED,
    LOAD_APP_RESOURCES_SUCCESS,
    LOAD_APP_RESOURCES_ERROR,

    loadAppResources
};