const API_KEY = process.env.REACT_APP_API_KEY;

function fetchMovies(query, type, page) {
  return fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}&type=${
      type !== 'all' ? type : ''
    }`
  ).then(response => response.json());
}

function fetchMovieById(movieId) {
  return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`).then(response =>
    response.json()
  );
}

const api = {
  fetchMovies,
  fetchMovieById,
};

export default api;
