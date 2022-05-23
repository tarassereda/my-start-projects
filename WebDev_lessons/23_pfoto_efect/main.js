document.querySelector(".my_slide").onmousemove = function (event) {
  let x = event.offsetX;
  document.querySelector(".two").style.width = x + "px";
};

document.querySelector(".my_slide").onmouseleave = function (event) {
    document.querySelector(".two").style.width = '1080px'
    
}