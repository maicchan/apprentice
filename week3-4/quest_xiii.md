# コミットができる

## 1. ローカルリポジトリの新規作成

任意の場所に git_practice という名前の新規ディレクトリを作成してください。作成したディレクトリに移動して、Git のローカルリポジトリを新規作成してください。

```bash
mkdir -p ~/APPRENTICE/2nd_week/git_practice
git init
```

## 2. 変更をステージに追加

作成したディレクトリの下に README.md というファイルを作成してください。次に、作成したファイルをステージに追加してください。

```bash
touch README.md
git add README.md
```

## 3. 変更を記録

ステージに追加した変更をローカルリポジトリに記録してください。なお、変更の記録のことを「コミット」と言います。

```bash
git commit
```