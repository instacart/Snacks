const path = require('path')

const ERROR = 'error'
const WARN = 'warn'
const OFF = 'off'

module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['@instacart/eslint-config'],
  rules: {
    'no-plusplus': [
      ERROR,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    // Fails on non literal roles attrs. Set to error after this is released:
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/pull/572
    'jsx-a11y/no-static-element-interactions': WARN,
    'react/no-string-refs': OFF,
    'react/no-find-dom-node': OFF,
    'react/no-multi-comp': [ERROR, { ignoreStateless: true }],
    'react/no-unused-prop-types': WARN,
    'react/forbid-prop-types': [WARN, { forbid: 'any' }],
    'react/jsx-filename-extension': OFF,
    'react/jsx-no-literals': OFF,

    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['scripts/**/*.js', '**/*.spec.js'] },
    ],
  },
  globals: {
    __DEV__: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'webpack.config.js'),
      },
    },
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'react/prefer-stateless-function': OFF,
        'import/named': OFF,
      },
    },
  ],
}
