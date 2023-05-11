# データを検索できる

## 1. 環境構築

MySQL 公式サンプルデータベースの employee data のデータをデータベースに入れます。ドキュメント内の Installation のやり方に従ってください。

以下にも手順を記します。

公式サンプルデータベースの中の employee data(test_db) を開く
リポジトリをクローンする
クローンしたディレクトリに移動する
mysql -u root -p < employees.sql を実行してデータを入れる
データベース一覧を表示し、employees データベースがあることを確認する
employees データベースを指定する
テーブルの一覧を確認する
以降、employees データベースを使用します。

```sh
git clone https://github.com/datacharmer/test_db.git
```

## 2. 全カラムの取得

部署マネージャーの全データを取得してください。dept_manager テーブルの全データを * を指定して取得します。

```sql
SELECT * FROM dept_manager;
```

## 3. カラムの選択

部署マネージャーの従業員番号の一覧のみを取得してください。dept_manager テーブルの emp_no カラムの値のみを取得します。

```sql
SELECT emp_no FROM dept_manager;
```

## 4. カラム名の別名

部署マネージャーの従業員番号の一覧のみを、取得データの見出し（カラム）に「employee_no」という名前を付けて取得してください。

```sql
SELECT emp_no AS employee_no FROM dept_manager;
```

## 5. 重複行の削除

部署マネージャーが所属する部署番号を重複なく取得してください。dept_manager テーブルの dept_no カラムの値を、重複を削除して取得します。

```sql
SELECT DISTINCT dept_no FROM dept_manager;
```
