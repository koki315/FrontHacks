class Person {
  constructor(name, age, gender, height, weight){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }
}

const me = new Person('koki', 21, 'male', 172, 59, );

console.log('me.nameは' + me.name + 'であるべき。' + me.name);
console.log('me.ageは' + me.age + 'であるべき。' + me.age);
console.log('me.genderは' + me.gender + 'であるべき。' + me.gender);
console.log('me.heightは' + me.height + 'cmであるべき。' + me.height + 'cm');
console.log('me.weightは' + me.weight + 'kgであるべき。' + me.weight + 'kg');