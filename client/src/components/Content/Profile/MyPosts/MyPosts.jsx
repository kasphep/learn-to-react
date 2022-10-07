import React from 'react';
import classes from './Posts.module.css';
import AddPostContainer from "./AddPostContainer";
import PostsContainer from "./PostsContainer";


const MyPosts = () => {
    return (
        <div>
            <h3>MyPosts</h3>
            <PostsContainer/>
            <AddPostContainer/>
        </div>
    )
}

export default MyPosts;