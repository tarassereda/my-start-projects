const plus = document.querySelectorAll(".plus");

plus.forEach(function (btn) {
    btn.addEventListener('click',function (event) {
        document.querySelector(".que_vopros").classList.toggle("que_vopros_no_active");
        document
          .querySelector(".question_text")
          .classList.toggle("question_text_active");
        console.log("дія виконана");
    } )
    
})
;



/* const btns = document.querySelectorAll(".goods_btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    btn.classList.toggle("goods_btn_active");
    console.log(btn);
  });
}); */

/*   document.querySelectorAll('.plus').forEach(item => {
    item.addEventListener('click', event => {
        document
        .querySelector(".que_vopros")
        .classList.toggle("que_vopros_no_active");
      document
        .querySelector(".question_text")
        .classList.toggle("question_text_active");
      console.log("дія виконана");
    })
  }) */

/*   document
  .querySelector(".que_vopros")
  .classList.toggle("que_vopros_no_active");
document
  .querySelector(".question_text")
  .classList.toggle("question_text_active");
console.log("дія виконана"); */
