import gobalNodes from '../utils/globalsNodes';
import headerSearch from '../templates/headerSearch';
import eventEnterInput from '../utils/eventEnterInput';
import genericSection from '../templates/genericSection';
import getMoviesBySearch from '../data/getMovieBySearch';
import footerMain from '../templates/footerMain';
// import nodes from '../utils/nodes';

const searchPage = async () => {
    gobalNodes.header.classList.remove('header-container--movie-details');
    gobalNodes.header.style.background = '';
    gobalNodes.header.innerHTML = await headerSearch();

    await eventEnterInput();

    gobalNodes.mainContent.innerHTML = await genericSection();

    //['#search=', 'busqueda']
    const [_, query] = location.hash.split('=');
    const headerCategoryTitle = document.querySelector('.header-title--search');
    headerCategoryTitle.textContent = `Resultados para: "${decodeURI(query)}"`;// decodificar nombres con espacios
    await getMoviesBySearch(query);

    gobalNodes.footer.innerHTML = await footerMain();
};

export default searchPage;