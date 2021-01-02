(() => {

  const todos = [];
  const inputElement = document.getElementById('input-todo-box');
  const btnElement = document.getElementById('add-button');
  const ulElement = document.getElementById('todo-list');

  const pickupTodoFromTextBox = () => {
    const todo = inputElement.value;

    inputElement.value = '';
    
    return todo;
  };

  const validateTodo = (todo) => {
    if(!todo){
      throw new Error('何も入力されていません');
    }
    const duplicatedTodos = todos.filter( (_todo)  => {
      return todo === _todo;
      // _todo と等しいtodoだけ返す
    });
    if(duplicatedTodos.length > 0){
      throw new Error ('同じ名前のタスクは既に作成されています');
    }
    return todo;
  };

  const addTodo = (todo) => {
    // const todo = inputElement.value;
    todos.push(todo);
  }

  const showTodo = () => {
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
        promiseTaskOfDeletingTodo(index);
      })
    });
  };

  deleteTodo = (index) => {
    todos.splice(index, 1);
    showTodo();
  };



  const promiseTaskOfAddingTodo = () => {
    Promise.resolve()
            .then(pickupTodoFromTextBox)
            .then(validateTodo)
            .then(addTodo)
            .then(showTodo)
            .catch((error) => {
              alert(error.message);
            })


  };

  btnElement.addEventListener('click', (event) => {
    promiseTaskOfAddingTodo();
  });

  const promiseTaskOfDeletingTodo = (index) => {
    Promise
      .resolve(index)
      .then((_index) => {
        deleteTodo(_index);
      })
      .then(() => {
        showTodo();
      })
  }

})();