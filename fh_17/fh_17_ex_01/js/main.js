$(() => {
  // Todoを保存する配列を用意する
  const todos = [];

  // DOM操作に必要な要素を取得する
  const input = $('#todo-input');
  const btn = $('#add-btn');
  const lists = $('#todo-container');
  // 追加ボタンをクリックしたときの処理を実装する
btn.click(() => {
  const todo = input.val();
  // todo.textContent = input.val();
  if(todo) {
  todos.push(todo);
  showTodo();
  $(input).val('');
  }
});

  // Todoを保存している配列を一覧表示する
const showTodo = (() => {

    $(lists).empty();

  todos.forEach((todo, index) => {
    // const indexOfTask = index + 1;
    const $task = $('<li>' + todo + '</li>');
    const deleteBtn = $(`<button class="item-button">削除</button>`);
    $task.append(deleteBtn);
    $(lists).append($task);

    deleteBtn.click(() => {
      deleteTodo(index);
    });
  })
})
  // 指定したTodoを配列から取り除く

  const deleteTodo = ((index) => {
    todos.splice(index, 1);
    showTodo();
  })
  // 動かんくなったらconsole.logでデバッグ

});