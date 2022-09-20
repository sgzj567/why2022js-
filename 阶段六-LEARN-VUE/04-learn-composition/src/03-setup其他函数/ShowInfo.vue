<template>
  <h2>ShowInfo:{{ info }}</h2>
  <!-- 不建议这样修改  违背单项数据流原则-->
  <button @click="info.name = 'kobe'">修改ShowInfo</button>
  <!-- 子组件中正常修改父组件的参数  先传事件  -->
  <button @click="changeInfo">正常修改ShowInfo</button>
  <hr>
  <h2>ShowInfo:{{ roInfo }}</h2>
  <!-- 这次不能修改因为readonly只支持单向的 -->
  <button @click="roInfo.name = 'John'">正常修改readOnlyShowRoInfo</button>

</template>

<script>

export default {
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    roInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["changeInfo"],
  setup(props, context) {
    function changeInfo() {
      context.emit("changeInfo", "kobe")
    }
    return {
      changeInfo
    }
  }
}
</script>

<style scoped>

</style>
