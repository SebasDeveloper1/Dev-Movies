import events from '../utils/events';
import trendsPage from '../pages/trendsPage';
import searchPage from '../pages/searchPage';
import movieDetailsPage from '../pages/movieDetailsPage';
import categoriesPage from '../pages/categoriesPage';
import favoritesPage from '../pages/favoritesPage';
import homePage from '../pages/homePage';

events();

const navigator = () => {
  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')) {
    searchPage();
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage();
  } else if (location.hash.startsWith('#category=')) {
    categoriesPage();
  } else if (location.hash.startsWith('#favorites')) {
    favoritesPage();
  } else {
    homePage();
  }

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

export default navigator;
