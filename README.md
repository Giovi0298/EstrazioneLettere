# EstrazioneLettere
Questo piccola pagina web serve per l'estrazione di lette e l'avvio automatico di un timer.

Principalmente è stata creata per il gioco NomiCoseCittà ma è utilizabile per qualsiasi altro gioco utilizzi l'estrazione di lettere combinato ad un timer.

## Struttura pagina
La pagina è divisa verticalmente in 5 parti:
* Zona delle azioni: divisa in 3 parti presenta il bottone dell'estrazione, una lista per la selezione dell'alfabeto e un box per la selezione del tempo
* Lista delle lettere da estrarre: varia in base all'alfabeto scelto. Passando da un alfabeto all'altro il precedente non si azzera ma rimane senza le lettere già usate
* Lettera estratta: elemento principale all'interno della pagina che mostra con quale lettera si sta giocando
* Timer: elemento secondario ma comunque di rilievo all'interno della pagina in quanto mostra il tempo di gioco rimanente
* Lista delle lettere usate: accumula tutte le lettere utilizzate durante il gioco provenineti da qualsiasi alfabeto. Passando da uno all'altro questa lista rimane quindi immutata e continua ad accumulare

## Proposta di modifiche
La gestione della struttura della pagina e del codice di gestiione degli elementi è aperta a qualsiasi tipo di modifica, l'unico "limite" è che non si utilizzino 100 mila elementi uno interno all'altro per creare la struttura desiderata.

A livello di CSS, non è il file .css a dover essere modificato, ma quello .scss, che fa da sorgente per la generazione automatica dell'altro. L'utilizzo del formato scss è stato scelto per semplificare la visione della posizione degli elementi all'interno del foglio di stile, grazie alla possibilità di gestirli come "struttura ad albero".