<template>
  <div class="home">
    <h2>Home View</h2>
    <h2>count:{{ counterStore.count }}</h2>
    <h2>count:{{ count }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useCount from '../pinia/counter';
const counterStore = useCount()

// 结构之后就不能响应式了 解决方法 toRefs或者pinia里面自带的 storeRefs
const { count } = storeToRefs(counterStore)
function increment() {
  counterStore.count++
}
</script>

<style scoped>
</style>
