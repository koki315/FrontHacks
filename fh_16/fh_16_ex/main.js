// 課題: console.logで出力される数の順番を答える

console.log(1);

setTimeout(() => {
  setTimeout(() => {
    console.log(2);
  }, 0);
  console.log(3);
}, 100);

console.log(4);

setTimeout(() => {
  setTimeout(() => {
    console.log(5);
  }, 40);
  console.log(6);
}, 50);

console.log(7);

// 以下にconsole.logで出力される数をコメントで記述してください。(解答後の答えはこのmain.jsを実行して確認してください。)
// 例: 出力順は、「1, 4, 7, 6, 5, 3, 2」