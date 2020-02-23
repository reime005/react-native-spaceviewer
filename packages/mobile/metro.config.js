/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const blacklist = require('metro-config/src/defaults/blacklist');
const path = require('path');

module.exports = {
  projectRoot: path.resolve(__dirname, '../../'),
  resolver: {
    blacklistRE: blacklist([
      /packages\/mobile\/android\/.*/,
      /node_modules\/.*\/node_modules\/react-native\/.*/,
      /packages\/node_modules\/.*\/node_modules\/react-native\/.*/,
      /packages\/mobile\/e2e\/.*/,
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
