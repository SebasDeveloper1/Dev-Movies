import internationalityTexts from '../utils/internationalityTexts';

const { titleTexts } = internationalityTexts();

const mainContentDetailMovie = () => {
  const view = /* html */ `
    <section id="movieDetail" class="movie-detail-container">
        <article class="related-movies-container">
            <h2 class="related-movies__title">${titleTexts.titleRecommendations}</h2>
            <div class="related-movies-scroll-container">
            <div class="movie-container--loading loading-light"></div>
            <div class="movie-container--loading loading-light"></div>
            <div class="movie-container--loading loading-light"></div>
            <div class="movie-container--loading loading-light"></div>
            <div class="movie-container--loading loading-light"></div>
            <div class="movie-container--loading loading-light"></div>
            <div class="movie-container--loading loading-light"></div>
            <div class="movie-container--loading loading-light"></div>
            </div>
        </article>
    </section>
    `;

  return view;
};

export default mainContentDetailMovie;
