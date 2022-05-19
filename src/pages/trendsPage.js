import headerTrends from '../templates//headerTrends';
import eventEnterInput from '../utils/eventEnterInput';
import genericSection from '../templates/genericSection';
import getTrendingMovies from '../data/getTrendingMovies';
import footerMain from '../templates/footerMain';
// import nodes from '../utils/nodes';

const trendsPage = async () => {

    const header = null || document.getElementById('header');
    header.innerHTML = await headerTrends();
    await eventEnterInput();

    const mainContent = null || document.getElementById('mainContent');
    mainContent.innerHTML = await genericSection();
    await getTrendingMovies();

    const headerCategoryTitle = document.querySelector('.header-title--categoryView');
    headerCategoryTitle.textContent = 'Tendencias';

    const footer = null || document.getElementById('footer');
    footer.innerHTML = await footerMain();
};

export default trendsPage;