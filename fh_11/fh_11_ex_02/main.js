function kadai_1(age, callback) {
  let message;


  if (typeof age == 'number') {
    if (age >= 20) {
      message = '値は20以上です'
    } else if (age >= 10) {
      message = '値は10以上20未満です'
    } else {
      message = '値は10未満です'
    }
  } else {
    message = '数値が入力されていません'
  }

  callback(message);
  // callback呼び出し

};



kadai_1(50, function(message){
  alert(message);
  alert('ahhhhhh');
});
kadai_1(22, function(message) {
  alert(message);
});

kadai_1(19, function(message) {
  alert(message);
});
kadai_1(2, function(message) {
  alert(message);
});
kadai_1('a', function(message) {
  console.log(message);
});
// 実行するときに引数として関数渡してる




// 課題2
(function(x, y) {
  console.log('x + y =', x + y)
})(5, 5);

