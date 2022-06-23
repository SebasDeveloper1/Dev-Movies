const modalVideo = (videoKey) => {
  const view = /* html */ `
    <div class="modal-container-main">
        <div class="modal-info-container">
            <div class="modal-header">
                <h4 class="modal-header__title">Ver trailer...</h4>
                <span class="modal-header__close-btn"><i id="modalCloseBtn" class="fa-solid fa-xmark"></i></span>
            </div>
            <iframe class="modal__video"
            src="https://www.youtube.com/embed/${videoKey}" 
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
    </div>
    `;
  return view;
};

export default modalVideo;
