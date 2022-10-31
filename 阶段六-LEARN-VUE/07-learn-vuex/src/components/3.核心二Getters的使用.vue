<template>
  <div class="home">
    <h2>counter:{{ $store.getters.doubleCounter }}</h2>
    <h2>totalAge:{{ $store.getters.total }}</h2>
    <h2>message:{{ $store.getters.message }}</h2>
    <!-- getters不用写括号就可以调用  这里写括号是调用返回函数并且传递参数 -->
    <h2>个人信息:{{ $store.getters.getFriendById(112) }}</h2>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
