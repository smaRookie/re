import * as actionTypes from './actionTypes'
// 创建默认的值
const defaultState = {
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: ''
    }, {
        id: 2,
        title: '社会热点',
        imgUrl: ''
    }],
    articleList: [{
        id: 1,
        imgUrl: '',
        title: 123,
        desc: 'asdf'
    }],
    recommendList: [{
        id: 0,
        imgUrl: '11'
    }, {
        id: 1,
        imgUrl: '22'
    }]
}

export default (state = defaultState, action) => {
    return state
}
