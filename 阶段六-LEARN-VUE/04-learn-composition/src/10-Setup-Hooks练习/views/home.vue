<template>
  <h2>Home:{{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>

</template>
<script>
import useCounter from '../utils/useCounter'
import useTitle from '../utils/useTitle'
import { onActivated } from 'vue'


export default {
  name: "home",
  setup() {
    onActivated(() => {
      useTitle("家")
    })
    const { increment, decrement, counter } = useCounter()
    return {
      increment, decrement, counter
    }
  }
}
</script>

<style scoped>
</style>
