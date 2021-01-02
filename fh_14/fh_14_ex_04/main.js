class Animal {
  constructor(name){
    this._name = name;
  }

  get name () {
    return this._name;
    // _nameはプライベートの値なのでget name経由で呼び出すとthis.nameで呼び出せる(20行目)
  }
  speak(){
    console.log('...(無言)');
  }
}

class Person extends Animal{
  super(name){
    super(name);
  }
  speak(){
    console.log('こんにちは、' + this.name + 'です。');
    super.speak();
  }
}

const me = new Person('koki');
me.speak();