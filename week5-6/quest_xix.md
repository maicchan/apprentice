# データベースを正規化できる

エンティティを定義した EC サイトの仕様をベースとして進みます。

## 1. 第一正規形

ECサイトを、第一正規形になるようテーブル設計してください。テーブル名と、テーブルに紐づくカラム名とプライマリーキーを記載してください。なお、テーブル名とカラム名は日本語で大丈夫です。

その際に、下記のポイントを抑えるようにしてください。

アプリケーションとして成立すること（プログラムを組んだ際に仕様を満たして動作すること）
テーブルごとにプライマリーキーが設定されていること
1つのセルに1つの値のみが含まれること
以下、回答例です。

[ユーザーテーブル]

ID
名前
プライマリーキー：ID

---
[ユーザーテーブル]

ユーザーID

名前

性別

年齢

住所

電話番号

メールアドレス

プライマリーキー：ユーザーID

---
[商品テーブル]

商品ID

商品名

カテゴリーID

価格

商品説明

販売者ID

プライマリーキー：商品ID

---
[カテゴリーテーブル]

カテゴリーID

カテゴリー名

プライマリーキー：カテゴリーID

---
[購入履歴テーブル]

購入履歴ID

購入者ID

商品ID

購入日時

プライマリーキー：購入履歴ID

---

## 2. 第二正規形

ECサイトの第一正規形の設計を、第二正規形になるようテーブル設計してください。テーブル名と、テーブルに紐づくカラム名とプライマリーキーを記載してください。なお、テーブル名とカラム名は日本語で大丈夫です。

その際に、下記のポイントを抑えるようにしてください。

アプリケーションとして成立すること（プログラムを組んだ際に仕様を満たして動作すること）
部分的関数従属性がないこと

---
[ユーザーテーブル]

ユーザーID

名前

性別

年齢

住所

電話番号

メールアドレス

プライマリーキー：ユーザーID

---
[商品テーブル]

商品ID

商品名

カテゴリーID

価格

商品説明

販売者ID

プライマリーキー：商品ID

---
[カテゴリーテーブル]

カテゴリーID

カテゴリー名

プライマリーキー：カテゴリーID

---
[購入履歴テーブル]

購入履歴ID

購入者ID

商品ID

購入日時

プライマリーキー：購入履歴ID

---

## 3. 第三正規形

ECサイトの第二正規形の設計を、第三正規形になるようテーブル設計してください。テーブル名と、テーブルに紐づくカラム名とプライマリーキーを記載してください。なお、テーブル名とカラム名は日本語で大丈夫です。

なお今回は、要件として「カテゴリーIDをキーとして、カテゴリーごとに商品を検索できる」が追加されたとします。

その際に、下記のポイントを抑えるようにしてください。

アプリケーションとして成立すること（プログラムを組んだ際に仕様を満たして動作すること）
推移的関数従属性がないこと

---
[ユーザーテーブル]

ユーザーID

名前

性別

年齢

住所

電話番号

メールアドレス

プライマリーキー：ユーザーID

---
[商品テーブル]

商品ID

商品名

カテゴリーID

価格

商品説明

販売者ID

プライマリーキー：商品ID

---
[カテゴリーテーブル]

カテゴリーID

カテゴリー名

プライマリーキー：カテゴリーID

---
[購入履歴テーブル]

購入履歴ID

購入者ID

商品ID

購入日時

プライマリーキー：購入履歴ID

---

## 4. ボイスコッド正規形

病院の管理システムのデータベースを設計してください。

要件は次の通りです。

患者と診療科が決まると担当医師も決まる(担当医師は一人のみ)
一人の医師は一つの診療科を担当する
一人の患者は複数の診療科を受診することがある
現在、次のテーブルが作成されています。

[担当医師テーブル]

患者
診療科
担当医師
プライマリーキー：患者,診療科

このテーブルはボイスコッド正規形になっていません。

このテーブルがボイスコッド正規形になるよう設計してください。テーブル名と、テーブルに紐づくカラム名とプライマリーキーを記載してください。なお、テーブル名とカラム名は日本語で大丈夫です。

[患者テーブル]

患者ID

患者名

診療記録ID

プライマリーキー：患者ID

---

[医師テーブル]

医師ID

医師名

診療科ID

プライマリーキー：医師ID

---

[診療科テーブル]

診療科ID

診療科

プライマリーキー：診療科ID

---
[診療記録テーブル]

診療記録ID

診療日

医師ID

プライマリーキー：診療記録ID