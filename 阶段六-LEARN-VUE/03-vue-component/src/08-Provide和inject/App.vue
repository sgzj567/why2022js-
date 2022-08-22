<template>
  <app-header></app-header>
  <h2>{{ message }}</h2>
  <button @click="message = '猪头'">切换</button>
</template>

<script>
import { computed } from '@vue/reactivity';
import AppHeader from './AppHeader.vue';
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      names: ["kobe", "kii", "John", "zxk"],
      message: "习近平"
    }
  },
  // 非父子之间通信 provide inject
  provide() {
    return {
      name: "why",
      age: 18,
      height: 1.88,
      //如果用的是computed  而且computed是一个响应式的 返回的是ref对象 需要在 inject那边加.value
      message: computed(() => this.message),
    }
  }
}
</script>

<style scoped>
</style>
