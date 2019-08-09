import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/mission'>OUR MISSION</NavigationItem>
        <NavigationItem link='/contact'>CONTACT US</NavigationItem>
        <NavigationItem link='/careers'>CAREERS</NavigationItem>
    </ul>
);

export default navigationItems;