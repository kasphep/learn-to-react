import React from 'react';
import classes from './Profile.module.css';

import MyPosts from "./Posts/MyPosts.jsx";
import UserInfo from "./User/UserInfo";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <UserInfo userData = {props.profileData.userData}/>
            <MyPosts postsData = {props.profileData.postsData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;