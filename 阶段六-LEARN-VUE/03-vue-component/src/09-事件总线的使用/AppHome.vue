<template>
  <div class="home">
    <button @click="bannerClick">
      按钮
    </button>
  </div>
</template>

<script>
import eventBus from './utils/event-bus'
export default {
  methods: {
    bannerClick() {
      console.log("我是AppHome");
      eventBus.emit("whyEvent", "why", 18, 1.88)
    }
  }
}
</script>

<style scoped>
</style>
