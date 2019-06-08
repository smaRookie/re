import React, { Component } from 'react'
import List from './component/List'
import Recommend from './component/Recommend'
import ToPic from './component/ToPic'
import Writer from './component/Writer'
import './index.css'
import { actionCreators } from './store/index'
import { connect } from 'react-redux'

class Home extends Component {
    componentDidMount () {
        this.props.changeHomeData()
    }
    render () {
        return (
            <div className="homeWrap">
                <div className={'homeLeft'}>
                    <img className={'bannerImg'} src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <ToPic/>
                    <List/>
                </div>
                <div className={'homeRight'}>
                    <Recommend/>
                    <Writer/>
                </div>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeHomeData () {
            dispatch(actionCreators.getHomeData())
        }
    }
}
export default connect(null, mapDispatch)(Home)
