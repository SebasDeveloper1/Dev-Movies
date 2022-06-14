import gobalNodes from '../utils/globalsNodes';
import headerCategory from '../templates/headerCategory';
import genericSection from '../templates/genericSection';
import getMoviesByCategory from '../data/getCategoryById';
import footerMain from '../templates/footerMain';

const categoriesPage = async () => {
    const [_, urlInfoCategory] = location.hash.split('=');
    const [categoryId, categoryName] = urlInfoCategory.split('-');

    gobalNodes.header.classList.remove('header-container--movie-details');
    gobalNodes.header.style.background = '';
    gobalNodes.header.innerHTML = await headerCategory({ nameCategory:  decodeURI(categoryName) });

    gobalNodes.mainContent.innerHTML = await genericSection();

    await getMoviesByCategory(categoryId);

    gobalNodes.footer.innerHTML = await footerMain();
};

export default categoriesPage;


