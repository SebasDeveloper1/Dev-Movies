import internationalityTexts from '../utils/internationalityTexts';

const { titleTexts, buttonTexts } = internationalityTexts();

const mainContentHome = () => {
  const view = /* html */ `
    <section id="trendingPreview" class="trending-preview-container">
        <div class="trending-preview-header">
            <h2 class="trending-preview__title">${titleTexts.titleTrends}</h2>
            <button id="trendingPreviewBtn" type="button" class="trending-preview__btn">${buttonTexts.seeMoreBtn}</button>
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

    <section id="favoritesPreview" class="favorites-preview-container">
      <div class="favorites-preview-header">
          <h2 class="favorites-preview__title">${titleTexts.titleFavorites}</h2>
          <button id="favoritesPreviewBtn" type="button" class="favorites-preview__btn">${buttonTexts.seeMoreBtn}</button>
      </div>

      <article class="favorites-preview-movieList">
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
        <h2 class="categories-preview__title">${titleTexts.titleCategories}</h2>
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
