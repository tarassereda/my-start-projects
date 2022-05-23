/* document.onkeypress = function (event) {
    console.log(event);
    console.log(event.key);

    
} */

document.querySelector('.test').onkeypress = function (event) {
    console.log(event);
    if (event.keyCode < 48 || event.keyCode > 57) {
        console.log('не цифра');
        return false
        
    }
    
}