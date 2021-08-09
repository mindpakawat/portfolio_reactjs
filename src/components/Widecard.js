import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return(
            <div className="widecard">
                <div className="widecard-con">
                    <h3>{this.props.title}</h3>
                    <h4 className="widecard-text">{this.props.where}</h4>
                    <h4 className="widecard-text">{this.props.from} - {this.props.to}</h4>
                </div>
            </div>
        )
    }
}

export default Widecard