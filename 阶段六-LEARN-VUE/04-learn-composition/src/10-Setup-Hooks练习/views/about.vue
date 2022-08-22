<template>
  <h2>About:{{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>

</template>
<script>
import { onActivated } from 'vue'
import useCounter from '../utils/useCounter'
import useTitle from '../utils/useTitle'


export default {
  name: "about",
  setup() {
    onActivated(() => {
      useTitle("关于")
    })

    return {
      ...useCounter(),
    }
  }
}
</script>

<style scoped>
</style>
