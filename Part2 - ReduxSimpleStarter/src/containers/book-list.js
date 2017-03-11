// here to render a list of books
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned from here will show up as props inside of BookList
  // Whenever our state changes, this function automatically updates the books
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
