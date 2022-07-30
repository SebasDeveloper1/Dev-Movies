const movieDetailInfoLoading = () => {
  const view = /* html */ `
          <article class="movie-detail-info-container">
              <figure class="detail-container-poster--loading loading-light">
              </figure>
              <div class="detail-container-text">
                  <h1 class="movie-detail__title--loading loading-light"></h1>
                  <div class="detail-container-text-secondary">
                      <p class="movie-detail__date--loading loading-light"></p>
                      <p class="movie-detail__runtime--loading loading-light"></p>
                  </div>
                  <p class="movie-detail__description--loading loading-light"></p>
                  <article class="categories-list categories-list--movie-detail">
                  <div class="category-container category-container--movie-detail--loading loading-light"></div>
                  <div class="category-container category-container--movie-detail--loading loading-light"></div>
                  <div class="category-container category-container--movie-detail--loading loading-light"></div>
                  </article>
              </div>
          </article>
      `;

  return view;
};

export default movieDetailInfoLoading;
