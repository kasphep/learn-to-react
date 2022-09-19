import React from 'react';
import classes from './Profile.module.css';

import MyPosts from "./Posts/MyPosts.jsx";
import UserInfo from "./User/UserInfo";

const Profile = ({profileData}) => {
    return (
        <div className={classes.profile}>
            <UserInfo userData = {profileData.userData}/>
            <MyPosts postsData = {profileData.postsData}/>
        </div>
    )
}

export default Profile;