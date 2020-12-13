 //Fragment是一个组件，相当于一个占位符
 import React, {Component,Fragment} from 'react'
 import TodoItem from './TodoItem'
 import './style.css'
 
 class TodoList extends Component{
   //constructor是最先被执行的函数
   constructor(props){
     super(props)
     // 当组件的state或props发改变时，render函数会被重新执行
     this.state = {
       inputValue:'',
       list:[]
     }
   }
   // 组件即将被挂载执行
   componentWillMount(){
     console.log('componentWillMount')
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
   // 组件挂载完成执行
   componentDidMount(){
     console.log('componentDidMount')
   }
   // 组件更新之前,执行，返回值boolean决定更新或不更新
   shouldComponentUpdate(){
     console.log('shouldComponentUpdate')
     return true
   }
   // 组件更新前执行，
   componentWillUpdate(){
     console.log('componentWillUpdate')
   }
   //组件更新完成
   componentDidUpdate(){
     console.log('componentDidUpdate')
   }
   //即将被移除时
   componentWillUnmount(){
     console.log('componentWillUnmount')
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
     // return this.state.list.map((item,index) => {
     //   return (
     //     <TodoItem key={index} content={item}></TodoItem>
     //     <li 
     //     key={index} 
     //     onClick={(e) => this.handleItemDelete(e,index)}
     //     dangerouslySetInnerHTML={{__html:item}}
     //     >
     //       {/* 有dangerouslySetInnerHTML时这里不用写：{item} */}
     //     </li>
     //   )
     // })
   }
 
   handleInputChange = (e) => {
     //方式1传对象
     // this.setState({
     //   inputValue:e.target.value
     // })
 
     //方式2传函数  推荐
     // 由于传入的函数是异步调用，这里保存一下e.target.value
     const value = e.target.value
     console.log('this.input === e.target',this.input === e.target)
     // prevState是修改前的state,可以理解成this.state
     this.setState((prevState) => ({
       inputValue:value
     }),() => {
       // 这里是数据，渲染DOM更新后的回调
     })
   }
 
   handleBtnClick = (e) => {
     // this.setState({
     //   list:[...this.state.list,this.state.inputValue]
     // })
     this.setState((prevState) => ({
       list:[...prevState.list,prevState.inputValue],
       inputValue:''
     }))
   }
 
   handleItemDelete = (index) => {
     // react里的有个概念innumerable
     // 就是不允许直接修改state里的数据
     // const list = [...this.state.list]
     // list.splice(index,1)
     // this.setState({
     //   list:list
     // })
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