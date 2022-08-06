import navigator from './routes/navigator';
import './styles/app.css';
import './fontawesome/css/all.min.css';

if (!localStorage.getItem('LIKED_MOVIES')) {
  localStorage.setItem('LIKED_MOVIES', '[]');
}

window.addEventListener(
  'load',
  () => {
    navigator();
    window.history.pushState({ loadUrl: window.location.href }, null, '');
  },
  false
);

window.addEventListener('hashchange', navigator, false);
