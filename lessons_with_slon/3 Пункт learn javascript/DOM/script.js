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