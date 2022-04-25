const buttons = document.querySelectorAll(".nav-toggle");

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    document.querySelector(".shadow").classList.toggle("shadow--open");
    document.querySelector(".nav").classList.toggle("nav--open");
  });
}

const catalogs = document.querySelectorAll(".btn-catalog");

for (const catalog of catalogs) {
  catalog.addEventListener("click", function (event) {
    document.querySelector(".product-catalog").classList.toggle("product-catalog--open");
    document.querySelector(".shadow").classList.toggle("shadow--open");
 
  });
}

let closeBtn = document.querySelector(".closed-catalog");

closeBtn.addEventListener('click', () =>{
  document.querySelector(".product-catalog--open").classList.toggle("product-catalog");
  document.querySelector(".shadow--open").classList.toggle("shadow");

  console.log('sdf');
})



