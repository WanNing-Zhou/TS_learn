class Dog{
    name = '旺财';
    age = 3;

    /**
     *constructor被称为构造函数
     * 构造函数会在对象创建时调用
     */
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }

    bark(){
        alert('汪汪汪');
        //在方法中可以通过this来表示当前调用方法的对象
        console.log(this)
    }

}


const dog1 = new Dog('勋悟空',2);
const dog2 = new Dog('往往',3);
const dog3 = new Dog('开发',4);
const dog4 = new Dog('狗管理',4);


console.log(dog1===dog2)
dog1.bark()