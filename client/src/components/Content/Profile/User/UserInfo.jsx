import React from 'react';
import classes from '../Profile.module.css';

const UserInfo = () => {
    return (
        <div>
            <div>
                <img className = {classes.obl} src = 'example-obl.jpg'/>
            </div>
            <div>
                <img className = {classes.ava} src = 'example-ava.png'/> Hella Tendy
            </div>
        </div>
    )
}

export default UserInfo;