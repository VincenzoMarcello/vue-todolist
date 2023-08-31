const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [
        {
          text: "fare colazione",
          done: false,
        },
        {
          text: "andare in palestra",
          done: false,
        },
        {
          text: "portare fuori il cane",
          done: false,
        },
        {
          text: "vedere un film",
          done: false,
        },
      ],
      // # CREO UN OGGETTO PER AGGIUNGE
      // # IL TEXT OGNI VOLTA IN TODO
      newTask: {
        text: "",
        done: false,
      },
    };
  },

  methods: {
    // # METODO CHE ELIMINA IL TODO ASSOCIATO
    deleteTodo(index) {
      this.todoList.splice(index, 1);
    },

    // # METODO CHE AGGIUNGE UN TODO TRAMITE INPUT
    addNewTodo() {
      // ! FACCIAMO UNA COPIA LOCALE DELL'ARRAY
      // ! IN MODO CHE SCOLLEGHIAMO L'ARRAY ORIGINALE E ALLO
      // ! SCRIVERE NELL'INPUT NON SI MODIFICHI IL TODO GIA 'INSERITO
      const newTaskcopy = { ...this.newTask };

      // # AGGIUNGIAMO UN CONTROLLO SE LA RIGA E' VUOTA (== 0) BLOCCA
      // # L'AGGIUNTA DEL TODO
      if (newTaskcopy.text.length == 0) {
        return;
      }

      // # AGGIUNGO IL TODO ALL'ARRAY IN PRIMA POSIZIONE
      this.todoList.unshift(newTaskcopy);

      // # SVUOTO L'INPUT DOPO CHE HO AGGIUNTO IL TODO
      this.newTask.text = "";
    },
  },
}).mount("#app");
