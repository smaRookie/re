import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
    render () {
        return (
            <div>
                {
                    this.props.list.map((item, index) => {
                        return (
                            <Link to={`/detail/${item.id}`} key={index}>
                                <div className="listItem">
                                    <img className={'pic'} src={item.imgUrl} alt=""/>
                                    <div className={'listInfo'}>
                                        <h3 className={'title'}>{item.title}</h3>
                                        <p className={'desc'}>{item.desc}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
                <div className={'loadMore'} onClick={this.props.getMoreList}>更多文字</div>
            </div>
        )
    }
}
const mapState = (state) => {
    return {
        list: state.home.articleList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMoreList () {
            dispatch(actionCreators.getMoreList())
        }
    }
}
export default connect(mapState,mapDispatchToProps)(List)
