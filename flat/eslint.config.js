const { defineConfig } = require('eslint/config');

const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

const typescriptEslint = require('@typescript-eslint/eslint-plugin');

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      'comma-dangle': 0,
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/no-explicit-any': 1,
      'no-unused-vars': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/ban-ts-comment': 'off',

      'no-console': [
        'error',
        {
          allow: ['warn'],
        },
      ],

      'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
      curly: 2,

      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],

      'no-inner-declarations': 2,

      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],

      'import/no-extraneous-dependencies': 2,
      'import/no-unused-modules': 0,
      'import/prefer-default-export': 0,
      'import/no-useless-path-segments': 2,
      'import/no-duplicates': 2,
      'import/imports-first': 2,
      'import/named': 0,
      'import/no-amd': 2,
      'import/no-unresolved': 0,
      'import/no-commonjs': 'error',
      'import/no-named-as-default-member': 0,

      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            ['internal', 'sibling', 'parent', 'index'],
          ],

          alphabetize: {
            order: 'asc',
          },

          pathGroupsExcludedImportTypes: [],
          'newlines-between': 'always',
        },
      ],
    },

    settings: {
      'import/external-module-folders': ['node_modules'],

      'import/resolver': {
        node: {
          moduleDirectory: ['src'],

          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.d.ts',
            '.android.js',
            '.android.jsx',
            '.android.ts',
            '.android.tsx',
            '.ios.js',
            '.ios.jsx',
            '.ios.ts',
            '.ios.tsx',
            '.web.js',
            '.web.jsx',
            '.web.ts',
            '.web.tsx',
          ],
        },
      },
    },
  },
]);
