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
      // 获取原生组件 一般是在获取组件高度 或者宽度
      // 不要用原生获取元素 refs是对象 里面含有我们注册过的所有组件实例对象  
      console.log(this.$refs.h2El);
      console.log(this.$refs.btnEl);
      // 调用子组件实例的方法
      console.log(this.$refs.ban.sum(23, 12));
      // 获取组件根元素 建议一个组件一个根
      console.log(this.$refs.ban.$el);//空的 多个根节点会获取到第一个节点 node 是空的
      // 获取多个根的下一个节点
      console.log(this.$refs.ban.$el.nextElementSibling);
      return
    }
  }
}
</script>
<style>
</style>

