// **Snack1**
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let messaggio = document.querySelector('.messaggio');
let messaggio2 = document.querySelector('.messaggio2');
let btn = document.getElementById("bottone");

btn.addEventListener("click", function () {
    
    let numero = document.getElementById('numero').value;
    if (numero % 2 !==0) {
        console.log('Il numero insierito è il '+ numero);
        messaggio2.innerHTML = "Il numero inserito è " + numero;
        numero++;
        console.log('Lo abbiamo arrotondato per il numero pari piu vicino '+ numero);
        messaggio.innerHTML = "Lo abbiamo arrotondato per il numero pari piu vicino " + numero;
    } else {
        console.log('Il numero insierito è il '+ numero);
        messaggio.innerHTML = "Il numero da stampare è " + numero;
    }
    document.getElementById("numero").value ='';
})