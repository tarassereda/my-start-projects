// Метод Math.pow возводит число в заданную степень. Первым параметром передается число,
//вторым - в какую степень его возвести.

/* console.log(Math.pow(2,10)); */
/* console.log(Math.pow(3,10)); */

/* console.log(Math.sqrt(245)); */

/* console.log(Math.round(6.4)); */
/* console.log(Math.round(6.6)); */

//Метод Math.ceil производит округление дробного числа до целого всегда в большую сторону.
/* console.log(Math.ceil(3.00001)); */

//Метод Math.floor производит округление числа до целых всегда в меньшую сторону.
/* console.log(Math.floor(2.9999)); */

//Метод toFixed производит округление числа до указанного знака в дробной части.
/* let num = 1.1111;
console.log(num.toFixed(3)); */
//В следующем примере также оставлено только 3 знака в дробной части, однако последняя цифра увеличилась на 1, так как округление производится по правилам математики:
/* let num = 1.1119;
console.log(num.toFixed(3)); */

/* let num = 1.111;
console.log(num.toFixed()); */

/* let num = 1.1111;
console.log(num.toFixed(6)); */

//Метод toPrecision округляет число до заданного знака. В отличие от Math.round округление можно проводить не только в дробной части.
/* let num = 678.19324;
console.log(num.toPrecision(4)); */

/* let a = (Math.sqrt(379));
console.log(a.toFixed(), a.toFixed(2), a.toFixed(3)); */

/* let a = Math.sqrt(587);

let b = Math.ceil(a);
let c = Math.floor(a);

let obj = { flor: b, ceil: c };

console.log(obj); */

//Метод Math.max возвращает максимальное число из группы чисел, переданных в функцию.
/* console.log(Math.max(1, 5, 10, 34, 100)); */
/* console.log(Math.max(-1, 0, -20, -56, -100)); */

/* let arr = [1, 5, 10, 34, 100];
let max = Math.max.apply(null, arr);

console.log(max); */

/* console.log(Math.max(4, -2, 5, 19, -130, 0, 10)); */

//Метод Math.min возвращает минимальное число из группы чисел, переданных параметрами.
/* console.log(Math.min(40, 20, 42, 100, 67)); */
/* console.log(Math.min(-1, -100, -30, -25, 40)); */

/* let arr = [40, 20, 42, 100, 67];
let min = Math.min.apply(null, arr);

console.log(min); */

/* console.log(Math.min(4, -2, 5, 19, -130, 0, 10)); */

//Метод Math.random возвращает случайное дробное число от 0 до 1.
/* console.log(Math.random(1,100)); */

/*  let arr = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

 for (let i = 0; i < 10; i++) {
  arr[i] = getRandomInt(10, 100);
}
console.log(arr);  */


//Метод Math.abs возвращает модуль числа, то есть из отрицательного числа делает положительное.
/* console.log(Math.abs(-3)); */