<template>
  <!-- counter 修改后的modelValue -->
  <div>Counter:{{ counter }}-{{ why }}</div>
  <button @click="changeCounter">修改counter</button>
  <button @click="changeWhy">修改why</button>
</template>

<script>

export default {
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    counter: {
      type: Number,
      default: 30,
    },
    why: {
      type: String,
      default: "hy"
    }
  },
  methods: {
    changeValue() {
      this.$emit("update:modelValue", 999)
    },
    changeCounter() {
      this.$emit("update:counter", 888)
    },
    changeWhy() {
      this.$emit("update:why", "zxk")
    }
  }
}
</script>

<style scoped>
</style>
