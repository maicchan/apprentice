# ユーザーを作成・権限付与・削除できる

Root権限を持つユーザーで MySQL へ接続してください。

## 1. ユーザーの作成

MySQL のユーザーを作成してください。名前とパスワードは任意、ホストは localhost を指定してください。

```sql
CREATE USER 'sampleuser'@'localhost' IDENTIFIED BY 'samplepassword';
```

## 2. ユーザーの表示

ユーザーを作成できたことを確認するために、ユーザーの一覧を表示してください。

```sql
SELECT user FROM mysql.user;
```

## 3. ユーザーへの権限付与

作成したユーザーに、MySQL 内のすべてのデータベースとテーブルへの root のフルアクセス権を付与してください。

```sql
GRANT ALL PRIVILEGES ON *.* TO 'sampleuser'@'localhost' IDENTIFIED BY 'samplepassword' WITH GRANT OPTION;
```

なお、ユーザーへの権限付与を学習するために本問題を用意していますが、現場ですべてのデータベースへの root のフルアクセス権限を付与することはほぼありません。データベースのセキュリティを危険にさらす可能性があるためです。

## 4. 権限のリロード

ユーザーに権限を付与したら、すべての権限をリロードしてください。これにより設定が有効になります。

```sql
FLUSH PRIVILEGES;
```

## 5. ユーザーの削除

作成したユーザーを削除してください。削除後、削除できていることを確認してください。

```sql
DROP USER 'sampleuser'@'localhost';
```

## 6. ユーザーの再作成

再度ユーザーを作成、権限付与、権限のリロードを行ってください。

```sql

```

今後は root ユーザーは基本的に使用せず、今回作成したユーザーを使用してください。
