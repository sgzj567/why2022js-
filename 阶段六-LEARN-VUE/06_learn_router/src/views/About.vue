<template>
  <div class="about">
    <!-- 获取传去的参数 -->
    <h2>about:{{ $route.query }}</h2>
    <button @click="ClickBtn">返回</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
function ClickBtn() {
  router.back()
}
</script>

<style scoped>
</style>
