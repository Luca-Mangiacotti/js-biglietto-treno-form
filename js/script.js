// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
// Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone.
// Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.


//DOM ELEMENTS
const formElm = document.getElementById('form')
const userNameElm = document.getElementById('userName')
const tripLenElm = document.getElementById('tripLen')
const userAge = document.getElementById('userAge')

//card
const nameOutElm = document.getElementById('nameOut')
const priceOut = document.getElementById('priceOut')
const cpUserElm = document.getElementById('cpUser')
const carrUserElm = document.getElementById('carrUser')


//VALUES CONTAINERS




//DOM EVENTS
formElm.addEventListener("submit", function(event){
    event.preventDefault()

    console.log(userNameElm.value, tripLenElm.value, userAge.value)
    
    const price = tripLenElm.value * 0.21 
    console.log(`il prezzo non scontato è: ${price.toFixed(2)}€` )
    priceOut.value = price.toFixed(2)
    priceOut.innerHTML = priceOut.value

     //DICHIARAZIONE VARIABILI PER SCONTO E PREZZO SCONTATO
     const discountYng = price * 0.2
     const discountSnr = price * 0.4
     let discountPrice
 
     //CONTROLLO SE IL PASSEGGERO ABBIA COMPIUTO LA MAGGIOR ETA'
     if(userAge.value === "Minorenne"){
 
         //CALCOLO DELLO SCONTO SU PASSEGGERO MINORENNE (-20%)
         console.log("lo sconto da applicare è di: ",discountYng.toFixed(2),"€" )
         discountPrice = price - discountYng
         console.log("il prezzo scontato è: ",discountPrice.toFixed(2),"€" )
 
     } 
     //CONTROLLO SE IL PASSEGGERO FACCIA PARTE DELLA CATEGORIA OVER 
     else if (userAge.value === "Over 65") {
 
         //CALCOLO DELLO SCONTO SU PASSEGGERO OVER (-40%)
         console.log("lo sconto da applicare è di: ",discountSnr.toFixed(2),"€" )
         discountPrice = price - discountSnr
         console.log("il prezzo scontato è: ",discountPrice.toFixed(2),"€" )
 
     }
     else{
         //COMUNICO AL PASSEGGERO IL PREZZO BASE DEL BIGLIETTO
         console.log("nessuno sconto qui!")
     }

})


