import { takeEvery ,put} from 'redux-saga/effects'
import { INIT_TODO_ACTION } from './actionTypes'
import {getInitListAction} from './actionCreator'
import axios from 'axios'
function* getInitList(){
  try{
    const res = yield axios.get('http://localhost:8000/todoList')
    const action = getInitListAction(res.data)
    yield put(action)
  }catch(e){
    console.log('todoList 请求失败')
  }
}
function* mySaga(){
  yield takeEvery(INIT_TODO_ACTION,getInitList)
}

export default mySaga