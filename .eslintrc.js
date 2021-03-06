module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
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
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "react/prefer-stateless-function": "off",
    "max-len": "off",
    "no-undef": "off",
    "no-useless-constructor": "off",
    "react/button-has-type": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "prefer-destructuring": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/no-unused-state": "off",
    "no-alert": "off",
    "no-unused-vars": "off",
    "max-classes-per-file": "off",
    "no-mixed-operators": "off",
    "react/no-access-state-in-setstate": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "no-restricted-syntax": "off",
    "no-labels": "off",
    "no-unused-labels": "off",
    "class-methods-use-this": "off",
    "no-plusplus": "off",
    "no-use-before-define": "off",
    "consistent-return": "off",
    "no-case-declarations": "off",
  },
};
