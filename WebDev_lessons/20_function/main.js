function one(params) {
  /*   alert("Hello"); */
  return 10;
}
one();
console.log(2 + one());

function summ(a, b) {
    a = a || 10
    b = b || 20
    console.log(a+b);
/*   return a + b; */
}

/* document.getElementById('b1').onclick = summ; */
document.getElementById('b1').onclick = function (params) {
    summ(10,10)
};
