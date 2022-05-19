import axiosBaseApi from './confAxiosBase';
import renderMovies from '../utils/renderMovies';

const API_MOVIE_DETAIL = process.env.API_MOVIE_DETAIL;
const API_MOVIE_RECOMENDATIONS = process.env.API_MOVIE_RECOMENDATIONS;

const getRelatedMovieById = async (idMovie) => {
    const { data } = await axiosBaseApi.get(`${API_MOVIE_DETAIL}${idMovie}${API_MOVIE_RECOMENDATIONS}`);

    const relatedMovies = data.results;

    const relatedMoviesContainer = document.querySelector('.relatedMovies-scrollContainer');

    renderMovies({ parentContainer: relatedMoviesContainer, listResults: relatedMovies, });

};

export default getRelatedMovieById;