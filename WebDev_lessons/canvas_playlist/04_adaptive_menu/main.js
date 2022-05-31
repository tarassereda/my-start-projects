window.onload = function (params) {
  document.querySelector(".menu").onmouseover = showMenu;
  document.querySelector(".menu").onmouseout = ofMenu;

  document.onkeydown = function (event) {
    console.log(event);
    if (event.code === "KeyM") showMenu();
    if (event.code === "Escape") ofMenu();
  };

  function showMenu(params) {
    document.querySelector(".menu").style.left = 0;
    console.log("ok");
  }

  function ofMenu(params) {
    document.querySelector(".menu").style.left = "-280px";
    console.log("ok");
  }
};
