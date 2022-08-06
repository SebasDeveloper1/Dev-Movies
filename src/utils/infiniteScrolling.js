const infiniteScrolling = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  let scrollValue;
  if (window.screen.width <= 768) {
    scrollValue = scrollTop + clientHeight >= scrollHeight - 100;
  } else {
    scrollValue = scrollTop + clientHeight >= scrollHeight - 15;
  }
  return scrollValue;
};

export default infiniteScrolling;
