import internationalityTexts from '../utils/internationalityTexts';

const { titleTexts, descriptionTexts, inputTexts, buttonTexts } =
  internationalityTexts();

const headerTrends = () => {
  const view = /* html */ `
    <div class="header__container-main header__container-main--trends">
        <div class="header__top-container">
            <span class="header-arrow" title="${buttonTexts.backArrow}"><i id="headerArrowBtn" class="fa-solid fa-solid fa-arrow-left"></i></span>
            <a class="header__logo-container" href="#home">
            <img class="header__logo-img" src="https://i.postimg.cc/g0tJtwx6/logo-name.png"
                alt="${titleTexts.altLogo}">
            </a>
        </div>
        <div class="header-titles">
            <h1 class="header-title--trends">${titleTexts.titleTrends}</h1>
            <h4 class="header__description">🌟 ${descriptionTexts.descriptionTrends} 🌟</h4>
        </div>

        <form id="searchForm" class="header-search-form">
            <input class="search-form__input" id="searchFormInput" type="text" placeholder="${inputTexts.placeholderInputSearch}" />
            <button class="search-form__btn" id="searchBtn" type="button">${buttonTexts.searchBtn}</button>
        </form>
    </div>
    `;
  return view;
};

export default headerTrends;
