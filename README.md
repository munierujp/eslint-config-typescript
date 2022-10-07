[![npm version](https://badge.fury.io/js/%40munierujp%2Feslint-config-typescript.svg)](https://badge.fury.io/js/%40munierujp%2Feslint-config-typescript)
[![eslint](https://github.com/munierujp/eslint-config-typescript/actions/workflows/eslint.yml/badge.svg)](https://github.com/munierujp/eslint-config-typescript/actions/workflows/eslint.yml)

# @munierujp/eslint-config-typescript

ESLint Shareable Config for TypeScript

## Peer dependencies

- [@eslint-recommended/eslint-config-typescript](https://www.npmjs.com/package/@eslint-recommended/eslint-config-typescript)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-standard-with-typescript](https://www.npmjs.com/package/eslint-config-standard-with-typescript)
- [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-import-newlines](https://www.npmjs.com/package/eslint-plugin-impor-newlines)
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
- [typescript](https://www.npmjs.com/package/typescript)

## Usage

### Install packages

#### npm@>=7

Install `@munierujp/eslint-config-typescript`.

```sh
npm i -D @munierujp/eslint-config-typescript
```

#### npm@<7

Install `@munierujp/eslint-config-typescript` and its peer dependencies.

```sh
npm i -D \
  @eslint-recommended/eslint-config-typescript \
  @typescript-eslint/eslint-plugin \
  eslint \
  eslint-config-standard-with-typescript \
  eslint-plugin-eslint-comments \
  eslint-plugin-import \
  eslint-plugin-import-newlines \
  eslint-plugin-n \
  eslint-plugin-promise \
  eslint-plugin-unicorn \
  typescript \
  @munierujp/eslint-config-typescript
```

### Use in ESLint config

Add `@munierujp/eslint-config-typescript` to `extends` of your ESLint config.

```json
{
  "extends": [
    "@munierujp/eslint-config-typescript"
  ]
}
```
