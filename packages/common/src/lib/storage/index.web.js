/**
 *
 * @param {String} key
 * @param {String} value
 * @param {Function} [errorCallback]
 * @returns {Promise}
 */
export const setItemToStore = async (key, value) =>
  localStorage.setItem(key, value);

/**
 *
 * @param {String} key
 * @param {Function} [callback] - (error: ?Error, result: ?string) => void
 * @returns {Promise}
 */
export const getItemFromStore = async key => localStorage.getItem(key);

/**
 *
 * @param {String} key
 * @param {Function} [errorCallback]
 * @returns {Promise}
 */
export const deleteItemFromStore = async (key, errorCallback) =>
  localStorage.removeItem(key);
