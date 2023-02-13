import React, { Component } from 'react';

import Title from './Title';
import Container from './UI/Container';
import SearchForm from './SearchForm';
import FilterPanel from './FilterPanel';
import MoviesList from './MoviesList';

class App extends Component {
  state = {
    movies: null,
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
    const { movies, type } = this.state;

    return (
      <Container>
        <Title />
        <SearchForm onSearchMovie={this.searchMovie} />
        <FilterPanel type={type} onFilterChange={this.filterChange} />
        {movies && <MoviesList movies={movies} />}
      </Container>
    );
  }
}

export default App;
