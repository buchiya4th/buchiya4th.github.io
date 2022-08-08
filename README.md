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

``` bash
# 本番用データの生成（/docsに生成して使用する）
$ yarn generate

$ git add .

$ git commit -m "xxxxx"

$ git push origin <branch name>
```
