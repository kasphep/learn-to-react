import React from 'react';
import classes from './Posts.module.css';
import Posts from "./Posts";
import {useDispatch, useSelector} from "react-redux";


const PostsContainer = () => {
    const dispatch = useDispatch();
    const postsData = useSelector(state => state.Profile.postsData);
    return <Posts postsData={postsData}/>
}

export default PostsContainer;