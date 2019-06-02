import * as actionTypes from './actionTypes'
// 创建默认的值
const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    if (action.type === actionTypes.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }
    if (action.type === actionTypes.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    return state
}
