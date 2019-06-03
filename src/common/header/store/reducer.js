import * as actionTypes from './actionTypes'
// 创建默认的值
const defaultState = {
    focused: false,
    list: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS: {
            return {
                ...state,
                focused: true
            }
        }
        case actionTypes.SEARCH_BLUR: {
            return {
                ...state,
                focused: false
            }
        }
        case actionTypes.CHANGE_LIST: {
            return {
                ...state,
                list: action.data
            }
        }
    }
    return state
}
