module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'quotes': ['error', 'single'],
    'eol-last': ['error', 'always'],
  },
};
