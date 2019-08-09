import React from 'react';
import classes from './Toolbar.css';
import WebsiteName from '../../WebsiteName/WebsiteName';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <WebsiteName />
        
        <div clsssName={classes.MobileOnly}> 
            <DrawerToggle clicked={props.drawerToggleClicked}/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;