import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">

            <Story image = "https://www.desktopbackground.org/download/480x800/2015/10/24/1031332_magic-mountains-hd-desktop-wallpapers-fullscreen-dual-monitor_1600x900_h.jpg" profileSrc="http://img.timeinc.net/time/2011/time_100_walkup/mark_zuckerberg.jpg" title="Mark Muckerberg" />
            <Story image = "https://i.pinimg.com/originals/f0/dd/7b/f0dd7baa7be0e18ee6b7a86a0c4337e7.jpg" profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Eduardo_Saverin_CHINICT.JPG/220px-Eduardo_Saverin_CHINICT.JPG" title="Eduardo Saverin" />
            <Story image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8szOlQcI86mThLVSW5tvT4B89lTzcKXVTNA&usqp=CAU" profileSrc="https://www.thestreet.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4NjQ3NzUwNTU3NzcxNjcx/facebook-fb-cofounder-moskovitz-says-cybersecurity-attacks-have-gotten-more-serious.jpg" title="Dustin Moskovitz" />
            <Story image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjoWICywnyCjbDzOuEHW89AXsue7kBT3F3-o3sEdaqGuCSfQllKa39LmlWwB2Rafc_a3I&usqp=CAU" profileSrc="https://pbs.twimg.com/profile_images/988868033165717504/gAwCjndw_400x400.jpg" title="Andrew McCollum" />
            <Story image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztW5KxMJF_Qni6jj72uClu9IbSZuuOPyRYn555ojTvZxy8V4F2R8qH-5soWdKbSH-Ua4&usqp=CAU" profileSrc="https://upload.wikimedia.org/wikipedia/commons/4/43/Chris_Hughes_Updated.jpg" title="Chris Hughes" />
            
            
        </div>
    )
}

export default StoryReel;
