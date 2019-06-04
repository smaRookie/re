import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component {
    render () {
        return (
            <div>
                {
                    this.props.list.map((item) => {
                        return (
                            <div className="listItem" key={item.id}>
                                <img className={'pic'} src={item.imgUrl} alt=""/>
                                <div className={'listInfo'}>
                                    <h3 className={'title'}>{item.title}</h3>
                                    <p className={'desc'}>{item.desc}</p>
                                </div>
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
        list: state.home.articleList
    }
}
export default connect(mapState,null)(List)
