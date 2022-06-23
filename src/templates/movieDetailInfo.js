const movieDetailInfo = () => {
  const view = /* html */ `
        <article class="movie-detail-info-container">
            <figure class="detail-container-poster">
                <img class="movie-detail__poster" src="/" alt="Poster movie">
                <div class="score-container">
                <span class="movie-detail__score"></span>
            </div>
            </figure>
            <div class="detail-container-text">
                <h1 class="movie-detail__title"></h1>
                <div class="detail-container-text-secondary">
                    <p class="movie-detail__date"></p>
                    <p class="movie-detail__runtime"></p>
                </div>
                <p class="movie-detail__description"></p>
                <article class="categories-list categories-list--movie-detail"></article>
                <button id="watchTrailerBtn" type="button" class="movie-detail__Trailer-btn">Ver trailer</button>
            </div>
        </article>
    `;

  return view;
};

export default movieDetailInfo;
