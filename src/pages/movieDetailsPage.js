import globalNodes from '../utils/globalsNodes';
import headerMovieDetail from '../templates/headerMovieDetail';
import movieDetailInfo from '../templates/movieDetailInfo';
import mainContentDetailMovie from '../templates/mainContentDetailMovie';
import getMovieById from '../data/getMovieById';
import footerMain from '../templates/footerMain';

const movieDetailsPage = async () => {
  // Header
  globalNodes.header.classList.add('header-container--movie-details');
  globalNodes.header.innerHTML = await headerMovieDetail();
  // Info movie details
  const detailInfoContainer = document.querySelector('.movie-detail-main-info');
  detailInfoContainer.innerHTML = movieDetailInfo();

  globalNodes.mainContent.innerHTML = await mainContentDetailMovie();

  // ['#search=', 'idMovie']
  const [_, urlInfoMovie] = location.hash.split('=');
  const [movieId, movieName] = urlInfoMovie.split('-');
  // nodes.headerCategoryTitle.textContent = `Resultados para: ${decodeURI(query)}`;
  // decodificar nombres con espacios
  await getMovieById(movieId);

  globalNodes.footer.innerHTML = await footerMain();
};

export default movieDetailsPage;
