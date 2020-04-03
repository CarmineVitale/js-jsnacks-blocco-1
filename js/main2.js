var numero = parseInt(prompt('Inserisci un numero'));


//invocazione funzione
printNumber(numero);
//Funzione
function printNumber (num) {
    if (num % 2 == 0) {
        console.log(num);
} else console.log(num + 1);

}
