module.exports = {
  extends: [
    'airbnb/base'
  ],
  rules: {
    'no-use-before-define': [2, 'nofunc'],
    'vars-on-top': 0,
    'comma-dangle': 0,
    'no-param-reassign': 0,
    'valid-jsdoc': 1,
    'require-jsdoc': 1,
    'comma-dangle': [2, 'never'],
    'no-underscore-dangle': [0],
    'newline-per-chained-call': [0],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'strict': [2, 'global'],
    'arrow-parens': [0],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ]
  },
  ecmaFeatures: {
    'generators': true,
    'impliedStrict': true
  },
  globals: {
    'describe': true,
    'it': true,
    'xdescribe': true,
    'xit': true,
    'before': true,
    'after': true,
    'beforeEach': true,
    'afterEach': true
  },
  'env': {
    'es6': true,
    'node': true,
    'mocha': true
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'global'
},
};
