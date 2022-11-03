import globalNodes from '../utils/globalsNodes';
import headerFavorites from '../templates/headerFavorites';
import eventEnterInput from '../utils/eventEnterInput';
import genericSection from '../templates/genericSection';
import getFavoritesMoviesPreview from '../data/getFavoritesPreview';
import footerMain from '../templates/footerMain';

const favoritesPage = async () => {
  globalNodes.header.classList.remove('header-container--movie-details');
  globalNodes.header.style.background = '';
  globalNodes.header.innerHTML = await headerFavorites();
  await eventEnterInput();

  globalNodes.mainContent.innerHTML = await genericSection();

  await getFavoritesMoviesPreview({ page: 'favorites' });

  globalNodes.footer.innerHTML = await footerMain();
};

export default favoritesPage;
