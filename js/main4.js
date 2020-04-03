var numeri = [1, 4, 2, 15, 120, 17, 3];
console.log(numeri);

var somma = 0;

//Risoluzione senza funzione

/*for (var i = 1; i< numeri.length; i= i + 2) {
    somma += numeri[i];
}


console.log('la somma dei numeri messi in posizione dispari è',somma); */


//Con funzione

//invocazione funzione in ciclo for
for (var i = 0; i < numeri.length; i++) {
    if (isDispari(i)) {
        somma += numeri[i];
    }
} 
console.log('La somma dei numeri messi in posizione dispari è', somma);



var ciao = 0;
for (var i = 0; i < numeri.length; i++) {
    if (isPari(i)) {
        ciao += numeri[i];
    }
}
console.log('La somma dei numeri messi in posizione pari è', ciao);
//Funzioni
function isDispari(num) {
    var ilnumeroinseritoedispari = num % 2 !== 0;
   //ritornerà true se il numero è dispari
   return ilnumeroinseritoedispari;
}

function isPari(num) {
    var pippo = num % 2 == 0;
    return pippo;
}