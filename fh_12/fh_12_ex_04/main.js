// const numbers = [10, 500, 234, 965, 221]

// const removeMaxNumberFromArray = (_numbers) => {
//     const numbers2 = _numbers.slice();
//     let indexOfMaxNumber = 0;
//     let currentMaxNumber;
//     numbers2.forEach(function (number, index){
//       if(currentMaxNumber < number || currentMaxNumber === undefined){
//         currentMaxNumber = number;
//         indexOfMaxNumber = index;
//       }
//     });

//     numbers2.splice(indexOfMaxNumber, 1);
//     return numbers2;
// }

// const returnedNumbers = removeMaxNumberFromArray(numbers);

// console.log(numbers);
// console.log('===============================');
// console.log(returnedNumbers);


const beforeSortNumbers = [1000, 10, 500, 234, 965, 221, 102];

const sortNumbers = (_numbers) => {
  const numbers3 = beforeSortNumbers.slice();
  
  numbers3.sort(function (a, b) {
    return a - b;
  });
  return numbers3;
};

const afterSortNumbers = sortNumbers(beforeSortNumbers);
console.log(beforeSortNumbers);
console.log(afterSortNumbers);