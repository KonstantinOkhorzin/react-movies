import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

import { Form, Input } from './SearchForm.styled';
import IconButton from '../UI/IconButton';

class SearchForm extends Component {
  state = {
    query: '',
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      alert('Please, enter movie name');
      return;
    }
    
    this.props.onSearchMovie(this.state.query);
  };

  render() {
    const { query } = this.state;
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Input name='query' value={query} onChange={this.onInputChange} />
        <IconButton type='submit' aria-label='search'>
          <ImSearch />
        </IconButton>
      </Form>
    );
  }
}

SearchForm.propTypes = {
  onSearchMovie: PropTypes.func.isRequired,
};

export default SearchForm;
