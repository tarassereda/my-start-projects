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




const products = [
  {
    id: 0,
    name: "Ноутбук HP Pavilion Gaming 15-ec2013ua",
    image: "./img/new-goods/tov-1.jpeg",
    oldPrice: 28999,
    curentPrice: 25999,
    description: "Ігровий ноутбук",
  },
  {
    id: 1,
    name: "Ноутбук Acer Aspire 7 A715-42g-ROVS",
    image: "./img/new-goods/tov-2.jpeg",
    oldPrice: 27999,
    curentPrice: 25999,
    description: "Робочий ноутбук",
  },
  {
    id: 2,
    name: "Ноутбук ASUS TUF Gaming F15 FX506LH-HN042 ",
    image: "./img/new-goods/tov-3.jpeg",
    oldPrice: 35999,
    curentPrice: 33999,
    description: "Ігровий ноутбук",
  },
  {
    id: 3,
    name: 'Ноутбук ASUS ExpertBook BA1500CDA-BQ0485 15.6" IPS',
    image: "./img/new-goods/tov-4.jpeg",
    oldPrice: 17999,
    curentPrice: 17499,
    description: "Робочий ноутбук",
  },
  {
    id: 4,
    name: "Ноутбук ASUS TUF Gaming F15 FX506HM-HN232",
    image: "./img/new-goods/tov-5.jpeg",
    oldPrice: 46999,
    curentPrice: 44999,
    description: "Ігровий ноутбук",
  },
  {
    id: 5,
    name: "Ноутбук Acer Aspire 7 A715-42G-R0VS (NH.QBFEU.00A)",
    image: "./img/new-goods/tov-6.jpeg",
    oldPrice: 27999,
    curentPrice: 25999,
    description: "Робочий ноутбук",
  },
  {
    id: 6,
    name: "Ноутбук Pixus Rise Grey",
    image: "./img/new-goods/tov-7.jpeg",
    oldPrice: 7999,
    curentPrice: 7499,
    description: "Робочий ноутбук",
  },
  {
    id: 7,
    name: "Ноутбук Acer Swift 1 SF114-34-P1A1 (NX.A77EU.00V)",
    image: "./img/new-goods/tov-8.jpeg",
    oldPrice: 15999,
    curentPrice: 14999,
    description: "Робочий ноутбук",
  },
];

const template = document.querySelector(".goods");
const productTemplate = document.querySelector(".goods_inner");
const productContainer = document.querySelector(".goods_card");

template.remove();

getData().forEach((item) => {
  const productElem = document.importNode(productTemplate, true);
  productElem.querySelector(".goods_img_picture").src = item.image;
  productElem.querySelector(".goods_title").textContent = item.name;
  productElem.querySelector(".googs_price_na").textContent =
    item.oldPrice + " грн.";
  productElem.querySelector(".goods_price_actual").textContent =
    item.curentPrice + " грн.";
  productElem.querySelector(".goods_discription").textContent =
    item.description;
  productContainer.appendChild(productElem);
});

function getData() {
  return products;
}



const btns = document.querySelectorAll(".goods_btn");
console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    btn.classList.toggle("goods_btn_active");
    console.log(btn);
  });
});




const productsCatalog = [
  {
    id: 0,
    name: "Пральний порошок Persil автомат Колор 13.5 кг (9000101428797)",
    image: "./img/catalog_goods_img/tov_1_prs.jpeg",
    oldPrice: 1149,
    curentPrice: 649,
    description: "Пральний порошок",
  },
  {
    id: 1,
    name: "Пральний порошок Persil автомат Колор 8.1 кг (9000101428230)",
    image: "./img/catalog_goods_img/tov_2_pers.jpeg",
    oldPrice: 869,
    curentPrice: 449,
    description: "Пральний порошок",
  },
  {
    id: 2,
    name: "Мобільний телефон Samsung Galaxy M52 5G 6/128 GB Black (SM-M526BZKHSEK)",
    image: "./img/catalog_goods_img/tov_3_smart_s.jpeg",
    oldPrice: 13999,
    curentPrice: 12999,
    description: "Смартфон",
  },
  {
    id: 3,
    name: "Мобільний телефон Samsung Galaxy M52 5G 6/128 GB Light Blue (SM-M526BLBHSEK)",
    image: "./img/catalog_goods_img/tov_4_smatr_s_2.jpeg",
    oldPrice: 14999,
    curentPrice: 12999,
    description: "Смартфон",
  },
];

const catalogTemplate = document.querySelector(".catalog_g");
const catalogProductTemplate = document.querySelector(".catalog_g_inner");
const catalogProductContainer = document.querySelector(".catalog_g_card");

catalogTemplate.remove();

catalogGetData().forEach((items) => {
  catalogProdCreate = document.importNode(catalogProductTemplate, true);
  catalogProdCreate.querySelector(".catalog_g_img_picture").src = items.image;
  catalogProdCreate.querySelector(".catalog_g_title").textContent = items.name;
  catalogProdCreate.querySelector(".catalog_g_price_na").textContent =
    items.oldPrice;
  catalogProdCreate.querySelector(".catalog_g_price_actual").textContent =
    items.curentPrice;
  catalogProdCreate.querySelector(".catalog_g_discription").textContent =
    items.description;
  catalogProductContainer.appendChild(catalogProdCreate);
});

function catalogGetData() {
  return productsCatalog;
}



const catalogBtns = document.querySelectorAll(".catalog_g_btn");
console.log(btns);

catalogBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    btn.classList.toggle("catalog_g_btn_active");
    console.log(btn);
  });
});
