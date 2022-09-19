import React from 'react';
import classes from './Posts.module.css';
import AddPost from "./AddPost";
import Post from "./Post";


const MyPosts = ({postsData}) => {
    const postsAlready = postsData.map(data => (<Post post={data}/>));
    return (
        <div>
            <h3>MyPosts</h3>
            <AddPost/>
            {postsAlready}
        </div>
    )
}

export default MyPosts;