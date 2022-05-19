const mainContentDetailMovie = () => {
    const view = /*html*/`
    <section id="movieDetail" class="movieDetail-container">
    <h1 class="movieDetail-title"></h1>
    <span class="movieDetail-score"></span>
    <p class="movieDetail-description"></p>

    <article class="categories-list">
    </article>

    <article class="relatedMovies-container">
        <h2 class="relatedMovies-title">Películas similares</h2>
        <div class="relatedMovies-scrollContainer">
        </div>
    </article>
    </section>
    `;

    return view;
};

export default mainContentDetailMovie;