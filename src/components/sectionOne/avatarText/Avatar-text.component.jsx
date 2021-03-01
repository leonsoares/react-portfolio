import React from "react"
import "./avatarText.styles.css"

const AvatarText = ({smileOpt, makeSmile, noSmile}) => {
    return(
        <div className="welcome-text-container">
            <h3 class="main-title">I'm Leon Soares</h3>
            <h3 class="main-title main-title-blue">Computer Programmer</h3>
            <p className="whoAmI-text">
                I am a project-based developer looking to build a resilient team. 
                I collaborate with my clients to construct the most complete and 
                comprehensive user interfaces.
            </p>
            <p className="add-marging-top"> Let’s build something!</p>
            <button className="button"
                onMouseEnter={makeSmile}
                onMouseOut={noSmile}>
                contact me
            </button>
        </div>
    )
}

export default AvatarText
