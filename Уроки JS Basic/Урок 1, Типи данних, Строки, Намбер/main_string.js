/* String.prototype.startsWith()
Сводка
Метод startsWith() помогает определить, 
начинается ли строка с символов указанных в скобках, 
возвращая, соответственно, true или false. */

/* const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false */

//==================================
/* String.prototype.charAt() */
/* let sentence = "The quick brown fox jumps over the lazy dog.";
let index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`); */
// expected output: "The character at index 4 is q"
/* sentence = "Fox jumps over the lazy dog";
index = 5;
console.log(`The charecter at index ${index} is ${sentence.charAt(index)}`); */
// expected output: The charecter at index 5 is u
//======================================
/* String.prototype.concat ()
concat()Метод конкатенация строковых аргументов 
вызывающей строки и возвращает новую строку.
 */
/* const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2));
// expected output: "Hello World"
console.log(str2.concat(', ', str1));
// expected output: "World, Hello" */

//==================================

/* String.prototype.endsWith ()
endsWith()Способ определяет , является ли строка заканчивается 
героями указанной строки, возвращая trueили falseв зависимости от обстоятельств. */

/* const str1 = 'Cats are the best!';

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question';

console.log(str2.endsWith('?'));
// expected output: false */

//==================================
/* String.prototype.includes()
Метод includes() проверяет, содержит ли строка заданную подстроку, 
и возвращает, соответственно true или false. */

/* var str = 'Быть или не быть вот в чём вопрос.';

console.log(str.includes('Быть'));       // true
console.log(str.includes('вопрос'));    // true
console.log(str.includes('несуществующий')); // false
console.log(str.includes('Быть', 1));    // false
console.log(str.includes('БЫТЬ'));       // false */

//==================================

/* String.prototype.indexOf()
Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект String, 
на котором он был вызван, начиная с индекса fromIndex. Возвращает -1, если значение не найдено. */

/* 'Синий кит'.indexOf('Синий');   // вернёт  0
'Синий кит'.indexOf('Голубой');  // вернёт -1
'Синий кит'.indexOf('кит', 0);    // вернёт  6
'Синий кит'.indexOf('кит', 5);    // вернёт  6
'Синий кит'.indexOf('', 8);       // вернёт  8
'Синий кит'.indexOf('', 9);      // вернёт 9
'Синий кит'.indexOf('', 10);      // вернёт 9 */

//==================================

/* String.prototype.repeat()
Метод repeat() конструирует и возвращает новую строку, 
содержащую указанное количество соединённых вместе копий строки, на которой он был вызван. */

/* 'абв'.repeat(-1);   // RangeError
'абв'.repeat(0);    // ''
'абв'.repeat(1);    // 'абв'
'абв'.repeat(2);    // 'абвабв'
'абв'.repeat(3.5);  // 'абвабвабв' (количество будет преобразовано в целое число)
'абв'.repeat(1/0);  // RangeError

({ toString: () => 'абв', repeat: String.prototype.repeat }).repeat(2);
// 'абвабв' (метод repeat() является обобщённым методом) */

//==================================
/* String.prototype.slice()
Сводка
Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки. */

/* const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy" */

//==================================
/* String.prototype.split()
Сводка
Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой. */

/* const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."] */

//==================================

/* String.prototype.substring()
Сводка
Метод substring() возвращает подстроку строки между двумя индексами, 
или от одного индекса и до конца строки. */

/* var anyString = 'Mozilla';

// Отобразит 'Moz'
console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));

// Отобразит 'lla'
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// Отобразит 'Mozill'
console.log(anyString.substring(0, 6));

// Отобразит 'Mozilla'
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10)); */

//==================================
/* String.prototype.toLowerCase()
Сводка
Метод toLowerCase() возвращает значение строки, 
на которой он был вызван, преобразованное в нижний регистр. */

/* console.log('АЛФАВИТ'.toLowerCase()); // 'алфавит' */

//==================================

/* String.prototype.toUpperCase()
Сводка
Метод toUpperCase() возвращает значение строки, 
на которой он был вызван, преобразованное в верхний регистр. */

/* console.log('алфавит'.toUpperCase()); // 'АЛФАВИТ' */

//==================================

/* String.prototype.trim()
Сводка
Метод trim() удаляет пробельные символы с начала и конца строки. 
Пробельными символами в этом контексте считаются все собственно пробельные символы 
(пробел, табуляция, неразрывный пробел и прочие) и все символы конца строки (LF, CR и прочие). */

/* var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// Другой пример, в котором .trim() убирает пробельные символы только с одной стороны.

var orig = 'foo    ';
console.log(orig.trim()); // 'foo' */

//==================================


