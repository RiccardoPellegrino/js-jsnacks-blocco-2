// ** Snack2 **
//     Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome. (10 persone)


let btn = document.getElementById("generatore");



btn.addEventListener("click", function () {
    let arrayInvitati = [];
    document.querySelector('#inventato').innerHTML = '';
    let arrayNomi = ["Riccardo", "Simone", "Stefano", "Mattia", "Stefania", "Michela", "Giulia","Manuel", "Selenia","Giancarlo"];
    let arrayCognomi = ["Rossi", "Ferrari", "Russo", "Bianchi", "Romano", "Gallo", "Costa","Bianchi","Pinoli","Franchi"];

    for (let i = 0; i < 10; i++) {
        
        let rand = Math.floor(Math.random() * arrayNomi.length);
        let nomeCasuale = arrayNomi[rand];
        console.log(nomeCasuale);



        let rand2 = Math.floor(Math.random() * arrayNomi.length);
        let cognomeCasuale = arrayCognomi[rand2];
        console.log(cognomeCasuale);


        arrayInvitati.push(nomeCasuale + ' ' + cognomeCasuale);

        console.log(arrayInvitati);
        let paragrafo = document.createElement('p');
        document.querySelector('#inventato').append(paragrafo);
        paragrafo.innerHTML = arrayInvitati[i];
    }
    arrayInvitati = [];
})
