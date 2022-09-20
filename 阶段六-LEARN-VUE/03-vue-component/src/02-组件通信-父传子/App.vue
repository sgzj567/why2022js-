<template>
  <!-- 展示why的个人信息 -->
  <!-- 加个:冒号就是js了  变成数字类型 "'19'"这个才是字符串类型 -->
  <show-info name="why" :age="18" :height="1.88" />
  <show-info name="kobe" :age="36" :height="1.98" address="广州市" />
  <!-- 莫有传值  使用默认值 传值的时候既可以是驼峰也可以杠 但是接收值的时候必须是驼峰-->
  <show-info :age="100" show-message="哈哈哈"></show-info>
</template>

<script>
import ShowInfo from './ShowInfo.vue';
export default {
  components: {
    ShowInfo,
  }
}
</script>

<style scoped>
</style>
