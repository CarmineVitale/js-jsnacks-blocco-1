var numeri = [1, 4, 2, 15, 120, 17, 3];
console.log(numeri);

var posizioneDispari = [];

for (var i = 0; i< numeri.length; i= i + 2) {
    posizioneDispari.push(numeri[i])
}
console.log(posizioneDispari);

for (var i = 0; i < posizioneDispari.length ; i++) {
    var somma = 0;
    somma += posizioneDispari[i];
}
console.log('la somma dei numeri messi in posizione dispari è',somma); 




/* var somma = posizioneDispari[0] + posizioneDispari[1] + posizioneDispari[2] + posizioneDispari[3];
console.log(somma); */
