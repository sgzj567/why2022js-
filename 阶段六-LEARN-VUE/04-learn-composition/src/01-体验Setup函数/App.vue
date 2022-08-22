<template>
  <div class="calc">
    <div class="counter">{{ counter }}</div>
    <div class="box">
      <input type="button" value="+1" @click="increment">
      <input type="button" value="-1" @click="decrement">
    </div>
  </div>

</template>

<script>
import useWays from './components/useWays'
import { ref } from "vue"
export default {
  // setup里面不能写this
  setup() {
    const { counter, increment, decrement } = useWays()
    return {
      counter, increment, decrement,
    }

  }
}
</script>

<style scoped>
.calc {
  display: flex;
}

.counter {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #ccc;

}

input[type=button] {
  display: block;
  height: 20px;
  width: 30px;
}
</style>

