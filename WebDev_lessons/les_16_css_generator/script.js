 document.getElementById('r1').oninput = cssGenerator;
function cssGenerator () {
    let divTest = document.getElementById('test');
    let out = document.getElementById('out');
/*     console.log(this.value); */
    divTest.style.borderRadius = this.value + 'px';
    out.innerHTML = '-webkit-dorder-radius: '+this.value +'px;\n'; 
    out.innerHTML += 'dorder-radius: ' +this.value +'px'; 


}