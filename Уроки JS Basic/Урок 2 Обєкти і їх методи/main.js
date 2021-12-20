// Дістаємо значення ключа з обєкту

/* const obj = { k:'value'};
console.log(obj.k);
console.log(obj['k']); */

/* const obj = { k:'value',a:'vaaa',b:'vabbb',c:'vaccc'};
console.log(obj.k,obj.a,obj.b,obj.c); */

//===============================

/* Object.keys()
Возвращает массив, содержащий имена 
всех собственных перечислимых свойств переданного объекта. */

/* const obj = { k:'value',a:'vaaa',b:'vabbb',c:'vaccc'};
console.log(Object.keys(obj)); */

//===============================

/* Object.values()
Метод  Object.values() возвращает массив значений перечисляемых 
свойств объекта в том же порядке что и цикл for...in. 
Разница между циклом и методом в том, что цикл перечисляет 
свойства и из цепочки прототипов. */

/* const obj = { k:'value',a:'vaaa',b:'vabbb',c:'vaccc'};
console.log(Object.values(obj)); */

/* const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object1));
  // expected output: Array ["somestring", 42, false] */

//===============================

/* delete выражение
где результат вычисления выражения должен быть ссылкой 
на свойство (объекта), например:
delete object.property
delete object['property']
delete object[index]
delete property  */ // удаляет свойства глобального объекта, или,
// используя инструкцию with, свойства объекта, на который ссылается инструкция

/* const obj = {
  a: "somestring",
  b: 42,
  c: false,
};

delete obj.a;

console.log(obj); */

//===============================

//=============================== Praktik ===

/* const obj = { num1: 123, num2: 456, num3: 789 };
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj)); */

/* const obj2 = {str1:'string1', str2:'string2',str3:'string3'}
console.log(obj2);
console.log(Object.keys(obj2));
console.log(Object.values(obj2)); */

/* const obj3 = {num:123, str:'string', objIn:{keys:'value - hyaule'}, fn: () => {console.log('Куку!');}}
obj3.fn();  */

//============================== spret operatotr =========

/* let obj = {k:'v'}; */

/* obj.newKeyTwoo = 235;
delete obj.newKeyTwoo */

/* obj = {...obj, newK:'value'}; */

/* obj = {...obj,newK:'UPDATE'}; */

/* console.log(obj); */