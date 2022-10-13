import React from 'react';
import classes from '../Messenger.module.css';
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from '../../../../redax/ActionCreators'
import {useDispatch, useSelector} from "react-redux";
import AddMessage from "./AddMessage";

const AddMessageContainer = () => {
    const dispatch = useDispatch();
    const newMessageText = useSelector(state => state.Messenger.newMessageText);

    const addNewMessage = () => {
        const action = addMessageActionCreator();
        dispatch(action);
    }

    let updateNewMessage = (newText) => {
        const action = updateNewMessageTextActionCreator(newText);
        dispatch(action);
    }

    return <AddMessage addNewMessage={addNewMessage} updateNewMessage={updateNewMessage} newMessageText={newMessageText}/>
}

export default AddMessageContainer;