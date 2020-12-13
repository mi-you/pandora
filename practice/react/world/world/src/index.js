import React from 'react'
import ReactDOM from 'react-dom'

class Welcome extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list: [
        {
          name:'课程1',
          content:'这里是课程1的内容'
        },{
          name:'课程2',
          content:'这里是课程2的内容'
        },{
          name:'课程3',
          content:'这里是课程3的内容'
        }
      ]
    }
  }

  render(){
    let ulList = this.state.list.map((item,index) => {
      return <ItemLi key={index} data={item} index={index}></ItemLi>
    })
    return (
        <div>
          <h3>我的课程</h3>
          <ul>
            {ulList}
          </ul>
        </div>
    )
  }
}

class ItemLi extends React.Component{
  constructor(props){
    super(props)
    this.state = {
   
    }
  }
  
  render(){
    return (
      <li onClick={e => this.clickEvent(this.props.index,this.props.data.name,e)}>
        <h3>{this.props.index + 1}:{this.props.data.name}</h3>
        <p>{this.props.data.content}</p>
      </li>
    )
  }
  
  clickEvent = (index,title,event) => {
    alert(index + "-" + title)
  }
}


ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
)