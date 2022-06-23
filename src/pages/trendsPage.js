import globalNodes from '../utils/globalsNodes';
import headerTrends from '../templates/headerTrends';
import eventEnterInput from '../utils/eventEnterInput';
import genericSection from '../templates/genericSection';
import getTrendingMovies from '../data/getTrendingMovies';
import footerMain from '../templates/footerMain';
// import nodes from '../utils/nodes';

const trendsPage = async () => {
  globalNodes.header.classList.remove('header-container--movie-details');
  globalNodes.header.style.background = '';
  globalNodes.header.innerHTML = await headerTrends();
  await eventEnterInput();

  globalNodes.mainContent.innerHTML = await genericSection();
  await getTrendingMovies();

  const headerCategoryTitle = document.querySelector('.header-title--trends');
  headerCategoryTitle.textContent = '🍿 Tendencias';

  globalNodes.footer.innerHTML = await footerMain();
};

export default trendsPage;
