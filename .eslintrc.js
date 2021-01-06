module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'max-len': [
      'error',
      {
        code: 150,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        vue: 'never',
        js: 'never',
      },
    ],
  },
};
