import cardMovie from '../templates/cardMovie';

const renderMovies = ({ parentContainer, listResults = {} }) => {
  // clean the content
  parentContainer.innerHTML = '';

  const moviesList = [];
  listResults.forEach((movie) => {
    let posterPathUrl;
    const posterPath = movie.poster_path;
    if (posterPath === null) {
      posterPathUrl = '../assets/images/movie-placeholder.png';
    } else {
      posterPathUrl = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    }

    const movieCardView = cardMovie({
      idMovie: movie.id,
      urlPosterMovie: posterPathUrl,
      titleMovie: movie.title,
      dateMovie: new Date(movie.release_date).getFullYear(),
    });

    moviesList.push(movieCardView);
  });
  parentContainer.innerHTML = moviesList.join('');

  const movieContainer = document.querySelectorAll('.movie-container');
  if (
    parentContainer.classList.contains('trending-preview-movieList') ||
    parentContainer.classList.contains('related-movies-scroll-container')
  ) {
    movieContainer.forEach((node) => {
      node.classList.add('movie-container--dinamic');
    });
  }
};

export default renderMovies;
