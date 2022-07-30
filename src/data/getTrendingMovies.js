import axiosBaseApi from './confAxiosBase';
import renderMovies from '../utils/renderMovies';

const { API_TRENDING } = process.env;

const getTrendingMovies = async (numPage) => {
  try {
    const { data } = await axiosBaseApi.get(API_TRENDING, {
      params: {
        page: numPage,
      },
    });
    // const res = await fetch(`${API_URL}${API_TRENDING}?api_key=${API_KEY}`);
    // const data = await res.json();

    const movies = data.results;

    const genericSection = document.querySelector('.generic-list-container');

    renderMovies({
      parentContainer: genericSection,
      listResults: movies,
      numPage,
    });
  } catch (error) {
    console.log(`This is an error => ${error}`);
  }
};

export default getTrendingMovies;
