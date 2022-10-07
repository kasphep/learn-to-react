import React from 'react';
import classes from '../Messenger.module.css';
import Dialogs from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";


const DialogsContainer = () => {
    const dispatch = useDispatch();
    const dialogsData = useSelector(state => state.Messenger.dialogsData);
    return <Dialogs dialogsData={dialogsData}/>
}

export default DialogsContainer;
