import React from 'react';
import classes from './Profile.module.css';

import MyPosts from "./MyPosts/MyPosts.jsx";
import UserInfoContainer from "./User/UserInfoContainer";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <UserInfoContainer/>
            <MyPosts/>
        </div>
    )
}

export default Profile;