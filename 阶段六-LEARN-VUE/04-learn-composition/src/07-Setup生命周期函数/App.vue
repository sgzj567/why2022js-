<template>
  <div>AppContent</div>
</template>

<script>
import { onMounted, onUpdated } from 'vue';
export default {
  // 但是beforeCreated created是没有的 合并到setup函数中了
  setup() {
    // 在setup函数中 调用别的生命周期函数需要调用
    onMounted(() => {
      console.log("onMounted");
    })
  }
}
</script>

<style lang="less" scoped>

</style>
