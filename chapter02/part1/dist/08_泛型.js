"use strict";
// function fn(a:any):any{
//     return a;
// }
/**
 * 在定义函数或是类时,如果遇到类型不明确就可以使用泛型
 */
function fun(a) {
    return a;
}
//可以直接调用具有泛型的函数
const result = fun(10); //不指定泛型,TS可以自动对类型进行推断
const result2 = fun('hello'); //指定泛型
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'hello');
function fn3(a) {
    return a.length;
}
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('勋悟空');
