import headerSearch from '../templates/headerSearch';
import eventEnterInput from '../utils/eventEnterInput';
import genericSection from '../templates/genericSection';
import getMoviesBySearch from '../data/getMovieBySearch';
import footerMain from '../templates/footerMain';
// import nodes from '../utils/nodes';

const searchPage = async () => {
    const header = null || document.getElementById('header');
    header.innerHTML = await headerSearch();

    await eventEnterInput();

    const mainContent = null || document.getElementById('mainContent');
    mainContent.innerHTML = await genericSection();

    //['#search=', 'busqueda']
    const [_, query] = location.hash.split('=');
    const headerCategoryTitle = document.querySelector('.header-title--categoryView');
    headerCategoryTitle.textContent = `Resultados para: ${decodeURI(query)}`;// decodificar nombres con espacios
    await getMoviesBySearch(query);

    const footer = null || document.getElementById('footer');
    footer.innerHTML = await footerMain();
};

export default searchPage;