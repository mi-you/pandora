class Person{
  // 定义静态属性,通过Person访问
  static age:number = 12;
  static readonly age2:number = 12;
  // 定义实例属性,通过Person实例访问
  name:string = 'mi_you';
  readonly name2:string = 'mi_you';

  // 静态方法
  static sayHello(){
    console.log("hello")
  }
  // 实例方法
  sayHello(){
    console.log("hello")
  }
}
const per = new Person()
console.log(per.name)
console.log(Person.age)