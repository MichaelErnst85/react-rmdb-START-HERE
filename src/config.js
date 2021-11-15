// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

//Movie
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
//TV
const SEARCH_BASE_URL_TV = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL_TV = `${API_URL}tv/popular?api_key=${API_KEY}&
language=en-US`;
const TOP_RATED_TV_URL= `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US`;
const DISCOVER_TV_URL = `${API_URL}discover/tv?api_key=${API_KEY}]&language=en-US&sort_by=popularity.desc`

// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  SEARCH_BASE_URL_TV,
  POPULAR_BASE_URL_TV,
  TOP_RATED_TV_URL,
  DISCOVER_TV_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
};