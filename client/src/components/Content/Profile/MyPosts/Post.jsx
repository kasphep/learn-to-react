import React from 'react';
import classes from './Posts.module.css';

const Post = ({post}) => {
    return (
        <div className={classes.item}>
            <img className = {classes.img} src ={post.img}/>
            <span> {post.message} </span>
            <div> Like: {post.likes} </div>
        </div>
    )
}

export default Post;