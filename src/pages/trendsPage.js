import globalNodes from '../utils/globalsNodes';
import headerTrends from '../templates/headerTrends';
import eventEnterInput from '../utils/eventEnterInput';
import genericSection from '../templates/genericSection';
import getTrendingMovies from '../data/getTrendingMovies';
import footerMain from '../templates/footerMain';
import listenerScroll from '../utils/listenerScroll';
import infiniteScrolling from '../utils/infiniteScrolling';

let numPage = 1;

const trendsPage = async () => {
  globalNodes.header.classList.remove('header-container--movie-details');
  globalNodes.header.style.background = '';
  globalNodes.header.innerHTML = await headerTrends();
  await eventEnterInput();

  globalNodes.mainContent.innerHTML = await genericSection();

  await getTrendingMovies(1);

  // if (pathActual[0] === '#home') {
  //   await getTrendingMovies(1);
  //   numPage = 1;
  //   pathActual[0] = '';
  // } else {
  //   await getTrendingMovies(numPage);
  // }

  globalNodes.footer.innerHTML = await footerMain();

  listenerScroll(() => {
    const scrollButtom = infiniteScrolling();
    const url = document.location.hash;
    if (scrollButtom && url === '#trends') {
      numPage += 1;
      getTrendingMovies(numPage);
    }
  });
};

export default trendsPage;
