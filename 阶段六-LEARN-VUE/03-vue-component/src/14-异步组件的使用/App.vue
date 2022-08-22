<template>
  <div class="app">
    <template v-for="(item, index) in Tabs">
      <button @click="getCurrentIndex(index)">{{ item }}</button>
    </template>
    <!-- <h1>{{ Page[currentIndex] }}</h1> -->
    <!-- keep-alive 保持缓存状态  include 精准控制 exclude 除过什么其他都缓存-->
    <!-- include:name属性来自组件定义的时候的name name属性要用逗号隔开 -->
    <keep-alive include="home">
      <component :is="Tabs[currentIndex]" name="why" :age="19"></component>
    </keep-alive>
    <!-- <component is="about"></component> -->
  </div>
</template>

<script>
import { defineAsyncComponent } from '../../../01-Learn-Vue-Basic/JS/vue'
import About from './About.vue'
// import caterGory from './caterGory.vue'
import Home from './Home.vue'
// 异步组件的打包
const AsyncCaterGory = defineAsyncComponent(() => import("./caterGory.vue"))

export default {
  components: {
    About,
    Home,
    caterGory: AsyncCaterGory,
  },
  data() {
    return {
      currentIndex: 0,
      // Page: ["Home", "About", "caterGory"],
      Tabs: ["home", "about", "caterGory"],
    }
  },
  methods: {
    getCurrentIndex(index) {
      this.currentIndex = index
    },
    addBtn() {
      // this.counter++;
      console.log("3");
    }
  }
}
</script>

<style scoped>
</style>
