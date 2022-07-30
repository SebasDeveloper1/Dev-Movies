import axiosBaseApi from './confAxiosBase';
import movieDetailInfo from '../templates/movieDetailInfo';
import getRelatedMovieById from './getRelatedMovieById';
import convertMinutesToHours from '../utils/convertMinutesToHours';
import renderCategories from '../utils/renderCategories';
import renderModalVideo from '../utils/renderModalVideo';

const { API_MOVIE_DETAIL } = process.env;

const getMovieById = async (idMovie) => {
  const { data: movie } = await axiosBaseApi.get(
    `${API_MOVIE_DETAIL}${idMovie}`
  );

  const detailInfoContainer = document.querySelector('.movie-detail-main-info');
  detailInfoContainer.innerHTML = '';
  detailInfoContainer.innerHTML = movieDetailInfo();

  let widthBackdropMovie;
  let widthPosterMovie;
  if (window.innerWidth >= 768) {
    widthBackdropMovie = 'w1280';
    widthPosterMovie = 'w780';
  } else {
    widthBackdropMovie = 'w780';
    widthPosterMovie = 'w500';
  }

  let movieBackdropUrl;
  const backdropPath = movie.backdrop_path;
  if (!backdropPath) {
    movieBackdropUrl = '../assets/images/movie-placeholder.png';
  } else {
    movieBackdropUrl = `https://image.tmdb.org/t/p/${widthBackdropMovie}/${movie.backdrop_path}`;
  }
  const headerSection = document.getElementById('header');
  headerSection.style.background = `
      linear-gradient(180deg, rgb(41, 5, 69, 0.7) 0%, rgb(41, 5, 69) 100%),url(${movieBackdropUrl})`;

  let moviePosterUrl;
  const posterPath = movie.poster_path;
  if (!posterPath) {
    moviePosterUrl = '../assets/images/movie-placeholder.png';
  } else {
    moviePosterUrl = `https://image.tmdb.org/t/p/${widthPosterMovie}/${movie.poster_path}`;
  }
  const moviePoster = document.querySelector('.movie-detail__poster');
  moviePoster.src = `${moviePosterUrl}`;

  const movieDetailTitle = document.querySelector('.movie-detail__title');
  movieDetailTitle.textContent = movie.title;

  const finalScore = (movie.vote_average * 10).toFixed(1);
  const progressBarScore = document.querySelector('.score-container');
  progressBarScore.style.background = `conic-gradient(
          #5c218a ${finalScore * 3.6}deg, 
          #aa83c8 ${finalScore * 3.6}deg)`;
  const movieDetailScore = document.querySelector('.movie-detail__score');
  movieDetailScore.textContent = `${finalScore}`;

  const movieDetailDate = document.querySelector('.movie-detail__date');
  movieDetailDate.textContent = new Date(movie.release_date).getFullYear();

  const movieDetailRuntime = document.querySelector('.movie-detail__runtime');
  movieDetailRuntime.textContent = convertMinutesToHours(movie.runtime);

  const movieDetailDescription = document.querySelector(
    '.movie-detail__description'
  );
  movieDetailDescription.textContent = movie.overview;

  const movieDetailCategoriesList = document.querySelector('.categories-list');
  renderCategories({
    parentContainer: movieDetailCategoriesList,
    listResults: movie.genres,
  });

  renderModalVideo(idMovie);
  getRelatedMovieById(idMovie);
};

export default getMovieById;
