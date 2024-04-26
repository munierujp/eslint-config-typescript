[![npm version](https://badge.fury.io/js/%40munierujp%2Feslint-config-typescript.svg)](https://badge.fury.io/js/%40munierujp%2Feslint-config-typescript)
[![lint](https://github.com/munierujp/eslint-config-typescript/actions/workflows/lint.yml/badge.svg)](https://github.com/munierujp/eslint-config-typescript/actions/workflows/lint.yml)
[![ESLint Recommended](https://img.shields.io/badge/eslint-recommended-%234B32C3)](https://github.com/eslint-recommended)

# @munierujp/eslint-config-typescript

ESLint Shareable Config for TypeScript

## Requirements

- Node.js v20 or later
- ESLint v8

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
