// object表示一个js对象
let a: object;
a = {};
a = function () {

}

// {} 用来指定对象中可以包含哪些属性
// 语法:{属性名:属性值,属性名:属性值}
let b: {
    name: string,
    age?: number, //属性名? 表示属性是可选的
};

b = {name: 'xun悟空', age: 18}

let c: { name: string };
c = {name: '猪八戒'}

let d: { name: string, [propName: string]: any } //表示任意类型的属性
d = {name: '勋悟空', age: 18, gender: '男'}

/**
 * 设置函数结构得类型声明:
 *  语法:(形参:类型,形参:类型...)=>返回值类型
 */

let e: (a: number, b: number) => number  //希望e是一个函数指定了参数的类型和返回值得类型


e = function (n1, n2) {
    return n1 + n2
}

let f: string[] //表示声明字符串数组

f = ['kaka', 'lala']

/**
 * 数组得类型声明
 *  number[]
 *  Array<number>
 */
let g: number[];
let h: Array<number> //声明数值类型得数组

/**
 * 原组,元组就是长度固定的数组
 *  语法:[类型,类型,类型]
 */
let i: [string, string]
i = ['kakxi', 'xiaoxixi']

/**
 * enum 枚举
 */
enum Gender {
    MALE = 0,
    Female = 1
}

let j: { name: string, gender: Gender };
j = {
    name: '勋悟空',
    gender: Gender.MALE
}

console.log(j.gender === Gender.MALE)

//&表示同时
let k: { name: string } & { age: number };

k = {name: '勋悟空', age: 18}

//类型的别名
type myType = 1 | 2 | 3 | 4 | 5 | 7
let l: myType;
let m: myType








