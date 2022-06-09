const headerTrends = () => {
    const view = /*html*/`
    <div class="header__container-main header__container-main--trends">
    <span class="header-arrow"><i id="headerArrowBtn" class="fa-solid fa-solid fa-arrow-left"></i></span>
        <div class="header-titles">
            <h1 class="header-title--trends"></h1>
            <p class="header__description">Millones de películas, programas de televisión y personas por descubrir. Explora ahora!</p>
        </div>

        <form id="searchForm" class="header-searchForm">
            <input class="searchForm__input" id="searchFormInput" type="text" placeholder="Buscar..." />
            <button class="searchForm__btn" id="searchBtn" type="button">Search</button>
        </form>
    </div>
    `;
    return view;
}

export default headerTrends;