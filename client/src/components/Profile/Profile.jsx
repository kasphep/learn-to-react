import React from 'react';
import MyPosts from "./Posts/MyPosts.jsx";
import classes from './Profile.module.css';
import UserInfo from "./User/UserInfo";

const Profile = () => {
    return (
        <div className={classes.content}>
            <UserInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;