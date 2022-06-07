// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// select items

const img = document.querySelector(".person_img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const info = document.querySelector(".info");

const prewBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");
const randomBtn = document.querySelector(".random_btn");

// номенр елементу в масиві
let curentItem = 0;

// при завантаєенні сторінки завантажуєтс яз масива 1 юзер
window.addEventListener("DOMContentLoaded", function (params) {
  let item = reviews[curentItem];
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
  img.src = item.img;
});

// перебираєм всі остальні елементи з масива
function usReviews(person) {
  let item = reviews[curentItem];
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
  img.src = item.img;
};

//кнопка наступного елементу
nextBtn.addEventListener("click", function (params) {
  curentItem++;
  if (curentItem > reviews.length - 1) {
    curentItem = 0;
  }
  usReviews(curentItem);
});

 // кнопка передідущого елемента
prewBtn.addEventListener("click", function (params) {
  curentItem--;
  if (curentItem < 0) {
    curentItem = reviews.length - 1;
  }
  usReviews(curentItem);
});

// кнопка рандомного елемента
randomBtn.addEventListener("click", function (params) {
  curentItem = Math.floor(Math.random() * reviews.length);

  usReviews(curentItem);
});
