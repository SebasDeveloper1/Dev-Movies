const events = () => {
    const bodyContainer = document.querySelector('#bodyContainer');
    bodyContainer.addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'searchBtn':
                const searchFormInput = document.querySelector('#searchFormInput');
                const valueSearch = searchFormInput.value;
                location.hash = `#search=${valueSearch.trim()}`;
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

        if (e.path[1].classList.contains('movie-container')) {
            const idSelectedMovie = e.path[1].dataset.idmovie;
            const nameSelectedMovie = e.path[1].dataset.namemovie;
            location.hash = `#movie=${idSelectedMovie}-${nameSelectedMovie}`;

        } else if (e.target.classList.contains('category-title')) {
            const idSelectedCategory = e.target.dataset.idcategory;
            const nameSelectedCategory = e.target.dataset.namecategory;
            location.hash = `#category=${idSelectedCategory}-${nameSelectedCategory}`;
        };

    });
};

export default events;