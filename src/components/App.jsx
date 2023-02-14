import React, { Component } from 'react';

import Title from './Title';
import Container from './UI/Container';
import SearchForm from './SearchForm';
import FilterPanel from './FilterPanel';
import MoviesInfo from './MoviesInfo';

class App extends Component {
  state = {
    query: '',
    type: 'all',
  };

  filterChange = e => {
    this.setState({ type: e.target.value });
  };

  searchMovie = movie => {
    this.setState({ query: movie.toLowerCase() });
  };

  render() {
    const { type, query } = this.state;

    return (
      <Container>
        <Title />
        <SearchForm onSearchMovie={this.searchMovie} />
        <FilterPanel type={type} onFilterChange={this.filterChange} />
        <MoviesInfo type={type} searchQuery={query} />
      </Container>
    );
  }
}

export default App;
