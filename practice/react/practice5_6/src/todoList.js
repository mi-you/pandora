import React, { Component } from 'react'
import store from './store'
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,getTodoList} from './store/actionCreator'
import TodoListUI from './TodoListUI'

class TodoList extends Component{
  constructor(props){
    super(props)
    this.state = store.getState()
    // 这个组件订阅store，store数据改变，就会执行
    store.subscribe(this.handleStoreChange)
  }
  render(){
    return (
        <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
        ></TodoListUI>
      )
  }
  componentDidMount(){
    const action = getTodoList()
    store.dispatch(action)
  }

  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick = () => {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete = (e,index) => {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
    
  }
  handleStoreChange = () => {
    this.setState(store.getState())
  }

}
export default TodoList