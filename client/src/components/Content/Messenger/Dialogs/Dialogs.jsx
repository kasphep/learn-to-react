import React from 'react';
import classes from '../Messenger.module.css';
import Dialog from "./Dialog";


const Dialogs = ({dialogsData}) => {
    const dialogsList = dialogsData.map (data => (<Dialog dialogData={data}/>));;
    return <div className={classes.dialogs}> {dialogsList} </div>
}

export default Dialogs;
