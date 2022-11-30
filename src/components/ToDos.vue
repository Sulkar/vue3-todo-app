<script>
import ToDoItem from "./ToDoItem.vue";
import ToDoTest from "./ToDoTest.vue";
export default {
  components: {
    ToDoItem,
    ToDoTest,
  },
  data() {
    return {
      todoItems: [
        { id: 1, text: "Hausaufgaben machen", done: false },
        { id: 2, text: "Müll rausbringen", done: false },
      ],
      counter: 0,
    };
  },
  watch: {
    counter(newValue) {
      console.log(newValue);
    },
  },
};
</script>

<template>
  <div class="">
    <div>Test {{ counter }}</div>
    <div>Test2 {{ todoItems }}</div>
    <div v-for="(item, i) in todoItems" :key="i">
      <ToDoItem v-model="todoItems[i]" />
    </div>

    <ToDoTest v-model:counter="counter"></ToDoTest>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
}
</style>
