# buchiya4th.github.io

## 開発フロー

``` bash
# 開発ブランチへ移動
$ git checkout source

# パッケージのインストール
$ yarn

# 開発環境の起動
$ yarn dev

# Lint
$ yarn lint

# Lint Fix
$ yarn lint-fix

# 本番用データの生成
$ yarn generate

# リモートリポジトリへpush
$ git push origin 作業ブランチ

# リモートリポジトリでPR・マージ（作業ブランチ → source）

# Travis CIが自動デプロイ（source → master)
```

## デプロイフロー

1. `yarn generate` したデータをpushする
2. `source` ブランチへPR & マージする

``` bash
# 本番用データの生成（/docsを使用する）
$ yarn generate

$ git add .

$ git commit -m <commit message>

$ git push <branch name>
```