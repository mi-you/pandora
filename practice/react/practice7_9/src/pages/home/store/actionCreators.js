import axios from 'axios'
import * as constants from './constants'
const changeHomeData = (result) => ({
  type:constants.CHANGE_HOME_DATA,
  list:result.list
})
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
    .then(res => {
      const result = res.data
      if(result.success){
        dispatch(changeHomeData(result))
      }
    })
    .catch(err => {})
  }
}