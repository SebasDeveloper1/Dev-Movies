const renderMovies = ({ parentContainer, listResults = {} }) => {
    //clean the content
    parentContainer.innerHTML = '';

    const moviesList = [];
    listResults.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.className = 'movie-container';

        const imageMovie = document.createElement('img');
        imageMovie.className = 'movie-img';
        imageMovie.setAttribute = ('alt', movie.title);
        imageMovie.src = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

        movieContainer.appendChild(imageMovie);

        movieContainer.setAttribute('data-idmovie', movie.id);
        movieContainer.setAttribute('data-namemovie', movie.title);

        // movieContainer.addEventListener('click', () => {
        //     location.hash = `#movie=${movie.id}`;
        // });


        moviesList.push(movieContainer);
    });

    parentContainer.append(...moviesList);
};

export default renderMovies;