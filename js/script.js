// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

alert();
//l'utente sceglie se essere pari o dispari
var sceltaUtente = prompt("Pari o Dispari?");
//l'utente sceglie il numero da lanciare
var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
// con la funzione Math.random avremo il numero del computer
var numeroComputer = generaRandom(1,5);
console.log(numeroUtente);
console.log(numeroComputer);
// qui la variabile somma tra i 2 numeri che corrisponerdà alla relativa funzione
var somma = sommaNumeri(numeroUtente,numeroComputer);
console.log(somma);
// Verifichiamo se la somma sia pari o dispari attraverso la debita funzione
if (verifica(somma)){
  console.log('pari');
  somma = 'pari';
}
else {
  console.log('dispari');
  somma = 'dispari';
}
//converto somma in stringa e la confrontiamo con scelta utente e stabiliamo il vincitore, ovvero se l'esito corrisponde alle scelta iniziale dell'utente
if (sceltaUtente == somma){
  console.log("hai vinto");
} else {
  console.log("hai perso");
}

//funzioni
// Genera numero
function generaRandom(min, max){
   return Math.floor(Math.random() * 5) + 1  ;
 }
// somma
function sommaNumeri(n1,n2){
  var risultato = n1 + n2;
  return risultato;
}
// verifica pari o dispari
function verifica(somma){
  if ( somma % 2 == 0 ){
    return true;
  }
  return false;
}
