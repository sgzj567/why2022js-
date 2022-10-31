<template>
  <div class="home">
    <h2>message:{{ message }}</h2>
    <h2>name:{{ name }}</h2>
    <button @click="changeInfo">修改info</button>
    <h2>store.name{{ $store.state.name }}</h2>
    <h2>store.level{{ $store.state.level }}</h2>
    <button @click="changeName">修改name</button>
  </div>
</template>
<!-- options API中使用 -->
<!-- <script>
export default {
  methods: {
    changeName() {
      this.$store.commit("changeName")
    }
  }
}
</script> -->
<script setup>
import { computed, toRefs } from 'vue';
import { mapGetters, useStore } from 'vuex';

const store = useStore()
// 3.针对某个getters使用computed
const message = computed(() => store.getters.message)
const { name } = toRefs(store.state)
function changeName() {
  store.commit("changeName", "why")
}
function changeInfo() {
  store.commit("changeInfo", {
    name: "ldh",
    level: 200
  })
}
</script>

<style scoped>

</style>
