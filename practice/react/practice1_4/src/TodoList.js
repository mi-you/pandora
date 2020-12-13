 //Fragment是一个组件，相当于一个占位符
import React, {Component,Fragment} from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'
import './style.css'

class TodoList extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue:'',
      list:[]
    }
  }
  render(){
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input 
            id='insertArea' 
            className='input' 
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
            ref={(input) => {this.input = input}}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
  // ajax请求约定放在这里
  componentDidMount(){
    axios.get('http://localhost:8000/todoList')
    .then(res => {
      this.setState(() => ({
          list:[...res.data]
      }))
    })
    .catch(res => {alert("err")})
  }

  getTodoItem = () => {
    return this.state.list.map((item,index) => {
      return (
        <TodoItem 
        key={index}
        index={index}
        content={item}
        deleteItem={this.handleItemDelete}
        ></TodoItem>
      )
    })
  }

  handleInputChange = (e) => {
    const value = e.target.value
    this.setState((prevState) => ({
      inputValue:value
    }))
  }

  handleBtnClick = (e) => {
    this.setState((prevState) => ({
      list:[...prevState.list,prevState.inputValue],
      inputValue:''
    }))
  }

  handleItemDelete = (index) => {
    this.setState((prevState) => {
      const list = [...this.state.list]
      list.splice(index,1)
      return {
        list
      }
    })
  }
}
export default TodoList