// 也可以直接使用字面量进行类型声明
let a: 10;
a = 10;
// a = 11;

//可以是哟个 | 来连接多个类型(联合类型)
let b: "male" | 'female';
b = 'male';
b = 'female';
let c: boolean | string;

c = true;
c = 'hello'

// any 表示的是任意类型,一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
//使用TS时,不建议使用any类型
// let d: any;

//声明变量如果不指定类型,则TS解析器会自动判断变量的类型为any(隐式的any)
let d;
d = 10;
d = 'hello';
d = true;

//unknown 表示未知类型的值
let e: unknown
e = 10;
e = 'hello';
c = true;

let s: string;

//d的类型是any,它可以赋值给任何类型
s = d;

e = 'hello';
// s = e;