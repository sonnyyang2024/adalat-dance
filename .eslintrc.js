module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // js rules
    'comma-dangle': 0,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'brace-style': 0,
    'padded-blocks': 0,

    // import rules
    'import/prefer-default-export': 0,

    // react rules
    'react/forbid-prop-types': 0,

    // jsx rules
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx'
        ]
      }
    ],
    'react/jsx-fragments': 0
  }
};
