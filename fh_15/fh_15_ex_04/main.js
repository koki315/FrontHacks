(() => {
// 関数の定義と実行が同時に行われる
  const todos = [];
  const inputElement = document.getElementById('input-todo-box');
  const btnElement = document.getElementById('add-button');
  const ulElement = document.getElementById('todo-list');

  console.log(inputElement);
  console.log(btnElement);
  console.log(ulElement);

  btnElement.addEventListener('click', (event) => {
    console.log(inputElement.value);
    const todo = inputElement.value;
    todos.push(todo);
    console.log(todos);
    inputElement.value = '';
    showTodos();
  });

  const showTodos = ()  => {

    while(ulElement.firstChild){
      ulElement.removeChild(ulElement.firstChild);
    }

    todos.forEach((todo, index) => {
      console.log(todo, index);

      // todo
      const todoItem = document.createElement('li');
      const indexOfTodo = index + 1;

      // delete_button
      const deleteBtnElement = document.createElement('button');
      deleteBtnElement.textContent = '削除';

      console.log(todoItem);
      todoItem.textContent = `${indexOfTodo} : ${todo}`;
      ulElement.appendChild(todoItem);
      todoItem.appendChild(deleteBtnElement);

      deleteBtnElement.addEventListener('click', () => {
        deleteTodo(index);
      })
    });
  };

  deleteTodo = (index) => {
    todos.splice(index, 1);
    showTodos();
  };
})();