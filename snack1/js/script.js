// **Snack1**
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let messaggio = document.querySelector('.messaggio');
let btn = document.getElementById("bottone");

btn.addEventListener("click", function () {
    
    let numero = document.getElementById('numero').value;
    if (numero % 2 !==0) {
        numero++;
        console.log('Il numero insierito è il '+ numero);
        messaggio.innerHTML = "Il numero da stampare è " + numero;
    } else {
        console.log('Il numero insierito è il '+ numero);
        messaggio.innerHTML = "Il numero da stampare è " + numero;
    }
    document.getElementById("numero").value ='';
})