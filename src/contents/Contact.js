import React , { Component } from 'react'
import Social from '../components/Social'

class Contact extends Component {
    render() {
        return(
            <div className="condiv contact">
                <h1 className="topic">Contact Me</h1>
                <h3>Email : pakawat_t@kkumail.com</h3>
                <h3>Line  : pkw-mind</h3>
                <h3>Phone : 093-4826094</h3>
                <Social />
            </div>
        )
    }
}

export default Contact