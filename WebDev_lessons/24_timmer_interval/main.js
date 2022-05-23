let sdvig = 0;
let test = document.querySelector(".test");

function move() {
  test.style.marginLeft = sdvig + "px";
  sdvig = sdvig + 1;
/*   setTimeout(move,50) */
}

let timer = setInterval(move, 60);

const stop = document.querySelector(".stop");
stop.onclick = function (params) {
  clearInterval(timer);
};

