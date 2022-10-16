import React from 'react';
import classes from './User.module.css';


const UserInfo = ({userInfoData, testAPI}) => {
    return (
        <div className={classes.user}>
            <div>
                <img className={classes.obl} src={userInfoData.obl}/>
            </div>
            <span>
                <img className={classes.ava} src={userInfoData.ava}/>
            </span>
            <span className={classes.name}>
                {userInfoData.name}
            </span>
            <button onClick={testAPI}>
                Test API button
            </button>
        </div>
    )
}

export default UserInfo;