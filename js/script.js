// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// Useremo la funzione Math.random per generare i nostri numeri da 1 a 5, con floor arrotonderemo
var sceltaUtente = prompt("Pari o Dispari?");
var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
var numeroComputer = generaRandom(1,5);
console.log(numeroUtente);
console.log(numeroComputer);

var somma = sommaNumeri(numeroUtente,numeroComputer);
console.log(somma);



//funzioni
// Genera numero
function generaRandom(min, max){
   return Math.floor(Math.random() * 5) + 1  ;
 }
// somma
function sommaNumeri(n1,n2){
  var risultato = n1 + n2;
  return risultato; //ultima istruzione da inserire
}
