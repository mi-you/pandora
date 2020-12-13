import { fromJS } from 'immutable'
import * as constants from './constants'

const stateDefault = fromJS({
  list:[]
})

export default (state = stateDefault,action) => {
  switch(action.type){
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        list:fromJS(action.list)
      })
    default:
      return state
  }
}