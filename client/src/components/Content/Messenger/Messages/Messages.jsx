import React from 'react';
import classes from '../Messenger.module.css';
import Message from "./Message";


const Messages = ({messagesData}) => {
    const messagesList = messagesData.map (data => (<Message messageData={data}/>));
    return <div className={classes.messages}> {messagesList} </div>
}

export default Messages;
