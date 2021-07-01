import React,{useState} from 'react';
import "./MessegeSender.css";
import { Avatar } from '@material-ui/core';
import { Videocam } from '@material-ui/icons';
import { PhotoAlbum } from '@material-ui/icons';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

function MessegeSender() {
    const [input, setInput]=useState('');
    const [imageUrl, setImageUrl]=useState('');
    const handleSubmit =(e)=>{
        e.preventDefatult();
    }
    return (
        <div className="messegeSender">
            <div className="messegeSender_top">
                <Avatar />
                <form>
                <input 
                value={input} onChange={(e)=>setInput(e.target.value)} type="Text" placeholder={`Whats on Your Mind?`}/>
                <input
                value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}
                 type="Text" placeholder="image URL {Optional}"/>
                <button onClick={handleSubmit} type="submit">
                    Hidden submit
                </button>
                </form>
            </div>

            <div className="messegeSender_bottom">
                <Videocam  style={{color:"red"}}/>
                <h3>Live Video</h3>
                <PhotoAlbum  style={{color:"green"}}/>
                <h3>Photo/Video</h3>
                <EmojiEmotionsOutlinedIcon  style={{color:"orange"}}/>
                <h3>Feeling/Activity</h3>

            </div>
        </div>
    );
}

export default MessegeSender;
