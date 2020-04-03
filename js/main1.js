console.log('ESERCIZIO 1');
var parola1 = prompt('Inserisci la prima parola').trim();
var parola2 = prompt('Inserisci la seconda parola').trim();

//Invocazione funzione
longerWord(parola1, parola2);


//Funzione
function longerWord (word1, word2) {
    if (word1.length > word2.length) {
        console.log(word1);
        
    } else if (word1.length < word2.length) {
        console.log(word2);
        
    } else {
        console.log('Le parole hanno la stessa lunghezza');
        
    }
}