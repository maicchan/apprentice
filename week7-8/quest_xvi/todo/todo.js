document.addEventListener('DOMContentLoaded', function () {

  const addButton = document.getElementById('add-button');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
  const savedTasks = JSON.parse(localStorage.getItem('tasks'));

  addButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (todoInput.value.trim() === '') {
      alert('タスクを入力してください。');
      return;
    }

    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', function () {
      if (this.checked) {
        todoText.style.textDecoration = 'line-through';
      } else {
        todoText.style.textDecoration = 'none';
      }
    });

    const todoText = document.createElement('span');
    todoText.innerText = todoInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function () {
      todoList.removeChild(todoItem);
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
    todoInput.value = '';
  });

});

// document.addEventListener('DOMContentLoaded', function () {

//   const todoForm = document.querySelector('form');
//   const addButton = document.getElementById('add-button');
//   const todoInput = document.getElementById('todo-input');
//   const todoList = document.getElementById('todo-list');

//   // ページ読み込み時にlocalStorageからタスクを読み込む
//   const savedTasks = JSON.parse(localStorage.getItem('tasks'));
//   if (savedTasks) {
//     for (let task of savedTasks) {
//       addTask(task.text, task.checked);
//     }
//   }

//   todoForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     if (todoInput.value.trim() === '') {
//       alert('タスクを入力してください。');
//       return;
//     }

//     addTask(todoInput.value);
//     todoInput.value = '';
//   });

//   function addTask(text, checked = false) {
//     const todoItem = document.createElement('li');
//     todoItem.className = 'todo-item';

//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.checked = checked;

//     const todoText = document.createElement('span');
//     todoText.innerText = text;

//     checkbox.addEventListener('change', function () {
//       if (this.checked) {
//         todoText.style.textDecoration = 'line-through';
//       } else {
//         todoText.style.textDecoration = 'none';
//       }
//       saveTasks();
//     });

//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = '削除';
//     deleteButton.className = 'delete-button';
//     deleteButton.addEventListener('click', function () {
//       todoList.removeChild(todoItem);
//       saveTasks();
//     });

//     todoItem.appendChild(checkbox);
//     todoItem.appendChild(todoText);
//     todoItem.appendChild(deleteButton);

//     todoList.appendChild(todoItem);
//     saveTasks();
//   }

//   function saveTasks() {
//     const tasks = Array.from(todoList.children).map(li => ({
//       text: li.querySelector('span').innerText,
//       checked: li.querySelector('input').checked
//     }));
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }

// });
