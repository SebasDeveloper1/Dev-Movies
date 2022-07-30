import globalNodes from './globalsNodes';

export const pathActual = [];

const events = () => {
  globalNodes.bodyContainer.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'searchBtn':
        {
          // eslint-disable-next-line no-case-declarations
          const searchFormInput = document.querySelector('#searchFormInput');
          const valueSearch = searchFormInput.value.trim();
          if (valueSearch.length > 0) {
            location.hash = `#search=${valueSearch}`;
          }
        }
        break;
      case 'trendingPreviewBtn':
        pathActual[0] = location.hash;
        location.hash = '#trends';
        break;
      case 'headerArrowBtn':
        {
          const stateLoad = window.history.state
            ? window.history.state.loadUrl
            : '';
          if (stateLoad.includes('#')) {
            window.location.hash = '#home';
          } else {
            window.history.back();
          }
        }
        break;
      default:
        break;
    }

    if (e.composedPath()[1].classList.contains('movie-container')) {
      const idSelectedMovie = e.composedPath()[1].dataset.idmovie;
      const nameSelectedMovie = e.composedPath()[1].dataset.namemovie;
      location.hash = `#movie=${idSelectedMovie}-${nameSelectedMovie}`;
    } else if (e.composedPath()[2].classList.contains('movie-container')) {
      const idSelectedMovie = e.composedPath()[2].dataset.idmovie;
      const nameSelectedMovie = e.composedPath()[2].dataset.namemovie;
      location.hash = `#movie=${idSelectedMovie}-${nameSelectedMovie}`;
    } else if (e.target.classList.contains('category-title')) {
      const idSelectedCategory = e.target.dataset.idcategory;
      const nameSelectedCategory = e.target.dataset.namecategory;
      location.hash = `#category=${idSelectedCategory}-${nameSelectedCategory}`;
    }
  });
};

export default events;
