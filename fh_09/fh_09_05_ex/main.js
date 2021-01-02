let num = 0;

while(num < 100){
  console.log(num)
  num++;
};


const question = 'パンはパンでも食べられないパンは？';
const answer = 'フライパン';
let input;
while(input !== answer){
  input = prompt(question);
  if (input === answer ){
    alert('正解です')
  }else
  alert('不正解です')
};

// const =>これ以降代入しない。let => これ以降も代入ある。



