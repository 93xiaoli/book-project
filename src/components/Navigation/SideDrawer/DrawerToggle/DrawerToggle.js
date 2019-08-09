import React from 'react';
import manuImage from '../../../../assests/images/Path1.svg';
import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div onClick={props.clicked} className={classes.DrawerToggle}>
        <img src={manuImage} alt="manuImage" />
    </div>
);

export default drawerToggle;