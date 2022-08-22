<template>
  <div class="cater">我是CaterGory</div>
</template>

<script>
import eventBus from './utils/event-bus';
export default {
  methods: {
    whyEventHandler: () => {
      console.log("我是cater")
    }
  },
  created() {
    eventBus.on("whyEvent", this.whyEventHandler)
  },
  unmounted() {
    console.log("cater unmounted");
    eventBus.off("whyEvent", this.whyEventHandler)
  }
}
</script>

<style scoped>
</style>
