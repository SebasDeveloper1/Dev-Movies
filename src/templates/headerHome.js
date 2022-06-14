const headerHome = () => {
    const view = /*html*/`
    <div class="header__container-main">
        <a class="header__logo-container" href="#home">
        <img class="header__logo-img" src="https://i.postimg.cc/g0tJtwx6/logo-name.png"
            alt="Logo Sebastian Pedroza">
        </a>

        <div class="header-titles">
            <h1 class="header__title">🎬 Bienvenidos!</h1>
            <h4 class="header__description">Millones de películas, programas de televisión y personas por descubrir. Explora ahora!</h4>
        </div>

        <form id="searchForm" class="header-search-form">
            <input class="search-form__input" id="searchFormInput" type="text" placeholder="Buscar..." />
            <button class="search-form__btn" id="searchBtn" type="button">Search</button>
        </form>
    </div>
    `;
    return view;
};

export default headerHome;