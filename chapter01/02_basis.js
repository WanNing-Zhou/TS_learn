//声明一个变量a,同时指定他的类型为number
var a;
// a 的类型设置为了number,在以后的使用过程中a的值只能时数字
a = 10;
a = 33;
// a = 'hello'; //此行代码会报错,因为变量a的类型时number,不能赋值字符串
var b;
b = 'hello';
//b=123
console.log(a);
//生声明完变量直接进行赋值
// let c : boolean = false;
//如果变量的声明和赋值时同时进行的,TS可以自动对变量进行检测
var c = false;
c = true;
//js中的函数不考虑参数的类型和个数的
// function sum(a,b){
//     return a + b;
// }
// console.log(sum(123,456))
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456));
var result = sum(123, 456);
