import React from 'react';
import classes from '../Profile.module.css';
import AddPost from "./AddPost";
import Post from "./Post";

const MyPosts = () => {
    const postDataA = {
        img: 'example-post.png',
        message: 'Hello World!',
        likes: 10
    }

    const postDataB = {
        img: 'example-post.png',
        message: 'Bb World!',
        likes: 3
    }

    return (
        <div>
            <AddPost />
            <Post post = {postDataA}/>
            <Post post = {postDataB}/>
        </div>
    )
}

export default MyPosts;