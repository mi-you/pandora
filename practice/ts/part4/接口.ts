(() => {
  type myType = {
    name:string,
    age:number
  }
  /**
   * 接口用来定义一个类结构
   * 定义一个类中应该包含哪些属性和方法，同时接口也可以当做类型声明去使用
   *  接口可以在定义类的时候去限制类的结构,
   *  接口中的所有属性都能有实际的值
   *  接口只定义对象的结构，而不考虑实际值
   *  在接口中所有的方法都是抽象的
   */ 

  // 声明了两个一样的接口，最终的接口是两个合并的结果
  interface myInterface{
    name:string,
    age:number,
    sayHello():void
  }
  interface myInterface{
    gender:string
  }

  // 定义类时，可以使类去实现一个接口
  // 实现接口就是使类满足接口的要求
  class MyClass implements myInterface{
    name:string;
    age:number;
    gender:string;
    
    sayHello(){

    }
  }

})()