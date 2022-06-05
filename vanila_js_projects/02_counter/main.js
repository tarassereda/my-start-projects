// document.querySelector('.btn').onclick = () => {

//     document.querySelector('.btn').style.ba

//   let pass =  document.querySelector('.one').value;
//   console.log(pass);

// }

const counter = document.querySelector(".counter");
const btnPlus = document.querySelector(".counter_plus");
const btnMinus = document.querySelector(".counter_minus");
const btnClean = document.querySelector(".counter_clean");

let numCount = 0;

function render(params) {
  counter.innerHTML = numCount;
}
render();

function contPlus(params) {
  numCount += 1;
}

function cuntMinus(params) {
  numCount -= 1;
}
function countClean(params) {
  numCount = 0;
}

btnPlus.addEventListener("click", function (params) {
  contPlus();
  render();
  color()

});

btnClean.addEventListener("click", function (params) {
  countClean();
  render();
  color()
});

btnMinus.addEventListener("click", function (params) {
  cuntMinus();
  render();
  color()

});

function color(params) {
  if (numCount > 0) {
    counter.style.color = "green";
  }
  if (numCount === 0) {
    counter.style.color = "black";
  }
  if (numCount < 0) {
    counter.style.color = "red";
  }
}


