let colorG = document.querySelector(".color");
/* let container = document.querySelector('.container') */
let clickMe = document.querySelector(".change-color");

let = generateColor;
function generateColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

 function generateWidth () {
     let randomWith = Math.floor(Math.random() * 300);
     return randomWith
 };


clickMe.addEventListener("click", function () {
  colorG.innerHTML = generateColor();
  document.body.style.backgroundColor = generateColor();
/*   document.body.style.width = generateWidth() + 'px'; */

});



/* function getSumm (a,b) {
  const summ = a + b;
  console.log(summ);
  return summ;
}

function getFinalSumm (a,b) {
  const finalSumm = a + b;
  console.log(finalSumm);
  
}

getFinalSumm(getSumm(5,5), 10); */