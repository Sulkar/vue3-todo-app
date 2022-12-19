<script>
import { db } from "../db";

export default {
  emits: ["newItemCreated"],
  data() {
    return {
      newItem: "",
      status: "",
    };
  },
  methods: {
    async addNewTodoItemDB() {
      if (this.newItem != "") {
        try {
          const id = await db.todos.add({
            text: this.newItem,
            done: false,
          });
          this.status = "Todo: " + this.newItem + " successfully added. Got id " + id;
          this.$emit("newItemCreated");
          this.newItem = "";
        } catch (error) {
          this.status = "Failed to add " + this.newItem + ": " + error;
        }
      }
    },
  },
};
</script>

<template>
  <div>
    <input type="text" :value="newItem" @input="(event) => (newItem = event.target.value)" />
    <button @click="addNewTodoItemDB">+</button>
  </div>
  <div>
    {{ status }}
  </div>
</template>

<style scoped>
div {
  margin-bottom: 10px;
}
input {
  font-size: 1.2em;
  text-align: center;
  margin-right: 10px;
}
button {
  font-size: 1.2em;
}
</style>
