import React from 'react';
import {Routes, Route} from "react-router-dom";
import classes from './Content.module.css';

import Profile from "./Profile/Profile";
import Messenger from "./Dialogs/Messenger";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Content = ({contentData}) => {
    return (
        <div className={classes.content}>
            <Routes>
                <Route path="/messenger/*" element= {<Messenger messengerData = {contentData.Messenger}/>}/>
                <Route path="/profile" element={<Profile profileData = {contentData.Profile}/>}/>
                <Route path="/news" element= {<News newsData = {contentData.News}/>}/>
                <Route path="/music" element={<Music musicData = {contentData.Music}/>}/>
                <Route path="/settings" element= {<Settings settingsData = {contentData.Settings}/>}/>
            </Routes>
        </div>
    );
}

export default Content;
