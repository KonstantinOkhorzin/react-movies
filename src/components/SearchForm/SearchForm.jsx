import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

import { Form, Input } from './SearchForm.styled';
import IconButton from '../UI/IconButton';

const SearchForm = ({ onSearchMovie }) => {
  const [query, setQuery] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('Please, enter movie name');
      return;
    }

    onSearchMovie(query);
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input name='query' value={query} onChange={e => setQuery(e.target.value)} />
      <IconButton type='submit' aria-label='search'>
        <ImSearch />
      </IconButton>
    </Form>
  );
};

SearchForm.propTypes = {
  onSearchMovie: PropTypes.func.isRequired,
};

export default SearchForm;
