import gobalNodes from '../utils/globalsNodes';
import headerMovieDetail from '../templates/headerMovieDetail';
import mainContentDetailMovie from '../templates/mainContentDetailMovie';
import getMovieById from '../data/getMovieById';
import footerMain from '../templates/footerMain';

const movieDetailsPage = async () => {
    // Header
    gobalNodes.header.classList.add('header-container--movie-details');
    gobalNodes.header.innerHTML = await headerMovieDetail();

    gobalNodes.mainContent.innerHTML = await mainContentDetailMovie();

    //['#search=', 'idMovie']
    const [_, urlInfoMovie] = location.hash.split('=');
    const [movieId, movieName] = urlInfoMovie.split('-');
    // nodes.headerCategoryTitle.textContent = `Resultados para: ${decodeURI(query)}`;// decodificar nombres con espacios
    await getMovieById(movieId);


    gobalNodes.footer.innerHTML = await footerMain();

};

export default movieDetailsPage;