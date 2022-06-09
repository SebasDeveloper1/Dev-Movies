import axiosBaseApi from './confAxiosBase';
import getRelatedMovieById from './getRelatedMovieById';
import renderCategories from '../utils/renderCategories';

const API_MOVIE_DETAIL = process.env.API_MOVIE_DETAIL;

const getMovieById = async (idMovie) => {
    const { data: movie } = await axiosBaseApi.get(`${API_MOVIE_DETAIL}${idMovie}`);

    let widthBackdropMovie;
    let widthPosterMovie;
    if (window.innerWidth >= 768) {
        widthBackdropMovie = 'w1280'
        widthPosterMovie = 'w780'
    } else {
        widthBackdropMovie = 'w780'
        widthPosterMovie = 'w500'
    }

    let movieBackdropUrl;
    let backdropPath = movie.backdrop_path;
    if (backdropPath === null) {
        movieBackdropUrl = 'https://i.postimg.cc/XJN0fqRR/movie-placeholder.png';
    } else {
        movieBackdropUrl = `https://image.tmdb.org/t/p/${widthBackdropMovie}/${movie.backdrop_path}`;
    }
    const headerSection = document.getElementById('header');
    headerSection.style.background = `
    linear-gradient(180deg, rgb(41, 5, 69, 0.7) 0%, rgb(41, 5, 69) 100%),url(${movieBackdropUrl})`;

    let moviePosterUrl;
    let posterPath = movie.poster_path;
    if (posterPath === null) {
        moviePosterUrl = 'https://i.postimg.cc/XJN0fqRR/movie-placeholder.png';
    } else {
        moviePosterUrl = `https://image.tmdb.org/t/p/${widthPosterMovie}/${movie.poster_path}`;
    }
    const moviePoster = document.querySelector('.movie-detail__poster');
    moviePoster.src = `${moviePosterUrl}`

    const movieDetailTitle = document.querySelector('.movie-detail__title');
    movieDetailTitle.textContent = movie.title;

    let finalScore = movie.vote_average * 10;
    const progressBarScore = document.querySelector('.score-container');
    progressBarScore.style.background = `conic-gradient(
        #5c218a ${finalScore * 3.6}deg, 
        #aa83c8 ${finalScore * 3.6}deg)`;
    const movieDetailScore = document.querySelector('.movie-detail__score');
    movieDetailScore.textContent = `${finalScore}`;

    const movieDetailDescription = document.querySelector('.movie-detail__description');
    movieDetailDescription.textContent = movie.overview;

    const movieDetailCategoriesList = document.querySelector('.categories-list');
    renderCategories({ parentContainer: movieDetailCategoriesList, listResults: movie.genres, });

    getRelatedMovieById(idMovie);
};

export default getMovieById;