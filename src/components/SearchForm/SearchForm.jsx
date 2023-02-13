import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

import { Form, Input } from './SearchForm.styled';
import IconButton from '../UI/IconButton';

class SearchForm extends Component {
  state = {
    search: '',
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchMovie(this.state.search);
  };

  render() {
    const { search } = this.state;
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Input name='search' value={search} onChange={this.onInputChange} />
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
