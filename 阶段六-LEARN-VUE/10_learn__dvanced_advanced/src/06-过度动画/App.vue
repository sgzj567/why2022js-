<script setup>
import { ref } from 'vue';
import { shuffle } from 'underscore'
let nums = ref([1, 2, 3, 4, 5, 6, 7, 8])
const randomIndex = () => {
  return Math.floor(Math.random() * nums.value.length)
}
const addNumber = () => {
  nums.value.splice(randomIndex(), 0, nums.value.length)
}
const removeNumber = () => {
  nums.value.splice(randomIndex(), 1)
}
const shuffleNumber = () => {
  nums.value = shuffle(nums.value)
}
</script>

<template>
  <div class="app">
    <button @click="addNumber">添加数字</button>
    <button @click="removeNumber">删除数字</button>
    <button @click="shuffleNumber">打乱数字</button>
    <!-- 此时过度元素不可用 -->
    <transition-group tag="div" name="why">
      <template v-for="(item) in nums" :key="item">
        <span>{{item}}</span>
      </template>
    </transition-group>
  </div>


</template>
<style scoped>
span {
  margin: 15px;
  /* 行内元素使用transform没有效果 */
  display: inline-block;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.why-leave-form,
.why-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.why-enter-active,
.why-leave-active {
  transition: all 2s ease;
}

/* 针对其他移动的类 */
.why-move {
  transition: all 2s ease;
}

.why-leave-active {
  position: absolute;
}
</style>
