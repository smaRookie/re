import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { actionCreators }  from './store'
class Header extends Component {
    constructor(props) {
        super(props)
    }
    showInfo (val) {
        if (val) {
            return (
                <div className="searchInfo" >
                    <div className="searchTitle">
                        热门文章
                        <div className="searchInfoSwitch">换一批</div>
                    </div>
                    <div className="searchInfoList">
                        {this.props.list.splice(0, 10).map((item) => {
                            return (
                                <div className="searchInfoItem" key={item}>{item}</div>
                            )
                        })}
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
    render() {
        return (
            <div className="header">
                <a href="/" className="icon"></a>
                <div className="nav">
                    <span className="left nav-item nav-active">首页</span>
                    <span className="left nav-item">下载App</span>
                    <span className="right nav-item">登录</span>
                    <span className="right nav-item"><i className="iconfont">&#xe636;</i></span>
                    <div className="searchWrap">
                        <input className={`search ${this.props.focused ? 'focused' : ''}`}
                               placeholder="搜索"
                               onFocus={this.props.inputFocus}
                               onBlur={this.props.inputBlur}
                        >
                        </input>
                        <i className="iconfont">&#xe614;</i>
                        {this.showInfo(this.props.focused)}
                    </div>
                </div>
                <div className="operation">
                    <div className="reg">注册</div>
                    <div className="writting">
                        <i className="iconfont">&#xe615;</i>
                        写文章
                    </div>
                </div>
            </div>
        )
    }
}

// 无状态组件  上面的写法也莫得问题   无状态组件性能要好些
// const Header = (props) => {
//     const showInfo = (val) => {
//         if (val) {
//             return (
//                 <div className="searchInfo" >
//                     <div className="searchTitle">
//                         热门文章
//                         <div className="searchInfoSwitch">换一批</div>
//                     </div>
//                     <div className="searchInfoList">
//                         <div className="searchInfoItem">教育</div>
//                         <div className="searchInfoItem">体育</div>
//                         <div className="searchInfoItem">娱乐</div>
//                         <div className="searchInfoItem">音乐</div>
//                     </div>
//                 </div>
//             )
//         } else {
//             return null
//         }
//     }
//     return (
//         <div className="header">
//             <a href="/" className="icon"></a>
//             <div className="nav">
//                 <span className="left nav-item nav-active">首页</span>
//                 <span className="left nav-item">下载App</span>
//                 <span className="right nav-item">登录</span>
//                 <span className="right nav-item"><i className="iconfont">&#xe636;</i></span>
//                 <div className="searchWrap">
//                     <input className={`search ${this.props.focused ? 'focused' : ''}`}
//                            placeholder="搜索"
//                            onFocus={this.props.inputFocus}
//                            onBlur={this.props.inputBlur}
//                     >
//                     </input>
//                     <i className="iconfont">&#xe614;</i>
//                     {showInfo(this.props.focused)}
//                 </div>
//             </div>
//             <div className="operation">
//                 <div className="reg">注册</div>
//                 <div className="writting">
//                     <i className="iconfont">&#xe615;</i>
//                     写文章
//                 </div>
//             </div>
//         </div>
//     )
// }

// 取出redux里面的数据
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused, // 把redux里面数据中的focused映射过来.组建中通过this.props来调用
        list: state.header.list
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        inputFocus () {
            // // 创建一个action
            // const action = {
            //     type: 'search_focus'
            // }
            // //  向reducer派发action
            // dispath(action)
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        inputBlur () {
            // // 创建一个action
            // const action = {
            //     type: 'search_blur'
            // }
            // //  向reducer派发action
            // dispath(action)
            dispatch(actionCreators.searchBlur())
        }
    }
}
// 连接redux
export default connect(mapStateToProps, mapDispathToProps)(Header)
