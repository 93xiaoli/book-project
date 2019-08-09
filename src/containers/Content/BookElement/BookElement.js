import React from 'react';
import classes from './BookElement.css';

const BookElement = (props) => (
    <div className={classes.BookElement} onClick={props.clicked}>
                <img src={require('../../../assests/'+ props.image)} alt="BookCover" className={classes.Image} />
        <div className="Fig">
            <p className={classes.Title}>{props.title}</p>
            <div className={classes.Author}>Author: {props.author}</div> 
        </div>

    </div>
);

export default BookElement;