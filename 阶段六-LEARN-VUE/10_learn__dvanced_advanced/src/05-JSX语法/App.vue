<!-- <script lang="jsx" >
import { ref } from 'vue'
const count = ref(3)
const add = () => { count.value++ }
const sub = () => { count.value-- }
export default {
  setup() {
    return () => (
      <div>
        <h2>count:{count.value}</h2>
        <button onClick={add}>+1</button>
        <button onClick={sub}>-1</button>
      </div>
    )
  }
}
</script> -->
<script setup lang="jsx">
import { ref } from 'vue'
const count = ref(777)
const add = () => { count.value++ }
const sub = () => { count.value-- }
const render = () => (
  <div>
    <h2>count:{count.value}</h2>
    <button onClick={add}>+1</button>
    <button onClick={sub}>-1</button>
  </div>
)
</script>
<template>
  <render></render>
</template>


<style scoped>

</style>
