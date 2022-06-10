import gobalNodes from '../utils/globalsNodes';
import headerCategory from '../templates/headerCategory';
import genericSection from '../templates/genericSection';
import getMoviesByCategory from '../data/getCategoryById';
import footerMain from '../templates/footerMain';

const categoriesPage = async () => {
    gobalNodes.header.classList.remove('header-container--movie-details');
    gobalNodes.header.style.background = '';
    gobalNodes.header.innerHTML = await headerCategory();

    gobalNodes.mainContent.innerHTML = await genericSection();

    const [_, urlInfoCategory] = location.hash.split('=');
    const [categoryId, categoryName] = urlInfoCategory.split('-');

    const headerCategoryTitle = document.querySelector('.header-title--category-view');
    headerCategoryTitle.textContent = decodeURI(categoryName);// decodificar nombres con espacios
    await getMoviesByCategory(categoryId);

    gobalNodes.footer.innerHTML = await footerMain();
};

export default categoriesPage;


