import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Recommend extends PureComponent {
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
                                    style={{background: `url(${item.imgUrl})`, backgroundSize: 'contain'}}>
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
