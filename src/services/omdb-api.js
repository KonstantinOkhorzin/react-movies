const API_KEY = process.env.REACT_APP_API_KEY;

function fetchMovies(query, page, type) {
  return fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}&type=${
      type !== 'all' ? type : ''
    }`
  ).then(response => response.json());
}

const api = {
  fetchMovies,
};

export default api;
