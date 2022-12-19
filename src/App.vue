<script>
import ToDoItem from "./components/ToDoItem.vue";
import AddNewTodo from "./components/AddNewTodo.vue";
import { db } from "./db";

export default {
  components: {
    ToDoItem,
    AddNewTodo,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    handleNewItemCreated() {
      this.loadData();
    },
    async handleDeleteItem(id) {
      await db.todos.delete(id);
      this.loadData();
    },
    async handleUpdateItem(id, trueFalse) {
      await db.todos.update(id, {done: trueFalse});
    },
    async loadData() {
      this.todoItems = await db.todos.toArray();
    },
  },
  mounted() {
    console.log("Todo App loaded");
    this.loadData();
  },
};
</script>

<template>
  <main>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div style="text-align: center">
        <h1>Todo App</h1>
        <AddNewTodo @newItemCreated="handleNewItemCreated"></AddNewTodo>
      </div>
      <div v-for="(item, i) in todoItems" :key="i">
        <ToDoItem v-model="todoItems[i]" :id="todoItems[i].id" @updateItem="handleUpdateItem" @deleteItem="handleDeleteItem" />
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
