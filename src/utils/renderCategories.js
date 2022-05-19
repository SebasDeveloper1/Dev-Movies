// import nodes from './nodes';

const renderCategories = ({ parentContainer, listResults } = {}) => {

    //clean the content
    parentContainer.innerHTML = '';

    const categoriesList = [];
    listResults.forEach(category => {

        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'category-container';

        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.name;
        categoryTitle.id = `id${category.id}`;

        // categoryTitle.addEventListener('click', () => {
        //     location.hash = `#category=${category.id}-${category.name}`;
        // });

        categoryTitle.setAttribute('data-idcategory', category.id);
        categoryTitle.setAttribute('data-namecategory', category.name);

        categoryContainer.appendChild(categoryTitle);
        categoriesList.push(categoryContainer);
    });

    parentContainer.append(...categoriesList);
};

export default renderCategories;