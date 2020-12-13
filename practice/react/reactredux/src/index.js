import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import { Provider,connect } from 'react-redux'

class Counter extends Component{
  render(){
    const value = this.props.value
    const onAddClick = this.props.onAddClick
    return (
      <div>
        <h1>计数的数量：{value}</h1>
        <button onClick={onAddClick}>数字+1</button>
        <button onClick={this.props.onAddClick5}>数字+5</button>
      </div>
    )
  }
}
const addAction = {
  type:'add'
}
const addAction5 = {
  type:'add5'
}
function reducer(state={num:0},action){
  switch(action.type){
    case 'add':
      state.num++
      break
    case 'add5':
      state.num += 5
      break
    default:
      break
  }
  return {...state}
}
const store = createStore(reducer)

function mapStateToProps(state){
  return{
    value:state.num
  }
}
function mapDispatchToProps(dispatch){
  return {
    onAddClick:()=>{dispatch(addAction)},
    onAddClick5:()=>{dispatch(addAction5)}
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));
