
class Snake {
    //表示🐍的元素
    head: HTMLElement
    //表示🐍的身体（包括蛇头）
    bodies: HTMLCollection
    //表示🐍的容器
    element: HTMLElement
    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake>div') as HTMLElement
        this.bodies = this.element.getElementsByTagName('div')
    }
    //获取蛇头的坐标
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }
    //设置蛇头的位置
    set X(value: number) {
        if (this.X === value) {
            return
        }
        //x的合法值是0-290之间
        if (value < 0 || value > 290) {
            throw new Error('🐍撞墙了啊啊啊啊~~~')
        }
        //设置不允许掉头,如果发生掉头，让它继续往前
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft===value){
            if(value>this.X){//向右掉头，让它继续向左
                value=this.X-10
            }else{
                value=this.X+10
            }
        }


        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkHeadBody()
    }
    set Y(value: number) {
        if (this.Y === value) {
            return
        }
        //Y的合法值是0-290之间
        if (value < 0 || value > 290) {
            throw new Error('🐍撞墙')
        }
        //设置不允许掉头,如果发生掉头，让它继续往前
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop===value){
            if(value>this.Y){//向右掉头，让它继续向左
                value=this.Y-10
            }else{
                value=this.Y+10
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkHeadBody()
    }
    //🐍增加身体的方法
    addBody() {
        //向element里面添加一个div
        const newDiv: HTMLElement = document.createElement('div')
        this.element.insertAdjacentElement('beforeend', newDiv)
    }
    //🐍身体移动的方法
    moveBody() {
        //遍历所有的身体，不包含头部，所以是用的length-1,然后到最后一个，i=0
        for (let i = this.bodies.length - 1; i > 0; i--) {
            //取到距离头部近的上一个方块位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            //将其设置到当前身体上，也就是后面的方块都往前移动一格
            (this.bodies[i] as HTMLElement).style.left=X+'px';
            (this.bodies[i] as HTMLElement).style.top=Y+'px';
        }
    }
    //检查🐍头是否碰到自己
    checkHeadBody(){
        //获取所有的身体，检查和蛇头的位置是否重叠，一旦重叠则发生碰撞
        for(let i =1;i<this.bodies.length;i++){
            let bd=this.bodies[i] as HTMLElement
            if(this.X===bd.offsetLeft  && this.Y===bd.offsetTop){
                throw new Error("蛇的身体发生了碰撞")
            }
        }
    }
}
export default Snake

