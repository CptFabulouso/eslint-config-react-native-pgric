// eslint-disable-next-line import/no-commonjs
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    'comma-dangle': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-console': ['error', { allow: ['warn'] }],
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
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          // un-ban a type that's banned by default
          '{}': false,
        },
        extendDefaults: true,
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
