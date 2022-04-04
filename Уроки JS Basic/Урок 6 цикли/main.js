/* let a = 1;
let b = 2;

if (a == b) {
	console.log(true);
} else {
	console.log(false);
} */

/* let a = 2 * (3 - 1);
let b = 6 - 2;
console.log(a === b); */

/* let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
console.log(a > b); */

/* let a = 2 * 4;
let b = 4 * 2;
console.log(a != b); */

/* let ok = confirm('18? years old');
if(ok){
    console.log('da');
} else { console.log('net');} */

//============================== цикли

/* let i = 0;
while (i <= 100) {
  i++;
  console.log(i);
} */

/* let i = 0;
while (i <= 99) {
  i += 2;
  console.log(i);
} */

/* let i = 0;
while (i <= 98) {
  i += 3;
  console.log(i);
} */

/* let i = 51;
while (i >= 2) {
	i--;
	console.log(i);
	
} */

/* let i = 10;

while (i >= 1) {
	i--;
	console.log(i);
} */

/* let i = 10;

while (i <= 100) {
  i++;
  console.log(i);
} */

/* let i = 10;

while (i >= 1) {
	console.log(i);
	i--;
} */

//=============== for

/* for (let i = 1; i <= 100; i++) {
	console.log(i);
	
} */

/* for (let i = 11; i <= 33; i++) {
	console.log(i);
	
} */

/* for (let i = 99; i >= 1; i-= 5) {
	console.log(i);
	
} */
/* for (let i = 100; i >= 0; i--) {
	console.log(i);
	
} */

/* let result = 0;
for (let i = 1; i <= 20; i++) {
	result = result + i;
	
}
console.log(result); */

/* let result = 0;
for (let i = 2; i <= 100; i+= 2) {
	result = result + i;
	
}
console.log(result); */

/* let result = 0;
for (let i = 99; i >= 1; i-= 3) {
	result = result + i;
	
}
console.log(result); */

//=============== for array ======

/* let arr = [1, 2, 3, 4, 5];

for (let i = 0; i <= 4; i++) {
	console.log(arr[i]);
} */

/* let arr = [1, 2, 3, 4, 5];

for (let i = 0; i <= arr.length -1; i++) {
	console.log(arr[i]);
} */

/* const arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
	
} */

/* const arr = [1,2,3,4,5];
for (let i = 0; i < arr.length; i++) {
	if(arr[i] % 2 !== 0){
		console.log(arr[i]);
	}
	
} */

/* let result = 0;
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	result += arr[i];
}

console.log(result); */

/* let arr = [1,2,3,4,5];
let result = arr[0] ;
for (let i = 1; i < arr.length; i++) {
	result  *= arr[i];
	
}
console.log(result); */

/* const arr = [1,2,3,4,5];
let summ = 0;
for (let i = 0; i < arr.length; i++) {
	summ += arr[i] * arr[i];
	
}
console.log(summ); */

/* const arr = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 3 && arr[i] < 10) {
    console.log(arr[i]);
  }
} */

/* const array = [1, 2, 3, -1, -2, -3];
let summ = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    summ += array[i];
  }
}
console.log(summ); */

/* const array = [1, 2, 3, 4, 5];
let summ = 0;
let result = 0;
for (let i = 0; i < array.length; i++) {
	summ += array[i];
	result = summ / array.length;

}

console.log(result); */

/* const array = [1, 2, 3, 4, 5];
let summ = 0;
for (let i = 0; i < array.length; i++) {
	summ += array[i];
}

const result = summ / array.length;
console.log(result); */

/* let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
	let num = String(arr[i]);
	let char = num[0];
	if (char === '1' || char === '2' || char === '5') {
		console.log(num);
	}

} */

/* let arr = [10, 20, 30, 50, 235, 3000];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
} */

/* const arr = [2, 5, 7, 3, 90, 5, 4];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === i) {
    console.log(arr[i]);
  }
} */

/* const arr = [2, 5, 7, 3, 9, 5, 4];
for (let i = 0; i < arr.length; i++) {
  document.write(arr[i] + "<br>");
} */

/* const week = ["пн", "вт", "ср", "чт", "пт", "сб", "нд"];

for (let i = 0; i < week.length; i++) {
  if (i === 5 || i === 6) {
    document.write(`<strong>${week[i]}</strong> <br>`);
  } else {
    document.write(week[i] + "<br>");
  }
} */

/* const a = prompt('який сьогодні день тижня?')
const week = ["пн", "вт", "ср", "чт", "пт", "сб", "нд"];
let day = week[a];
for (let i = 0; i < week.length ; i++) {
  if (day === week[i]) {
    document.write(`<i>${week[i]}</i> <br>`);
  } else {
    document.write(week[i] + "<br>");
  }
} */

/* let num = 500;

while (num > 10) {
	num = num / 2;
}

console.log(num); */

/* for (var num = 500, i = 0; num 
	> 10; num = num / 2, i++); 
console.log(num, i); */

/* for (let num = 158, i = 1; num < 1000; num = num *2, i++) {
	console.log(num, i);
	
} */

/* let str = '';
for(let i = 0; i < 5; i++){
	str += '0'
}
console.log(str); */

/* let str = '';
for (let i = 1; i < 10; i++) {
	str += i;
	
}
console.log(document.write(str)); */

/* let str = '';
for (let i = 9; i > 0; i--) {
	str += i;
	
}
console.log(document.write(str)); */

/* let str = '';
for (let i = 1; i < 10; i++) {
	str +=  i + '-';
	
}
console.log(document.write(str)); */

/* for (let i = 10; i < 1000; i++) {
  let str = String(i);
  if (str[0] == 5 && str[1] == 5) {
    console.log(i);
  }
} */

/* let str = "";
for (let i = 1; i < 10; i++) {
  str += i;
}
console.log(str); */

/* for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 2; j++) {
    document.write(i);
  }
} */

/* let arr = [];
for (let i = 1; i < 100; i++) {
  arr[i] = i;
}
console.log(arr); */

/* let arr = [];

for (let i = 2; i <= 100; i += 2) {
  arr[i] = i;
}

console.log(arr); // массив получится с пропусками */

/* let arr = [];
for (let i = 2, j = 0; i < 100; i += 2, j++) {
  arr[j] = i;
}
console.log(arr); */

/* let arr = [];
for (let i = 1, j = 0; i < 99; i += 2, j++) {
  arr[j] = i;
}
console.log(arr); */

/* let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	arr[i] = arr[i] * arr[i];
}

console.log(arr); */

/* let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	arr[i] -= 1;
}

console.log(arr); */

/* let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  arr[i] += 10;
}

console.log(arr);
 */

/* let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr); */

/* let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push('cat');
}
console.log(arr); */

/* let array = [-1, 0, 12, 654, 4];
let result = [];

for (let elem of array) {
  if (elem > 0) {
    result.push(elem);
  }
}
console.log(result); */

/* let arr = ['a', 'b', 'c', 'd', 'e'];
let result = [];
for (let i = arr.length - 1 ; i >= 0; i--) {
    result.push(arr[i])
    
}
console.log(result); */

/* let arr = []
arr.push('a');
arr.push('b');
arr.push('c');
console.log(arr); */

/* let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4, 5];
let obj = {};

for (let i = 0; i <= 4; i++) {
	let key = keys[i];
	let value = values[i];
	
	obj[key] = value;
}

console.log(obj); */

/* let keys = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
let value = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i = 0; i < 7; i++) {
  obj[keys[i]] = value[i]
  
}
console.log(obj);
 */

/* let keys = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
let value = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i = 0; i < 7; i++) {
  obj[value[i]] = keys[i]
  
}
console.log(obj); */

/* let obj = { a: 12, b: 21, c: 13, d: 23, e: 17 };
let result = {};

for (let key in obj) {
  if (obj[key] >= 10 && obj[key] <= 20) {
    result[key] = obj[key];
  }
}

console.log(result); */

/* let obj = { 1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб", 7: "вс" };

let result = {};

for (let i = 1; i <= 7; i++) {
  if (i % 2 !== 0) {
    result[i] = obj[i];
  }
 
}
console.log(result); */

/* let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};


for (let key in obj) {
  if (obj[key] >= 400) {
    obj[key] = obj[key] + (obj[key] * 10) / 100;
  }

}
console.log(obj); */

/* let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let obj = {};

for (let i = 0; i < 5; i++) {
  obj[arr1[i]] = arr2[i];
}
console.log(obj); */

/* let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };

let summKey = 0;
let summValue = 0;
let summ = 0;

for (let i in obj) {
  summKey += +i;
  summValue += +obj[i];
  summ = summKey / summValue;
}

console.log(summ); */

/* let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

let arr1 = [];
let arr2 = [];

for (let i in obj) {
  arr1.push(i);
  arr2.push(obj[i]);
}
console.log(arr1, arr2); */

/* let obj = {
  1: 125,
  2: 225,
  3: 128,
  4: 356,
  5: 145,
  6: 281,
  7: 452,
};

let newArray = [];

for (let i in obj) {
  let str = String(obj[i]);
  if (str[0] === "1" || str[0] === "2") {
    newArray.push(obj[i]);
  }
}
console.log(newArray); */

//=============== sfdgvdtgftgfgfgdsg ==========

/* let arr = ["a", "b", "c", "d", "e"];
let summ = {};
for (let i = 0; i < 5 ; i++) {

  summ [i+1]  = arr[i]

}
console.log(summ); */

/* let arr = ["a", "b", "c", "d", "e"];
let summ = {};
for (let i = 0; i < 5; i++) {

 summ [arr[i]] = i + 1;


}
console.log(summ); */

//==============================

/* let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];

let counter = 0;
for( let elem of arr){
  if(elem === 3){
    counter++
  }
}
console.log(counter); */

/* let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];

let counter1 = 0;
let counter2 = 0;
for (let elem of arr) {
  if (elem === 3) {
    counter1++;
  }
  if (elem === 2) {
    counter2++;
  }
}
console.log(counter1, counter2); */

/* let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let count = {};

for (let elem of arr) {
	if (count[elem] === undefined) {
		count[elem] = 1;
	} else {
		count[elem]++;
	}
}

console.log(count) */

/* let arr = [1, 2, 3, 4, 5];

for (let i = 1; i < arr.length; i++) {
	console.log(arr[i - 1] + arr[i]);
} */

/* let arr = [1, 2, 3, 4, 5];

for (let i = 1; i < arr.length; i++) {
	console.log(arr[i - 2] + arr[i] );
} */

/* let one = 0;
let two = 1;
for (let elem = 1; elem <= 10; elem++) {
  let curent = one + two;
  one = two;
  two = curent;
  console.log(curent);
  
} */

/* let str = '';
for (let elem = 2; elem <= 6; elem++) {
  str += 'x' + 'x' ;
  document.write(str + '<br>');
} */

/* for (let elem = 1; elem < 9; elem++) {
  for (let elem2 = 1; elem2 < 4; elem2++) {
    document.write(elem)
  }
  document.write('<br>')
} */

/* for (let elem = 1; elem <= 10; elem++) {
  for (let elem2 = 1; elem2 <= elem; elem2++) {
    document.write(elem);
  }
  document.write("<br>");
} */

/* for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    for (let j = 0; j < i; j++) {
      document.write(i);
    }
  }
  document.write("<br>");
} */

/* for (let i = 6; i > 1; i--) {
  let str = '';
  for (let j = 1; j < i; j++) {
    str += 'x';
    
  }
  document.write(str + '<br>')
} */

/* for (let i = 9; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    document.write(i);
  }

  document.write("<br>");
} */

/* let arr = [];
let str = "";

for (let elem = 1; elem < 11; elem++) {
  if (elem % 2 === 0) {
    for (let j = 0; j < elem; j++) {
      str += "x";
    }
    arr.push(str);
    str = "";
  }
}

console.log(arr); */

/* let arr = [];
for (let elem = 1; elem < 6; elem++) {
  let str = "";
  for (let elem2 = 0; elem2 < 5; elem2++) {
    str += elem;
  }
  arr.push(str);
}

console.log(arr); */

/* for (let elem = 1; elem < 101; elem++) {
  console.log(elem);
  
} */

/* for (let elem = 100; elem > 0; elem--) {
  console.log(elem);
  
} */

/* for (let elem = 1; elem < 101; elem++) {
  if (elem % 2 === 0) {
    console.log(elem);
    
  }
  
} */

/* for (let elem = 1; elem < 102; elem++) {
  if (elem % 2 !== 0) {
    console.log(elem);
  }
  
} */

/* let arr = [];

for (let elem = 0; elem < 10; elem++) {

  arr.push('x');
}
console.log(arr); */

/* let arr = [];
for (let elem = 1; elem < 11; elem++) {
  let str = "";

  arr.push(String(elem));
}
console.log(arr); */

/* let arr = [1, 432, 465, 43, 2, 6, 89, -12, -4,3,6,7];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] < 10) {
    console.log(arr[i]);
  }
} */

/* let arr = [1, 432, 465, 43, 2, 6, 5, 89, -12, -4, 3, 6, 7];

for (let elem = 0; elem < arr.length; elem++) {
  if (arr[elem] === 5) {
    console.log("yes");
  }
} */

/* let arr = [10, 10];
let summ = 0;

for (let elem = 0; elem < arr.length; elem++) {
  summ += arr[elem];
}
console.log(summ); */

/* let arr = [10, 10];
let summ = 0;

for (let elem = 0; elem < arr.length; elem++) {
  summ += arr[elem] * arr[elem] ;
  
}
console.log(summ);  */

/* let arr = [10, 10, 10, 10, 10];
let summ = 0;

for (let elem = 0; elem < arr.length; elem++) {
  summ += arr[elem] ;
}
let summ2 = summ / arr.length;

console.log(summ2); */


/* let fact = 1;
let num = 4;
for (let elem = 1; elem <= num; elem++) {
  fact = fact * elem;

}
console.log(fact); */

/* const arr = ['a', 'b', 'c', 'd', 'e'];
for(let elem of arr){
  console.log(elem);
} */


/* let arr = [1, 2, 3, 4, 5];
let summ = 0;
for(let elem of arr ){
  summ += elem;
}
console.log(summ); */


/* let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let summ = 0;
for(let key in obj){
  summ += obj[key]
  console.log(obj);
}
console.log(summ); */