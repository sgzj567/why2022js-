<template>
  <div class="app">
    <h2>App当前计数:{{ $store.state.counter }}</h2>
    <hr>
    <home></home>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
// const counter = ref(100)
// import Home from './components/1-核心一State的基本使用.vue'
// import Home from './components/2.核心一State-mapState的使用.vue'
// import Home from './components/3.核心二Getters的使用.vue'
// import HomeVue from './components/Home .vue';
import Home from './components/Home.vue';
</script>

<style scoped>
</style>
