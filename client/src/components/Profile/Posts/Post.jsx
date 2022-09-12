import React from 'react';
import classes from '../Profile.module.css';

const Post = ({message}) => {
    return (
        <div className={classes.item}>
            <img className = {classes.img} src = 'example-post.png'/>
            <span> {message} </span>
            <span> like </span>
        </div>
    )
}

export default Post;