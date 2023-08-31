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
    };
  },

  methods: {
    // # METODO CHE ELIMINA IL TODO ASSOCIATO
    deleteTodo(index) {
      this.todoList.splice(index, 1);
    },
  },
}).mount("#app");
