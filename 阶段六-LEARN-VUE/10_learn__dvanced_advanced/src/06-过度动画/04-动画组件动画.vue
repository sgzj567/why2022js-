<script setup>
import { ref } from 'vue'
import about from './page/About.vue'
import Home from './page/Home.vue'
const isShow = ref(false)

</script>

<template>
  <div class="app">
    <button @click="isShow=!isShow">切换</button>
    <!-- transition本质是在加class -->
    <!-- in-out表示先进入在离开  out-in表示先离开后进入 -->
    <!-- mode属性 -->
    <!-- appear首次出现加动画 -->
    <transition name="why" appear>
      <component :is="isShow ? Home : about">
      </component>
    </transition>
  </div>


</template>
<style scoped>
.h {
  display: inline-block;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-to,
.why-enter-leave {
  opacity: 1;
}

.why-enter-active {
  /* 不建议动画时间不一致 */
  animation: whyAnim 2s ease;
  transition: opacity 10s ease;
}

.why-leave-active {
  animation: whyAnim 2s reverse;
  transition: opacity 2s ease;
}

@keyframes whyAnim {
  0% {
    transform: scale(0.2);
    opacity: 0;
  }

  50% {
    transform: scale(0.7);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes whyAnimLeave {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-500px);
  }
}
</style>
