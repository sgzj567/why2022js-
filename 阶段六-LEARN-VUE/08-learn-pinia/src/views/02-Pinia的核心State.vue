<template>
  <div class="home">
    <h2>Home View</h2>
    <h2> name:{{ name }}</h2>
    <h2> level:{{ level }}</h2>
    <h2> age :{{ age }}</h2>
    <button @click="changeInfo">修改info</button>
    <button @click="resetInfo">重置info</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useUser from '../pinia/use';

const useStore = useUser()
const { name, level, age } = storeToRefs(useStore)

function changeInfo() {
  // 改变state
  // useStore.name = "kobe"
  // useStore.age = 28
  // useStore.level = 111
  useStore.$patch({
    name: "John",
    age: 33,
    level: 222
  })
}

// 重置
function resetInfo() {
  useStore.$reset()
}
</script>

<style scoped>

</style>
