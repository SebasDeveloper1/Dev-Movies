// import nodes from './nodes';

const renderCategories = ({ parentContainer, listResults } = {}) => {
  // clean the content
  parentContainer.innerHTML = '';

  const categoriesList = [];

  listResults.forEach((category) => {
    const categoryContainer = document.createElement('div');
    const categoryTitle = document.createElement('h3');

    if (parentContainer.classList.contains('categories-list--movie-detail')) {
      categoryContainer.className =
        'category-container category-container--movie-detail';
      categoryTitle.className = 'category-title category-title--movie-detail';
    } else {
      categoryContainer.className = 'category-container';
      categoryTitle.className = 'category-title';
    }

    categoryTitle.textContent = category.name;
    categoryTitle.id = `id${category.id}`;

    categoryTitle.setAttribute('data-idcategory', category.id);
    categoryTitle.setAttribute('data-namecategory', category.name);

    categoryContainer.appendChild(categoryTitle);
    categoriesList.push(categoryContainer);
  });

  parentContainer.append(...categoriesList);
};

export default renderCategories;
