const headerSearch = () => {
    const view = /*html*/`
    <div class="header__container-main header__container-main--search">
        <span class="header-arrow"><i id="headerArrowBtn" class="fa-solid fa-solid fa-arrow-left"></i></span>
            <div class="header-titles">
                <h1 class="header-title--search"></h1>
            </div>

            <form id="searchForm" class="header-search-form">
                <input class="search-form__input" id="searchFormInput" type="text" placeholder="Buscar..." />
                <button class="search-form__btn" id="searchBtn" type="button">Search</button>
            </form>
    </div>
    `;
    return view;
}

export default headerSearch;