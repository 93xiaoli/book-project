import React from 'react';
import simage from '../../assests/images/rectangle.png';
import limage from '../../assests/images/rectangle2.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img srcSet={`${limage} 2x`} src={simage} alt="logo" />
    </div>
);

export default logo;