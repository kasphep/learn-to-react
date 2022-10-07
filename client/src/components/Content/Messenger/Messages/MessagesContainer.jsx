import React from 'react';
import classes from '../Messenger.module.css';
import AddMessageContainer from "./AddMessageContainer";
import Messages from "./Messages";
import {useDispatch, useSelector} from "react-redux";



const MessagesContainer = () => {
    const dispatch = useDispatch();
    const messagesData = useSelector(state => state.Messenger.messagesData);
    return (
            <div>
                <Messages messagesData={messagesData}/>
                <AddMessageContainer/>
            </div>
    );
}

export default MessagesContainer;
