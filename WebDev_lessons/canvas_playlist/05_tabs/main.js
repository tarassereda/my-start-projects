window.onload = function (params) {
  document.querySelector(".tabs_header").addEventListener("click", fTabs);
  function fTabs(event) {
    //console.log(event);

    if (event.target.className == "tab_h") {
      //console.log(event.target.getAttribute("data-tab"));

      // dataTab - номер вкладку яку нада відобразити
      let dataTab = event.target.getAttribute("data-tab");
      let tabH = document.getElementsByClassName("tab_h");
      // відключаю клас active
      for (let i = 0; i < tabH.length; i++) {
        tabH[i].classList.remove("active");
      }
      event.target.classList.add("active");
      // все вкладки з содержимим
      let tabB = document.getElementsByClassName("tab_b");
      for (let i = 0; i < tabB.length; i++) {
        if (dataTab == i) {
          tabB[i].style.display = "block";
        } else {
          tabB[i].style.display = "none";
        }
      }
    }
  }
};
