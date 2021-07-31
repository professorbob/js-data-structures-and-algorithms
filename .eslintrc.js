module.exports = {
  env: {
    node: true,
    es6: true
  },
  plugins: ['eslint-plugin-prettier', 'jest'],
  extends: ['eslint-config-prettier', 'plugin:jest/recommended'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-undef': 2,
    semi: [2, 'always'],
    'comma-dangle': [2, 'never'],
    quotes: [2, 'single', 'avoid-escape'],
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-unused-vars': [
      2,
      {
        vars: 'local',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js']
      }
    }
  }
};
