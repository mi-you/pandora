class Food{
  element:HTMLElement;

  constructor(){
    // 因为获取id对应的DOM可能获取不到
    // ！表示这个你不用管了，我自己知道了(自己确认能获取到DOM)
    this.element = document.getElementById('food')!;
  }
  
  // 定义一个获取食物轴坐标的方法
  get X(){
    return this.element.offsetLeft;
  }
  get Y(){
    return this.element.offsetTop;
  }
  // 修改食物的位置
  change(){
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;
    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}

export default Food