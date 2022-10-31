<template>
  <div class="home">
    <!-- 获取state的时候需要从module中获取  state.moduleName.xxx-->
    <template v-for="item in $store.state.home.banners" :key="item.width">
      <li> title:{{ item.title }} </li>
    </template>
  </div>
</template>
<script setup>
// 告诉vuex发起网络请求
import { useStore } from 'vuex';
const store = useStore()
// then是检查请求是否成功 但是 必须前面返回的是promise对象 async异步函数自动返回promise
store.dispatch("fetchHomeMultidataAction").then(res => {
  console.log("aaa");
})


</script>

<style scoped>

</style>
