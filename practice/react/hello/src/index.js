import React from 'react';
import ReactDOM from 'react-dom';
import './App'
 
class Element extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      btn1: 'content show',
      btn2: 'content'
    }
    this.click = this.click.bind(this)
  }

  click(e){
    if(e.target.dataset.index === "1"){
      this.setState({
        btn1:'content show',
        btn2:'content'
      })
    }else{
      this.setState({
        btn1:'content',
        btn2:'content show'
      })
    }
  }
  // 箭头函数不用 this.click = this.click.bind(this)
  // click = (e) => {
  //   if(e.target.dataset.index === "1"){
  //     this.setState({
  //       btn1:'content show',
  //       btn2:'content'
  //     })
  //   }else{
  //     this.setState({
  //       btn1:'content',
  //       btn2:'content show'
  //     })
  //   }
  // }

  render(){
    return (
      <div>
        <button data-index='1' onClick={this.click}>按钮1</button>
        <button data-index='2' onClick={this.click}>按钮2</button>
        <div className={this.state.btn1}>内容1</div>
        <div className={this.state.btn2}>内容2</div>
      </div>
    )
  }
}

ReactDOM.render(<Element />,document.getElementById('root'))