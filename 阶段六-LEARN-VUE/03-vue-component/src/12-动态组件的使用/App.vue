<template>
  <div class="app">
    <template v-for="(item, index) in Tabs">
      <button @click="getCurrentIndex(index)">{{ item }}</button>
    </template>
    <!-- <h1>{{ Page[currentIndex] }}</h1> -->
    <component :is="Tabs[currentIndex]" name="why" :age="19" @homeBtn="BntClick"></component>
    <!-- <component is="about"></component> -->
  </div>
</template>

<script>
import About from './About.vue'
import caterGory from './caterGory.vue'
import Home from './Home.vue'

export default {
  components: {
    About,
    Home,
    caterGory,
  },
  data() {
    return {
      currentIndex: 0,
      // Page: ["Home", "About", "caterGory"],
      Tabs: ["home", "about", "caterGory"]
    }
  },
  methods: {
    getCurrentIndex(index) {
      this.currentIndex = index
    },
    BntClick(name) {
      console.log("我在App", name);
    }
  }
}
</script>

<style scoped>
</style>
