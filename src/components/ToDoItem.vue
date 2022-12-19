<script>
import IconDelete from "./icons/IconDelete.vue";
export default {
  components: {
    IconDelete,
  },
  props: {
    modelValue: {
      type: Object,
    },
    id: Number,
  },
  emits: ["updateItem", "deleteItem"],
  methods: {
    updateItem() {
      this.$emit("updateItem", this.id, this.modelValue.done);
    },
    deleteItem() {
      this.$emit("deleteItem", this.id);
    },
  },
  watch: {},
};
</script>

<template>
  <div class="item">
    <input type="checkbox" class="checkbox" v-model="modelValue.done" @change="updateItem" />
    <h3 :class="modelValue.done ? 'done' : ''" @input="updateValue('text', $event.target.innerHTML)" @click="handleClick">{{ modelValue.text }}</h3>
    <div class="btnDelete" @click="deleteItem">
      <i><IconDelete /></i>
    </div>
  </div>
</template>

<style scoped>
i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 20px;
  height: 20px;
}
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
