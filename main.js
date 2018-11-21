// testo e una serie di parole da censurare.
// xxx al posto delle parole censurate.
// Stampa un "badword index" calcolato come il numero di parole censurate su il numero di parole totali

//creo una variabile con il testo
//creo un array con le parole censurate
//creo una variabile che mi ritorna la quantità di parole all'interno dell'array
//Fino a quando ritorna true: ad ogni ciclo diminuisce di uno
//creo un espressione regolare che al suo interno unisce l'array
//Uso replace che riceve l'espressione regolare con quello che sostituisce
var testo = "Lorem ipsum dolor smit";
var paroleCensurate = ['ipsum','smit'];
var numeroParoleCensurate = paroleCensurate.length;

while(numeroParoleCensurate--) {
  if (testo.indexOf(paroleCensurate[numeroParoleCensurate])!=-1) {
     //indexOf guarda a che posizione si trova paroleCensurate
    testo = testo.replace(new RegExp(paroleCensurate[numeroParoleCensurate]), "xxx");
      // replace non accetta come parametro un array
      // con RegExp(espressione regolare) per inserire l'array delle parole censurate
   }
}
document.write(testo)
