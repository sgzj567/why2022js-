<template>
  <div class="box">
    <h2>{{ message }}</h2>
    <button @click="changeMessage">修改message</button>
    <!-- 响应式 -->
    <h2>userCount:{{ infos.userCount }}</h2>
    <h2>passWord:{{ infos.passWord }}</h2>
    <button @click="changeCount">修改count</button>

    <div class="counter">{{ counter }}</div>
    <div class="box">
      <input type="button" value="+1" @click="increment">
      <input type="button" value="-1" @click="decrement">
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const message = "Hello World"
    // 记得传参
    function changeMessage(message) {
      message = "Hello Vue"
      // 虽然改变了message但是不是响应式
      console.log(message);
    }

    // 响应式  reactive里面应为复杂类型数据(数组 对象) 也只能返回复杂类型的数据
    let infos = reactive({
      userCount: "why",
      passWord: 123456,

    })
    function changeCount() {
      infos.userCount = "kobe";
      infos.passWord = 12567
    }
    // ref 响应式 主要是简单类型 复杂类型也可以
    // ref 在template会自动解包 但是在setup函数里面不会
    function useWays() {
      let counter = ref(0);
      const increment = () => {
        counter.value++
      }
      const decrement = () => {
        counter.value--
      }
      return {
        counter, increment, decrement
      }
    }
    return {
      message, changeMessage, infos, changeCount, ...useWays()
    }
  }
}
</script>

<style scoped>
</style>
