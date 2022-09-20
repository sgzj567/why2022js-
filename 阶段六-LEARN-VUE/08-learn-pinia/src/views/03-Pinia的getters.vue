<template>
  <div class="home">
    <h2>Home View</h2>
    <h2>doubleCount:{{ countStore.doubleCount }}</h2>
    <h2>doubleCountAddOne:{{ countStore.doubleCountAddOne }}</h2>
    <h2>getFriendById(111):{{ countStore.getFriendById(111) }}</h2>
    <h2>ShowMEssage:{{ countStore.showMessage }}</h2>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import useCount from '../pinia/counter';

const countStore = useCount()



// 重置

</script>

<style scoped>
</style>
