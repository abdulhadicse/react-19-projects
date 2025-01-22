import PropTypes from 'prop-types'
import BookDetails from './BookDetails'

const BookRow = ({book}) => {
    
    return (
        <>
            <BookDetails title={book.title} author= {book.author} />
        </>
    );
};

BookRow.propTypes = {
    book: PropTypes.object.isRequired,
};

export default BookRow;