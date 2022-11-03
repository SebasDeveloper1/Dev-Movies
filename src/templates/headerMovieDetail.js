import internationalityTexts from '../utils/internationalityTexts';

const { titleTexts, buttonTexts } = internationalityTexts();

const headerMovieDetail = () => {
  const view = /* html */ `
    <div class="header__container-main--movie-details">
        <div class="header__top-container">
            <span class="header-arrow" title="${buttonTexts.backArrow}"><i id="headerArrowBtn" class="fa-solid fa-solid fa-arrow-left"></i></span>
            <a class="header__logo-container" href="#home">
            <img class="header__logo-img" src="https://i.postimg.cc/g0tJtwx6/logo-name.png"
                alt="${titleTexts.altLogo}">
            </a>
        </div>
        <div class="movie-detail-main-info"></div>
    `;

  return view;
};

export default headerMovieDetail;
