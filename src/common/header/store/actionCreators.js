import * as actionTypes from './actionTypes'
import axios from 'axios'
const changeList = (data) => {
    return {
        type: actionTypes.CHANGE_LIST,
        data,
        totalPage: Math.ceil(data.length / 10)
    }
}
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

// 使用thunk中间件这里才能实现异步操作
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            dispatch(changeList(res.data.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}
export const mouseEnter = () => {
    return {
        type: actionTypes.MOUSE_ENTER
    }
}
export const mouseLeave = () => {
    return {
        type: actionTypes.MOUSE_LEAVE
    }
}
export const changePage = (val, max) => {
    val++
    if (val >= max) {
        val = 0
    }
    return {
        type: actionTypes.CHANGE_PAGE,
        page: val
    }
}
