import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { actionCreators }  from './store'
class Header extends Component {
    constructor(props) {
        super(props)
    }
    showInfo (val) {
        if (val || this.props.mouseIn) {
            return (
                <div className="searchInfo" onMouseEnter={this.props.mouseEnter} onMouseLeave={this.props.mouseLeave}>
                    <div className="searchTitle">
                        热门文章
                        {/*() => this.props.changePage(this.props.page, this.props.totalPage) 向mapDispathToProps里面的方法传递redux中
                        props的参数时需要通过箭头函数来调用*/}
                        <div className="searchInfoSwitch" onClick={() => this.props.changePage(this.props.page, this.props.totalPage, this.icon)}>
                            <i ref={(val) => {this.icon = val}} className="iconfont spin">&#xe851;</i>换一批
                        </div>
                    </div>
                    <div className="searchInfoList">
                        {this.props.list.slice(this.props.page * 10, this.props.page * 10 + 10).map((item) => {
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
                               onFocus={() => this.props.inputFocus(this.props.list)}
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
        list: state.header.list,
        page: state.header.page,
        mouseIn: state.header.mouseIn,
        totalPage: state.header.totalPage
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        inputFocus (list) {
            // // 创建一个action
            // const action = {
            //     type: 'search_focus'
            // }
            // //  向reducer派发action
            // dispath(action)
            (!list.length) && dispatch(actionCreators.getList())
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
        },
        mouseEnter () {
            dispatch(actionCreators.mouseEnter())
        },
        mouseLeave () {
            dispatch(actionCreators.mouseLeave())
        },
        changePage (page, totalPage, dom) {
            let originAngle = dom.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            dom.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            dispatch(actionCreators.changePage(page, totalPage))
        },
    }
}
// 连接redux
export default connect(mapStateToProps, mapDispathToProps)(Header)
