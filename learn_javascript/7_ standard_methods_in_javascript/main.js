/* let summ = Math.pow(2,10)
console.log(summ); */

/* let summ = Math.sqrt(5)
console.log(summ); */

/* let arr = [4, 2, 5, 19, 13, 0, 10];
let summ = 0;
let kor = 0;
for (let elem = 0; elem < arr.length; elem++) {
  let kub = Math.pow(arr[elem], 3);
  summ += kub;
  kor = Math.sqrt(summ);
}
console.log(summ);
console.log(kor); */

/* let num = 379;
let krug = Math.sqrt(num);
let a = krug.toFixed(0);
console.log(a);
let b = krug.toFixed(2);
console.log(b);
let c = krug.toFixed(3);
console.log(c);
console.log(krug); */

/* let num = 587;
let krug = Math.sqrt(num);
console.log(krug);

let floor = Math.floor(krug);
console.log(floor);

let ceil = Math.ceil(krug);
console.log(ceil); */

/* let obj = {
  ceil: ceil,
  floor: floor,
}; */

/* let obj = {};
obj.ceil = ceil;
obj.floor = floor;
console.log(obj); */

//Нахождение максимального и минимального числа

/* let a = Math.max(4, -2, 5, 19, -130, 0, 10)
console.log(a);
let b = Math.min(4, -2, 5, 19, -130, 0, 10)
console.log(b); */


//Работа с рандомом


/* function getRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [];
for (let elem = 1 - 1; elem < 10; elem++) {
  arr[elem] = getRand(1, 100);
}
console.log(arr); */



//Работа с регистром символов

/* let str = 'js';
str = str.toUpperCase()
console.log(str); */

/* let str = 'я учу javascript!'
str = str.substring(0,5)
console.log(str); */

//Работа с indexOf

/* let str = 'abcde';
console.log(str.indexOf('c',0));
console.log(str.lastIndexOf('a'));
console.log(str.indexOf('a',4));
console.log(str.indexOf('http://',0)); */

//Работа с startsWith, endsWith

/* let str = 'http://';
console.log(str.startsWith('http://'));
let str2 = '.html';
console.log(str2.endsWith('.html')); */

//Работа с split

/* let str = '12345';
let arr = str.split('')

console.log(arr); */

/* let arr = [1, 2, 3, 4, 5];

let arr2 = arr.join("-");
console.log(arr2); */

/* let str = '2022-12-31';
let result = str.split('-').reverse().join('-');
console.log(result + ' ' +  'рік'); */

//Методы для массивов в JavaScript Работа с push, unshift

/* let arr = [1,2,3];
arr.push(4,5,6);
console.log(arr); */


let arr = [1,2,3];
arr.unshift(4,5,6)
console.log(arr);
