<template>
  <div class="order">
    <ul>
      <li>订单</li>
      <li>订单</li>
      <li>订单</li>
      <li>订单</li>
      <li>订单</li>
    </ul>
    <button @click="logout">退出登录</button>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function logout() {
  // 向服务器发送请求 返回token
  localStorage.removeItem("token")
  router.push("/home")
}
</script>

<style scoped>
</style>
