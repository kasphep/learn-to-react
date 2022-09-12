import React from 'react';
import classes from '../Profile.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img className = {classes.img} src = 'example-post.png'/>
            <span> like </span>
        </div>
    )
}

export default Post;