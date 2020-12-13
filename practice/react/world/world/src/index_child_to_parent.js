import React from 'react'
import ReactDOM from 'react-dom'

class ParentCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      childData:''
    }
  }

  render(){
    return (
      <div>
        <h1>子传给父的数据：{this.state.childData}</h1>
        <Child setChildData={this.sendData} />
      </div>
    )
  }

  sendData = (data) => {
    this.setState({
      childData:data
    })
  }
}

class Child extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      msg:'hello world'
    }
  }

  render(){
    return (
      <div>
        <button onClick={ this.sendData }>传递hello world给父元素</button>
        <button onClick={() => this.props.setChildData("aaa") }>传递aaa给父元素</button>
      </div>
    )
  }

  sendData = () => {
    this.props.setChildData(this.state.msg)
  }

}

ReactDOM.render(
  <ParentCom />,
  document.getElementById('root')
)