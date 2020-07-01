const tmpData = {};

/**
 *
 * @param {String} key
 * @param {String} value
 * @param {Function} [errorCallback]
 * @returns {Promise}
 */
export const setItemToStore = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    tmpData[key] = value;
  }
}


/**
 *
 * @param {String} key
 * @param {Function} [callback] - (error: ?Error, result: ?string) => void
 * @returns {Promise}
 */
export const getItemFromStore = key => {
  try {
    const ret = localStorage.getItem(key);
    return ret;
  } catch (error) {
    return tmpData[key] || null;
  }
}

/**
 *
 * @param {String} key
 * @param {Function} [errorCallback]
 */
export const deleteItemFromStore = (key, errorCallback) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    delete tmpData[key];
  }
}

