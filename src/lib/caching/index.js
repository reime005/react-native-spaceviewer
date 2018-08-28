// import { Asset, Font } from 'expo';
import { getItemFromStore } from '../storage';
import FastImage from 'react-native-fast-image';

/**
 * Load images and fonts into the cache.
 * @param {Array} assets - A list of required assets, eg. [ require('./images/some.png') ]
 * @param {Object} fonts - A list of required fonts, eg. [ 'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf') ]
 * @returns {Promise} Resolve when all child Promises resolved
 */
export const loadResourcesAsync = async (assets = [], fonts = {}) => {
    return Promise.all([
        loadAsync(assets),
        loadAsync(fonts),
    ]);
}

const loadAsync = (files = []) => {
  // FastImage.preload([
  //   require('../../../assets/images/splash.png')
  // ])
}

/**
 * Load asset from the cache.
 * @param {Number} module - required asset e.g. [ require('./images/some.png') ] 
 */
// export const loadCachedAsset = (module) => require(module);