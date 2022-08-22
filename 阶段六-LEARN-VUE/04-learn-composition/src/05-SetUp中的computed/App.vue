<template>
  <h2>{{ fullName }}</h2>
  <h2>{{ scoreLevel }}</h2>
</template>

<script>
import { reactive, computed, ref } from 'vue';


export default {
  setup() {
    const names = reactive({
      firstName: "why",
      lastName: "kobe"
    })
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
