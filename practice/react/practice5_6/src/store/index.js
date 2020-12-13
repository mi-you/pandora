import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk' //中间件，可以在action中发请求，action可以是函数了
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

// 原则：只有一个store
// 原则：只有store可以改变自己的数据，其他地方不要改
// createStore,store.dispatch,store.getState,store.subscribe
const store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(todoSagas)

export default store