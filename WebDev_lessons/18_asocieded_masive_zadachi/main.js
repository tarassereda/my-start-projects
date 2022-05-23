const man = {
    "name": "Alex",
    "age": 25,
    "id": 007,
    "sex": "male"
};

/* let a = 'name';
console.log(man[a]);
console.log(man.name);
console.log(man['name']); */

const man2 = {
  name: "Alex",
  age: 12,
  id: 007,
  sex: "male",
  year: function () {
    return 2022 - this.age;
  },
};

console.log(man2.year());

const m = {
  mas: [2, 34],
  summ: function () {
    let sum = 0;
    for (let i = 0; i < this.mas.length; i++) {
      sum = sum + this.mas[i];
    }
    return sum;
  },
};

console.log(m.summ());
