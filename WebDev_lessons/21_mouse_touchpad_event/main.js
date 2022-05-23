const block1 = document.getElementById('one');
block1.onclick = function (params) {
    block1.style.background = 'green'
    console.log(block1);
}

// одинарний клік на мишку
/* const block2 = document.querySelector('.two');
block2.addEventListener('click', function () {
    block2.style.background = 'red'
    console.log(block2);
}) */

// подвійний клік на мишку
/* const block2 = document.querySelector(".two");
block2.addEventListener("dblclick", function () {
  block2.style.background = "red";
  console.log(block2);
}); */

// клік правой кнопкой мишки
/* const block2 = document.querySelector(".two");
block2.addEventListener("contextmenu", function () {
  block2.style.background = "red";
  console.log(block2);
}); */





/* // мишка входить в елемент (наведення мишки)
 const block2 = document.querySelector(".two");
 block2.addEventListener("mouseenter", function () {
  block2.style.background = "red";
  console.log(block2);
}); 

// мишка виходить з елемента (наведення мишки)
const block3 = document.querySelector(".two");
block3.addEventListener("mouseleave", function () {
  block3.style.background = "orange";
  console.log(block3);
}); */


// рух мишкою в середині блока (збільшуєтся масштаб блока)
let a = 0;
const block3 = document.querySelector(".two");
block3.addEventListener("mousemove", function () {
    a++
  block3.style.width = 100 + a +'px'
  block3.style.background = 'gold'
  console.log(block3);
});  
