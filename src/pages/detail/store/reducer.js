import * as actionTypes from './actionTypes'
// 创建默认的值
const defaultState = {
    title: '',
    content: ''
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.DETAIL_LIST:
            return {
                ...state,
                title: action.title,
                content: action.content
            }
        default: {
            return state
        }
    }
}
