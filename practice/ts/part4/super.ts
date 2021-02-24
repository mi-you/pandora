/**
 * super 和抽象类抽象方法
 */ 
(() => {
  enum Gender{
    male = 0,
    female = 1
  }
  // 加上abstract 表示这是个抽象类，不能被直接创建实例
  // 就是只能被用来继承的类
  abstract class Animal{
    name:string;
    age:number;
  
    constructor(name:string,age:number){
      // 在实例方法中，this表示当前实例
      this.name = name;
      this.age = age;
    }
  
    // 定义抽象方法
    // 使用abstract开头，没有方法体
    // 只能定义在抽象类中，子类必须对抽象
    abstract back():void;
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
    back(){
       
    }
  }
  const dog = new Dog("小黑",4,Gender.male)
  const cat = new Cat("小白",4) 
})()