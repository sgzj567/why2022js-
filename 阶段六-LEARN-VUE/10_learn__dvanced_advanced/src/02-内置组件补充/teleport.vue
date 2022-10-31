<template>
  <div class="app">
    <div class="hello">
      <p class="content">
        <!-- 将teleport 挂载到指定元素上 body上-->
        <teleport to="#abc">
          <hello-world></hello-world>
        </teleport>
        <teleport to="#abc">
          <h2>哈哈哈</h2>
        </teleport>
      </p>
    </div>

  </div>
</template>

<script setup>
import HelloWorld from './HelloWorld.vue';
</script>

<style lang="less" scoped>

</style>
