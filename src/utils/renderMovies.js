import lazyLoading from './lazyLoading';

const renderMovies = ({ parentContainer, listResults = {}, numPage = 1 }) => {
  // clean the content
  if (numPage === 1) {
    parentContainer.innerHTML = '';
  }

  listResults.forEach((movie) => {
    let posterPathUrl;
    const posterPath = movie.poster_path;
    if (!posterPath) {
      posterPathUrl = '../assets/images/movie-placeholder.png';
    } else {
      posterPathUrl = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    }

    const movieContainer = document.createElement('div');
    movieContainer.setAttribute('class', 'movie-container');
    movieContainer.setAttribute('data-idmovie', movie.id);
    movieContainer.setAttribute('data-namemovie', movie.title);

    const movieImg = document.createElement('img');
    movieImg.setAttribute('class', 'movie-img');
    movieImg.setAttribute('data-img', posterPathUrl);
    movieImg.setAttribute('src', '../assets/images/movie-placeholder.png');
    movieImg.setAttribute('alt', movie.title);

    const infoMovieContainer = document.createElement('div');
    infoMovieContainer.setAttribute('class', 'info-movie-container');

    const infoMovieTitle = document.createElement('h3');
    infoMovieTitle.setAttribute('class', 'info-movie__title');
    infoMovieTitle.textContent = movie.title;

    const infoMovieDate = document.createElement('p');
    infoMovieDate.setAttribute('class', 'info-movie__date');
    infoMovieDate.textContent = new Date(movie.release_date).getFullYear();

    infoMovieContainer.appendChild(infoMovieTitle);
    infoMovieContainer.appendChild(infoMovieDate);

    movieContainer.appendChild(movieImg);
    movieContainer.appendChild(infoMovieContainer);

    parentContainer.appendChild(movieContainer);
  });
  lazyLoading();

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
