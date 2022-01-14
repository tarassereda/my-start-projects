// =============== Обєкти ==========

// =============== перебор обєкта =====
/* const obj = {
  name: "Taras",
  lastName: "Sereda",
  hobby: "Shooting",
};

for (let sort in obj) {
  console.log(sort, obj, obj[sort] );
} */

//================ видалення свойства з обєкту ====

/* const obj = {
  name: "Taras",
  lastName: "Sereda",
  hobby: "Shooting",
};

for (let sort in obj) {}  
 delete obj.hobby;
console.log(obj); */

// =============== звернення до масива в обєкті ============
/* const obj = {
  name: "Taras",
  lastName: "Sereda",
  hobby: ["Shooting", 'Game'],
};

for (let sort in obj) {}
console.log(obj.hobby[1]); */

// =============== звернення до функції в обєкті ============

/* const obj = {
  name: "Taras",
  lastName: "Sereda",
  hobby: function (a, b) {
    return a + b;
  },
};

for (let sort in obj) {
}
console.log(obj.hobby(2, 2)); */

// =============== перевірка на наявність свойства в обєкті метод 1 ============

/* const obj = {
  name: "Taras",
  lastName: "Sereda",
  hobby: function (a, b) {
    return a + b;
  },
};

let exist = "hobby" in obj;
if (exist) {
  console.log("Таке свойство єсть");
} else {
  console.log("Такого свойства немає");
} */

// =============== перевірка на наявність свойства в обєкті метод 2 ============
/* const obj = {
    name: "Taras",
    lastName: "Sereda",
    hobby: function (a, b) {
      return a + b;
    },
  };
  
  let exist = obj.hasOwnProperty('hobby');
  if (exist) {
    console.log("Таке свойство єсть");
  } else {
    console.log("Такого свойства немає");
  } */

//=============== Масиви ==========
/*   const array = ['hello', 'world'];
console.log(array); */

/*   const array = ['hello', 'world'];
  array.forEach(function(value){
      console.log(value);
  }) */
