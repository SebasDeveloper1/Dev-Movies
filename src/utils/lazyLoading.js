const lazyLoading = () => {
  const target = document.querySelectorAll('.movie-img');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('src', entry.target.dataset.img);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '10px',
      threshold: 0.1,
    }
  );
  target.forEach((item) => {
    observer.observe(item);
  });
};

export default lazyLoading;
