import lazyLoading from './lazyLoading';

const renderMovies = ({ parentContainer, listResults = {}, numPage = 1 }) => {
  // clean the content
  let likedMoviesList = [];
  likedMoviesList = JSON.parse(localStorage.getItem('LIKED_MOVIES'));

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

    const addFavoritesBtn = document.createElement('span');
    addFavoritesBtn.setAttribute('class', 'movie-add-favorites-btn');

    const addFavoritesIconBtn = document.createElement('i');
    addFavoritesIconBtn.setAttribute('id', 'addFavoritesBtn');
    addFavoritesIconBtn.setAttribute('class', 'fa-solid fa-heart');
    addFavoritesIconBtn.setAttribute('title', 'Agregar a favoritos');

    const infoMovieContainer = document.createElement('div');
    infoMovieContainer.setAttribute('class', 'info-movie-container');

    const infoMovieTitle = document.createElement('h3');
    infoMovieTitle.setAttribute('class', 'info-movie__title');
    infoMovieTitle.textContent = movie.title;

    const infoMovieDate = document.createElement('p');
    infoMovieDate.setAttribute('class', 'info-movie__date');
    infoMovieDate.textContent = new Date(movie.release_date).getFullYear();

    likedMoviesList.forEach((item) => {
      if (Number(item) === movie.id) {
        addFavoritesIconBtn.classList.toggle('fa-heart--active');
        addFavoritesIconBtn.setAttribute('title', 'Quitar de favoritos');
      }
    });

    infoMovieContainer.appendChild(infoMovieTitle);
    infoMovieContainer.appendChild(infoMovieDate);
    addFavoritesBtn.appendChild(addFavoritesIconBtn);

    movieContainer.appendChild(movieImg);
    movieContainer.appendChild(addFavoritesBtn);
    movieContainer.appendChild(infoMovieContainer);

    parentContainer.appendChild(movieContainer);
  });
  lazyLoading();

  const movieContainer = document.querySelectorAll('.movie-container');
  if (
    parentContainer.classList.contains('trending-preview-movieList') ||
    parentContainer.classList.contains('favorites-preview-movieList') ||
    parentContainer.classList.contains('related-movies-scroll-container')
  ) {
    movieContainer.forEach((node) => {
      node.classList.add('movie-container--dinamic');
    });
  }
};

export default renderMovies;
