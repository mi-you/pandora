import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
  INIT_TODO_ACTION
} from './actionTypes'

// import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type:CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = () => ({
  type:ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
  type:DELETE_TODO_ITEM,
  index
})
export const getInitListAction = (data) => ({
  type:INIT_LIST_ACTION,
  data
})

export const getTodoList = () => ({
  type:INIT_TODO_ACTION
})
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('http://localhost:8000/todoList')
//     .then(res => {
//       const action = getInitListAction(res.data)
//       dispatch(action)
//     })
//     .catch(err => {})
//   }
// }