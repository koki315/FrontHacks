module.exports = {
  add: (numbers) => {
    let result = 0;
    numbers.forEach((num) => {
      result += num;
    });
    return result;
  }
};