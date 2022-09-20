<template>
  <div class="home">
    <h2>counter:{{ $store.getters.doubleCounter }}</h2>
    <h2>totalAge:{{ $store.getters.total }}</h2>
    <h2>message:{{ $store.getters.message }}</h2>
    <h2>个人信息:{{ $store.getters.getFriendById(112) }}</h2>
  </div>
</template>

<script setup>

</script>

<style scoped>
</style>
