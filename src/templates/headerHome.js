const headerHome = () => {
    const view = /*html*/`
    <div class="header__container-main">
        <a class="header__logo-container" href="./">
        <img class="header__logo-img" src="https://i.postimg.cc/g0tJtwx6/logo-name.png"
            alt="Logo Sebastian Pedroza">
        </a>

        <div class="header-titles">
            <h1 class="header__title">🎬 Bienvenidos a Dev-Movies</h1>
            <p class="header__description">Millones de películas, programas de televisión y personas por descubrir. Explora ahora!</p>
        </div>

        <form id="searchForm" class="header-searchForm">
            <input class="searchForm__input" id="searchFormInput" type="text" placeholder="Buscar..." />
            <button class="searchForm__btn" id="searchBtn" type="button">Search</button>
        </form>
    </div>
    `;
    return view;
};

export default headerHome;