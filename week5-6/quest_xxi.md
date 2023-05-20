# テーブルを定義できる

テーブル定義では各テーブルに対して、テーブル名、カラム名、データ型、NULL(NULL OK の場合のみ YES と記載)、キー（キーが存在する場合、PRIMARY/INDEX のどちらかを記載）、初期値（ある場合のみ記載）、AUTO INCREMENT（ある場合のみ YES と記載）、外部キー制約、ユニークキー制約を定義します。

## 1. データ型

データ型とは何か、データベース初心者にわかるように説明してください。

- カラムに入れられるデータの種類のこと。

## 2. NULL

NULL とは何か、データベース初心者にわかるように説明してください。

- どのような値も格納されていない状態を意味するもの。

## 3. プライマリーキー

プライマリーキーとは何か、データベース初心者にわかるように説明してください。

- 他の行と値が重複しておらず、その値を指定することで行を特定できるという役割を担う列のこと。

## 4. 初期値

テーブル定義における初期値(デフォルト値)とは何か、データベース初心者にわかるように説明してください。

- テーブル定義時に指定しておくことで、INSERT文で具体的な値を指定しない列に、NULLではなく、予め指定していた値が入るようになる。

## 5. AUTO INCREMENT

AUTO INCREMENT とは何か、データベース初心者にわかるように説明してください。

- 新しいレコードが追加されるたびに指定した列の値が自動的に増加する。

## 6. 外部キー制約

外部キー制約とは何か、データベース初心者にわかるように説明してください。

- 外部キーで別テーブルの行を参照しているのに、その行が存在しないという状態になるような操作をした場合にエラーを発生させ、強制的に処理を中断させる制約。

## 7. ユニークキー制約

ユニークキー制約とは何か、データベース初心者にわかるように説明してください。

- 列の内容を重複させないようにするための制約。

## 8. テーブル定義

EC サイトの ER 図を、テーブル定義しましょう。各テーブルのテーブル名、カラム名、データ型、NULL(NULL OK の場合のみ YES と記載)、キー（キーが存在する場合、PRIMARY/INDEX のどちらかを記載）、初期値（ある場合のみ記載）、AUTO INCREMENT（ある場合のみ YES と記載）、外部キー制約、ユニークキー制約を設定してください。

以下、アウトプット例です。

テーブル：users

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
|id|bigint(20)||PRIMARY||YES|
|name|varchar(100)|||||
|email|varchar(100)||INDEX|||

- ユニークキー制約：email カラムに対して設定

テーブル：comments

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
|id|bigint(20)||PRIMARY||YES|
|user_id|bigint(20)|YES|INDEX|0||
|content|text|||||

- 外部キー制約：user_id に対して、users テーブルの id カラムから設定

なお、アウトプットはテキストでしていただいてもよいですし、SpreadSheet 等を用いて表形式でしていただいても大丈夫です。

```sql
CREATE TABLE users (
  `ユーザーID` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `名前` VARCHAR(10) NOT NULL,
  `年齢` INT,
  `性別` ENUM('男性', '女性', '回答なし') NOT NULL,
  `電話番号` VARCHAR(20) NOT NULL,
  `メールアドレス` VARCHAR(100) NOT NULL,
  UNIQUE (`電話番号`),
  UNIQUE (`メールアドレス`)
);

CREATE TABLE category (
  `カテゴリーID` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `カテゴリー名` VARCHAR(30) NOT NULL,
  UNIQUE (`カテゴリー名`)
  );

CREATE TABLE product (
  `商品ID` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `商品名` VARCHAR(100) NOT NULL,
  `価格` INT NOT NULL,
  `カテゴリーID` INT NOT NULL,
  `商品説明` VARCHAR(1000),
  `販売者ID` INT NOT NULL,
  FOREIGN KEY (`カテゴリーID`) REFERENCES category(`カテゴリーID`)
  );

CREATE TABLE buy_history (
  `購入履歴ID` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `ユーザーID` INT NOT NULL,
  `商品ID` INT NOT NULL,
  `購入日時` DATE NOT NULL,
  FOREIGN KEY (`ユーザーID`) REFERENCES users(`ユーザーID`),
  FOREIGN KEY (`商品ID`) REFERENCES product(`商品ID`)
  );

```
