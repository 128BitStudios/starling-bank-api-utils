module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'prettier/prettier': 'error',
    quotes: [2, 'single', 'avoid-escape'],
  },
  plugins: ['@typescript-eslint', 'prettier'],
};
