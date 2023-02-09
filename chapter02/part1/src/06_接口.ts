(function () {


    //描述一个对象的类型
    type myType = {
        name: string,
        age: number,
        [propName: string]: any
    };

    /**
     * 接口就是用来定义一个类接口,用来定义一个类中应该包含哪些属性和方法
     *  同时接口也可当成类型声明去使用
     *
     */

    interface myInterface {
        name: string;
        age: number;
    }

    interface myInterface {
        gender: string
    }

    const obj: myType = {
        name: 'sss',
        age: 111,
    }

    const obj1: myInterface = {
        name: 'sss',
        age: 111,
        gender: 'nan'
    }


    /**
     * 接口可以在定义类的时候去限制类的结构
     *  接口中所有的属性都不能有世界的值
     *  接口指定义对象的接口,而不考虑实际值
     *      在接口中所有的方法都是抽象方法
     */

    interface myInter{
        name:string;
        sayHi():void;
    }

    /**
     * 定义类时,可以使类去实现一个接口
     */


    class MyClass implements myInter{
        name: string;
        constructor(name: string) {
            this.name = name
        }

        sayHi(): void {
            console.log('大家好')
        }

    }


})()