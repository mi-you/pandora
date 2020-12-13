import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{
  render(){
    const {content} = this.props
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }

  handleClick = () => {
    const {deleteItem,index} = this.props
    deleteItem(index)
  }
  shouldComponentUpdate(nextProps,nextState){
    // 做判断的原因是，父组件的输入框在每次输入值时都会调input的change事件
    // 父组件的render会不停的重新渲染，而子组件会跟着父组件做无意义的渲染
    if(nextProps.content !== this.props.content){
      return true
    }
    return false
  }
  //一个组件要从父组件接收props参数
  //这个组件第一次存在父组件是不会别执行的
  //如果这个组件之前已存在这执行
  componentWillReceiveProps(){
    console.log('child componentWillReceiveProps')
  }
}
// 限制传值的类型，只会警告不会中断程序执行
TodoItem.propTypes = {
  content:PropTypes.string.isRequired,//字符串，必须传
  deleteItem:PropTypes.oneOfType([PropTypes.func,PropTypes.number]),//函数或数字
  index:PropTypes.number, //数组的内容是数字或字符串
  // index:PropTypes.arrayOf(PropTypes.number,PropTypes.string) //数组的内容是数字或字符串
}
TodoItem.defaultProps = {
  content:'这里是默认值'
}
export default TodoItem