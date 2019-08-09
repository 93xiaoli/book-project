import React, { Component } from 'react';
import classes from './Footer.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

class Footer extends Component {
    render() {
        return (
            <div className={classes.Footer}>
                <div className={classes.ColunmLeft}>
                    <NavigationItems />
                    <p className={classes.CopyRight}>Ⓒ 2018 Aptly Name LLC. An Aptly Named Technical Challenge</p>
                </div>
                <div className={classes.Logo}>
                    <a href="/"><Logo /></a>
                </div>
            </div>
        )
    }
}

export default Footer;