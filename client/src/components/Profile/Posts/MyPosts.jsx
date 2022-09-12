import React from 'react';
import classes from '../Profile.module.css';
import AddPost from "./AddPost";
import Post from "./Post";

const MyPosts = () => {
    return (
        <div>
            <AddPost />
            <Post />
        </div>
    )
}

export default MyPosts;