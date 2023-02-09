"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        //自定义的get方法
        getName() {
            return this._name;
        }
        /**
         * getter方法来读取属性
         * setter方法用来设置属性
         */
        //TS中的语法
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
            else {
                console.log('山本沃囸你宪芢');
            }
        }
    }
    const per = new Person('勋悟空', 18);
    /**
     * 现在属性是在对象中设置的,属性可以任意的被修改
     */
    console.log(per.name);
    per.name = 'xun悟空';
    console.log(per.name);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const a = new A(12);
    // console.log(A.num)
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('勋悟空', 15);
})();
