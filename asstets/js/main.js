/* Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
 */


let seconds = 10;

const clock = setInterval(function () {
  document.querySelector(".countdown").innerHTML = seconds;

  if (seconds == 0) {
    clearInterval(clock);
    alert("Buon anno!");
  } else {
    seconds--;
  }
}, 1000);