<template>
  <div class="counter">{{ counter }}</div>
  <add @add="addBtnClick"></add>
  <dec @sub="subBtnClick"></dec>
</template>

<script>
import add from "./Add.vue"
import dec from "./Sub.vue"
export default {
  components: {
    add,
    dec,
  },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    addBtnClick(count) {
      this.counter += count
    },
    subBtnClick(count) {
      this.counter -= count
    }
  }
}
</script>

<style scoped>
</style>
