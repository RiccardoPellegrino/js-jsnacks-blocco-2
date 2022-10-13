// **Snack4 (Bonus)**
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

let arrayDue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayUno = [1, 2, 3, 4, 5,];

if (arrayUno.length > arrayDue.length) {
    let differenza = (arrayUno.length) - (arrayDue.length);

    for (let i = 0; i < differenza; i++) {
        let numeroCasuale = (Math.round(Math.random() * 8) + 1);
        arrayDue.push(numeroCasuale);
        console.log("Array due "+arrayDue);
    }
} else if (arrayDue.length > arrayUno.length) {

    let differenza = (arrayDue.length) - (arrayUno.length);
    for (let i = 0; i < differenza; i++) {
        let numeroCasuale = (Math.round(Math.random() * 8) + 1);
        arrayUno.push(numeroCasuale);
        console.log("Array uno "+arrayUno);
    }

} else {
    console.log("I due array sono della stessa dimensione")
}