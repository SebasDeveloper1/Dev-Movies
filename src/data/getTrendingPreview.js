import axiosBaseApi from "./confAxiosBase";
// import nodes from './nodes';
import renderMovies from '../utils/renderMovies';

const API_TRENDING = process.env.API_TRENDING;

const getTrendingMoviesPreview = async () => {
    try {
        const { data } = await axiosBaseApi.get(API_TRENDING);
        // const res = await fetch(`${API_URL}${API_TRENDING}?api_key=${API_KEY}`);
        // const data = await res.json();

        const movies = data.results;

        const trendingPreview = document.querySelector('.trendingPreview-movieList');

        renderMovies({ parentContainer: trendingPreview, listResults: movies, });

    } catch (error) {
        console.log(`This is an error => ${error}`);
    }
};

export default getTrendingMoviesPreview;