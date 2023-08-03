module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'prettier'],
  plugins: ['import', 'sort-keys-fix', 'typescript-sort-keys', 'unused-imports'],
  rules: {
    'import/order': [ //importの読み込み順のルール
      'error',
      {
        groups: ['builtin', 'type', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          "caseInsensitive": true
        },
        'newlines-between': 'always',
      },
    ],
    'import/no-duplicates': 'error', // 同じモジュールから複数の変数をインポートしている場合、エラーを出す
    '@next/next/no-img-element': 'error',
    'react/jsx-sort-props': 'error', // JSXの属性をアルファベット順にソート
    'sort-keys-fix/sort-keys-fix': 'error', // オブジェクトのキーをアルファベット順に自動でソート
    'typescript-sort-keys/interface': 'error', // TypeScriptのインターフェースのキーをアルファベット順に自動でソート
    'unused-imports/no-unused-imports': 'error', // 使っていないimportは削除
    "react-hooks/exhaustive-deps": "off",
    // アロー関数のみ許容（お好みで）
    // 'react/function-component-definition': [
    //   2,
    //   {
    //     namedComponents: 'arrow-function',
    //     unnamedComponents: 'arrow-function',
    //   },
    // ],
    'no-param-reassign': [2, { props: false }], //パラメーターのプロパティ変更を許可
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }], //型はimport typeで表示
  },
};