import { PropTypes } from 'prop-types';

function SearchBar({onSearchBook}) {
    return <input type="text" placeholder="Search books..." onChange={(event) => {onSearchBook(event.target.value)}} />
}

SearchBar.propTypes = {
    onSearchBook: PropTypes.string.isRequired,
}

export default SearchBar;