//使用class关键字来定义一个类

class Person{
    /**
     * 直接定义的睡醒是示例属性,需要通过对象的实例去访问
     * static开头的属性是静态属性(类属性),可以直接通过类去访问
     *
     * readonly开头的属性表示一个只读的属性,不可进行修改
     *
     */
    name:String;
    age:number;
    //在属性前使用static关键字可以定义类属性(静态属性)
    static banana = 100;

    //只读属性
    readonly salary = 1000;

    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }

    /**
     * 定于方法,
     * 如果以static开头则方法是类方法(静态方法),可以直接通过类去调用
     */

    show(){
        console.log(`我是${this.name}, 我的年龄是${this.age}`)
    }

    static sayHello(){
        console.log('hello')
    }

}

const per = new Person('勋悟空',18);

per.show();

console.log('banana:'+Person.banana)