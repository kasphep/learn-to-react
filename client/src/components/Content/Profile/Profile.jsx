import React from 'react';
import classes from './Profile.module.css';

import MyPosts from "./Posts/MyPosts.jsx";
import UserInfo from "./User/UserInfo";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <UserInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;