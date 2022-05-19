import headerHome from '../templates/headerHome';
import eventEnterInput from '../utils/eventEnterInput';
import mainContentHome from '../templates/mainContentHome';
import getTrendingMoviesPreview from '../data/getTrendingPreview';
import getCategoriesPreview from '../data/getCategoriesPreview';
import footerMain from '../templates/footerMain';

const homePage = async () => {
    const header = null || document.getElementById('header');
    header.style.background = '';
    header.classList.remove('header-container--long');
    header.innerHTML = await headerHome();
    await eventEnterInput();

    const mainContent = null || document.getElementById('mainContent');
    mainContent.innerHTML = await mainContentHome();
    await getTrendingMoviesPreview();
    await getCategoriesPreview();

    const footer = null || document.getElementById('footer');
    footer.innerHTML = await footerMain();

};

export default homePage;