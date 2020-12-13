import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM,
  DELETE_ITEM
} from './actionTypes'
const defaultState = {
  inputValue:'',
  list:[]
}

export default (state = defaultState,action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if(action.type === CHANGE_INPUT_VALUE){
    newState.inputValue = action.value
  }else if(action.type === ADD_ITEM && state.inputValue){
    newState.list.push(state.inputValue)
    newState.inputValue = ''
  }else if(action.type === DELETE_ITEM){
    newState.list.splice(action.index,1)
  }
  return newState
}