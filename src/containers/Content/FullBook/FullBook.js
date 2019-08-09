import React, { Component }from 'react';
import bookData from '../books.json';
import classes from './FullBook.css';

class FullBook extends Component {
    state = {
        loadedPost: null
    }
    componentDidUpdate() {
        if (this.props.id != null) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost !== bookData[this.props.id])) {
                this.setState({loadedPost: bookData[this.props.id]})
            }
        }
    } 
    
    render() {
        let book = <p style={{textAlign: "center"}}>Please select a book!</p>;

        if (this.props.id) {
            book = <p style={{textAlign: "center"}}>Loading</p>;
        }
        if (this.state.loadedPost) {
            book = (
                <div className={classes.FullBook}>
                    <img 
                        className={classes.BookCover}
                        src={require('../../../assests/'+ this.state.loadedPost.imageLink)} 
                        alt="BookCover"/> 
                    <p><strong>
                        <a href={this.state.loadedPost.link} target="_blank">
                            {this.state.loadedPost.title}</a></strong></p>
                    <p>Author: {this.state.loadedPost.author}</p>
                    <p>Country: {this.state.loadedPost.country}</p>                    
                    <p>Language: {this.state.loadedPost.language}</p>
                    <p>Pages: {this.state.loadedPost.pages}</p>
                    <p>Year: {this.state.loadedPost.year}</p>
                </div>
            )
        }
        return book;
    }
}
export default FullBook;