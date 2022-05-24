let block = document.querySelector(".test");
let topTest = 0;
let left = 0;

document.onkeydown = function (event) {
  console.log(event);
  if (event.key == "ArrowRight") {
    block.style.left = left + "px";
    left++;
  }
  if (event.key == "ArrowDown") {
    block.style.top = topTest + "px";
    topTest++;
  }
};
