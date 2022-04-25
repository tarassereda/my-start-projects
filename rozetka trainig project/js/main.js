const buttons = document.querySelectorAll(".nav-toggle");
const btnCatalog = document.querySelector('.btn-catalog');
const btnCatalogClose = document.querySelector('.closed-catalog');

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    document.querySelector(".shadow").classList.toggle("shadow--open");
    document.querySelector(".nav").classList.toggle("nav--open");
  });
}
btnCatalog.addEventListener('click', () => {
  document.querySelector(".shadow").classList.add("shadow--open");
  document.querySelector('.product-catalog').classList.add('product-catalog--open');
});
btnCatalogClose.addEventListener('click', ()=>{
  document.querySelector(".shadow").classList.remove("shadow--open");
  document.querySelector('.product-catalog').classList.remove('product-catalog--open');
  
});

document.querySelector(".shadow").addEventListener('click', ()=>{
  document.querySelector(".shadow").classList.remove("shadow--open");
  document.querySelector('.product-catalog').classList.remove('product-catalog--open');
  document.querySelector(".nav").classList.remove("nav--open");
});





