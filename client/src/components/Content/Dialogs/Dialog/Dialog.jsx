import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = ({dialogData}) => {
    const path = "/messenger/" + dialogData[0].id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{dialogData[0].name}</NavLink>
        </div>
    );
}

export default Dialog;
