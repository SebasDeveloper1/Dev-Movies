import gobalNodes from '../utils/globalsNodes';
import headerTrends from '../templates//headerTrends';
import eventEnterInput from '../utils/eventEnterInput';
import genericSection from '../templates/genericSection';
import getTrendingMovies from '../data/getTrendingMovies';
import footerMain from '../templates/footerMain';
// import nodes from '../utils/nodes';

const trendsPage = async () => {
    gobalNodes.header.classList.remove('header-container--movie-details');
    gobalNodes.header.style.background = '';
    gobalNodes.header.innerHTML = await headerTrends();
    await eventEnterInput();

    gobalNodes.mainContent.innerHTML = await genericSection();
    await getTrendingMovies();

    const headerCategoryTitle = document.querySelector('.header-title--categoryView');
    headerCategoryTitle.textContent = '🍿 Tendencias';

    gobalNodes.footer.innerHTML = await footerMain();
};

export default trendsPage;