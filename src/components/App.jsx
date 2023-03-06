import { Routes, Route } from 'react-router-dom';

import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/:movieId' element={<MovieDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
