/* Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
 */

// oggi
const ora = new Date();
console.log(ora);

// domani alle 9 30
const domani = new Date(2023, 8, 6);//data
domani.setHours(9, 55, 0, 0); //ora
console.log(domani);

// differenza di tempo in ms?
const tempo = domani - ora;
console.log(tempo);



let seconds = Math.floor(tempo / 1000);

const clock = setInterval(function () {
  document.querySelector(".countdown").innerHTML = seconds;

  if (seconds == 0) {
    clearInterval(clock);
    alert("ao");
  } else {
    seconds--;
  }
}, 1000);