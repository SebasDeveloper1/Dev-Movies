import axiosBaseApi from './confAxiosBase';
// import nodes from './nodes';
import renderMovies from '../utils/renderMovies';

const { API_MOVIE_DETAIL } = process.env;

const getFavoritesMoviesPreview = ({ page }) => {
  let likedMoviesList = [];
  likedMoviesList = JSON.parse(localStorage.getItem('LIKED_MOVIES'));

  if (likedMoviesList.length > 0) {
    const resultsMoviesList = [];
    likedMoviesList.forEach(async (movie) => {
      const { data } = await axiosBaseApi.get(`${API_MOVIE_DETAIL}${movie}`);
      resultsMoviesList.push(data);

      let favoritesContainer;

      if (page === 'home') {
        favoritesContainer = document.querySelector(
          '.favorites-preview-movieList'
        );
      } else if (page === 'favorites') {
        favoritesContainer = document.querySelector('.generic-list-container');
      }

      if (likedMoviesList.length === resultsMoviesList.length) {
        renderMovies({
          parentContainer: favoritesContainer,
          listResults: resultsMoviesList,
        });
      }
    });
  } else if (page === 'home') {
    const favoritesPreviewContainer = document.querySelector(
      '.favorites-preview-container'
    );

    favoritesPreviewContainer.classList.add('visibility-none');
  } else if (location.hash === '#favorites') {
    const favoritesContainer = document.querySelector(
      '.generic-list-container'
    );
    favoritesContainer.innerHTML = '';
  }
};

export default getFavoritesMoviesPreview;
