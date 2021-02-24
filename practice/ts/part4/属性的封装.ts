(() => {
  class Person{
    /**
     * public 修饰的属性可以被任意修改
     * private 私有属性，私有属性只能在类内部进行访问(修改)
     * protected 受保护的属性，只能在当前类和当前子类中进行访问
     * @type {string}
     * @memberof Person
     */
    public name:string; //默认都是public 
    public age:number;
    private _gender:string;

    constructor(name:string,age:number){
      this.name = name;
      this.age = age;
    }
    /**
     * getter,setter 被称为属性的存取器
    */
   get gender(){
     return this._gender
   }
   set gender(value:string){
     this._gender = value
   }
  }
  const per = new Person('mi_you',18)
  /**
   * 现在属性是在对象中设置的，属性可以任意修改
   *  属性可以任意被修改将会导致对象中的数据变得非常不安全 
   */ 
  per.name = 'you';
  per.age = 20;

  // class C{
  //   name:string;
  //   age:number;
  //   constructor(name:string,age:number){
  //     this.name = name;
  //     this.age = age;
  //   }
  // }
  class C{
    constructor(public name:string,public age:number){
    }
  }
  let c = new C('mi',18)

})()