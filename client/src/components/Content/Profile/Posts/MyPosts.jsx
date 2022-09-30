import React from 'react';
import classes from './Posts.module.css';
import AddPost from "./AddPost";
import Post from "./Post";


const MyPosts = (props) => {
    const postsAlready = props.postsData.map(data => (<Post post={data}/>));
    return (
        <div>
            <h3>MyPosts</h3>
            <AddPost newPostText = {props.newPostText} dispatch = {props.dispatch}/>
            {postsAlready}
        </div>
    )
}

export default MyPosts;