const headerTrends = () => {
    const view = /*html*/`
    <div class="header__container-main header__container-main--trends">
    <span class="header-arrow"><i id="headerArrowBtn" class="fa-solid fa-solid fa-arrow-left"></i></span>
        <div class="header-titles">
            <h1 class="header-title--trends"></h1>
            <h4 class="header__description">Millones de películas, programas de televisión y personas por descubrir. Explora ahora!</h4>
        </div>

        <form id="searchForm" class="header-search-form">
            <input class="search-form__input" id="searchFormInput" type="text" placeholder="Buscar..." />
            <button class="search-form__btn" id="searchBtn" type="button">Search</button>
        </form>
    </div>
    `;
    return view;
}

export default headerTrends;