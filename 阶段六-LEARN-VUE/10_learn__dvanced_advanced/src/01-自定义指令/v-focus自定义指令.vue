<template>
  <div class="Home">
    <!-- <input type="text" ref="inputRef"> -->
    <input type="text" v-focus>
  </div>

</template>
<!-- 法一 -->
<!-- <script>
export default {
  directives: {
    // 自定义指令名称 不用写v
    focus: {
      // 生命周期的函数
      mounted(el) {
        // console.log(el);
        el?.focus()
      }
    }
  }
}
</script> -->
<script setup>
// import useInput from "../hooks/useInput"
// const { inputRef } = useInput()
// 法二
// const vFocus = {
//   mounted(el) {
//     el?.focus()
//   }
// }
</script>

<style lang="less" scoped>

</style>
