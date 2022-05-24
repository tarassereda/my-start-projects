/* window.onload = function () {
  document.querySelector(".top").onclick = function () {
      console.log(window.pageYOffset);
    window.scrollTo(0, 0);
  };
}; */

window.onload = function () {
  let scrolled;
  let timer;

  document.querySelector(".top").onclick = function () {
    scrolled = window.pageYOffset;
    //window.scrollTo(0, 0);
    scrollToTop();
  };
  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 100; // 100 - швидкість прокрутки
      timer - setTimeout(scrollToTop, 30); // 30 - інтенсивність прокуртки
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }
};
