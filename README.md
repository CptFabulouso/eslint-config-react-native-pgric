# eslint-config-react-native-pgric

ESLint and TypeScript configuration for React Native

## Install

`yarn add @pavelgric/eslint-config-react-native --dev`

## Use

in `.eslintrc`

```js
{
  "extends": "@pavelgric/eslint-config-react-native"
}
```

matching `.prettierrc.js`

```js
module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  semi: true,
};
```

## Additionally to use tsconfig.json

{
  "extends": "@pavelgric/eslint-config-react-native/tsconfig.base"
}
