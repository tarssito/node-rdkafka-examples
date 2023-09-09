module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      'prettier',
      'import',
      '@typescript-eslint'
    ],
    parserOptions: {
      project: './tsconfig.json',
    },
    extends: [
      'eslint@recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      'arrow-body-style': ['error', 'always'],
      'prettier/prettier': 'error',
      'prefer-object-spread': 'off',
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'func-names': 'off',
      'no-process-exit': 'off',
      'object-shorthand': 'off',
      'class-methods-use-this': 'off',
      'no-restricted-syntax': 'off'
    },
  }
  