const mainContentHome = () => {
    const view = /*html*/`
    <section id="trendingPreview" class="trendingPreview-container">
        <div class="trendingPreview-header">
            <h2 class="trendingPreview-title">Tendencias</h2>
            <button id="trendingPreviewBtn" type="button" class="trendingPreview-btn">Ver más</button>
        </div>

        <article class="trendingPreview-movieList">
        </article>
    </section>

    <section id="categoriesPreview" class="categoriesPreview-container">
        <h2 class="categoriesPreview-title">Categorías</h2>
        <article class="categoriesPreview-list">
        </article>
    </section>
    `;

    return view;
};

export default mainContentHome;