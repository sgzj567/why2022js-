<template>
  <h2>info:{{ name }}-{{ age }}-{{ height }}</h2>
  <button @click="age++">+1</button>
  <button @click="height = '1.89'">height</button>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue'
export default {
  // setup中不可以使用this
  setup() {
    const info = reactive({
      name: "why",
      age: 19,
      height: 1.88
    })
    // 结构之后就失去响应式了  需要toRefs函数  也就是先把内部转化成ref再解构
    const { name, age } = toRefs(info)
    // 单独结构一个值 toRef
    const height = toRef(info, "height")
    return {
      name, age, height
    }
  }
}
</script>

<style scoped>

</style>
