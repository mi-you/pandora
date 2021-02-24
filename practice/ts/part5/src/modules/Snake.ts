class Snake{
  element:HTMLElement;
  head:HTMLElement;
  bodies:HTMLCollection;

  constructor(){
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  get X(){
    return this.head.offsetLeft
  }
  get Y(){
    return this.head.offsetTop
  }
  set X(value:number){
    if(this.X === value){
      return;
    }
    if(value < 0 || value > 290){
      throw new Error('蛇撞墙了')
    }
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
      if(value > this.X){
        value = this.X - 10;
      }else{
        value = this.X + 10;
      }
    }
    this.moveBody();
    this.head.style.left = value + 'px';
    this.checkHeadBody();
  }
  set Y(value:number){
    if(this.Y === value){
      return;
    }
    if(value < 0 || value > 290){
      throw new Error('蛇撞墙了')
    }
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
      if(value > this.Y){
        value = this.Y - 10;
      }else{
        value = this.Y + 10;
      }
    }
    this.moveBody();
    this.head.style.top = value + 'px';
    this.checkHeadBody();
  }
  addBody(){
    this.element.insertAdjacentHTML("beforeend","<div></div>")
  }
  moveBody(){
    for(let i = this.bodies.length - 1;i > 0; i--){
      const el = this.bodies[i-1] as HTMLElement;
      const el2 = this.bodies[i] as HTMLElement;
      let X = el.offsetLeft;
      let Y = el.offsetTop;
      el2.style.left = X + 'px';
      el2.style.top = Y + 'px';
    }
  }
  checkHeadBody(){
    for(let i = 1,len = this.bodies.length;i < len; i++){
      let bd = this.bodies[i] as HTMLElement;
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
        throw new Error('蛇自己了')
      }
    }
  }
}

export default Snake