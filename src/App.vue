<script>
import ToDoItem from "./components/ToDoItem.vue";
import ButtonNewTodo from "./components/ButtonNewTodo.vue";

export default {
  components: {
    ToDoItem,
    ButtonNewTodo,
  },
  data() {
    return {
      todoItems: [
        { text: "Hausaufgaben machen", done: false },
        { text: "Müll rausbringen", done: true },
      ],
    };
  },
  methods: {
    handleCreateNewTodoItem() {
      this.todoItems.unshift({ text: "new Todo", done: false });      
    },
  },
};
</script>

<template>
  <main>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div style="text-align: center">
        <h1>Todo App</h1>
        <ButtonNewTodo @createNewTodoItem="handleCreateNewTodoItem"></ButtonNewTodo>
      </div>
      <div v-for="(item, i) in todoItems" :key="i">
        <ToDoItem v-model="todoItems[i]" />
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto;
}

@media (min-width: 1024px) {
}
</style>
