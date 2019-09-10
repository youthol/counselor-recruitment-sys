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
  // 规则相关解释请查看 http://eslint.cn/docs/rules/
  rules: {
    'array-bracket-newline': [2, 'consistent'],
    'array-bracket-spacing': 0,
    'array-callback-return': 2,
    'array-element-newline': 0,
    'arrow-parens': 0,
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'block-spacing': 0,
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'comma-dangle': 0,
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'computed-property-spacing': 2,
    'consistent-this': [2, 'self', 'that'],
    curly: [2, 'multi-line', 'consistent'],
    'default-case': 2,
    'dot-location': 1,
    'eol-last': 2,
    eqeqeq: [2, 'always', { null: 'ignore' }],
    'func-call-spacing': 1,
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: false
      }
    ],
    indent: 0,
    'key-spacing': [
      1,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'multiline-ternary': [1, 'always-multiline'],
    'max-len': [1, { code: 100 }],
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 4 }],
    'no-alert': 1,
    'no-compare-neg-zero': 2,
    'no-const-assign': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-duplicate-imports': 2,
    'no-empty-function': 2,
    'no-eq-null': 0,
    'no-eval': 2,
    'no-extra-parens': [
      2,
      'all',
      {
        nestedBinaryExpressions: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false
      }
    ],
    'no-extra-semi': 2,
    'no-fallthrough': [2, { commentPattern: '.' }],
    'no-inner-declarations': [2, 'both'],
    'no-loop-func': 1,
    'no-mixed-operators': [
      2,
      {
        groups: [['&&', '||']]
      }
    ],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-return-await': 2,
    'no-this-before-super': 2,
    'no-trailing-spaces': [
      2,
      {
        skipBlankLines: false,
        ignoreComments: true
      }
    ],
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
        caughtErrors: 'none'
      }
    ],
    'no-use-before-define': [
      2,
      {
        functions: false,
        classes: false
      }
    ],
    'no-var': 2,
    'no-with': 2,
    'nonblock-statement-body-position': 2,
    'object-curly-newline': [1, { multiline: true, consistent: true }],
    'object-curly-spacing': [1, 'always', { objectsInObjects: false }],
    'object-property-newline': 0,
    'object-shorthand': 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'require-await': 0,
    'require-yield': 2,
    'rest-spread-spacing': [2, 'never'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'semi-style': [2, 'last'],
    semi: 2,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'spaced-comment': [
      2,
      'always',
      {
        block: {
          exceptions: ['*'],
          balanced: true
        }
      }
    ],
    'switch-colon-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'yield-star-spacing': [2, 'before'],
    // vue rules
    'vue/html-closing-bracket-spacing': [
      2,
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-closing-bracket-newline': [
      2,
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
