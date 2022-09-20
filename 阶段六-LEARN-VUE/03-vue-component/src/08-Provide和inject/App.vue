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
      message: "狗头习"
    }
  },
  // 非父子之间通信 provide inject
  provide() {
    return {
      name: "why",
      age: 18,
      height: 1.88,
      //如果想要传送data中的数据 要用的是provide函数  使用computed  而且computed是一个响应式的 返回的是ref对象 需要在 inject那边加.value
      message: computed(() => this.message),
    }
  }
}
</script>

<style scoped>
</style>
