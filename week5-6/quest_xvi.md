# N＋1問題の対策ができる

## 1. N+1問題

N+1問題とは何か、SQL 初心者にわかるように説明してください。

- 親データ（N件）を一度に取得し、その後、各親データに対して関連する子データを取得するためのクエリ（N回）を発行する。したがって、全体としてN+1回のクエリが実行される。

ブログから100記事取得し、それぞれの記事からコメントを取得する。

ブログから100記事取得するクエリが１回、取得した100記事からそれぞれコメントを取得するクエリが100回、合計で101回のクエリが実行される。

親データが多数存在する場合、N+1問題により発行されるクエリの数が増え、それに伴い全体のレスポンスタイムが増加し、パフォーマンスが悪くなる。

## 2. N+1問題対策

N+1問題に対してどのような対策があるか、主要な対策を説明してください。

- 結合を使い親データと子データを1度に取得する（イーガーロード）

N+1問題はアプリケーションを作成しているとよく問題として発生します。今後アプリケーションを開発する際に、N+1問題を引き起こさないように注意してください。
