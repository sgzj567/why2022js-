<script setup>
import { ref } from 'vue';
import ShowInfo from './ShowInfo.vue';
// setup函数中的顶层模板会暴露给template中
const message = '你好!JavaScript'
let num = ref(0)
const increment = () => {
  num.value++
}
</script>

<template>
  <div>
    <ShowInfo></ShowInfo>
    <h2>{{ message }}</h2>
    <h2>{{ num }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>
<style scoped>

</style>
