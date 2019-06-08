import axios from 'axios'
import { actionTypes } from './index'

export const getDetail = () => {
    return (dispatch) => {
        axios.get('/api/detail.json').then((res) => {
            dispatch({
                type: actionTypes.DETAIL_LIST,
                title: res.data.data.title,
                content: res.data.data.content
            })
        }).catch((err) => {
            console.log(err)
        })
    }
}
