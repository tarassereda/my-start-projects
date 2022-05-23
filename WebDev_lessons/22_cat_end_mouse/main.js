document.onmousemove = function (params) {
  document
    .getElementsByTagName("body")[0]
    .insertAdjacentHTML(
      "beforeend",
      '<img src="./cat_icon.svg" class="cat" alt="">'
    );
  let cat = document.querySelector(".cat");
  cat.style.position = "fixed";

  document.onmousemove = function (event) {
    cat.style.left = event.clientX + 20 + "px";
    cat.style.top = event.clientY + 20 + "px";
  };
};
