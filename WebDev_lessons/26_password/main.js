/* document.querySelector(".test").onkeypress = function (event) {
  //console.log(event);
  let str = this.value;
  console.log(str);
  //return false
}; */

let str = '';
document.querySelector(".test").onkeypress = function (event) {
    console.log(event);
    str = str + event.key;
    console.log(str);
    return false
  };
