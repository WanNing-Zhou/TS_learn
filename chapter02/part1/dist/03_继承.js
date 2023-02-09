"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHi() {
            console.log('动物叫');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name, age);
        }
        sayHi() {
            console.log('wolf,wolf');
        }
    }
    class Cat extends Animal {
        constructor(name, age) {
            super(name, age);
        }
        sayHi() {
            console.log('喵喵喵');
        }
    }
    const dog1 = new Dog('kongkong', 3);
    const miao = new Cat('miaomiao', 2);
    console.log(dog1, miao);
})();
