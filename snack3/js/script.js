// **Snack3**
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

const array=[1, 2, 3, 4, 5, 6, 7, 8, 9];
let showArray = document.querySelector('.showArray')
let messaggio = document.querySelector('.messaggio');

let somma=0;

for(let i=0; i<array.length; i++){
    
    if(i % 2 !=0){
        somma = somma + array[i];
    }
}
console.log('La somma di tutti i numeri in posizione dispari è '+somma);
messaggio.innerHTML = 'La somma di tutti i numeri in posizione dispari è '+somma;
showArray.innerHTML = 'L array di riferimento è : ' +array.toString();