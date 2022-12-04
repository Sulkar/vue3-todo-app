<script>
import ToDoItem from "./components/ToDoItem.vue";
import AddNewTodo from "./components/AddNewTodo.vue";

export default {
  components: {
    ToDoItem,
    AddNewTodo,
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
    handleCreateNewTodoItem(newItem) {
      this.todoItems.unshift({ text: newItem, done: false });
    },
    handleDeleteItem(index) {
      this.todoItems.splice(index, 1);
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
        <AddNewTodo @createNewTodoItem="handleCreateNewTodoItem"></AddNewTodo>
      </div>
      <div v-for="(item, i) in todoItems" :key="i">
        <ToDoItem v-model="todoItems[i]" :index="i" @deleteItem="handleDeleteItem" />
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
