## TRACCIA

Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

### MILESTONE 1

Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

### MILESTONE 2

Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.

### MILESTONE 3

Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

### Bonus:

1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

## SVOLGIMENTO

- Stampo all'interno di una lista HTML un item per ogni todo attraverso il ciclo v-for
- Usiamo un controllo che sbarra il testo in base alla proprietà done dei vari oggetti
- Creiamo un tasto che elimina il todo associato tramite una funzione
- Creiamo un oggetto newTask che ci servirà per collegarlo a un input
- Creiamo un input e un pulsante per aggiungere un nuovo todo
- Dichiariamo una nuova funzione per aggiungere un nuovo todo
- Aggiungiamo un controllo se l'input value è vuoto
