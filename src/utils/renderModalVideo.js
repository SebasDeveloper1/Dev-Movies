import axiosBaseApi from '../data/confAxiosBase';
import globalNodes from './globalsNodes';
import modalVideo from '../templates/modalVideo';

const { API_MOVIE_DETAIL } = process.env;
const { API_MOVIE_VIDEO } = process.env;

const renderModalVideo = async (idMovie) => {
  const { data: videos } = await axiosBaseApi.get(
    `${API_MOVIE_DETAIL}${idMovie}${API_MOVIE_VIDEO}`
  );

  const watchTrailerBtn = document.querySelector('.movie-detail__Trailer-btn');
  watchTrailerBtn.addEventListener('click', () => {
    globalNodes.modal.innerHTML = modalVideo(videos.results[0].key);

    const modalCloseBtn = document.querySelector('#modalCloseBtn');
    modalCloseBtn.addEventListener('click', () => {
      globalNodes.modal.innerHTML = '';
    });
  });
};

export default renderModalVideo;
