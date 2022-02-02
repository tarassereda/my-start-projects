// =============== Обєкти ==========

// =============== перебор обєкта =====
/* const obj = {
  name: "Taras",
  lastName: "Sereda",
  hobby: "Shooting",
};

for (let sort in obj) {
  console.log(sort, obj, obj[sort] );
} */

//================ видалення свойства з обєкту ====

/* const obj = {
  name: "Taras",
  lastName: "Sereda",
  hobby: "Shooting",
};

for (let sort in obj) {}  
 delete obj.hobby;
console.log(obj); */

// =============== звернення до масива в обєкті ============
/* const obj = {
  name: "Taras",
  lastName: "Sereda",
  hobby: ["Shooting", 'Game'],
};

for (let sort in obj) {}
console.log(obj.hobby[1]); */

// =============== звернення до функції в обєкті ============

/* const obj = {
  name: "Taras",
  lastName: "Sereda",
  hobby: function (a, b) {
    return a + b;
  },
};

for (let sort in obj) {
}
console.log(obj.hobby(2, 2)); */

// =============== перевірка на наявність свойства в обєкті метод 1 ============

/* const obj = {
  name: "Taras",
  lastName: "Sereda",
  hobby: function (a, b) {
    return a + b;
  },
};

let exist = "hobby" in obj;
if (exist) {
  console.log("Таке свойство єсть");
} else {
  console.log("Такого свойства немає");
} */

// =============== перевірка на наявність свойства в обєкті метод 2 ============
/* const obj = {
    name: "Taras",
    lastName: "Sereda",
    hobby: function (a, b) {
      return a + b;
    },
  };
  
  let exist = obj.hasOwnProperty('hobby');
  if (exist) {
    console.log("Таке свойство єсть");
  } else {
    console.log("Такого свойства немає");
  } */

//=============== Масиви ==========
/*   const array = ['hello', 'world'];
console.log(array); */

/*   const array = ['hello', 'world'];
  array.forEach(function(value){
      console.log(value);
  }) */

/*   const arr = ['a','b','c','d'];
  console.log(arr[0],'+',arr[1],'+',arr[2],'+',arr[3] ); */

/* const arr = [1, 2, 3];
let summ = arr[0] + arr[1] + arr[2];

console.log(summ); */

/* const arr = [1, 2, 3];
let summ = 0;

for (let i = 0; i < arr.length; i++) {
  summ += arr[i] ;

} */

/* summ = 100;

const a = 1;
const b = 2;
const c = 3;

 summ += a;
console.log(summ);
summ = summ + b;
console.log(summ);
summ = summ + c;
console.log(summ); */

/* const array = [1,2,3,4];

const a = array[0] * array[1];
const b = array[2] * array[3];
const c = a + b;
console.log(c); */

/* const array = [2, 5, 7, 9, 90, 76, 4];
console.log(array.length); */

/* const array = [2, 5, 7, 9, 90, 76, 4];
console.log(array.length - 1); */

/* const array = [2, 5, 7, 9, 90, 76, 'abc'];
console.log(array[6]); */

/* const array = [2, 5, 7, 9, 90, 76, 'abc'];
array[6] = 'cba'
console.log(array[6]); */

/* const array = ['a','b','c'];

array[0] = array[0] + '!';
array[1] = array[1] + '!';
array[2] = array[2] + '!';
console.log(array); */

/* const array = ["a", "b", "c"];

array[0] += "!";
array[1] += "!";
array[2] += "!";
console.log(array); */

/* const array = [2, 5, 7, 9, 90, 76, 4];
array[0] += 3;
array[1] += 3;
array[2] += 3;
array[3] += 3;
array[4] += 3;
array[5] += 3;
array[6] += 3;

console.log(array); */

/* const array = [1,2,3,4];

array[0]++;
++array[1];
array[2]--;
--array[3];
console.log(array); */

/* const arr = [1,2,3];
arr[0]++;
arr[1]++;
arr[2]++;

console.log(arr); */

/* const arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
console.log(arr); */

/* const arr = [1,2,3];
arr[3] = 4;
arr[4] = 5;
console.log(arr); */

/* let arr = [];

arr[3] = 'a';
arr[8] = 'b';

console.log(arr.length); */

// =============== objects ==========

/* const obj = {1:'a',2:'b',3:'c'};
console.log(obj[1], obj[2], obj[3]); */

/* let obj = {1: 'a', 2: 'b', 3: 'c'};
console.log(obj); */

/* const obj = { a: 1, b: 2, c: 3 };
let summ = 0;
summ += obj["a"] + obj["b"] + obj["c"];

console.log(summ); */

/* const obj = { '1a': 1, '2b': 2, 'c-c': 3 };
let summ = 0;
summ += obj["1a"] + obj["2b"] + obj["c-c"];

console.log(summ); */

/* const obj = {key1: 1, key2: 2, key3: 4 };
let summ = 0;
summ += obj.key1 + obj.key2 + obj.key3;
console.log(summ); */

/* let obj = { "1a": 1, b2: 2, "eee-": 3, d4: 4 };

let summ = 0;

summ += obj["1a"] + obj.b2 + obj["eee-"] + obj.d4;
console.log(summ); */

/* const user = {name: 'Taras',
surname: 'Sereda',
patronymic: 'Oleksandrovich'};

console.log(user.name + ' ' + user.surname + ' ' + user.patronymic); */

/* const date = {year: 2022, month: 01 , day: 24};
console.log(date.year + '-' + date.month + '-' + date.day); */

/* const obj = {};
obj.key1 = 1;
obj.key2 = 2;
obj.key3 = 3;
console.log(obj); */

/* const arr = [1,2,3,4];
let key = 3;
console.log(arr[key]); */

/* const arr = [1,2,3,4,5];
let key1 = 1;
let key2 = 2;
let summ = 0;
summ += key1 + key2;
console.log(summ); */

/* const obj = {'a': 1, 'b': 2, 'c': 3 };
let key = obj['a'];
console.log(key); */

/* let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
console.log('e' in obj);
console.log('f' in obj); */

/* let arr = ['a', 'b', 'c', 'd', 'e'];

delete arr[0];
delete arr[1];

console.log(arr.length); */

/* const arr = ['a', 'b', 'c'];
arr[1] = '!';
console.log(arr); */

/* const arr = ['a', 'b', 'c'];
arr = ['a', 'b', 'c'];
console.log(arr); */

/* const a = 1;
const b = 2;
const c = a + b;

console.log(c); */

/* let arr = [1, 2, 3, 4, 5];
let res = arr[1] + arr[2];

console.log(res); */

/* const test = 10;
if (test <= 10) {
  console.log('verno');
  
}else{
  console.log('neverno');
} */

/* const test = 10;
if (test === 10) {
  console.log('verno');
  
}else{
  console.log('neverno');
} */

/* const test = 15;
if (test != 10) {
  console.log('verno');
  
}else{
  console.log('neverno');
} */

/* const test1 = 1;
const test2 = 2;
if (test1 < test2) {
  console.log('verno', test2 , 'bolshe');
  
}else{
  console.log('neverno');
} */

/* let test1 = '3';
let test2 = '3';
		
if (test1 == test2) {
	alert('верно');
} else {
	alert('неверно');
} */

/* let test1 = '3';
let test2 = '3';
		
if (test1 === test2) {
	alert('верно');
} else {
	alert('неверно');
} */

/* let test1 = 3;
let test2 = '3';
		
if (test1 == test2) {
	alert('верно');
} else {
	alert('неверно');
} */

/* let test1 = 3;
let test2 = '3';
		
if (test1 === test2) {
	alert('верно');
} else {
	alert('неверно');
} */

/* let test1 = 3;
let test2 = 2;
		
if (test1 !== test2) {
	alert('верно');
} else {
	alert('неверно');
} */

/* const num = 3;
if (num > 0 && num < 5) {
  console.log('verno');
  
}else {
  console.log('neverno');
} */

/* const num = 10;
if (num >= 10 && num <= 20) {
  console.log('verno');
  
}else {
  console.log('neverno');
} */

/* const num1 = 0;
const num2 = 3;
if (num1 <= 1 && num2 >= 3) {
  console.log('verno');
  
}else {
  console.log('neverno');
} */

/* let num1 = 10;
let num2 = -5;

if (num1 > 0 || num2 > 0) {
	alert('верно'); // выведет 'верно'
} else {
	alert('неверно');
} */

/* const num1 = 2;
const num2 = 10;
		
if (!(num1 >= 0 || num2 <= 10)) {
	alert('верно');
} else {
	alert('неверно');
} */

/* let test = true;

if (test === true) {
	alert('верно');
} else {
	alert('неверно');
} */

/* let test = false;

if (test === true) {
	alert('верно');
} else {
	alert('неверно');
} */

/* let test = true;

if (test != true) {
	alert('верно');
} else {
	alert('неверно');
} */

/* let test = true;
if ( test) {

  console.log('verno');
  
}else{
  console.log('neverno');
} */

/* let test = true;
if (! test) {

  console.log('verno');
  
}else{
  console.log('neverno');
} */

/* let test = false;

if (test) {
	alert('верно');
} else {
	alert('неверно');
} */

/* let test = 10;

if (test == 10) {
	alert('yes');
} */

/* const test = 0;
if(test === 0) alert('verno'); else alert('neverno'); */

/* const test = 0;
if(test == 0 ) alert('verno'); */

/* const day = 21;

if(day >= 1 && day <= 10) console.log('1');
if(day >= 11 && day <= 20) console.log('2');
if(day >= 21 && day <= 31) console.log('3'); */

/* const day = 20;
if (day >= 1 && day <= 10) {
  console.log("1");
} else if (day >= 11 && day <= 20) {
  console.log("2");
} else if (day >= 21 && day <= 31) {
  console.log("3");
} */

/* const day = 33;
if (day >= 1 && day <= 10) {
  console.log("1");
} else if (day >= 11 && day <= 20) {
  console.log("2");
} else if (day >= 21 && day <= 31) {
  console.log("3");
} else {
  console.log('warning');
} */

/* let num = 3;

if (num >= 0) {
	if (num <= 5) {
		alert('меньше или равно 5');
	} else {
		alert('больше 5');
	}
} else {
	alert('меньше нуля');
} */

/* let age = 17;
let adult;

if (age >= 18) {
	 adult = true;
} else {
	 adult = false;
}

console.log(adult); */

/* let age = 20;
let adult;

if (age >= 18) {
	 adult = true;
} else {
	 adult = false;
}

console.log(adult); */

/* let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	 adult = false;
}

console.log(adult); */

/* let age = 18;
let result;

if (age >= 18) {
	if (age <= 23) {
		 result = 'от 18 до 23';
	} else {
		 result = 'больше 23';
	}
} else {
	 result = 'меньше 18';
}

console.log(result); */

/* let min = 10;

if (min >= 0 && min <= 14) {
	console.log('1 четверть');
}

if (min >= 15 && min <= 29) {
	console.log('2 четверть');
}

if (min >= 30 && min <= 44) {
	console.log('3 четверть');
}

if (min >= 45 && min <= 59) {
	console.log('4 четверть');
} */

/* let min = 50;

if (min >= 0 && min <= 19){
  console.log('1 tret');
}
if (min >= 20 && min <= 39){
  console.log('2 tret');
}
if (min >= 40 && min <= 59){
  console.log('3 tret');
} else {
  console.log('is not time');
} */

/* const arr = [1, 2, 3];

if (arr.length === 3) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }
  console.log(summ);
} */
//===============

/* const num = 30;
if( String(num)[1] === '0') {
  console.log('ravna');
} else{
  console.log('neravna');
}
console.log(String(num)[1]); */

/* const num = 20;

if(num % 2 === 0){

  console.log('verno');
} else {
  console.log('neverno');
} */

/* let a = 100;

if (a % 3 === 0) {
	console.log('делится нацело');
} else {
	console.log('делится с остатком ');
} */

/* const month = 11;

if(month >=1 && month <=2 || month === 12){
  console.log('winter');
} else if(month >=3 && month <=5){
  console.log('spring');
} 
else if(month >=6 && month <=8){
  console.log('sumer');
} 
else if(month >=9 && month <=11){
  console.log('outum');
} else { console.log('error');} */

/* const str = 'abcde';
if(str[0] === 'a'){
  console.log('da');
} else { 
  console.log('net');
} */

/* const num = 12345;
if (+String(num)[0] === 1) {
  console.log("da");
} else {
  console.log("net");
} */

/* const num = 123;
let summ = 0;
summ += +String(num)[0] + +String(num)[1] + +String(num)[2] ;
console.log(summ); */

/* const num = 123123;
let summ1 = 0;
summ1 += +String(num)[0] + +String(num)[1] + +String(num)[2];
let summ2 = 0;
summ2 += +String(num)[3] + +String(num)[4] + +String(num)[5];
if (summ1 === summ2) {
  console.log("da");
} else {
  console.log("net");
} */

/* const num = -10;
let result;
if(num >= 0 ){
  result = 1; 
} else if( num < 0){
  result = -1;
}
console.log(result); */
