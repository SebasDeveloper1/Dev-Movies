const headerSearch = () => {
    const view = /*html*/`
    <span id="headerArrowBtn" class="header-arrow">&lt;</span>
    <h1 class="header-title--categoryView">Acción</h1>

    <form id="searchForm" class="header-searchForm">
        <input id="searchFormInput" type="text" placeholder="Buscar..." />
        <button id="searchBtn" type="button">🔍</button>
    </form>
    `;
    return view;
}

export default headerSearch;