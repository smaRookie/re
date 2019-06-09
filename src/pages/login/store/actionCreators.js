import axios from 'axios'
import { actionTypes } from './index'

export const login = (accout, password) => {
    return (dispatch) => {
        axios.get(`/api/login.json?accout=${accout}&password=${password}`).then((res) => {
            console.log(res)
            if (res.data.data) {
                console.log('111')
                dispatch({
                    type: actionTypes.LOGIN,
                    login: res.data.data
                })
            } else {
                alert('登陆失败')
            }
        }).catch((err) => {
            console.log(err)
        })
    }
}
export const loginOut = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.LOGIN_OUT,
            login: false
        })
    }
}
