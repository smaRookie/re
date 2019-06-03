import * as actionTypes from './actionTypes'
import axios from 'axios'
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

const changeList = (data) => {
    return {
        type: actionTypes.CHANGE_LIST,
        data
    }
}
// 使用thunk中间件这里才能返回函数， 不然aciotn只能返回普通的对象
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            dispatch(changeList(res.data.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}
