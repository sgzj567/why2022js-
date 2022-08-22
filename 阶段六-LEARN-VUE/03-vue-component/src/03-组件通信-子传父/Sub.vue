<template>
  <div class="sub">
    <button @click="btnClick(1)">-1</button>
    <button @click="btnClick(3)">-3</button>
    <button @click="btnClick(5)">-5</button>
  </div>

</template>

<script>

export default {
  methods: {
    btnClick(count) {
      // 传出事件别名 以及参数
      this.$emit("sub", count)
    }
  }
}
</script>

<style scoped>
</style>
