import getTrendingMovies from '../data/getTrendingPreview';

const infiniteScrolling = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  return scrollTop + clientHeight >= scrollHeight - 20;
};

export default infiniteScrolling;
