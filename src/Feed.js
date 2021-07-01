import React from 'react';
import "./feed.css";
import MessegeSender from './MessegeSender';
import StoryReel from './StoryReel';
import Post from './Post';


function feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessegeSender />
            <Post 
            profilePic="http://img.timeinc.net/time/2011/time_100_walkup/mark_zuckerberg.jpg"
            messege="Hello React"
            timestamp="This is timestamp"
            username="Mark Zuckerberg"
            image="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHe1Y3DC0V3U/v1/1000x-1.jpg"
            />
            <Post />
            <Post />
            
        </div>
    );
}

export default feed;
