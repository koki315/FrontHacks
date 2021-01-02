// kadai1
const array1 = [1, 2, 3, 4, 5];
console.log(array1);
// kadai2
console.log(array1[3]);
// kadai3
array1[1] = 999;
console.log(array1);
// kadai4
const array2 = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
console.log(array2);
// kadai5
console.log(array2[2]);
// kadai6
console.log(array2[1][0]);
// kadai7
const array3 = ['コメント1', 'コメント2', 'コメント3']
console.log('値を配列の末尾に追加する前 :', array3);
array3.push('コメント4');
console.log('値を配列の末尾に追加した後 :', array3);
// kadai8
const array4 = ['タスク1', 'タスク2', 'タスク3']
console.log('値を配列の末尾に追加する前 :', array4);
let poppedValue = array4.pop();
console.log('値を配列の末尾に追加した後 :', array4);
console.log('poppedValueは 「タスク3」であるはず :', poppedValue);
// kadai9
const array5 = ['タスク1', 'タスク2', 'タスク3']
console.log(array5);
array5.unshift('最優先タスク');
console.log(array5);
// kadai10
const array6 = ['タスク1', 'タスク2', 'タスク3']
console.log(array6);
let shiftedValue = array6.shift();
console.log(array6);
console.log('shiftedValueは 「タスク1」であるはず :' ,shiftedValue);


const names = ['ken', 'gigi', 'james']

function each(array, callback){
  for(let i = 0; i < array.length; i++){
    callback(array[i], i);
  }
}
// arrayとcallbackを引数に持つ関数each
each(names, function(name, index){
  console.log(name, index);
});
// each実行?