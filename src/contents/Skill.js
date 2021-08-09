import React , { Component } from 'react'

class Skill extends Component {
    render() {
        return (
            <div className="condiv skills">
                <div className="card">
                    <i class="fab fa-html5 fa-5x" style={{color: "#E34C26"}}></i>
                    <h3>HTML</h3>
                </div>
                <div className="card">
                    <i class="fab fa-css3-alt fa-5x" style={{color: "#3C99DC"}}></i>
                    <h3>CSS</h3>
                </div>
                <div className="card">
                    <i class="fab fa-js-square fa-5x" style={{color: "#F0DB4F"}}></i>
                    <h3>JAVASCRIPT</h3>
                </div>
                <div className="card">
                    <i class="fab fa-react fa-5x" style={{color: "#61DBFB"}}></i>
                    <h3>REACT.JS</h3>
                </div>
                <div className="card">
                    <i class="fab fa-python fa-5x" style={{color: "#4B8BBE"}}></i>
                    <h3>PYTHON</h3>
                </div>
            </div>
        )
    }
}

export default Skill