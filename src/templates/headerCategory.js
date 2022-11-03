import internationalityTexts from '../utils/internationalityTexts';

const { titleTexts, descriptionTexts, buttonTexts } = internationalityTexts();

const headerCategory = ({ nameCategory }) => {
  const view = /* html */ `
    <div class="header__container-main header__container-main--trends">
        <div class="header__top-container">
            <span class="header-arrow" title="${
              buttonTexts.backArrow
            }"><i id="headerArrowBtn" class="fa-solid fa-solid fa-arrow-left"></i></span>
            <a class="header__logo-container" href="#home">
            <img class="header__logo-img" src="https://i.postimg.cc/g0tJtwx6/logo-name.png"
                alt="${titleTexts.altLogo}" />
            </a>
        </div>
        <div class="header-titles">
            <h1 class="header-title--category-view">${nameCategory}</h1>
        </div>
            <h4 class="header__description">${descriptionTexts.descriptionCategory(
              nameCategory
            )}</h4>
            </div>
    `;

  return view;
};

export default headerCategory;
