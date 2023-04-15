module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 0,
    'no-alert': 0,
    'linebreak-style': ['off', 'windows'],
    'operator-linebreak': 0,
  },
};
// Piotr
// {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: 'eslint:recommended',
//   overrides: [],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   rules: {
//     indent: ['error', 4],
//     'linebreak-style': ['error', 'windows'],
//     quotes: ['error', 'single'],
//     semi: ['error', 'always'],
//   },
// };
