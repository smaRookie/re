import * as actionTypes from './actionTypes'
// 创建默认的值
const defaultState = {
    login: false,
    a: 'aaa'
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: {
            console.log(action.login)
            return {
                login: action.login
            }
        }
        case actionTypes.LOGIN_OUT: {
            return {
                login: action.login
            }
        }
        default: {
            return state
        }
    }
}
