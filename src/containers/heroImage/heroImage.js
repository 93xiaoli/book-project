import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import limage from "../../assests/images/Image1@2x.png";
import simage from '../../assests/images/Image1.png';
import classes from './HeroImage.css';
import Content from '../Content/Content';

class heroImage extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.Container}>
                    <img srcSet={`${limage} 2x`} src={simage} alt="heorImage" className={classes.HeroImage} />
                    <div className={classes.Text}>
                        <p className={classes.TextTitle}>Where the story begins</p>
                        <p className={classes.TextTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the…</p>
                        <p className={classes.TextTitle}><a href="/">LEARN MORE</a></p>
                    </div>
                </div>
                <Content />

            </Aux>
        )
    }
}

export default heroImage;