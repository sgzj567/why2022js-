<template>
  <div class="add">
    <button @click="btnClick(1)">+1</button>
    <button @click="btnClick(3)">+3</button>
    <button @click="btnClick(5)">+5</button>
  </div>

</template>

<script>

export default {
  // 也可以传对象
  // emits: {
  //   add: function (count) {
  //     if (count <= 10) {
  //       return true
  //     }
  //     return false
  //   }
  // },
  // emits数组 传出所有的事件  方便查看
  emits: ["add"],
  methods: {
    btnClick(count) {
      // 传出事件别名 以及参数
      this.$emit("add", count)
    }
  }
}
</script>

<style scoped>
</style>
