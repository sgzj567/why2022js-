<template>
  <h2 ref="h2El" :style="{ color: isColor }">我是boy</h2>
  <button ref="btnEl" @click="changeColor">切换颜色</button>
  <banner ref="ban"></banner>
</template>

<script>
import banner from './Banner.vue';
export default {
  components: {
    banner,
  },
  data() {
    return {
      isColor: "red",
    }
  },
  methods: {
    changeColor() {
      if (this.isColor === "red") {
        this.isColor = "aqua";
      } else {
        this.isColor = "red"
      }
      // 不要用原生获取元素
      console.log(this.$refs.h2El);
      console.log(this.$refs.btnEl);
      // 调用子组件实例的方法
      console.log(this.$refs.ban.sum(23, 12));
      // 获取组件根元素 建议一个组件一个根
      console.log(this.$refs.ban.$el);
      return
    }
  }
}
</script>

<style scoped>
</style>
