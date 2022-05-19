import headerDetailMovie from '../templates/headerDetailMovie';
import mainContentDetailMovie from '../templates/mainContentDetailMovie';
import getMovieById from '../data/getMovieById';
import footerMain from '../templates/footerMain';

const movieDetailsPage = async () => {
    // Header
    const header = null || document.getElementById('header');
    header.classList.add('header-container--long');
    // nodes.headerSection.style.background = '';
    header.innerHTML = await headerDetailMovie();

    const mainContent = null || document.getElementById('mainContent');
    mainContent.innerHTML = await mainContentDetailMovie();

    //['#search=', 'idMovie']
    const [_, urlInfoMovie] = location.hash.split('=');
    const [movieId, movieName] = urlInfoMovie.split('-');
    // nodes.headerCategoryTitle.textContent = `Resultados para: ${decodeURI(query)}`;// decodificar nombres con espacios
    await getMovieById(movieId);


    const footer = null || document.getElementById('footer');
    footer.innerHTML = await footerMain();

};

export default movieDetailsPage;