module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: ['error', 'never'],
    'react-native/no-inline-styles': [0],
    'react/self-closing-comp': [0],

    // don't require .vue extension when importing
    'import/extensions': [0],
    'import/order': [0],
    'import/no-unresolved': [0],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [0],
    'import/no-named-as-default': [0],
    'import/no-duplicates': [0],
    'import/no-named-as-default-member': [0],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,
    'no-empty': 0,
    'no-param-reassign': 0,
    'linebreak-style': [0],
    'no-plusplus': [0],
    'max-len': [0],
    'no-multiple-empty-lines': [0],
    'no-unused-vars': [0],
    'no-shadow': [0],
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    camelcase: 0,
    'array-callback-return': 0,
    'prefer-destructuring': 0,
  },
  globals: {
    global: true,
    storage: true,
    store: true,
    api: true,
  },
}
