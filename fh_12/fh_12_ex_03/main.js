const each =  (array, callback) =>{
  for(let i = 0; i < array.length; i++){
    const currentValue = array[i];
    const index = i;
    callback(currentValue, index);
  }
}

const returnedValueOfEach = each([2, 4 ,6], (currentValue, index) => {
  console.log('index :' + index);
  console.log('value :' + currentValue);
});

console.log(returnedValueOfEach);

// 2
const map = (array, callback) => {
  const newArray = [];
  each(array, (value, index) => {
    const newValue = callback(value, index);
    newArray.push(newValue);
  })

  return newArray
}

const newValuesOfMap = map([3, 6, 9], (value, index) => {
  console.log('index :' + index);
  console.log('value :' + value);
  console.log('===========kore=============');
  return value*10
})

console.log(newValuesOfMap);

// 3
const filter = (array, callback) => {
  const newArray = [];
  each(array, (value, index) => {
    if(callback(value, index)){
      newArray.push(value);
    }
  })

  return newArray
}
console.log('==========filter==============');
const returnedValuesOfFilter = filter([1, 2, 3, 4, 5, 6, 9] ,(value, index) => {
  console.log('index :' + index);
  console.log('value :' + value);
  console.log('========================');
  return value % 3 === 0;
  // trueかfalseかをfilterに返す
});

 console.log(returnedValuesOfFilter);