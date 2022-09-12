import React from 'react';
import classes from './Content.module.css';

import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";

const Content = () => {
    return (
        <div className={classes.content}>
            {/*<Profile />*/}
            <Dialogs />
        </div>
    );
}

export default Content;
