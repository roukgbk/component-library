module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended', // 使用 ESLint 内置规则
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
    'comma-dangle': ['error', { // 将规则设置为 error 级别
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    'no-unused-vars': ['error', { // 将规则设置为 error 级别
      vars: 'all',
      args: 'none',
      ignoreRestSiblings: false,
      varsIgnorePattern: '^React$'
    }],
    'space-before-function-paren': ['error', { // 将规则设置为 error 级别
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'object-shorthand': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/no-children-prop': 'off',
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'], // 针对测试文件
      rules: {
        'no-unused-expressions': 'off', // 禁用 no-unused-expressions 规则
      },
    },
  ],
}