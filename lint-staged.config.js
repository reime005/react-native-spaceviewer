module.exports = {
  '*.{js,jsx}': ['eslint --fix', 'git add', 'jest --bail --findRelatedTests'],
};
