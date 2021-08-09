import React , { Component } from 'react'
import Widecard from '../components/Widecard'

class Education extends Component {
    render() { 
        return(
            <div className="condiv">
                <h1 className="topic">Education</h1>
                <Widecard title="Computer Engineering" where="Khon Kaen University" from="2016" to="Present" />
                <Widecard title="Student" where="Benchama Maharat School" from="2014" to="2016" />
                <Widecard title="Student" where="Assumption College Ubon" from="2012" to="2016" />
            </div>
        )

    }
}

export default Education