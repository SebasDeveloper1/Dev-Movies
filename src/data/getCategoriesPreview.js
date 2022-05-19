import axiosBaseApi from './confAxiosBase';
// import nodes from './nodes';
import renderCategories from '../utils/renderCategories';

const API_CATEGORIES = process.env.API_CATEGORIES;

const getCategoriesPreview = async () => {
    try {
        const { data } = await axiosBaseApi.get(API_CATEGORIES);
        // const response = await fetch(`${API_URL}${API_CATEGORIES}?${API_KEY}`);
        // const data = await response.json();

        const categories = data.genres;

        const categoriesPreviewList = document.querySelector('.categoriesPreview-list');

        renderCategories({ parentContainer: categoriesPreviewList, listResults: categories, });

    } catch (error) {
        console.log(`This is an error => ${error}`);
    }
};

export default getCategoriesPreview;