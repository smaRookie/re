import React, { Component } from 'react'
import { connect } from 'react-redux'

class Recommend extends Component {
    render () {
        const { recommendList } = this.props
        return (
            <div>
                <div className={'recommendWrap'}>
                    {
                        recommendList.map((item) => {
                            return (
                                <div
                                    className={'recommendItem'}
                                    key={item.id}
                                    style={{background: `url(${item.imgUrl})`}}>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        recommendList: state.home.recommendList
    }
}
export default connect(mapStateToProps, null)(Recommend)
