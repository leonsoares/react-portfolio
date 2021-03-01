import React from 'react';
import "./avatar.styles.css"

 const Avatar = ({smileOpt, makeSmile, noSmile}) => {
    
    return (
        <div className="avatarContainer">
            
            <div className="avatarImages"
                onMouseEnter={makeSmile}
                onMouseLeave={noSmile} >
                <img className="avatar" alt="avatarBody" src="/images/avatar/avatar__with__body.png"/>
                <img key="smily" style={{opacity: smileOpt}} className="avatarSmile" alt="smilyFace" src="/images/avatar/avatar__smily__head.png" />
            </div>
        </div>
    )
}

export default Avatar