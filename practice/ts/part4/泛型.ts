/**
 * 在定义函数或类时，如果遇到类型不明确就可以使用泛型 
 */ 
function fn<T>(a:T):T{
  return a;
}
// 可以直接调用具有泛型的函数
fn(10); //不指定，ts自己推断，但并不是所有的都能推断出来
fn<string>('hello');//手动指定泛型的类型

// 泛型可以同时指定多个
function fn2<T,K>(a:T,b:K):T{
  return a
}
fn2(12,'a');
fn2<number,string>(12,'a');

interface Inter{
  length:number;
}
// T extends Inter 表示泛型T必须是inter的实现类(子类)
function fn3<T extends Inter>(a:T):number{
  return a.length
}
fn3('a')