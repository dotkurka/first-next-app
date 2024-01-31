const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  extends: [
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'eslint:recommended',
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
    // need to exclude parent node modules from import/named rule
    // https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/named.md#settings
    'import/ignore': ['node_modules'],
  },
  plugins: ['react', 'import', 'unused-imports'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: true,
      },
    ],
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-default-export': 'off',
    'turbo/no-undeclared-env-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@tanstack/query/stable-query-client': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unicorn/no-empty-file': 'error',
    'no-unused-vars': 'warn',
    'import/no-cycle': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        // react components should be in PascalCase
        // and react hooks should be in camelCase
        ignore: ['^use.+\\.ts$', '^.+\\.tsx$'],
      },
    ],
    'import/order': [
      1,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
  },
  ignorePatterns: ['node_modules/', 'dist/'],
};
