import gobalNodes from '../utils/globalsNodes';
import headerHome from '../templates/headerHome';
import eventEnterInput from '../utils/eventEnterInput';
import mainContentHome from '../templates/mainContentHome';
import getTrendingMoviesPreview from '../data/getTrendingPreview';
import getCategoriesPreview from '../data/getCategoriesPreview';
import footerMain from '../templates/footerMain';

const homePage = async () => {
    gobalNodes.header.classList.remove('header-container--movie-details');
    gobalNodes.header.style.background = '';
    gobalNodes.header.innerHTML = await headerHome();
    await eventEnterInput();

    gobalNodes.mainContent.innerHTML = await mainContentHome();
    await getTrendingMoviesPreview();
    await getCategoriesPreview();

    gobalNodes.footer.innerHTML = await footerMain();
};

export default homePage;