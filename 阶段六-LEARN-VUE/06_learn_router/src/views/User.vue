<template>
  <div class="user">
    <!-- 拿到参数id -->
    <h2>User:{{ $route.params.id }}</h2>
    <button @click="ClickBtn">向前</button>
  </div>
</template>

<script setup>
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
// 获取route跳转id useRoute保存着当前路由相关的值
const route = useRoute()
console.log("代码中", route.params.id);
// 这个很少用 因为它是从用户界面跳转的
onBeforeRouteUpdate((to, from) => {
  // 从那个页面来
  console.log("from", from.params.id);
  // 去哪个id
  console.log("to", to.params.id);
})
const router = useRouter()
function ClickBtn() {
  // 历史中前进
  router.forward()
}
</script>

<style scoped>

</style>
