const events = () => {
    const bodyContainer = document.querySelector('#bodyContainer');
    bodyContainer.addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'searchBtn':
                const searchFormInput = document.querySelector('#searchFormInput');
                const valueSearch = searchFormInput.value.trim();
                if (valueSearch.length > 0) {
                    location.hash = `#search=${valueSearch}`;
                }
                break;
            case 'trendingPreviewBtn':
                location.hash = '#trends'
                break;
            case 'headerArrowBtn':
                const stateLoad = window.history.state ? window.history.state.loadUrl : '';
                if (stateLoad.includes('#')) {
                    window.location.hash = '#home';
                } else {
                    window.history.back();
                }
                break;
            default:
                break;
        }

        if (e.composedPath()[1].classList.contains('movie-container')) {
            const idSelectedMovie = e.composedPath()[1].dataset.idmovie;
            const nameSelectedMovie = e.composedPath()[1].dataset.namemovie;
            location.hash = `#movie=${idSelectedMovie}-${nameSelectedMovie}`;

        } else if (e.target.classList.contains('category-title')) {
            const idSelectedCategory = e.target.dataset.idcategory;
            const nameSelectedCategory = e.target.dataset.namecategory;
            location.hash = `#category=${idSelectedCategory}-${nameSelectedCategory}`;
        };

    });
};

export default events;