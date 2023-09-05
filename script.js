

// Variabile con data finale
let finalDate = new Date('09/06/2023 9:30:00');
//console.log(finalDate);
document.getElementById('title').innerHTML = ('Tempo mancante a ' + finalDate);
// Variabile associata al div
let timeRemainingDiv = document.getElementById('timeRemaining');

setInterval(function () {

    // Varabile con data attuale
    let now = new Date();
    
    // Tempo rimanente
    let timeRemaining = finalDate-now;

    if (timeRemaining > 0) {
        
        // Converto il tempo rimanente in giorni, minuti, etc
        let days = Math.floor(timeRemaining / (1000 * 60 * 60 *24));
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / (1000));
        
        // Creo stringa da stampare
        let timeRemainingString = (days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's');
        
        //console.log(now);
        //console.log(timeRemainingString);
    
        // Stampa in pagina
        timeRemainingDiv.innerHTML = timeRemainingString;

    } else {

        timeRemainingDiv.innerHTML = 'Tempo scaduto';

    }
    
}, 1000);

