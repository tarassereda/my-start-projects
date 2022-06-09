const products = [
  {
    id: 0,
    name: "Ноутбук HP Pavilion Gaming 15-ec2013ua",
    img: "./img/tov-1.jpg",
    oldPrice: 28999,
    curentPrice: 25999,
    description: "Ігровий ноутбук",
  },
  {
    id: 1,
    name: "Ноутбук Gaming 15-ec2013ua",
    img: "./img/tov-2.jpg",
    oldPrice: 22999,
    curentPrice: 21999,
    description: "Ігровий ноутбук",
  },
];

const template = document.querySelector(".goods_catalog");
const containerGodds = document.querySelector(".goods_catalog_item");
const goods = document.querySelector(".goods");

template.remove();

getData().forEach((item) => {
  const createElem = document.importNode(containerGodds, true);
  createElem.querySelector(".picture").src = item.img;
  createElem.querySelector(".goods_title").textContent = item.name;
  createElem.querySelector(".old_price").textContent = item.oldPrice;
  createElem.querySelector(".new_price").textContent = item.curentPrice;

  goods.appendChild(createElem);
});

function getData() {
  return products;
}



const arr = ["hello", 4188, "Test", 99, "BMW"];

function musOut() {
  let p = document.getElementById("out");
  let str = "";
  for (let i = 1; i < arr.length; i++) {
    str += i + " - " + arr[i] + "<br>";
  }
  p.innerHTML = str;
}
musOut();

function btn1() {
  let inp = document.getElementById("inp1").value;
  arr.push(inp);
  musOut();
  document.getElementById("inp1").value = '';
}

function btn2() {
  let inp = document.getElementById("inp1").value;
  arr.pop(inp);
  musOut();
}














let leftSize = 0;
/* autoSlider() */
let timer;

function autoSlider(params) {
  timer = setTimeout(sliderLeft, 1000);
}



function sliderLeft() {
  let poloska = document.querySelector(".polosa");

  leftSize = leftSize - 300;

  if (leftSize < -1200) {
    leftSize = 0;
/*     clearTimeout(timer) */
  }

  poloska.style.left = leftSize + "px";
  console.log(poloska);
/*   autoSlider() */
}

/* let rghtSize = 0;

function slideeRight() {
  let poloskaRight = document.querySelector(".polosa");

  rghtSize = rghtSize + 300;

  if (rghtSize > 1200) {
    rghtSize = 0;
  }

  poloskaRight.style.right = rghtSize + "px";
  console.log(poloskaRight);
} */








