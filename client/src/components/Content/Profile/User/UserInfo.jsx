import React from 'react';
import classes from './User.module.css';


const UserInfo = ({userData}) => {
    return (
        <div className={classes.user}>
            <div>
                <img className={classes.obl} src={userData[0].obl}/>
            </div>
            <span>
                <img className={classes.ava} src={userData[0].ava}/>
            </span>
            <span className={classes.name}>
                {userData[0].name}
            </span>
        </div>
    )
}

export default UserInfo;