var numeri = [1, 4, 2, 15, 120, 17, 3];
console.log(numeri);

var somma = 0;

for (var i = 1; i< numeri.length; i= i + 2) {
    somma += numeri[i];
}


console.log('la somma dei numeri messi in posizione dispari è',somma); 

/* var somma = posizioneDispari[0] + posizioneDispari[1] + posizioneDispari[2] + posizioneDispari[3];
console.log(somma); */
