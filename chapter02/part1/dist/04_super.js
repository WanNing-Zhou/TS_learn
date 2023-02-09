"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物再叫');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            //如果在子函数中写了构造函数,在字类构造函数中必须使用super
            super(name);
            this.age = age;
        }
        sayHello() {
            super.sayHello();
        }
    }
})();
