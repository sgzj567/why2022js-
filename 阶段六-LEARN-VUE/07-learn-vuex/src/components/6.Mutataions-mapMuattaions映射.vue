<template>
  <div class="home">
    <h2>当前计数:{{ $store.state.counter }}</h2>
    <h2>当前name:{{ $store.state.name }}</h2>
    <button @click="actionBtn">发起action</button>
    <button @click="actionChangeName">修改name</button>
  </div>
</template>
<script>
export default {
  methods: {
    actionBtn() {
      // action里面使用dispatch mutations 里面使用commit
      this.$store.dispatch("incrementAction")
    },
    actionChangeName() {
      this.$store.dispatch("actionChangeName", "john")
    }
  }
}
</script>
<script setup>
</script>

<style scoped>

</style>
