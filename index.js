module.exports = {
  extends: [
    'airbnb/base'
  ],
  rules: {
    'no-use-before-define': [2, 'nofunc'],
    'vars-on-top': 0,
    'comma-dangle': 0,
    'no-param-reassign': 0
    'strict': 0
  },
  ecmaFeatures: {
    'generators': true
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
  }
};
