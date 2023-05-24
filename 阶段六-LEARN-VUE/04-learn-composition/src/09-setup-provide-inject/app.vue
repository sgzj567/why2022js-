<template>
  <div>
    {{ age }}{{ name }}
    <button @click="name = 'kobe'">修改name</button>
    <show-info></show-info>
  </div>
</template>

<script >
import { provide, ref } from 'vue';

import showInfo from './showInfo.vue'

export default {
  components: {
    showInfo
  },
  setup() {
    const name = ref("why")
    const age = ref(19)
    // 第一个接受的是要传出的key 第二个是要传出的值
    provide("name", name)
    provide("age", age)
    return {
      name, age
    }
  }
}

</script>

<style lang="less" scoped>

</style>
