const headerMovieDetail = () => {
    const view = /*html*/`
    <div class="header__container-main--movie-details">
        <div class="header__top-container">
            <span class="header-arrow"><i id="headerArrowBtn" class="fa-solid fa-solid fa-arrow-left"></i></span>
            <a class="header__logo-container" href="#home">
            <img class="header__logo-img" src="https://i.postimg.cc/g0tJtwx6/logo-name.png"
                alt="Logo Sebastian Pedroza">
            </a>
        </div>
        <div class="movie-detail-main-info">
            <article class="movie-detail-info-container">
                <figure class="detail-container-poster">
                    <img class="movie-detail__poster" src="/" alt="Poster movie">
                    <div class="score-container">
                    <span class="movie-detail__score"></span>
                </div>
                </figure>
                <div class="detail-container-text">
                    <h1 class="movie-detail__title"></h1>
                    <p class="movie-detail__description"></p>
                    <article class="categories-list categories-list--movie-detail"></article>
                </div>
            </article>
        </div>
    </div>
    `;

    return view;
};

export default headerMovieDetail;