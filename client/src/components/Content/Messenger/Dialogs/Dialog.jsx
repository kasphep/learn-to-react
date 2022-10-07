import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = ({dialogData}) => {
    const path = "/messenger/" + dialogData.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{dialogData.name}</NavLink>
        </div>
    );
}

export default Dialog;
