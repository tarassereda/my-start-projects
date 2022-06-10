const openMenu = document.querySelector('.burger');
const closedBtnNav = document.querySelector('.closed_btn');

openMenu.addEventListener('click', function (params) {
    document.querySelector('.sidebar').classList.toggle('sidebar_open')
    console.log('Вийшло)))');
})

closedBtnNav.addEventListener('click', function (params) {
    document.querySelector('.sidebar_open').classList.remove('sidebar_open')
    console.log('Вийшло))');
})
