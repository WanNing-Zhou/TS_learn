(function () {

    class Person {
        /**
         * public 修饰的属性可以在任意位置访问(修改) 默认值
         * private 私有属性,私有属性只能在类内部进行访问(修改)
         * protected 受保护的属性,只能在当前类和当前类的字类中访问
         */
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        //自定义的get方法
        getName(){
            return this._name
        }

        /**
         * getter方法来读取属性
         * setter方法用来设置属性
         */
        //TS中的语法

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get age(): number {
            return this._age;
        }

        set age(value: number) {
            if(value >= 0){
                this._age = value;
            }else {
                console.log('山本沃囸你宪芢')
            }
        }
    }

    const  per = new Person('勋悟空',18);
    /**
     * 现在属性是在对象中设置的,属性可以任意的被修改
     */
    console.log(per.name)
    per.name = 'xun悟空'
    console.log(per.name)




    class A {
        protected num: number;
        constructor(num: number) {
            this.num = num;
        }
    }

    class B extends A{
        test(){
            console.log(this.num)
        }
    }

    const a = new A(12)
    // console.log(A.num)

    class C{
        constructor(public name: string, public age:number) {}
    }

    const c = new C('勋悟空',15)


})()