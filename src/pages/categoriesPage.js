import globalNodes from '../utils/globalsNodes';
import headerCategory from '../templates/headerCategory';
import genericSection from '../templates/genericSection';
import getMoviesByCategory from '../data/getCategoryById';
import footerMain from '../templates/footerMain';

const categoriesPage = async () => {
  const [_, urlInfoCategory] = location.hash.split('=');
  const [categoryId, categoryName] = urlInfoCategory.split('-');

  globalNodes.header.classList.remove('header-container--movie-details');
  globalNodes.header.style.background = '';
  globalNodes.header.innerHTML = await headerCategory({
    nameCategory: decodeURI(categoryName),
  });

  globalNodes.mainContent.innerHTML = await genericSection();

  await getMoviesByCategory(categoryId);

  globalNodes.footer.innerHTML = await footerMain();
};

export default categoriesPage;
