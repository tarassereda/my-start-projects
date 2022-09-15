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

