/* let arr = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
];
console.log(arr[3][2] + "," + arr[1][1] + "," + arr[2][0] + "," + arr[0][0]);
 */

/* let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let summ1 = arr[0][0] + arr[0][1];
let summ2 = arr[1][0] + arr[1][1];
let summ3 = arr[2][0] + arr[2][1];

let summ4 = summ1 + summ2 + summ3;
console.log(summ4); */

/* let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];

let summ1 = arr[0][0][0] + arr[0][0][1];
let summ2 = arr[0][1][0] + arr[0][1][1]; 

let summ3 = arr[1][0][0] + arr[1][0][1];
let summ4 = arr[1][1][0] + arr[1][1][1];

let summAll = summ1 + summ2 + summ3 + summ4;


console.log(summAll); */

/* let arr = [[1, 2, 3, 4, 5], [6, 
	7, 8], [9, 10]]; 

for (let subArr of arr) {
	for (let elem of subArr) {
		console.log(elem);
	}
} */

// let arr = [[1, 2, 3], [4, 5], [6]];
// for (let i = 0; i < arr.length; i++) {
//     let summ = 0;
//     for (let j = 0 ; j < arr[i].length; j++) {
//        console.log(arr[i][j]);

//     }

// }

// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 5; j++) {
//     arr[i].push(j + 1);
//   }
// }

// console.log(arr);

/* let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 4; j++) {
    arr[i].push('x');
  }
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr); */

/* let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++
	}
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);
 */

/* let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++, k++) {
		arr[i][j] = k;
	}
}

console.log(arr); */

/* let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k++;
	}
}

console.log(arr); */

/* let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr); */

/* let obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};
let one = obj.key1.key1 + obj.key1.key2 + obj.key1.key3;
let two = obj.key2.key1 + obj.key2.key2 + obj.key2.key3;
let thre = obj.key3.key1 + obj.key3.key2 + obj.key3.key3;
let summ = one + two + thre;

console.log(summ); */

/* let obj = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}

console.log(obj['2']['2'], obj['3']['1']); */

/* let obj = {
  key1: {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4,
    },
    f: 5,
  },
  key2: {
    g: 6,
    h: 7,
  },
};

let one = obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e;
let two = obj.key2.g + obj.key2.h;
let summ = one + two;

console.log(summ); */

/* let obj = {
	a: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	b: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	c: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
} */

/* let obj = {
  1: {
    1: 11,
    2: 12,
    3: 13,
  },
  2: {
    1: 21,
    2: 22,
    3: 23,
  },
  3: {
    1: 24,
    2: 25,
    3: 26,
  },
};
let summ = 0;
for (let key in obj) {
  let subObj = obj[key];

  for (let subKey in subObj) {
    summ += subObj[subKey];
  }
}
console.log(summ); */

/* let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};

let lang = 'ru';
let mounth = 7;

console.log(months[lang][mounth]); */

/* let affairs = {
  2018: {
    11: {
      29: ["дело111", "дело112", "дело113"],
      30: ["дело121", "дело122", "дело123"],
    },
    12: {
      30: ["дело211", "дело212", "дело213"],
      31: ["дело221", "дело222", "дело223"],
    },
  },
  2019: {
    12: {
      29: ["дело311", "дело312", "дело313"],
      30: ["дело321", "дело322", "дело323"],
      31: ["дело331", "дело332", "дело333"],
    },
  },
};

let year = 2019;
let monts = 12;
let day = 30;

console.log(affairs[year][monts][day][2]); */

/* let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]); */

/* let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]); */

/* let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]); */

/* let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

console.log(employees[0].salary, employees[1].salary); */

/* let students = {
	'boys':  ['Коля', 'Вася', 'Петя'],
	'girls': ['Даша', 'Маша', 'Лена'],
};


console.log(students['boys'][1] + ', ' + students['girls'][2]); */

/* let users = [
	{
		name: 'name1',
		age: 31,
	},
	{
		name: 'name2',
		age: 32,
	},
	{
		name: 'name3',
		age: 33,
	},
];

for (let user of users) {
	document.write(user.name + ' , old ' + user.age + '<br>');
} */

/* let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for(let user of employees){
	document.write(user.name + ' ' + user.salary + '<br>')
} */

/* let employees = [
  {
    name: "name1",
    salary: 300,
  },
  {
    name: "name2",
    salary: 400,
  },
  {
    name: "name3",
    salary: 500,
  },
];

let summ = 0;

for (let user of employees) {
  summ += user.salary;
}
document.write(summ); */

/* let employees = [
  {
    name: "name1",
    salary: 300,
    age: 28,
  },
  {
    name: "name2",
    salary: 400,
    age: 29,
  },
  {
    name: "name3",
    salary: 500,
    age: 30,
  },
  {
    name: "name4",
    salary: 600,
    age: 31,
  },
  {
    name: "name5",
    salary: 700,
    age: 32,
  },
];

let summ = 0;

for (let user of employees) {
  if (user.age >= 30) {
    summ += user.salary;
  }
}
document.write(summ); */

/* let employees = [
  {
    name: "name1",
    salary: 300,
    dismissed: false,
  },
  {
    name: "name2",
    salary: 400,
    dismissed: true,
  },
  {
    name: "name3",
    salary: 500,
    dismissed: false,
  },
  {
    name: "name4",
    salary: 600,
    dismissed: true,
  },
  {
    name: "name5",
    salary: 700,
    dismissed: false,
  },
];

for (let user of employees) {
  if (user.dismissed === false) {
    document.write(user.name + ", " + user.salary + "<br>");
  }
} */

/* let students = {
  group1: ["student11", "student12", "student13"],
  group2: ["student21", "student22", "student23"],
  group3: ["student31", "student32"],
};
for (let group in students) {
  for (let name of students[group]) {
    console.log(name);
  }
} */

/* let data = {
  1: ["data11", "data12", "data13"],
  2: ["data21", "data22", "data23"],
  3: ["data31", "data32", "data33", "data34", "data35"],
  4: ["data41", "data42"],
};


for( let key in data){
	for(let name of data[key]){
		console.log(name);
	}
} */

/* let data = [
  {
    1: "data11",
    2: "data12",
    3: "data13",
    4: "data14",
  },
  {
    1: "data21",
    2: "data22",
    3: "data33",
  },
  {
    1: "data31",
    2: "data32",
  },
];

for (let i = 0; i < data.length; i++) {
  for (let key in data[i]) {
    console.log(data[i][key]);
  }
} */

/* let data = [
  {
    1: ["data111", "data112", "data113"],
    2: ["data121", "data122", "data123"],
  },
  {
    1: ["data211", "data212", "data213"],
    2: ["data221", "data222", "data223", "data224"],
    3: ["data231", "data232", "data233", "data234", "data235"],
  },
  {
    1: ["data411", "data412", "data413"],
    2: ["data421"],
  },
];

for (let i = 0; i < data.length; i++) {
  for (let key in data[i]) {
    for (let info of data[i][key]) {
      console.log(info);
    }
  }
} */

//С помощью вложенных циклов выведите на экран все строки с данными.

