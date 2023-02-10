import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";


//游戏控制器,控制其他所有类
export default class GameControl{
    //定义三个属性
    //蛇
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    //创建一个属性用来记录蛇的存活状态
    isLive = true;

    //创建一个属性,存操作方向
    direction: string = 'Right';

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel()
        this.init();
    }

    //游戏的初始化方法
    init(){
        // 绑定键盘按下的事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        //调用run方法,使蛇移动
        this.run()
    }

    //创建一个键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        //检擦event.key的值是否合法(用户是否按了正确的按键)

        //修改direction属性
        this.direction = event.key!;
    }

    //让蛇移动
    run(){
        /**
         * 根据方向(this.direction)来使蛇的位置改变
         * up top减少
         * 向下 top 增加
         * 向左 left 减少
         * 向右 left增加
         */
        //获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        //根据按键方向计算
        switch (this.direction){
            case "ArrowUp":
            case "Up":
                Y = Y-10;
                break;
            case "ArrowDown":
            case "Down":
                Y = Y + 10
                break;
            case "ArrowLeft":
            case "Left":
                X = X-10;
                break;
            case "ArrowRight":
            case "Right":
                X = X+10;
                break;
        }

        //检查蛇是否吃到了食物
        this.checkEat(X,Y)




        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (e){
            //进入人道catch,说明出现了异常,游戏结束
            alert('蛇蛇我啊,死亡啦,死因:'+(e as any).message!)
            this.isLive = false;
        }


       this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30);

    }

    //检查蛇是否吃到事物

    checkEat(X:number,Y:number){
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change() //重置食物位置
            this.scorePanel.addScore(); //分数增加
            this.snake.addBody()//蛇增加一节
        }
    }

}
