import React, { Component } from 'react';

import Title from './Title';
import Container from './UI/Container';
import SearchForm from './SearchForm';
import FilterPanel from './FilterPanel';

class App extends Component {
  state = {
    movies: [],
    search: '',
    type: 'all',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      console.log('update state');
    }
  }

  filterChange = e => {
    this.setState({ type: e.target.value });
  };

  searchMovie = movie => {
    this.setState({ search: movie.toLowerCase() });
  };

  render() {
    const { type } = this.state;

    return (
      <Container>
        <Title />
        <SearchForm onSearchMovie={this.searchMovie} />
        <FilterPanel type={type} onFilterChange={this.filterChange} />
      </Container>
    );
  }
}

export default App;
