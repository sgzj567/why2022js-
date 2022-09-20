<template>
  <h2>App</h2>
  <button @click="info = 'John'">修改info</button>
  <button @click="message.name = 'kobe'">修改message</button>
</template>

<script>
import { reactive, watch, ref } from 'vue';


export default {
  setup() {
    const info = ref("ldh")
    const message = reactive({
      name: "why",
      age: 19,
      height: 1.88
    });
    watch(info, (newValue, old) => {
      console.log(newValue, old);
    });
    watch(message, (newValue, oldValue) => {
      console.log(newValue, oldValue);
      console.log(newValue === oldValue);
    });
    // 获取普通对象 非Proxy对象
    watch(() => ({ ...message }), (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }, {
      // 默认深度侦听
      deep: true,
      immediate: true,
    })
    return {
      message, info
    }
  }
}
</script>

<style scoped>

</style>
