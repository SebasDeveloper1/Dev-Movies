const mainContentHome = () => {
  const view = /* html */ `
    <section id="trendingPreview" class="trending-preview-container">
        <div class="trending-preview-header">
            <h2 class="trending-preview__title">Tendencias</h2>
            <button id="trendingPreviewBtn" type="button" class="trending-preview__btn">Ver más</button>
        </div>

        <article class="trending-preview-movieList">
          <div class="movie-container--loading loading-dark"></div>
          <div class="movie-container--loading loading-dark"></div>
          <div class="movie-container--loading loading-dark"></div>
          <div class="movie-container--loading loading-dark"></div>
          <div class="movie-container--loading loading-dark"></div>
          <div class="movie-container--loading loading-dark"></div>
          <div class="movie-container--loading loading-dark"></div>
        </article>
    </section>

    <section id="categoriesPreview" class="categories-preview-container">
        <h2 class="categories-preview__title">Categorías</h2>
        <article class="categories-preview-list">
          <div class="category-container--loading loading-dark"></div>
          <div class="category-container--loading loading-dark"></div>
          <div class="category-container--loading loading-dark"></div>
          <div class="category-container--loading loading-dark"></div>
          <div class="category-container--loading loading-dark"></div>
          <div class="category-container--loading loading-dark"></div>
        </article>
    </section>
    `;

  return view;
};

export default mainContentHome;
