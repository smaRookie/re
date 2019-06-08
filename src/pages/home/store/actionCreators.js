import axios from 'axios'
import { actionTypes } from './index'
export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data
            console.log(res, 111)
            dispatch({
                type: actionTypes.CHANGE_HOME_DATA,
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            })
        }).catch((err) => {
            console.log(err)
        })
    }
}
export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res) => {
            const action = {
                type: actionTypes.LOAD_MORE,
                articleList: res.data.data
            }
            dispatch(action)
        }).catch((err) => {

        })
    }
}

export const changeScroll = (flag) => {
    const action = {
        type: actionTypes.CHANGE_SCROLL,
        showScroll: flag
    }
    return action
}
