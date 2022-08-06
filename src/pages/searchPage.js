import globalNodes from '../utils/globalsNodes';
import headerSearch from '../templates/headerSearch';
import eventEnterInput from '../utils/eventEnterInput';
import genericSection from '../templates/genericSection';
import getMoviesBySearch from '../data/getMovieBySearch';
import footerMain from '../templates/footerMain';
import listenerScroll from '../utils/listenerScroll';
import infiniteScrolling from '../utils/infiniteScrolling';

let numPage = 1;

const searchPage = async () => {
  globalNodes.header.classList.remove('header-container--movie-details');
  globalNodes.header.style.background = '';
  globalNodes.header.innerHTML = await headerSearch();

  await eventEnterInput();

  globalNodes.mainContent.innerHTML = await genericSection();

  // ['#search=', 'busqueda']
  const [_, query] = location.hash.split('=');
  console.log(query);
  const headerCategoryTitle = document.querySelector('.header-title--search');
  headerCategoryTitle.textContent = `Resultados para: "${decodeURI(query)}"`; // decodificar nombres con espacios
  await getMoviesBySearch(decodeURI(query), 1);

  globalNodes.footer.innerHTML = await footerMain();

  listenerScroll(() => {
    const scrollButtom = infiniteScrolling();
    const url = document.location.hash;
    if (scrollButtom && url.startsWith('#search=')) {
      numPage += 1;
      getMoviesBySearch(query, numPage);
    }
  });
};

export default searchPage;
