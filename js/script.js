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

  methods: {},
}).mount("#app");
