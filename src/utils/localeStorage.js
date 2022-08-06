import getFavoritesMoviesPreview from '../data/getFavoritesPreview';

export const setMoviesToLocalStorage = ({ movie, page }) => {
  let likedMovies = [];
  if (localStorage.getItem('LIKED_MOVIES')) {
    likedMovies = JSON.parse(localStorage.getItem('LIKED_MOVIES'));
    likedMovies.push(movie);
    localStorage.setItem('LIKED_MOVIES', JSON.stringify(likedMovies));

    if (location.hash === '#home' || location.hash === '') {
      const favoritesPreviewContainer = document.querySelector(
        '.favorites-preview-container'
      );
      favoritesPreviewContainer.classList.remove('visibility-none');
    }
    getFavoritesMoviesPreview({ page });
  }
};

export const removeMoviesToLocalStorage = ({ movie }) => {
  let likedMoviesList = [];
  likedMoviesList = JSON.parse(localStorage.getItem('LIKED_MOVIES'));
  likedMoviesList.splice(likedMoviesList.indexOf(movie), 1);
  localStorage.setItem('LIKED_MOVIES', JSON.stringify(likedMoviesList));

  if (location.hash === '#home' || location.hash === '') {
    getFavoritesMoviesPreview({ page: 'home' });
  } else if (location.hash === '#favorites') {
    getFavoritesMoviesPreview({ page: 'favorites' });
  }
};
