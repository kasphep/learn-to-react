import React from 'react';
import {Routes, Route} from "react-router-dom";
import classes from './Content.module.css';

import Profile from "./Profile/Profile";
import Messenger from "./Dialogs/Messenger";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Content = (props) => {
    return (
        <div className={classes.content}>
            <Routes>
                <Route path="/messenger/*" element= {<Messenger messengerData = {props.contentData.Messenger}/>}/>
                <Route path="/profile" element={<Profile profileData = {props.contentData.Profile} addPost = {props.addPost}/>}/>
                <Route path="/news" element= {<News newsData = {props.contentData.News}/>}/>
                <Route path="/music" element={<Music musicData = {props.contentData.Music}/>}/>
                <Route path="/settings" element= {<Settings settingsData = {props.contentData.Settings}/>}/>
            </Routes>
        </div>
    );
}

export default Content;
