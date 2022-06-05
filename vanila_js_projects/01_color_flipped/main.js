function generateColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

const btn = document.querySelector(".btn");
const colorInfo = document.querySelector(".color_info");

btn.addEventListener("click", function (params) {
  let bgColorBody = (document.body.style.background = generateColor());
  colorInfo.style.color = "rgb(55, 121, 208)";
  colorInfo.innerHTML = generateColor();

  console.log(generateColor());
});
