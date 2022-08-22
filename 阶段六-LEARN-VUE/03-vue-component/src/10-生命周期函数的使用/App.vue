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
  beforeCreate() {
    console.log("组件创建之前");
  },
  created() {
    console.log("created");
    console.log("组件被创建完成");
    console.log("发送网络请求");
    console.log("监听事件");
    console.log("监听watch事件");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    console.log('1.获取Dom');
    console.log('2.使用Dom');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUmount ");
  },
  unmounted() {
    console.log('卸载完成');
  }
}
</script>

<style scoped>
</style>
