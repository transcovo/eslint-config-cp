'use strict';

module.exports = {
  extends: [
    'airbnb/base'
  ],
  plugins: [
    'metrics'
  ],
  rules: {
    'metrics/metrics-definition': 1,
    'metrics/metrics-documentation': 0,
    'no-use-before-define': [2, 'nofunc'],
    'vars-on-top': 0,
    'no-param-reassign': 0,
    'valid-jsdoc': 1,
    'require-jsdoc': 1,
    'comma-dangle': [1, 'always-multiline'],
    'no-underscore-dangle': [0],
    'newline-per-chained-call': [0],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    strict: [2, 'global'],
    'arrow-parens': [0],
    'object-curly-newline': [2,
      { 'consistent': true }
    ],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'require-await': 2
  },
  globals: {
    describe: true,
    it: true,
    xdescribe: true,
    xit: true,
    before: true,
    after: true,
    beforeEach: true,
    afterEach: true
  },
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'global'
  }
};
