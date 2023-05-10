# テーブルを作成・修正・削除できる

作成済みのデータベースを指定して MySQL に接続してください。MySQL に接続後、使用するデータベースを指定しても大丈夫です。

## 1. テーブルの作成

任意のテーブルを作成してください。テーブルのカラムは自由に作成してください。

```sql
CREATE TABLE Shohin
(shohin_id CHAR(4) NOT NULL,
shohin_mei VARCHAR(100) NOT NULL,
shohin_bunrui VARCHAR(32) NOT NULL,
hanbai_tanka INTEGER,
shiire_tanka INTEGER,
torokubi DATE,
PRIMARY KEY (shohin_id));
```

## 2. テーブルの表示

テーブルが作成できたことを確認するために、テーブルの一覧を表示してください。

```sql
SHOW TABLES;
```

## 3. カラムの追加

作成したテーブルに、任意のカラムを一列追加してください。

```sql
ALTER TABLE Shohin ADD COLUMN shohin_mei_kana VARCHAR(100);
```

## 4. カラムの表示

カラムが追加できたことを確認するために、テーブルのカラムの一覧を表示してください。

```sql
DESCRIBE Shohin;
```

## 5. カラムの削除

追加したカラムを削除してください。削除後、削除できていることを確認してください。

```sql
ALTER TABLE Shohin DROP COLUMN shohin_mei_kana;
```

## 6. テーブルの削除

作成したテーブルを削除してください。削除後、削除できていることを確認してください。

```sql
DROP TABLE Shohin;
```

## 7. テーブルの再作成

再度テーブルを作成しましょう。

今後、作成したテーブルを指定して作業します。

```sql
CREATE TABLE Shohin
(shohin_id CHAR(4) NOT NULL,
shohin_mei VARCHAR(100) NOT NULL,
shohin_bunrui VARCHAR(32) NOT NULL,
hanbai_tanka INTEGER,
shiire_tanka INTEGER,
torokubi DATE,
PRIMARY KEY (shohin_id));
```
