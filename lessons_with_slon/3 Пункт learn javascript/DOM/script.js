/* console.log(document.body.firstElementChild); */

/* let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
} */


/* for (let li of document.querySelectorAll("li")) {
  let title = li.lastChild.data;
  console.log(title);
} */

let div = document.createElement('div');
  div.className = "insertDiv";
  div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

  document.body.append(div);
  console.log(div);

  div.before( document.createElement('hr') );

  div.insertAdjacentHTML('beforebegin', '<p>Привет</p>');
  div.insertAdjacentHTML('afterend', '<p>Пока</p>');



  let data = {
    Рыбы: {
      форель: {},
      лосось: {},
    },

    Деревья: {
      Огромные: {
        секвойя: {},
        дуб: {},
      },
      Цветковые: {
        яблоня: {},
        магнолия: {},
      },
    },
  };

  function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
  }

  function createTreeText(obj) {
    // отдельная рекурсивная функция
    let li = "";
    let ul;
    for (let key in obj) {
      li += "<li>" + key + createTreeText(obj[key]) + "</li>";
    }
    if (li) {
      ul = "<ul>" + li + "</ul>";
    }
    return ul || "";
  }

  createTree(container, data);





  
  function createCalendar(elem, year, month) {
    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);

    let table =
      "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";

    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += "<td></td>";
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {
      table += "<td>" + d.getDate() + "</td>";

      if (getDay(d) % 7 == 6) {
        // вс, последний день - перевод строки
        table += "</tr><tr>";
      }

      d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += "<td></td>";
      }
    }

    // закрыть таблицу
    table += "</tr></table>";

    elem.innerHTML = table;
  }

  function getDay(date) {
    // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
  }

  createCalendar(calendar, 2022, 4);
