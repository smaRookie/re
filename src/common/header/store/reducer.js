import * as actionTypes from './actionTypes'
// 创建默认的值
const defaultState = {
    focused: false,
    list: [],
    page: 0,
    mouseIn: false,
    totalPage: 0
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
            console.log(action.val)
            return {
                ...state,
                focused: false
            }
        }
        case actionTypes.MOUSE_ENTER: {
            console.log(action.val, state)
            return {
                ...state,
                mouseIn: true
            }
        }
        case actionTypes.MOUSE_LEAVE: {
            console.log(action.val, state)
            return {
                ...state,
                mouseIn: false
            }
        }
        case actionTypes.CHANGE_LIST: {
            console.log(action.val)
            return {
                ...state,
                list: action.data,
                totalPage: action.totalPage
            }
        }
        case actionTypes.CHANGE_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
    }
    return state
}
