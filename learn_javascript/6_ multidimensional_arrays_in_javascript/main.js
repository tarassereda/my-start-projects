//Многомерные массивы в JavaScript

/* let arr = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
];

let summ = arr[2][2] + " " + arr[1][1] + " " + arr[2][0] + " и " + arr[0][0];
console.log(summ); */

/* let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let summ =
  arr[0][0] + arr[0][1] + arr[01][0] + arr[1][1] + arr[2][0] + arr[2][1];
console.log(summ); */


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
let summ =
  arr[0][0][0] +
  arr[0][0][1] +
  arr[0][1][0] +
  arr[0][1][1] +
  arr[1][0][0] +
  arr[1][0][1] +
  arr[1][1][0] +
  arr[1][1][1];
console.log(summ); */

/* let arr = [
  [1, 2, 3, [4, 5, [6, 7]]],
  [8, [9, 10]],
]; 

console.log(arr); */

/* let arr = [[1, 2, 3], [4, 5], [6]];
let summ = 0;
for (let subArr of arr) {
  for (let elem of subArr) {
    summ += elem;
  }
}

console.log(summ); */

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
let summ = 0;
for (let subArr of arr) {
  for (let elem of subArr) {
    for (let i of elem) {
      summ += i;
    }
  }
}

console.log(summ); */

/* let arr = [[1, 2, 3], [4, 5], [6]];
let summ = 0;
for (let elem1 = 0; elem1 < arr.length; elem1++) {
  for (let elem2 = 0; elem2 < arr[elem1].length; elem2++) {
    summ += arr[elem1][elem2];
  }
}
console.log(summ); */


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

let summ = 0;
for (let elem1 = 0; elem1 < arr.length; elem1++) {
  for (let elem2 = 0; elem2 < arr[elem1].length; elem2++) {
    for (let elem3 = 0; elem3 < arr[elem2].length; elem3++) {
      summ += arr[elem1][elem2][elem3];
    }
  }
}
console.log(summ); */

//Заполнение многомерных массивов JavaScript

/* let arr = [];
for (let elem1 = 0; elem1 < 3; elem1++) {
  arr[elem1] = [];
  for (let elem2 = 0; elem2 < 5; elem2++) {
    arr[elem1].push(elem2 + 1);
  }
}
console.log(arr); */

/* let arr = [];
for (let elem1 = 0; elem1 < 3; elem1++) {
  arr[elem1] = [];
  for (let elem2 = 0; elem2 < 4; elem2++) {
    arr[elem1].push("x");
  }
}
console.log(arr); */

/* let arr = [];
for (let elem1 = 0; elem1 < 3; elem1++) {
  arr[elem1] = [];
  for (let elem2 = 0; elem2 < 2; elem2++) {
    arr[elem1][elem2] = [];
    for (let elem3 = 1; elem3 <= 5; elem3++) {
      arr[elem1][elem2].push(elem3);
    }
  }
}
console.log(arr); */


/* let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = []
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr); */

/* let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}
console.log(arr); */

/* let arr = [];
let k = 1;
for (let elem1 = 0; elem1 < 4; elem1++) {
  arr[elem1] = [];
  for (let elem2 = 0; elem2 < 2; elem2++) {
    arr[elem1].push(k);
    k++;
  }
}
console.log(arr); */

/* let arr = [];
let k = 1;
for (let elem1 = 0; elem1 < 4; elem1++) {
  arr[elem1] = [];
  for (let elem2 = 0; elem2 < 3; elem2++) {
    k++;
      if (k % 2 == 0) {
        arr[elem1].push(k++);
      }
  }
}
console.log(arr); */

/* let arr = [];
let k = 1;
for (let elem1 = 0; elem1 < 2; elem1++) {
  arr[elem1] = [];
  for (let elem2 = 0; elem2 < 2; elem2++) {
    arr[elem1][elem2] = [];
    for (let elem3 = 0; elem3 < 2; elem3++) {
      arr[elem1][elem2].push(k);
      k++;
    }
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

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k++;
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
let summ = 0;

summ =
  obj.key1.key1 +
  obj.key1.key2 +
  obj.key1.key3 +
  obj.key2.key1 +
  obj.key2.key2 +
  obj.key2.key3 +
  obj.key3.key1 +
  obj.key3.key2 +
  obj.key3.key3;
console.log(summ); */


/* let obj = {
  1: {
    1: "a1",
    2: "a2",
    3: "a3",
  },
  2: {
    1: "b1",
    2: "b2",
    3: "b3",
  },
  3: {
    1: "c1",
    2: "c2",
    3: "c3",
  },
};

console.log(obj["2"]["2"] + " " + obj["3"]["1"]); */

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
let summ = 0;
summ =
  obj.key1.a +
  obj.key1.b +
  obj.key1.c.d +
  obj.key1.a +
  obj.key1.b +
  obj.key1.c.e +
  obj.key1.a +
  obj.key1.b +
  obj.key1.f +
  obj.key1.a +
  obj.key1.b +
  obj.key2.g +
  obj.key1.a +
  obj.key1.b +
  obj.key2.h;
console.log(summ); */

//Перебор многомерных объектов в JavaScript

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
  console.log(subObj);
  for (let subKey in subObj) {
    console.log(subObj[subKey]);
    summ += subObj[subKey];
  }
}
console.log(summ); */

/* let obj = {
  1: {
    1: {
      1: 111,
      2: 112,
      3: 113,
    },
    2: {
      1: 121,
      2: 122,
      3: 123,
    },
  },
  2: {
    1: {
      1: 211,
      2: 212,
      3: 213,
    },
    2: {
      1: 221,
      2: 222,
      3: 223,
    },
  },
  3: {
    1: {
      1: 311,
      2: 312,
      3: 313,
    },
    2: {
      1: 321,
      2: 322,
      3: 323,
    },
  },
};
let summ = 0;
for (let key1 in obj) {
  let subObj = obj[key1];
  for (let key2 in subObj) {
    let subKey1 = obj[key1][key2];
    for (let key3 in subKey1) {
      let subKey2 = obj[key1][key2][key3];
      summ += subKey2;
    }
  }
}
console.log(summ); */

/* let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};
console.log(students['group3'][0]); */

/* let data = {
  1: ["data11", "data12", "data13"],
  2: ["data21", "data22", "data23"],
  3: ["data31", "data32", "data33"],
  4: ["data41", "data42", "data43"],
};

for (let key in data) {
  for (let elem of data[key]) {
    console.log(elem);
  }
} */

/* let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];

for (let elem of data) {
  for (let key in elem) {
    let a = elem[key];
    console.log(a);
  }
} */

/* let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];

for (let elem of data) {
  for (let key1 in elem) {
    key1 = elem[key1];
    for (let key2 in key1) {
      key2 = key1[key2];
      console.log(key2);
    }
  }
} */

//Массив объектов в JavaScript
/* 
let employees = [
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
]; */

/* for (let user of employees) {
  console.log(user);
  let summ = user.name + " - " + user.salary;
  console.log(summ);
} */

/* let summ = 0;
for(let user of employees){
summ += user.salary;
}
console.log(summ); */


/* let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
let summ = 0;
for(let user of employees){
    if (user.age >= 30) {
        summ += user.salary;
    }
}
console.log(summ); */

//Ключи из переменных в многомерных структурах JavaScript

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
let month =  10;
let summ = 0;
summ = months['ru'][5];
console.log(summ); */


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

let year = "2019";
let month = "12";
let day = 30;
let summ = 0;
summ = affairs[year][month][day];
console.log(summ); */


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
let key3 = 'key4';
console.log(obj[key1][key3]); */

/* let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];

employees.push({
    name: 'Adam',
    salary: 5000,
    age: 35
})

console.log(employees); */

//Добавление элементов в многомерные объекты JavaScript

/* let affairs = {
	'2019-12-28': ['data11', 'data12', 'data13'],
	'2019-12-29': ['data21', 'data22', 'data23'],
	'2019-12-30': ['data31', 'data32', 'data33'],
}

affairs['2019-12-29'].push('data777');
affairs['2019-12-31'] = [];
affairs['2019-12-31'].push('data1', 'data2')
console.log(affairs); */

/* let students = {
  group1: {
    subgroup11: ["student111", "student112", "student113"],
    subgroup12: ["student121", "student122", "student123"],
  },
  group2: {
    subgroup21: ["student211", "student212", "student213"],
    subgroup22: ["student221", "student222", "student223"],
  },
  group3: {
    subgroup31: ["student311", "student312", "student313"],
    subgroup32: ["student321", "student322", "student323"],
  },
};

students["group1"]["subgroup11"].push("student Vasya");
students["group1"]["subgroup777"] = [];
students["group1"]["subgroup777"].push("Tolik");

students["group4"] = {};
students["group4"]["subgroup41"] = [];
students["group4"]["subgroup41"].push("Lisa", "Dima");
console.log(students); */
