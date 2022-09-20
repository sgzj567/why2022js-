<template>
  <!-- modelValue是固定的 -->
  <div>Counter:{{ modelValue }}</div>
  <button @click="changeValue">修改modelValue</button>
</template>

<script>

export default {
  props: {
    modelValue: {
      type: Number,
      default: 0,
    }
  },
  methods: {
    changeValue() {
      // 发出事件
      this.$emit("update:modelValue", 999)
    }
  }
}
</script>

<style scoped>
</style>
