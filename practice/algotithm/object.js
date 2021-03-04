// const a = {}
// Object.defineProperty(a,'name',{
//   writable:false,
//   value:'miyou',
//   configurable:true
// })
// console.log(a.name)
// a.name = 'bb';
// console.log(a.name)
// delete a.name
// console.log(a.name)

// let b = {};
// Object.defineProperties(b,{
//   _name:{
//     configurable:true,
//     enumerable:true,
//     writable:true,
//     value:'miyou',
//   },
//   name:{
//     configurable:true,
//     enumerable:true,
//     get(){
//       return this._name
//     },
//     set(value){
//       this._name = value;
//     }
//   }
// })
// console.log(b.name)
// b.name = 'mi'

// let a ={};
// let b ={};
// Object.defineProperty(b,"name",{
//   get(){
//     return 'a'
//   }
// })
// Object.assign(a,b)
// console.log(a)

// const Person = function(name){
//   this.name = name;
// }
// let b = new Person('miyou')
// console.log(b.__proto__)
// console.log(Person.__proto__)
// console.log(Person.prototype === Object.getPrototypeOf(b))

// function SuperType(name){
//   this.name = name;
//   this.colors = ['red','blue']
// }
// function SubType(name,age){
//   SuperType.call(this,name);
//   this.age = age;
// }

// SubType.prototype = new SuperType();
//  const instance = new SubType('mi',18)
//  console.log(instance,instance.colors,instance.name,instance.age)

// class Person{
//   constructor(){
//     console.log('aaa',new.target)
//     if(new.target === Person){
//       throw new Error('Person cannot be directly instantiated')
//     }
//     if(!this.foo){
//       throw new Error('Inheriting class must define foo()'); 
//     }
//   }
//   static abc(){
//     console.log('abc')
//   }
// }

// class Ins extends Person{
//   constructor(){
//     super()
//   }
//   static abc(){
//     super.abc()
//   }
//   foo(){}
// }
// const e = new Ins()

// new Promise((resolve,reject) => {
//   reject('a')
// }).then('aa',e => console.log('1',e),e => console.log('2',e))

// const p1 = Promise.resolve();
// let p4 = p1.finally(() => Promise.reject());
// setTimeout(console.log,0,p4)

// const a = new Promise((resolve,reject) => {
//   setTimeout(resolve,3000)
// })
// a.then(() => new Promise((resolve,reject) => {
//   setTimeout(resolve,2000)
// }))
// let abc = {
//   [Symbol.iterator](){
//     let index = 0;
//     return {
//       next(){
//         if(index < 4){
//           return {done:false,value:index++}
//         }else if(index === 4){
//           return {done:false,value:Promise.reject(index++)}
//         }else{
//           return {done:true,value:undefined}
//         }
//       }
//     }
//   }
// }
// let p = Promise.all(abc)
// p.then(e => console.log(e),e => console.log(e))

  // 不考虑a，b包含小数
function bigNumberAdd(a,b){
  let sum = a + b,
    c = 0; //存储进位
  if(Number.isSafeInteger(sum)){
    return sum
  }
  sum = '';
  a = String(a).split('');
  b = String(b).split('');
  while(a.length || b.length || c){
    c += ~~a.pop() + ~~b.pop();
    sum = c % 10 + sum;
    c = c > 9;
  }
  return sum.replace(/^0+/,'')
}