import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeList = (data) => ({
  type:constants.CHANGE_LIST,
  data:fromJS(data),
  totalPage:Math.ceil(data.length / 10)

})
export const searchFocusAction = (value) => ({
  type:constants.SEARCH_FOCUS,
  value
})
export const searchBlurAction = (value) => ({
  type:constants.SEARCH_BLUR,
  value
})
export const mouseEnterSearch = (value) => ({
  type:constants.MOUSE_ENTER_SEARCH,
  value
})
export const switchToSwitch = (page) => ({
  type:constants.SWITCH_TO_SWITCH,
  page
})
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
    .then(res => {
      if(res.data.success){
        dispatch(changeList(res.data.data))
      }
    })
    .catch(err => {})
  }
}