[![npm version](https://badge.fury.io/js/%40munierujp%2Feslint-config-typescript.svg)](https://badge.fury.io/js/%40munierujp%2Feslint-config-typescript)
[![ESLint Recommended](https://img.shields.io/badge/eslint-recommended-%234B32C3)](https://github.com/eslint-recommended)

# @munierujp/eslint-config-typescript

ESLint Shareable Config for TypeScript

## Installation

npm:

```sh
npm i -D @munierujp/eslint-config-typescript
```

Yarn:

```sh
yarn add -D @munierujp/eslint-config-typescript
```

## Usage

Add `@munierujp/eslint-config-typescript` to `extends` of your ESLint config.

```js
module.exports = {
  extends: [
    '@munierujp/eslint-config-typescript'
    // add other rulesets here if needed
  ],
  rules: {
    // override/add rules settings here if needed
  }
}
```

## Related packages

- [@munierujp/eslint-config](https://www.npmjs.com/package/@munierujp/eslint-config)
