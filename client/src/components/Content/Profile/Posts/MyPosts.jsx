import React from 'react';
import classes from './Posts.module.css';
import AddPost from "./AddPost";
import Post from "./Post";

import veshiyPost from "../../../../temporaryServer/Posts/Veshiy/data";
import demonPost from "../../../../temporaryServer/Posts/Demon/data";


const MyPosts = () => {
    const postDataA = veshiyPost
    const postDataB = demonPost

    return (
        <div>
            <h3>MyPosts</h3>
            <AddPost/>
            <Post post={postDataA}/>
            <Post post={postDataB}/>
        </div>
    )
}

export default MyPosts;