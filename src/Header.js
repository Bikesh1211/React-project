import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from '@material-ui/icons/Flag';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { NotificationsNone, SupervisedUserCircle } from "@material-ui/icons";

import { Avatar, IconButton } from "@material-ui/core";

import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header(){
                      //Header 
    return ( <div className="header">

        <div className="header_left">

            <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"/>

        <div className = "header_input">
            <SearchIcon />
        <input type="text" placeholder="Search Facebook" />
        </div>
        </div>

        <div className="header_center">
            <div className= "header_option header_option--active">
                <HomeIcon fontSize="large" />
            </div>
            <div className= "header_option">
                <FlagIcon fontSize="large" />
            </div>
            <div className= "header_option">
                <LiveTvIcon fontSize="large" />
            </div>
            <div className= "header_option">
                <StorefrontIcon fontSize="large" />
            </div>
            <div className= "header_option">
                <SupervisedUserCircle fontSize="large" />
            </div>
        </div>
        
        <div className="header_right">

            <div className="header_info">
               <Avatar />
                <h4>Bikesh</h4>
            </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsNone />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
        </div>

    </div>
    );
}

export default Header;