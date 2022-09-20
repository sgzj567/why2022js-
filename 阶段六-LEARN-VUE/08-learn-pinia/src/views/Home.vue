<template>
  <div class="home">
    <h2>Home View</h2>
    <h2>doubleCount:{{ countStore.doubleCount }}</h2>
    <h2>doubleCountAddOne:{{ countStore.doubleCountAddOne }}</h2>
    <h2>getFriendById(111):{{ countStore.getFriendById(111) }}</h2>
    <h2>ShowMEssage:{{ countStore.showMessage }}</h2>
    <h2>Count:{{ countStore.count }}</h2>
    <button @click="changeCount">+1</button>
    <ul>
      <template v-for="(item, index) in homeStore.banners" :key="index+1">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import useCount from '../pinia/counter';
import useHome from '../pinia/home'
const countStore = useCount()
const homeStore = useHome()
function changeCount() {
  countStore.increment()

}
homeStore.fetchHomeMultidata().then(res => {
  console.log("这个的action");
})

// 重置

</script>

<style scoped>
</style>
