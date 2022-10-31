<template>
  <div class="home">
    <h2>Counter模块的count:{{ $store.state.counterM.count }}</h2>
    <!-- 使用getters 时候直接写store不用写模块 派发事件的时候也不需要写模块名称  但是有了命名空间的时候必须按下面的写-->
    <h2>Counter模块的doubleCount:{{ $store.getters["counterM/doubleCount"] }}</h2>
    <button @click="changeCount">+1</button>
  </div>
</template>

<script setup>
// 告诉vuex发起网络请求
import { useStore } from 'vuex';
const store = useStore()
// 派发事件以及提交事件也不需要跟模块名称
// then是检查请求是否成功 但是 必须前面返回的是promise对象
function changeCount() {
  store.dispatch("counterM/incrementCountAction")
}

</script>

<style scoped>

</style>
