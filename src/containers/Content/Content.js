import React, { Component } from 'react';
import BookElement from './BookElement/BookElement';
import bookData from './books.json';
import classes from './Content.css';
import FullBook from './FullBook/FullBook';

class Content extends Component {
    state = {
        books: bookData,
        selectBookId: null,
        bookNumber: 4,
        bookListEnd: null
    }

    bookSelectHandler = (id) => {
        this.setState({selectBookId: id});
    }

    loadMoreBookHandler = () => {
        if (this.state.bookNumber < 100) {
            this.setState({bookNumber: this.state.bookNumber + 4})
        } else {
            this.setState({bookListEnd: "This is the end"})
        }
            
    }
    render() {
        const booklist = this.state.books.slice(0, this.state.bookNumber).map((book, index) => {
            return <BookElement 
                key={index}
                title={book.title} 
                author={book.author}
                image={book.imageLink}
                clicked={() => this.bookSelectHandler(index)}/>
        });

        // let loadBookButton = () => {   
        //     return (
        //     <div>
        //         <button onClick={this.loadMoreBookHandler}>Load More Books</button>
        //     </div>
        //     )};

        return (
            <div className={classes.Content}>
                <div className={classes.List}>
                    {booklist}
                    <button className={classes.Button} onClick={this.loadMoreBookHandler}> More </button>
                    {this.state.bookListEnd}
                </div>
                <div className={classes.Result}>
                <FullBook id={this.state.selectBookId} />
                </div>
            </div>
        )
    }
}

export default Content;