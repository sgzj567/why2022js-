<template>
  <app-header></app-header>
  <h2>{{ message }}</h2>
  <button @click="caterGory">是否显示caterGory</button>
  <caterGory v-if="isShowCaterGory"></caterGory>
</template>

<script>
import AppHeader from './AppHeader.vue';
import eventBus from './utils/event-bus';
import caterGory from './caterGory.vue';
export default {
  data() {
    return {
      message: "hello xi",
      isShowCaterGory: true,
    }
  },
  components: {
    AppHeader,
    caterGory,
  },
  methods: {
    caterGory() {
      this.isShowCaterGory = false
    }
  },
  created() {
    eventBus.on("whyEvent", (name, age, height) => {
      console.log("我是在App中的", name, age, height);
      this.message = "hi xi"
    })
  }
}
</script>

<style scoped>
</style>
