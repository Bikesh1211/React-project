import React from 'react';
import { Avatar } from '@material-ui/core';
import "./Post.css";

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({profilePic,image, username, timestamp,messege}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar" />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>TimeStamp...</p>
                </div>
            </div>
            
            <div className="post_bottom">
                <p>{messege}</p>

            </div>
            <div className="post_image">
                <img src={image} alt="" />

                <div className="post_option">
                    <div className="post_option">
                               
                    <div className="post_option">
                            <ThumbUpIcon />
                                <p>Like</p>
                    </div>
                    <div className="post_option">
                            <ChatBubbleIcon />
                                <p>Comment</p>
                    </div>
                    <div className="post_option">
                            <NearMeIcon />
                                <p>Share</p>
                    </div>
                    <div className="post_option">                    
                            <AccountCircleIcon />
                            <ExpandMoreIcon />
                  </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
