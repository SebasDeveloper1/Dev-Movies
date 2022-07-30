import globalNodes from '../utils/globalsNodes';
import headerCategory from '../templates/headerCategory';
import genericSection from '../templates/genericSection';
import getMoviesByCategory from '../data/getCategoryById';
import footerMain from '../templates/footerMain';
import listenerScroll from '../utils/listenerScroll';
import infiniteScrolling from '../utils/infiniteScrolling';

let numPage = 1;

const categoriesPage = async () => {
  const [_, urlInfoCategory] = location.hash.split('=');
  const [categoryId, categoryName] = urlInfoCategory.split('-');

  globalNodes.header.classList.remove('header-container--movie-details');
  globalNodes.header.style.background = '';
  globalNodes.header.innerHTML = await headerCategory({
    nameCategory: decodeURI(categoryName),
  });

  globalNodes.mainContent.innerHTML = await genericSection();

  await getMoviesByCategory(categoryId, 1);

  globalNodes.footer.innerHTML = await footerMain();

  listenerScroll(() => {
    const scrollButtom = infiniteScrolling();
    const url = document.location.hash;
    if (scrollButtom && url.startsWith('#category=')) {
      numPage += 1;
      getMoviesByCategory(categoryId, numPage);
    }
  });
};

export default categoriesPage;
