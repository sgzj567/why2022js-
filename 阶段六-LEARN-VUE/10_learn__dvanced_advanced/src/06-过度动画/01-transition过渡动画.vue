<script setup>
import { ref } from 'vue'
const isShow = ref(false)

</script>

<template>
  <div class="app">
    <button @click="isShow=!isShow">切换</button>
    <!-- transition本质是在加class -->
    <transition name="why">
      <h2 v-if="isShow" class="h">哈哈哈哈哈</h2>
    </transition>
  </div>


</template>
<style scoped>
.h {
  display: inline-block;
}

.v-leave-to,
.why-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.why-leave-from,
.why-enter-to {
  opacity: 1;
  transform: scale(1);
}

.why-leave-active,
.why-enter-active {
  transition: all 2s ease;
}
</style>
