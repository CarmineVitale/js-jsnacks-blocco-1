console.log('esercizio 3');
var nomi = ['Michele' , 'Fabio', 'Roberto'];
var cognomi = ['Forghieri', 'Papagni', 'Marazzini'];

 var listaFalsa = [];
/*
 for (var i = 0; i < 5; i++) {
    var nomeNumber = Math.floor(Math.random() * ((nomi.length - 1) + 1) + 0);
    console.log(nomeNumber);
    
    var cognomeNumber = Math.floor(Math.random() * ((nomi.length - 1) + 1) + 0); 
    console.log(cognomeNumber);
    var newName = nomi[nomeNumber] + ' ' + cognomi[cognomeNumber];

    listaFalsa.push(newName);
}
console.log(listaFalsa);
*/
//Con funzione 

//invocazione funzione nel ciclo for
for (var i = 0; i < 5; i++) {
    listaFalsa.push(nomi[randomNumber(0, nomi.length)] + ' ' + cognomi[randomNumber(0, cognomi.length)] ); 
}
console.log(listaFalsa);



//Funzione
function randomNumber (min, max) {
    return Math.floor(Math.random()* (max - min)) + min;
}
