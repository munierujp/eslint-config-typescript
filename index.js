// @ts-check

// eslint-disable-next-line jsdoc/valid-types -- https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
/** @typedef {import('eslint').ESLint.ConfigData} ConfigData */

/** @type {ConfigData['rules']} */
const unicornRules = {
  // ファイル名のケースはものによって異なる（関数はローワーキャメルケース、クラスはアッパーキャメルケースなど）ので無効化
  'unicorn/filename-case': 'off',
  // Array.prototype.forEach() を使うのは理にかなっているので無効化
  'unicorn/no-array-for-each': 'off',
  // undefinedを明示的に書くのは理にかなっているので無効化
  'unicorn/no-useless-undefined': 'off',
  // 数値を 1_000 のように書くと読みやすいケースもあるもののそうではないケースもあるので無効化
  'unicorn/numeric-separators-style': 'off',
  // セレクタによって要素の取得メソッドを使いわけるのは理にかなっているので無効化
  'unicorn/prefer-query-selector': 'off',
  // Array.from() を使うのは理にかなっているので無効化
  'unicorn/prefer-spread': 'off',
  // 一般的に定着しているような略語を省略せずに書くのは冗長なので無効化
  'unicorn/prevent-abbreviations': 'off',
  // switch文のcase節を常にブロックにするのは冗長なので必要なときのみブロックにする
  'unicorn/switch-case-braces': ['error', 'avoid']
}

/** @type {ConfigData['rules']} */
const sonarjsRules = {
  // 同じ文字列だからといって必ずしも共通化すべきとは限らないので無効化
  'sonarjs/no-duplicate-string': 'off'
}

/** @type {ConfigData['rules']} */
const importRules = {
  // 標準のソートを無効化
  'sort-imports': 'off',
  // アルファベット順にソート
  'import/order': ['error', {
    alphabetize: {
      order: 'asc',
      caseInsensitive: true
    }
  }],
  // 項目ごとに改行を強制
  'import-newlines/enforce': ['error', {
    items: 1,
    semi: false
  }]
}

/**
 * @type {ConfigData}
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 */
const config = {
  extends: [
    '@eslint-recommended/eslint-config-typescript'
  ],
  plugins: [
    'import-newlines'
  ],
  rules: {
    ...unicornRules,
    ...sonarjsRules,
    ...importRules
  }
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = config
