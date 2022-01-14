/* function argSum() {
  sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

argSum(45, 45, 34, 23); */

/* function argSum() {
  sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

let result = argSum(45, 45);
console.log(result); */

/* // declaration - обявлення функції
function fn(a, b) {
  return a + b;
};

//expression - визиваєтся в контексті другого вираженія
const fn2 = function fn2(a, b) {
  return a + b;
};

const result1 = fn(2, 2);
const result2 = fn2(2, 2);

console.log(result1);
console.log(result2); */

// Замиканія Приклад ========================

/* const a = 1;

function fn(b, c) {
  function fn2(d) {
    return a + b + c + d;
  };
  return fn2(1000);
};
console.log(fn(10, 100)); */

//============================== фільтрація масива ===============
/* function filter(array, someFn) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (someFn(array[i]) === true) {
      result.push(array[i]);
    }
  }
  return result;
}

const array = [2, 5, 7, 9, 90, 76, 4];

function someFn(number) {
  return number > 5;
}
const result = filter(array, someFn);
console.log(result); */

//===============================

/* function filter(array, someFn) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (someFn(array[i]) === true) {
      result.push(array[i]);
    }
  }
  return result;
};

const array = [2, 5, 7, 9, 90, 76, 4];
const result = filter(array, function (number) {
  return number > 5;
});
console.log(result); */

//=============================== замиканіє фільтрація, каріроавніє ============

/* function filter(array, someFn) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (someFn(array[i]) === true) {
      result.push(array[i]);
    }
  }
  return result;
}

const array = [2, 5, 7, 9, 90, 76, 4];

function greater(than) {
  return function (number) {
    return number > than;
  };
}
const result1 = filter(array, greater(2));
const result2 = filter(array, greater(7));
console.log(result1);
console.log(result2); */

//===============================

/* function filter(array, someFn) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (someFn(array[i]) === true) {
      result.push(array[i]);
    }
  }
  return result;
}

const array = [2, 5, 7, 9, 90, 76, 4];

function greater(than) {
  return function (number) {
    return number > than;
  };
}
for (let i = 1; i <= 10; i++) {
  let result = filter(array,greater(i));
  console.log(i,result);
  
} */

//============================== всплитіє ==============

/* function filter(array, someFn) {
  summ = [];
  for (let i = 0; i < array.length; i++) {
    if (someFn(array[i]) === true) {
      summ.push(array[i]);
    }
  }
  return summ;
}

const array = [2, 5, 7, 9, 90, 76, 4];
const result = filter(array, function (number) {
  return number > 5;
});
console.log(result); */
