import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

let element = (
  <div>
    <h1>hello</h1>
    <h2>{ 1 + 1}</h2>
  </div>
)
let man = '发热'
let element2 = (
  <div>
    <h1>今天是否隔离</h1>
    <h2>{man === '发热'?<button>隔离</button>:'躺床上'}</h2>
  </div>
)

let element4 = (
  <div>
    <span>躺床上</span>
    <span>竖着躺</span>
  </div>
)
console.log(element4)
man = '发热了'
let element3 = (
  <div>
    <h1>今天是否隔离</h1>
    <h2>{man === '发热'?<button>隔离</button>:element4}</h2>
  </div>
)

let color = 'bgColor'
let src = 'https://www.baidu.com/img/dong_66cae51456b9983a890610875e89183c.gif'
let element5 = (
  <div className={color}>
    红色背景
    <img src={src}/>
  </div>
)
ReactDOM.render(element5,document.getElementById('root'))