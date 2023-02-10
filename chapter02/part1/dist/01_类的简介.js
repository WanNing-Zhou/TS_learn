"use strict";
//使用class关键字来定义一个类
class Person {
    constructor(name, age) {
        //只读属性
        this.salary = 1000;
        this.name = name;
        this.age = age;
    }
    /**
     * 定于方法,
     * 如果以static开头则方法是类方法(静态方法),可以直接通过类去调用
     */
    show() {
        console.log(`我是${this.name}, 我的年龄是${this.age}`);
    }
    static sayHello() {
        console.log('hello');
    }
}
//在属性前使用static关键字可以定义类属性(静态属性)
Person.banana = 100;
const per = new Person('勋悟空', 18);
per.show();
console.log('banana:' + Person.banana);


