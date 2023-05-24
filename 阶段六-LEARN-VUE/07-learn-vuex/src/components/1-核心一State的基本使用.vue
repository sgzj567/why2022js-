<template>
  <div class="home">
    <h2>Home:{{ $store.state.counter }}</h2>
    <h2>在setup中使用:{{ counter }}</h2>
    <h2>在option中使用computed的方法获取store中的数据:{{ storeCounter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>


<script>
export default {
  computed: {
    storeCounter() {
      return this.$store.state.counter
    }
  }
}
</script>
<script setup>
import { toRefs } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const { counter } = toRefs(store.state)
function increment() {
  store.commit("increment")
}
</script>

<style scoped>

</style>
