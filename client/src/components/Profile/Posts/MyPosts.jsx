import React from 'react';
import classes from '../Profile.module.css';
import AddPost from "./AddPost";
import Post from "./Post";

const MyPosts = () => {
    return (
        <div>
            <AddPost />
            <Post message = 'Hello World!'/>
            <Post message = 'Bb World!'/>
        </div>
    )
}

export default MyPosts;