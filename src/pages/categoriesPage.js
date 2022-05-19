import headerCategory from '../templates/headerCategory';
import genericSection from '../templates/genericSection';
import getMoviesByCategory from '../data/getCategoryById';
import footerMain from '../templates/footerMain';

const categoriesPage = async () => {
    const header = null || document.getElementById('header');
    header.style.background = '';
    header.classList.remove('header-container--long');
    header.innerHTML = await headerCategory();

    const mainContent = null || document.getElementById('mainContent');
    mainContent.innerHTML = await genericSection();

    const [_, urlInfoCategory] = location.hash.split('=');
    const [categoryId, categoryName] = urlInfoCategory.split('-');

    const headerCategoryTitle = document.querySelector('.header-title--categoryView');
    headerCategoryTitle.textContent = decodeURI(categoryName);// decodificar nombres con espacios
    await getMoviesByCategory(categoryId);

    const footer = null || document.getElementById('footer');
    footer.innerHTML = await footerMain();
};

export default categoriesPage;


