const goods = {
  1: {
    name: "Orange",
    cost: 10,
    img: "https://cdn4.iconfinder.com/data/icons/fruits-79/48/08-orange-512.png",
    sklad: "yes",
  },
  2: {
    name: "Banana",
    cost: 15,
    img: "https://cdn4.iconfinder.com/data/icons/fruits-79/48/15-banana-512.png",
    sklad: "yes",
  },
};

console.log(goods);
let out = "";
for (let key in goods) {
  out += "Name: " + goods[key].name + "<br>";
  out += "Cost: " + goods[key].cost + "<br>";
  out += "Availability: " + goods[key].sklad + "<br>";
  out += '<img src ="' + goods[key].img + '">';
  out += "<hr>";
}
document.getElementById("out").innerHTML = out;
