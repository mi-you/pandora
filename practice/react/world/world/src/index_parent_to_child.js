import React from 'react';
import ReactDOM from 'react-dom';
import './App'

class ParentCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isActive:true
    }
  }

  render(){
    return (
      <div>
        <button onClick={this.changeShow}>控制子元素显示</button>
        <ChildCom isActive={this.state.isActive}/>
      </div>
    )
  }

  changeShow = () => {
    this.setState({
      isActive:!this.state.isActive
    })
  }
}
class ChildCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    let strClass = null
    if(this.props.isActive){
      strClass = ' active'
    }else{
      strClass = ''
    }

    return (
      <div className={'content'+ strClass}>我是子元素的内容</div>
    )
  }
}

ReactDOM.render(
  <ParentCom />,
  document.getElementById('root')
)