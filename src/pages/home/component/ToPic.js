import React, { Component } from 'react'
import { connect } from 'react-redux'

class ToPic extends Component {
    render () {
        return (
            <div className={'topicWrap'}>
                {
                    this.props.list.map((item) => {
                        return (
                            <div className={'toppicItem'} key={item.id}>
                                <img className={'topic-pic'} src={item.imgUrl} alt=""/>
                                {item.title}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
const mapState = (state) => {
    return {
        list: state.home.topicList
    }
}
export default connect(mapState, null)(ToPic)
