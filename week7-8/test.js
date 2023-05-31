// QUEST_vii

// const num_1 = 5;
// const num_2 = 3;

// let sum = num_1 + num_2;

// let difference = num_1 - num_2;

// console.log(sum + difference);
// greet("Hikaru");
// function greet(name) {
//   // 関数を完成させてください
//   console.log(`Hello, ${name}`);
// }
// function checkTemperature(t) {
//   // 関数を完成させてください
//   if (t >= 30) {
//     console.log("Hot");
//   } else if (t < 30 && t >= 15) {
//     console.log("Warm");
//   } else {
//     console.log("Cold");
//   }
// }

// checkTemperature(0);
// function checkOddOrEven(n) {
//   // 関数を完成させてください
//   if (n % 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }
// checkOddOrEven(2);
// function hasOdd(numbers) {
//   // 関数を完成させてください
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       console.log('true');
//       return;
//     }
//   }
//   console.log('false');
// }
// hasOdd([4, 2, 6]);
// function odd(numbers) {
//   // 関数を完成させてください
//   const oddNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       oddNumbers.push(numbers[i]);
//     }
//   }
//   console.log(oddNumbers);
// }
// odd([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// function square(numbers) {
//   // 関数を完成させてください
//   const squaredNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     squaredNumbers.push(numbers[i] ** 2);
//   }
//   console.log(squaredNumbers);
// }

// square([1, 2, 3, 4]);

// const books = [
//   { title: 'JavaScript入門', author: '山田太郎' },
//   { title: 'JavaScriptの絵本', author: '山田太郎' }
// ];

// function printBooks(books) {
//   // 関数を完成させてください
//   for (let i = 0; i < books.length; i++) {
//     const bookInfo = `『${books[i].title}』${books[i].author}`;
//     console.log(bookInfo);
//   }
// }

// printBooks(books);

// let users = [
//   {
//     username: '山田',
//     permissions: {
//       canRead: true,
//       canWrite: true,
//       canDelete: false
//     }
//   },
//   {
//     username: '佐藤',
//     permissions: {
//       canRead: false,
//       canWrite: true,
//       canDelete: false
//     }
//   },
//   // ユーザーを追加してください
// ];

// function checkPermission(username, permission) {
//   // 関数を完成させてください
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].username === username) {
//       console.log(users[i].permissions[permission] === true);
//       return;
//     }
//   }
//   console.log(false);
// }
// checkPermission('山田', 'canWrite');

// const obj = {
//   method: function () {
//     console.log('method');
//   },
// }

// obj.method();

// const obj = {
//   method: () => {
//     console.log('method');
//   },
// }

// obj.method();

// const obj = {
//   method() {
//     console.log('method');
//   },
// }

// obj.method();

// const obj = {
//   () => {
//   console.log('method');
// },
// }

// obj.method();
