import React from 'react';
import {Routes, Route} from "react-router-dom";
import classes from './Content.module.css';

import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Content = () => {
    return (
        <div className={classes.content}>
            <Routes>
                <Route path="/dialog" element= {<Dialogs/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/news" element= {<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element= {<Settings/>}/>
            </Routes>
        </div>
    );
}

export default Content;
