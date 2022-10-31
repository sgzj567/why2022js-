<template>
  <div class="Home">
    <div>
      <button @click="isShow=false">隐藏</button>
      <button @click="counter++">加一</button>
      <h2 v-if="isShow" v-why>当前计数{{counter}}</h2>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
const isShow = ref(true)
const counter = ref(0)
const vWhy = {
  // 七个周期
  created() {
    console.log("created");
  },
  beforeMount() { console.log("beforeMount"); },
  mounted() { console.log("mounted"); },
  beforeUpdate() { console.log("beforeUpdate"); },
  updated() { console.log("Updated"); },
  beforeUnmount() { console.log("beforeMount"); },
  unmounted() { console.log("umounted"); }

}
</script>

<style lang="less" scoped>

</style>
