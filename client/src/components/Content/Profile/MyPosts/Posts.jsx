import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post";


const Posts = (props) => {
    const postsList = props.postsData.map(data => (<Post post={data}/>));
    return <div> {postsList} </div>
}

export default Posts;