let colorG = document.querySelector(".color");
let container = document.querySelector('.container')
let clickMe = document.querySelector(".change-color");


let = generateColor;
function generateColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
generateColor();



clickMe.addEventListener("click", function () {
  colorG.innerHTML = "Background Color: " + generateColor();
  document.body.style.backgroundColor = generateColor()
/*   clickMe.style.backgroundColor = generateColor(); */
  console.log(generateColor());
});
