// 課題1
function isOddNumber(a){
 return a % 2 === 1;
};
// returnでtrue false 返してる
console.log('9を入力したらtrueが返るべき: ', isOddNumber(9) );
console.log('14を入力したらfalseが返るべき: ', isOddNumber(14) );

// 課題2
const factorial = function(num){
  let result = 1;
  for(let i = num; i > 0; i--){
    result *= i
  }
  return result
}

console.log('4を入力したら24が返るべき: ', factorial(4) );
console.log('5を入力したら120が返るべき: ', factorial(5) );

const convertFirstCharacterToUpperCase = (figure) =>{
  return figure.charAt(0).toUpperCase() + figure.charAt(1).toUpperCase() + figure.slice(2);
}

// charAt(0)=>一文字目取得, .slice(1)=>二文字目以降から返す

console.log(convertFirstCharacterToUpperCase('hello'));
console.log(convertFirstCharacterToUpperCase('world'))