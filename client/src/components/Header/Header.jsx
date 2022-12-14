import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src = 'logo.png'/>
            <span className={classes.logoText}>
                MidNight
            </span>
        </header>
    )
}

export default Header;