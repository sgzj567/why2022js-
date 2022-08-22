<template>
  <div class="home">
    <h3>我是{{ message.value }}</h3>
    <h5>name:{{ name }}</h5>
    <h5>age:{{ age }}</h5>
    <h5>message :{{ message.value }}</h5>
  </div>
</template>

<script>

export default {
  inject: ["name", "age", "message"]
}
</script>

<style scoped>
</style>
