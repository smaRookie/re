import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import './index.css'
class Detail extends Component {
    constructor (props) {
        super(props)
    }
    componentDidMount () {
        this.props.getDetail()
    }
    render () {
        return (
            <div className="detailWrap">
                <div className={'header'}>{this.props.title}</div>
                <div className={'content'} dangerouslySetInnerHTML={{__html: this.props.content}}>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.detail.title,
        content: state.detail.content
    }
}
const mapDispatch = (dispatch) => {
    return {
        getDetail () {
            dispatch(actionCreators.getDetail())
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(Detail)
