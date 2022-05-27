let number = Math.floor(10 * Math.random()) + 1;
console.log(number);

let count = 2;
//кількість спроб

document.querySelector(".check").onclick = function () {
  if (count >= 0) {
    let userNum = document.querySelector(".mynum").value;
    userNum = parseInt(userNum);
    let out = document.querySelector(".out");

    if (userNum === number) {
      out.innerHTML = "Ура, ви вгадали!";

      function timeOute() {
        let reLoad = location.reload();
        return reLoad;
      }
      setTimeout(timeOute, 1000);
    } else if (userNum > number) {
      out.innerHTML = "Переліт, ви ввели число більше ніж треба!";
    } else if (userNum < number) {
      out.innerHTML = "Недоліт, ви ввели число менше ніж треба!";
    }
    document.querySelector(".count").innerHTML = "Спроб: " + count;
    count = count - 1;
  } else {
    alert("Проби закінчені, ви програли, сторінка буде перезавандажена!");
    location.reload();
  }

};
