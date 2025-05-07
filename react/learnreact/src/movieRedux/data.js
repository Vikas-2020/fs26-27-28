export const API_KEY = import.meta.env.VITE_TMDB_APIKEY;
export const IMG_BASE_PATH = "https://image.tmdb.org/t/p/original";
export const BASE_URL = `https://api.themoviedb.org/3/`;

export const URLs = {
  trendingByDay: `${BASE_URL}trending/movie/day?language=en-US&api_key=${API_KEY}`,
  trendingByWeek: `${BASE_URL}trending/movie/week?language=en-US&api_key=${API_KEY}`,
  popularMovie: `${BASE_URL}movie/popular?language=en-US&api_key=${API_KEY}`,
  popularTV: `${BASE_URL}tv/popular?language=en-US&api_key=${API_KEY}`,
  search: `${BASE_URL}search/multi&include_adult=false&language=en-US&api_key=${API_KEY}`,
};
