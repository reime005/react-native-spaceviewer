import AsyncStorage from '@react-native-community/async-storage';

/**
 *
 * @param {String} key
 * @param {String} value
 * @param {Function} [errorCallback]
 * @returns {Promise}
 */
export const setItemToStore = async (key, value, errorCallback) =>
  AsyncStorage.setItem(key, value, errorCallback);

/**
 *
 * @param {String} key
 * @param {Function} [callback] - (error: ?Error, result: ?string) => void
 * @returns {Promise}
 */
export const getItemFromStore = async (key, callback) =>
  AsyncStorage.getItem(key, callback);

/**
 *
 * @param {String} key
 * @param {Function} [errorCallback]
 * @returns {Promise}
 */
export const deleteItemFromStore = async (key, errorCallback) =>
  AsyncStorage.removeItem(key, errorCallback);
