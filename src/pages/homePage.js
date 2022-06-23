import globalNodes from '../utils/globalsNodes';
import headerHome from '../templates/headerHome';
import eventEnterInput from '../utils/eventEnterInput';
import mainContentHome from '../templates/mainContentHome';
import getTrendingMoviesPreview from '../data/getTrendingPreview';
import getCategoriesPreview from '../data/getCategoriesPreview';
import footerMain from '../templates/footerMain';

const homePage = async () => {
  globalNodes.header.classList.remove('header-container--movie-details');
  globalNodes.header.style.background = '';
  globalNodes.header.innerHTML = await headerHome();
  await eventEnterInput();

  globalNodes.mainContent.innerHTML = await mainContentHome();
  await getTrendingMoviesPreview();
  await getCategoriesPreview();

  globalNodes.footer.innerHTML = await footerMain();
};

export default homePage;
