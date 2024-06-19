import { useState } from 'react';
import FormInput from '../form-input/form-input.component';

import { SearchBarContainer } from './search-bar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setQuery(value);
        onSearch(value);
    };

    const cancelQuery = () => {
        setQuery('');
        onSearch('');
    };

    return (
        <SearchBarContainer>
            <FormInput 
                label={
                    !query 
                    ? <FontAwesomeIcon icon={faMagnifyingGlass} className='search' /> 
                    : <FontAwesomeIcon icon={faX} className='cancel' onClick={cancelQuery} />
                }
                type="text"
                onChange={handleChange}
                name="search"
                placeholder="Search for recipes here..."
                aria-label="Search for recipes here..."
                value={query}
            />
        </SearchBarContainer>
    );
};

export default SearchBar;
