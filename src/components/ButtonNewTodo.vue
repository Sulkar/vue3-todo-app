<script>
export default {
  emits: ["createNewTodoItem"],
  methods: {
    addNewTodoItem() {
      this.$emit("createNewTodoItem");
    },
  },
};
</script>

<template>
  <div>
    <button @click="addNewTodoItem">+</button>
  </div>
</template>
