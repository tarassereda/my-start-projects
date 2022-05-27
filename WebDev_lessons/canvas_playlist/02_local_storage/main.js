window.onload = function () {
  if (localStorage.getItem("bgcolor") !== null) {
    let color = localStorage.getItem("bgcolor");
    document.getElementsByTagName("body")[0].style.background = color;
  }

  document.querySelector(".grean").onclick = function () {
    console.log("work");
    document.getElementsByTagName("body")[0].style.background = "green";
    localStorage.setItem("bgcolor", "green");
  };
  document.querySelector(".red").onclick = function () {
    console.log("work");
    document.getElementsByTagName("body")[0].style.background = "red";
    localStorage.setItem("bgcolor", "red");
  };
};
