import React , { Component } from 'react'
import Social from '../components/Social'
import profilepic from '../img/profile_pic.jpg'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return(
            <div className="condiv home">
                <img src={profilepic} alt="" className="profile-pic"/>
                <ReactTypingEffect text={['I am Pakawat Tongchanda']} speed={90} eraseDelay={200} className="typing" />
                <Social />
            </div>
        )
    }
}

export default Home 