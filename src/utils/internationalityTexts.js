const internationalityTexts = () => {
  // Title Texts
  const titleTexts = {
    altLogo: '',
    titleHome: '',
    titleTrends: '',
    titleFavorites: '',
    titleCategories: '',
    titleFooter: '',
    subtitleFooter: '',
    titleSearch: '',
    titleRecommendations: '',
    titleModalTrailer: '',
  };

  // Description Texts
  const descriptionTexts = {
    descriptionHome: '',
    descriptionCategory: '',
    descriptionFavorites: '',
    descriptionTrends: '',
  };

  // Input texts
  const inputTexts = {
    placeholderInputSearch: '',
  };

  // Button texts
  const buttonTexts = {
    searchBtn: '',
    seeMoreBtn: '',
    backArrow: '',
    closeBtn: '',
    playTrailerBtn: '',
    addToFavoritesBtn: '',
    removeFromFavoritesBtn: '',
  };

  if (navigator.language === 'es' || navigator.language === 'es-ES') {
    titleTexts.altLogo = 'Logotipo Sebastian Pedroza';
    titleTexts.titleHome = '¡Bienvenidos!';
    titleTexts.titleTrends = 'Tendencias';
    titleTexts.titleFavorites = 'Favoritas';
    titleTexts.titleCategories = 'Categorías';
    titleTexts.titleFooter = 'Hecho con el 💙 por Sebastian Pedroza.';
    titleTexts.subtitleFooter = 'Todos los derechos reservados - © 2022.';
    titleTexts.titleSearch = (searchvalue) =>
      `Resultados para: "${searchvalue}"`;
    titleTexts.titleRecommendations = 'Recomendaciones';
    titleTexts.titleModalTrailer = 'Tráiler';

    descriptionTexts.descriptionHome =
      'Millones de películas y programas de televisión por descubrir. Explora ahora!.';
    descriptionTexts.descriptionCategory = (nameCategory) =>
      `¡Lo mejor en ${nameCategory} solo lo puedes encontrar aquí!`;
    descriptionTexts.descriptionFavorites =
      'Esta es tu lista de las peliculas favoritas';
    descriptionTexts.descriptionTrends = 'Últimas películas en tendencia';

    inputTexts.placeholderInputSearch = 'Buscar...';

    buttonTexts.searchBtn = 'Buscar';
    buttonTexts.seeMoreBtn = 'Ver más';
    buttonTexts.backArrow = 'Haga clic para volver';
    buttonTexts.closeBtn = 'Cerrar';
    buttonTexts.playTrailerBtn = 'Reproducir tráiler';
    buttonTexts.addToFavoritesBtn = 'Agregar a favoritos';
    buttonTexts.removeFromFavoritesBtn = 'Quitar de favoritos';
  } else {
    titleTexts.altLogo = 'Sebastian Pedroza Logo';
    titleTexts.titleHome = 'Welcome!';
    titleTexts.titleTrends = 'Trends';
    titleTexts.titleFavorites = 'Favorites';
    titleTexts.titleCategories = 'Categories';
    titleTexts.titleFooter = 'Made with the 💙 by Sebastian Pedroza.';
    titleTexts.subtitleFooter = 'All rights reserved - © 2022.';
    titleTexts.titleSearch = (searchvalue) => `Results for: "${searchvalue}"`;
    titleTexts.titleRecommendations = 'Recommendations';
    titleTexts.titleModalTrailer = 'Trailer';

    descriptionTexts.descriptionHome =
      'Millions of movies and TV shows to discover. Explore now.';
    descriptionTexts.descriptionCategory = (nameCategory) =>
      `The best in ${nameCategory} can only be found here!`;
    descriptionTexts.descriptionFavorites =
      'This is your list of favorite movies';
    descriptionTexts.descriptionTrends = 'Latest trending movies';

    inputTexts.placeholderInputSearch = 'Search...';

    buttonTexts.searchBtn = 'Search';
    buttonTexts.seeMoreBtn = 'See more';
    buttonTexts.backArrow = 'Click to go  back';
    buttonTexts.closeBtn = 'Close';
    buttonTexts.playTrailerBtn = 'Play trailer';
    buttonTexts.addToFavoritesBtn = 'Add to favorites';
    buttonTexts.removeFromFavoritesBtn = 'Remove from favorites';
  }

  return { titleTexts, descriptionTexts, inputTexts, buttonTexts };
};

export default internationalityTexts;
