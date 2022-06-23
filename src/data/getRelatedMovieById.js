import axiosBaseApi from './confAxiosBase';
import renderMovies from '../utils/renderMovies';

const { API_MOVIE_DETAIL } = process.env;
const { API_MOVIE_RECOMENDATIONS } = process.env;

const getRelatedMovieById = async (idMovie) => {
  const { data } = await axiosBaseApi.get(
    `${API_MOVIE_DETAIL}${idMovie}${API_MOVIE_RECOMENDATIONS}`
  );

  const relatedMovies = data.results;

  const relatedMoviesContainer = document.querySelector(
    '.related-movies-scroll-container'
  );

  renderMovies({
    parentContainer: relatedMoviesContainer,
    listResults: relatedMovies,
  });
};

export default getRelatedMovieById;
