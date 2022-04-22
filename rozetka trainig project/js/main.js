const buttons = document.querySelectorAll(".nav-toggle");

for (const button of buttons) {
  button.addEventListener('click', function(event) {
    document.querySelector('.shadow').classList.toggle('shadow--open');
    document.querySelector('.nav').classList.toggle('nav--open');
  })
};



