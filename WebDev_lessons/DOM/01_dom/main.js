let p = document.createElement('p');
document.body.insertBefore(p, document.querySelector('.out'))
p.innerHTML = 'hello'
p.classList.add('main', 'green');
// один з варіантів виводу дом елемента на сторінку
//document.body.appendChild(p)
console.log(p);