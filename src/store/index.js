import { createStore, applyMiddleware } from 'redux'
// 使用redux-thunk  不使用中间件 action需要返回对象，不能返回函数
import thunk from 'redux-thunk'
import reducer from './reducer'

const store = createStore(
    reducer,
    //  使用thunk
    applyMiddleware(thunk)
)

export default store
