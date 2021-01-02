const todos = ['掃除', '買い物', '散歩']
const commands = ['確認', '追加', '削除', '終了']

let input;

// mainloop
while (input !== commands[3]){
  input = prompt('「' + commands + '」のいずれかを入力してください！');
  if (input === commands[0]){
    showTodos();
  }else if(input === commands[1]){
    createTodo();
  }else if(input === commands[2]){
    deleteTodo();
  }else if(input === commands[3]){
    console.log('終了です。')
  }
  else{
    console.log('「' + commands + '」' + '以外は入力できません'); 
  }
}

// showtodo
function showTodos(){
  console.log('========================');
  console.log('現在持っているのタスク一覧');
  console.log('========================');

  if(todos.length > 0){
    todos.forEach((todo, index) => {
      console.log(index + ' : ' + todo);
    });
  }
  else{
    console.log('タスクなし');
  }
};

// createtodo
function createTodo(){
  const task = prompt('タスクを入力してください');
  if (!task){
    alert('何も入力されていないためスキップします');
  }else{
    todos.push(task);
    alert('タスクを追加しました！');
    showTodos();
  }
}

// deletetodo
function deleteTodo(){
  const numberstring = prompt('削除するタスクの番号を指定してください')
  // promptで入力されたら文字列になる。
  let num = parseInt(numberstring, 10);
  // 10進報にするから10を渡す。
  if(num >= todos.length || isNaN(num) || num < 0){
    alert('不正な値の為スキップします');
  }else{
    deleteTodos = todos.splice(num, 1);
    // 配列が返ってくる
    alert(deleteTodos[0] + 'は削除されました。');
    showTodos();
  }
}

// 関数宣言の場合関数の定義が下にあってもエラー出ない。関数式の場合定義されてないとエラーでる。