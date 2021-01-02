const myArray = {
  array: [1, 2, 3],
  forEach:function (callback){
    for(let i = 0; i < this.array.length; i++){
      callback(this.array[i], i);
    }
  },
  map:function (callback){
    let returnedValues = [];
    this.forEach((value, index) => {
      returnedValues.push(callback (value, index));
    });
  return returnedValues;
  },
  filter:function (callback){
    let oddNumbers = [];
    this.array.forEach((value) => {
      if(callback){
        // 真偽値を受け取る。trueであれば実行。
        oddNumbers.push(value);
      }
    })
    return oddNumbers;
  }
};


console.log('==========forEach==========');
myArray.forEach((value, index) => {
  console.log('index :' + index + ' value :' + value);
});

console.log('==========map==========');
const mulArray = myArray.map((value, index) => {
  return value * index;
});
console.log('myArray.Arrayの戻り値は[1, 2, 3]であるべき。', myArray.array);
console.log('mapの戻り値は[0, 2, 6]であるべき。' ,mulArray);

console.log('==========filter==========');
const oddArray = myArray.filter((value, index) => {
  return value % 2 === 1;
});
console.log('myArray.Arrayの戻り値は[1, 2, 3]であるべき。', myArray.array);
console.log('filterの戻り値は[1, 3]であるべき。' ,oddArray);