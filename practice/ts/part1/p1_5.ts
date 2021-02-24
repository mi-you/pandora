/**
 *声明类型变量 
*/
let a:number;
let b:boolean = true;
// 如果变量的声明和赋值是同时的，ts可以自动进行类型判断
let c = true; //c是boolean

/**
 * sum函数的返回值是number
 * sum函数必须并且只能接受两个number类型的参数
 */ 
function sum(a:number,b:number):number{
  return a + b
}

/******ts可用的类型********/
/**
 * number,string,boolean,
 * 字面量
 * any :任意类型
 * unknown :未知类型，实际上就是一个类型安全的any,不能直接赋值给其他变量
 * void :表示没有返回值
 * never :表示永远不会返回结果
 * object
 * array
 * tuple
 * enum
 * */
/**
 * 字面量声明
 * | 可以用来连接多个类型,表示或
 * & 表示同时
 */ 
let d:10; //d只能是10，一般不这样用，像下面那样使用
let e:'male' | 'female';
e = 'male'; //male,female之外的会出错
let f: boolean | number; //f(联合类型)可以是声明的两种类型的值
let ff:{name:string} & {age:number}; 
ff = {name:'孙悟空',age:18};
/**
 * any
 * 使用ts不建议使用
 */
let g:any; //g可以是任意类型
let h; //不声明相当于隐式any

/**
 * unknown ：未知类型的值
 */
let i:unknown; //i可以赋任意类型值
i = true;
//与any的区别在于，any声明的值可以赋值给其他类型，但unknown不行
f = g; //any 赋给 boolean; f = i; //有问题
/**
 * 类型断言：可以使用类型断言来告诉解析器变量实际类型
 * 语法：
 *  变量 as 类型
 * <类型>变量
 */ 
f = i as boolean; 
f = <boolean>i;

/**
 * void 
 * 
 */ 
function fn():void{
  // return undefined | null也属于void
}

/**
 * never
 */
function fn2():never{
  throw new Error('报错了！')
}

/**
 *object 
 */ 
let j:object;
j = {};
j = () => {};
// {}用来字典对象中可以包含哪些属性
// {属性名:属性值，属性名2:属性值2}，之后的对象的属性必须与它保持一致不能多也不能少
let k:{name:string,age?:number}; //限制了k必须是对象并且要有name属性.age可选
let l:{name:string,[propName:string]:any} //l必须有name,其他属性无所谓
l = {name:'a',[Symbol('a')]:'n'}
 //语法：(形参:类型,形参:类型...) => 返回值
let m:(a:number,b:number)=>number; //定义m是函数并满足后面的结构 

/**
 * array 
 */ 
let n:string[];
let o:Array<string>;

/**
 * 元组：固定长度的数组
 */
let p:[string,string]; //p固定长度的数组

/**
 *enum 枚举 
 */
enum Gender{
  Male = 0,
  Female = 1
}
let q:{name:string,gender:Gender};
i = {
  name:'孙悟空',
  gender:Gender.Male
}
/*******************类型别名****************/ 
type myType = string;
let r:myType;
type myType2 = 1 | 2 | 3 | 4 | 5;
let s:myType2;
