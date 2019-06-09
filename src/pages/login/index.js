import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import './index.css'
class Login extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        if (this.props.loginState) {
            return <Redirect to={'/'}></Redirect>
        } else {
            return (
                <div className="loginWrap">
                    <div className={'LoginBox'}>
                        <input type="text" className={'loginInput'} placeholder={'账号'} ref={(u) => {this.account = u}} />
                        <input type="password" className={'loginInput'} placeholder={'密码'} ref={(input) => {this.password = input}} />
                        <div className={'btn'} onClick={() => {this.props.login(this.account, this.password)}}>登录</div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loginState: state.login.login
    }
}
const mapDispatch = (dispatch) => {
    return {
        login (accoutElement, passwordElement) {
            dispatch(actionCreators.login(accoutElement.value, passwordElement.value))
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(Login)
