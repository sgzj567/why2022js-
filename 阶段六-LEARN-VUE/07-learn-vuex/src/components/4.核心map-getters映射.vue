<template>
  <div class="home">
    <h2>message:{{ message }}</h2>
    <h2>option中使用: {{ message }}</h2>
  </div>
</template>
<!-- <script>
import { computed } from 'vue';
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(["total", "message", "getFriendById"])
  }
}
</script> -->
<script setup>
import { computed, toRefs } from 'vue';
import { mapGetters, useStore } from 'vuex';
// 1.使用mapGetters
// const { message: messageFn } = mapGetters(["message"])
// const message = computed(messageFn.bind({ $store: store }))
// 2.使用getters
const store = useStore()
// const { message } = toRefs(store.getters) // 这里的不是响应式
// 3.针对某个getters使用computed
const message = computed(() => store.getters.message)
</script>

<style scoped>

</style>
