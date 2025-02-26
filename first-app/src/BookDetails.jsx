
import { PropTypes } from 'prop-types';

const BookDetails = ({title, author }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{author}</p>
        </div>
    );
};

BookDetails.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default BookDetails;
