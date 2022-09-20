<template>
  <div class="home">
    <h2>Home:{{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore()
function increment() {
  store.commit("increment")
}
</script>

<style scoped>
</style>
