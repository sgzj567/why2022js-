<template>
  <h2>我是App</h2>
  <button @click="isShow = !isShow">是否显示body</button>
  <body-app v-if="isShow"></body-app>

</template>

<script>
import BodyApp from './Body.vue';
export default {
  data() {
    return {
      isShow: "true"
    }
  },
  components: {
    BodyApp,
  },
  // 生命周期函数就是钩子函数 是vue源码调用的 不是组件调用的
  beforeCreate() {
    console.log("1.组件创建之前");
    console.log("--------");
  },
  created() {
    console.log("2.created");
    console.log("组件被创建完成");
    console.log("发送网络请求");
    console.log("监听事件");
    console.log("监听watch事件");
    console.log("--------");
  },
  // 组件template准备被挂载 
  beforeMount() {
    console.log("3.beforeMount");
    console.log("--------");
  },
  mounted() {
    // 此时已经挂载了 所以在这里获取dom 虚拟dom 真实dom 界面看到div等元素
    console.log("4.mounted");
    console.log('1.获取Dom');
    console.log('2.使用Dom');
    console.log("--------");
  },
  beforeUpdate() {
    console.log('5.beforeUpdate');
    console.log("--------");
  },
  updated() {
    console.log("6.updated");
    console.log("--------");
  },
  beforeUnmount() {
    console.log("7.beforeUmount ");
    console.log("--------");
  },
  unmounted() {
    console.log("8.unmounted");
    console.log("卸载完成");
  }
}
</script>

<style scoped>
</style>
