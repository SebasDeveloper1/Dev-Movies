const renderMovies = ({ parentContainer, listResults = {} }) => {
    //clean the content
    parentContainer.innerHTML = '';

    const moviesList = [];
    listResults.forEach(movie => {
        const movieContainer = document.createElement('div');
        if (parentContainer.classList.contains('trendingPreview-movieList') || parentContainer.classList.contains('related-movies-scroll-container')) {
            movieContainer.className = 'movie-container movie-container--dinamic';
        } else {
            movieContainer.className = 'movie-container';
        }

        const imageMovie = document.createElement('img');
        imageMovie.className = 'movie-img';
        imageMovie.setAttribute = ('alt', movie.title);

        let posterPathUrl;
        let posterPath = movie.poster_path;
        if (posterPath === null) {
            posterPathUrl = `https://i.postimg.cc/XJN0fqRR/movie-placeholder.png`;
        } else {
            posterPathUrl = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
        }
        imageMovie.src = posterPathUrl;

        movieContainer.appendChild(imageMovie);

        movieContainer.setAttribute('data-idmovie', movie.id);
        movieContainer.setAttribute('data-namemovie', movie.title);

        moviesList.push(movieContainer);
    });

    parentContainer.append(...moviesList);
};

export default renderMovies;