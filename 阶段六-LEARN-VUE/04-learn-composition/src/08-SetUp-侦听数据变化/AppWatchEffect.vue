<template>
  <div class="counter">
    <h2>{{ counter }}</h2>
    <button @click="counter++">+1</button>
    <h2>{{ name }}</h2>
    <button @click="name = 'kobe'">修改name</button>
  </div>
</template>

<script>
import { watch, ref, watchEffect } from 'vue'
export default {
  setup() {
    const counter = ref(0)
    // watch(counter,(newValue,oldValue)=>{})
    const name = ref("why")

    // watchEffect传入函数就会默认执行一次,后面监听的有变化 也会接着执行
    // watchEffect(() => {
    //   console.log("--------", counter.value);
    // })
    //2. watchEffect在执行过程中的时候会自动收集依赖 并且会返回一个数据
    const stopWatch = watchEffect(() => {
      console.log("++++++++++", counter.value)
      if (counter.value >= 5) {
        // 他的返回值就是停止侦听
        stopWatch()
      }
    })




    return {
      counter, name
    }
  }
}
</script>

<style scoped>

</style>
