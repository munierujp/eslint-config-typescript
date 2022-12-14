const unicornRules = {
  // ファイル名のケースはものによって異なる（関数はローワーキャメルケース、クラスはアッパーキャメルケースなど）ので無効化
  'unicorn/filename-case': 'off',
  // Array.prototype.forEach() を使うのは理にかなっているので無効化
  'unicorn/no-array-for-each': 'off',
  // undefinedを明示的に書くのは理にかなっているので無効化
  'unicorn/no-useless-undefined': 'off',
  // 数値を 1_000 のように書くと読みやすいケースもあるもののそうではないケースもあるので無効化
  'unicorn/numeric-separators-style': 'off',
  // 完全にESMにはできないので無効化
  'unicorn/prefer-module': 'off',
  // セレクタによって要素の取得メソッドを使いわけるのは理にかなっているので無効化
  'unicorn/prefer-query-selector': 'off',
  // Array.from() を使うのは理にかなっているので無効化
  'unicorn/prefer-spread': 'off',
  // TODO [engine:node@>=18]: Node.js v18以上になったら有効化
  'unicorn/prefer-top-level-await': 'off',
  // 一般的に定着しているような略語を省略せずに書くのは冗長なので無効化
  'unicorn/prevent-abbreviations': 'off',
  // switch文のcase節を常にブロックにするのは冗長なので必要なときのみブロックにする
  'unicorn/switch-case-braces': ['error', 'avoid']
}

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

module.exports = {
  extends: [
    '@eslint-recommended/eslint-config-typescript'
  ],
  plugins: [
    'import-newlines'
  ],
  rules: {
    ...unicornRules,
    ...importRules
  }
}
