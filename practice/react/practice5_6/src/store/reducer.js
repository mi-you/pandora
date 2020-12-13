import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from './actionTypes'

const defaultState = {
  inputValue:'',
  list:[]
}

// 原则：reducer可以接收state，但绝不能修改state
// 原则：reducer因是纯函数（给固定的值就有固定的输出，而不会有副作用）
// state 可以理解为是上一次state里存储的数据
export default (state = defaultState,action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if(action.type === CHANGE_INPUT_VALUE){
    newState.inputValue = action.value
    return newState
  }else if(action.type === ADD_TODO_ITEM){
    if(newState.inputValue){
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    }
  } else if(action.type === DELETE_TODO_ITEM){
    newState.list.splice(action.index,1)
    return newState
  } else if(action.type === INIT_LIST_ACTION){
    newState.list = action.data
    return newState
  }
  return state
}