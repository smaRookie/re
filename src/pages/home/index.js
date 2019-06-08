import React, { PureComponent } from 'react'
import List from './component/List'
import Recommend from './component/Recommend'
import ToPic from './component/ToPic'
import Writer from './component/Writer'
import './index.css'
import { actionCreators } from './store/index'
import { connect } from 'react-redux'

class Home extends PureComponent {
    componentDidMount () {
        this.props.changeHomeData()
        this.bindEvent()
        this.handleScrollTop = this.handleScrollTop.bind(this)
    }
    componentWillUnmount() {
        this.removeEvent()
    }
    removeEvent () {
        window.removeEventListener('scroll', this.props.changeScroll)
    }
    bindEvent () {
        window.addEventListener('scroll', this.props.changeScroll)
    }
    handleScrollTop () {
        window.scroll(0, 0)
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
                {
                    this.props.showScroll ? <div className={'toTop'} onClick={this.handleScrollTop}>顶部</div> : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showScroll: state.home.showScroll
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeHomeData () {
            dispatch(actionCreators.getHomeData())
        },
        changeScroll () {
            if (document.documentElement.scrollTop > 200) {
                dispatch(actionCreators.changeScroll(true))
            } else {
                dispatch(actionCreators.changeScroll(false))
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(Home)
