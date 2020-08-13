# buchiya4th.github.io

## 開発フロー

``` bash
# 開発ブランチへ移動
$ git checkout develop

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
$ git push origin develop

# リモートリポジトリでPR・マージ（develop → source）

# デプロイ(Travis CIが自動デプロイ)
```
