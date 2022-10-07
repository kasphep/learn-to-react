import React from 'react';
import classes from './User.module.css';
import UserInfo from "./UserInfo";
import {useDispatch, useSelector} from "react-redux";


const UserInfoContainer = () => {
    const dispatch = useDispatch();
    const userInfoData = useSelector(state => state.Profile.userData[0]);
    return <UserInfo userInfoData={userInfoData}/>
}

export default UserInfoContainer;