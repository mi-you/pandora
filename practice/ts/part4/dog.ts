enum Gender{
  male = 0,
  female = 1
}
class Animal{
  name:string;
  age:number;

  constructor(name:string,age:number){
    // 在实例方法中，this表示当前实例
    this.name = name;
    this.age = age;
  }

  back(){
    // 这里的this表示调用当前方法的对象
    console.log('动物在叫！')
  }
}
class Dog extends Animal{
  sex:Gender; 
  constructor(name:string,age:number,sex:Gender){
    super(name,age);
    this.sex = sex;
  }
  // 重写父类方法
  back(){
    console.log('汪汪汪')
  }
}
class Cat extends Animal{

}
const dog = new Dog("小黑",4,Gender.male)
const cat = new Cat("小白",4)