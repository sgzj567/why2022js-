<template>
  <div class="login">
    <h2>Login</h2>
    <button @click="login">登录</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function login() {
  // 向服务器发送请求 返回token
  localStorage.setItem("token", "why")
  router.push("/order")
}

</script>

<style scoped>
</style>
