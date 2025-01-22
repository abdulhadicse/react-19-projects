import BookRow from './BookRow'
import PropTypes from 'prop-types'

const BookList = ({searchTerm, books}) => {
    const rows = [];    
    books.forEach((book) => {
        if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
            return;
        }
        
        rows.push(<BookRow key={book.id} book={book}/>);
    });

    return <div>{rows}</div>;
};

BookList.propTypes = {
    books: PropTypes.object.isRequired,
    searchTerm: PropTypes.string.isRequired
}

export default BookList;