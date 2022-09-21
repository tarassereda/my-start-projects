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


/* let arr = [1,2,3];
arr.unshift(4,5,6)
console.log(arr); */


/* let arr = [1, 2, 3, 4, 5];
let sum = arr.slice(0,3)
console.log(sum); */

/* let arr = [1, 2, 3, 4, 5];
let sum = arr.slice(3,5)
console.log(sum); */


/* let arr = [1, 2, 3, 4, 5];
let summ = arr.indexOf(3)
console.log(summ); */


/* let arr = [1, 2, 3, 4, 5];
let summ = arr.includes(3)
console.log(summ); */

//Практика на использования изученных методов Регистр символов

/* let str = "london";
let str2 = str.substring(0, str.length - 1);
let result = str.slice(5, 6).toUpperCase();
str2 += result;
console.log(str2);

console.log(result); */

/* let str = "london";
let str2 = str.charAt(0).toUpperCase() + str.charAt(1).toUpperCase() 
let str3 = str.slice(2,6)
let result = str2 + str3
console.log(str2);
console.log(str3);
console.log(result); */

/* let str = "London";
let str2 = str.slice(0,1).toLowerCase() + str.slice(1)
console.log(str2); */

/* let str = "word1 word2 word3";
let word = str.split(" ");
console.log(word);
for (let elem = 0; elem < word.length; elem++) {
  word[elem] = word[elem].slice(0, 1).toUpperCase() + word[elem].slice(1);
  console.log(word[elem]);
}
let res = word.join(" ");
console.log(res); */

/* let str = "var_test_text";
let slova = str.split("_");
for (let i = 0; i < slova.length; i++) {
  slova[i] = slova[i].slice(0, 1).toUpperCase() + slova[i].slice(1);
  console.log(slova[i]);
}
let result = slova.join("");
console.log(result); */

/* let str = "var_test_text";
let slova = str.split("_");
for (let i = 0; i < slova.length; i++) {
  slova[i] = slova[i].slice(0, 1).toUpperCase() + slova[i].slice(1);
}
let result = slova.join("");
let str3 = result.slice(0,1).toLowerCase() + result.slice(1)
console.log(str3); */

/* let str = "abcd";
let res = str.split("").reverse().join("");
console.log(res); */

/* let num = 12345;
let arr = String(num).split('')
let sum = 0;
for (let digit of arr) {
  sum += +digit;
}

console.log(sum); */

/* let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}

console.log(sum); */


/* let num = 12345;
let arr = String(num).split("");

let prod = 0;
for (let digit of arr) {
  console.log(digit);
  prod = Number(digit) * Number(digit);
}

console.log(prod); */
