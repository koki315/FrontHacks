const myArray = {
  array:[3, 7, 19],
  forEach: function (callback){
    for(let i = 0; i < this.array.length; i++){
      callback(this.array[i], i)
    }
  },
  map: function (callback){
    let muledValues = [];
    this.forEach(function (value, index) {
      muledValues.push(callback(value, index))
    });
    return muledValues;
  },
  filter: function(callback){
    let oddValues = [];
    this.forEach(function (value) {
      if(callback) {
        oddValues.push(value);
      }
    });
    return oddValues;
  },

} 

console.log('forEach==========================================');
myArray.forEach(function (value, index) {
  console.log('index :' + index + ' value :' + value);
});

const mulArray = myArray.map(function(value, index) {
    return value * index;
});

console.log(mulArray);

const oddArray = myArray.filter(function (value) {
  return value % 2 === 1;
});
console.log(oddArray);