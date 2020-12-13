import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

const reducer = function(state={num:0},action){
  let stateCopy = Object.assign({},state)
  console.log("action:",action)
  switch(action.type){
    case "add":
      stateCopy.num++
      break
    case "decrease":
      stateCopy.num--
      break
    default :
      break
  }
  return stateCopy
}
const store= createStore(reducer)

function add(){
  store.dispatch({type:'add',content:'addddddddddddd'})
}
function decrease(){
  store.dispatch({type:'decrease'})
}

const Counter = function Counter(props){
  let state = store.getState()
  return (
    <div>
      <h1>计数数量：{state.num}</h1>
      <button onClick={add}>计数+1</button>
      <button onClick={decrease}>计数-1</button>
    </div>
  )
}


ReactDOM.render(<Counter></Counter>,document.getElementById('root'));
store.subscribe(()=>{
  ReactDOM.render(<Counter></Counter>,document.querySelector('#root'))
})
