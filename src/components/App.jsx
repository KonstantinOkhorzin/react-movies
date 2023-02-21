import { useState } from 'react';

import Title from './Title';
import Container from './UI/Container';
import SearchForm from './SearchForm';
import FilterPanel from './FilterPanel';
import MoviesInfo from './MoviesInfo';

const App = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');

  const searchMovie = movie => {
    setQuery(movie.toLowerCase());
    setType(type === '' ? 'all' : type);
  };

  return (
    <Container>
      <Title />
      <SearchForm onSearchMovie={searchMovie} />
      <FilterPanel type={type} onFilterChange={e => setType(e.target.value)} />
      <MoviesInfo type={type} searchQuery={query} />
    </Container>
  );
};

export default App;
