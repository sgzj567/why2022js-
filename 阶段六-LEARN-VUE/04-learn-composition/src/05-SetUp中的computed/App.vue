<template>
  <h2>{{ fullName }}</h2>
  <h2>{{ scoreLevel }}</h2>
</template>

<script>
import { reactive, computed, ref } from 'vue';


export default {
  setup() {
    const names = reactive({
      firstName: "kobe",
      lastName: "bryant"
    })
    // computed完整的写法是对象 只写函数本质是在写get语法 computed返回值也是ref
    const fullName = computed(() => {
      return names.firstName + " " + names.lastName
    })

    const score = ref(20)
    const scoreLevel = computed(() => {
      return score.value > 60 ? "及格" : "不及格"
    })
    return {
      names, fullName, scoreLevel
    }
  }
}
</script>

<style scoped>

</style>
