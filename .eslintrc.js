// eslint-disable-next-line import/no-commonjs
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-console': ['error', { allow: ['warn'] }],
    'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
    curly: 2,
    'react-native/no-inline-styles': 0,
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
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
        pathGroups: [
          {
            pattern: '@app/**',
            group: 'internal',
          },
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
};
