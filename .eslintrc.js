module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    }
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  env: {
    node: true,
    es6: true
  },
  // plugins: ['import', 'promise', 'standard', 'vue'],
  globals: {
    console: false,
    document: false,
    navigator: false,
    window: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // vue rules
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-unused-vars': 'off',
    'vue/require-prop-types': 'off',
    'vue/max-attributes-per-line': 'off'
  }
};
