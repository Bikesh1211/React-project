import React from 'react';
import "./Story.css"
import { Avatar } from '@material-ui/core';

function Story({image, profileSrc,title}) {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="Story">
            <Avatar className="story_avatar" src={profileSrc} />
            <h4 className="user_title">{title}</h4>
            
        </div>
    );
}

export default Story;
