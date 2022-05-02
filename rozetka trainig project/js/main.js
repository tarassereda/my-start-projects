const buttons = document.querySelectorAll(".nav-toggle");
const btnCatalog = document.querySelector(".btn-catalog");
const btnCatalogClose = document.querySelector(".closed-catalog");

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    document.querySelector(".shadow").classList.toggle("shadow--open");
    document.querySelector(".nav").classList.toggle("nav--open");
  });
}
btnCatalog.addEventListener("click", () => {
  document.querySelector(".shadow").classList.add("shadow--open");
  document
    .querySelector(".product-catalog")
    .classList.add("product-catalog--open");
});
btnCatalogClose.addEventListener("click", () => {
  document.querySelector(".shadow").classList.remove("shadow--open");
  document
    .querySelector(".product-catalog")
    .classList.remove("product-catalog--open");
});

document.querySelector(".shadow").addEventListener("click", () => {
  document.querySelector(".shadow").classList.remove("shadow--open");
  document
    .querySelector(".product-catalog")
    .classList.remove("product-catalog--open");
  document.querySelector(".nav").classList.remove("nav--open");
});

let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides((slideIndex -= 1));
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides((slideIndex = n));
}

/* Основная функция слайдера */
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
let timer = setInterval(function () {
  slideIndex++;
  showSlides(slideIndex);
}, 3000);






const btns = document.querySelectorAll(".btn__title");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    btn.classList.toggle("btn__title_active");
  });
});






const products = [
  {
    id: 0 ,
    name: 'пшенична мука',
    img: './',
    oldPrice: 1,
    curentPrice: 12,
    description: ' my tovar info'
  },
  {
    id: 0 ,
    name: 'пшенична мука',
    img: './',
    oldPrice: 1,
    curentPrice: 12,
    description: ' my tovar info'
  },
  {
    id: 0 ,
    name: 'пшенична мука',
    img: './',
    oldPrice: 1,
    curentPrice: 12,
    description: ' my tovar info'
  },
  {
    id: 0 ,
    name: 'пшенична мука',
    img: './',
    oldPrice: 1,
    curentPrice: 12,
    description: ' my tovar info'
  },
  {
    id: 0 ,
    name: 'пшенична мука',
    img: './',
    oldPrice: 1,
    curentPrice: 12,
    description: ' my tovar info'
  },
]






