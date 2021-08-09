import React, { Component } from 'react'
import profilepic from '../img/profile_pic.jpg'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="topic">About Me</h1>
                <img src={profilepic} className="profile-pic" />
                <h3>I am Pakawat</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium amet cumque nam quasi tempora commodi molestiae modi esse, porro quis, odit facilis. Deleniti pariatur possimus esse dolore ad quisquam debitis amet explicabo inventore nemo, dignissimos mollitia nobis quas officiis eum aspernatur fuga sequi obcaecati ullam. Necessitatibus dolorem earum vitae temporibus! Aperiam perferendis qui earum molestias eius eveniet impedit odio? Ut, eos praesentium dicta sint animi maxime autem cupiditate consectetur debitis quasi placeat iusto tempore libero optio aliquam laboriosam? Fugiat tenetur esse quidem molestiae excepturi, et dolorem repellendus distinctio incidunt iusto similique sapiente ad atque, praesentium accusantium. Magni, error tempora.</p>
            </div>
        )
    }
}
export default About