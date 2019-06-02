// 把其他的目录下的reducer整合起来
import { combineReducers } from 'redux';
import { reducer as headerReducer} from './../common/header/store'

// 把其他reducer整合起来，导出
const reducer =  combineReducers({
    header: headerReducer
})
export default reducer
