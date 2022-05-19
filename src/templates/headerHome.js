const headerHome = () => {
    const view = /*html*/`
    <div id="headerContentMain">
        <h1 class="header-title">Dev-Movies</h1>
        
        <form id="searchForm" class="header-searchForm">
            <input id="searchFormInput" type="text" placeholder="Buscar..." />
            <button id="searchBtn" type="button">🔍</button>
        </form>
    </div>
    `;
    return view;
};

export default headerHome;