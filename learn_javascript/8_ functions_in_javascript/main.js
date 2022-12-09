/* function name() {
    console.log('Taras');
}
name() */

/* function calc() {
  let summ = 0;
  for (let i = 1; i <= 100; i++) {
    summ += i;
  }
  console.log(summ);
}
calc(); */

/* function kub(num) {
    console.log(num **3);
}
kub(2) */

/* function res(num) {
  if (num > 0) {
    console.log("+++");
  } else {
    console.log("---");
  }
}
res(6); */

/* function res(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}
res(2, 3, 4); */

/* let param1 = 1;
let param2 = 2;
let param3 = 3;

function param(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}
param(param1, param2, param3); */

/* function func(num = 5) {
	console.log(num * num);
}

func(2);
func(3);
func(); */

/* function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}
func(2, 3);
func(3);
func(); */

/* function kub(num) {
  return num ** 3;
}
let res = kub(3) + kub(3);
console.log(res); */

//Последовательный вызов функций в JavaScript

/* function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
let res = round(sqrt(2))
console.log(res); */

/* function sqrt(num) {
  return Math.sqrt(num);
}
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
function round(num) {
  return num.toFixed(3);
}

let res = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(res); */

/* function func(num) {
	return num;
	
	let res = num ** 2;
	return res;
}

console.log( func(3) ); */

/* function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func(10) );
console.log( func(-5) ); */

/* function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num ** 2;
}

console.log( func(10) );
console.log( func(-5) ); */


/* function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
    return sum;
}
let res = func(5)
console.log( res ); */

//Прием работы с return в JavaScript

/* function func(num1, num2) {
  if (num1 > 0 && num2 > 0) {
    return num1 * num2;
  } else {
    return num1 - num2;
  }
}

console.log(func(3, 4)); */

/* let arr = [2, 4, 6];

function flag(arr) {
  for (let elem of arr) {
    console.log(elem);
    if (elem % 2 === 0) {
      return true;
    }
  }
  return false;
}
console.log(flag(arr)); */

/* function num(num1) {
  num1 = String(num1);
  let str = num1.split("");
  for (let elem of str) {
    console.log();
    if (elem % 2 == 1) {
      return true;
    }
  }
  return false;
}
console.log(num(335)); */


/* function func(a, b) {
	return (a == b)
}
console.log(func(1,2)); */

/* function func(a, b) {
	return (a != b)
}
console.log(func(1,2)); */

/* function func(a, b) {
	return a + b >= 10
}
console.log(func(1,10)); */

/* function func(num) {
	return num >= 0
		
}
console.log(func(3)); */


//Поиск ошибок в коде с функциями JavaScript


/* function func1(a) {
  return a;
}
function func2(b) {
  return b;
}

console.log(func1(2) + func2(5)); */

/* function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
    return res;
}

console.log(sum([1, 2, 3, 4, 5])); */


/* let arr = [1, 2, 3, 4, 5];
function func(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;
	}
	return res
}
console.log(func(arr)); */

/* function func1() {
	return 3;
}
function func2() {
	return 5;
}
console.log( func1() + func2() ); */




/* let arr = [1, 2, 3, 4, 5];
function sum2(arr) {
  let sum1 = 0;

  for (let elem of arr) {
    sum1 += elem;
  }
  return sum1;
}
let sum = sum2(arr);
console.log(sum); */

/* let res = sum1([1, 2, 3, 4, 5]);
console.log(res);
function sum1(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
    return sum
} */


/* function add(num) {
	if (num <= 9) {
		return '0' + num;
	}
}
console.log(add(5)); */

/* let arr = [1, 2, 3, 4, 5];
let sum1 = sum(arr);
console.log(sum1);

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	return res;
} */



/* let num = 12345;
let res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
  let str = String(num);
  let arr = str.split("");
  let sum = 0;

  for (let elem of arr) {
    sum += Number(elem);
  }
  return sum;
} */


//Практика на функции в JavaScript

/* function summ (arr) {
    let res = 0
    for (let elem = 0; elem < arr.length; elem++) {
        res += arr[elem]      
    }
    return res
}
console.log(summ([1,2,3,4,5])); */

/* function str (st) {
    return st.split('')
}
console.log(str('taras')); */

/* function str(st) {
  return st.split("").reverse().join("");
}
console.log(str("taras")); */

/* function str(st) {
    return st.slice(0,1).toUpperCase() + st.slice(1,5)
  }
  console.log(str("taras")); */

/*   function stroka(str) {
    let arr = str.split(" ");
    for (let elem = 0; elem < arr.length; elem++) {
      up = arr[elem][0].toUpperCase();
      let summ = up + arr[elem].slice(1).slice("");
      console.log(summ);
    }
  }
  console.log(stroka("taras oleksandrovich sereda")); */


/*   let arr = [];
function arrpush(num) {
    for (let elem = 1; elem <= num; elem++) {
        arr.push(elem)
    }
}
arrpush(20);
console.log(arr); */


/* function RandArray(array){
    var rand = Math.random()*array.length | 0;
    var rValue = array[rand];
    return rValue;
}
var myArray = ['one', 'two', 'three', 'four', 'five', 'six'];
var rValue = RandArray(myArray);
console.log(rValue) */


//Продвинутая теория на функции

/* let num = 1;
		
function func() {
	console.log(num);
}

func(); */


/* let num = 1;
		
function func() {
	console.log(num);
} */

/* num = 2;
func();


function func() {
	console.log(num);
}

let num; */

/* function func() {
	console.log(num);
}
let num;
num = 1;
func();
num = 2;
func(); */

/* function func(obj) {
	obj.a = '!';
}

let obj = {a: 1, b: 2, c: 3};
func(obj);
console.log(obj); */

function func() {
	console.log('!');
}
func(); // выведет '!'

func = 'string'; // затрем переменную func
console.log(func);


