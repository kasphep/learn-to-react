import React from 'react';
import classes from './Posts.module.css';
import AddPost from "./AddPost";
import Post from "./Post";


const postsData = [
    {
        id: "0001",
        img: "./temporaryServer/Posts/Veshiy/img.png",
        message: "My first pictures, Veshiy!",
        likes: "10",
    },
    {
        id: "0002",
        img: "./temporaryServer/Posts/Demon/img.png",
        message: "My second result of working. You likes Demon?",
        likes: "2",
    }
];

const postsAlready = postsData.map(data => (<Post post={data}/>));


const MyPosts = () => {

    return (
        <div>
            <h3>MyPosts</h3>
            <AddPost/>
            {postsAlready}
        </div>
    )
}

export default MyPosts;