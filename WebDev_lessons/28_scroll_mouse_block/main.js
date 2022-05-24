document.onwheel = function (event) {
  console.log(event);
  if (event.deltaY > 0) {
    document.querySelector(".line").innerHTML = " в низ";
  } else {
    document.querySelector(".line").innerHTML = " до верху";
  }
  let speed = event.deltaY;
  speed = Math.abs(speed);
  if (speed < 100) {
    document.querySelector(".speed").innerHTML = " низька";
  } else if (speed < 150) {
    document.querySelector(".speed").innerHTML = " середня";
  } else if (speed < 250) {
    document.querySelector(".speed").innerHTML = " висока";
  } else {
    document.querySelector(".speed").innerHTML = " дуже висока";
  }
};

let left = 290;
document.querySelector(".test").onwheel = function (event) {
  let line = event.deltaY;
  left = left + 0.1 * line;
  document.querySelector(".test2").style.left = left + "px";
  return false;
};
