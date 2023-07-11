module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: { version: 'detect' }
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    'space-before-function-paren': ['warn', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'object-shorthand': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/no-children-prop': 'off',
  }
}
