<template>
  <div class="header">
    <h4 class="title">{{ title }}</h4>
    <div class="subTitle">{{ subtitle }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: "默认标题"
  },
  subtitle: {
    type: String,
    default: "默认标题"
  }
})
</script>

<style lang="less" scoped>
.header {
  margin-top: 45px;

  .subTitle {
    margin-top: 15px;
    font-size: 12px;
    font-size: normal;

  }
}
</style>
