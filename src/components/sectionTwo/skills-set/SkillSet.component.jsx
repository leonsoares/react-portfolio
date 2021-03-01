import React, { Component } from "react";
import "./skills-set.styles.css"

class SkillSet extends Component {
    constructor(){
        super()
        this.state = {
            startAnimation: false,
            metterBar: {
                opacity: "0",
            },
            metterPointer: {
                left: "0%", 
                opacity: 0
            },
            skillTitle: {
                top: "0%"
            }
        }
    }
    showMetter = () => {
        this.setState({skillTitle: {top: "-3%"}})
        setTimeout(() => { this.setState(prevState =>({
            metterBar: {opacity: 1},
            metterPointer: {opacity: 1, left: "80%"}
        }))}, 100)
    }

    hideMetter = () => {
        this.setState(prevState =>({metterPointer: {opacity: 0, left: "0%"}}))
        setTimeout(() => { this.setState(prevState =>({
            metterBar: {opacity: 0},
            skillTitle: {top: 0}
        }))}, 400)
    }
    
    render(){

        return(
            <div onMouseEnter={this.showMetter}
                 onMouseLeave={this.hideMetter}
                 className="skill-set">
                    <div className="check-box">✓</div>
                    <h3 style={this.state.skillTitle} className="skill-title">JavaScript</h3>
                    <div  style={this.state.metterBar} className="metter-bar">
                        <div style={this.state.metterPointer} className="metter-pointer"></div>
                    </div>
                <p className="skill-description">
                    The base of my platforms used to create 
                    dynamically updating content, 
                    control multimedia, and animate images. 
                    JS has been  in all of my web projects 
                    for the past 3+ years.
                </p>

            </div>
        )
    }
}

export default SkillSet