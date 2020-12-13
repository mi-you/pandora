import React from 'react'
import { connect } from 'react-redux'
import {
  getChangeInputValueAction,
  getAddItemAction,
  getDeleteItem
} from './store/actionCreator'

const TodoList = (props) => {
  const {inputValue,list,changeInputValue,handleClick,handleDeleteItem} = props
    return (
      <div>
        <input value={inputValue} onChange={changeInputValue}/>
        <button onClick={handleClick}>提交</button>
        <ul>
          { list.map((item,index) => (
              <li key={index} onClick={() => handleDeleteItem(index)}>{item}</li>
          ))}
        </ul>
      </div>
    )
}
const mapStateToProps = (state) => {
  return {
    inputValue:state.inputValue,
    list:state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e){
      const action = getChangeInputValueAction(e.target.value)
      dispatch(action)
    },
    handleClick(){
      const action = getAddItemAction()
      dispatch(action)
    },
    handleDeleteItem(index){
      const action = getDeleteItem(index)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)