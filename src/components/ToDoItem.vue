<script>
export default {
  props: {
    modelValue: {
      type: Object,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(key, value) {
      this.$emit("update:modelValue", { ...this.modelValue, [key]: value });
    },
    handleClick(event) {
      console.log(event.target.innerHTML);
    },
  },
  watch: {},
};
</script>

<template>
  <div class="item">
    <h3 :class="modelValue.done ? 'done' : ''" :contenteditable="!modelValue.done" @input="updateValue('text', $event.target.innerHTML)" @click="handleClick">{{ modelValue.text }}</h3>
    <input type="checkbox" class="checkbox" v-model="modelValue.done" />
  </div>
</template>

<style scoped>
.item {
  display: flex;
}
.done {
  text-decoration: line-through;
}
.checkbox {
  margin-left: 20px;
}

h3 {
  font-size: 1.2rem;
}
</style>
