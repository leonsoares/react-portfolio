import React, { Component } from "react"
import "./welcome.styles.css"
import AvatarText from "../avatarText/Avatar-text.component.jsx"
import Avatar from "../avatar/Avatar.component.jsx"
import Navbar from "../navBar/Navbar.component.jsx"

class WelcomeSection extends Component {
    constructor(){
        super()
        this.state = {
            smile: false
        }
    }
    
    makeSmile = () => {
        this.setState({ smile: true})
    }
    noSmile = () => {
        this.setState({ smile: false})
    }
    
    render(){
        let smileOpt = this.state.smile ? 1 : 0
        return(
        <div style={{ 
            backgroundImage:`url("images/white__lines__bg.png")` 
          }}
            className="section-container">
            <Navbar/>
            <div className="section-content">
                <AvatarText
                    smileOpt={smileOpt}
                    makeSmile={this.makeSmile}
                    noSmile={this.noSmile}/>
                    
                <Avatar 
                    smileOpt={smileOpt} 
                    noSmile={this.noSmile}
                    makeSmile={this.makeSmile}/>
            </div>
        </div>
        )
    }
}

export default WelcomeSection