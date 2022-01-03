/** Gestione lettere e timer */
/* Tempi */
let baseTimer = 2 * 60, // 2 minuti in secondi (tempo di default)
  effTime = baseTimer,
  timout = 0;

/* Elementi */
let estrattaLabel = document.getElementById("estratta"),
  listaAlfabeti = document.getElementById("alfabeto"),
  timerInput = document.getElementById("tempo"),
  audioS = document.getElementById("audioS"),
  audioE = document.getElementById("audioE");

/* Inserimento lista alfabeti */
listaAlfabeti.innerHTML = "";
for (let alfabeto in alfabeti)
  listaAlfabeti.innerHTML +=
    "<option value='" + alfabeto + "'>" + alfabeto + "</option>";

/* Gestione selezione alfabeto */
listaAlfabeti.addEventListener("change", (ev) => {
  datiApp._data.disponibili = alfabeti[listaAlfabeti.value];
});

/* Gestione selezione timer */
timerInput.value = "02:00"; // Impostazione timer base
timerInput.addEventListener("change", (ev) => {
  let tempi = timerInput.value.split(":");
  baseTimer = tempi[0] * 60 + tempi[1] * 1; // Minuti * 60 + Secondi = Totale in secodi
});

/* Componente VUE per la gestione degli elementi dinamici */
var datiApp = new Vue({
  el: "#dati",
  data: {
    disponibili: alfabeti[listaAlfabeti.value], // Lista lettere ancora da estrarre
    estratta: "Estrai", // Lettera estratta
    timer: "x:xx", // Tempo mancante
    fatte: [], // Lista lettere estratte
  },
});

/* Estrazione della lettera */
function estrai() {
  if (timout) {
    clearTimeout(timout); // Rimozione precedente timer (se esistente)
    timout = 0;
  }

  effTime = baseTimer; // Azzeramento timer
  if (datiApp._data.disponibili.length) { // Controllo disponibilità lettere
    let idx = Math.floor(
      (Math.random() * 1000) % datiApp._data.disponibili.length
    ); // Selezione casuale lettera in base al numero delle disponibili
    datiApp._data.estratta = datiApp._data.disponibili[idx]; // Visualizzazione a centro schermo
    datiApp._data.fatte.push(datiApp._data.disponibili[idx]); // Aggiunta nella lista delle fatte
    datiApp._data.disponibili.splice(idx, 1); // Rimozione dalla lista delle disponibili
    audioS.play(); // Avvio avviso sonoro
    timer(); // Avvio timer
  } else datiApp._data.estratta = "Terminato";
}

/* Gestione del timer */
function timer() {
  effTime = effTime - 1; // Rimozione di un secondo
  let min = effTime / 60, // Calcolo minuti, con virgola
    sec = Math.floor((min - Math.floor(min)) * 60); // Calcolo secondi
  min = Math.floor(min); // Rimozione virgola

  datiApp._data.timer = min + ":" + (sec < 10 ? "0" : "") + sec; // Visualizzazione scorrimento

  if (effTime) timout = setTimeout(timer, 1000); // Cotinuo timer
  else {
    datiApp._data.estratta = "Scaduto"; // Visualizzazione scadenza
    audioE.play(); // Avvio avviso sonoro
  }
}
