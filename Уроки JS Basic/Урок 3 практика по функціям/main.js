/* const calc = (num1, num2) => {
  const summ = num1 + num2;
  console.log(summ);
  return summ;
};
const ret = calc(12, 12); */

/* const test = () => {
  alert('hello world')
}
test() */

/* const test = (first, last) => {
  console.log(`${first} ${last}`);

}
test('Taras', 'Sereda') */

/* function sayWelcome (userFirstName, userLastName) {
  console.log( `Добро пожаловать, ${userLastName} ${userFirstName} `);
}
// 'Иван' и 'Иванов' – это аргументы
sayWelcome('Иван', 'Иванов');
// 'Петр' и 'Петров' – это аргументы
sayWelcome('Петр', 'Петров'); */

// Но если значение является ссылкой, то его изменения будет видно за пределами функции:

/* const user = {
  firstname: "Петр",
  lastname: "Петров",
};
// объявляем функцию
function showUser(user) {
  user.firstname = "Толік";
}
// вызываем функцию
showUser(user);
// выводим значение свойства firstname в консоль
console.log(user.firstname); // Александр */

//Получение аргументов через arguments в основном используется, когда мы заранее не знаем их точное количество.

//Например, создадим функцию, которые будет подсчитывать сумму всех аргументов, являющихся числами:

/* function sum() {
  let sum = 0;
  // arguments.length - число аргументов
  for (let i = 0, length = arguments.length; i < length; i++) {
    if (typeof arguments[i] === 'number') {
      sum += arguments[i];
    }
  }

  console.log(sum);
}

sum(4, 20, 17, -6); // 35
sum('', 3, -5, 32, null); // 30 */

/* function test()  {
  let argsArr = Array.from(arguments);
  console.log(argsArr);
};
test('Даша', 'Маша', 'Нина'); // ["Даша", "Маша", "Нина"] */

/* // функция, которая будет выводить в консоль то, что ей передали в виде аргумента
function outputResult(result) {
  console.log(result);
}

// функция, которая принимает на вход 2 аргумента и колбэк
function sum(num1, num2, callback) {
  // вычислим сумму 2 значений и сохраним его в result
  const result = num1 + num2;

  // вызовем колбэк
  callback(result);
}

sum (5, 11, outputResult); */

//В JavaScript это возможно, т.к. функция в этом языке является значением. Её можно передавать в другие функции в виде аргументов. По сути, функция в JavaScript - это определённый тип объектов, который можно вызывать.

//Узнать является ли некоторый идентификатор функцией можно с помощью typeof:

/* function myfunc() {};

console.log(typeof myfunc); // function */

//С использованием return:

/* function sum(a, b) {
  // вернём в качестве результата сумму a + b
  return a + b;
}

// вызовем функцию и сохраним её результат в константу result
const result = sum(4, 3);
// выведем результат функции sum(4, 3) в консоль
console.log(result); // 7 */

/* function summ(a,b) {
  return a + b;
};
const result = summ(3, 5);
console.log(result); */

/* function counter(value) {
  if(value < 11){
    console.log(value);
    return counter( value + 1)
  }
  
}
counter(1) */

/* // объявление функции bodyBgColor
function bodyBgColor(color) {
  // если параметр color имеет в качестве значения строку, то установим цвет фона body
  if (typeof color === 'string') {
    document.body.style.backgroundColor = color;
  }

  // вернём в качестве результата текущий цвет фона body
  return getComputedStyle(document.body).backgroundColor;
}

// получим текущий цвет body и выведем его в консоль
console.log(bodyBgColor());

// установим новый цвет фона body
bodyBgColor('blue'); */

/* function bodyBgColor(color = '#009688') {
  document.body.style.backgroundColor = color;
}
bodyBgColor(); */

// при вызове функции без указания аргументов цвет фона body будет установлен, равным '#009688'

// при указании аргумента цвет фона body будет установлен в соответствии с его значением
//bodyBgColor('red'); // цвет фона будет равен red
