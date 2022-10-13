import React from 'react';
import classes from './User.module.css';
import UserInfo from "./UserInfo";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllUsers} from "../../../../redax/ActionCreators";


const UserInfoContainer = () => {
    const dispatch = useDispatch();
    const userInfoData = useSelector(state => state.Profile.userData[0]);

    const setUsers = () => {
        const action = fetchAllUsers();
        dispatch(action);
    }

    return <UserInfo userInfoData={userInfoData} setUsers={setUsers}/>
}

export default UserInfoContainer;