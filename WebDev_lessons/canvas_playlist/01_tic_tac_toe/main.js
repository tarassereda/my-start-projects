window.onload = function (params) {
  for (let i = 0; i < 9; i++) {
    document.querySelector(".game").innerHTML += '<div class="block"></div>';
  }
  let hod = 0;

  document.querySelector(".game").onclick = function (event) {
    //console.log(event.target);
    if (event.target.className == "block") {
      if (hod % 2 == 0) {
        event.target.innerHTML = "x";
      } else {
        event.target.innerHTML = "0";
      }
      hod++;
      checkWinner();
    }
  };

  function checkWinner() {
    let allBlock = document.getElementsByClassName("block");

    console.log(allBlock);

    if (
      allBlock[0].innerHTML == "x" &&
      allBlock[1].innerHTML == "x" &&
      allBlock[2].innerHTML == "x"
    ) {
      alert("Виграли Хрестики!");
    }
    if (
      allBlock[3].innerHTML == "x" &&
      allBlock[4].innerHTML == "x" &&
      allBlock[5].innerHTML == "x"
    ) {
      alert("Виграли Хрестики!");
    }
    if (
      allBlock[6].innerHTML == "x" &&
      allBlock[7].innerHTML == "x" &&
      allBlock[8].innerHTML == "x"
    ) {
      alert("Виграли Хрестики!");
    }
    if (
      allBlock[0].innerHTML == "x" &&
      allBlock[3].innerHTML == "x" &&
      allBlock[6].innerHTML == "x"
    ) {
      alert("Виграли Хрестики!");
    }
    if (
      allBlock[1].innerHTML == "x" &&
      allBlock[4].innerHTML == "x" &&
      allBlock[7].innerHTML == "x"
    ) {
      alert("Виграли Хрестики!");
    }
    if (
      allBlock[2].innerHTML == "x" &&
      allBlock[5].innerHTML == "x" &&
      allBlock[8].innerHTML == "x"
    ) {
      alert("Виграли Хрестики!");
    }
    if (
      allBlock[0].innerHTML == "x" &&
      allBlock[4].innerHTML == "x" &&
      allBlock[8].innerHTML == "x"
    ) {
      alert("Виграли Хрестики!");
    }
    if (
      allBlock[2].innerHTML == "x" &&
      allBlock[4].innerHTML == "x" &&
      allBlock[6].innerHTML == "x"
    ) {
      alert("Виграли Хрестики!");
    }

    //нолики

    if (
      allBlock[0].innerHTML == "0" &&
      allBlock[1].innerHTML == "0" &&
      allBlock[2].innerHTML == "0"
    ) {
      alert("Виграли Нолікі!");
    }
    if (
      allBlock[3].innerHTML == "0" &&
      allBlock[4].innerHTML == "0" &&
      allBlock[5].innerHTML == "0"
    ) {
      alert("Виграли Нолікі!");
    }
    if (
      allBlock[6].innerHTML == "0" &&
      allBlock[7].innerHTML == "0" &&
      allBlock[8].innerHTML == "0"
    ) {
      alert("Виграли Нолікі!");
    }
    if (
      allBlock[0].innerHTML == "0" &&
      allBlock[3].innerHTML == "0" &&
      allBlock[6].innerHTML == "0"
    ) {
      alert("Виграли Нолікі!");
    }
    if (
      allBlock[1].innerHTML == "0" &&
      allBlock[4].innerHTML == "0" &&
      allBlock[7].innerHTML == "0"
    ) {
      alert("Виграли Нолікі!");
    }
    if (
      allBlock[2].innerHTML == "0" &&
      allBlock[5].innerHTML == "0" &&
      allBlock[8].innerHTML == "0"
    ) {
      alert("Виграли Нолікі!");
    }
    if (
      allBlock[0].innerHTML == "0" &&
      allBlock[4].innerHTML == "0" &&
      allBlock[8].innerHTML == "0"
    ) {
      alert("Виграли Нолікі!");
    }
    if (
      allBlock[2].innerHTML == "0" &&
      allBlock[4].innerHTML == "0" &&
      allBlock[6].innerHTML == "0"
    ) {
      alert("Виграли Нолікі!");
    }
  }
};
