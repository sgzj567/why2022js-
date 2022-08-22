<template>
  <div class="app">
    <!-- 1.按钮 -->
    <app-header>
      <button>我在左边</button>
    </app-header>
    <!-- 2.超链接 -->
    <app-header message="我是标题">
      <a href="http://baidu.com">百度一下</a>
    </app-header>

    <!-- 3.引入图片 -->
    <app-header>
      <img src="@/img/Snipaste_2022-08-07_20-26-01.png" alt="">
    </app-header>

    <!-- 4.不传入插槽 -->
    <app-header></app-header>
  </div>
</template>

<script>
// import AppBody from './AppBody.vue';
// import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';
export default {
  components: {
    // AppBody,
    // AppFooter,
    AppHeader,
  },
}
</script>

<style scoped>
</style>
