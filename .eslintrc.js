module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@babel/eslint-parser'
  },
  env: {
    node: true,
    'cypress/globals': true,
    es6: true
  },
  plugins: ['cypress'],
  extends: ['eslint:recommended'],
  rules: {
    'cypress/no-assigning-return-values': 'warn',
    'cypress/no-unnecessary-waiting': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-force': 'warn',
    'no-unused-vars': ['error'],
    'no-var': 'error',
    eqeqeq: 'warn',
    'prefer-template': 'error',
    camelcase: 'warn',
    quotes: ['error', 'single'],
    indent: ['error', 2, { 'SwitchCase': 1 }],
    semi: ['error', 'always'],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', { 'functions': 'never' }],
    'linebreak-style': ['error', 'unix'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'eol-last': ['error', 'always']
  }
};
