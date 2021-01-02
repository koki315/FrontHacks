const cat = {
  name: 'mia',
  age: 29,
  sex: 'male'
}

console.log(cat);

cat.owner = 'koki';

console.log(cat);

cat.age = cat.age + 1;

console.log(cat);

delete cat.owner

console.log(cat);