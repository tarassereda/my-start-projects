/*       let test = 3 * "a";

      if (test == true) {
        console.log("+++");
      } else {
        console.log("---");
      } */

//Сокращенная форма проверки на истину в JavaScript
/*       let test = true;

      if (test) {
        console.log("+++");
      } else {
        console.log("---");
      } */

//Сокращенная форма проверки на ложь в JavaScript
/*       let test = true;

      if (!test) {
        console.log("+++");
      } else {
        console.log("---");
      } */

/* let test = true;

if (!test) {
  console.log("+++");
} else {
  console.log("---");
} */

//Общая сокращенная форма проверки в JavaScript

/* let test = 3;

if (test) {
	console.log('+++');
} else {
	console.log('---');
} */


/* let test = 'abc';

if (test) {
	console.log('+++');
} else {
	console.log('---');
}
 */

/* let test = 's';

if (test) {
	console.log('+++');
} else {
	console.log('---');
} */

/* let test = 3 * 'abc';

if (test) {
	console.log('+++');
} else {
	console.log('---');
} */

//Сложные условия в сокращенной форме в JavaScript

/* let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
} */

/* let test1 = true;
let test2 = true;
let test3 = true;

if (test1 === true || test2 === 
	true && test3 === true) { 
	console.log('+++');
} else {
	console.log('---');
} */

//Необязательность конструкции else в JavaScript
/* let test = 10;

if (test == 10) {
	console.log('+++');
} */

//Необязательность фигурных скобок в JavaScript

/* const day = 20;
if (day <= 10) {
    console.log('1');
} else if (day <= 20) {
    console.log('2');
}else if (day<=30) {
    console.log('3');
}else if (day != Number()) {
    console.log('errors');
} */

//Вложенные конструкции if-else в JavaScript

// задача 
//Пусть в переменной num хранится число. 
//Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа. 
//Если полученная сумма меньше или равна 9, то выведите сообщение о том, что сумма цифр однозначна, 
//в противном случае выведите сообщение о том, что сумма цифр двухзначна.

/* const num = 23;
if (num >= 10) {
  if (num <= 99) {
    console.log("попадає");
    let summ = num.toString().split("");
    let num1 = Number(summ[0]);
    let num2 = Number(summ[1]);
    let summ2 = num1 + num2;
    console.log(summ2);
    if (summ2 <= 9) {
      console.log("однозначна сума");
    } else if (summ2 > 10) {
      console.log("двухзначна сумма");
    }
  } else {
    console.log("більше 99");
  }
} else {
  console.log("менше нуля");
} */
 
//Конструкция switch-case в JavaScript

/* let num = 1;

switch (num) {
	case 1:
		console.log('value1');
	break;
	case 2:
		console.log('value2');
	break;
	case 3:
		console.log('value3');
	break;
	default:
		console.log('incorrect value');
	break;
} */

/* let lang = "ua";
switch (lang) {
  case "us":
    console.log("USA");
    break;
  case "ua":
    console.log("Ukraine");
    break;

  default:
    console.log("no lang");
    break;
} */

//Логические операции в JavaScript

/* let a = 2 * (3 - 1);
let b = 6 - 2;
if (a == b) {
    console.log('ok');
    
}else{
    console.log('no');
} */

/* let a = 5 * (7 - 4);
let b = 1 + 2 + 7;

if (a>b) {
    console.log('da');
}else{
    console.log('no');
} */

/* let a = 2 ** 4;
let b = 4 ** 2;
if (a!=b) {
    console.log('ok');
}else{
    console.log('no');
} */

//Функция confirm в JavaScript

/* let age = confirm('Вам є 18 років?');
if (age) {
    console.log('da, sex');
} else{
    console.log('no,fuck');
} */

//Область видимости переменных в if-else в JavaScript

/* let age = 20;
let adult;
if (age >= 18) {
	 adult = true;
} else {
	 adult = false;
}

console.log(adult); */

//Проверка длины строк и массивов в JavaScript

/* const arr = [1, 2,6];
if (arr.length == 3) {
  let summ = arr[0] + arr[2] + arr[2];
  console.log(summ);
} else {
  console.log("більше 3");
} */

//Проверка символов строки в JavaScript

/* let str = "abcd";
if (str[0] == "a") {
  console.log("ok");
} else {
  console.log("no");
} */

/* let str2 = "abcdx";
let last = str2[str2.length - 1];
if (last == "x") {
  console.log("ok");
} else {
  console.log("no");
} */

/* let str3 = "cbcd";
if (str3[0] == "a" || str3[0] == 'b') {
  console.log("ok");
} else {
  console.log("no");
} */

//Проверка цифр числа в JavaScript

/* let num = 12340;
let str = String(num);
let strNum = Number(str[str.length - 1]);

if (strNum === 0) {
  console.log("da");
}else{
    console.log('no');
} */

/* let num = 352;
let str = String(num);
let strNum = Number(str[str.length - 1]);
if (strNum % 2 === 0) {
  console.log("чьотне " + strNum);
} else {
  console.log("нечьотне " + `${strNum}`);
} */


//Проверка остатка от деления в JavaScript

/* let a = 10;
let b = 5;

if (a % b == 0) {
    console.log('da');
}else {
    console.log('no');
} */


/* let a = 9;
if (a % 3 == 0) {
  console.log("da");
} */


//Поиск ошибок в коде с условиями JavaScript

/* let num = '123033'; 


let sum1 = num[0] + num[1] + num[2];
let sum2 = num[3] + num[4] + num[5];
console.log(sum1);
console.log(sum2);

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
} */


//Практика на условия if-else в JavaScript

/* const month = 5;
if ((month <= 2 && month >= 1) || month == 12) {
  console.log("winter");
} else if (month >= 3 && month <= 5) {
  console.log("spring");
} else if (month >= 6 && month <= 8) {
  console.log("summer");
} else if (month >= 9 && month <= 11) {
  console.log("autumn");
} else {
  console.log("not info");
} */


/* const str =  'abcde';
if (str[0] =='a') {
    console.log('da');
}else{
    console.log('no');
} */

/* let num = 42345;
let str = String(num);
let strNum = Number(str[0]);
console.log(strNum);

if (strNum == 1 || strNum == 2 || strNum == 3) {
  console.log("da");
} else {
  console.log("net");
} */

/* let num = 123;
let str = String(num);
let summ = Number(str[0]) + Number(str[1]) + Number(str[2]);
console.log(summ); */

let num = 122122;
let str = String(num);
let num1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
let num2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

console.log(num1, num2);

if (num1 == num2) {
  console.log("da");
} else {
  console.log("no");
}