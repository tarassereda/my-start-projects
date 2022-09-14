/* for (let i = 1; i <= 100; i++) {
    console.log(i);
} */
/* for (let i = 11; i <= 33; i++) {
    console.log(i);
} */

/* for (let i = 0; i <= 100; i+=2) {
    console.log(i);
} */

/* for (let i = 1; i <= 99; i+=2) {
    console.log(i);
} */

/* for (let i = 100; i > 0; i--) {
    console.log(i);
} */

//Перебор массива циклом for-of в JavaScript

/* let arr = ["a", "b", "c", "d", "e"];

for (let item of arr) {
  console.log(item);
} */

//Перебор объекта циклом for-in в JavaScript

/* let obj = { x: 1, y: 2, z: 3 };
for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
} */

//Цикл while в JavaScript

/* let item = 1;
while (item <= 10) {
  console.log(item);
  item++;
} */

/* let item = 11;
while(item <= 33){
    console.log(item);
    item++
} */

//Цикл for для массивов в JavaScript

/* let arr = ['a', 'b', 'c', 'd', 'e'];
for (let item = 0; item < arr.length; item++) {
    console.log(arr[item]);
} */


/* let arr = ['a', 'b', 'c', 'd', 'e'];
for (let item = 1; item < arr.length - 1; item++) {
    console.log(arr[item]);
} */

/* let arr = ['a', 'b', 'c', 'd', 'e'];
for (let item = arr.length - 1; item >= 0; item--) {
    console.log(arr[item]);   
} */

/* let arr = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
} */



//Условия в циклах в JavaScript

/* let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr) {
  if (arr[elem] >= 3 && arr[elem] <= 10) {
    console.log(arr[elem]);
  }
} */

/* let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
for (let key in obj) {
  if (obj[key] % 2 == 1) {
    console.log(obj[key]);
  }
} */

//Накопление чисел в циклах JavaScript

/* let res = 0;

for (let elem = 1; elem <= 99 ; elem++) {
    res += elem
    if (res % 2 == 1) {
        console.log(res);
    }

}   */ 

//Накопление элементов массивов в циклах JavaScript

/* let res = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 != 1) {
    res = res + i;
  }
}

console.log(res); */


/* let res = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 != 1) {
    res = res + i;
  }
}

console.log(res); */


/* let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
    if (elem % 2 != 1) {
        res += elem;
    }
}

console.log(res); */

/* let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
let summ = 0;


for (let elem of arr) {
res =  elem * elem * elem
summ += res;
}

console.log(summ); */

//Формирование строк через циклы в JavaScript

/* let str = '';
for(let elem = 1; elem <= 5; elem++){
    str += '-'
}
console.log(str); */

/* let str = '';
for(let elem = 1; elem <= 9; elem++){
    str += elem
}
console.log(str); */

/* let str = '';
for(let elem = 9; elem >= 1; elem--){
    str += elem
}
console.log(str); */

/* let str = "";
for (let elem = 1; elem <= 9; elem++) {
  str += "-" + elem;
  if (elem == 9) {
    str += "-";
  }
}
console.log(str); */

/* for (let elem = 10; elem <= 1000; elem++) {
    let str = String(elem);
    if (str[0] === str[0]) {
        console.log(str[0]);
    }
} */

/* for (let elem = 10; elem <= 1000; elem++) {
    let str = String(elem);
    if (str[0] === '1') {
        console.log(str[0]);
    }
} */

/* for (let elem = 10; elem <= 1000; elem++) {
    let str = String(elem);
    if (str[0] === '5' && str[1] === '5') {
        let summ = Number(str[0]) + Number(str[1])
        console.log(summ);
    }
} */


//Инструкция break в JavaScript

/* let arr = [1, 2, 3, 4, 5,0,5,6];

for(let elem of arr){
    if(elem === 0 )
    break
    console.log('ok');
} */

/* let arr = [1, 2, 3, 5, 6,3];

for(let elem of arr){
if(arr[elem] == 3 ){
    console.log(elem);
    break
}
} */

//Вложенные циклы в JavaScript

/* for (let elem1 = 1; elem1 <= 9; elem1++) {
  for (let elem2 = 1; elem2 <= 3; elem2++) {
    document.write(elem1);
  }
} */


/* for (let elem1 = 1; elem1 <= 3; elem1++) {
  for (let elem2 = 1; elem2 <= 3; elem2++) {
    document.write(elem1, elem2);
  }
} */

//Заполнение массива в JavaScript

/* let arr = [];
for (let elem = 1; elem <= 10; elem++) {
    arr.push(elem + ' ' +'wow')
}
console.log(arr); */

/* let arr = [1, 2, -3, 0, -4, 5];
let arr2 = [];

for (let elem of arr) {
  if (elem > 0) {
    arr2.push(elem);
  }
}
console.log(arr2); */

//Изменение массива в цикле JavaScript

/* let arr = [2,3,4];
for (let elem = 0; elem < arr.length; elem++) {
    arr[elem] = arr[elem] * 2
}
console.log(arr); */

/* let arr = [2,3,4];
for (let elem = 0; elem < arr.length; elem++) {
    arr[elem] -= 1;
}
console.log(arr); */

/* let arr = [2,3,4];
for (let elem = 0; elem < arr.length; elem++) {
    arr[elem] += 10;
}
console.log(arr); */


//Заполнение объектов через цикл в JavaScript

/* let key = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
let value = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let elem = 0; elem < key.length; elem++) {
obj[key[elem]] = value[elem]
    
}
console.log(obj); */

/* let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let newObj = {};

for (let key in obj) {
  let value = obj[key];
  if (value % 2 != 1) {
    newObj[key] = value;
  }
}
console.log(newObj); */

/* let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj = {};
for(let key in obj){
    newObj[obj[key]] = key;
}
console.log(newObj); */

//Изменение объектов через цикл в JavaScript

/* let obj = {x: 1, y: 2, z: 3};
for(let key in obj){
    obj[key] *= 2
}
console.log(obj); */

/* let obj = {x: 1, y: 2, z: 3};
for(let key in obj){
    obj[key] += 1
}
console.log(obj); */

//Подсчет количества элементов в массиве JavaScript

/* let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter3 = 0;
let counter2 = 0;
for (let elem of arr) {
  if (elem == 3) {
    counter3++;
  }
  if (elem == 2) {
    counter2++;
  }
}
console.log("3 - " + counter3, "2 - " + counter2); */

//Объект с количеством элементов в массиве JavaScript

/* let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let count = {};

for (let elem of arr) {
	if (count[elem] === undefined) {
		count[elem] = 1;
	} else {
		count[elem]++;
	}
}

console.log(count); */

/* let arr = ["a", "b", "c", "a", "a", "b"];
let count = {};

for (let elem of arr) {
  if (count[elem] === undefined) {
    count[elem] = 1;
  } else {
    count[elem]++;
  }
}

console.log(count); */

/* let str1 = "aabbBbcCccc";
let count = {};
for (let elem of str1.toLocaleLowerCase()) {
  if (count[elem] === undefined) {
    count[elem] = 1;
  } else {
    count[elem]++;
  }
}
console.log(count); */

// Получение соседей элементов в массиве JavaScript

/* let arr = [1, 2, 3, 4, 5];

for (let i = 1; i < arr.length; i++) {
	console.log(arr[i - 1] + arr[i]);
} */

//Советы по написанию кода циклов в JavaScript


/* let arr = [10, 20, 30, 40, 21, 32, 51];
let summ = 0;
let str;
for (let elem of arr) {
  str = elem.toString();
  if (str[0] === "1") {
    summ += elem;
  }
  if (str[0] === "2") {
    summ += elem;
  }
}
console.log("Сума: " + summ);
document.write("Сума: " + summ); */

//Советы по отладке кода на примере циклов в JavaScript


/* let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
let sum = 0;

for (let elem in obj) {
  let str = obj[elem].toString();

  if (str[0] === "1") {
    sum += +obj[elem];
  } else if (str[0] === "2") {
    sum += +obj[elem];
  }
}

console.log(sum); */


//Поиск ошибок в коде с циклами JavaScript

/* let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); */

/* let arr = ['1', '2', '3', '4', '5'];
let sum = '';

for (let elem of arr) {
	sum += +elem;
    sum = +sum;
}

console.log(sum); */

/* let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); */

/* 
let arr = ["1", "2", "3", "4", "5"];
let sum = 0;

for (let i = 0; i <= arr.length; i++) {
  sum += i;
}

console.log(sum); */


/* let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length ; i++) {
	sum += +arr[i];
}

console.log(sum); */


/* let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i <= arr.length; i++) {
	sum += +i;
}

console.log(sum); */

/* let arr = [1, 2, 3, 4, 5];
let arr2 = [];

for (let elem of arr) {
	elem = elem * elem
    arr2.push(elem)
}

console.log(arr2); */

/* let arr;

for (let i = 1; i <= 5; i++) {
  arr = i;
}

console.log(arr); */

/* let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum += +obj[key];
}

console.log(sum); */


/* let arr = [1, 2, 3, 4, 5];
let res ;

for (let elem of arr) {
    console.log(arr[elem -1]);
	if (elem === 3) {
		res = '+++';
        break
	} else {
		res = '---';
	}
}

console.log(res); */

/* let arr = [];
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr); */


/* let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
	if (elem === 3) {
		 res = true;
		break;
	}
}

console.log(res); */

/* let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 == 0) {
		console.log(elem);
	}
} */


/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [];

for (let elem of arr) {
  if (elem % 2 != 0) {
    res.push(elem);
  }
}

console.log(res); */

//Отработка циклов JavaScript

/* for(let elem  = 1; elem <= 100; elem++){
    console.log(elem);
} */

/* for(let elem  = 100; elem >= 1; elem--){
    console.log(elem);
} */

/* for (let elem = 1; elem <= 100; elem++) {
  if (elem % 2 == 0) {
    console.log(elem);
  }
} */

/* let arr = [];
for (let elem = 0; elem < 10; elem++) {
  arr[elem] = "x";
}
console.log(arr); */

/* let arr = [];
for (let elem = 1; elem <= 10; elem++) {
  arr[elem] = elem;
}
console.log(arr); */

/* let arr = [3, -4, 5, 7, 3, 11, 45];
for (let elem of arr) {
  if (elem > 0 && elem <= 10) {
    console.log(elem);
  }
} */

/* let arr = [3, -4, 5, 7, 3, 11, 45];
for (let elem of arr) {
  if (elem === 5) {
    console.log("da");
    break;
  } else {
    console.log("no");
  }
} */


/* let arr = [1,2,3,4];
let summ = 0;
for(let elem of arr){
    summ += elem;
}
console.log(summ); */

/* let arr = [2, 3, 2];
let summ = 0;
for (let elem of arr) {
  summ += elem ** 3;
}
console.log(summ);

let a,b,c;
 a = 27;
 b = 16;
 c = a + b;
console.log(c);
document.write(c) */

/* let arr = [2, 2, 2, 2];
let summ = 0;
let sum2;
for (let elem of arr) {
  summ += elem;
  sum2 = summ / elem;
}
console.log(sum2); */


/* let arr = [1, 2, 3, 4, 5];
let result = 1;
let n = 4;
for (let i = 1; i <= n; i++) {
    console.log(n,i);
  result = result * i;
}
console.log(result); */

/* let arr = [];
for(let elem = 10 ; elem >= 1 ;elem--){
    arr[elem] = elem 
}
console.log(arr); */

/* let arr = [2, 3, 8, 5];
let summ = 0;
for (let elem of arr) {
  if (elem % 2 === 0) {
    summ += elem;
  }
}
console.log(summ); */


/* let arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr) {
  let str = elem.toString();
  if (+str[0] === 1) {
    document.write(elem + "<br>");
    console.log(elem);
  } else if (+str[0] === 2) {
    document.write(elem + "<br>");
    console.log(elem);
  } else if (+str[0] === 5) {
    document.write(elem + "<br>");
    console.log(elem);
  }
} */

/* let arr = [10, 20, 30, 50, 235, 3000];
let summ = [];
for (let elem = arr.length -1; elem >= 0; elem--) {
  let res = arr[elem];
  summ.push(res);
}
console.log(summ); */

/* let arr = [0, 1, 4, 3, 5];
for (let elem of arr) {
  if (elem === arr[elem]) {
    console.log(elem);
  }
} */




