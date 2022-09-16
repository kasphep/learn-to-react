import React from 'react';
import classes from './Posts.module.css';

const AddPost = () => {
    return (
        <div className={classes.addPost}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
    )
}

export default AddPost;