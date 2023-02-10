//引入样式
import './style/index.less'

//定义食物类Food
class Food{
    //定义一个属性表示食物所对应的元素
    element:HTMLElement;
    constructor() {
        //获取页面中的food元素，并将器赋值给element
        this.element = document.getElementById('food')!;
    }
}