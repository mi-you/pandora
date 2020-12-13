import * as constants from './constants'
import { fromJS } from 'immutable'

// immutable库
// immutable对象 不可变更对象

const stateDefault = fromJS({
  focused:false,
  mouseIn:false,
  list:[],
  page:1,
  totalPage:1
})

// immutable对象的方法会结合immutable对象的值
// 和设置的值，返回一个全新的对象
export default (state = stateDefault,action) => {
  switch(action.type){
    case constants.SEARCH_FOCUS:
      return state.set('focused',action.value)
    case constants.SEARCH_BLUR:
      return state.set('focused',action.value)
    case constants.CHANGE_LIST:
      // return state.set('list',action.data).set('totalPage',action.totalPage)
      return state.merge({
        list:action.data,
        totalPage:action.totalPage
      })
    case constants.MOUSE_ENTER_SEARCH:
      return state.set('mouseIn',action.value)
    case constants.SWITCH_TO_SWITCH:
      return state.set('page',action.page)
    default:
      return state
  }
}