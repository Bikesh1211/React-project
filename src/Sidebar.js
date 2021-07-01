import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import { EmojiFlags, VideoLibrary } from '@material-ui/icons';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://www.pngitem.com/pimgs/m/331-3312453_naruto-black-and-white-hd-png-download.png' title='Bikesh Chaudhary' />
            <SidebarRow Icon = {LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon = {EmojiFlagsIcon} title="Pages" />  
            <SidebarRow Icon = {PeopleIcon} title="Friends" />
            <SidebarRow Icon = {ChatIcon} title="Messenger" />
            <SidebarRow Icon = {StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon = {VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon = {ExpandMoreIcon} title="Show More" />
        </div>
    );
}

export default Sidebar;
