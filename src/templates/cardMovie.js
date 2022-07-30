const cardMovie = ({ idMovie, urlPosterMovie, titleMovie, dateMovie }) => {
  const view = /* html */ `
        <div class="movie-container" data-idmovie="${idMovie}" data-namemovie="${titleMovie}">
            <img class="movie-img" data-img="${urlPosterMovie}" src="../assets/images/movie-placeholder.png" alt="${titleMovie}"/>
            <div class="info-movie-container">
                <h3 class="info-movie__title">${titleMovie}</h3>
                <p class="info-movie__date">${dateMovie}</p>
            </div>
        </div>
    `;
  return view;
};

export default cardMovie;
