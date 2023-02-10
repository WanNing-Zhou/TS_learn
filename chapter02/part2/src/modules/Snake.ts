export default class Snake{
    //表示蛇的元素
    head:HTMLElement;
    //蛇的身体
    bodies: HTMLCollection;
    //获取蛇的容器
    element: HTMLElement;



    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement; //断言
        this.bodies = this.element.getElementsByTagName('div');
    }

    //获取蛇的坐标(蛇头坐标)
    get X(){
        return this.head.offsetLeft;
    }
    //获取蛇的Y轴坐标
    get Y(){
        return this.head.offsetTop
    }

    //设置蛇头坐标
    set X(value){
        if(this.X === value){
            return;
        }

        //X值得合法范围0-290之间
        if(value < 0 || value > 290){
            //进入判断说明设撞墙了
            throw new Error('蛇撞墙了')
        }

        this.head.style.left = value + 'px';
    }

    //设置蛇头y轴坐标
    set Y(value){

        if(value < 0 || value > 290){
            //进入判断说明设撞墙了
            throw new Error('蛇撞墙了')
        }

        if (this.Y === value){
            return;
        }
        this.head.style.top = value + 'px'
    }

    //增加身体
    addBody(){
        //向element中添加一个div
        this.element.insertAdjacentHTML('beforeend',"<div></div>");

    }

}