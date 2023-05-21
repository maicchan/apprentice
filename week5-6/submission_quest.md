# インターネットTV

好きな時間に好きな場所で話題の動画を無料で楽しめる「インターネットTVサービス」を新規に作成することになりました。データベース設計をした上で、データ取得する SQL を作成してください。

仕様は次の通りです。サービスのイメージとしては [ABEMA](https://abema.tv/) を頭に思い浮かべてください。

- ドラマ1、ドラマ2、アニメ1、アニメ2、スポーツ、ペットなど、複数のチャンネルがある
- 各チャンネルの下では時間帯ごとに番組枠が1つ設定されており、番組が放映される
- 番組はシリーズになっているものと単発ものがある。シリーズになっているものはシーズンが1つものと、シーズン1、シーズン2のように複数シーズンのものがある。各シーズンの下では各エピソードが設定されている
- 再放送もあるため、ある番組が複数チャンネルの異なる番組枠で放映されることはある
- 番組の情報として、タイトル、番組詳細、ジャンルが画面上に表示される
- 各エピソードの情報として、シーズン数、エピソード数、タイトル、エピソード詳細、動画時間、公開日、視聴数が画面上に表示される。単発のエピソードの場合はシーズン数、エピソード数は表示されない
- ジャンルとしてアニメ、映画、ドラマ、ニュースなどがある。各番組は1つ以上のジャンルに属する
- KPIとして、チャンネルの番組枠のエピソードごとに視聴数を記録する。なお、一つのエピソードは複数の異なるチャンネル及び番組枠で放送されることがあるので、属するチャンネルの番組枠ごとに視聴数がどうだったかも追えるようにする

番組、シーズン、エピソードの関係について、以下のようなイメージです(シリーズになっているものの例)。

- 番組：鬼滅の刃
- シーズン：1
- エピソード：1話、2話、...、26話

## ステップ1

テーブル設計をしてください。

テーブルごとにテーブル名、カラム名、データ型、NULL(NULL OK の場合のみ YES と記載)、キー（キーが存在する場合、PRIMARY/INDEX のどちらかを記載）、初期値（ある場合のみ記載）、AUTO INCREMENT（ある場合のみ YES と記載）を記載してください。また、外部キー制約、ユニークキー制約に関しても記載してください。

その際に、少なくとも次のことは満たしてください。

- アプリケーションとして成立すること(プログラムを組んだ際に仕様を満たして動作すること)
- 正規化されていること

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

---
テーブル：channels

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
|id|int||PRIMARY||YES|
|name|varchar(30)||UNIQUE|||

テーブル：programs

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
|id|int||PRIMARY||YES|
|name|varchar(100)|||||
|detail|varchar(500)|||||

テーブル：genres

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
|id|int||PRIMARY||YES|
|name|varchar(30)||UNIQUE|||

テーブル：program-genres

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
|program_id|int||PRIMARY,FOREIGN|||
|genre_id|int||PRIMARY,FOREIGN|||

テーブル：seasons

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
|id|int||PRIMARY||YES|
|name|varchar(10)|||||

テーブル：episodes

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
|id|int||PRIMARY||YES|
|program_id|int||FOREIGN|||
|season_id|int||FOREIGN|||
|chapter|int|||||
|name|varchar(100)|||||
|detail|varchar(500)|YES||||
|video_time|time|||||
|released_at|datetime|||||
|viewer|bigint|||0||

テーブル：schedules

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
|id|int||PRIMARY||YES|
|channel_id|int||FOREIGN|||
|started_at|datetime|||||
|ended_at|datetime|||||
|program_id|int||FOREIGN|||
|viewer|bigint|||0||

## ステップ2

実際にテーブルを構築し、データを入れましょう。その手順をドキュメントとしてまとめてください（アウトプットは手順のドキュメントです）。

具体的には、以下のことを行う手順のドキュメントを作成してください。

1. データベースを構築します
2. ステップ1で設計したテーブルを構築します
3. サンプルデータを入れます。サンプルデータはご自身で作成ください（ChatGPTを利用すると比較的簡単に生成できます）

手順のドキュメントは、他の人が見た時にその手順通りに実施すればテーブル作成及びサンプルデータ格納が行えるように記載してください。

なお、ステップ2は以下のことを狙っています。

- データを実際に入れることでステップ3でデータ抽出クエリを試せるようにすること
- 手順をドキュメントにまとめることで、自身がやり直したい時にすぐやり直せること
- 手順を人が同じように行えるようにまとめることで、ドキュメントコミュニケーション力を上げること

---

### 1. DBMSに接続

### 2. データベースを作成

```sql
CREATE DATABASE internet_tv;
```

### 3. 作成したデータベースを選択し、テーブルを作成

```sql
CREATE TABLE `channels` (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL UNIQUE,
  PRIMARY KEY (`id`)
);

CREATE TABLE `programs` (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `detail` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `genres` (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL UNIQUE,
  PRIMARY KEY (`id`)
);

CREATE TABLE `program_genres` (
  `program_id` INT,
  `genre_id` INT,
  PRIMARY KEY (`program_id`, `genre_id`),
  FOREIGN KEY (`program_id`) REFERENCES `programs`(`id`),
  FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id`)
);

CREATE TABLE `seasons` (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `episodes` (
  `id` INT AUTO_INCREMENT,
  `program_id` INT,
  `season_id` INT,
  `chapter` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `detail` VARCHAR(500),
  `video_time` TIME NOT NULL,
  `released_at` DATETIME NOT NULL,
  `viewer` BIGINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`program_id`) REFERENCES `programs`(`id`),
  FOREIGN KEY (`season_id`) REFERENCES `seasons`(`id`)
);

CREATE TABLE `schedules` (
  `id` INT AUTO_INCREMENT,
  `channel_id` INT,
  `started_at` DATETIME NOT NULL,
  `ended_at` DATETIME NOT NULL,
  `program_id` INT,
  `viewer` BIGINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`channel_id`) REFERENCES `channels`(`id`),
  FOREIGN KEY (`program_id`) REFERENCES `programs`(`id`)
);

```

### 4. サンプルデータを追加

```sql
-- channels
INSERT INTO `channels` (`name`) VALUES
('ABEMAニュース'),
('ABEMA SPECIAL'),
('ドラマ'),
('アニメ24'),
('映画');

-- programs
INSERT INTO `programs` (`name`, `detail`) VALUES
('ABEMAニュース', '最新のニュースを24時間放送。'),
('特集ドキュメンタリー', 'さまざまなテーマに焦点を当てたドキュメンタリー番組。'),
('人気ドラマ', '話題のドラマを放送。'),
('新作アニメ', '最新のアニメを一挙放送。'),
('洋画', '海外の映画を放送。');

-- genres
INSERT INTO `genres` (`name`) VALUES
('ニュース'),
('ドキュメンタリー'),
('ドラマ'),
('アニメ'),
('映画');

-- program_genres
INSERT INTO `program_genres` (`program_id`, `genre_id`) VALUES
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- seasons
INSERT INTO `seasons` (`name`) VALUES
('1'),
('2'),
('3'),
('4'),
('特番');

-- episodes
INSERT INTO `episodes` (`program_id`, `season_id`, `chapter`, `name`, `detail`, `video_time`, `released_at`, `viewer`) VALUES
(6, 10, 1, '特報', '緊急のニュースをお伝えします。', '00:30:00', '2023-05-22 10:00:00', 100000),
(7, 6, 1, '特集ドキュメンタリー春', '春の特集ドキュメンタリー', '01:00:00', '2023-04-01 12:00:00', 20000),
(8, 6, 1, '人気ドラマ春', '春季シーズンの人気ドラマ', '00:45:00', '2023-04-05 20:00:00', 50000),
(9, 6, 1, '新作アニメ春', '春の新作アニメ放送', '00:30:00', '2023-04-10 18:00:00', 80000),
(10, 6, 1, '洋画春', '春の洋画特集', '02:00:00', '2023-04-15 20:00:00', 30000);

-- schedules
INSERT INTO `schedules` (`channel_id`, `started_at`, `ended_at`, `program_id`, `viewer`) VALUES
(6, '2023-05-22 10:00:00', '2023-05-22 10:30:00', 6, 100000),
(7, '2023-05-21 12:00:00', '2023-05-21 13:00:00', 7, 20000),
(8, '2023-05-21 20:00:00', '2023-05-21 20:45:00', 8, 50000),
(9, '2023-05-21 18:00:00', '2023-05-21 18:30:00', 9, 80000),
(10, '2023-05-20 20:00:00', '2023-05-20 22:00:00', 10, 30000);

```

### 5. データの確認

```sql
SELECT * FROM `channels`;

SELECT * FROM `programs`;

SELECT * FROM `genres`;

SELECT * FROM `program_genres`;

SELECT * FROM `seasons`;

SELECT * FROM `episodes`;

SELECT * FROM `schedules`;
```

## ステップ3

以下のデータを抽出するクエリを書いてください。

### 1. よく見られているエピソードを知りたいです。エピソード視聴数トップ3のエピソードタイトルと視聴数を取得してください

```sql
SELECT name, viewer
FROM episodes
ORDER BY viewer DESC
LIMIT 3;
```

### 2. よく見られているエピソードの番組情報やシーズン情報も合わせて知りたいです。エピソード視聴数トップ3の番組タイトル、シーズン数、エピソード数、エピソードタイトル、視聴数を取得してください

```sql
SELECT p.name AS program_name,
       s.name,
       e.chapter,
       e.name AS episode_name,
       e.viewer
  FROM episodes e
  JOIN programs p ON e.program_id = p.id
  JOIN seasons s ON e.season_id = s.id
ORDER BY e.viewer DESC
 LIMIT 3;
```

### 3. 本日の番組表を表示するために、本日、どのチャンネルの、何時から、何の番組が放送されるのかを知りたいです。本日放送される全ての番組に対して、チャンネル名、放送開始時刻(日付+時間)、放送終了時刻、シーズン数、エピソード数、エピソードタイトル、エピソード詳細を取得してください。なお、番組の開始時刻が本日のものを本日方法される番組とみなすものとします

```sql
SELECT c.name AS channel_name,
       sc.started_at,
       sc.ended_at,
       s.name AS season,
       e.chapter,
       e.name AS ep_name,
       e.detail
FROM schedules sc
JOIN channels c ON sc.channel_id = c.id
JOIN episodes e ON sc.program_id = e.program_id
JOIN seasons s ON e.season_id = s.id
WHERE DATE(sc.started_at) = CURDATE();
```

### 4. ドラマというチャンネルがあったとして、ドラマのチャンネルの番組表を表示するために、本日から一週間分、何日の何時から何の番組が放送されるのかを知りたいです。ドラマのチャンネルに対して、放送開始時刻、放送終了時刻、シーズン数、エピソード数、エピソードタイトル、エピソード詳細を本日から一週間分取得してください

```sql
SELECT sc.started_at AS '放送開始時刻',
       sc.ended_at AS '放送終了時刻',
       s.name AS 'シーズン数',
       e.chapter AS 'エピソード数',
       e.name AS 'エピソードタイトル',
       e.detail AS 'エピソード詳細'

  FROM schedules sc
  JOIN channels c ON sc.channel_id = c.id
  JOIN programs p ON sc.program_id = p.id
  JOIN episodes e ON e.program_id = p.id
  JOIN seasons s ON e.season_id = s.id
 WHERE c.name = 'ドラマ'
   AND sc.started_at
BETWEEN CURRENT_DATE AND DATE_ADD(CURRENT_DATE, INTERVAL 1 WEEK)
ORDER BY sc.started_at;

```

### 5. (advanced) 直近一週間で最も見られた番組が知りたいです。直近一週間に放送された番組の中で、エピソード視聴数合計トップ2の番組に対して、番組タイトル、視聴数を取得してください

### 6. (advanced) ジャンルごとの番組の視聴数ランキングを知りたいです。番組の視聴数ランキングはエピソードの平均視聴数ランキングとします。ジャンルごとに視聴数トップの番組に対して、ジャンル名、番組タイトル、エピソード平均視聴数を取得してください
