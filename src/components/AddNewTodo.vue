<script>
export default {
  emits: ["createNewTodoItem"],
  data() {
    return {
      newItem: "",
    };
  },
  methods: {
    addNewTodoItem() {
      if (this.newItem != "") {
        this.$emit("createNewTodoItem", this.newItem);
        this.newItem = "";
      }
    },
  },
};
</script>

<template>
  <div>
    <input type="text" :value="newItem" @input="(event) => (newItem = event.target.value)" />
    <button @click="addNewTodoItem">+</button>
  </div>
</template>

<style scoped>
div{
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
