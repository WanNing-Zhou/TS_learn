(function (){
    class Animal {
        name :string;

        constructor(name: string) {
            this.name = name;
        }
        sayHello(){
            console.log('动物再叫')
        }
    }

    class Dog extends Animal{
        age: number;
        constructor(name:string,age:number) {
            //如果在子函数中写了构造函数,在字类构造函数中必须使用super
            super(name);
            this.age = age;
        }
        sayHello() {
            super.sayHello();
        }
    }

})()