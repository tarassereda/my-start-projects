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
  }
];

const template = document.querySelector('.goods_catalog');
const containerGodds = document.querySelector('.goods_catalog_item');
const goods = document.querySelector('.goods');

template.remove()

getData().forEach(item => {
  const createElem = document.importNode(containerGodds, true);
  createElem.querySelector('.picture').src = item.img;
  createElem.querySelector('.goods_title').textContent = item.name;
  createElem.querySelector('.old_price').textContent = item.oldPrice;
  createElem.querySelector('.new_price').textContent = item.curentPrice;
  console.log(createElem);
  goods.appendChild(createElem)

  
});



function getData () {
  return products
}