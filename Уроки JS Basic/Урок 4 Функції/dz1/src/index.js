/* ДЗ 1 - Функции */

/*
 Задание 1:

 Функция должна принимать один аргумент и возвращать его
 */
 function returnFirstArgument(arg) {
    return arg;
  }
  
  /*
   Задание 2:
  
   Функция должна принимать два аргумента и возвращать сумму переданных значений
   Значение по умолчанию второго аргумента должно быть 100
   */
  function defaultParameterValue(a, b = 100) {
    return a + b;
  }
  
  /*
   Задание 3:
  
   Функция должна возвращать все переданные в нее аргументы в виде массива
   Количество переданных аргументов заранее неизвестно
   */
  function returnArgumentsArray() {
    const args = [];
    for (let i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    return args;
  }
  
  /*
   Задание 4:
  
   Функция должна принимать другую функцию и возвращать результат вызова переданной функции
   */
  function returnFnResult(fn) {
    const result = fn();
    return result;
  }
  function fn() {}
  
  /*
   Задание 5:
  
   Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
   При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
   */
  function returnCounter(num = 0) {
      let c = num;
      return function() {
        return ++c;
    }
  }
  
  /*
   Задание 6 *:
  
   Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
   Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
   */
  function bindFunction(fn) {
      
  
  }
  
  
  export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction,
  };
