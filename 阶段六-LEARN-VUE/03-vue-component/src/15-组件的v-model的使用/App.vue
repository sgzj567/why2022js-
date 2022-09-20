<template>
  <!-- <counter v-model="AppCounter"></counter> -->
  <!-- 相等 value数据的绑定 事件的监听 -->
  <counter :modelValue="AppCounter" @update:modelValue="AppCounter = $event"></counter>
  <hr>
  <!-- 自定义v-model事件名称 -->
  <counter2 v-model:counter="appCounter" @update:counter="appCounter = $event" v-model:why="whyCounter"
    @update:why="whyCounter = $event"></counter2>
</template>

<script>
import Counter from './Counter.vue';
import Counter2 from './Counter2.vue';
export default {
  data() {
    return {
      AppCounter: 10,
      appCounter: 20,
      whyCounter: "John"
    }
  },
  components: {
    Counter,
    Counter2,

  }
}
</script>

<style scoped>
</style>
