// const heading = document.querySelector('h1');
// heading.textContent = 'シンプルブログ';

// document.getElementById('post-form').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const title = document.getElementById('title').value;
//   const content = document.getElementById('content').value;

//   console.log('タイトル: ' + title);
//   console.log('本文: ' + content);
// });

// document.getElementById('post-form').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const title = document.getElementById('title').value;
//   const content = document.getElementById('content').value;

//   const h2 = document.createElement('h2');
//   h2.textContent = title;

//   const p = document.createElement('p');
//   p.textContent = content;

//   const posts = document.getElementById('posts');
//   posts.appendChild(h2);
//   posts.appendChild(p);
// });

// document.getElementById('post-form').addEventListener('submit', function (e) {
//   // ページリロードの防止
//   e.preventDefault();

//   // タイトルと本文の取得
//   const title = document.getElementById('title').value;
//   const content = document.getElementById('content').value;

//   // 新しい h2 要素（タイトル）の生成
//   const h2 = document.createElement('h2');
//   h2.textContent = title;

//   // 新しい p 要素（本文）の生成
//   const p = document.createElement('p');
//   p.textContent = content;

//   // h2 と p 要素を #posts div の子として追加
//   const posts = document.getElementById('posts');
//   posts.appendChild(h2);
//   posts.appendChild(p);

//   // フォームの中身を空にする
//   document.getElementById('title').value = '';
//   document.getElementById('content').value = '';
// });

// const postForm = document.getElementById('post-form');

// postForm.addEventListener('mouseover', function () {
//   this.style.backgroundColor = 'yellow';
// });

// postForm.addEventListener('mouseout', function () {
//   this.style.backgroundColor = 'white';
// });

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
