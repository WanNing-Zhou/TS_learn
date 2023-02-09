"use strict";
(function () {
    const obj = {
        name: 'sss',
        age: 111,
    };
    const obj1 = {
        name: 'sss',
        age: 111,
        gender: 'nan'
    };
    /**
     * 定义类时,可以使类去实现一个接口
     */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHi() {
            console.log('大家好');
        }
    }
})();
