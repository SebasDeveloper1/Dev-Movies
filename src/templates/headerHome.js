import internationalityTexts from '../utils/internationalityTexts';

const { titleTexts, descriptionTexts, inputTexts, buttonTexts } =
  internationalityTexts();

const headerHome = () => {
  const view = /* html */ `
    <div class="header__container-main">
        <a class="header__logo-container" href="#home">
        <img class="header__logo-img" src="https://i.postimg.cc/g0tJtwx6/logo-name.png"
            alt="${titleTexts.altLogo}">
        </a>

        <div class="header-titles">
            <h1 class="header__title">🎬 ${titleTexts.titleHome}</h1>
            <h4 class="header__description">${descriptionTexts.descriptionHome}</h4>
        </div>

        <form id="searchForm" class="header-search-form">
            <input class="search-form__input" id="searchFormInput" type="text" placeholder="${inputTexts.placeholderInputSearch}" />
            <button class="search-form__btn" id="searchBtn" type="button">${buttonTexts.searchBtn}</button>
        </form>
    </div>
    `;
  return view;
};

export default headerHome;
