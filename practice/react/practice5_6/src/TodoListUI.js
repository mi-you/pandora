import React from 'react'
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{margin:'10px'}}>
      <Input 
        value={props.inputValue}
        onChange={props.handleInputChange}
        placeholder='todo info' 
        style={{width:'300px',marginRight:'10px'}}
      />
      <Button type='primary' onClick={props.handleBtnClick}>提价</Button>
      <List
        style={{width:'800px',marginTop:'10px'}}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => <List.Item onClick={(e) => props.handleItemDelete(e,index)}>{item}</List.Item>}
      />
    </div>
  )
}

// class TodoListUI extends Component{
//   render(){
//     return (
//       <div style={{margin:'10px'}}>
//         <Input 
//           value={this.props.inputValue}
//           onChange={this.props.handleInputChange}
//           placeholder='todo info' 
//           style={{width:'300px',marginRight:'10px'}}
//         />
//         <Button type='primary' onClick={this.props.handleBtnClick}>提价</Button>
//         <List
//           style={{width:'800px',marginTop:'10px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item,index) => <List.Item onClick={(e) => this.props.handleItemDelete(e,index)}>{item}</List.Item>}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI