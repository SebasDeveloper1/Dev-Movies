import axiosBaseApi from './confAxiosBase';
// import nodes from './nodes';
import renderMovies from '../utils/renderMovies';

const { API_TRENDING } = process.env;

const getTrendingMovies = async () => {
  try {
    const { data } = await axiosBaseApi.get(API_TRENDING);
    // const res = await fetch(`${API_URL}${API_TRENDING}?api_key=${API_KEY}`);
    // const data = await res.json();

    const movies = data.results;

    const genericSection = document.querySelector('.generic-list-container');

    renderMovies({ parentContainer: genericSection, listResults: movies });
  } catch (error) {
    console.log(`This is an error => ${error}`);
  }
};

export default getTrendingMovies;
