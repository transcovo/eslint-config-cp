'use strict';

module.exports = {
  extends: [
    'airbnb/base',
  ],
  plugins: [
    'metrics'
  ],
  rules: {
    'metrics/metrics-definition': 1,
    'metrics/metrics-documentation': 1,
    'no-use-before-define': [2, 'nofunc',
    ],
    'vars-on-top': 2,
    'no-param-reassign': 2,
    'valid-jsdoc': 1,
    'require-jsdoc': 1,
    'comma-dangle': [2, 'always',
    ],
    'comma-style': 1,
    'no-underscore-dangle': [2,
    ],
    'newline-per-chained-call': [2,
    ],
    'import/no-extraneous-dependencies': [2, { devDependencies: true, },
    ],
    strict: [2, 'global',
    ],
    'arrow-parens': [1,
    ],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'require-await': 2,
  },
  ecmaFeatures: {
    generators: true,
    impliedStrict: true,
  },
  globals: {
    describe: true,
    it: true,
    xdescribe: true,
    xit: true,
    before: true,
    after: true,
    beforeEach: true,
    afterEach: true,
  },
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'global',
  },
};
