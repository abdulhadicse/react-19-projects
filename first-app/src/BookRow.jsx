import PropTypes from 'prop-types'
import BookDetails from './BookDetails'

const BookRow = ({book}) => {
    console.log(book);
    
    return (
        <div>
            <BookDetails title={book.title} author= {book.author} />
        </div>
    );
};

BookRow.propTypes = {
    book: PropTypes.object.isRequired,
};

export default BookRow;