/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  resolver: {
    blacklistRE: blacklist([
      /android\/.*/,
      /node_modules\/.*\/node_modules\/react-native\/.*/,
      /e2e\/.*/,
    ]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
