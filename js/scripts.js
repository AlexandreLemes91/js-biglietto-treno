/* 
-chiedere km all'utente
-chiedere l'età
-prezzo biglietto
-creare if else per lo sconto
-stampare risultato
*/

//costante costo per km
var costoKm = 0.21;

//richieste distanza ed età
var distanza = parseInt( prompt("Gentile viaggiatore quanti Km deve percorrere?"));
console.log(distanza);
document.getElementById("distanza").innerHTML = distanza + "Km"
//TEST NUMERO
if( isNaN(distanza)){
    alert("Perfavore inserire solo valori numerici");
    distanza = parseInt( prompt("Gentile viaggiatore quanti Km deve percorrere?"));
    console.log(distanza);
    document.getElementById("distanza").innerHTML = distanza + "Km"
}

var età = parseInt( prompt("Quanti anni ha?"));
console.log(età);
document.getElementById("eta").innerHTML = età + " anni"
if( isNaN(età)){
    alert("Perfavore inserire solo valori numerici");
    età = parseInt( prompt("Quanti anni ha?"));
    console.log(età);
    document.getElementById("eta").innerHTML = età + " anni"
}

//prezzo biglietto
var prezzoBiglietto = (distanza * costoKm)  ;
console.log(prezzoBiglietto);

//SCONTI
var saleMinorenne = (prezzoBiglietto * 0.2);
console.log(saleMinorenne);
var saleOver = (prezzoBiglietto * 0.4);
console.log(saleOver);


//logica prezzo biglietto
if( età < 18 ){
    prezzoBiglietto -= saleMinorenne;
    console.log(prezzoBiglietto); 
}
else if( età > 64){
    prezzoBiglietto -= saleOver;
    console.log(prezzoBiglietto);
}

var finalPrice = prezzoBiglietto.toFixed(2);
console.log(finalPrice);
document.getElementById("prezzo").innerHTML = finalPrice + "€"


/* SE METTO LETTERE E NUMERI OTTENGO VALORI NUMERICI CON IL PARSEINT??? */