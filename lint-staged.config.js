module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'git add',
    'jest --bail --findRelatedTests',
  ],
};
