
// document.getElementById('test').onclick = function() {
//     document.getElementById('test').classList.add('main--main-bg');
// }

// document.querySelector('.nav-toggle').onclick = function() {
//     document.querySelector('.shadow').classList.toggle('shadow--open');
//         document.querySelector('.nav').classList.toggle('nav--open');

//     }


const buttons = document.querySelectorAll(".nav-toggle");

for (const button of buttons) {
  button.addEventListener('click', function(event) {
    document.querySelector('.shadow').classList.toggle('shadow--open');
    document.querySelector('.nav').classList.toggle('nav--open');
  })
}


