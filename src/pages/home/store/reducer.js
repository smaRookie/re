import * as actionTypes from './actionTypes'
// 创建默认的值
const defaultState = {
    topicList: [],
    articleList: [],
    recommendList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA: {
            return {
                ...state,
                topicList: action.topicList,
                articleList: action.articleList,
                recommendList: action.recommendList,
            }
        }
        case actionTypes.LOAD_MORE: {
            return {
                ...state,
                articleList: [...state.articleList,...action.articleList],
            }
        }
        default: {
            return state
        }
    }
}
