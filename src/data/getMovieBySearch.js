import axiosBaseApi from "./confAxiosBase";
import renderMovies from '../utils/renderMovies';

const API_SEARCH = process.env.API_SEARCH;

const getMoviesBySearch = async (query) => {
    try {
        const { data } = await axiosBaseApi.get(API_SEARCH, {
            params: {
                query: query,
            }
        });
        // const res = await fetch(`${API_URL}${API_TRENDING}?api_key=${API_KEY}`);
        // const data = await res.json();

        const movies = data.results;

        const genericSection = document.querySelector('.genericList-container');
        /* A function that is being called. */
        renderMovies({ parentContainer: genericSection, listResults: movies, });

    } catch (error) {
        console.log(`This is an error => ${error}`);

    }
};

export default getMoviesBySearch;