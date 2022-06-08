import axiosBaseApi from './confAxiosBase';
import getRelatedMovieById from './getRelatedMovieById';
import renderCategories from '../utils/renderCategories';

const API_MOVIE_DETAIL = process.env.API_MOVIE_DETAIL;

const getMovieById = async (idMovie) => {
    const { data: movie } = await axiosBaseApi.get(`${API_MOVIE_DETAIL}${idMovie}`);

    let widthImageMovie;
    if (window.innerWidth >= 768) {
        widthImageMovie = 'w780'
    } else {
        widthImageMovie = 'w500'
    }

    let movieBackdropUrl;
    let backdropPath = movie.backdrop_path;
    if (backdropPath === null) {
        movieBackdropUrl = 'https://i.postimg.cc/XJN0fqRR/movie-placeholder.png';
    } else {
        movieBackdropUrl = `https://image.tmdb.org/t/p/${widthImageMovie}/${movie.backdrop_path}`;
    }
    const headerSection = document.getElementById('header');
    headerSection.style.background = `
    linear-gradient(180deg, #2905455e 10%, #290545 100%),url(${movieBackdropUrl})`;

    let moviePosterUrl;
    let posterPath = movie.poster_path;
    if (posterPath === null) {
        moviePosterUrl = 'https://i.postimg.cc/XJN0fqRR/movie-placeholder.png';
    } else {
        moviePosterUrl = `https://image.tmdb.org/t/p/${widthImageMovie}/${movie.poster_path}`;
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

    const movieDetailDescription = document.querySelector('.movieDetail-description');
    movieDetailDescription.textContent = movie.overview;

    const movieDetailCategoriesList = document.querySelector('.categories-list');
    renderCategories({ parentContainer: movieDetailCategoriesList, listResults: movie.genres, });

    getRelatedMovieById(idMovie);
};

export default getMovieById;