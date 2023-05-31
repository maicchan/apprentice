# DOM 操作ができる

以下、ブログの投稿フォームを作成するための HTML です。この HTML を元に、JavaScript を `dom.js` に記載し、DOM 操作を行ってください。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ブログ</title>
</head>
<body>
  <h1>ブログ</h1>
  <form id="post-form">
    <label for="title">タイトル：</label><br>
    <input type="text" id="title" name="title"><br>
    <label for="content">本文：</label><br>
    <textarea id="content" name="content"></textarea><br>
    <input type="submit" value="Submit">
  </form>
  <div id="posts"></div>
  <script src="dom.js"></script>
</body>
</html>
```

## 1. DOM とは

DOM とは何で、なんのためにあるのか、プログラミング初心者にわかるように説明してください。なお、DOM　とは API の一つなのですが、API とは何かも説明してください。

※ヒント: DOM はクライアントサイド（ブラウザ上でプログラムを実行する）に限定した話です。JavaScript の仕様そのものではないので区別して理解しましょう。HTML の操作をしたいときに JavaScript から DOM を利用するということであり、JavaScript と DOM は別物です。

- DOM (Document Object Model) は、ウェブページをオブジェクト構造として扱うための標準的な仕組み。HTMLは、DOMを介してプログラムから操作することが可能になる。
- API（Application Programming Interface）とは、ソフトウェア間でデータをやり取りするための仕様や規則のこと。これにより異なるソフトウェアやサービスが連携して動作することが可能になる。DOMはブラウザとJavaScriptなどのプログラム言語との間のAPIの一つ。

## 2. 要素ノードの変更

JavaScript を使って、h1 タグのテキストを「シンプルブログ」変更してください。

```js
const heading = document.querySelector('h1');
heading.textContent = 'シンプルブログ';
```

## 3. イベントハンドラの設定

JavaScript を使って、フォームの送信ボタンをクリックしたときに、フォームに入力された内容（タイトルと本文）をコンソールに出力するようにしてください。

## 4. 要素ノードの追加

JavaScript を使って、フォームの送信ボタンをクリックしたときに、フォームの内容を `#posts` の div タブ内に、以下の形式で表示するようにしてください。

```html
<div id="posts">
  <h2>入力されたタイトル</h2>
  <p>入力された本文</p>
</div>
```

```js
document.getElementById('post-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  const h2 = document.createElement('h2');
  h2.textContent = title;

  const p = document.createElement('p');
  p.textContent = content;

  const posts = document.getElementById('posts');
  posts.appendChild(h2);
  posts.appendChild(p);
});
```

## 5. 要素ノードの追加

JavaScript を使って、フォームの送信ボタンをクリックしたときに、フォームの中身を空にしてください。

```js
document.getElementById('post-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  const h2 = document.createElement('h2');
  h2.textContent = title;

  const p = document.createElement('p');
  p.textContent = content;

  const posts = document.getElementById('posts');
  posts.appendChild(h2);
  posts.appendChild(p);

  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
});
```

## 6. スタイルの変更

JavaScript を使って、`#post-form` の div タブ上にマウスポインターを乗せたタイミングで背景色を黄色に、マウスポインターを外したタイミングで白色に変更するようにしてください。

```js
const postForm = document.getElementById('post-form');

postForm.addEventListener('mouseover', function () {
  this.style.backgroundColor = 'yellow';
});

postForm.addEventListener('mouseout', function () {
  this.style.backgroundColor = 'white';
});
```

## 7. 要素ノードの削除

フォームの投稿が増え、`#posts` の div タブ内に表示される投稿が多くなってきたとします。このとき `#posts` の div タブ内に追加された投稿の数が3つを超えた場合、一番古い投稿を削除してください。なお、4で作成した投稿の表示形式は変更して構いません。

```js
document.getElementById('post-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  const post = document.createElement('div');

  const h2 = document.createElement('h2');
  h2.textContent = title;

  const p = document.createElement('p');
  p.textContent = content;

  post.appendChild(h2);
  post.appendChild(p);

  const posts = document.getElementById('posts');
  posts.appendChild(post);

  document.getElementById('title').value = '';
  document.getElementById('content').value = '';

  if (posts.children.length > 3) {
    posts.removeChild(posts.firstElementChild);
  }
});
```
