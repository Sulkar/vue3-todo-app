<script>
export default {
  props: {
    modelValue: {
      type: Object,
    },
    index: Number,
  },
  emits: ["update:modelValue", "deleteItem"],
  methods: {
    updateValue(key, value) {
      this.$emit("update:modelValue", { ...this.modelValue, [key]: value });
    },
    deleteItem() {
      this.$emit("deleteItem", this.index);
    },
  },
  watch: {},
};
</script>

<template>
  <div class="item">
    <input type="checkbox" class="checkbox" v-model="modelValue.done" />
    <h3 :class="modelValue.done ? 'done' : ''" @input="updateValue('text', $event.target.innerHTML)" @click="handleClick">{{ modelValue.text }}</h3>
    <div class="btnDelete" @click="deleteItem">delete</div>
  </div>
</template>

<style scoped>
.btnDelete {
  cursor: pointer;
  color: orangered;
  margin-left: 20px;
}
.item {
  display: flex;
  align-items: center;
}

.done {
  text-decoration: line-through;
}
.checkbox {
}

h3 {
  margin-left: 5px;
  font-size: 1.2rem;
}
</style>
