import axiosBaseApi from './confAxiosBase';
import getRelatedMovieById from './getRelatedMovieById';
import renderCategories from '../utils/renderCategories';

const API_MOVIE_DETAIL = process.env.API_MOVIE_DETAIL;

const getMovieById = async (idMovie) => {
    const { data: movie } = await axiosBaseApi.get(`${API_MOVIE_DETAIL}${idMovie}`);

    const movieImgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const headerSection = document.getElementById('header');
    headerSection.style.background = `
    linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.35) 19.27%,
        rgba(0, 0, 0, 0) 29.17%
        ),url(${movieImgUrl})`;

    const movieDetailTitle = document.querySelector('.movieDetail-title');
    movieDetailTitle.textContent = movie.title;
    const movieDetailDescription = document.querySelector('.movieDetail-description');
    movieDetailDescription.textContent = movie.overview;
    const movieDetailScore = document.querySelector('.movieDetail-score');
    movieDetailScore.textContent = movie.vote_average;

    const movieDetailCategoriesList = document.querySelector('.categories-list');
    renderCategories({ parentContainer: movieDetailCategoriesList, listResults: movie.genres, });

    getRelatedMovieById(idMovie);
};

export default getMovieById;